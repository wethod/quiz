(function () {
  "use strict";

  const DATA = window.QUIZ_DATA;
  const STORE_KEY = "nonsense-supernova-v1";
  const app = document.getElementById("app");

  const ROLES = ["Founder o management", "PM o account", "Creatività", "Operations o finance", "Altro"];
  const CLIENT = ["Sì, ogni giorno", "Non ancora", "Cos'è wethod?"];

  // ---------- State ----------
  const blank = () => ({ step: "start", name: "", role: "", client: "", quiz: null, order: null, answers: [], q: 0, result: null });
  // Unito a blank(): uno stato salvato da una versione precedente non deve lasciare campi mancanti.
  let S = { ...blank(), ...(load() || {}) };
  let justStamped = false; // true solo subito dopo il timbro, per non mostrare l'avviso "già ritirato"

  function load() {
    try { const raw = localStorage.getItem(STORE_KEY); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* storage non disponibile */ }
  }
  function reset() {
    try { localStorage.removeItem(STORE_KEY); } catch (e) { /* ignore */ }
    S = blank();
    go("start");
  }
  function go(step) { S.step = step; save(); render(); window.scrollTo(0, 0); }

  // Reset per lo staff: ?reset nell'URL, oppure pressione lunga (3 s) sul logo.
  if (/[?&]reset\b/.test(location.search)) {
    try { localStorage.removeItem(STORE_KEY); } catch (e) { /* ignore */ }
    S = blank();
    history.replaceState(null, "", location.pathname);
  }

  // ---------- Helpers ----------
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const rand = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const cw = (k) => { const c = DATA.profiles[k].colorway; return `--cw-l:var(--${c}-l);--cw-d:var(--${c}-d)`; };

  const topbar = (right) => `<div class="topbar"><img class="logo" id="logo" src="assets/logo.svg" alt="wethod" draggable="false">${right ? `<span class="eyebrow">${right}</span>` : ""}</div>`;

  function bindLogo() {
    const logo = document.getElementById("logo");
    if (!logo) return;
    let t = null;
    const startPress = () => { t = setTimeout(() => { t = null; reset(); }, 3000); };
    const endPress = () => { if (t) { clearTimeout(t); t = null; } };
    logo.addEventListener("pointerdown", startPress);
    ["pointerup", "pointerleave", "pointercancel"].forEach((ev) => logo.addEventListener(ev, endPress));
    logo.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  // ---------- Screens ----------
  function viewStart() {
    return `<section class="screen start">
      ${topbar()}
      <div>
        <p class="eyebrow">Il quiz di wethod per le agenzie</p>
      </div>
      <h1>Qual è il tuo <em>nonsense?</em></h1>
      <p class="lead">Sei domande sulla vita in agenzia. Alla fine scopri il tuo nonsense e passi al nostro banco a ritirare il tuo merch.</p>
      <div class="facts"><span>90 secondi</span><span>Meno di una call</span><span>Merch incluso</span></div>
      <div class="actions">
        <button class="btn btn-primary" data-act="begin">Anche questo quiz era per ieri. Inizia</button>
      </div>
    </section>`;
  }

  function viewForm() {
    const pills = (list, key) => list.map((v) => `<button type="button" class="pill" data-pill="${key}" data-val="${esc(v)}" aria-pressed="${S[key] === v}">${esc(v)}</button>`).join("");
    const ok = S.name.trim() && S.role && S.client;
    return `<section class="screen">
      ${topbar("Prima di iniziare")}
      <h2 style="font-size:30px">Prima la burocrazia. Giuro, è veloce.</h2>
      <p class="form-note">Servono solo per il tuo risultato. Niente newsletter, promesso.</p>
      <div class="field">
        <label for="name">Come ti chiami?</label>
        <input type="text" id="name" maxlength="30" autocomplete="given-name" value="${esc(S.name)}" placeholder="Nome">
      </div>
      <div class="field"><span class="label">Di cosa ti occupi?</span><div class="pills">${pills(ROLES, "role")}</div></div>
      <div class="field"><span class="label">Usi già wethod?</span><div class="pills">${pills(CLIENT, "client")}</div></div>
      <div class="actions">
        <button class="btn btn-primary" data-act="startQuiz" id="formNext" ${ok ? "" : "disabled"}>Avanti</button>
      </div>
    </section>`;
  }

  function viewLoading(text) {
    return `<section class="screen loading">
      <div class="dots" aria-hidden="true"><i></i><i></i><i></i></div>
      <p>${esc(text)}</p>
    </section>`;
  }

  function progressText(n, total) {
    return `Domanda ${n} di ${total}.`;
  }

  function viewQuestion() {
    const quiz = DATA.quizzes[S.quiz];
    const total = quiz.questions.length;
    const q = quiz.questions[S.q];
    const order = S.order[S.q];
    const chosen = S.answers[S.q];
    const isEmoji = q.answers.every((a) => /^\p{Extended_Pictographic}/u.test(a.text) && a.text.length <= 4);
    const btns = order.map((ai) => `<button class="answer${isEmoji ? " emoji" : ""}" data-ans="${ai}" aria-pressed="${chosen === ai}">${esc(q.answers[ai].text)}</button>`).join("");
    const last = S.q === total - 1;
    return `<section class="screen">
      ${topbar(esc(quiz.title))}
      <div class="progress">
        <div class="bar"><div class="bar-fill" style="width:${((S.q + 1) / total) * 100}%"></div></div>
        <p>${progressText(S.q + 1, total)}</p>
      </div>
      <h2 class="qtitle">${esc(q.text)}</h2>
      <div class="answers${isEmoji ? " grid4" : ""}">${btns}</div>
      <div class="actions">
        <button class="btn btn-primary" data-act="next" ${chosen == null ? "disabled" : ""}>${last ? "Scopri il tuo nonsense" : "Avanti (tanto il cliente cambierà idea)"}</button>
        ${S.q > 0 ? `<button class="btn btn-ghost" data-act="prev">Torna indietro</button>` : ""}
      </div>
    </section>`;
  }

  function viewResult() {
    const r = S.result;
    const p = DATA.profiles[r.k];
    const g = p.gadget;
    return `<section class="screen">
      ${topbar("Il tuo nonsense")}
      ${r.stamped && !justStamped ? `<div class="notice stamped">Questo merch è già stato ritirato. Rifare il quiz non vale come secondo giro.</div>` : ""}
      <article class="report" style="${cw(r.k)}">
        <div class="rh">
          <div class="row"><span>Nonsense n. ${r.num}</span><span>Agency edition</span></div>
          <div class="patient"><b>${esc(S.name)}</b> · ${esc(S.role)}</div>
          <div class="dx">Il tuo profilo</div>
          <h2><span class="emo" aria-hidden="true">${p.emoji}</span>${esc(p.name)}</h2>
        </div>
        <div class="therapy">
          <span class="k">Il tuo merch</span>
          <b>${esc(g.name)}</b>
          ${g.note ? `<p>${esc(g.note)}</p>` : ""}
        </div>
        <dl>
          <div><dt>Come ti riconosci</dt><dd>${esc(p.symptoms)}</dd></div>
          <div><dt>Il tuo nonsense</dt><dd>${esc(p.nonsense)}</dd></div>
          <div class="stats">
            <div class="stat"><dt>Stanchezza</dt><dd><b>${r.tired}%</b><div class="meter"><i style="width:${r.tired}%"></i></div></dd></div>
            <div class="stat"><dt>Caffè al giorno</dt><dd><b>${r.coffee}</b><small>(${esc(p.coffeeNote)})</small></dd></div>
          </div>
          <div><dt>Consiglio di sopravvivenza</dt><dd>${esc(p.tip)}</dd></div>
        </dl>
        <div class="sign"><span>Firmato: il team wethod</span><span>Make sense with wethod.</span></div>
        ${r.stamped ? `<div class="stamp" aria-label="Ritirato">Ritirato</div>` : ""}
      </article>

      ${r.stamped
        ? `<div class="notice">Ritirato. Merch consegnato, un nonsense in meno.</div>`
        : `<button class="btn btn-stamp" data-act="stamp">Merch ritirato. Metti il timbro</button>`}

      <div class="intensive">
        <span class="k">Vuoi meno nonsense?</span>
        <h3>Prenota una demo.</h3>
        <p>Ti mostriamo come wethod rimette ordine tra progetti, persone e margini.</p>
        <a class="btn" href="${esc(DATA.demoUrl)}" target="_blank" rel="noopener">Prenota la demo</a>
      </div>

      <div class="end">
        <p><b>Fatto.</b> Puoi tornare alle tue 7 call.</p>
      </div>
    </section>`;
  }

  // ---------- Logic ----------
  // Il quiz lo scegliamo noi: tanto decide sempre qualcun altro.
  function startQuiz() {
    const idx = Math.floor(Math.random() * DATA.quizzes.length);
    S.quiz = idx;
    S.order = DATA.quizzes[idx].questions.map((q) => shuffle(q.answers.map((_, i) => i)));
    S.answers = [];
    S.q = 0;
    S.step = "loading";
    save();
    app.innerHTML = viewLoading("Mettiti comodo, il tuo nonsense sta arrivando…");
    setTimeout(() => go("question"), 1300);
  }

  function computeResult() {
    const quiz = DATA.quizzes[S.quiz];
    const score = {};
    Object.keys(DATA.profiles).forEach((k) => (score[k] = 0));
    quiz.questions.forEach((q, i) => {
      const a = q.answers[S.answers[i]];
      if (a) [...a.profiles].forEach((k) => (score[k] += 1));
    });
    const max = Math.max(...Object.values(score));
    const tied = Object.keys(score).filter((k) => score[k] === max);
    const k = tied[Math.floor(Math.random() * tied.length)];
    const p = DATA.profiles[k];
    S.result = {
      k,
      num: String(rand(1, 9999)).padStart(4, "0"),
      tired: rand(p.tiredness[0], p.tiredness[1]),
      coffee: rand(p.coffee[0], p.coffee[1]),
      stamped: false,
    };
  }

  function finishQuiz() {
    computeResult();
    S.step = "result";
    save();
    app.innerHTML = viewLoading("Sto chiedendo un parere al cliente… no, meglio di no.");
    setTimeout(() => { render(); window.scrollTo(0, 0); }, 1800);
  }

  // ---------- Render & events ----------
  function render() {
    const views = { start: viewStart, form: viewForm, question: viewQuestion, result: viewResult };
    // Se si ricarica durante un caricamento, riprende dal punto giusto.
    if (S.step === "loading") S.step = S.quiz != null ? "question" : "form";
    if (S.step === "result" && !S.result) S.step = "start";
    try {
      app.innerHTML = (views[S.step] || viewStart)();
    } catch (e) {
      // Stato salvato incompatibile (es. contenuti cambiati): si riparte da capo invece di mostrare una pagina vuota.
      try { localStorage.removeItem(STORE_KEY); } catch (err) { /* ignore */ }
      S = blank();
      app.innerHTML = viewStart();
    }
    bindLogo();
    if (S.step === "form") {
      const input = document.getElementById("name");
      input.addEventListener("input", () => {
        S.name = input.value;
        save();
        document.getElementById("formNext").disabled = !(S.name.trim() && S.role && S.client);
      });
    }
  }

  app.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act],[data-pill],[data-ans]");
    if (!el) return;

    if (el.dataset.pill) {
      S[el.dataset.pill] = el.dataset.val;
      save();
      el.parentElement.querySelectorAll(".pill").forEach((b) => b.setAttribute("aria-pressed", String(b === el)));
      document.getElementById("formNext").disabled = !(S.name.trim() && S.role && S.client);
      return;
    }
    if (el.dataset.ans) {
      S.answers[S.q] = Number(el.dataset.ans);
      save();
      el.parentElement.querySelectorAll(".answer").forEach((b) => b.setAttribute("aria-pressed", String(b === el)));
      app.querySelector('[data-act="next"]').disabled = false;
      return;
    }

    switch (el.dataset.act) {
      case "begin": go(S.result ? "result" : "form"); break;
      case "startQuiz": startQuiz(); break;
      case "next":
        if (S.q < DATA.quizzes[S.quiz].questions.length - 1) { S.q += 1; go("question"); }
        else finishQuiz();
        break;
      case "prev": S.q = Math.max(0, S.q - 1); go("question"); break;
      case "stamp": S.result.stamped = true; justStamped = true; save(); render(); window.scrollTo(0, 0); break;
    }
  });

  // Chi ha già un risultato non ricomincia da capo: torna al risultato.
  if (S.result && S.step !== "result") S.step = "result";
  render();
})();

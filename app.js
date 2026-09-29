(function () {
  "use strict";

  const DATA = window.QUIZ_DATA;
  const STORE_KEY = "nonsense-supernova-v1";
  const app = document.getElementById("app");

  const CLIENT = ["Sì, ogni giorno", "Non ancora", "Cos'è wethod?"];

  // ---------- State ----------
  const blank = () => ({ step: "start", name: "", client: "", quiz: null, order: null, answers: [], q: 0, result: null });
  let S = load() || blank();
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

  const topbar = (right) => `<div class="topbar"><img class="logo" id="logo" src="assets/logo.svg" alt="wethod" draggable="false"><span class="eyebrow">${right || "Supernova Agencies"}</span></div>`;

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
        <p class="eyebrow">Reparto Agenzie · Ambulatorio wethod</p>
      </div>
      <h1>Qual è il tuo <em>nonsense?</em></h1>
      <p class="lead">Sei domande sulla vita in agenzia. Alla fine ti diamo un referto e una terapia da ritirare al banco.</p>
      <div class="facts"><span>90 secondi</span><span>Meno di una call</span><span>Gadget incluso</span></div>
      <div class="actions">
        <button class="btn btn-primary" data-act="begin">Anche questo quiz era per ieri. Inizia</button>
      </div>
    </section>`;
  }

  function viewForm() {
    const pills = (list, key) => list.map((v) => `<button type="button" class="pill" data-pill="${key}" data-val="${esc(v)}" aria-pressed="${S[key] === v}">${esc(v)}</button>`).join("");
    const ok = S.name.trim() && S.client;
    return `<section class="screen">
      ${topbar("Accettazione")}
      <h2 style="font-size:30px">Prima la burocrazia. Giuro, è veloce.</h2>
      <div class="field">
        <label for="name">Come ti chiami?</label>
        <input type="text" id="name" maxlength="30" autocomplete="given-name" value="${esc(S.name)}" placeholder="Nome">
        <small>Serve solo per il referto.</small>
      </div>
      <div class="field"><span class="label">Usi già wethod?</span><div class="pills">${pills(CLIENT, "client")}</div></div>
      <div class="actions">
        <button class="btn btn-primary" data-act="toChoice" id="formNext" ${ok ? "" : "disabled"}>Avanti</button>
      </div>
    </section>`;
  }

  function viewChoice() {
    const cards = DATA.quizzes.map((z, i) => `<button class="choice" data-quiz="${i}"><span class="l">${"ABCD"[i] || i + 1}</span><b>${esc(z.title)}</b><span>${esc(z.tagline)}</span></button>`).join("");
    return `<section class="screen">
      ${topbar("Scegli il turno")}
      <h2 style="font-size:30px">Scegli il tuo turno</h2>
      <div class="choices">
        ${cards}
        <button class="choice random" data-quiz="random"><span class="l">?</span><b>Decidi tu</b><span>Tanto decide sempre qualcun altro.</span></button>
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
        <button class="btn btn-primary" data-act="next" ${chosen == null ? "disabled" : ""}>${last ? "Vedi il referto" : "Avanti (tanto il cliente cambierà idea)"}</button>
        ${S.q > 0 ? `<button class="btn btn-ghost" data-act="prev">Torna indietro</button>` : ""}
      </div>
    </section>`;
  }

  function viewResult() {
    const r = S.result;
    const p = DATA.profiles[r.k];
    const g = r.second ? p.secondOpinion : p.gadget;
    const therapyNote = r.second
      ? "Il secondo medico ha parlato. Attenzione: il secondo medico è anche l'ultimo."
      : g.note;
    return `<section class="screen">
      ${topbar("Referto")}
      ${r.stamped && !justStamped ? `<div class="notice stamped">Questo referto è già stato ritirato. Rifare il quiz non vale come nuova ricetta.</div>` : ""}
      <article class="report" style="${cw(r.k)}">
        <div class="rh">
          <div class="row"><span>Referto n. ${r.num}</span><span>Reparto Agenzie</span></div>
          <div class="patient">Paziente: <b>${esc(S.name)}</b></div>
          <div class="dx">Diagnosi</div>
          <h2><span class="emo" aria-hidden="true">${p.emoji}</span>${esc(p.name)}</h2>
        </div>
        <dl>
          <div><dt>Sintomi</dt><dd>${esc(p.symptoms)}</dd></div>
          <div><dt>Il tuo nonsense</dt><dd>${esc(p.nonsense)}</dd></div>
          <div class="stats">
            <div class="stat"><dt>Stanchezza</dt><dd><b>${r.tired}%</b><div class="meter"><i style="width:${r.tired}%"></i></div></dd></div>
            <div class="stat"><dt>Caffè al giorno</dt><dd><b>${r.coffee}</b><small>(${esc(p.coffeeNote)})</small></dd></div>
          </div>
          <div><dt>Consiglio di sopravvivenza</dt><dd>${esc(p.tip)}</dd></div>
        </dl>
        <div class="therapy">
          <span class="k">Terapia prescritta${r.second ? " · seconda opinione" : ""}</span>
          <b>${esc(g.name)}</b>
          ${therapyNote ? `<p>${esc(therapyNote)}</p>` : ""}
        </div>
        <div class="sign"><span>Firmato: il medico di turno</span><span>Make sense with wethod.</span></div>
        ${r.stamped ? `<div class="stamp" aria-label="Ritirato">Ritirato</div>` : ""}
      </article>

      ${r.stamped
        ? `<div class="notice">Ritirato. Terapia consegnata, paziente in via di guarigione.</div>`
        : `<div class="pharmacy">
            <p>Mostra questo referto in farmacia (è il banco qui a fianco).</p>
            ${r.second ? "" : `<button class="btn btn-line" data-act="second">Chiedi una seconda opinione</button>`}
            <div id="staffArea">
              <button class="btn btn-ghost" data-act="staff">Timbro della farmacia · solo staff</button>
            </div>
          </div>`}

      <div class="intensive">
        <span class="k">Terapia intensiva</span>
        <h3>Prenota una demo e scegli una felpa.</h3>
        <p>Nessun effetto collaterale, solo senso.</p>
        <a class="btn" href="${esc(DATA.demoUrl)}" target="_blank" rel="noopener">Prenota la demo</a>
      </div>

      <div class="end">
        <p><b>Fatto.</b> Puoi tornare alle tue 7 call.</p>
      </div>
    </section>`;
  }

  // ---------- Logic ----------
  function startQuiz(choice) {
    const idx = choice === "random" ? Math.floor(Math.random() * DATA.quizzes.length) : Number(choice);
    S.quiz = idx;
    S.order = DATA.quizzes[idx].questions.map((q) => shuffle(q.answers.map((_, i) => i)));
    S.answers = [];
    S.q = 0;
    S.step = "loading";
    save();
    app.innerHTML = viewLoading("Sto aprendo FINAL_definitivo_v9.pdf…");
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
      second: false,
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

  function showStaffConfirm() {
    const area = document.getElementById("staffArea");
    const p = DATA.profiles[S.result.k];
    const g = S.result.second ? p.secondOpinion : p.gadget;
    area.innerHTML = `<div class="staff-confirm">
      <p>Consegni ${esc(g.name)}?</p>
      <div class="row">
        <button class="btn btn-line" data-act="staffCancel">Annulla</button>
        <button class="btn btn-stamp" data-act="stamp">Timbra</button>
      </div>
    </div>`;
  }

  // ---------- Render & events ----------
  function render() {
    const views = { start: viewStart, form: viewForm, choice: viewChoice, question: viewQuestion, result: viewResult };
    // Se si ricarica durante un caricamento, riprende dal punto giusto.
    if (S.step === "loading") S.step = S.quiz != null ? "question" : "choice";
    if (S.step === "result" && !S.result) S.step = "start";
    app.innerHTML = (views[S.step] || viewStart)();
    bindLogo();
    if (S.step === "form") {
      const input = document.getElementById("name");
      input.addEventListener("input", () => {
        S.name = input.value;
        save();
        document.getElementById("formNext").disabled = !(S.name.trim() && S.client);
      });
    }
  }

  app.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act],[data-pill],[data-quiz],[data-ans]");
    if (!el) return;

    if (el.dataset.pill) {
      S[el.dataset.pill] = el.dataset.val;
      save();
      el.parentElement.querySelectorAll(".pill").forEach((b) => b.setAttribute("aria-pressed", String(b === el)));
      document.getElementById("formNext").disabled = !(S.name.trim() && S.client);
      return;
    }
    if (el.dataset.quiz) { startQuiz(el.dataset.quiz); return; }
    if (el.dataset.ans) {
      S.answers[S.q] = Number(el.dataset.ans);
      save();
      el.parentElement.querySelectorAll(".answer").forEach((b) => b.setAttribute("aria-pressed", String(b === el)));
      app.querySelector('[data-act="next"]').disabled = false;
      return;
    }

    switch (el.dataset.act) {
      case "begin": go(S.result ? "result" : "form"); break;
      case "toChoice": go("choice"); break;
      case "next":
        if (S.q < DATA.quizzes[S.quiz].questions.length - 1) { S.q += 1; go("question"); }
        else finishQuiz();
        break;
      case "prev": S.q = Math.max(0, S.q - 1); go("question"); break;
      case "second": S.result.second = true; save(); render(); break;
      case "staff": showStaffConfirm(); break;
      case "staffCancel": render(); break;
      case "stamp": S.result.stamped = true; justStamped = true; save(); render(); window.scrollTo(0, 0); break;
    }
  });

  // Chi ha già un referto non ricomincia da capo: torna al referto.
  if (S.result && S.step !== "result") S.step = "result";
  render();
})();

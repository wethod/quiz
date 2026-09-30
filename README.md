# Qual è il tuo nonsense? — quiz stand wethod, Supernova Agencies 5

Web app statica: nessun server, nessun build, nessun dato inviato da nessuna parte.
Lo stato di ogni partita resta nel browser di chi gioca (localStorage).

## File

| File | Cosa contiene |
|---|---|
| `index.html` | Il quiz |
| `data.js` | **Tutti i contenuti**: profili, risultati, merch, quiz e domande, link demo |
| `app.js` | Logica (flusso, punteggio, risultato, timbro) |
| `styles.css` | Stile |
| `cartello.html` | Cartello A4 per lo stand con il QR che punta al quiz |
| `assets/` | Font PP Mori e logo |

## Pubblicarlo

Basta caricare l'intera cartella su un hosting statico qualsiasi:

- **Netlify Drop**: trascina la cartella su https://app.netlify.com/drop
- **GitHub Pages**, **Vercel**, **Cloudflare Pages**, o una cartella sul sito wethod

Serve HTTPS (tutti questi lo danno di default).

> I font PP Mori sono commerciali: verificate che la licenza wethod copra l'uso web.
> In alternativa cancellate `assets/fonts/` e le prime tre righe di `styles.css`: il quiz userà un font di sistema.

## Cartello con il QR

Apri `cartello.html` dall'indirizzo pubblicato (es. `https://quiz.example.com/cartello.html`):
il QR punta in automatico al quiz nella stessa cartella. Poi **Stampa** (A4).
Per puntare a un altro indirizzo: `cartello.html?url=https://...` o il campo in alto.

## Allo stand

1. La persona inquadra il QR, compila nome, ruolo e se usa wethod, e parte uno dei 4 quiz a caso.
2. Dopo 6 domande scopre il suo nonsense e il merch che ha vinto.
3. Al banco, mentre si chiacchiera del prodotto, si consegna il merch e si tocca **"Merch ritirato. Metti il timbro"**.
   Il risultato diventa "Ritirato"
   e resta così anche se si ricarica la pagina o si riapre il link.
4. Dal risultato si può prenotare una demo (link "Prenota la demo").

**Reset** (per provare o per un dispositivo condiviso): tieni premuto il logo per 3 secondi,
oppure apri l'indirizzo con `?reset` in fondo (es. `.../index.html?reset`).

## Modificare i contenuti

Tutto è in `data.js`:

- `profiles`: gli 8 profili (chiavi D, F, T, X, C, B, S, P) con descrizione (`symptoms`), nonsense, fasce di stanchezza e caffè, consiglio e merch (`gadget`).
- `quizzes`: i 4 quiz (ne viene estratto uno a caso). Ogni risposta ha `profiles`, due lettere = i due profili che prendono un punto.
  Per mantenere il bilanciamento, in ogni domanda ciascuna delle 8 lettere deve comparire una sola volta.
- `demoUrl`: il link del box "Prenota la demo".

Punteggio: vince il profilo con più punti; in caso di pareggio, uno a caso tra quelli a pari merito.

## Contenuti

> Copia dei testi presenti in `data.js`. Se modificate i contenuti lì, aggiornate anche questa sezione.

### Merch

A ogni profilo corrisponde un merch: è quello che la persona ritira al banco.

| Profilo | Merch | Categoria | Nota mostrata nel risultato |
|---|---|---|---|
| ⏰ La Deadline di Ieri | Beanie "My weekend starts earlier than yours" | Cappelli | Un giorno sarà vero. |
| 🗂️ Il File FINAL_definitivo_v7 | Bucket Hat "No need for control freak" | Cappelli | Indossalo. Non sistemarlo. |
| 🧩 Il Calendario Tetris | Maglia "Planning looks like Tetris" | Maglie | Finalmente qualcuno ti capisce. |
| 📊 L'Excel con 47 Tab | Maglia "Margins are my love language" | Maglie | Una dichiarazione d'amore, finalmente in pubblico. |
| 📞 La Call che Poteva Essere una Mail | Frisbee "Super User" | Frisbee | Per lanciare lontano la prossima call inutile. |
| ✏️ Il Brief di Tre Righe | Maglia "Make sense with wethod" | Maglie | Papera o Pinguino. Scegli tu, ci fidiamo. |
| ⏱️ Il Timesheet del Venerdì | Travel mug "Coffee Now. Timesheet Later." | Tazze | Il caffè adesso. Le ore… anche, però. |
| 🔮 La Pipeline di Speranza | Cappellino "Demo Hunter" | Cappelli | Nato per andare a caccia. |

### Profili

#### ⏰ La Deadline di Ieri (D)

- **Come ti riconosci:** Controlli la mail anche sotto la doccia. I tuoi "5 minuti" durano un'ora e mezza. Hai scritto "urgente" 14 volte questa settimana. È martedì.
- **Il tuo nonsense:** Tutto è per ieri, ma nessuno sa chi ci sta lavorando oggi.
- **Stanchezza:** 85–97% · **Caffè al giorno:** 5–7 (dichiarati)
- **Consiglio di sopravvivenza:** Scrivi "urgente" una volta a settimana. Vedi l'effetto che fa.
- **Merch:** Beanie "My weekend starts earlier than yours" — Un giorno sarà vero.

#### 🗂️ Il File FINAL_definitivo_v7 (F)

- **Come ti riconosci:** Hai una cartella chiamata "definitivo_ok_ultimo_BUONO". Dentro c'è un file "v2". Noti un pixel storto da tre metri di distanza.
- **Il tuo nonsense:** La "piccola modifica" numero 12, che nessuno ha messo a budget.
- **Stanchezza:** 70–85% · **Caffè al giorno:** 3–5 (uno per revisione)
- **Consiglio di sopravvivenza:** Il file perfetto non esiste. Quello consegnato sì.
- **Merch:** Bucket Hat "No need for control freak" — Indossalo. Non sistemarlo.

#### 🧩 Il Calendario Tetris (T)

- **Come ti riconosci:** Trovi mezz'ora libera nell'agenda di sei persone. Sposti le riunioni come blocchi che cadono. Quando una settimana si incastra alla perfezione, ti commuovi un po'.
- **Il tuo nonsense:** Le stesse tre persone su dieci progetti, e il resto del team che si chiede cosa fare.
- **Stanchezza:** 65–80% · **Caffè al giorno:** 3–4 (a orari precisi)
- **Consiglio di sopravvivenza:** Ricordati che anche tu hai bisogno di una riga libera.
- **Merch:** Maglia "Planning looks like Tetris" — Finalmente qualcuno ti capisce.

#### 📊 L'Excel con 47 Tab (X)

- **Come ti riconosci:** Hai formule che nessuno osa toccare. Il tuo file ha una tab chiamata "NON CANCELLARE". Se si spegne il tuo portatile, si ferma l'agenzia.
- **Il tuo nonsense:** Scoprire a progetto chiuso che era in perdita.
- **Stanchezza:** 60–78% · **Caffè al giorno:** 2–4 (tracciati in un foglio)
- **Consiglio di sopravvivenza:** Fai un backup. Adesso. Ti aspettiamo.
- **Merch:** Maglia "Margins are my love language" — Una dichiarazione d'amore, finalmente in pubblico.

#### 📞 La Call che Poteva Essere una Mail (C)

- **Come ti riconosci:** Hai sette call oggi, due si sovrappongono. Dici "mi senti?" più spesso di "buongiorno". Sai come va ogni progetto perché, beh, ne hai parlato con tutti.
- **Il tuo nonsense:** Tre call per sapere a che punto è un progetto.
- **Stanchezza:** 75–90% · **Caffè al giorno:** 4–6 (tutti in call)
- **Consiglio di sopravvivenza:** Prossima call: prova a mandare una mail. Vedi se il mondo crolla.
- **Merch:** Frisbee "Super User" — Per lanciare lontano la prossima call inutile.

#### ✏️ Il Brief di Tre Righe (B)

- **Come ti riconosci:** Hai un'idea al minuto e ti bastano tre righe per partire. "Fai tu, ci fidiamo" per te è un invito, non un allarme. Il moodboard è pronto prima del preventivo.
- **Il tuo nonsense:** Progetti che partono da "fai tu" e finiscono con "non era proprio questo".
- **Stanchezza:** 55–75% · **Caffè al giorno:** 3–5 (per l'ispirazione)
- **Consiglio di sopravvivenza:** Tre righe vanno bene per un haiku. Per un progetto chiedine almeno quattro.
- **Merch:** Maglia "Make sense with wethod" — Papera o Pinguino. Scegli tu, ci fidiamo.

#### ⏱️ Il Timesheet del Venerdì (S)

- **Come ti riconosci:** Venerdì alle 18 provi a ricordare cosa hai fatto martedì. Non ci riesci. Scrivi "8 ore, varie". Lunedì ricominci con le migliori intenzioni.
- **Il tuo nonsense:** Ricostruire cinque giorni di lavoro a memoria, con la precisione di un oroscopo.
- **Stanchezza:** 70–88% · **Caffè al giorno:** 4–6 (stima a memoria)
- **Consiglio di sopravvivenza:** Il lunedì non si ricorda di te. Segna le ore oggi.
- **Merch:** Travel mug "Coffee Now. Timesheet Later." — Il caffè adesso. Le ore… anche, però.

#### 🔮 La Pipeline di Speranza (P)

- **Come ti riconosci:** Ogni trattativa è quella giusta. "Ci risentiamo dopo l'estate" per te vuol dire "firmiamo a settembre". Hai già staffato tre progetti che non avete ancora vinto.
- **Il tuo nonsense:** Sapere quanto fatturerai il prossimo trimestre… a sensazione.
- **Stanchezza:** 50–70% · **Caffè al giorno:** 3–5 ("sto benissimo")
- **Consiglio di sopravvivenza:** "Ci risentiamo a settembre" non è un contratto firmato.
- **Merch:** Cappellino "Demo Hunter" — Nato per andare a caccia.

### Domande e risposte

Le risposte appaiono in ordine casuale. Tra parentesi i due profili a cui la risposta dà un punto.

#### Quiz 1: Lunedì mattina

1. **Lunedì, 8:57. Apri la mail. Primo pensiero?**
   - "Cosa è già in ritardo? Ah, tutto." _(Deadline, Timesheet)_
   - "Il cliente ha risposto sulla v6? No. Ovvio." _(File, Call)_
   - "Chi è libero questa settimana? …Nessuno. Perfetto." _(Tetris, Excel)_
   - "Tre nuove richieste! Le prendiamo tutte." _(Pipeline, Brief)_
2. **Il tuo desktop è:**
   - Un cimitero di file "URGENTE". _(Deadline, Timesheet)_
   - Cartelle tipo "definitivo_ok_ultimo_BUONO". _(File, Brief)_
   - Vuoto. Vivi tra calendario e call. _(Tetris, Call)_
   - Un solo file. 47 tab. Un grafico delle previsioni. _(Excel, Pipeline)_
3. **Arriva un brief. La prima cosa che fai:**
   - Guardi la scadenza. Era ieri. _(Deadline, Tetris)_
   - Lo rileggi tre volte, poi chiedi chiarimenti. _(File, Call)_
   - Hai già un'idea prima di arrivare in fondo. _(Brief, Pipeline)_
   - Ti chiedi quante ore ci vorranno davvero. _(Excel, Timesheet)_
4. **Ti chiedono una stima "di massima". Tu:**
   - Dici "due settimane". Sono sempre due settimane. _(Deadline, Pipeline)_
   - Chiedi il brief completo. Poi i riferimenti. Poi un altro brief. _(File, Call)_
   - Conti le persone libere, poi le ore, poi ricominci. _(Tetris, Excel)_
   - Scrivi un numero a caso. Tanto poi lo aggiorniamo. _(Timesheet, Brief)_
5. **La richiesta del cliente che hai sentito più spesso quest'anno:**
   - "Ci serve un TikTok. Per domani." _(Deadline, Pipeline)_
   - "Rifacciamo il brand, ma che resti uguale." _(File, Brief)_
   - "Mettiamoci l'AI, da qualche parte." _(Timesheet, Call)_
   - "Ci mandate un report con tutti i numeri?" _(Excel, Tetris)_
6. **La buzzword che non sopporti più:**
   - "Sinergia" _(Call, Tetris)_
   - "Disruptive" (che però usi anche tu) _(Pipeline, Brief)_
   - "Data-driven" (ma i dati non li ha nessuno) _(Excel, Timesheet)_
   - "Quick win" _(Deadline, File)_

#### Quiz 2: Il cliente ha chiamato

1. **Il cliente scrive "piccola modifica veloce". Tu:**
   - Sai già che diventerà la v12. E quanto costerà. _(File, Excel)_
   - La fai subito. Tanto era per ieri. _(Deadline, Pipeline)_
   - Proponi una call per "capire meglio". _(Call, Brief)_
   - Cerchi chi può farla, e segni le ore… da qualche parte. _(Tetris, Timesheet)_
2. **Il cliente dice "facciamolo virale". Tu:**
   - Chiedi per quando. Per ieri, ovvio. _(Deadline, Timesheet)_
   - Chiedi il budget. Risposta: "quello". _(Excel, Tetris)_
   - Hai già in testa 12 versioni. Nessuna gli piacerà. _(File, Brief)_
   - Proponi una call. Poi un'altra. _(Call, Pipeline)_
3. **"Si può fare il logo più grande?"**
   - Lo fai subito. È la v14. Nessuno se ne accorgerà. _(File, Deadline)_
   - Prepari un moodboard sul perché sta bene così. _(Brief, Call)_
   - Dici "certo!", poi cerchi chi ha tempo. _(Tetris, Pipeline)_
   - Ti chiedi quante ore sono finite solo su quel logo. _(Excel, Timesheet)_
4. **La frase che senti più spesso in agenzia:**
   - "ASAP" _(Deadline, Call)_
   - "Un'ultima cosa…" _(File, Brief)_
   - "Chi ci mettiamo?" _(Tetris, Pipeline)_
   - "Ma le ore le hai segnate?" _(Timesheet, Excel)_
5. **Il premio che sogni:**
   - Un Leone a Cannes. _(Brief, Pipeline)_
   - Un ADCI Award, per farti vedere dai colleghi. _(File, Call)_
   - Un Effie: la campagna ha funzionato, numeri alla mano. _(Excel, Timesheet)_
   - Una Matita D&AD, e un giorno libero per ritirarla. _(Deadline, Tetris)_
6. **La campagna che avresti voluto firmare tu:**
   - Spotify Wrapped: i dati diventano uno show. _(Excel, Pipeline)_
   - KFC "FCK": un disastro trasformato in un'idea. _(Deadline, Brief)_
   - Dove "Real Beauty Sketches": curata in ogni dettaglio. _(File, Call)_
   - Burger King "Whopper Detour": pianificata al metro. _(Tetris, Timesheet)_

#### Quiz 3: Venerdì alle 18

1. **Venerdì, ore 18:**
   - Stai ancora consegnando qualcosa. _(Deadline, File)_
   - Stai già rifacendo il piano della prossima settimana. _(Tetris, Pipeline)_
   - Provi a ricordare dove sono finite 40 ore. _(Timesheet, Excel)_
   - Aperitivo col team (o col cliente). Ne esce un'idea. _(Call, Brief)_
2. **In vacanza tu:**
   - Rispondi "solo alle urgenze". Sono tutte urgenze. _(Deadline, Call)_
   - Pensi a come rifaresti quella presentazione. _(File, Brief)_
   - Hai l'itinerario pianificato ora per ora. _(Tetris, Excel)_
   - Non ci pensi. Al rientro si vedrà. _(Timesheet, Pipeline)_
3. **Il tuo rapporto con le riunioni:**
   - Le fai in piedi, tanto devi scappare. _(Deadline, Timesheet)_
   - Ne esci con una lista di cose da sistemare. _(File, Excel)_
   - Le organizzi tu, incastrando tutti. _(Tetris, Call)_
   - È lì che nascono le idee migliori (e le trattative). _(Brief, Pipeline)_
4. **La tab del browser più vecchia è aperta da:**
   - Ieri. Era urgente. _(Deadline, Call)_
   - Tre settimane: è il riferimento per la v1. _(File, Brief)_
   - Un mese: è il planning del team. _(Tetris, Excel)_
   - Non lo sai. Sono 84 tab. _(Timesheet, Pipeline)_
5. **Il tuo rapporto con l'AI:**
   - Le fai scrivere la mail di scuse per il ritardo. _(Deadline, Timesheet)_
   - Le fai rifare la stessa immagine 40 volte. _(File, Brief)_
   - Le fai sistemare le formule. E l'agenda. _(Excel, Tetris)_
   - L'hai già messa in tutte le proposte commerciali. _(Pipeline, Call)_
6. **Il tool che non chiuderesti mai:**
   - Slack, con 43 canali silenziati. _(Call, Timesheet)_
   - Figma, con 212 frame chiamati "Frame 212". _(File, Brief)_
   - Google Sheets. Anche per la pipeline. _(Excel, Pipeline)_
   - Google Calendar, un colore per ogni cliente. _(Tetris, Deadline)_

#### Quiz 4: Vita d'agenzia

1. **Il tuo superpotere segreto:**
   - Lavorare sotto pressione come se niente fosse. _(Deadline, Tetris)_
   - Vedere il pixel storto da tre metri. _(File, Excel)_
   - Trasformare tre righe (o una call) in un'idea. _(Brief, Call)_
   - Improvvisare. E cavartela. Sempre. _(Pipeline, Timesheet)_
2. **La tua emoji più usata su Slack:**
   - 🔥 _(Deadline, Pipeline)_
   - 👀 _(File, Excel)_
   - 🙏 _(Tetris, Timesheet)_
   - 😂 _(Call, Brief)_
3. **Se il tuo lavoro fosse un film:**
   - Un action movie. Tutto di corsa, esplosioni comprese. _(Deadline, Timesheet)_
   - Un film d'autore, rigirato 12 volte. _(File, Brief)_
   - Un heist movie, pianificato al secondo. _(Tetris, Excel)_
   - Una commedia corale con lieto fine (si spera). _(Call, Pipeline)_
4. **Il tuo motto:**
   - "Fatto è meglio che perfetto." _(Deadline, Pipeline)_
   - "Perfetto è meglio che fatto." _(File, Excel)_
   - "Un passo alla volta." _(Tetris, Timesheet)_
   - "Ne parliamo davanti a un caffè?" _(Call, Brief)_
5. **L'evento di settore del cuore:**
   - Cannes Lions. Per i premi (e per il rosé). _(Brief, Pipeline)_
   - Supernova Agencies, ovviamente. _(Call, Tetris)_
   - Web Marketing Festival, per tornare con 40 pagine di appunti. _(Excel, Timesheet)_
   - Nessuno. Sei in consegna. _(Deadline, File)_
6. **Il libro sul comodino (ancora da iniziare):**
   - "Start with Why" di Simon Sinek. _(Pipeline, Call)_
   - "Alchemy" di Rory Sutherland. _(Brief, File)_
   - "Getting Things Done" di David Allen. _(Tetris, Timesheet)_
   - "Deep Work" di Cal Newport. Un giorno. _(Deadline, Excel)_

# Qual è il tuo nonsense? — quiz stand wethod, Supernova Agencies 5

Web app statica: nessun server, nessun build, nessun dato inviato da nessuna parte.
Lo stato di ogni partita resta nel browser di chi gioca (localStorage).

## File

| File | Cosa contiene |
|---|---|
| `index.html` | Il quiz |
| `data.js` | **Tutti i contenuti**: profili, referti, gadget, quiz e domande, link demo |
| `app.js` | Logica (flusso, punteggio, referto, timbro) |
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

1. La persona inquadra il QR, compila nome, ruolo e se usa wethod, sceglie uno dei 4 quiz.
2. Dopo 6 domande riceve il referto con la terapia (il gadget).
3. Al banco si tocca **"Terapia ritirata. Timbra il referto"**. Il referto diventa "Ritirato"
   e resta così anche se si ricarica la pagina o si riapre il link.
4. Chi prenota la demo dal referto riceve la felpa (verifica a voce/su schermo al banco).

**Reset** (per provare o per un dispositivo condiviso): tieni premuto il logo per 3 secondi,
oppure apri l'indirizzo con `?reset` in fondo (es. `.../index.html?reset`).

## Modificare i contenuti

Tutto è in `data.js`:

- `profiles`: gli 8 profili (chiavi D, F, T, X, C, B, S, P) con sintomi, nonsense, fasce di stanchezza e caffè, consiglio, gadget e seconda opinione.
- `quizzes`: i 4 quiz. Ogni risposta ha `profiles`, due lettere = i due profili che prendono un punto.
  Per mantenere il bilanciamento, in ogni domanda ciascuna delle 8 lettere deve comparire una sola volta.
- `demoUrl`: il link della terapia intensiva.

Punteggio: vince il profilo con più punti; in caso di pareggio, uno a caso tra quelli a pari merito.

// Contenuti del quiz. Si possono modificare testi e gadget senza toccare app.js.
// Ogni risposta assegna un punto ai due profili indicati in "profiles" (lettere: vedi chiavi di "profiles").
window.QUIZ_DATA = {
  "demoUrl": "https://www.wethod.com/prenota-la-tua-demo",
  "profiles": {
    "D": {
      "name": "La Deadline di Ieri",
      "short": "Deadline",
      "emoji": "⏰",
      "colorway": "velvet",
      "symptoms": "Controlli la mail anche sotto la doccia. I tuoi \"5 minuti\" durano un'ora e mezza. Hai scritto \"urgente\" 14 volte questa settimana. È martedì.",
      "nonsense": "Tutto è per ieri, ma nessuno sa chi ci sta lavorando oggi.",
      "tiredness": [
        85,
        97
      ],
      "coffee": [
        5,
        7
      ],
      "coffeeNote": "dichiarati",
      "tip": "Scrivi \"urgente\" una volta a settimana. Vedi l'effetto che fa.",
      "gadget": {
        "name": "Beanie \"My weekend starts earlier than yours\"",
        "note": "Un giorno sarà vero.",
        "category": "Cappelli"
      },
      "secondOpinion": {
        "name": "Borraccia \"Super User\"",
        "note": "Almeno idratati, tra una consegna e l'altra."
      }
    },
    "F": {
      "name": "Il File FINAL_definitivo_v7",
      "short": "File",
      "emoji": "🗂️",
      "colorway": "amber",
      "symptoms": "Hai una cartella chiamata \"definitivo_ok_ultimo_BUONO\". Dentro c'è un file \"v2\". Noti un pixel storto da tre metri di distanza.",
      "nonsense": "La \"piccola modifica\" numero 12, che nessuno ha messo a budget.",
      "tiredness": [
        70,
        85
      ],
      "coffee": [
        3,
        5
      ],
      "coffeeNote": "uno per revisione",
      "tip": "Il file perfetto non esiste. Quello consegnato sì.",
      "gadget": {
        "name": "Bucket Hat \"No need for control freak\"",
        "note": "Indossalo. Non sistemarlo.",
        "category": "Cappelli"
      },
      "secondOpinion": {
        "name": "Tote Bag \"Demo Hunter\"",
        "note": "Ci stanno tutte e 12 le versioni."
      }
    },
    "T": {
      "name": "Il Calendario Tetris",
      "short": "Tetris",
      "emoji": "🧩",
      "colorway": "celeste",
      "symptoms": "Trovi mezz'ora libera nell'agenda di sei persone. Sposti le riunioni come blocchi che cadono. Quando una settimana si incastra alla perfezione, ti commuovi un po'.",
      "nonsense": "Le stesse tre persone su dieci progetti, e il resto del team che si chiede cosa fare.",
      "tiredness": [
        65,
        80
      ],
      "coffee": [
        3,
        4
      ],
      "coffeeNote": "a orari precisi",
      "tip": "Ricordati che anche tu hai bisogno di una riga libera.",
      "gadget": {
        "name": "Maglia \"Planning looks like Tetris\"",
        "note": "Finalmente qualcuno ti capisce.",
        "category": "Maglie"
      },
      "secondOpinion": {
        "name": "Tazza \"Tasks of the week\"",
        "note": ""
      }
    },
    "X": {
      "name": "L'Excel con 47 Tab",
      "short": "Excel",
      "emoji": "📊",
      "colorway": "verdant",
      "symptoms": "Hai formule che nessuno osa toccare. Il tuo file ha una tab chiamata \"NON CANCELLARE\". Se si spegne il tuo portatile, si ferma l'agenzia.",
      "nonsense": "Scoprire a progetto chiuso che era in perdita.",
      "tiredness": [
        60,
        78
      ],
      "coffee": [
        2,
        4
      ],
      "coffeeNote": "tracciati in un foglio",
      "tip": "Fai un backup. Adesso. Ti aspettiamo.",
      "gadget": {
        "name": "Maglia \"Margins are my love language\"",
        "note": "Una dichiarazione d'amore, finalmente in pubblico.",
        "category": "Maglie"
      },
      "secondOpinion": {
        "name": "Cappellino \"Super User\"",
        "note": ""
      }
    },
    "C": {
      "name": "La Call che Poteva Essere una Mail",
      "short": "Call",
      "emoji": "📞",
      "colorway": "amber",
      "symptoms": "Hai sette call oggi, due si sovrappongono. Dici \"mi senti?\" più spesso di \"buongiorno\". Sai come va ogni progetto perché, beh, ne hai parlato con tutti.",
      "nonsense": "Tre call per sapere a che punto è un progetto.",
      "tiredness": [
        75,
        90
      ],
      "coffee": [
        4,
        6
      ],
      "coffeeNote": "tutti in call",
      "tip": "Prossima call: prova a mandare una mail. Vedi se il mondo crolla.",
      "gadget": {
        "name": "Frisbee \"Super User\"",
        "note": "Per lanciare lontano la prossima call inutile.",
        "category": "Frisbee"
      },
      "secondOpinion": {
        "name": "Tazza \"Demo Hunter\"",
        "note": ""
      }
    },
    "B": {
      "name": "Il Brief di Tre Righe",
      "short": "Brief",
      "emoji": "✏️",
      "colorway": "velvet",
      "symptoms": "Hai un'idea al minuto e ti bastano tre righe per partire. \"Fai tu, ci fidiamo\" per te è un invito, non un allarme. Il moodboard è pronto prima del preventivo.",
      "nonsense": "Progetti che partono da \"fai tu\" e finiscono con \"non era proprio questo\".",
      "tiredness": [
        55,
        75
      ],
      "coffee": [
        3,
        5
      ],
      "coffeeNote": "per l'ispirazione",
      "tip": "Tre righe vanno bene per un haiku. Per un progetto chiedine almeno quattro.",
      "gadget": {
        "name": "Maglia \"Make sense with wethod\"",
        "note": "Papera o Pinguino. Scegli tu, ci fidiamo.",
        "category": "Maglie"
      },
      "secondOpinion": {
        "name": "Tote Bag \"Demo Hunter\"",
        "note": ""
      }
    },
    "S": {
      "name": "Il Timesheet del Venerdì",
      "short": "Timesheet",
      "emoji": "⏱️",
      "colorway": "verdant",
      "symptoms": "Venerdì alle 18 provi a ricordare cosa hai fatto martedì. Non ci riesci. Scrivi \"8 ore, varie\". Lunedì ricominci con le migliori intenzioni.",
      "nonsense": "Ricostruire cinque giorni di lavoro a memoria, con la precisione di un oroscopo.",
      "tiredness": [
        70,
        88
      ],
      "coffee": [
        4,
        6
      ],
      "coffeeNote": "stima a memoria",
      "tip": "Il lunedì non si ricorda di te. Segna le ore oggi.",
      "gadget": {
        "name": "Travel mug \"Coffee Now. Timesheet Later.\"",
        "note": "Il caffè adesso. Le ore… anche, però.",
        "category": "Tazze"
      },
      "secondOpinion": {
        "name": "Bucket Hat \"My weekend starts earlier than yours\"",
        "note": ""
      }
    },
    "P": {
      "name": "La Pipeline di Speranza",
      "short": "Pipeline",
      "emoji": "🔮",
      "colorway": "celeste",
      "symptoms": "Ogni trattativa è quella giusta. \"Ci risentiamo dopo l'estate\" per te vuol dire \"firmiamo a settembre\". Hai già staffato tre progetti che non avete ancora vinto.",
      "nonsense": "Sapere quanto fatturerai il prossimo trimestre… a sensazione.",
      "tiredness": [
        50,
        70
      ],
      "coffee": [
        3,
        5
      ],
      "coffeeNote": "\"sto benissimo\"",
      "tip": "\"Ci risentiamo a settembre\" non è un contratto firmato.",
      "gadget": {
        "name": "Cappellino \"Demo Hunter\"",
        "note": "Nato per andare a caccia.",
        "category": "Cappelli"
      },
      "secondOpinion": {
        "name": "Tazza \"Demo Hunter\"",
        "note": ""
      }
    }
  },
  "quizzes": [
    {
      "title": "Lunedì mattina",
      "tagline": "Per chi ha appena aperto la mail.",
      "questions": [
        {
          "text": "Lunedì, 8:57. Apri la mail. Primo pensiero?",
          "sector": false,
          "answers": [
            {
              "text": "\"Cosa è già in ritardo? Ah, tutto.\"",
              "profiles": "DS"
            },
            {
              "text": "\"Il cliente ha risposto sulla v6? No. Ovvio.\"",
              "profiles": "FC"
            },
            {
              "text": "\"Chi è libero questa settimana? …Nessuno. Perfetto.\"",
              "profiles": "TX"
            },
            {
              "text": "\"Tre nuove richieste! Le prendiamo tutte.\"",
              "profiles": "PB"
            }
          ]
        },
        {
          "text": "Il tuo desktop è:",
          "sector": false,
          "answers": [
            {
              "text": "Un cimitero di file \"URGENTE\".",
              "profiles": "DS"
            },
            {
              "text": "Cartelle tipo \"definitivo_ok_ultimo_BUONO\".",
              "profiles": "FB"
            },
            {
              "text": "Vuoto. Vivi tra calendario e call.",
              "profiles": "TC"
            },
            {
              "text": "Un solo file. 47 tab. Un grafico delle previsioni.",
              "profiles": "XP"
            }
          ]
        },
        {
          "text": "Arriva un brief. La prima cosa che fai:",
          "sector": false,
          "answers": [
            {
              "text": "Guardi la scadenza. Era ieri.",
              "profiles": "DT"
            },
            {
              "text": "Lo rileggi tre volte, poi chiedi chiarimenti.",
              "profiles": "FC"
            },
            {
              "text": "Hai già un'idea prima di arrivare in fondo.",
              "profiles": "BP"
            },
            {
              "text": "Ti chiedi quante ore ci vorranno davvero.",
              "profiles": "XS"
            }
          ]
        },
        {
          "text": "Ti chiedono una stima \"di massima\". Tu:",
          "sector": false,
          "answers": [
            {
              "text": "Dici \"due settimane\". Sono sempre due settimane.",
              "profiles": "DP"
            },
            {
              "text": "Chiedi il brief completo. Poi i riferimenti. Poi un altro brief.",
              "profiles": "FC"
            },
            {
              "text": "Conti le persone libere, poi le ore, poi ricominci.",
              "profiles": "TX"
            },
            {
              "text": "Scrivi un numero a caso. Tanto poi lo aggiorniamo.",
              "profiles": "SB"
            }
          ]
        },
        {
          "text": "La richiesta del cliente che hai sentito più spesso quest'anno:",
          "sector": true,
          "answers": [
            {
              "text": "\"Ci serve un TikTok. Per domani.\"",
              "profiles": "DP"
            },
            {
              "text": "\"Rifacciamo il brand, ma che resti uguale.\"",
              "profiles": "FB"
            },
            {
              "text": "\"Mettiamoci l'AI, da qualche parte.\"",
              "profiles": "SC"
            },
            {
              "text": "\"Ci mandate un report con tutti i numeri?\"",
              "profiles": "XT"
            }
          ]
        },
        {
          "text": "La buzzword che non sopporti più:",
          "sector": true,
          "answers": [
            {
              "text": "\"Sinergia\"",
              "profiles": "CT"
            },
            {
              "text": "\"Disruptive\" (che però usi anche tu)",
              "profiles": "PB"
            },
            {
              "text": "\"Data-driven\" (ma i dati non li ha nessuno)",
              "profiles": "XS"
            },
            {
              "text": "\"Quick win\"",
              "profiles": "DF"
            }
          ]
        }
      ]
    },
    {
      "title": "Il cliente ha chiamato",
      "tagline": "Per chi ha ancora il telefono caldo.",
      "questions": [
        {
          "text": "Il cliente scrive \"piccola modifica veloce\". Tu:",
          "sector": false,
          "answers": [
            {
              "text": "Sai già che diventerà la v12. E quanto costerà.",
              "profiles": "FX"
            },
            {
              "text": "La fai subito. Tanto era per ieri.",
              "profiles": "DP"
            },
            {
              "text": "Proponi una call per \"capire meglio\".",
              "profiles": "CB"
            },
            {
              "text": "Cerchi chi può farla, e segni le ore… da qualche parte.",
              "profiles": "TS"
            }
          ]
        },
        {
          "text": "Il cliente dice \"facciamolo virale\". Tu:",
          "sector": false,
          "answers": [
            {
              "text": "Chiedi per quando. Per ieri, ovvio.",
              "profiles": "DS"
            },
            {
              "text": "Chiedi il budget. Risposta: \"quello\".",
              "profiles": "XT"
            },
            {
              "text": "Hai già in testa 12 versioni. Nessuna gli piacerà.",
              "profiles": "FB"
            },
            {
              "text": "Proponi una call. Poi un'altra.",
              "profiles": "CP"
            }
          ]
        },
        {
          "text": "\"Si può fare il logo più grande?\"",
          "sector": false,
          "answers": [
            {
              "text": "Lo fai subito. È la v14. Nessuno se ne accorgerà.",
              "profiles": "FD"
            },
            {
              "text": "Prepari un moodboard sul perché sta bene così.",
              "profiles": "BC"
            },
            {
              "text": "Dici \"certo!\", poi cerchi chi ha tempo.",
              "profiles": "TP"
            },
            {
              "text": "Ti chiedi quante ore sono finite solo su quel logo.",
              "profiles": "XS"
            }
          ]
        },
        {
          "text": "La frase che senti più spesso in agenzia:",
          "sector": false,
          "answers": [
            {
              "text": "\"ASAP\"",
              "profiles": "DC"
            },
            {
              "text": "\"Un'ultima cosa…\"",
              "profiles": "FB"
            },
            {
              "text": "\"Chi ci mettiamo?\"",
              "profiles": "TP"
            },
            {
              "text": "\"Ma le ore le hai segnate?\"",
              "profiles": "SX"
            }
          ]
        },
        {
          "text": "Il premio che sogni:",
          "sector": true,
          "answers": [
            {
              "text": "Un Leone a Cannes.",
              "profiles": "BP"
            },
            {
              "text": "Un ADCI Award, per farti vedere dai colleghi.",
              "profiles": "FC"
            },
            {
              "text": "Un Effie: la campagna ha funzionato, numeri alla mano.",
              "profiles": "XS"
            },
            {
              "text": "Una Matita D&AD, e un giorno libero per ritirarla.",
              "profiles": "DT"
            }
          ]
        },
        {
          "text": "La campagna che avresti voluto firmare tu:",
          "sector": true,
          "answers": [
            {
              "text": "Spotify Wrapped: i dati diventano uno show.",
              "profiles": "XP"
            },
            {
              "text": "KFC \"FCK\": un disastro trasformato in un'idea.",
              "profiles": "DB"
            },
            {
              "text": "Dove \"Real Beauty Sketches\": curata in ogni dettaglio.",
              "profiles": "FC"
            },
            {
              "text": "Burger King \"Whopper Detour\": pianificata al metro.",
              "profiles": "TS"
            }
          ]
        }
      ]
    },
    {
      "title": "Venerdì alle 18",
      "tagline": "Per chi sta per chiudere il portatile. Forse.",
      "questions": [
        {
          "text": "Venerdì, ore 18:",
          "sector": false,
          "answers": [
            {
              "text": "Stai ancora consegnando qualcosa.",
              "profiles": "DF"
            },
            {
              "text": "Stai già rifacendo il piano della prossima settimana.",
              "profiles": "TP"
            },
            {
              "text": "Provi a ricordare dove sono finite 40 ore.",
              "profiles": "SX"
            },
            {
              "text": "Aperitivo col team (o col cliente). Ne esce un'idea.",
              "profiles": "CB"
            }
          ]
        },
        {
          "text": "In vacanza tu:",
          "sector": false,
          "answers": [
            {
              "text": "Rispondi \"solo alle urgenze\". Sono tutte urgenze.",
              "profiles": "DC"
            },
            {
              "text": "Pensi a come rifaresti quella presentazione.",
              "profiles": "FB"
            },
            {
              "text": "Hai l'itinerario pianificato ora per ora.",
              "profiles": "TX"
            },
            {
              "text": "Non ci pensi. Al rientro si vedrà.",
              "profiles": "SP"
            }
          ]
        },
        {
          "text": "Il tuo rapporto con le riunioni:",
          "sector": false,
          "answers": [
            {
              "text": "Le fai in piedi, tanto devi scappare.",
              "profiles": "DS"
            },
            {
              "text": "Ne esci con una lista di cose da sistemare.",
              "profiles": "FX"
            },
            {
              "text": "Le organizzi tu, incastrando tutti.",
              "profiles": "TC"
            },
            {
              "text": "È lì che nascono le idee migliori (e le trattative).",
              "profiles": "BP"
            }
          ]
        },
        {
          "text": "La tab del browser più vecchia è aperta da:",
          "sector": false,
          "answers": [
            {
              "text": "Ieri. Era urgente.",
              "profiles": "DC"
            },
            {
              "text": "Tre settimane: è il riferimento per la v1.",
              "profiles": "FB"
            },
            {
              "text": "Un mese: è il planning del team.",
              "profiles": "TX"
            },
            {
              "text": "Non lo sai. Sono 84 tab.",
              "profiles": "SP"
            }
          ]
        },
        {
          "text": "Il tuo rapporto con l'AI:",
          "sector": true,
          "answers": [
            {
              "text": "Le fai scrivere la mail di scuse per il ritardo.",
              "profiles": "DS"
            },
            {
              "text": "Le fai rifare la stessa immagine 40 volte.",
              "profiles": "FB"
            },
            {
              "text": "Le fai sistemare le formule. E l'agenda.",
              "profiles": "XT"
            },
            {
              "text": "L'hai già messa in tutte le proposte commerciali.",
              "profiles": "PC"
            }
          ]
        },
        {
          "text": "Il tool che non chiuderesti mai:",
          "sector": true,
          "answers": [
            {
              "text": "Slack, con 43 canali silenziati.",
              "profiles": "CS"
            },
            {
              "text": "Figma, con 212 frame chiamati \"Frame 212\".",
              "profiles": "FB"
            },
            {
              "text": "Google Sheets. Anche per la pipeline.",
              "profiles": "XP"
            },
            {
              "text": "Google Calendar, un colore per ogni cliente.",
              "profiles": "TD"
            }
          ]
        }
      ]
    },
    {
      "title": "Vita d'agenzia",
      "tagline": "Per chi ne ha viste di tutti i colori.",
      "questions": [
        {
          "text": "Il tuo superpotere segreto:",
          "sector": false,
          "answers": [
            {
              "text": "Lavorare sotto pressione come se niente fosse.",
              "profiles": "DT"
            },
            {
              "text": "Vedere il pixel storto da tre metri.",
              "profiles": "FX"
            },
            {
              "text": "Trasformare tre righe (o una call) in un'idea.",
              "profiles": "BC"
            },
            {
              "text": "Improvvisare. E cavartela. Sempre.",
              "profiles": "PS"
            }
          ]
        },
        {
          "text": "La tua emoji più usata su Slack:",
          "sector": false,
          "answers": [
            {
              "text": "🔥",
              "profiles": "DP"
            },
            {
              "text": "👀",
              "profiles": "FX"
            },
            {
              "text": "🙏",
              "profiles": "TS"
            },
            {
              "text": "😂",
              "profiles": "CB"
            }
          ]
        },
        {
          "text": "Se il tuo lavoro fosse un film:",
          "sector": false,
          "answers": [
            {
              "text": "Un action movie. Tutto di corsa, esplosioni comprese.",
              "profiles": "DS"
            },
            {
              "text": "Un film d'autore, rigirato 12 volte.",
              "profiles": "FB"
            },
            {
              "text": "Un heist movie, pianificato al secondo.",
              "profiles": "TX"
            },
            {
              "text": "Una commedia corale con lieto fine (si spera).",
              "profiles": "CP"
            }
          ]
        },
        {
          "text": "Il tuo motto:",
          "sector": false,
          "answers": [
            {
              "text": "\"Fatto è meglio che perfetto.\"",
              "profiles": "DP"
            },
            {
              "text": "\"Perfetto è meglio che fatto.\"",
              "profiles": "FX"
            },
            {
              "text": "\"Un passo alla volta.\"",
              "profiles": "TS"
            },
            {
              "text": "\"Ne parliamo davanti a un caffè?\"",
              "profiles": "CB"
            }
          ]
        },
        {
          "text": "L'evento di settore del cuore:",
          "sector": true,
          "answers": [
            {
              "text": "Cannes Lions. Per i premi (e per il rosé).",
              "profiles": "BP"
            },
            {
              "text": "Supernova Agencies, ovviamente.",
              "profiles": "CT"
            },
            {
              "text": "Web Marketing Festival, per tornare con 40 pagine di appunti.",
              "profiles": "XS"
            },
            {
              "text": "Nessuno. Sei in consegna.",
              "profiles": "DF"
            }
          ]
        },
        {
          "text": "Il libro sul comodino (ancora da iniziare):",
          "sector": true,
          "answers": [
            {
              "text": "\"Start with Why\" di Simon Sinek.",
              "profiles": "PC"
            },
            {
              "text": "\"Alchemy\" di Rory Sutherland.",
              "profiles": "BF"
            },
            {
              "text": "\"Getting Things Done\" di David Allen.",
              "profiles": "TS"
            },
            {
              "text": "\"Deep Work\" di Cal Newport. Un giorno.",
              "profiles": "DX"
            }
          ]
        }
      ]
    }
  ]
};

# angular-project-post-it (version keyvalue.xyz)

L'applicazione gestisce una collezione di post-it, ciascuno di essi consiste in un titolo, un testo, e un tag importante (true/false). L'utente può accedere all'applicazione per mezzo di un codice e nel caso in cui ne sia sprovvisto può richiederne uno. Una volta entrato nella piattaforma l'utente può decidere di creare un nuovo postit o di rimuoverne uno già esistente. L'utente può infine decidere di visualizzare l'insieme di tutti i post oppure visualizzare solo quelli considerati importanti. 

L'applicazione è strutturata dal component app, che al suo interno contiene il component postitview, che a sua volta contiene altri due componenti, denominati newpostit e deletepostit

Nello specifico:

* Il component app contiene:
  * Il template HTML (la view): mostra la schermata di login dove l'utente può inserire un codice o richiederne uno nuovo per accedere alla piattaforma
  * Il file TypeScript (il controller): qui si trova la definizione della classe postIt che verrà poi importata all'interno degli altri componenti. Lo script si occupa inoltre di gestire l'accesso dell'utente all'interno della piattaforma: si avvale della funzione di __login__ (invocata nel caso in cui l'utente dispone già di un codice) e della funzione __getKey__ (invocata nel caso in cui l'utente richieda una nuova chiave). La funzione di __login__ si occupa di scaricare, in base al codice inserito, tutti i relativi postit e di memorizzarli all'interno di un array di postit. Nel caso in cui l’utente inserisca un codice errato verrà visualizzato nell’interfaccia un messaggio che lo avvisa di tale errore. La funzione __getKey__ si occupa di richiedere una nuova chiave al servizio keyvalue.xyz e, una volta ottenuta, si occupa di fare un primo inserimento (in tal caso, essendo il primo accesso, verrà inserito un'array vuoto [] - questa scelta progettuale dipende dal fatto che se l'utente non crea alcun post durante il primo accesso, dal secondo accesso in poi, la funzione login non avrebbe ottenuto alcun oggetto associato a quel codice)
  * Il service postit-keyvalue-service: si occupa di scaricare l’array di postit relativi al codice inserito dall’utente in fase di login 
  * Il service newkey-keyvalue-service: si occupa di richiedere una nuova chiave al servizio keyvalue.xyz

* Il component postiview:
  * Il template HTML: mostra tutti i titoli dei postit dell'utente e altri tasti con i quali l'utente stesso può interagire. Tramite l'interfaccia l'utente potrà creare un nuovo postit, visualizzare solo i postit importanti. All'accesso in piattaforma l'utente visualizzerà, come detto, i titoli dei postit e potrà cliccarci sopra per visualizzarne il contenuto. In assenza di postit l'utente visualizzerà un messaggio con scritto "Non hai Post-It da visualizzare"
  * Il file TypeScript: si occupa della gestione dei vari tasti citati sopra, in particolare gestisce la funzione __logout__ qualora l'utente desideri uscire dalla piattaforma, della funzione __toggleText__ che permette di visualizzare o nascondere il contenuto di un postit e della funzione __postView__
  * Il service uploadpostit-keyvalue-service: si occupa di caricare all'interno del servizio keyvalue.xyz l'array di postit dell'utente. Tale servizio viene richiamato sia dai component newpost e deletepost (utilizzato per sovrascrivere i nuovi dati in keyvalue) sia all'interno del component app (utilizzato per caricare un'array vuoto al primo accesso dell'utente)
  * Il component newpost
  * Il component deletepostit

* Il component newpost:
  * Il template HTML: mostra la schermata di inserimento di un postit. Nel caso in cui l'utente dimentichi di inserire il titolo o il testo viene visualizzato un messaggio che lo avvisa di tale mancanza. Inoltre tale schermata offre all'utente la posibilità di segnare come 'importante' il post
  * Il file TypeScript: si occupa del salvataggio del nuovo postit all'interno dell'array di postit dell'utente e provvede subito al caricamento della nuova struttura all'interno del servizio keyvalue.xyz tramite la funzione __save__ (sovrascrive la nuova struttura a quella già presente) 

* Il component deletepostit:
  * Il template HTML: mostra il bottone "Rimuovi" all'intenro di ogni postit, con la quale è possibile rimuovere un determinato postit
  * Il fie TypeScript: si occupa della rimozione di un determinato postit dall'array di postit dell'utente e provvede subito al caricamento della nuova struttura all'interno del servizio keyvalue.xyz, tramite la funzione __delete__ (sovrascrive la nuova struttura a quella già presente) 



[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-project-post-it)

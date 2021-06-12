import { Component } from "@angular/core";
import { PostItKeyValueService } from "./postit-keyvalue-service.service";
import { NewkeyKeyvalueService } from "./newkey-keyvalue-service.service";
import { UploadpostitKeyvalueServiceService } from './postitview/uploadpostit-keyvalue-service.service';
import { switchMap } from "rxjs/operators"; //operatore in uso nella funzione getKey

export class postIt {
  titolo: string;
  testo: string;
  importante: boolean;
}
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  titolo: string = "Piattaforma di Post-It";
  msgErrore: string;
  post: Array<postIt>;
  newKey : string;
  code : string;
  constructor(private kvs: PostItKeyValueService, private newkvs : NewkeyKeyvalueService, private update : UploadpostitKeyvalueServiceService) {}
  /*
    Definisco la funzione "login" che verrà invocata nel momento in cui l'utente avrà inserito il proprio codice

    Tale funzione passa all'Observable la chiave inserita e ritorna i Post-It corrispondenti
  */
  login(key: string) {
    this.kvs
      .getData(key)
      .subscribe(
        (data : Array<postIt>) => (
          (this.post = data),
          (this.titolo = "Bentornato "+key+", è un piacere rivederti!"),
          (this.code = key)
        ),
        err => (
          (this.msgErrore = "Il codice inserito non è valido"), console.log("Errore: " + err.message)
        )
      );
  }
  /*
    Definisco la funzione "getKey" che  verrà invocata qualora l'utente non abbia ancora un codice a disposizione
  
    Tale funzione fa uso dell'operatore switchMap che permette di prendere il valore emesso dall'Observable (il nuovo codice) e usarlo come parametro nell'invocazione dell'altro Observable (utile a fare il primo upload, quando al nuovo codice non è associato nulla)

    Durante questa operazione applico la funzione substr all'intera url ricevuta, così da ricavare solo il codice di 8 caratteri di interesse, che sarà la chiave associata ai Post-It del nuovo utente
  
    L'operatore switchMap permette di evitare subiscribe annidati, rendendo il codice più leggibile.
  */
  getKey(){
    this.newkvs.newKey().pipe(
      switchMap((url) => this.update.upload(this.newKey = url.substr(25,8),[]))
    ).subscribe(() => (this.code = this.newKey, this.titolo = "Benvenuto!", this.post = []));
  }
}
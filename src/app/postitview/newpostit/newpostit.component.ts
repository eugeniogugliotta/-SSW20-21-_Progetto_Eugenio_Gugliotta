import { Component, Input, Output, EventEmitter } from '@angular/core';
import { postIt } from "../../app.component";
import { UploadpostitKeyvalueServiceService } from '../uploadpostit-keyvalue-service.service';

@Component({
  selector: 'app-newpostit',
  templateUrl: './newpostit.component.html',
  styleUrls: ['./newpostit.component.css']
})
export class NewpostitComponent {
  @Input() creaPost: boolean; 
  @Input() post : Array<postIt>;
  @Input() key : string;
  @Output() showNewPost = new EventEmitter<boolean>();
  msgErrore : string;
  newPost : postIt;
  constructor(private update: UploadpostitKeyvalueServiceService) {}
  /*
    Definisco la funzione "save" assocaita all'evento click del bottone "Salva"

    Tale funzione fa prima un controllo accertando che l'utente non abbia dimenticato ad inserire il titolo o il testo del Post-It (in tal caso stampa un messagio di errore), dopodiché crea un nuovo oggetto di tipo postIt ed inserisce al suo interno tutti i dati relativi al Post-It da creare. 
    
    Successivamente inserisce tale oggetto all'interno dell'array di postit (post) che sarà poi usato come parametro, insieme al codice utente, e verrà invocato l'Observable che si occuperà di caricare i dati su keyvalue
  */
  save(titolo : string, testo : string, importante : boolean) {
    if(titolo === "" || testo === ""){
      this.msgErrore = "inserisci tutti i dati";
    } else {
      this.newPost = new postIt();
      this.newPost.titolo = titolo;
      this.newPost.testo = testo;
      this.newPost.importante = importante;
      this.post.push(this.newPost);
      this.update.upload(this.key,this.post).subscribe();
      this.showNewPost.emit(false);
    }
  }
}

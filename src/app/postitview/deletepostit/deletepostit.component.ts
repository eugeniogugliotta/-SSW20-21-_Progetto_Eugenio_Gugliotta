import { Component, Input } from '@angular/core';
import { postIt } from '../../app.component';
import { UploadpostitKeyvalueServiceService } from '../uploadpostit-keyvalue-service.service';

@Component({
  selector: 'app-deletepostit',
  templateUrl: './deletepostit.component.html',
  styleUrls: ['./deletepostit.component.css']
})
export class DeletepostitComponent {
  @Input() post : Array<postIt>;
  @Input() deletePost : number;
  @Input() key : string;
  constructor(private update: UploadpostitKeyvalueServiceService) { }
  /*
    Definisco la funzione "delete" associata all'evento click del bottone "Rimuovi"

    Tale funzione si occupa di rimuovere dall'array di postit (post) tramite la funzione splice che prende come parametro deletePost, che corrisponde all'indice che l'elemento da rimuovere occupa all'interno dell'array, e un numero pari a 1, ciò significa che all'interno dell'array vogliamo eliminare solo un elemento, cioè quello avente indice deletePost

    Successivamente si occupa di sovrascrivere quanto rimane dell'intero array facendo uso dell'Observable, passando ad esso il codice dell'utente e l'array di postIt da caricare su keyvalue

    l'indice dell'elemento da rimuovere è ottenuto dalla funzione "indexOf()" usata in postitview.component.html, la quale restituisce -appunto - l'indice dell'elemento nell'array 
  */
  delete(){
    this.post.splice(this.deletePost, 1); 
    this.update.upload(this.key,this.post).subscribe();
  }
}
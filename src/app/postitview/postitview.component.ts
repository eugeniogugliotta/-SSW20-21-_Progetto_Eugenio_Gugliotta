import { Component, Input } from '@angular/core';
import { postIt } from '../app.component';

@Component({
  selector: 'app-postitview',
  templateUrl: './postitview.component.html',
  styleUrls: ['./postitview.component.css']
})
export class PostitviewComponent {
  viewNewPost : boolean = false;
  viewImportantPost : boolean = false;
  toDelete : number;
  constructor() { }
  @Input() postUser: Array<postIt>;
  @Input() codeUser: string;
  /*
    Definisco la funzione "logout" associata all'evento click del bottone "Esci"

    Tale funzione si limita a ricarica la pagina così da far tornare la piattaforma allo stato iniziale (simulando quindi un'effettiva uscita dal sistema)
  */
  logout() {
    window.location.reload();
  }
  /*
    Definisco la funzione "toggleText" associata all'evento click presente nel titolo di ogni Post-It 

    Tale funzione mostra/nasconde il testo associato al titolo cliccato dall'utente modificando la proprietà style.display di ciascun elemento
  */
  toggleText(el: any) {
    if (el.style.display == 'none') el.style.display = 'block';
    else el.style.display = 'none';
  }
  /*
    Definisco la funzione "postView" che è necessaria per mostrare all'utente solo i post importanti oppure l'insieme di tutti i suoi Post-It 

    Tale funzione, qualora sia richiesto dall'utente, filtra dall'insieme di tutti i Post-It solo quelli in cui la proprietà "importante" è true. La funzione si attiva non appena il booleano "viewImportantPost" passa a true, che di default è false
  */
  postView(){
    if(this.viewImportantPost) return this.postUser.filter(post=>post.importante);
    else return this.postUser;
  }
}
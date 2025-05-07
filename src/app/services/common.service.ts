import { EventEmitter, Injectable, Output } from '@angular/core';
import { resources } from '../../envoirnment/resources';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  resources = resources;
  index  = new Subject();
  order  = new Subject();
  adon   = new Subject();


  constructor() { }

  getresources(){
    return resources;
  }

  setIndex(index:any){
    this.index.next(index);
  }

  setItomfororder(order:any){
    this.order.next(order);
  }

  setadonfororder(order:any){
    this.adon.next(order);
    }
}

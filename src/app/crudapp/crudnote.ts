import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class crudnote{

    constructor(private xx:AngularFirestore){}

readnote(){
    return this.xx.collection('cost').snapshotChanges();
}
delData(docId : any){
  return this.xx.doc('cost/'+docId).delete()
}

}

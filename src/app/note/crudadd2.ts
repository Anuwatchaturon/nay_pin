import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class crudadd2{

    constructor(private fs:AngularFirestore){}

    check(){
      return this.fs.collection('cost').snapshotChanges();
  }


    createData(tmpdoc: any){
        return this.fs.collection('cost').add(tmpdoc);
    }


}

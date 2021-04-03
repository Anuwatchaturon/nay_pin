import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class crudshow{

    constructor(private fs:AngularFirestore){}

    readData(){
        return this.fs.collection('work').snapshotChanges();
    }
    delData(docId : any){
        return this.fs.doc('work/'+docId).delete()
    }


}

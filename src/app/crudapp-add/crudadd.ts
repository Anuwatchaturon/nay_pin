import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class crudadd{

    constructor(private fs:AngularFirestore){}

    createData(tmpdoc: any){
        return this.fs.collection('work').add(tmpdoc);
    }


}

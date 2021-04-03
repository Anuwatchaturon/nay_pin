import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { crudadd2 } from './crudadd2';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
gettext:String;
getdate:String;
getclear:Boolean=false;
text:String;
dateset:any;
list:any;

  constructor(public navCtrl: NavController,
    private crudfile: crudadd2,
    private alertCtrl: AlertController,
    private fs:AngularFirestore,
    public rounter : Router){ }

  ngOnInit() {

    this.crudfile.check().subscribe(data => {
      this.list = data.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        date: e.payload.doc.data()['date'.toString()],
        text: e.payload.doc.data()['text'.toString()],
    };
   });
    //console.log(this.list);
  });

  }
  back(){
    this.navCtrl.pop();
  }
  done(){
    for(let i = 0; i < this.list.length; i++) {
    }
    let tmpobj =  //db : inputform
        {text: this.gettext,
         date: this.getdate.split('T')[0],

        };
        this.fs.collection('cost').doc((9999999-(this.list.length+1)).toString()).set(tmpobj);
        //this.crudfile.createData(tmpobj);
        this.rounter.navigate(['crudapp'])

}
}


import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { crudshow } from './crudshow';
import { crudnote } from './crudnote';


@Component({
  selector: 'app-crudapp',
  templateUrl: './crudapp.page.html',
  styleUrls: ['./crudapp.page.scss'],
})
export class CrudappPage implements OnInit {

  list: any;
  gettopic: String;
  getdes: String;
  geticon: String;
  getdate: String;
  obj: any;
  text:String;
  Note:any;
  pic: String="https://sv1.picz.in.th/images/2021/03/28/DVfTVS.png";
  id:String;
  topic: String;
  des: String;
  icon: String;
  date: String;
  segmentModel:String='all';
  modalCtrl: any;
  dataReturned: any;

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    public rounter : Router,
    private crudfile: crudshow,
    public modalController: ModalController,
    private ab: crudnote) { }

    ngOnInit() {
      this.ab.readnote().subscribe(data => {
        this.Note = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          text: e.payload.doc.data()['text'.toString()],
          date: e.payload.doc.data()['date'.toString()],
      };
     });
    });
      this.crudfile.readData().subscribe(data => {
      this.list = data.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        topic: e.payload.doc.data()['topic'.toString()],
        des: e.payload.doc.data()['des'.toString()],
        icon: e.payload.doc.data()['icon'.toString()],
    };
   });
    //console.log(this.list);
  });

}
async presentConfirm(tmpitem: any) {
  let alert = this.alertCtrl.create({
    message: 'Do you want to delete ?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        }
      },
      {
        text: 'Yes',
        handler: () => {
          this.crudfile.delData(tmpitem.id); //del rowfrom DB
        }
      }
    ]
  });
  (await alert).present();
}

 async presentdel(tmpitem: any) {
  let alert = this.alertCtrl.create({
    message: 'Do you want to delete ?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        }
      },
      {
        text: 'Yes',
        handler: () => {
          this.ab.delData(tmpitem.id); //del rowfrom DB
        }
      }
    ]
  });
  (await alert).present();
}
  add() {
    this.rounter.navigate(['crudapp-add'])
  }
  showdetail() {

  }

  segmentChanged(){
    if (this.segmentModel === 'work'){
      this.pic ="https://sv1.picz.in.th/images/2021/03/28/DVfwSn.png"
    }else if (this.segmentModel === 'note'){
      this.pic ="https://sv1.picz.in.th/images/2021/03/28/DVf1ig.png"
    }else if(this.segmentModel === 'all'){
      this.pic ="https://sv1.picz.in.th/images/2021/03/28/DVfTVS.png"
    }
  }

  notetext(){
  this.rounter.navigate(['note'])
}

async openModal() {
  this.rounter.navigate(['my-modal'])

}
}

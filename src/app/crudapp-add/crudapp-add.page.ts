import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { crudadd } from './crudadd';

@Component({
  selector: 'app-crudapp-add',
  templateUrl: './crudapp-add.page.html',
  styleUrls: ['./crudapp-add.page.scss'],
})
export class CrudappAddPage implements OnInit {
  datecheck:boolean=true;
  gettopic: String;
  getdes: String;
  geticon: String;
  getdate: String;
  getdateno: String;
  newMsg1:String=" ";
  newMsg2:String=" ";
  newMsg3:String=" ";

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private crudfile: crudadd,
    public rounter : Router) { }

  ngOnInit() {
  }
  back() {
    this.navCtrl.pop();
  }

  add(){
      let tmpobj =  //db : inputform
        {topic: this.gettopic,
         des: this.getdes,
         icon: this.geticon,
        };
        this.crudfile.createData(tmpobj);
        this.rounter.navigate(['crudapp'])
        this.newMsg1=" ";
        this.newMsg2=" ";
        this.newMsg3=" ";

    }//handler

}

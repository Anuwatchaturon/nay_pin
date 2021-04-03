import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {
  name: String;
  ID: String;
  Pass: String;
  pic: String;

  form :any = [
{name: "Mail",pic:"https://sv1.picz.in.th/images/2021/04/02/DmtDSt.png",ID:"anuwatchaturonnn@hotmail.com",Pass:"NAYNE1349901002783"
},
{name: "G-mail",pic:"https://sv1.picz.in.th/images/2021/04/02/DmtAge.png",ID:"anuwatchaturonnn@hotmail.com <br> anuwat.pu.61@ubu.ac.th",Pass:"Ap2292542"
},
{name: "UBU",pic:"https://sv1.picz.in.th/images/2021/03/31/DGpjf2.png",ID:"61114440847",Pass:"Rhji7876"
},
{name: "Facebook",pic:"https://sv1.picz.in.th/images/2021/04/02/DmtqtR.png",ID:"anuwatchaturonnn@hotmail.com",Pass:"nayne0873773726Ap2292542038657"
},
{name: "Instagram",pic:"https://sv1.picz.in.th/images/2021/04/02/Dmt5o0.png",ID:"anuwatchaturonnn@hotmail.com",Pass:"nayne0873773726Ap2292542"
},
{name: "Line",pic:"https://sv1.picz.in.th/images/2021/04/02/DmtEGu.png",ID:"anuwatchaturonnn@hotmail.com",Pass:"Ap2292542"
},
{name: "App Store",pic:"https://sv1.picz.in.th/images/2021/04/02/DmtHVS.png",ID:"anuwatchaturonnn@hotmail.com",Pass:"Nayne0873773726"
},
{name: "Play Store",pic:"https://sv1.picz.in.th/images/2021/04/02/DmtrfV.png",ID:"anuwatchaturonnn@hotmail.com",Pass:"Nayne1349901002783"
},
{name: "Github",pic:"https://sv1.picz.in.th/images/2021/04/02/DmtuoE.png",ID:"Anuwatchaturon",Pass:"Nayne0873773726"
},
{name: "Steam",pic:"https://sv1.picz.in.th/images/2021/04/02/DmttlD.png",ID:"anuwatchaturonnn",Pass:"nene1349901002783"
},
{name: "Origin",pic:"https://sv1.picz.in.th/images/2021/04/02/DmtwG9.png",ID:"Hamsonn",Pass:"Ap2292542"
},
{name: "Uplay",pic:"https://sv1.picz.in.th/images/2021/04/02/DmtKBJ.png",ID:"anuwatchaturonnn@hotmail.com",Pass:"Nayne0873773726"
},
{name: "Epic Game",pic:"https://sv1.picz.in.th/images/2021/04/02/DmtZqb.png",ID:"anuwatchaturonnn@hotmail.com",Pass:"anuwat0873773726"
},
{name: "Rockstar",pic:"https://sv1.picz.in.th/images/2021/04/02/Dmt6JN.png",ID:"anuwatchaturonnn@hotmail.com",Pass:"Ap2292542"
},
{name: "Battle.net",pic:"https://sv1.picz.in.th/images/2021/04/01/DJJGsu.png",ID:"anuwatchaturonnn@hotmail.com",Pass:"Nayne0873773726"
},
  ];

  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public rounter : Router

  ) { }

  ngOnInit() {

  }

   closeModal() {
    this.navCtrl.pop();
  }

  async send(my){
    console.log(my)
  for(let i = 0; i < this.form.length; i++) {
    if(this.form[i] == my){
      this.name = this.form[i]['name'];
      this.ID = this.form[i]['ID'];
      this.Pass = this.form[i]['Pass'];
      this.pic = this.form[i]['pic'];
    }
  }

    const alert = await this.alertCtrl.create({
      header:  "  "+this.name,
      message:  "ID <br>"+this.ID +"<br> Pass <br>"+this.Pass,
      buttons: ['Close']
    });
    await alert.present();
  }

}


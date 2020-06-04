import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  productsList = [];

  constructor(private listService: ListService, private alertController: AlertController) {}

  refresh(event) {
    this.listService.getProducts().subscribe(
      (product: any) => {
        this.productsList = product;
        event.target.complete();
      }
    );
  }

  deleteProduct(id) {
    this.listService.deleteProduct(id).subscribe(
      () => {
        this.presentAlertDelete();
      }
    );
  }

  async presentAlertDelete() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>A la merde</strong>!!!',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Aceptar');
            this.listService.getProducts().subscribe(
              (resp: any) => {
                this.productsList = resp;
              }
            );
          }
        }
      ]
    });
    await alert.present();
  }

  ionViewDidEnter() {
    this.listService.getProducts().subscribe(
      (resp: any) => {
        this.productsList = resp;
      }
    );
  }
}

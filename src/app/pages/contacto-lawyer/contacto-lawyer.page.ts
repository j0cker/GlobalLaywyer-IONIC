import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
// tslint:disable-next-line: max-line-length
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Geocoder, GeocoderResult, GoogleMapsAnimation, Marker, MyLocation} from '@ionic-native/google-maps/ngx';
import { Environment } from '@ionic-native/google-maps';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
// import { CallNumber } from '@ionic-native/call-number/ngx';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contacto-lawyer',
  templateUrl: './contacto-lawyer.page.html',
  styleUrls: ['./contacto-lawyer.page.scss'],
})
export class ContactoLawyerPage implements OnInit {

  map: GoogleMap;
  loading: any;

  id_user: any;
  token: any;
  user: any;
  celUser: any;

  paymentAmount = '0.01';

  profile: any[] = [];
  servicios: any[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController, private platform: Platform, private payPal: PayPal, private dataService: DataService, private router: ActivatedRoute, private router2: Router, public toastController: ToastController) {
    this.router.params.subscribe((params: any) => {
      console.log(params);
      this.user = params;
    });
   }

  async ngOnInit() {
    await this.platform.ready();
  
    this.dataService.getServicios()
    .subscribe( (data: any[]) => {
      this.servicios = data;

    }, ( error ) => {
      console.log(error);
    });

    this.id_user = localStorage.getItem('idUsuario');
    this.token = localStorage.getItem('Token');
    console.log('[Dashboard][ngOnInit] Token: ' + this.token);
    console.log('[Dashboard][ngOnInit] ID Usuario: ' + this.id_user);

    this.dataService.getUserProfile(this.token, this.id_user )
      .subscribe( (data: any) => {
        // this.userData = data;
        // tslint:disable-next-line: triple-equals
        if (data.success == 'TRUE') {
          console.log('[Dashboard][getUserProfile]');
          this.profile = data.data[0];
          this.celUser = data.data[0].celular;
          console.log(this.celUser);
        } else {
          // this.mal(data2.description);
          console.log('Error: ' + data.description);
        }

      }, ( error ) => {
        console.log(error);
        // this.userData = 'Este es el error: ' + error.toString();
        // this.mal(error);
      });

    await this.loadMap();
    this.onButtonClick();

  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '',
      'API_KEY_FOR_BROWSER_DEBUG': ''
    });

    this.map = GoogleMaps.create('mapa', {
      camera: {
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    });

  }

  async onButtonClick() {
    this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: 'Rastreando tu ubicación...'
    });
    await this.loading.present();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      console.log(JSON.stringify(location, null ,2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30
      });

      // add a marker
      let marker: Marker = this.map.addMarkerSync({
        // title: JSON.stringify(location.latLng),
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // show the infoWindow
      marker.showInfoWindow();

      // If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('clicked!');
      });
    })
    .catch(err => {
      this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Por favor espere'
    });
    await this.loading.present();
  }

  dissmissLoading() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

  paypal(serviceLaw: any) {
    this.payPal.init({
      PayPalEnvironmentProduction: 'AVQDCttNQDb1Tp7TTybTAelNF31B1aRjNcuT-RguqKxrzNVpuPuG-hLBagxoc9hZP3IrpOV5M8wQgkHh',
      PayPalEnvironmentSandbox: 'AepP0hC4hwmUNMS1_Fu6oNYaoYDDzLiAz7r3FX07QP4L0naUwMqmPP7pZbvVcXZVp55hYvftoReWZXRd'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        // payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        languageOrLocale: 'es_MX'
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, 'MXN', serviceLaw , 'sale');
        this.payPal.renderSinglePaymentUI(payment).then(() => {

          this.presentLoading();
          // Successfully paid
          this.dataService.sendSMS2(this.user.celular)
            .subscribe((data: any) => {

                console.log('success: ' + data.success);
                // this.userData = data;
                // tslint:disable-next-line: triple-equals
                if (data.success == 'TRUE') {
                    // tslint:disable-next-line: max-line-length
                    this.router2.navigate(['/pagado', this.user.cedula]);
                    this.dissmissLoading();
                    this.bien();


                    this.dataService.sendSMSConfirm(this.celUser)
                      .subscribe((data2: any) => {

                          console.log('success: ' + data2.success);
                          // this.userData = data;
                          // tslint:disable-next-line: triple-equals
                          if (data2.success == 'TRUE') {
                              // tslint:disable-next-line: max-line-length

                          } else {
                              this.mal(data2.description);
                              console.log('Error: ' + data2.description);
                          }

                      }, (error) => {
                          console.log('Este es el error: ');
                          console.log(error);
                      });

                } else {
                    this.mal(data.description);

                    this.dissmissLoading();
                    console.log('Error: ' + data.description);
                }

            }, (error) => {
                console.log('Este es el error: ');
                console.log(error);

                // this.userData = 'Este es el error: ' + error.toString();
                this.mal('Revise su conexión a internet o contacte al administrador');
                this.dissmissLoading();
            });
          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }

  paypal2(serviceLaw: any) {
    this.dataService.sendSMS2(this.user.celular)
      .subscribe((data: any) => {

          console.log('success: ' + data.success);
          // this.userData = data;
          // tslint:disable-next-line: triple-equals
          if (data.success == 'TRUE') {
              // tslint:disable-next-line: max-line-length
              this.router2.navigate(['/pagado', this.user.cedula]);
              this.dissmissLoading();
              this.bien();
              // console.log('Funciono API Send SMS');

          } else {
              this.mal(data.description);

              this.dissmissLoading();
              console.log('Error: ' + data.description);
          }

      }, (error) => {
          console.log('Este es el error: ');
          console.log(error);

          // this.userData = 'Este es el error: ' + error.toString();
          this.mal('Revise su conexión a internet o contacte al administrador');
          this.dissmissLoading();
      });

    this.dataService.sendSMSConfirm(this.celUser)
    .subscribe((data: any) => {

        console.log('success: ' + data.success);
        // this.userData = data;
        // tslint:disable-next-line: triple-equals
        if (data.success == 'TRUE') {
            // tslint:disable-next-line: max-line-length

        } else {
            this.mal(data.description);
            console.log('Error: ' + data.description);
        }

    }, (error) => {
        console.log('Este es el error: ');
        console.log(error);
    });
  }

  confirmacion() {
    this.router2.navigate( ['/contacto-lawyer'] );
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

  async bien() {
    const toast = await this.toastController.create({
      message: 'Mensaje enviado',
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

  async mal(msj: any) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 4000,
      color: 'danger',
      position: 'bottom'
    });
    toast.present();
  }

  /*
  llamada() {
    this.callNumber.callNumber('5557921260', true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  */

}

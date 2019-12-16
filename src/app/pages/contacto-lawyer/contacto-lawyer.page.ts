import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
// tslint:disable-next-line: max-line-length
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Geocoder, GeocoderResult, GoogleMapsAnimation, Marker, MyLocation} from '@ionic-native/google-maps/ngx';
import { Environment } from '@ionic-native/google-maps';
// import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-contacto-lawyer',
  templateUrl: './contacto-lawyer.page.html',
  styleUrls: ['./contacto-lawyer.page.scss'],
})
export class ContactoLawyerPage implements OnInit {

  map: GoogleMap;
  loading: any;

  // tslint:disable-next-line: max-line-length
  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController, private platform: Platform) { }

  async ngOnInit() {
    await this.platform.ready();
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

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
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

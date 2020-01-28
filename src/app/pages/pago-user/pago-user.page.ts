import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';


@Component({
  selector: 'app-pago-user',
  templateUrl: './pago-user.page.html',
  styleUrls: ['./pago-user.page.scss'],
})
export class PagoUserPage implements OnInit {

  constructor(private payPal: PayPal) { }

  ngOnInit() {
  }

  paypal() {
    this.payPal.init({
      PayPalEnvironmentProduction: 'AVQDCttNQDb1Tp7TTybTAelNF31B1aRjNcuT-RguqKxrzNVpuPuG-hLBagxoc9hZP3IrpOV5M8wQgkHh',
      PayPalEnvironmentSandbox: 'AepP0hC4hwmUNMS1_Fu6oNYaoYDDzLiAz7r3FX07QP4L0naUwMqmPP7pZbvVcXZVp55hYvftoReWZXRd'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        // payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        const payment = new PayPalPayment('0.01', 'MXN', 'Servicio de abogado', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then(() => {
          // Successfully paid
          alert('Pago realizado con exito');
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

}

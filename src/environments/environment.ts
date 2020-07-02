// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyB1Vz-1xNif8qHk69epQCIH4raUZJSygII",
    authDomain: "ava-piensa-seguro.firebaseapp.com",
    databaseURL: "https://ava-piensa-seguro.firebaseio.com",
    projectId: "ava-piensa-seguro",
    storageBucket: "ava-piensa-seguro.appspot.com",
    messagingSenderId: "849538242425",
    appId: "1:849538242425:web:a428b7f9834e5de22a01a8",
    measurementId: "G-EXYJ4Z5DZB"
  },

  dialogflow: {
    angularBot: '59c0efd0d9b04f55bbd949bb15d9a2cd'
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

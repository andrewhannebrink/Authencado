// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBDnZGZxt9_PuKKUcxjtqBblyE83w23kME",
    authDomain: "auth-app-3e935.firebaseapp.com",
    databaseURL: "https://auth-app-3e935.firebaseio.com",
    projectId: "auth-app-3e935",
    storageBucket: "auth-app-3e935.appspot.com",
    messagingSenderId: "337494978262",
    stripeKey:"pk_test_0XxwMRI8zoJ375u64Ys7PWuT"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

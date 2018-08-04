## Authencado

Authencado is a starter repo for web apps that use authentication and credit card payments. My thought process while making Authencado was similar to how Kanye West invented the Yeezy Boost tennis shoe. I thought of the perfect starter repo for an app that needs an auth system and payment system, fully geared towards my own style. 

I plan on forking future projects from Authencado whenever I start a new user-based app. Built with Angular 6 and Firebase, Authencado features: 

* Responsive and animated UI skeleton for navigation built with Material design philosophy
* Sign up / Log in with email, Twitter, Facebook, Google
* Email confirmations for new users who sign up with email
* Reset password emails for signed out users who have forgotten their passwords.
* Reset password functionality for authorized users
* An Account Details page where signed in users can update their information
* Payments functionality with Stripe
* Lazy loaded feature modules for performance
* Customizable app-wide color theme in ``utilities/theme-variables.scss``
* Pretty icons courtesy of Font Awesome

## Set up your environment

To get started, set up ``environments/environment.ts`` and ``environments/environment.prod.ts`` as so, only switch ``production: true`` for ``environment.prod.ts``:

```
 export const environment = {
   production: false,
   firebase: {
     apiKey: "",
     authDomain: "",
     databaseURL: "",
     projectId: "",
     storageBucket: "",
     messagingSenderId: "",
     stripeKey: ""
   }
 };
 ```
 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# ByteBank

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

# 

## Dependencies (Required in case of Fake Backend inputs)

This project use a fake backend REST API [JSON Server](https://github.com/typicode/json-server)

To use JSON Server you'll need to install it using `npm`

**Install JSON Server:**

`npm install -g json-server`

**NOTE:** The file `db.json` is located in the root of project, in the folder `dados`:

`bytebank/dados/db.json`

**In another instance of Terminal (or Command Prompt), start the JSON Server:**

`cd dados`

`json-server --watch db.json`

To check your JSON Server activation status, navigate to `http://localhost:3000/` and look for `Resources` section

# 

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

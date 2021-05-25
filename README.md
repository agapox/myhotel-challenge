# MyhotelChallenge

### Single page aplication created with Angular
&nbsp;
## Challenge description

##### Create a webapp that get data from and API or mock API (any api or data, no preference).
&nbsp;

## :+1: Requirements
* A good README.md :ok_hand:
* Use of Angular 2+.
* Implement the use of the `API` or `mock API` endpoint to get data.
* Use of `Angular Reactive Forms` on the project.
* No necesary backend or databases.
* Everything must be en english (variables, comments, etc).

&nbsp;
## :metal: Challenge selected
Create a CRUD of Posts, I decided to use `jsonplaceholder` API for posts data. Here is a list of the challenge tasks:
* A service of posts `post.service` is created for managing to request of the data (get, post, put, delete).
* A `card-post` component is created for the post items to modularize and better component manipulation.
* A `views folder` is created for managing all the views, like: home, post (post-details).
* Use git for version control of the code. :octocat:
* Use of semantic commits. Ex: :octocat:
    * `feature(component, module, etc): description of the feature or modification `
    * `fix(component, module, etc): description of the fix or modification `
* Use of a SCSS a CSS preprocessor to style the application. :nail_care:

Limitations of the `jsonplaceholder` API:
* No pagination on http calls, I have to solve this in one `get API call` to retreive the lists of all posts and paginate on App.
* When `deleting` a post the `API` will respond with `{}`, also the delete of the post will not delete de `API data`.
* When `creating` a post it respond with `id: 101`, then if you do it again will respond the same `id: 101`.
* When `updating` a post it will change the data localy, the `API data` will not changed.

&nbsp;

# How to run the project 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.





# Colors Palette Challenge

##### Challenge deployed on Netlify

[https://musing-mcnulty-17f1ba.netlify.app/](https://musing-mcnulty-17f1ba.netlify.app/)

### Single page aplication created with Angular
&nbsp;
## Challenge description


##### Create a webapp that shows the color palette of a company, to provide all the teams a better and unified way of getting the oficial branding colors of the company.
&nbsp;

## :+1: Requirements
* A good README.md :ok_hand:
    * Breif introduction of the app.
    * A list of technologies and frameworks used in the project.
    * Explain how to install the dependencies and run the project.
    * Provide a production `URL` if it's the case.
* Implement the use of the `API` endpoint to get the colors and pagination.
* Reproduce the grid design with the provided colors (see [wireframe 1](https://github.com/agapox/challenge-colors/tree/master/src/assets/images/wireframe-colores-1.png)).
* When a color is clicked copy the color code to the user clipboard :clipboard: (see [wireframe 2](https://github.com/agapox/challenge-colors/tree/master/src/assets/images/wireframe-colores-2.png)).
* Show the data provided on the `API` response:
    * Name
    * Year
    * Color
    * Pantone

&nbsp;
## :metal: Extra points

* Use a frontend framework of choice for the proyect.
* Modularize the components in a proper order and with it's CSS.
* Use of flexbox for the grid.
* Use git for version control of the code. :octocat:
* Deploy the app in a server (like `Netlify`, `Heroku`, `Zeit Now`). :computer:
* Use of a CSS framework to style the application. :nail_care:

&nbsp;

# How to run the project 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

&nbsp;

Rock and Roll
:rocket: :metal: :rocket: :metal:  

&nbsp;&nbsp;&nbsp;

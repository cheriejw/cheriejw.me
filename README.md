# Cheriejw
![documentation coverage](documentation/images/coverage-badge-documentation.svg)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Milestones
- [ ] Port over existing work from Jekyll.
    - [x] Home
    - [x] About
    - [ ] Partial Projects
- [ ] Fix Navigation Bar to change display on scroll.
- [ ] Apply DRY to styles with shared styles.
- [ ] Write tests to pass existing work: Home and About.
- [ ] Code out Projects interactions without content.
- [ ] Code out Projects content.
- [ ] Write test for Projects.
- [ ] Clean up Contacts to match wireframe.
- [ ] Write test for Contacts.
- [ ] Take care of vulnerabilities.
- [ ] Ensure/implement accessibility/internationalization.
- [ ] Test reactiveness.
- [ ] Install automation: CI/CD, include tags here for build/tests pass/fail.
- [ ] Hook up analytics.
- [ ] Make LIVE!- and update resumes, social medias!
- [ ] Add fancy animation things, fix refreshing the anchor.
    - [ ] https://stackoverflow.com/questions/44441089/angular4-scrolling-to-anchor

## Wireframes
![Original Landing Page Wireframe 2018](https://raw.githubusercontent.com/cheriejw/cheriejw.github.io/master/landingpage.jpg)
![Projects Interactions](https://raw.githubusercontent.com/cheriejw/cheriejw.github.io/master/subjectproj.jpg)

## Jumping Back to Angular:
[Template Expressions](https://angular.io/guide/template-syntax)

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

## Journal
#### Project Page
This is a pain point. The are serveral ways to make the shapes. Explored:
- Images with `<area>`
- Absolute

## Z-INDEXES:
1 - Project's Divider: `src/app/projects > id="divider"`
2 - Project's Right Trapezoid: `src/app/projects > id="right-trapezoid"`
5 - NavBar: `src/app/nav > div`
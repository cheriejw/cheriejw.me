# Cheriejw
![documentation coverage](documentation/images/coverage-badge-documentation.svg)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Updating Website for Future Cherie
- About
  - In `app/about/about.component.ts`, I didn't find it necessary to absract this out in a seprate data-file.
- Projects _(Sorry, its not very DRY but, could be worse.)_
  - TO UPDATE THE CONTENT FROM SUBMENU OF PROJECT SECTION UI & ONWARD
    - In `app/projects/project-data`, there is `0`, `1`, and `2`. These represent your 3 groups in the main menu of your project section of your website.
    - In side each of these nondescript folders are `more nondescript folders`, an `index.html` file, and a `subject-info.json` file.
    - The `subject-info.json` file is where (mildly) human-readable content is. The `id` in each `projectList` item corresponds to the `more nondescript folders` referenced earlier.
    - The `more nondescript folders` (should) each have an `index.html` and a `subject-info.json` (sound familiar?)

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
- [ ] Refactors.
    - [ ] Replace `inner-html` with `ng-include`. [Documentation here.](https://www.w3schools.com/angular/angular_includes.asp)

## Wireframes
![Original Landing Page Wireframe 2018](https://raw.githubusercontent.com/cheriejw/cheriejw.github.io/master/landingpage.jpg)
![Projects Interactions](https://raw.githubusercontent.com/cheriejw/cheriejw.github.io/master/subjectproj.jpg)

## Jumping Back to Angular:
[Template Expressions](https://angular.io/guide/template-syntax)

## Documentation
[Compodoc / Documentation Tags]{https://compodoc.app/guides/jsdoc-tags.html}

To run an update on the documentation and sticker:
```
npm run doc
```

To see documentation site locally, navigate to `<PATH_TO_CLONED_DIR>/cheriejw/documentation/coverage.html` in a web browser.

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

## Perculiar Journal
- `String` vs `string`. Kept `String` for consistency, though `string` is better where useable.

## Z-INDEXES:
1 - Project's Divider: `src/app/projects > id="divider"`
2 - Project's Right Trapezoid: `src/app/projects > id="right-trapezoid"`
4 - Project's SubScreen: `src/app/projects/`
5 - NavBar: `src/app/nav > div`

## SPECIFIC USE HTML TAGS:
`h3`: for all section headers.
`h6`: for all keywords in projects.
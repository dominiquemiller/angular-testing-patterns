# Angular-Testing-Patterns
Sample testing patterns for Angular Projects.
My goal is have a single reference for Angular testing samples.  It will also serve as a 
playground to experiment with different testing techniques or scenarios.

Angular Community! Please feel free to add to this project or improve on the exisitng tests!

## Usage
Be sure to have the Angular CLI tool installed in your development environment. If you need help 
installing the Angular CLI tool go [here](https://github.com/angular/angular-cli).
### Run test suite
From your terminal type `ng test` to run unit / intergration tests or `ng e2e` ro run the end-to-end tests.
### Run dev and db server
From your terminal type `ng serve` to run development server on localhost:4200.  From terminal type `json-server --watch 
db.json` to use local DB json server on localhost:3000. 

### SPECS
- [Component with external template and router-outlet](./src/app/app.component.spec.ts)
- [Component with inline template and service dependency](./src/people/containers/people.component.spec.ts)
- [Component with external template, child-component, and route data resolver](./src/users/containers/users.component.spec.ts)
- [Synchronous Service](./src/services/sync.service.spec.ts)
- [Asynchronous Service](./src/services/async.service.spec.ts)
- [Service that uses the localStorage API](./src/services/gamer-tag.service.spec.ts)
- [Attribute directive with mouse over / out events](./src/directives/fancy-box.directive.spec.ts)
- [Component with routing and router outlet](./src/comp-with-routing/comp-with-routing.component.ts)




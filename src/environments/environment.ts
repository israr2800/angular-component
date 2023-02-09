// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    // nestedApi:'https://jsonplaceholder.typicode.com/users',
    nestedApi:'https://dummyjson.com/carts',
    loginApi: 'https://dummyjson.com',
    jsonapi: 'https://jsonplaceholder.typicode.com/todos'
  };
  
  export const apiUrl = "http://localhost:8000"
  export const metroUrl = "http://metrofas.com/api"
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
  
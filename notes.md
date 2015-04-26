## Diff between .service and .factory
* service
  * singleton
  * define members by `this.usersSearch`

* factory
  * define members by making a new object
    * ```
      var users {
        usersSearch: function(){...}
      }
      users;
      ```

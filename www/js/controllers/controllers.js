angular.module('starter.controllers', [])

.controller('loginController', function($scope) {

    var ref = new Firebase("https://paypanda.firebaseio.com");

    checkUserExists();
    
    /*
    | Function to create now use on Paypanda
    */
    $scope.createUser = function () 
    {

      var new_user_name = document.getElementById('new_user_name').value;
      var date      = new Date();
      var time      = date.getTime();
      var money     = 100000;
      var postsRef  = ref.child('users');

      postsRef.push().set({ 
        user        : new_user_name, 
        balance     : money,
        created_at  : time 
      });
      saveID(new_user_name, money)   
    }

    function saveID (user, money) 
    {
      localStorage.setItem("user", user);
      localStorage.setItem("balance", money);
      window.location = "/";
    }

    function checkUserExists () 
    {
      var user = localStorage.getItem("user");
      window.location = "#/transaction";
    }


})

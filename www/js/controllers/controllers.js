angular.module('starter.controllers', [])



.controller('loginController', function($scope) {

    var ref = new Firebase("https://paypanda.firebaseio.com");
    
    /*
    | Function to create now use on Paypanda
    */
    $scope.createUser = function () 
    {

      var new_user_name = document.getElementById('new_user_name').value;
      var date      = new Date();
      var time      = date.getTime();
      var money     = 100000;
      var postsRef  = ref.child(new_user_name + "/" + "info");

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
})




.controller('logoutController', function($scope){
    logout()
})


.controller('transactionController', function($scope){
    checkUserExists();
    var ref = new Firebase("https://paypanda.firebaseio.com/" + localStorage.getItem("user") + "/transaction");
    ref.on("value", function(snapshot) 
    {
        console.log(snapshot.val())   
        $scope.transactions = snapshot.val();
    }, 
    function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });


    $scope.createTransaction = function () 
    {
        var ref                     = new Firebase("https://paypanda.firebaseio.com");
        var user                    = localStorage.getItem("user");
        var postsRef                = ref.child( user + '/transaction');
        var transaction_title       = document.getElementById('transaction_title').value;
        var transaction_amount      = document.getElementById('transaction_amount').value;
        var transaction_description = document.getElementById('transaction_description').value;   
        postsRef.push().set({ 
            id          : Math.floor(Math.random()*1000),
            status      : "pending",
            seller      : "PayPanda",
            title       : transaction_title, 
            amount      : transaction_amount,
            description : transaction_description 
        });

        var transaction_title       = document.getElementById('transaction_title').value = "";
        var transaction_amount      = document.getElementById('transaction_amount').value = "";
        var transaction_description = document.getElementById('transaction_description').value = "";      
    }


})

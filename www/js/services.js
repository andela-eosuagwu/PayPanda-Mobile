angular.module('starter.services', [])


function logout () 
{
    localStorage.removeItem("user");
    localStorage.removeItem("balance");
    localStorage.removeItem("time");
    window.location = "/";
}

function checkUserExists () 
{
    var user = localStorage.getItem("user");
    if (typeof(user) !== 'string') 
    {
      window.location = "#/login";
    };
}
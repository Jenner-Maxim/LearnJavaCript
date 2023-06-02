scopeFunction()
document.getElementById("scopes").innerHTML = "Hi " + carName;
function scopeFunction(){
    carName = "Bugatti";
}

var scope1 = "Maxim"
document.getElementById("scope").innerHTML = window.scope1;
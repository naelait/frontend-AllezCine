function getContact()
{
// var hu = document.getElementById("hu").innerHTML;
var fname = document.getElementById("contactFirstname").value;
var lname = document.getElementById("contactLastname").value;
var email = document.getElementById("contactEmail").value;
var subjet = document.getElementById("contactSubject").value;
var message = document.getElementById("contactMessage").value;
alert(fname + "\n" + lname + "\n" + email + "\n" + subjet + "\n" + message);
}

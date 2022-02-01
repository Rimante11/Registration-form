console.log("My form exempel med varning meddelande för värje input");
const myform = document.getElementById("form");
const inputs = myform.querySelectorAll("input");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const btnSubmit = document.getElementById("submit");
const allErrors = document.querySelectorAll(".errors");

function hideErrors(){
  allErrors.forEach((eatchErrorElement) => {
    eatchErrorElement.style.display = "none";
  });
}
//hideErrors(); //invackna funktion om det funkar


myform.addEventListener("submit", e => {
  //e.preventDefault(); //om man vill stoppa browserns vanliga betyende
  hideErrors();

  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {

    if(!input.checkValidity()){
      const errorElm = document.getElementById(input.id + "errors");
      errorElm.style.display = "block";
    }
  })
  /*
  const termBox = document.getElementsByTagName("accept");
  console.log(username.value);//ser inputs i conslen
  console.log(password.value);
  console.log(termBox.checked); //för checkbox men var undefaned istället av true false
  */
});
hideErrors();
/*
btnSubmit.addEventListener("click", event => {
  console.log("Button clicked.")
});
*/
//Denna metod är bra om man vill tex on click på field visa up requirements
//exempel min 8 bokstaver osv
/*
username.addEventListener("focus", () => {
  console.log("username field has focus by click on username field");
});
*/

////AFTER 3s FOCUS ON USERNAME FIELD
/* 
setTimeout(() => {
  username.focus();
}, 3000); //sets username field in focus efter 3s page was refreshed
*/
/////////////////////////////////////////////////////////////////////////////
/*
//sätta focus to input fälltet
function setFocusToInputField(){
  var inputs = document.getElementsByTagName("input");
  inputs.focus();

}
setFocusToInputField();
/*
form.addEventListener("submit", (e)=> {
  e.preventDefault(); //preventing from submiting

  validateInputs();
});
*/
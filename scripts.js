const myArray = [];
function myFunc(el) {
  var amount = el.innerHTML;
  console.log(amount);
  document.getElementById(el.id).style.color = "#FFFFFF";
  if (myArray.length % 2 == 0) {
    document.getElementById(el.id).innerHTML = "1";
    myArray.push("1");
  } else {
    document.getElementById(el.id).innerHTML = "0";
    myArray.push("0");
  }
  console.log(myArray);
}

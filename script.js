let numOrStr = prompt("input number or string");
console.log(numOrStr);

switch (numOrStr) {
  case null:
    console.log("ви скасували");
    break;
  case "":
    console.log("Empty String");
  case !isNaN(numOrStr) || numOrStr:
    console.log(" number is Ba_NaN");
  default:
    console.log("OK!");
    break;
}

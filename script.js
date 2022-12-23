const numOrStr = prompt("input number or string");
const numOrSt = numOrStr.trim();
console.log(numOrStr);

switch (numOrSt) {
  case null:
    console.log("ви скасували");
    break;
  case "":
    console.log("Empty Str");
    break;
  case !isNaN(numOrSt) || numOrSt:
    console.log(" number is Ba_NaN");
    break;
  default:
    console.log("Okay");
    break;
}

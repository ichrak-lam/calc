let calculation = '';
let n=0
function calc(value) {
  if(n==1){
    calculation = "";
    calculation += value;
    document.getElementById('output').value = calculation;
    n--
  }
  else{
     calculation += value;
  document.getElementById('output').value = calculation;
  }
}
function dele() {
  output.value=output.value.slice(0,-1)
}
function reset() {
  calculation = '';
  document.getElementById('output').value = calculation;
}
function res() {
  try{
  let result = eval(calculation);
  document.getElementById('output').value = result;
  calculation = result.toString();
  }
  catch(er) {
    output.value="error"
  }
  n++
}
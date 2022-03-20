let ex1_Numbers = [];

document.getElementById("btn-ex1").addEventListener("click", () => {
  const inputEl = document.getElementById("txt-ex1");
  const number = inputEl.value * 1;
  inputEl.value = "";
  ex1_Numbers.push(number);
  const noNeg = getNumOfNegNum();
  const noPos = getNumOfPosNum();
  let ex10Result = '';
  if(noNeg > noPos)
    ex10Result = `Số âm nhiều hơn: ${noNeg} > ${noPos}`;
  else if(noPos > noNeg)
    ex10Result = `Số dương nhiều hơn: ${noPos} > ${noNeg}`
  else 
  ex10Result = `Số dương bằng số âm: ${noPos} = ${noNeg}`

  document.getElementById("result-ex1").innerHTML = `
                                Mảng : ${ex1_Numbers}
                                <br>
                                1.Tổng số dương: ${sumOfPosNum()}
                                <br>
                                2.Số số dương: ${getNumOfPosNum()}
                                <br>
                                3.Số nhỏ nhất: ${getMin()}
                                <br>
                                4.Số dương nhỏ nhất: ${getMinPosNum()}
                                <br>
                                5.Số chẵn cuối cùng: ${getLastEven()}
                                <br>
                                7.Sắp xếp tăng dần: ${sortArrayInAsc()}
                                <br>
                                8.Số nguyên tố đầu tiên: ${getFirstPrime()}
                                <br>
                                10. ${ex10Result}
                                    `;
});
function sumOfPosNum() {
  let sum = 0;
  ex1_Numbers.forEach((item) => {
    if (item > 0) 
        sum += item;
  });
  return sum;
}
function getMin() {
  let min = Infinity;
  ex1_Numbers.forEach((item) =>{
      if(item < min)
          min = item;
  })
  return min
}
function getNumOfPosNum() {
  let sum = 0;
  ex1_Numbers.forEach((item) => {
    if (item > 0)
        sum += 1;
  });
  return sum;
}
function getNumOfNegNum() {
  let sum = 0;
  ex1_Numbers.forEach((item) => {
    if (item < 0)
        sum += 1;
  });
  return sum;
}
function getMinPosNum(){
  let min = Infinity;
  ex1_Numbers.forEach((item) =>{
      if(item < min && item > 0)
          min = item;
  })
  if(min == Infinity)
    min = - 1;
  return min
}
function getLastEven(){
  for(var i = ex1_Numbers.length - 1; i >= 0; i--)
    if(ex1_Numbers[i] % 2 == 0)
      return ex1_Numbers[i];
  return -1;
}
function sortArrayInAsc(){
  let cloneArray = [...ex1_Numbers];
  return cloneArray.sort();
}
function isPrime(num){
  if(num <= 1)
    return false;

  for(var i = 2; i <= Math.sqrt(num); i++){
    if(num % i == 0)
      return false;
  }

  return true;

}
function getFirstPrime(){
  for(var i = 0; i < ex1_Numbers.length; i++)
    if(isPrime(ex1_Numbers[i]))
      return ex1_Numbers[i]
  return -1;
}
document.getElementById('btn-ex6').addEventListener('click', () =>{
  const pos1 = document.getElementById('txt-pos1-ex6').value*1;
  const pos2 = document.getElementById('txt-pos2-ex6').value*1;
  let cloneArray = [...ex1_Numbers];
  let temp = cloneArray[pos1];
  cloneArray[pos1] = cloneArray[pos2];
  cloneArray[pos2] = temp;
  document.getElementById('result-ex6').innerHTML = `
  Mảng ban đầu: ${ex1_Numbers}
  <br>
  Mảng sau khi swap: ${cloneArray}
  `
})

let ex9_numbers = []
let intCnt = 0;
document.getElementById('btn-ex9').addEventListener('click', () =>{
  const number = document.getElementById('txt-ex9').value*1;
  document.getElementById('txt-ex9').value = ""
  ex9_numbers.push(number)
  if(Number.isInteger(number))
    intCnt++;

  document.getElementById('result-ex9').innerHTML = `
  Mảng: ${ex9_numbers}
  <br>
  Số số nguyên: ${intCnt}
  `
})
alert("Hello");
const num = parseFloat(prompt('Enter a number'));

function fib(num){
  let arr = [0, 1];
  for (let i = 2; i < num + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
   return arr.pop();
}

alert(fib(num));

function makeCounter(x) {
  let base=x;
  let increment = function(){
    return base+=1;
  };
  let decrement = function(){
    return base-=1;
  };
  return [increment,decrement];
}

// 创建一个从 5 开始的计数器
let counter = makeCounter(5);
let counter1_inc = counter[0];
let counter1_dec = counter[1];

// 再创建一个从 10 开始的计数器
let counter2 = makeCounter(10);
let counter2_inc = counter2[0];
let counter2_dec = counter2[1];

counter1_inc(); // => 6
counter2_inc(); // => 11
counter1_inc(); // => 7
counter2_dec(); // => 10
counter1_dec(); // => 6
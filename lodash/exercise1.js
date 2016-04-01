function increment(a) {
  if (a >= 2){
      console.log('increment()');
      a-=1;
      return decrement(a);
  }else{
      console.log('increment()');
      a+=1;
      return increment(a);
  }
}

function decrement(a) {
  if (a <= 0){
      console.log('decrement()');
      a+=1;
      return increment(a);
  }else{
      console.log('decrement()');
      a-=1;
      return decrement(a);
  }
}
increment(1);
//index.js
function once(func){
    let firstResult, a=0
    return function() {
        if (a > 0){
            return firstResult
        }else{
            a+=1
            firstResult = func()
            return firstResult
        }
    }
}

function memoize(func) {
    let firstResult, b=0
    if (b==0) {
        b+=1
        firstResult=func()
        return firstResult
    }else{
        return firstResult
    }
}

const _ = {
  once: once,
  memoize: memoize,
};

module.exports = _;
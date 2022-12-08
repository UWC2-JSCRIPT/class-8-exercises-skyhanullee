let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve();
  }, 1000);
});

myPromise
  .then(function() {
    return 99;
  })
  .then(function(number) {
    console.log(number);
  });


// Promise using Math.random() for homework assignment
let mathPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    let randomNumber = Math.random();
    if(randomNumber > 0.5) {
      console.log(randomNumber);
      resolve('success');
    }
    else if(randomNumber <= 0.5) {
      console.log(randomNumber);
      reject('fail');
    }
  }, 1000);
});

mathPromise.then( (message) => {
  console.log(message);
  console.log('complete');
});

mathPromise.catch( (message) => {
  console.log(message);
  console.log('complete');
});
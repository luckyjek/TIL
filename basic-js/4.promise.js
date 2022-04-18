
function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
      if(!seconds || seconds < 0 ){
          reject(new Error('seconds가 0보다 작음'))
      }
    setTimeout(() => {resolve();
    }, seconds * 1000);
  });
}

runInDelay(3)
    .then(()=>console.log('타이머완료!'))
    // .catch(console.error)
    .catch(error => console.error(error))
    .finally(() => console.log('끝났다!'))

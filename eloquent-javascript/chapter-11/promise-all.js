function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    let array = [];
    let waitingFor = promises.length;

    for (let i = 0; i < promises.length; i++) {
      promises[i].then(element => {
        waitingFor--;
        array[i] = element;


        if (!waitingFor) {
          resolve(array);
        }
      }).catch(reject);
    }

    if (!promises.length) {
      resolve(array);
    }
  });
}

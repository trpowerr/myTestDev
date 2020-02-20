const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
        console.log('resolving the promise ...');
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});

// Две функции 
// const onResolved = (resolvedValue) => console.log(resolvedValue);
// const onRejected = (error) => console.log(error);

// myPromise.then(onResolved, onRejected);

// То же самое, но тут это записано короче
myPromise.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
});

const newPromise = new Promise((resolve, reject) => {
        const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
        return (input => {
          const buffer = new ArrayBuffer(input.length * 2);
          const bufferView = new Uint16Array(buffer);
          for (let i = 0; i < input.length; i++) {
            bufferView[i] = input.charCodeAt(i);
          }
          resolve(buffer);
        })(data);
    });

newPromise.then((value) => {
    console.log(json(value));
});

function json(data) {
    const jsonPromis = new Promise((resolve, reject) => {
        resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    });

    return jsonPromis.then((value) => {
        console.log(value);
    })
  }



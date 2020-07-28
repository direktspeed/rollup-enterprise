index.js
```js
const worker = new Worker('js/myworker.js');
worker.onmessage = ev ={
  console.log(ev);
};
worker.postMessage(null);
```

myworker.js
```js
importScripts('jspm_packages/system.js', 'config.js');

onmessage = function() {
  System.import('./worker-dependencie')
    .then(function() {
      console.log('Yes')
    })
    .catch(function(error) {
      console.error(error)
    });
};
```

worker-dependencie.js
```js
class Test {
  doSomething(cb) {
    cb('Hello');
  }
}

new Test().doSomething(text =console.log(text));
```

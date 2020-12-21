# Redux saga

Function generators

## Saga Helpers

### put

- takes an action as an argument which it dispatches
- returns the action object

```js
const samplePut = function* (id) {
  yield put({ type: "DUMMY_TYPE", id });
};
```

### call

- takes in a function/async call's name as first argument
- takes in the function/async call's arguments as second argument
- executes the function/async call
- returns `CALL: {fn: <linked function>, args: <array of arguments>}`

```js
const sampleCall = function* () {
  yield call(samplePut, 9);
};

// calling object methods
yield call([obj, obj.method], arg1, arg2, ...)
```

### apply

- alias for the object method invocation form

```js
yield apply(obj, obj.method, [arg1, arg2, ...])
```

### cps

- same as call, but particular to handling node style functions

```js
yield cps(readFile, 'path/to/file')
```

> supports same method invocatiion form as `call`

### takeEvery

- first argument is an actiion type, which it listens for
- second argument is a function name, which it calls on any dispatch of that action type, whether the linked function is currently running or not

```js
function* sampleTakeEvery() {
  yield takeEvery("ANOTHER_DUMMY_TYPE", sampleCall);
}
```

### takeLatest

same as takeEvery, except it

- gets us the latest return value of the linked function/async call
- cancels any other instance of the linked function/async call allowing only one instance at a time

```js
    fucntion* sampletakeLatest() {
        yield takeLattest('ANOTHER_DUMMY_TYPE', sampleCall)
    }
```

## Declarative Effects

Objects yielded from the generator functions

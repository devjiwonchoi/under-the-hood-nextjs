// goal: replicate useState - return [currentValue, functionToChangeValue], run function should update currentValue
// hint: use closure
// steps:
// - take param, initialValue
// -

function _useState(init) {
  let _state = init
  function _setState(value) {
    _state = value
  }
  return [_state, _setState]
}

const [foo, setFoo] = _useState(0)
console.log(foo) // expect 0
setFoo(1)
console.log(foo) // expect 1

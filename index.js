function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let deep = document.querySelector('#grand-node').querySelectorAll('div')
  console.log(deep)
}

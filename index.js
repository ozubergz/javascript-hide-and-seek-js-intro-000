function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list');
  let firstList = rankedList[0];
  let secondList = rankedList[1];

  
}

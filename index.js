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

  let firstChildren = firstList.children;

  for(let i = 0; i < firstChildren.length; i++) {
    let list = firstChildren[i]
    list.innerText = parseInt(list.textContent, 10) + n
  }

}

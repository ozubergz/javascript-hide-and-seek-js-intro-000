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
  let secondChildren = secondList.children;

  for(let i = 0; i < firstChildren.length; i++) {
    firstChildren[i].innerText = parseInt(firstChildren[i].innerHTML) + n
  }

  for(let i = 0; i < secondChildren.length; i++) {
    secondChildren[i].innerText = parseInt(secondChildren[i].innerHTML) + n
  }

}

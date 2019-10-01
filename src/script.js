console.log('script.js connected');

var inputs = document.getElementById('inputs');
var ul = document.getElementById('list');
var addNameBtn = document.getElementById('add');
var clearListBtn = document.getElementById('clear');
var pickBtn = document.getElementById('pick');
var textBox = document.getElementById('names');
var pickedDisplay = document.getElementById('pickedDisplay');
var deleteThis = document.getElementsByClassName('deleteThis');
var $ = function (selector) {
  return document.querySelector(selector);
};

// ********* ADD LI ELEMENT TO UL *********
function addToList() {
  var names = document.getElementById('names').value;
  var li = document.createElement('li');
  // li.contentEditable = 'true';
  var sDel = '<button class="deleteThis" onclick="deleteThisFunc(this)" title="Delete name">X</button>';
  let name = `<p class="name">${names}</p>`;
  if (textBox.value !== '') {
    li.innerHTML = sDel + name;
    ul.appendChild(li);

    console.log('names', names);
    console.log(ul.innerText);
  } else {
    console.log('nothing entered');
  }

  document.getElementById('names').value = '';

  // -- CONSOLE TESTS --
  console.log('enter pressed');
}

// Press enter in input field
names.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) addToList();
});
// Click on Add to List button
document.getElementById('add').onclick = function() {
  addToList();
}
// (I couldn't get it to work properly by just setting the onclick to addToList() for some reason, don't know why)

// ************ PICK RANDOM FROM LIST ************
pickBtn.addEventListener('click', function () {
  // find the length of li elements in ul
  var liLength = ul.getElementsByTagName('li').length;
  let pickedLi;
  if (liLength == 0) {
    pickedDisplay.innerHTML.value = 'Name drawn will show here';
    pickedDisplay.style.color = 'rgb(77, 77, 77)';
  } else {
    var randomNum = Math.floor(Math.random() * liLength);
    pickedLi = ul.getElementsByTagName('li')[randomNum].children[1].textContent;
    // -- DISPLAY PICKED NAME --
    document.getElementById("pickedTitle").style.display = 'none';
    // pickedDisplay.innerText = pickedLi;
    pickedDisplay.innerText = pickedLi;
    pickedDisplay.style.color = 'rgb(21, 116, 71)';
    // -- CONSOLE TESTS --
    console.log('picked name', pickedLi);
    console.log('pick button clicked');
    confetti.start(1100, 50, 450);
    // this.disabled = true;
  }
});

pickedDisplay.addEventListener('click', function () {
  pickedDisplay.innerHTML = 'Name drawn will show here';
  pickedDisplay.style.color = 'rgb(77, 77, 77)';
});

// ********* CLEAR LIST *********
clearListBtn.addEventListener('click', function (event) {
  ul.innerHTML = '';

  $('#pickedTitle').style.display = 'block';
  pickedDisplay.innerText = '';

  // -- CONSOLE TESTS --
  console.log('clear list button clicked');
});

// ************ FUNCTIONS ************

// ---- DELETE THIS FUNCTION ----
function deleteThisFunc(e) {
  e.parentNode.remove();
}

// Opening Cards function 
function openCard() {
  var allElems = document.querySelectorAll(".elem");
  var allFullElems = document.querySelectorAll(".fullElem");
  var allFullElemsBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      allFullElems[elem.id].style.display = "block";
      console.log(elem.id)
    });
  });
  allFullElemsBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      allFullElems[back.id].style.display = "none";
    });
  });
}
openCard()

function toDoList() {
  // Task Data----------------------------------------------

  var currentTask = [];
  //with quotes means key and without quote is variable of a value

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task list is empty");
  }

  // Showing task in Div Function --------------------------------
  function renderTask() {
    var allTask = document.querySelector(".allTask");
    var sum = "";
    //foreach for display tasks
    currentTask.forEach(function (elem, idx) {
      // console.log(elem.details);
      sum =
        sum +
        `<div class="task">
    <h5>${elem.task}<span class=${elem.imp}>imp</span></h5>
    
    <button id = ${idx}>Mark as Complete</button>
    </div>`;
    });

    allTask.innerHTML = sum;

    localStorage.setItem("currentTask", JSON.stringify(currentTask));
    document.querySelectorAll(".task button").forEach(function (btn) {
        btn.addEventListener("click", function () {
          currentTask.splice(btn.id, 1);

          renderTask();
        });
      });
  }

  // --------------------------------------------------------------------

  let form = document.querySelector(".addTask form ");
  let taskInput = document.querySelector(".addTask form #task-input");
  let taskDetailsInput = document.querySelector(".addTask form textarea");
  let taskCheckbox = document.querySelector(".addTask form #check");

  // Submit Button pressed function-----------------------------------
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    currentTask.push({
      task: taskInput.value,
      details: taskDetailsInput.value,
      imp: taskCheckbox.checked,
    });
    renderTask();

    taskInput.value = "";
    taskDetailsInput.value = "";
    taskCheckbox.checked = "";
  
  });
}
toDoList()

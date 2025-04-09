
// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");
// const addButton = document.querySelector(".btn");

// addButton.addEventListener("click", addTask);

// inputBox.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     addTask();
//   }
// });

// function addTask() {
//   const text = inputBox.value.trim();
//   if (text === "") {
//     alert("You must write something!");
//     return;
//   }

//   const li = document.createElement("li");

//   const number = listContainer.children.length + 1;
//   li.innerHTML = `<strong>${number}.</strong> ${text}`;

//   li.style.color = "orange";

//   const deleteBtn = document.createElement("span");
//   deleteBtn.innerHTML = "\u00d7";

//   const editBtn = document.createElement("span");
//   editBtn.innerHTML = "✏️";
//   editBtn.style.right = "40px"; 

//   li.appendChild(editBtn);
//   li.appendChild(deleteBtn);
//   listContainer.appendChild(li);

//   inputBox.value = "";

//   li.addEventListener("click", function () {
//     li.classList.toggle("checked");

//     if (li.classList.contains("checked")) {
//       li.style.color = "green";
//       li.style.textDecoration = "line-through";
//     } else {
//       li.style.color = "orange";
//       li.style.textDecoration = "none";
//     }
//   });

//   deleteBtn.addEventListener("click", function (e) {
//     e.stopPropagation();
//     if (li.classList.contains("checked")) {
//       li.remove();
//       updateTaskNumbers();
//     } else {
//       alert("Yalniz hell olunmus tasklari silmek olar.");
//     }
//   });

//   editBtn.addEventListener("click", function (e) {
//     e.stopPropagation();
//     if (li.classList.contains("checked")) {
//       alert("Hell olunmus taski redakte edmek olmaz.");
//     } else {
//       const newText = prompt("Taski deyisdirmek:", text);
//       if (newText && newText.trim() !== "") {
//         li.innerHTML = `<strong>${number}.</strong> ${newText}`;
//         li.style.color = "red";
//         li.appendChild(editBtn);
//         li.appendChild(deleteBtn);
//       }
//     }
//   });
// }

// function updateTaskNumbers() {
//   const tasks = listContainer.querySelectorAll("li");
//   tasks.forEach((task, index) => {
//     const text = task.innerText.split('. ')[1];
//     task.innerHTML = `<strong>${index + 1}.</strong> ${text}`;

//     const deleteBtn = document.createElement("span");
//     deleteBtn.innerHTML = "\u00d7";
//     const editBtn = document.createElement("span");
//     editBtn.innerHTML = "✏️";
//     editBtn.style.right = "50px";
//     task.appendChild(editBtn);
//     task.appendChild(deleteBtn);

//     task.addEventListener("click", function () {
//       task.classList.toggle("checked");
//       if (task.classList.contains("checked")) {
//         task.style.color = "green";
//         task.style.textDecoration = "line-through";
//       } else {
//         task.style.color = "red";
//         task.style.textDecoration = "none";
//       }
//     });
//   });
// }
// const deleteAllBtn = document.createElement("button");
// deleteAllBtn.textContent = "Butun tasklari sil";
// deleteAllBtn.style.marginTop = "20px";
// deleteAllBtn.style.backgroundColor = "#222";
// deleteAllBtn.style.color = "#fff";
// deleteAllBtn.style.padding = "10px 20px";
// deleteAllBtn.style.border = "none";
// deleteAllBtn.style.borderRadius = "10px";
// deleteAllBtn.style.cursor = "pointer";
// deleteAllBtn.style.display = "block";
// deleteAllBtn.style.marginLeft = "auto";
// deleteAllBtn.style.marginRight = "auto";
// deleteAllBtn.style.fontSize = "16px";
// deleteAllBtn.style.fontWeight = "bold";
// document.querySelector(".todo-app").appendChild(deleteAllBtn);

// deleteAllBtn.addEventListener("click", () => {
//   if (confirm("Butun tasklari silmek istediyinden eminsen?")) {
//     listContainer.innerHTML = "";
//   }
// });

// const buttons = document.querySelectorAll(".buttons button");

// buttons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     calculate(btn.dataset.op);
//   });
// });

// task2
function calculate(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result = '';

  if (isNaN(num1) || isNaN(num2)) {
    result = 'Xeta';
  } else {
    const operations = {
      add: () => num1 + num2,
      sub: () => num1 - num2,
      mul: () => num1 * num2,
      div: () => num2 !== 0 && num1 !== 0 ? (num1 / num2).toFixed(2) : 'Sifira bolme'
    };

    const handler = operations[operation];

    if (handler) {
      const resultElement = document.createElement('span');
      resultElement.textContent = handler();
      result = resultElement.textContent;
    } else {
      result = 'Yalnis operasiya';
    }
  }

  document.getElementById('result').value = result;
}

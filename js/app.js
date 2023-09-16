const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const btn = document.querySelector("#btn");
const box = document.querySelector("#box");
const editBtn = document.querySelector("#editBtn");

let val = JSON.parse(localStorage.getItem("todo"));
let arr = val ? val : [];
console.log(arr);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {};
  for (let i of inputs) {
    if (i.value) {
      obj[i.name] = i.value;
    }
    i.value = "";
  }
  arr.push({ ...obj, id: Date.now() });
  localStorage.setItem("todo", JSON.stringify(arr));
  create();
});

const create = () => {
  box.innerHTML = [];
  for (let i of arr) {
    box.innerHTML += `
          <div class="box_item">
          <div class="content">
              <h2 class="lName">${i.fName}</h2>
              <h2 class="fName">${i.lName}</h2>
              <p class="email">${i.email}</p>
          </div>
          <div class="UpDe">
              <button onclick="edit(${i.id})">Edit</button>
              <button onclick="dlete(${i.id})">Delete</button>
          </div>
          </div>
          `;
  }
};
create();
const dlete = (id) => {
  for (let i of arr) {
    if (i.id == id) {
      arr = arr.filter((obj) => obj.id !== id);
      console.log(arr);
    }
  }
  localStorage.setItem("todo", JSON.stringify(arr));
  create();
};

let idi = 0;
const edit = (id) => {
  idi = id;
  btn.style.display = "none";
  editBtn.style.display = "block";
  for (let i of arr) {
    if (i.id == id) {
      for (let edit of inputs) {
        edit.value = i[edit.name];
      }
    }
  }
  localStorage.setItem("todo", JSON.stringify(arr));
};

const editF = () => {
  let id = idi;
  box.innerHTML = "";
  btn.style.display = "";
  editBtn.style.display = "none";
  for (let i of arr) {
    if (i.id == id) {
      for (let edit of inputs) {
        i[edit.name] = edit.value;
      }
    }
  }
  localStorage.setItem("todo", JSON.stringify(arr));
  create();
  console.log(id);
};

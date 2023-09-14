let inps = document.querySelectorAll("#form input");
let box = document.getElementById("box");

function cleareInp() {
  for (let i of inps) {
    i.value = "";
  }
}

let arr = [];
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let obj = {};

  for (let i of inps) {
    obj[i.name] = i.value;
  }

  cleareInp();
  arr.push({ ...obj, id: Date.now() });
  ui();
});

let ui = () => {
  box.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    box.innerHTML += `
          <div class="box_item">
          <div class="content">
              <h2 class="lName">${arr[i].fName}</h2>
              <h2 class="fName">${arr[i].lName}</h2>
              <p class="email">${arr[i].email}</p>
          </div>
          <div class="UpDe">
              <button>Edit</button>
              <button onclick="${edit(this)}">Delete</button>
          </div>
          </div>
          `;
  }
};

let edit = (e) => {
  const update = document.querySelector(".UpDe")
  console.log(update);
}
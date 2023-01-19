let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// //fetch request
// function fetchToys() {
//   fetch("http://localhost:3000/toys")
//    .then((res) => res.json())
//    .then((toyData) => renderToys(toyData))
// };

// //variables
// const card = document.createElement("div");
// card.className = "card";

// const toyCollection = document.querySelector("#toy-collection");

// const image = document.createElement("img");
// image.className = "toy-avatar";

// const likes = document.createElement("p");

// const name = document.createElement("h2");

// const button = document.createElement("btn");
// button.className = "like-btn";



// function renderToys(toyData) {
//   toys.forEach(toy => {
//     console.log(toy);
//   })
// }
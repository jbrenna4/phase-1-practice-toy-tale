

// //###Fetch Andy's toys

// // 1) fetch request
// // 2) render to dom
// // 3) submit form addEventListener 
// // 4) post request for submit
// // 5) click addEventListener
// // 6) patch request for like clicks


// //GET REQUEST FETCH
// function getAllToys(){
//     fetch('http://localhost:3000/toys')
//     .then(response => response.json())
//     .then(toyData => toyData.forEach(toy => renderOneToy(toy)))
// //    .then(toyData => toyData.forEach(toy => renderOneToy(toy)));
// };
// //
// getAllToys();

// //###Add Toy Info to the Card
// //part of the get request i guess? when we're appending it to the html
// // function initialize(){
// //    getAllToys();
// // //   newToy();
// // };
// // initialize();

// //DOM Rendering
// function renderOneToy(toy){
//     let card = document.createElement("div");
//     card.className = "card";
//     let image = document.createElement("img");
//     image.src = toy.image
//     image.className = "toy-avatar";
//     let h2 = document.createElement("h2");
//     h2.textContent = toy.name;
//     let p = document.createElement("p");
//     p.textContent = `${toy.likes} likes`;
//     let button = document.createElement("button");
//     button.className = "like-btn"
//     button.id = toy.id;
//     button.textContent = "Like ❤️";
//     button.className = "button";
//     button.addEventListener("click", () => {
//         toy.likes += 1;
//         p.textContent = `${toy.likes} likes`;
//         updateLikes(toy, p)});
//     card.append(h2);
//     card.append(image);
//     card.append(p);
//     card.append(button);
//     document.querySelector('#toy-collection').appendChild(card)
// };

// //  

// function handleNewToy(){
//     const form = document.querySelector('#add-toy-form')
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const nameInput = event.target.name.value
//         const imageInput = event.target.image.value

//         const newObj = {
//             name: nameInput,
//             image: imageInput,
//             likes: 0
//         }
//         renderOneToy([newObj])

//     })}


// //### Add a New Toy
// //post request
// function addNewToy(newToy){
//     fetch('http://localhost:3000/toys', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(newToy)
//     .then(response => response.json())
//     .then(newToy => renderOneToy([newToy]))
// });
// }


// //addNewToy();    
//   //.then(response => response.json().then(toy => renderOneToy(toy)))};

// //event listern submit event

//   //PATCH REQUEST
// function updateLikes(newToy, p){
//    console.log(p.textContent[0]);
//     fetch(`http://localhost:3000/toys/${newToy.id}`, {
//     method: 'PATCH',
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         likes: parseInt(p.textContent[0])
//       })}
    
// )
//     .then(res => res.json())
//     .then(toy => console.log(toy))
// };

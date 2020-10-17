let i = 0;
let z = 2;
let arr = ["5.png", "9.png"];
let f = document.querySelector('.pic');
let button_more = document.querySelector('.button-more');
button_more.addEventListener('click', getMorePicture);

function getMorePicture() {
  arr.forEach(element => {
    let image = document.createElement('img');
    image.src = "img/" + element;
    image.classList.add('column__img');

    f.appendChild(image);
  });
}


var country = {

  column_name: {

    class: "Берн",
   arr: [2, 3, 5]
  },
 column_name2: {
      class: "Берн",
        arr: [2, 3, 5]
  }
   
  
};
 // console.log('s');
for (let i = 0; i < country.length; i++) {

  console.log(country[i]);
}
// for (key in country) {
//   console.log(typeof(key));

//   for (keys in key) {
//     //  console.log(keys);
//   }

// }











// let user = {
//     name: "John",
//     sizes: [2, 4, 5]

//   },
//   {
//     name: "dfdf",
//     sizes: [22, 24, 5]

//   };
// console.log(user.sizes);
// //for (let key in user)
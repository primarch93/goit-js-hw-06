// const allCategories = document.querySelectorAll('.item');

// console.log(`Number of categories: ${allCategories.length}`);

// for (let i = 0; i < allCategories.length; i += 1) {
    
//   console.log(`Category: ${allCategories[i].children[0].innerText}`);

//   console.log(`Elements: ${allCategories[i].children[1].children.length}`);
// }




const allCategories = document.querySelectorAll('.item');
const allItemsQty = allCategories.length;
console.log(`Number of categories: ${allItemsQty}`);

allCategories.forEach((element) => {
let elementTitle = element.querySelector('h2').textContent;
let oneTitleElements = element.querySelectorAll('li');
let oneTitleElemntsQty = oneTitleElements.length;

	console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${oneTitleElemntsQty}`);

});
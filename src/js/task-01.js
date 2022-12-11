const allItems = document.querySelectorAll('.item');
const allItemsQty = allItems.length;

console.log(`В списке ${allItemsQty} категории.`);

allItems.forEach((element) => {

    let elementTitle = element.querySelector('h2').textContent;
    
    let oneTitleElements = element.querySelectorAll('li');
    let oneTitleElemntsQty = oneTitleElements.length;
    
        console.log(elementTitle);
      console.log(oneTitleElemntsQty);
    
    });
    
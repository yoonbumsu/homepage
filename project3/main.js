//from json file
function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML  = items.map(item => createHtmlString(item)).join('');

}

function createHtmlString(item){
  return `  
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="itemimg">
   <span class="item_description">${item.gender} , ${item.size}</span>
 </li>

  `;
}
//main
loadItems()
.then(items => {
  console.log(items);
  displayItems(items);
  //  setEventlisteners(items)
})
.catch(console.log);
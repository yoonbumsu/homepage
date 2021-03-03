//from json file

function loadItems(){
    return fetch('data/data.json') //json 경로
    .then(response => response.json()) //데이터 성공적으로 받아올시
    .then(json => json.items); 
}
//update list 
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
function onButtonClick(event , items){
  const target = event.target;
  const key = target.dataset.key;
  const value = target.dataset.value;

  if(key == null || value ==null){
    return;
  }
  updateItems(items , key ,value);
}
function updateItems(items,key,value){
  items.forEach(item => {
    if(item.dataset[key] ===value){
      item.classlist.remove('invisible');
    }else{
      item.classlist.add('invisible');
    }
  });
}

function setEventListeners(items){
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event,items));
  }

//main
loadItems()
.then(items => {
 
  displayItems(items);
  //  setEventlisteners(items)
})
.catch(console.log);

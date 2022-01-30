const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ListItemIngr =[]
ingredients.forEach((element,index)=>{
  const listEl=document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = ingredients[index];
  ListItemIngr.push(listEl)
  ;
  }

)
console.log(ListItemIngr)
const  listIngr = document.querySelector('ul');
  console.log(listIngr);
  listIngr.append(...ListItemIngr);


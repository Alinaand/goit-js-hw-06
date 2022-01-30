const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const makeListItemIngr = elements =>
 { return elements.map((element)=>{
  const listEl=document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = element;
  return listEl;
  }
);
}
const ListItemIngr = makeListItemIngr(ingredients);
const  listIngr = document.querySelector('ul');
  console.log(listIngr);
  listIngr.append(...ListItemIngr);


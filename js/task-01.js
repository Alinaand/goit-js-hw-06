const navEl = document.querySelectorAll('.item');
const elList= navEl.length;
console.log('Number of categories:',elList);
navEl.forEach(element => {
 console.log('Category:',element.querySelector('h2').textContent) ;
 console.log ("Elements:",element.querySelectorAll('li').length )
})
;


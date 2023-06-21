var itemlist=document.querySelector('#items');
//console.log(itemlist.parentElement);
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.background='red';
//console.log(itemlist.lastElementChild)
//itemlist.lastElementChild.textContent='hello';
//console.log(itemlist.lastChild)
var elem=document.createElement('li');
elem.className='helloword';
var text=document.createTextNode('hello world');
elem.appendChild(text);
var addlist=document.querySelector('#items');
console.log(addlist)
var lastlist=document.querySelectorAll('li')[0];
console.log(lastlist)
addlist.insertBefore(elem,lastlist);
console.log(elem);
//console.log(itemlist.firstElementChild)
//console.log(itemlist.firstChild)
//console.log(itemlist.nextSibling)
//console.log(itemlist.nextElementSibling)
//console.log(itemlist.previousElementSibling)
//console.log(itemlist.previousSibling)
//var addition=document.createElement('div')
//addition.className='hello';
//addition.id='hello';
//addition.setAttribute('title','hello world')
//var prev=document.querySelector('header .container')
//var next=document.querySelector('header h1')
//var txt=document.createTextNode('hello world')
//addition.appendChild(txt)
//prev.insertBefore(addition,next)
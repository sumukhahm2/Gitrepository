//var items=document.getElementById('items');
//var headertitle=document.getElementById('list-group-item');

//headertitle.style.border='solid black';
var itemss=document.getElementsByClassName('list-group-item');
itemss[1].style.backgroundColor='green';
itemss[2].style.display='none';
var lists=document.querySelectorAll('.list-group-item:nth-child(2)');
lists[0].style.color='green';
var list=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<list.length;i++)
{
    list[i].style.backgroundColor='green';
}


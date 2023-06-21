//var items=document.getElementById('items');
//var headertitle=document.getElementById('list-group-item');

//headertitle.style.border='solid black';
var itemss=document.getElementsByClassName('list-group-item');
for(var i=0;i<itemss.length;i++)
{
    itemss[i].style.fontWeight='bold';
    itemss[i].style.background='green';
}
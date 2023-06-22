var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
//var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);
//console.log(itemList.parentElement);



    
    
   
    



//filter.addEventListener('keyup', filterItems);


function addItem(e){
  e.preventDefault();

  
  var newItem = document.getElementById('item').value;

  var li = document.createElement('li');

  li.className = 'list-group-item';

  li.appendChild(document.createTextNode(newItem));
  //var div=document.createElement('div');
 
  var btno=document.createElement('button');
  var deleteBtn = document.createElement('button');
  //div.className='div float-right';
  //div.appendChild(btno);
  btno.className='btn btn-danger btn-sm float-right  edit';
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  var textn=document.createTextNode('Edit')
btno.appendChild(textn);
  deleteBtn.appendChild(document.createTextNode('X'));
  



  li.appendChild(deleteBtn);
  li.appendChild(btno);
  deleteBtn.insertAdjacentElement('afterbegin',btno)
  

  itemList.appendChild(li);
}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
     
      itemList.removeChild(li);
    }
  }
}



var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var fm=document.createElement('form');
fm.className='form-inline mb-3';
fm.id='form1';
var textField=document.createElement('input');
textField.type='text';
textField.id='itm';
textField.class='form-control mr-2';
var button2=document.createElement('button');
button2.className='btn btn-dark';
button2.appendChild(document.createTextNode('Submit'));
fm.appendChild(textField);
fm.appendChild(button2);
console.log(form);
//var division=document.querySelector('#main')
var h2=document.querySelectorAll('title')
//var frm=document.querySelector('#addForm');
form.insertBefore(fm,h2[1])

form.addEventListener('submit', addItem);
fm.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('input', filterItems);


function addItem(e){
  e.preventDefault();

  
  var newItem = document.getElementById('item').value;
  var newItem1= document.getElementById('itm').value;
  var item=newItem+' '+newItem1;
  localStorage.setItem(item,'item');
 

  var li = document.createElement('li');
  var li1 = document.createElement('li');


  li.className = 'list-group-item';
  li1.className = 'list-group-item';
  

  li.appendChild(document.createTextNode(newItem));
  li1.appendChild(document.createTextNode(newItem1));
  li.appendChild(li1);
  
  var deleteBtn = document.createElement('button');
  
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
  deleteBtn.appendChild(document.createTextNode('X'));
  



  li.appendChild(deleteBtn);
 
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
function filterItems(e){
    e.preventDefault();
    // convert text to lowercase
    var textl = e.target.value.toLowerCase();
    // Get lis
    var itemss = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(itemss).forEach(function(itemn){
      var itemName = itemn.firstChild.textContent;
      console.log(itemName)
      //var itemName1 = itemn.lastChild.textContent;
    //console.log(itemName)
      if(itemName.toLowerCase().indexOf(textl) != -1 ){
        itemn.style.display = 'block';
      } else {
        itemn.style.display = 'none';
      }
    });
  }
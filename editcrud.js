
//let obj;
var element="";
const addExpList=(object)=>
{
   
    axios.post("https://crudcrud.com/api/c436602171fc44e3b3ae3b0b5ad0450a/demo",object)
    .then((response)=> {
        let item=response.data;
        console.log(item._id)
        showFunction(item)
    })
    
    
}

const showFunction=(item)=>
{
    
    
    //console.log(item._id)
  let ul=document.getElementById('item-list')
  //let a=item._id;
  
  
  element+=`<li id=${item._id}> ${item.x} ${item.y} ${item.z}  <button onclick={delet('${item._id}')}>Delete</button> <button onclick={edit('${item._id}')}>Edit</button></li>`
        

  
    ul.innerHTML=element
   
    document.getElementById('expense').value='';
   document.getElementById('description').value='';
   document.getElementById('select').value='';
    
}

const show=()=>{
    let ul=document.getElementById('item-list')
    axios.get("https://crudcrud.com/api/c436602171fc44e3b3ae3b0b5ad0450a/demo")
    .then((res)=>{
        for(var i=0;i<res.data.length;i++)
        {
            
            showFunction(res.data[i])
           
        }
    })

}   
    
function addObject(x,y,z)
{
    let obj={
        x,
        y,
        z
 }
 addExpList(obj)
}



var form=document.getElementById('form')
form.addEventListener('submit',createExp)
function createExp(e)
{
    e.preventDefault();
    var x=document.getElementById('expense').value
    var y=document.getElementById('description').value
    var z=document.getElementById('select').value
    var id;
   addObject(x,y,z,id)
   
  
}

function delet(id)
{
   axios.delete(`https://crudcrud.com/api/c436602171fc44e3b3ae3b0b5ad0450a/demo/${id}`)
   .then((res)=>{
     let parentList=document.getElementById('item-list')
     let itemToBeDeleted=document.getElementById(id)
     if(itemToBeDeleted)
     {
        parentList.removeChild(itemToBeDeleted)
     }
   })
    
    
}
function edit(item)
{
    axios.delete(`https://crudcrud.com/api/c436602171fc44e3b3ae3b0b5ad0450a/demo/${item}`)
    .then((res)=>{
      let parentList=document.getElementById('item-list')
      let itemToBeDeleted=document.getElementById(item)
      //console.log(res)
      if(itemToBeDeleted)
      {
         parentList.removeChild(itemToBeDeleted)
      }
      
    })
    axios.get(`https://crudcrud.com/api/c436602171fc44e3b3ae3b0b5ad0450a/demo/${item}`)
    .then((res)=>{
        console.log(res)
        document.getElementById('expense').value=res.data.x;
   document.getElementById('description').value=res.data.y;
   document.getElementById('select').value=res.data.z;
    })
    
   showFunction();

}




//let obj;
var element="";
const addExpList=(object)=>
{
   
    axios.post("https://crudcrud.com/api/f60591e2504d41a68875d3b5d3f7e251/demo",object)
    .then((response)=> {
        let item=response.data;
       
        showFunction(item)
    })
    
    
}

const showFunction=(item)=>
{
    
    
    console.log(item._id)
  let ul=document.getElementById('item-list')
  let a=item._id;
  
  
  element+=`<li id=${item._id}> ${item.x} ${item.y} ${item.z}  <button onclick={delet('${item._id}')}>Delete</button> <button onclick={edit()}>Edit</button></li>`
        

  
    ul.innerHTML=element
   
    document.getElementById('expense').value='';
   document.getElementById('description').value='';
   document.getElementById('select').value='';
    
}

const show=()=>{
    let ul=document.getElementById('item-list')
    axios.get("https://crudcrud.com/api/f60591e2504d41a68875d3b5d3f7e251/demo")
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
   axios.delete(`https://crudcrud.com/api/f60591e2504d41a68875d3b5d3f7e251/demo/${id}`)
   .then((res)=>{
     let parentList=document.getElementById('item-list')
     let itemToBeDeleted=document.getElementById(id)
     if(itemToBeDeleted)
     {
        parentList.removeChild(itemToBeDeleted)
     }
   })
    
    
}
/*function edit(id)
{
  var obj=data.find(rec => rec.id===id);
  document.getElementById('expense').value=obj.x
   document.getElementById('description').value=obj.y
   document.getElementById('select').value=obj.z
   data=data.filter(rec=> rec.id!==id)
   showFunction();

}*/



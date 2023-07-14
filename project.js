
//let obj;
var element="";
const addExpList=(x,y,z)=>
{
   let obj={
           x,
           y,
           z
    }
    axios.post("https://crudcrud.com/api/b221a1c5062a43ed924ba07143184023/demo",obj)
    .then((response)=> {
        let item=response.data;
       
        showFunction(obj)
    })
    
    
}

const showFunction=(obj)=>
{
    
 // console.log(item)

  let ul=document.getElementById('item-list')
  
  
  
       element+=`<li>${obj.x} ${obj.y} ${obj.z} <button onclick={delet(${obj.z})}>Delete</button> <button onclick={edit(${obj.z})}>Edit</button></li>`
        

  
    ul.innerHTML=element
   
    document.getElementById('expense').value='';
   document.getElementById('description').value='';
   document.getElementById('select').value='';
    
}

const show=()=>{
    let ul=document.getElementById('item-list')
    axios.get("https://crudcrud.com/api/b221a1c5062a43ed924ba07143184023/demo")
    .then((res)=>{
        for(var i=0;i<res.data.length;i++)
        {
            showFunction(res.data[i])
        }
    })

}   
    




var form=document.getElementById('form')
form.addEventListener('submit',createExp)
function createExp(e)
{
    e.preventDefault();
    var x=document.getElementById('expense').value
    var y=document.getElementById('description').value
    var z=document.getElementById('select').value
   addExpList(x,y,z)
   
  
}

/*function delet(id)
{
   data=data.filter(rec=> rec.id!==id)
    console.log(data)
    
    
   showFunction();
}
function edit(id)
{
  var obj=data.find(rec => rec.id===id);
  document.getElementById('expense').value=obj.x
   document.getElementById('description').value=obj.y
   document.getElementById('select').value=obj.z
   data=data.filter(rec=> rec.id!==id)
   showFunction();

}*/



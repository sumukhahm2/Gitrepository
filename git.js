var posts=[];


function updateLastUserActivityTime(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
           posts.ActivityTime=new Date().getTime();
           resolve( posts.ActivityTime)
        },1000)
    })
    
    
}

function createPost(post){
    return new Promise((resolve)=>{
    setTimeout(()=>{
        posts.push(post)
     resolve(post);
     
    },2000)
})
}
//createPost({Post:'post1',ActivityTime:new Date().getTime()})
//createPost({Post:'post2',ActivityTime:new Date().getTime()})

function getPost(){
    Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()]).then(([createPostresolve,updateLastUserActivityTimeresolve])=>{
        console.log(createPostresolve+' '+updateLastUserActivityTimeresolve)
    })
}
getPost();

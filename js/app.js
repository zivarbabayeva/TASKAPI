let btn=document.getElementById('btn-request');
btn.onclick=function(){
fetch('https://randomuser.me/api/?results=50')
.then(response=>response.json())
.then(data=>{
    let div='';
    console.log('data.results.foreach');
})
.catch(error=>console.log(error))
}
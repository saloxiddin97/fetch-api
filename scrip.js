let card=document.querySelector('div')
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>res.json())
.then((data)=>{
console.log(data);
for(item of data){
card.innerHTML += `
<div>
<p>${item.id}</p>
<h1>${item.name}</h1>
<h2>${item.phone}</h2>
<h3>${item.email}</h3>
`
}
})
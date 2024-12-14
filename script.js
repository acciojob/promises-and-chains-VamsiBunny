let age=document.getElementById("age");
let name=document.getElementById("name");
let btn=document.getElementById("btn");

btn.addEventListener("click",Submit());

function Submit() {
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		if(age.value>18){
			resolve(`Welcome ${name}. You can vote.`);
		}else{
			reject(`Oh sorry ${name}. You aren't old enough.`);
		}
	},4000)
})
}
	


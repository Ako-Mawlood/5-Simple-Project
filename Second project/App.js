const container=document.querySelector(".container");
const openBtn=document.querySelector(".open-btn");
const closeBtn=document.querySelector(".close-btn");

openBtn.addEventListener("click",showContent);
function showContent(){
container.style.display="block";
}
 
closeBtn.addEventListener("click",hideContent);
function hideContent(){
	container.style.display="none"
	
}

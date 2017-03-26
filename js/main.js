const cb_reply = document.querySelector('.reply-checkbox');

function checkHandler(event){
  if(event.target.innerHTML === "Y"){
    event.target.innerHTML = "N";
    event.target.setAttribute('aria-selected', false);
  } else {
    event.target.innerHTML = "Y";
    event.target.setAttribute('aria-selected', true);
  }
}

function keyupHandler(event){
  if(event.keyCode === 32){
    event.target.focus();
    if(event.target.innerHTML === "Y"){
    event.target.innerHTML = "N";
    event.target.setAttribute('aria-selected', false);
  } else {
    event.target.innerHTML = "Y";
    event.target.setAttribute('aria-selected', true);
  }
  }
}

cb_reply.addEventListener('click', (event) => {
  checkHandler(event);
});
cb_reply.addEventListener("keyup", (event) =>{
  keyupHandler(event);
});
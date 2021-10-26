document.querySelector('.toggle').addEventListener("click", ()=>{
    document.querySelector('.toggle').style.display= "none"
    document.querySelector('.mq-n').style.display="flex"
    setTimeout(() =>{
    document.querySelector('.tog-X').style.display="block"
    }, 1000);
});

document.querySelector('.tog-X').addEventListener('click', ()=>{
    setTimeout(() =>{
        document.querySelector('.mq-n').style.transition = "linear 1s";
        document.querySelector('.mq-n').style.display = "none";
    document.querySelector('.tog-X').style.display="none"
    document.querySelector('.toggle').style.display= "block"
    }, 1000);
    
});

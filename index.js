let selectImg = document.querySelectorAll("img")
console.log(selectImg);

selectImg.forEach(e => {
    // console.log(e);

    e.addEventListener('click',()=>{
       let del =  confirm('do you really want to delete this?')
      if(del){
        e.style.display = "none"
      }
      else{
          e.style.display = 'block'
      }
    })

});


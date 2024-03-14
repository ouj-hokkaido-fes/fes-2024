const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector(".ham-menu-list");
const nav_items = document.querySelectorAll(".ham-menu-item");

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    console.log("clicked")
});
nav_items.forEach(function(item){
    

    item.addEventListener('click', function(){
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        let parent = document.querySelector(".main-container");
        let clickElement = parent.querySelector("#p"+ this.id);        

        clickElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

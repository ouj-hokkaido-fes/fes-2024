contents_expander = document.getElementsByClassName("content-expander");
contents_collapser = document.getElementsByClassName("content-collapser");
console.log(contents_expander.length);

for(i=0;i<contents_expander.length; i++){

    contents_expander[i].addEventListener("click",
    function(){

        var content = this.nextElementSibling;
        console.log(content,contents_expander);

        if (content.style.display=="block"){
            content.style.display="none";
        }
        else{
            content.style.display="block";
        }

    });
    contents_collapser[i].addEventListener("click",
    function(){
        var content = this.parentNode;
        if (content.style.display=="block"){
            content.style.display="none";
        }
        else{
            content.style.display="block";
        }
    }
    )
}
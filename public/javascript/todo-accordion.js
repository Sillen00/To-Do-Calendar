window.addEventListener("DOMContentLoaded", main)

function main(){
    toggleTodos();
}



function toggleTodos(){
    const todoSections = document.getElementsByClassName("todo-section");

    for (let i = 0 ; i < todoSections.length ; i++){
        todoSections[i].addEventListener("click", function(){
            
            this.classList.toggle("accordion")
        });
    }
};
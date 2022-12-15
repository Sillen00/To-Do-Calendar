window.addEventListener("DOMContentLoaded", main)

function main(){
    toggleTodos();
}



// function toggleTodos(){
//     const todoSections = document.getElementsByClassName("todo-section");

//     for (let i = 0 ; i < todoSections.length ; i++){
//         todoSections[i].addEventListener("click", function(){
            
//             this.classList.toggle("accordion")
//         });
//     }
// };


function toggleTodos(){

    const todoHeading = document.getElementsByClassName("todo-heading");
    for (let i = 0 ; i < todoHeading.length ; i++){
        todoHeading[i].addEventListener("click", function(){

            const container = document.querySelector(".todo-container")

            for( let j= 0 ; j < container.length ; j++){
               
                if(this.style.display = "block" === true){
                    this.style.display = "none"
                }
                else {
                    this.style.display = "block"
                }

                // this.style.display = "none"
                // container[j].style.display = "none"
                // container[j].classList.toggle("accordion");
                // todoHeading[i].classList.toggle("accordion");
            }
        });
    }
};
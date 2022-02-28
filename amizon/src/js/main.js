const buttom_header = document.querySelector(".buttom_header")

const category = document.querySelector(".category");
console.log(category);
const category_dropdown = document.querySelector(".category_dropdown");
console.log(category_dropdown);
let background = true;
category.addEventListener('click' , () => {
    if(background){
        category_dropdown.classList.add("category_add");
        background = false;
    }
    else{
        category_dropdown.classList.remove("category_add");
        background = true;
    }
} );

// focusing on top header input 
const input = document.querySelector('.nav_input');
const form = document.querySelector('.form');
input.addEventListener('focus' , () => {
        form.classList.add("input_focused");
} );

// burger menu 

const burger_btn = buttom_header.querySelector(".burger_menu")

burger_btn.addEventListener("click" , () => {
    if(background){
        category_dropdown.classList.add("category_add");
        background = false;
    }
    else{
        category_dropdown.classList.remove("category_add");
        background = true;
    }
    console.log("the burger button is working")


});

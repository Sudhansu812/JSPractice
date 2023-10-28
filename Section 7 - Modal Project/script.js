'use strict';

let modal1 = document.querySelector('.modal1');
let modal2 = document.querySelector('.modal2');
let modal3 = document.querySelector('.modal3');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelectorAll('.close-modal');
let btnsOpenModal = document.querySelectorAll('.show-modal');

function openModal(cls) {
    overlay.classList.remove("hidden");
    if (cls === "show-modal1")
    {
        modal1.classList.remove("hidden");
    } else if (cls === "show-modal2")
    {
        modal2.classList.remove("hidden");
    } else if (cls === "show-modal3")
    {
        modal3.classList.remove("hidden");
    }
}

function closeModal() {
    modal1.classList.add("hidden");
    modal2.classList.add("hidden");
    modal3.classList.add("hidden");
    overlay.classList.add("hidden");
}

for(let i=0; i<btnsOpenModal.length; i++)
{
    btnsOpenModal[i].addEventListener('click', function() {
        if (btnsOpenModal[i].classList.contains('show-modal1')) {
            openModal("show-modal1");
        } else if (btnsOpenModal[i].classList.contains('show-modal2')) {
            openModal("show-modal2");
        } else if (btnsOpenModal[i].classList.contains('show-modal3')) {
            openModal("show-modal3");
        } 
        
    });
}

for(let i=0; i<btnCloseModal.length; i++)
{
    console.log(btnCloseModal[i]);
    btnCloseModal[i].addEventListener('click', closeModal);
}

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) { 
    if (e.code === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

/*
Limitation of query selector - if multiple elements with the same
class only the first one will be selected
Below one will not work, hence querySelectorAll is used
which acts as an array
let btnsOpenModal = document.querySelector('.show-modal');
*/

/*
We are not using the method as func() but as func, this is 
because js will execute it immediatly if () is added
but we only want it run when there is a click event
hence we just have to specify the name of the method
*/

// mouse events - click, mouseover, keyup, focus
// 3 types of keyboard events - keypress, keyup, keydown
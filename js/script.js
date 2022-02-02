let navbar = document.querySelector('.navbar')
let cartItem = document.querySelector ('.cart-item-container')
let search = document.querySelector('.search-form')


document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active')
    cartItem.classList.remove('active')
    search.classList.remove('active')
}


document.querySelector("#cart-btn").onclick =()=>{
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    search.classList.remove('active')
}


document.querySelector('#search-btn').onclick =()=>{
    search.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
}


window.onscroll =()=>{
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
    search.classList.remove('active')
}

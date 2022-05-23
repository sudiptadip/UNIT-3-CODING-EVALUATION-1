//store the products array in localstorage as "products"

var data = document.querySelector('#product')
data.addEventListener('submit',myfunction)

function myfunction(){
event.preventDefault();
var arr = JSON.parse(localStorage.getItem('products')) || []
    var obj = {

        type: data.type.value,
        desc: data.desc.value,
        price: data.price.value,
        image: data.image.value,

    }

arr.push(obj)
localStorage.setItem('products',JSON.stringify(arr))
window.location.reload();
}

document.querySelector('#show_products').addEventListener('click',fun)

function fun(){
    window.location.href='inventory.html'
}
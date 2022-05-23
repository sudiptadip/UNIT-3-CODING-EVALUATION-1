var arr = JSON.parse(localStorage.getItem('products'))

myfunction(arr)

function myfunction(arr){

arr.forEach(function(elem,ind){

var md = document.querySelector('#all_products')
var div = document.createElement('div')
var img = document.createElement('img')
img.src = elem.image
var h2 = document.createElement('h3')
h2.innerText = elem.type;
var desc = document.createElement('h3')
desc.innerText = elem.desc;
var price = document.createElement('h3')
price.innerText = elem.price;


var but = document.createElement('button')
but.innerText = "Remove product"
but.setAttribute('id','remove_product')
but.addEventListener('click',function(){
    hellomoto(elem,ind)
})

div.append(img,h2,desc,price,but)
md.append(div)
})


}

function hellomoto(elem,ind){
    arr.splice(ind,1)
    localStorage.setItem('products',JSON.stringify(arr))
    window.location.reload()
}

document.getElementById('add_more_product').addEventListener('click',hii)


function hii(){

window.location.href='index.html'

}
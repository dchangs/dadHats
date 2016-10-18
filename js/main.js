function hat(name, color, price, image) {
	this.name = name;
	this.color = color;
	this.price = price;
	this.image = image;
}

var hatArray = []

var kermit = new hat('The Still Sippin Lean Dad Hat', 'Black', 20, 'https://cdn.shopify.com/s/files/1/1282/8405/products/IMG_0041_2c153bbd-6943-46e0-a58a-08f9861da29c_large.JPG?v=1475708377')
var friends = new hat('The Friends Dad Hat', 'Mustard Mineral', 20, 'https://cdn.shopify.com/s/files/1/1282/8405/products/IMG_0042_873b448a-80db-426a-a655-bd3cd5a78984_large.JPG?v=1475708327')
var savage = new hat('The Super Savage Dad Hat', 'Maroon Mineral', 20, 'https://cdn.shopify.com/s/files/1/1282/8405/products/IMG_0027_d0e59fd4-7a9e-44e9-bea5-a4a86b3c7a95_large.JPG?v=1475708448')
var wave = new hat('The Wavy Dad Hat', 'Khaki', 20, 'https://cdn.shopify.com/s/files/1/1282/8405/products/IMG_0032_47e7160a-e2da-44ea-a35d-cc81599ce592_large.JPG?v=1475708526')
var lbjKermit = new hat('The LBJ Kermit Dad Hat', 'Black', 20, 'https://cdn.shopify.com/s/files/1/1282/8405/products/LBJ_Kermit_large.jpg?v=1472769298')
var trill = new hat('The Trill Figure Dad Hat', 'Navy Mineral', 20, 'https://cdn.shopify.com/s/files/1/1282/8405/products/5R9A8324_large.JPG?v=1472593958')
var trump = new hat('The Angry Donald Dad Hat', 'Blue', 20, 'https://cdn.shopify.com/s/files/1/1282/8405/products/5R9A4309_large.JPG?v=1472084703')
var antiSocial = new hat('The Anti Social Club Dad Hat', 'White', 20, 'https://cdn.shopify.com/s/files/1/1282/8405/products/5R9A4363_large.JPG?v=1472084845')
var winning = new hat('The Winning Hat', 'Black', 20, 'https://cdn.shopify.com/s/files/1/1282/8405/products/5R9A4321_large.JPG?v=1472085519')
var ccc = new hat("The Three C's Dad Hat", "White", 20, "https://cdn.shopify.com/s/files/1/1282/8405/products/champagne_white_large.jpg?v=1469313441")
var pokemon = new hat('The Pokemon Olympics Dad Hat', 'Red', 20, 'https://cdn.shopify.com/s/files/1/1282/8405/products/pokemon_red_large.jpg?v=1469314323')
var box = new hat('The Box Dad Hat', 'Camo', 20, 'https://cdn.shopify.com/s/files/1/1282/8405/products/arabic_camo_redo_large.jpg?v=1469315899')

hatArray.push(kermit)
hatArray.push(friends)
hatArray.push(savage)
hatArray.push(wave)
hatArray.push(lbjKermit)
hatArray.push(trill)
hatArray.push(trump)
hatArray.push(antiSocial)
hatArray.push(winning)
hatArray.push(ccc)
hatArray.push(pokemon)
hatArray.push(box)

for(i = 0; i < hatArray.length; i++) {
	//new elements
	var newDiv = document.createElement('div')
	var newImg = document.createElement('img')
	var newItem = document.createElement('h1')
	var newPrice = document.createElement('h2')
	var buttonBuy = document.createElement('button')
	var buyLink = document.createElement('a')

	//new text nodes
	var hatPic = hatArray[i].image
	var itemName = document.createTextNode(hatArray[i].name + ' in ' + hatArray[i].color)
	var itemPrice = document.createTextNode('$' + hatArray[i].price)
	var buy = document.createTextNode('Buy')

	//appending text nodes
	newItem.appendChild(itemName)
	newPrice.appendChild(itemPrice)
	buttonBuy.appendChild(buy)
	buyLink.appendChild(buttonBuy)
	newDiv.appendChild(newImg)
	newDiv.appendChild(newItem)
	newDiv.appendChild(newPrice)
	newDiv.appendChild(buttonBuy)

	//set class and attributes
	newImg.setAttribute('src', hatPic)
	newImg.setAttribute('data-magnify-src', hatPic)
	newImg.className = 'zoom'
	newDiv.className = 'itemDiv'
	buttonBuy.setAttribute('href', '#')
	buttonBuy.setAttribute('onclick', 'addToCart()')

	var display = document.getElementById('hats')
	display.appendChild(newDiv)
}

//magnify
$(document).ready(function() {
  $('.zoom').magnify();
});

//add item to cart
var cartItems = 0
var cart = document.getElementById('cart')
cart.textContent = cartItems
function addToCart() {
	cartItems++
	cart.textContent = cartItems
}
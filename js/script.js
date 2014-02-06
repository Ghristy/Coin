// JavaScript Document

/**
*The Coin class is a blueprint for each coin we can put on the page
*@author	Joshua Ghrist
*@version 1.0 Feb 6, 2014
*/

function coin(){
	//built in properties
		//property that represents the graphic on the page
			this.item_on_page;
			this.x //coins left and right position on page
			this.y //coins top and bottom position on page
		
	//built in methods
	
	/**
	*the create function puts a graphic on the page
	*/
	this.create = function(){
		this.item_on_page = document.createElement("img");
		this.item_on_page.src = "img/coin.png"
		this.item_on_page.style.position = "absolute";
		//generate and store a random x&y position, different for each coin. Im using 500 and 300 hundred for stage w and h
		this.x = Math.floor(Math.random()*500);
		this.y = Math.floor(Math.random()*300);
		this.item_on_page.style.left = this.x + "px";
		this.item_on_page.style.top = this.y + "px";
		//actually put coin on page
		document.body.appendChild(this.item_on_page);

	}
	
	
	
}//end coin class

onload=init;

function init(){
//generate instance of our coin class
	var coin1 = new coin();	
	coin1.create();
	var coin2 = new coin();	
	coin2.create();
	var coin3 = new coin();	
	coin3.create();
	var coin4 = new coin();	
	coin4.create();
	var coin5 = new coin();	
	coin5.create();
}
var sound = new Audio("https://freesound.org/data/previews/57/57806_533680-lq.mp3");
var wood = document.getElementById("premium_exchange_stock_wood").textContent;
var clay = document.getElementById("premium_exchange_stock_stone").textContent;
var iron = document.getElementById("premium_exchange_stock_iron").textContent;
var not_printed = true;

// Function for com
function compare(stock, value, not_printed, selector) {
	if (stock >= value && not_printed)
	{
		not_printed = false;
		document.getElementsByClassName("premium-exchange-sep")[selector].getElementsByClassName("premium-exchange-input")[0].value = stock;
		document.getElementsByClassName("btn-premium-exchange-buy")[0].focus();

		sound.play();
		window.addEventListener('focus', function()
		{ 
		  sound.pause();
		  sound.currentTime = 0;
		});
	}
	return not_printed;
}


function check(){
	wood = document.getElementById("premium_exchange_stock_wood").textContent;
	clay = document.getElementById("premium_exchange_stock_stone").textContent;
	iron = document.getElementById("premium_exchange_stock_iron").textContent;

	not_printed = compare(wood, 400, not_printed, 9);
	not_printed = compare(clay, 400, not_printed, 12);
	not_printed = compare(iron, 400, not_printed, 15);

	var fader = document.getElementById("fader");
	
	if(fader != null)
	{
		document.getElementsByClassName("btn-confirm-yes")[0].addEventListener("keypress", function(e){
		if (e.key === 'Enter')
		{
			not_printed = true;
		}
	});
	}

    setTimeout(check, 100); // check again in a half second
}

check();
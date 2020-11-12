var wood_sound = new Audio("https://freesound.org/data/previews/178/178740_2888453-lq.mp3");
var clay_sound = new Audio("https://freesound.org/data/previews/145/145504_2580450-lq.mp3");
var iron_sound = new Audio("https://freesound.org/data/previews/371/371922_2402876-lq.mp3");
var wood = document.getElementById("premium_exchange_stock_wood").textContent;
var clay = document.getElementById("premium_exchange_stock_stone").textContent;
var iron = document.getElementById("premium_exchange_stock_iron").textContent;
var not_printed = true;

// Function for com
function compare(stock, value, not_printed, selector, sound) {
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

	not_printed = compare(wood, 64, not_printed, 9, wood_sound);
	not_printed = compare(clay, 64, not_printed, 12, clay_sound);
	not_printed = compare(iron, 64, not_printed, 15, iron_sound);

	var fader = document.getElementById("fader");
	
	if(fader != null)
	{
		document.getElementsByClassName("btn-premium-exchange-buy")[0].addEventListener("keypress", function(e){
		if (e.key === 'Enter')
		{
			not_printed = true;
		}
	});
	}

    setTimeout(check, 100); // check again in a 100ms
}

check();
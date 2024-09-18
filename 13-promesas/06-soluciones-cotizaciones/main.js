
async function cargarApis(){
	try{
		let USD = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
		let BTC = await fetch("https://open.er-api.com/v6/latest/USD");
		let ARS = await fetch("https://open.er-api.com/v6/latest/ARS");
		
		let USD_data = await USD.json();
		let BTC_data = await BTC.json();
		let ARS_data = await ARS.json();
	
	return [USD_data.bitcoin.usd, BTC_data.rates.ARS, ARS_data.rates.USD];
	}
	catch(error){
		console.log('Ocurrió un error: '+ error);
		return [];
	}
	
}

function cargarElementos(values){
	let loading = document.getElementById("loading");
	let BTC_p = document.getElementById("BTC_p");
	let ARS_p = document.getElementById("ARS_p");
	let USD_p = document.getElementById("USD_p");

	loading.style.display = "none";
	BTC_p.innerHTML = values[0] + " USD";
	ARS_p.innerHTML = values[1] + " USD";
	USD_p.innerHTML = values[2] + " ARS";
}

async function main(){
	let values = await cargarApis();
	cargarElementos(values);
}

		
		function getCalculate() {
			var amount = document.getElementById('amount').value;
			document.getElementById('amount').value = null;

			if (amount <= 150){
				document.getElementById('display').innerHTML = "The charged fee is: K"+2.50;
			}else if (amount == 151 && amount <= 299) {
				document.getElementById('display').innerHTML = "what the fuck is: K"+5;
			}else if (amount >= 300 && amount <= 599 ){
				document.getElementById('display').innerHTML = "The charged fee is: K"+7.250;
			}else if(amount >= 600 && amount <= 899){
				document.getElementById('display').innerHTML = "The charged fee is: K"+10;
			}else if(amount >= 900 && amount <= 1200){
				document.getElementById('display').innerHTML = "The charged fee is: K"+15;
			}else{
				document.getElementById('display').innerHTML = "Enter the lower amount";
			}
		}
	
/*
	document.getElementById('cls').addEventListener('click', function(){
		document.getElementById('display').innerHTML = "The charged fee is: K";
		var value = "Enter the Amount in kwacha" 
		document.getElementById('amount').value = null;
	});*/


(function() {
document.querySelector('#amountPlan').addEventListener('keydown', function(e){
			if(e.code === "Enter"){
				planMoney();
				displayData();
				}
		});
})();




function planMoney() {
	displayData();
	var money = document.getElementById('amountPlan').value;
	if (money.includes("!@#$%&*{}+_)(") || money == 0 || money == ""){
		document.getElementById('show').innerHTML = "Enter the Valid Money";
	}else{
	document.getElementById('amountPlan').value = null;

	document.getElementById('show').innerHTML = "Your Money is: K"+money;
	document.getElementById('showTitle').innerHTML = "Your money is divided into the following accounts";
//Disaater account
	var ans = 10/100;
	var fans = ans * money;

	if (fans == 0.1 || fans == 0.2 || fans == 0.3 || fans == 0.4 || fans == 0.5 || fans == 0.6 || fans == 0.7 || fans == 0.8 || fans == 0.9) {
		var convert = fans*10;
		document.getElementById('showMe').innerHTML = "<i class='fa fa-refresh'></i>"+" "+"Disaster account: <span class='float-right'>"+convert+" ngwe</span>";
	}else{
		document.getElementById('showMe').innerHTML = "<i class='fa fa-refresh'></i>"+" "+"Disaster account: <span class='float-right'>K "+fans+"</span>";
	}

//Business account


var ansBus = 60/100;
	var fansBus = ansBus * money;

	if (fansBus == 0.1 || fansBus == 0.2 || fansBus == 0.3 || fansBus == 0.4 || fansBus == 0.5 || fansBus == 0.6 || fansBus == 0.7 || fansBus == 0.8 || fansBus == 0.9) {
		var convertBus = fansBus*10;
		document.getElementById('showBus').innerHTML = "<i class='fa fa-money'></i>"+" "+"Business Account: <span class='float-right'>"+convertBus+" ngwe</span>";
	}else{
		document.getElementById('showBus').innerHTML = "<i class='fa fa-money'></i>"+" "+"Business Account: <span class='float-right'>K "+fansBus+"</span>";
	}

//investment account

var investment = 10/100;
	var investmentf = investment * money;

	if (investmentf == 0.1 || investmentf == 0.2 || investmentf == 0.3 || investmentf == 0.4 || investmentf == 0.5 || investmentf == 0.6 || investmentf == 0.7 || investmentf == 0.8 || investmentf == 0.9) {
		var convertInvestment = investmentf*10;
		document.getElementById('showInvestment').innerHTML = "<i class='fa fa-dollar'></i>"+" "+"Investment Account: <span class='float-right'>"+convertInvestment+" ngwe</span>";
	}else{
		document.getElementById('showInvestment').innerHTML = "<i class='fa fa-dollar'></i>"+" "+"Investment Account: <span class='float-right'>K "+investmentf+"</span>";
	}

//Bills/ Expense account


var bills = 10/100;
	var fbills = bills * money;

	if (fbills == 0.1 || fbills == 0.2 || fbills == 0.3 || fbills == 0.4 || fbills == 0.5 || fbills == 0.6 || fbills == 0.7 || fbills == 0.8 || fbills == 0.9) {
		var convertBills = fbills*10;
		document.getElementById('showBills').innerHTML = "<i class='fa fa-credit-card'></i>"+" "+"Expense Account: <span class='float-right'>"+convertBills+" ngwe</span>";
	}else{
		document.getElementById('showBills').innerHTML ="<i class='fa fa-credit-card'></i>"+" "+"Expense Account: <span class='float-right'>K "+fbills+"</span>";
	}


//leisure


var leisure = 5/100;
	var leisuref = leisure * money;

	if (leisuref == 0.1 || leisuref == 0.2 || leisuref == 0.3 || leisuref == 0.4 || leisuref == 0.5 || leisuref == 0.6 || leisuref == 0.7 || leisuref == 0.8 || leisuref == 0.9) {
		var convertleisure = leisuref*10;
		document.getElementById('showleisure').innerHTML = "<i class='fa fa-home'></i>"+" "+"Vacation Account: <span class='float-right'>"+convertleisure+" ngwe</span> ";
	}else{
		document.getElementById('showleisure').innerHTML = "<i class='fa fa-home'></i>"+" "+"Vacation Account: <span class='float-right'>K "+leisuref+"</span>";
	}
}

//Extra


var extra = 5/100;
	var extraCash = extra * money;

	if (extraCash == 0.1 || extraCash == 0.2 || extraCash == 0.3 || extraCash == 0.4 || extraCash == 0.5 || extraCash == 0.6 || extraCash == 0.7 || extraCash == 0.8 || extraCash == 0.9) {
		var convertExtra = extraCash*10;
		document.getElementById('showExtra').innerHTML = "<i class='fa fa-plus'></i>"+" "+"Extra Account: <span class='float-right'>"+convertExtra+" ngwe</span>";
	}else{
		document.getElementById('showExtra').innerHTML = "<i class='fa fa-plus'></i>"+" "+"Extra Account: <span class='float-right'>K "+extraCash+"</span>";
	}
}


function disData() {
	document.getElementById('displayData').style.display = "none";
}
function displayData() {
	document.getElementById('displayData').style.display = "flex";
}


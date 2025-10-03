function converter() {
	let x = Number(document.getElementById('inbalance').value);
	let convert_usd = x / 32.47;
	let convert_thb = x * 32.47;

	let convert = document.getElementById('currency').value;
	if (convert === 'usd') {
		document.getElementById('outbalance').value = convert_usd.toFixed(2)
	} else if (convert === 'thb') {
		document.getElementById('outbalance').value = convert_thb.toFixed(2)
	}
}

function balanceinfo() {
	let account = Number(document.getElementById('currentacc').value);
	let cash = Number(document.getElementById('currentcash').value);
	const history = document.getElementById('history');

	if (account < 0 || cash < 0) {
		history.innerText += 'couldn\'t deposite entered balance. (Insufficient cash balance)\n'
	} else{
		history.innerText += 'Current Account balance:' + account + ', Current Cash balance:' + cash + '\n'
	}
}

function bankoperation() {
    const status = document.getElementById('dorw').value;
    const money = Number(document.getElementById('money').value);
    let account = Number(document.getElementById('currentacc').value);
    let cash = Number(document.getElementById('currentcash').value);
    const history = document.getElementById('history');

    if (status === 'depo' && money > 0 && money <= cash) {
        account += money;
        cash -= money;
    } else if (status === 'with' && money > 0 && money <= account) {
        account -= money;
        cash += money;
    } else {
        history.innerText += 'Error: Invalid transaction\n';
        return;
    }

    document.getElementById('currentacc').value = account;
    document.getElementById('currentcash').value = cash;
    history.innerText += `Current Account balance: ${account}, Current Cash balance: ${cash}\n`;
	}
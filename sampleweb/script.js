function converter() {
	let x = document.getElementById('inbalance').value;
	x = Number(x);	
	let convert_usd = x / 32.47
	let convert_thb = x * 32.47

	let convert = document.getElementById('currency').value;
	if (convert === 'usd') {
		document.getElementById('outbalance').value = convert_usd.toFixed(2)
	} else if (convert === 'thb') {
		document.getElementById('outbalance').value = convert_thb.toFixed(2)
	}
}
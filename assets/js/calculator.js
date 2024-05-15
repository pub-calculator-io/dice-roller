async function roll(){
	// 1. validate
	const dices = input.get('number_of_dice').natural().lte(100).val();
	if(!input.valid()) return;

	// 2. animate & calculate
	return new Promise(resolve => {
		let count = 0;
		const interval = 65;
		const maxCalls = 10;
		const intervalId = setInterval(() => {
			if (count >= maxCalls) {
				clearInterval(intervalId);
				resolve();
			} else {
				calculate(dices);
				count++;
			}
		}, interval);
	});
}

function calculate(dices){
	const values = math.randomInt([dices], 1, 6 + 1);
	_('result-dices').innerHTML = values.map(value => {
		return `
			<div class="dice dice--${value}">
				<div class="dice-point"></div>
				<div class="dice-point"></div>
				<div class="dice-point"></div>
				<div class="dice-point"></div>
				<div class="dice-point"></div>
				<div class="dice-point"></div>
			</div>
		`;
	}).join('');
	_('result-values').innerHTML = values.join(', ');
	_('result-sum').innerHTML = math.sum(values);
	_('result-product').innerHTML = math.prod(values);
}
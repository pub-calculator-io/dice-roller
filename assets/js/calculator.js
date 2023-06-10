function roll(){
	// 1. validate & init
	const dices = input.get('number_of_dice').natural().lte(100).val();
	if(!input.valid()) return;
	_('result-values').innerHTML = '';
	_('result-sum').innerHTML = '';
	_('result-product').innerHTML = '';

	// 2. calculate
	const min = 1, max = 6;
	const rollsInterval = 75;
	let nRolls = 10;
	let timer = setInterval(()=>{
		const values = math.randomInt([dices], min, max);
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

		if(--nRolls != 0) return;
		clearInterval(timer);
		timer = null;
		
		// 3. output
		_('result-values').innerHTML = values.join(', ');
		_('result-sum').innerHTML = math.sum(values);
		_('result-product').innerHTML = math.prod(values);
	}, rollsInterval);
}
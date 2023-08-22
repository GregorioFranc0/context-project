class Calculator {
	constructor(total) {
		this.total = 0;
	}
	add(num) {
		return num + this.total;
	}
	subtract(num) {
		return num - this.total;
	}
	divide(num) {
		return num / this.total;
	}
	multiply(num) {
		return num * this.total;
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}

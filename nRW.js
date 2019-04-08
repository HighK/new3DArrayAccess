let CXCXCX;

class dTable {
	constructor(name) {
		this.name = name;
	}

	shows() {
		let table = CXCXCX;
		return table;
	}

	set() {
		try {
			CXCXCX = [[], [], [], []];
			console.log("complate!")
		} catch(e) {
			return e;
		}
	}

	show() {
		if(!isNaN(num)) {
			return [CXCXCX[1][num], CXCXCX[2][num], CXCXCX[3][num]];
		} else {
			throw "parameter is NOT number";
		}
	}

	create(one) {
		try{
			let ip = (CXCXCX[0].length)
			CXCXCX[0][ip] = ip;
			CXCXCX[1][ip] = one;
		} catch(e) {
			return e;
		}
	}

	create(one, two, three) {
		try{
			let ip = (CXCXCX[0].length)
			CXCXCX[0][ip] = ip;
			if(one != null) CXCXCX[1][ip] = one;
			if(two != null) CXCXCX[2][ip] = two;
			if(three != null) CXCXCX[3][ip] = three;
		} catch(e) {
			return e;
		}
	}
}

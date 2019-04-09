class dTable {
	constructor() {
		this.CXCXCX = [[],[],[],[]];
    	}

	shows() {
		let table = this.CXCXCX;
		return table;
	}

	set() {
		try {
			this.CXCXCX = [[], [], [], []];
			console.log("complate!")
		} catch(e) {
			return e;
		}
	}

	show(num) {
		if(!isNaN(num)) {
			return [this.CXCXCX[1][num], this.CXCXCX[2][num], this.CXCXCX[3][num]];
		} else {
			throw "parameter is NOT number";
		}
	}

	create(one) {
		try{
			let ip = (this.CXCXCX[0].length)
			this.CXCXCX[0][ip] = ip;
			this.CXCXCX[1][ip] = one;
			return eturn [this.CXCXCX[1][ip], this.CXCXCX[2][ip], this.CXCXCX[3][ip]];
		} catch(e) {
			return e;
		}
	}

	create(one, two, three) {
		try{
			let ip = (this.CXCXCX[0].length)
			this.CXCXCX[0][ip] = ip;
			if(one != null) this.CXCXCX[1][ip] = one;
			if(two != null) this.CXCXCX[2][ip] = two;
			if(three != null) this.CXCXCX[3][ip] = three;
		} catch(e) {
			return e;
		}
	}

	search(one, val) {
		let let = [];
		let child = [];
		for (let i=0; i<this.CXCXCX[0].length; i++) {
			if(val == this.CXCXCX[one][i]) {
				child = [this.CXCXCX[0][i], this.CXCXCX[1][i], this.CXCXCX[2][i], this.CXCXCX[3][i]];
				list.push(child);
				child = [];
			}
		}
		return list;
	}
}

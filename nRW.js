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
			throw e;
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
			throw e;
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
			throw e;
		}
	}

	search(one, val) {
		try {
			let list = [];
			let child = [];
			for (let i=0; i<this.CXCXCX[0].length; i++) {
				if(val == this.CXCXCX[one][i]) {
				child = [this.CXCXCX[0][i], this.CXCXCX[1][i], this.CXCXCX[2][i], this.CXCXCX[3][i]];
					list.push(child);
					list.one = child[1];
					list.two = child[2];
					list.three = child[3]
					child = [];
				}
			}
			return list;
		} catch(e) {
			throw e;
		}
	}
	marge(table, key) {
		try {
			let a = this.search(1, key);
			let b = table.search(1, key);
			if(a.two != undefined)
			return [a.two, a.three, b.two, b.three];
		} catch(e) {
			throw(e);
		}
	}
	last() {
		return this.search(0, this.CXCXCX.length-1);
	}
}

a = new dTable();
b = new dTable();
a.create("ID", "PW", "NICKNAME");
b.create("ID", "SCORE", "CASH");
a.create("id", "pw", "asd");
b.create(a.search(3, "asd").one, 0, 100);
a.create("user", "pw", "user");
b.create(a.search(3, "user").one, 0, 100);
b.shows();

b.search()

c = a.search(3, "김호민");
arr = [c.one, c.three, b.search(1, c.one).two];

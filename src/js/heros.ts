export class Hero {
	tds: HTMLCollectionOf<HTMLElement>;
	oldCell: number;
	constructor(tds: HTMLCollectionOf<HTMLElement>) {
		this.tds = tds;
		this.oldCell = 0;
	}

	get createRandomIntegers() {
		// делаем произвольное число - индекс для ичейки
		// не даем повториncя

		let resp = Math.floor(Math.random() * this.tds.length);

		if (this.oldCell === resp
			&& this.oldCell < (this.tds.length - 1)) {
			this.oldCell += 1;
		}
		else if (this.oldCell === resp
			&& this.oldCell === (this.tds.length - 1)) {
			this.oldCell -= 1;
		}
		else {
			return resp
		}
		return this.oldCell
	}

	set appending(ind: number) {
		this.tds[ind].classList.add('active');
	}

	removing() {
		document.querySelector('.active')?.classList.remove('active');
	}

	set counts(int: number) {
		//счетчик
		const counter = document.querySelector('.counter .count span:last-of-type') as HTMLElement;
		counter.innerHTML = String(int + 1);
	}

	get startGame() {
		const live: any = setInterval(() => {
			if (document.querySelector('.active')) this.removing();
			this.appending = this.createRandomIntegers as number;
		}, 1700);

		return live
	}

}

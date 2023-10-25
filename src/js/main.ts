import { doc } from "prettier";

const { Hero } = require("./heros.ts");



const tds = document.getElementsByClassName('td') as HTMLCollectionOf<HTMLElement>;
const goblin = new Hero(tds);
let live = goblin.startGame;

let limit = 0
let value = 0;

const play = (e: MouseEvent) => {

	if (e.target === document.querySelector('.active')) {
		goblin.counts = value;
		value++;
		limit = 0
		clearInterval(live);
		live = goblin.startGame;

	} else {
		limit++;
		if (limit === 5) {
			const htmlH3Element = document.createElement('h3') as HTMLElement
			htmlH3Element.innerHTML = 'The END';
			document.documentElement.removeEventListener('click', play)
			clearInterval(live)
			document.getElementsByClassName('table')[0].remove();

			document.getElementById('game')?.insertAdjacentElement('beforeend', htmlH3Element)

			return
		}
	}

	goblin.removing();
}

for (let i = 0; i < goblin.tds.length; i++) {
	goblin.tds[i].addEventListener('click', play, true);

}

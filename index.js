let pos_perso = {
	x: 0,
	y: 0
}
let pos_fruit = {
	x: 0,
	y: 0
}
const velocidade = 50;
let score = 0;

const fruta = document.getElementById('fruta');

MoveFruit();

document.addEventListener('keydown', (event) => {
	const key = event.key;

	const PlayerMove = {
		"w": () => pos_perso.y -= velocidade,
		"s": () => pos_perso.y += velocidade,
		"a": () => pos_perso.x -= velocidade,
		"d": () => pos_perso.x += velocidade
	}
	if (PlayerMove[key]) {
		PlayerMove[key]()
		if (pos_perso.x < 0) pos_perso.x = 0;
		if (pos_perso.x > 750) pos_perso.x = 750;
		if (pos_perso.y < 0) pos_perso.y = 0;
		if (pos_perso.y > 750) pos_perso.y = 750;

		personagem.style.transform = `translate(${pos_perso.x}px, ${pos_perso.y}px)`

		if (pos_perso.x === pos_fruit.x && pos_perso.y === pos_fruit.y) {
			score++;
			el_score.innerHTML = "Score: "+score;
			MoveFruit();
		}

		Y.innerHTML = "Y: " + pos_perso.y;
		X.innerHTML = "X: " + pos_perso.x;
	}
}, false);

function MoveFruit() {
	pos_fruit.x = getRandom(750);
	pos_fruit.y = getRandom(750);
	fruta.style.transform = `translate(${pos_fruit.x}px, ${pos_fruit.y}px)`
}

for (let i = 0; i < 760; i += 50) {
	for (let j = 0; j < 760; j += 50) {
		const pixel = document.createElement('div');
		pixel.classList.add('map');
		pixel.style.transform = `translate(${i}px, ${j}px)`;
		box.appendChild(pixel);
	}
}

GenerateMap();

function getRandom(max) {
	return Math.floor(Math.random() * (max / 50)) * 50;
}


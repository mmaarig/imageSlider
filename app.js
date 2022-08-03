const img = document.getElementById("img")
img.src = './Media/5.jpg'
let a = 3;

img.addEventListener('click', (event) => {
	const Xaxis = event.clientX;
	console.log(event.clientX);

	a++
	switch (a) {
		case 1:
			img.src = './Media/1.jpg'
			break;
		case 2:
			img.src = './Media/2.jpeg'
			break;
		case 3:
			img.src = './Media/3.jpeg'
			break;
		default:
			img.src = './Media/4.jpeg'
			break;
	}
	console.log(a)
	if (a > 8 || a < 0) a = 1
});
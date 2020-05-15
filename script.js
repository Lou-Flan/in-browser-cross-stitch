const stitches = document.querySelectorAll('span');
    
function setEvents(id, colourOne, colourTwo){
    document.getElementById(`${id}`)
    .addEventListener('click', () => {
		setColour(`${colourOne}`, `${colourTwo}`);
    })
};
    
setEvents('blue', 'rgba(50, 192, 203, 1)', 'rgba(77, 223, 219, 1)');
setEvents('yellow', 'rgb(255, 244, 87)', 'rgb(233, 178, 0)');
setEvents('red', 'rgb(203, 50, 50)', 'rgb(253, 107, 107)');
setEvents('green', 'rgb(33, 230, 138)', 'rgb(10, 200, 0)');
setEvents('clear');
setEvents('black', 'rgb(0, 0, 0)', 'rgb(79, 79, 79)');
setEvents('white', 'white', 'rgb(200, 200, 200)')

let stitchColour = `repeating-linear-gradient(-45deg, rgb(0, 0, 0), rgb(79, 79, 79) 15%, rgb(0, 0, 0) 20%)`;

stitches.forEach((stitch, index) => {
	stitches[index].addEventListener('click', () => {
		stitches[index].style.background = stitchColour;
	});
});

function setColour(colourOne, colourTwo) {
    console.log(colourOne, colourTwo)
    if((colourOne || colourTwo) === 'undefined'){ return stitchColour = 'transparent'}
	stitchColour = `repeating-linear-gradient(-45deg, ${colourOne}, ${colourTwo} 15%, ${colourOne} 20%)`;
}

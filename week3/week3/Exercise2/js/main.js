// Function to generate a random hexadecimal color
function getRandomHexColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i =0 ; i<6 ;i++){
         color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const button = document.querySelector('button');
const result = document.getElementById("result-color");
const body = document.body;


button.addEventListener( 'click', function(){
    result.textContent = getRandomHexColor();
    body.style.backgroundColor = getRandomHexColor();
    });

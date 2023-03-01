// Events in JavaScript 

// on clicking on button it changed the background color of button

/*
const Heading = document.querySelector('#heading');
const Button =  document.querySelector('#btn');

const changeColorOnClick = (event) => {
  
 Heading.style.backgroundColor = 'yellow';

  console.log('Button-Clicked', event);
}

Button.addEventListener('click' , changeColorOnClick)
*/


// Bulb On Of Project

const button = document.querySelector('#btn')
const bulb =  document.querySelector('#bulb')

// console.log(button, bulb);

const bulbOn = () => {
 
     if  (bulb.src.match('off'))
     {
        bulb.src = '../images/bulb-on.gif'

        button.innerHTML ="Click to Off Bulb"
     }

     else {
        bulb.src = '../images/bulb-off.gif'

        button.innerHTML="Click to On Bulb"
     }
}


button.addEventListener('click' , bulbOn)







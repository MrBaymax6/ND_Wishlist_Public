//Code that allows button to go to the top of the webpage.
//name of the element ("buttonToTop")
document.getElementById("buttonToTop")
    //Event occurs when the users clicks on it
    .addEventListener('click', function(){
        //Scrolls to the top of the webpage with smooth movement.
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        
    }
);
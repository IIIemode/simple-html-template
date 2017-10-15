(() => {

    const d = document;
    const tshirt = d.querySelectorAll('.sections-rightSection-category'); 
    const smallTshirt = tshirt[0].querySelector('#smallTshirt');
    const middleTshirt = tshirt[0].querySelector('#middleTshirt');
    const largeTshirt = tshirt[0].querySelector('#largeTshirt');
    const whiteTshirt = tshirt[1].querySelector('#whiteTshirt');
    const yellowTshirt = tshirt[1].querySelector('#yellowTshirt');
    const greenTshirt = tshirt[1].querySelector('#greenTshirt');

    const pictureTshirt = d.querySelectorAll('.sections-leftSection img')[0];

    whiteTshirt.addEventListener('click', ( {target} ) => {
        pictureTshirt.src = 'img/tshirts/tshirt_white.jpg';
        for (var i = 0; i < tshirt[1].children.length; i++) {
            if (tshirt[1].children[i].classList.contains('sections-rightSection_activeColor')) {
                tshirt[1].children[i].classList.remove('sections-rightSection_activeColor');
            }        
        }
        target.classList.add('sections-rightSection_activeColor');      
    });

    yellowTshirt.addEventListener('click', ( {target} ) => {
        pictureTshirt.src = 'img/tshirts/tshirt_yellow.jpg';
        for (var i = 0; i < tshirt[1].children.length; i++) {
            if (tshirt[1].children[i].classList.contains('sections-rightSection_activeColor')) {
                tshirt[1].children[i].classList.remove('sections-rightSection_activeColor');
            }        
        }
        target.classList.add('sections-rightSection_activeColor');      
    });

    greenTshirt.addEventListener('click', ( {target} ) => {
        pictureTshirt.src = 'img/tshirts/tshirt_green.jpg';
        for (var i = 0; i < tshirt[1].children.length; i++) {
            if (tshirt[1].children[i].classList.contains('sections-rightSection_activeColor')) {
                tshirt[1].children[i].classList.remove('sections-rightSection_activeColor');
            }        
        }
        target.classList.add('sections-rightSection_activeColor');      
    });

})();



(() => {

    const d = document;
    const tshirt = d.querySelectorAll('.right-section__category');
    const whiteTshirt = tshirt[1].querySelector('#whiteTshirt');
    const yellowTshirt = tshirt[1].querySelector('#yellowTshirt');
    const greenTshirt = tshirt[1].querySelector('#greenTshirt');
    const pictureTshirt = d.querySelectorAll('.left-section__img')[0];

    whiteTshirt.addEventListener('click', ( {target} ) => {
        pictureTshirt.src = 'img/tshirts/tshirt_white.jpg';
        for (var i = 0; i < tshirt[1].children.length; i++) {
            if (tshirt[1].children[i].classList.contains('right-section__color_active')) {
                tshirt[1].children[i].classList.remove('right-section__color_active');
            }        
        }
        target.classList.add('right-section__color_active');      
    });

    yellowTshirt.addEventListener('click', ( {target} ) => {
        pictureTshirt.src = 'img/tshirts/tshirt_yellow.jpg';
        for (var i = 0; i < tshirt[1].children.length; i++) {
            if (tshirt[1].children[i].classList.contains('right-section__color_active')) {
                tshirt[1].children[i].classList.remove('right-section__color_active');
            }        
        }
        target.classList.add('right-section__color_active');      
    });

    greenTshirt.addEventListener('click', ( {target} ) => {
        pictureTshirt.src = 'img/tshirts/tshirt_green.jpg';
        for (var i = 0; i < tshirt[1].children.length; i++) {
            if (tshirt[1].children[i].classList.contains('right-section__color_active')) {
                tshirt[1].children[i].classList.remove('right-section__color_active');
            }        
        }
        target.classList.add('right-section__color_active');      
    });

})();

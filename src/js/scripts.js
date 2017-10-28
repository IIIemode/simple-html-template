(() => {

    const d = document;
    const tshirt = d.getElementById('choiceForm');
    const leftSectionImg = d.querySelectorAll('.left-section__img')[0];

    tshirt.addEventListener('click', ( {target} ) => {
        if (target.name === 'color') {
            const colors = target.parentNode.children;
            leftSectionImg.src = 'img/tshirts/tshirt_' + target.dataset.color + '.jpg';
            for (let i = 0; i < colors.length; i++) {
                if (colors[i].classList.contains('right-section__color_active')) {
                    colors[i].classList.remove('right-section__color_active');
                }        
            }
            target.classList.add('right-section__color_active');
        }
    });

})();

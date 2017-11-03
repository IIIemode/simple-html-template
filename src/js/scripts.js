(() => {

    const d = document;
    const tShirt = d.getElementById('choiceForm');
    const leftSectionImg = d.querySelectorAll('.product-image__img')[0];

    tShirt.addEventListener('click', ( {target} ) => {
        if (target.name === 'color') {
            const colors = target.parentNode.children;
            leftSectionImg.src = 'img/tshirts/tshirt_' + target.dataset.color + '.jpg';
            for (let i = 0; i < colors.length; i++) {
                if (colors[i].classList.contains('product-info__color_active')) {
                    colors[i].classList.remove('product-info__color_active');
                }
            }
            target.classList.add('product-info__color_active');
        }

        if (target.name === 'size') {
            const sizes = target.parentNode.children;
            for (let i = 0; i < sizes.length; i++) {
                if (sizes[i].classList.contains('product-info__size_active')) {
                    sizes[i].classList.remove('product-info__size_active');
                }
            }
            target.classList.add('product-info__size_active');
        }
    });

})();

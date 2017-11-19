import PropertySelector from './property-selector.js';

$(() => {
    const Dispatcher = $('#choiceForm')[0];  

    loadPage();

    new PropertySelector($('#colorList')[0]);
    new PropertySelector($('#sizeList')[0]);

    $(Dispatcher).on('property-selected', ev => {
        const data = ev.detail;

        if (data.type === 'size') {
            changePrice();
            showCurrentBorder(data.type, data.value);
            setToLocalStorage(data.type, data.value);
        }

        if (data.type === 'color') {
            changePicture(data.value);
            changePrice();
            showCurrentBorder(data.type, data.value);
            setToLocalStorage(data.type, data.value);
        }
    });

    function changePicture(color) {
        const pathToTshirt = 'img/tshirts/tshirt_';
        $('#productPicture__tablet-img').attr('srcset',pathToTshirt + color + '.jpg');
        $('#productPicture__img').attr('src', pathToTshirt + color + '.jpg');
    }

    function changePrice() {
        $('#priceVal').text(+new Date() % 10000 + '₽');
    }

    function showCurrentBorder(type, value) {
        const classNameItem = '.product-info__' + type + '_' + value;
        const classNameItemType = '.product-info__' + type;
        const classNameItemActive = 'product-info__' + type + '_active';

        $(classNameItemType).removeClass(classNameItemActive);
        $(classNameItem).addClass(classNameItemActive);
    }

    function setToLocalStorage(type, value) {
        localStorage.setItem(type, value);
    }

    function loadPage() {
        const color = localStorage.getItem('color');
        const size = localStorage.getItem('size');

        if (size) {
            showCurrentBorder('size', size);
        }

        if (color) {
            changePicture(color);
            showCurrentBorder('color', color);
        }
    }

});

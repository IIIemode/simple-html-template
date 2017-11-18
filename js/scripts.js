import PropertySelector from './property-selector.js';

const d = document;
const Dispatcher = d.getElementById('choiceForm');

loadPage();

new PropertySelector(d.getElementById('colorList'));
new PropertySelector(d.getElementById('sizeList'));

Dispatcher.addEventListener('property-selected', ev => {
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
    d.getElementById('productPicture__tablet-img').srcset = pathToTshirt + color + '.jpg';
    d.getElementById('productPicture__img').src = pathToTshirt + color + '.jpg';
}

function changePrice() {
    document.getElementById('priceVal').innerHTML = +new Date() % 10000 + '₽';
}

function showCurrentBorder(type, value) {
    const classNameItem = '.product-info__' + type + '_' + value;
    const classNameItemType = '.product-info__' + type;
    const classNameItemActive = 'product-info__' + type + '_active';
    const items = d.querySelectorAll(classNameItemType);

    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains(classNameItemActive)) {
            items[i].classList.remove(classNameItemActive);
        }
    }

    d.querySelectorAll(classNameItem)[0].classList.add(classNameItemActive);
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

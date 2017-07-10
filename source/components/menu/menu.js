import './menu.scss';

export default function(arr) {
    var ulElem = document.createElement('ul');
    var listItem = '';

    arr.forEach( function(e) {
        listItem += '<li>' + e + '</li>';
    });

    ulElem.innerHTML = listItem;
    return ulElem;
};
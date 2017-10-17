/*console.log('functions');

function toggleClass(element, className){
    if (!element || !className){
        return;
    }

    var classString = element.className;
    var nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}




const menu = document.getElementById('menu');

const links = document.getElementsByClassName('menuLink');

console.log('menu.js');
menu.onclick = function() {
    console.log('reached hidden');
    toggleClass(links, 'hidden');
}
*/

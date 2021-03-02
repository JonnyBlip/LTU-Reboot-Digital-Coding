var hoverElement = document.querySelector('.preventClick');
//console.log(hoverElement);
function alertBox(event){
    event.preventDefault();
    alert('You clicked a link and i stopped it');
}

hoverElement.addEventListener('click',alertBox);
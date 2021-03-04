
/*-----     Variables     -----*/
const arrAnimalFilters = document.querySelectorAll('.animalFilter');
const arrAnimalImages = document.querySelectorAll('.animalImage');
// console.log(arrAnimalFilters);
//console.log(arrAnimalImages);

/*-----     Event Listeners     -----*/
for(counter=0;counter < arrAnimalFilters.length; counter++){
    // console.log(counter);
    let currentFilter = arrAnimalFilters[counter];
    // console.log(currentFilter);
    currentFilter.addEventListener('click',filterImages);
}

/*-----     Functions     -----*/
function filterImages(event){
    // console.log(event.target.innerHTML);
    var animalName = event.target.innerHTML;
    console.log(animalName);
    for(counter=0; counter < arrAnimalImages.length; counter++){
        let currentImage = arrAnimalImages[counter];
        currentImage.style.display = 'none';
        //console.log(currentImage);
        if(animalName == 'All'){
            currentImage.style.display = 'inline';
        } else {
            let currentImageAnimal = currentImage.getAttribute('animal');
            console.log(currentImageAnimal);
            if(currentImageAnimal == animalName){
                currentImage.style.display = 'inline';
            }
        }
    }
}
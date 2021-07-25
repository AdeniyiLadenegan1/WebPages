
let slideTimer = setInterval('SlideImage();', 4000);
let count = 0;
let imageWidth = 400;
const IMAGE_COUNT = 10;

function SlideImage() {
    count++;
    if(count <= IMAGE_COUNT - 1) {
        $('#sliderImages').animate(
            {
                left: - count * imageWidth
            }, 420, 'swing');
    }
    else {
        count = 0;
        $('#sliderImages').animate(
            {
                left: - count * imageWidth
            }, 300, 'swing');
    }
}
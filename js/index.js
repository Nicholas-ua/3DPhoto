window.onload = init;

var car;
function init(){

    car = $('.car').ThreeSixty({
        totalFrames: 24, // Total no. of image you have for 360 slider
        endFrame: 24, // end frame for the auto spin animation
        currentFrame: 1, // This the start frame for auto spin
        imgList: '.threesixty_images', // selector for image list
        progress: '.spinner', // selector to show the loading progress
        imagePath:'assets/car/', // path of the image assets
        filePrefix: '', // file prefix if any
        ext: '.jpg', // extention for the assets
        height: 1000,
        width: 447,
        navigation: true
    });

}
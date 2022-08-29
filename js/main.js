$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        dots: false,
        loop: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 2,
                margin: 32,        


                // stagePadding: 90,
            },
            // breakpoint from 480 up
            601 : {
                items: 2,
            },
            // breakpoint from 768 up
            1001 : {
                items: 3,       
                margin: 48,
            }
        }
    });
});

//   Video

const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        videoPicture.classList.add('hidden');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('none');
        video.play()
    } else {
        // videoPicture.classList.remove('none');
        videoBtn.classList.remove('none');
        videoWrapper.classList.add('video-overlay');
        video.pause();
    }

})

// Mobile Nav

const openNavBtn = document.querySelector('#openMobileNav');
const closeNavBtn = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');

openNavBtn.onclick = function () {
    mobileNav.classList.remove('none');
    document.body.classList.add('no-scroll');
}
closeNavBtn.onclick = function () {
    mobileNav.classList.add('none');
    document.body.classList.remove('no-scroll');

}
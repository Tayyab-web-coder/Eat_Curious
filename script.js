function LenisScrolling() {
    const lenis = new Lenis({
        duration: 1.2, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        direction: 'vertical', 
        gestureDirection: 'vertical',
        smooth: true, 
        mouseMultiplier: 1, 
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false 
      })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}
LenisScrolling()
function Navbar() {
    let nav__icon = document.querySelector('.nav__icon');
    let nav_Toggler = document.querySelectorAll('.nav_Toggler');

    nav__icon.addEventListener('click', () => {
        nav_Toggler.forEach((element) => {
            element.classList.toggle('active');
        });
    });
}

Navbar();


function navAnimation() {
    const showAnim = gsap.from('.nav__content', {
        yPercent: -100,
        paused: true,
        duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
    });
}
navAnimation()

function intro() {
    let tl = gsap.timeline({
        duration: 1
    });
    tl.from('.intro__title1', {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        duration: 0.5,
        ease: "elastic.out(0.6)",
    }, 'a')
    tl.from('.squiggle1', {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        duration: 0.5,
        ease: "elastic.out(0.6)",
    }, 'a')
    tl.from('.intro img', {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        duration: 0.5,
        ease: "elastic.out(0.6)",
    }, 'b')

    tl.from('.squiggle2', {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        duration: 0.5,
    }, 'b')
    tl.from('.squiggle3', {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        duration: 0.5,
    }, 'b')
    tl.from('.intro__title2', {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        duration: 0.5,
        ease: "elastic.out(0.6)",
    })
}
intro()


function Page2() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'top top',
            end: 'bottom -270%',
            pin: true,
            scrub: 1,
        }
    })
    tl.to('#section_1', {
        y: '-100%'
    })
    tl.to('#section_2', {
        y: '-100%'
    })
    tl.to('#section_3', {
        y: '-100%'
    })
    tl.to('#section_4', {
        y: '0%'
    })

}
Page2()

function Section1() {
    const elements = ['#section_1 .image', '#section_1 .text', '#section_1 .Mobile_title'];

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section_1',
            start: 'top 30%',
            end: 'bottom 50%',
            duration: 1.5
        }
    });

    elements.forEach((element, index) => {
        tl.from(element, {
            opacity: 0,
            scaleX: 0,
            scaleY: 0,
            duration: 1.5,
            ease: "elastic.out(0.6)",
        }, 'a');
    });
}
Section1();

function Features() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.features',
            start: 'top 30%',
            end: 'bottom 50%',
            duration: 0.2
        }
    });

    const cards = document.querySelectorAll('.features_card');

    cards.forEach((card, index) => {
        tl.from(card, {
            opacity: 0,
            scaleX: 0,
            scaleY: 0,
            duration: 0.3,
            ease: "elastic.out(0.1)",
        });
    });

    tl.from('.features_header', {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        duration: 0.6,
        ease: "elastic.out(0.6)",
    }, 0);
}

Features();

function Tile() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.tiles',
            start: 'top center',
            end: 'bottom center',
            duration: 1
        }
    });

    const cards = document.querySelectorAll('article');

    cards.forEach((card, index) => {
        tl.from(card, {
            opacity: 0,
            scaleX: 0,
            scaleY: 0,
            duration: 0.2,
            ease: "elastic.out(0.2)",
        });
    });
    tl.from('.center', {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        duration: 0.2,
        ease: "elastic.out(0.2)",
    });
    tl.to('.hidden svg', {
        scaleY: 0.2,
        duration: 0.4,
        repeat: 1,
        ease: "bounce.out",
    });

    tl.to('.hidden svg', {
        scaleY: 1,
        duration: 0.4,
        ease: "bounce.out",
    });
}
Tile();

function Text_and_Image() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.text-and-image',
            start: 'top center',
            end: 'bottom center',
            duration: 0.4
        }
    });

    tl.from('.text-and-image__text', {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        duration: 0.5,
        ease: "elastic.out(0.2)",
    });
    tl.from('.text-and-image__half', {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        duration: 0.5,
        ease: "elastic.out(0.2)",
    });

}
Text_and_Image()

function initSwiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 70,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 500px
            500: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 50
            }
        }
    });
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.swiper',
            start: 'top 0%',
            end: 'bottom center',
            duration:0.1,
        }
    });

    const cards = document.querySelectorAll('.swiper-slide');

    cards.forEach((card, index) => {
        tl.from(card, {
            opacity: 0,
            scaleX: 0,
            scaleY: 0,
            // duration: 0.5,
            // ease: "elastic.out(0.1)",
        });
    });
}

initSwiper();

function RotateSvg() {
    gsap.to("#sticker", {
        scrollTrigger: {
            trigger: ".main",
            scrub: 1,
            start: 'top top',
            end: 'bottom bottom',
        },
        rotation:360,
        duration: 5,
        ease: "none",
    });
}
RotateSvg()
function Footer() {
    const panel1 = document.querySelector('.contact')
    const panel2 = document.querySelector('footer')

    ScrollTrigger.create({
        trigger: panel1,
        start: "top 0%",
        pin: panel1,
        pinSpacing: false
    });

    ScrollTrigger.create({
        trigger: panel2,
        start: "top top",
        end: "bottom bottom",
        pin: panel1,
        pinSpacing: false
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start: 'top center',
            end: 'bottom center',
            duration: 0.2
        }
    });
    tl.to('footer svg', {
        scaleY: 0.2,
        duration: 0.5,
        repeat: 1,
        ease: "bounce.out",
    });
    tl.to('footer svg', {
        scaleY: 1,
        duration: 0.5,
       ease: "bounce.out",
    });

}
Footer()


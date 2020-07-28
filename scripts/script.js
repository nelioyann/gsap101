// Genesis of Jquery
window.$ = document.querySelector.bind(document)
window.$$ = document.querySelectorAll.bind(document)
// Cheap Log function
const lg = (el) =>{
    console.log(el);
};

const setup = () =>{
    gsap.set(".hero__subtitle, .hero__title, .hero__overlay, .hero__button", {
        autoAlpha: 0
})}

const preloader = () =>{
    gsap.timeline()
        .add('start')
        .to(".preloader__img", {
            autoAlpha: 0,
            delay: 4,
            duration: 0.3
        }, "start")
        .to(".preloader", {
            top: "-100vh",
            duration: 2,
            ease: "power3.out"
        })
        .add("end")
        .to(".hero__overlay",{
            autoAlpha: 1,
        }, "end-=1")

}
// Actual code
window.addEventListener("DOMContentLoaded", ()=>{
    setup()
    preloader()
    lg("This page is working")
    lg($("body"))

})
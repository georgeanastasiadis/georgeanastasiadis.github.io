//Animation for home page
$(document).ready(function(){
    $(".home").animate({
        left: '45%'
    },2000);
});


function selectElementByClass(className) {
    return document.querySelector(`.${className}`);
}

const sections = [
    selectElementByClass('home'),
    selectElementByClass('about'),
    selectElementByClass('resume'),
    selectElementByClass('contact'),
];

const navItems = {
    home: selectElementByClass("nav-home-tab"),
    about: selectElementByClass("nav-about-tab"),
    resume: selectElementByClass("nav-resume-tab"),
    contact: selectElementByClass("nav-contact-tab"),
}

const ObserverOptions = {
    threshold: 0.3
};

//use of observer API to make active the current section 
function observerCallback(entries, observer){
    if($(window).width()>767){
        entries.forEach((element) => {
            if (element.isIntersecting){
                //target returns the element where the event occured
                const navItem = navItems[element.target.id]; 
                navItem.classList.add('active');
                Object.values(navItems).forEach((item)=>{
                    if (item != navItem){
                        item.classList.remove('active');
                    }
                });
            }
        });
    };
}

const observer = new IntersectionObserver(observerCallback, ObserverOptions);

sections.forEach((sec) => observer.observe(sec));

//Closing navbar after user clicks a link
 $('#offcanvasNavbar2 a').click(function(){
    if($(window).width()<=767){
        setTimeout(function(){
            $('.offcanvas').offcanvas('hide');
        },700);
    };
});
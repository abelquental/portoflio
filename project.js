// heaven
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 5, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1100, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});



// page
render();

function render() {
    // menu nav
    var menuContent = `
        <a class="menu-btn" id="home" href="/index.html" ></a>
        <div class="menu-container">
            <a class="menu-btn" id="work-list">...</a>
            <a class="menu-btn" id="about" href="/about.html">?</a>
        </div>
    `;
    var menu = document.getElementById('menu');
    menu.insertAdjacentHTML('afterbegin', menuContent);

    // menu object
    var menuOpenContent = `
        <div class="work-more-list-container">
            <div class="work-list-container"></div>
        </div>
        <div class="work-list-img-container" id="work-list-img-container"></div>
    `;
    menu.insertAdjacentHTML('afterend', menuOpenContent);

    // footer
    var footerContent = `
        <div class="contact-container mail">
                <li class="contact-title">Contact me at</li>
                <a class="contact" href="mailto:hello@abelquental.com">hello@abelquental.com</a>
            </div>
            <div class="contact-container social">
                <li class="contact-title">Find me at</li>
                <a href="https://www.instagram.com/abeldelisboa/" class="insta">Instagram</a>
                <br>
                <a href="https://www.behance.net/abelquental" class="behance">Behance</a>
                <br>
                <a href="https://www.linkedin.com/in/abelquental/" class="linkedin">Linkedin</a>
            </div>
        <div class="copyright">© Abel Quental 2021</div>
    `;
    var footer = document.getElementById('footer');
    footer.insertAdjacentHTML('afterbegin', footerContent);

    // more
    var moreContent = `
        <div class="more-open-list" data-aos="animation-text">more...</div>
    `;
    footer.insertAdjacentHTML('beforebegin', moreContent);

    



    // Project
    var page = document.title;
    pageName = page.slice(15);
    let pageFilter = projs_new.find(pageFilter => pageFilter.title === pageName);
    
    let images = pageFilter['images'];
    let imagesPos = pageFilter['images_pos'];
    let text = pageFilter['text'];
    let textPos = pageFilter['text_pos'];
    let projName = pageFilter['title'];
    
    console.log(images.length);

    // load text
    var projectContentText = `
        <span class="project-title-container ${textPos}" data-aos="animation-text">
            <div class="project-more-icon new"></div><a href="/nobody.html">${projName}</a>${text}
        </span>
    `;

    var articleContainer = document.querySelector(".project-container");
    articleContainer.insertAdjacentHTML('afterbegin', projectContentText);


    // load images
    var g;
    for (g = images.length; g--;) {
        var imageLoad = images[g];
        var imagePosLoad = imagesPos[g];

    if  (imageLoad === "<br>") {
        var projectContentImg = `<br>`;
    } else {
        var projectContentImg = `
            <div class="img-container ${imagePosLoad}" data-aos="animation">
                <img src="${imageLoad}">
            </div>
        `;
    }   
    
    var projImgContainer = document.querySelector(".project-image-container");       
    
    projImgContainer.insertAdjacentHTML('afterbegin', projectContentImg);       
        
        
    };
        
            // load data
            var i
            for (i = 0; i < projs_new.length; i++) {
    
            // index
            var indexNum = ((projs_new[i])['index']);
            var indexPage = ((projs_new[i])['html_page']);
    
            // infos
            var title = ((projs_new[i])['title']);
            var descMenu = ((projs_new[i])['desc_menu']);
            var year = ((projs_new[i])['year']);
    
            // icons
            var newIcon = ((projs_new[i])['new']);
    
            // Menu
            var showInMenu = ((projs_new[i])['show_menu']);
    
            if (showInMenu == true) {
                // add item menu
                var indexNumMenu = 'menu' + indexNum;
                var newMenuItem = `
                <span class="work-list-item" id="${indexNumMenu}">
                    <a class="menu-title" id="${indexNumMenu}" href="${indexPage}">${title} </a> 
                    <p id="${indexNumMenu}">${descMenu}</p>
                    <p id="${indexNumMenu}">— ${year}</p>
                </span>
                `;
    
                var workListContainer = document.querySelector('.work-list-container');
                workListContainer.insertAdjacentHTML('afterbegin', newMenuItem);
    
                var menuImgContainer = document.getElementById(indexNumMenu);
                menuImgContainer.addEventListener('mouseover', overMenu);
                menuImgContainer.addEventListener('mouseout', mouseOut);
    
                // icons in menu
                if (newIcon == true) {
                    // console.log( indexNum + " new icon")
                    var addNewIconMenu = `
                    <div id="${indexNumMenu}" class="project-more-icon new"></div>
                    `;
                    var menuListContainer = document.querySelector('.menu-title');
    
                    menuListContainer.insertAdjacentHTML('afterend', addNewIconMenu);
                };
            }
        }    
    
}










// menu
var listBtn = document.querySelector('#work-list');
var listContainer = document.querySelector('.work-more-list-container');
var listBtn2 = document.querySelector('.more-open-list');


function openList() {
    var listBtnContent = listBtn.textContent;
    listContainer.classList.toggle('open');
    document.body.classList.toggle('noscroll');
    scroll(0,0);
    if (listBtnContent == "...") {
        listBtn.innerHTML = ("x");
    } else {
        listBtn.innerHTML = ("...");
    }
};

listBtn.addEventListener('click', openList);
listBtn2.addEventListener('click', openList);



// menu hover
function overMenu(evt) {
    evt = evt || window.event;
    var X = evt.srcElement.id;
    var menuImageID = X.slice(4);
    var thumbnailsMenu = (projs_new[menuImageID])['thumbnails_menu'];
    var menuImgContainer = document.getElementById('work-list-img-container');
    menuImgContainer.style.backgroundImage = "url('" + thumbnailsMenu + "')";
};

function mouseOut() {
    var menuImgContainer = document.getElementById('work-list-img-container');
    menuImgContainer.style.backgroundImage = "url('')";
};






console.log('Designed and Developed by Abel Quental\nDesigned and Developed by Abel Quental\nDesigned and Developed by Abel Quental');

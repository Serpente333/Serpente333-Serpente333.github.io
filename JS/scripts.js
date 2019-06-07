//DOCUMENT LOAD
$(document).ready(function(){
   loadHtml();
   setTimeout(devetkaResize, 10,window.innerWidth);
   setTimeout(setActiveNav, 10, 'activate');
   setTimeout(navIndicatorResize, 10,window.innerWidth);
   setTimeout(setActiveHeader, 50);
   setTimeout(startCarousel, 60)
});

//RENDER SUPPORT HTMLS
function loadHtml() {
    $('#navigation').load("../SupportHTML/Nav.html");
    $('#footer').load("../SupportHTML/Footer.html");
    $('#header').load("../SupportHTML/Header.html");
};

//HELPER FUNCTIONS
function getFileName() {
     var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1, url.length-5);
    return filename;
}
//HEADER FUNCTIONS

function startCarousel() {
    $('.carousel').carousel({
             interval: 3000
         })
}

function setActiveHeader() {
   var filename = getFileName();
   var carouselItem = $('#header-' + filename);
   var carouselIndicator = $('#header-indicator-' + filename);
   carouselItem.addClass('active');
   carouselIndicator.addClass('active');
}

//NAVIGATION FUNCTIONS
var timecheck;
$('#navigation').on('mouseenter', '.nav-link', function() {
    setTimeout(setActiveNav, 100,'deactivate');
    clearTimeout(timecheck);
})
$('#navigation').on('mouseleave', '.nav-link', function() {
    timecheck = setTimeout(setActiveNav, 300,'activate');
})
/*function navHover() {
   this.navitems = $('.nav-link').not('.active')
   console.log(navitems);
   navitems.mouseenter(setActive('deactivate'));
   navitems.mouseleave(setActive('activate'));
}*/
var navitems;

function setActiveNav(string) {
    filename = getFileName();
    if (string === 'activate') {
       $('#' + filename).addClass('activeNav'); 
    }
    //presumed string === deactivate
    else {
       $('#' + filename).removeClass('activeNav');
    }
}

function devetkaResize(windowSize) {
    var devetka = document.getElementById('tim-devetka')
    if (windowSize < 995 & windowSize >= 768) {
        devetka.innerHTML = 'Devetka'; 
        }
    else {
        devetka.innerHTML = 'Tim Devetka';
    }
}

function navIndicatorResize(windowSize) {
    if (windowSize < 768 ) {
    $('#nav-indicator').addClass('nav-indicator-show');
    $('#nav-indicator').html($('title').html());
    }
    
    else {
    $('#nav-indicator').removeClass('nav-indicator-show');
    $('#nav-indicator').html(''); 
    }
    
}

//NAVIGATION EVENT

//RESIZE
$(window).resize(function() {
    devetkaResize(window.innerWidth);
    navIndicatorResize(window.innerWidth);
});  




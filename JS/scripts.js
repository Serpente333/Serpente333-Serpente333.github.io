//DOCUMENT LOAD
$(document).ready(function(){
   loadHtml();
   setTimeout(devetkaResize, 10,window.innerWidth);
   setTimeout(setActive, 10, 'activate');
   setTimeout(navIndicatorResize, 10,window.innerWidth);
});

//RENDER NAVIGATION
function loadHtml() {
    $('#navigation').load("../SupportHTML/Nav.html");
};

var timecheck;
$('#navigation').on('mouseenter', '.nav-link', function() {
    setTimeout(setActive, 100,'deactivate');
    clearTimeout(timecheck);
})
$('#navigation').on('mouseleave', '.nav-link', function() {
    timecheck = setTimeout(setActive, 200,'activate');
})
/*function navHover() {
   this.navitems = $('.nav-link').not('.active')
   console.log(navitems);
   navitems.mouseenter(setActive('deactivate'));
   navitems.mouseleave(setActive('activate'));
}*/
var navitems;

//NAVIGATION FUNCTIONS
function setActive(string) {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1, url.length-5);
    if (string === 'activate') {
       $('#' + filename).addClass('active'); 
    }
    //presumed string === deactivate
    else {
       $('#' + filename).removeClass('active');
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




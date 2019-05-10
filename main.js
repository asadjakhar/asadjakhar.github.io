$(document).ready( ()=>{
    /* 
    //alert('ok')
    var pinSection1 = new ScrollMagic.Scene(
        {
            triggerElement: '.section-1',
            triggerHook: 0,
            duration: '50%'
        }
    ).setPin('.section-1')
    .addIndicators()
    .addTo(controller)



    var sidebar = new ScrollMagic.Scene(
        {
            triggerElement: 'aside',
            triggerHook: 0,
            duration:'300%'
        }
    ).setPin('aside')
    .addIndicators()
    .addTo(controller)
    */

    /*
   let currentActive = 1
   $("#scroll-section-1").click(function() {
    let animateDuration = 500
    if(currentActive - 1 > 1){
        animateDuration = 2000
    }

    $('html, body').animate({
        scrollTop: $(".section-1").offset().top
    }, 500);
    currentActive = 1

});
    
   $("#scroll-section-2").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-2").offset().top
        }, 500);
        currentActive = 2

    });
    $("#scroll-section-3").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-3").offset().top
        }, 500);
        currentActive = 3
    });
*/
const scroller = new SweetScroll({
    /* some options */
        trigger: '[data-scroll]',       // Selector for trigger (must be a valid css selector)
        header: '[data-scroll-header]', // Selector or Element for fixed header (Selector of must be a valid css selector)
        duration: 1000,                 // Specifies animation duration in integer
        easing: 'easeOutQuint',         // Specifies the pattern of easing
        offset: 10,                      // Specifies the value to offset the scroll position in pixels
        vertical: true,                 // Enable the vertical scroll
        horizontal: false,              // Enable the horizontal scroll
        cancellable: true,              // When fired wheel or touchstart events to stop scrolling
        updateURL: false,               // Update the URL hash on after scroll (true | false | 'push' | 'replace')
        preventDefault: true,           // Cancels the container element click event
        stopPropagation: true,          // Prevents further propagation of the container element click event in the bubbling phase
      
        // Callbacks
        before: (e)=>{console.log(e)},
        after: null,
        cancel: null,
        complete: null,
        step: null,
  });
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});
  var pinNav = new ScrollMagic.Scene(
  {
      triggerElement: '.my-nav',
      triggerHook: 0,
      
  }
  ).setPin('.my-nav', {pushFollowers: false})
  .addTo(controller)

  var pinSection1 = new ScrollMagic.Scene(
    {
        triggerElement: '.section-1',
        duration: '50%' ,
        triggerHook:0
    }
    ).setPin('.section-1')
    .addTo(controller)

    var pinSection2 = new ScrollMagic.Scene(
        {
            triggerElement: '.section-2',
            duration: '50%' ,
            triggerHook:0
        }
        ).setPin('.section-2')
        .setClassToggle('#portfolioContainer', 'show-portfolio')
        .setClassToggle('.sections', 'sect2-pin')
        .addTo(controller)
        
    var pinSection3 = new ScrollMagic.Scene(
        {
            triggerElement: '.section-3',
            triggerHook:0
        })
        .setClassToggle('.sections', 'galaxus')
        .addTo(controller)
/*
    var pinSection2 = new ScrollMagic.Scene(
        {
            triggerElement: '.section-2',
            triggerHook: 0,
            duration: '50%'
        }
        ).setPin('.section-2')
        //.addIndicators()
        .addTo(controller)
        var pinSection3 = new ScrollMagic.Scene(
            {
                triggerElement: '.section-3',
                triggerHook: 0.05,
                duration: '50%'
            }
            ).setPin('.section-3')
            //.addIndicators()
            .addTo(controller)
*/
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        
        var page1Top = $("#section-1").offset().top;
        var page2Top = $("#section-2").offset().top;
        var page3Top = $("#section-3").offset().top;
        if (scrollPos >= page1Top && scrollPos < page2Top) {
                $("#link-1").addClass("active");
                $("#link-2").removeClass("active");
                $("#link-3").removeClass("active");
            } else {
                $("#link-1").removeClass("active");
        }

        if (scrollPos >= page2Top && scrollPos < page3Top) {
                $("#link-2").addClass("active");
                $("#link-1").removeClass("active");
                $("#link-3").removeClass("active");
            } else {
                $("#link-2").removeClass("active");
        }
        
        if (scrollPos >= page3Top) {
                $("#link-3").addClass("active");
                $("#link-1").removeClass("active");
                $("#link-2").removeClass("active");
            } else {
             $("#link-3").removeClass("active");
        }

    });
   
})

const navBarUpdate = (direction) => {
    console.log('Scrolled to section 2', direction)
}

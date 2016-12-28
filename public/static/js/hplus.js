// Custom scripts
$(document).ready(function () {

  // MetsiMenu
  $('#side-menu').metisMenu();

  // Collapse ibox function
  $('.collapse-link').click(function () {
    var ibox = $(this).closest('div.ibox');
    var button = $(this).find('i');
    var content = ibox.find('div.ibox-content');
    content.slideToggle(200);
    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    ibox.toggleClass('').toggleClass('border-bottom');
    setTimeout(function () {
      ibox.resize();
      ibox.find('[id^=map-]').resize();
    }, 50);
  });

  // Close ibox function
  $('.close-link').click(function () {
    var content = $(this).closest('div.ibox');
    content.remove();
  });

  // Small todo handler
  $('.check-link').click(function () {
    var button = $(this).find('i');
    var label = $(this).next('span');
    button.toggleClass('fa-check-square').toggleClass('fa-square-o');
    label.toggleClass('todo-completed');
    return false;
  });

  // Append config box / Only for demo purpose
  // $.get("skin-config.html", function (data) {
  //   $('body').append(data);
  // });

  setTimeout(function () {


    // minimalize menu
    $('.navbar-minimalize').bind('click', function () {
      $("body").toggleClass("mini-navbar");
      SmoothlyMenu();
    })
  }, 50)


  // Move modal to body
  // Fix Bootstrap backdrop issu with animation.css
  $('.modal').appendTo("body")

  // Full height of sidebar
  function fix_height() {
    var heightWithoutNavbar = $("body > #wrapper").height() - 61;
    $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");
  }

  fix_height();
  // Fixed Sidebar
  $(window).bind("load resize click scroll", function () {
    if (!$("body").hasClass('body-small')) {
      fix_height();
      //setScroll();
    }
  });

//$("[data-toggle=popover]").popover();
});

function setScroll(){
		$("#wrapper .sidebar-collapse").slimScroll({
		height: $("body").height(),
		alwaysVisible: false,
		});
		$("body").slimScroll({
		height: $("body").height(),
		alwaysVisible: false,
		});
		}

// For demo purpose - animation css script
function animationHover(element, animation) {
  element = $(element);
  element.hover(
    function () {
      element.addClass('animated ' + animation);
    },
    function () {
      //wait for animation to finish before removing classes
      window.setTimeout(function () {
        element.removeClass('animated ' + animation);
      }, 2000);
    });
}

// Minimalize menu when screen is less than 768px
$(function () {
  $(window).bind("load resize", function () {
    if ($(this).width() < 769) {
      $('body').addClass('body-small')
    } else {
      $('body').removeClass('body-small')
    }
  })
})

function SmoothlyMenu() {
  if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
    // Hide menu in order to smoothly turn on when maximize menu
    $('#side-menu').hide();
    // For smoothly turn on menu
    setTimeout(
      function () {
        $('#side-menu').fadeIn(500);
      }, 100);
  } else if ($('body').hasClass('fixed-sidebar')) {
    $('#side-menu').hide();
    setTimeout(
      function () {
        $('#side-menu').fadeIn(500);
      }, 300);
  } else {
    // Remove all inline style from jquery fadeIn function to reset menu state
    $('#side-menu').removeAttr('style');
  }
}

// Dragable panels
function WinMove() {
  var element = "[class*=col]";
  var handle = ".ibox-title";
  var connect = "[class*=col]";
  $(element).sortable(
    {
      handle: handle,
      connectWith: connect,
      tolerance: 'pointer',
      forcePlaceholderSize: true,
      opacity: 0.8,
    })
    .disableSelection();
};
//get now time
function getnowDate() {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  var hh = date.getHours();
  var mm = date.getMinutes();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  if (hh >= 0 && hh <= 9) {
    hh = "0" + hh;
  }
  if (mm >= 0 && mm <= 9) {
    mm = "0" + mm;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    + " " + hh + seperator2 + mm;
  // + seperator2 + date.getSeconds();
  return currentdate;
}

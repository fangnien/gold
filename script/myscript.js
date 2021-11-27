$(function () {
  /* 滑動至指定位置 */
  $("nav a").click(function () {

    var btn = $(this).attr("href"); //返回取得屬性與值
    var pos = $(btn).offset(); //抓取相對的座標位置
    $(" html,body").animate({ scrollTop: pos.top }, 1000);
    //變數pos的top(y軸) 
  });

  /* 滑動至指定位置 */
  $("nav a").click(function () {
    var btn = $(this).attr("href"); //返回取得屬性與值
    var pos = $(btn).offset(); //抓取相對的座標位置
    $(" html,body").animate({ scrollTop: pos.top }, 1000);
    //變數pos的top(y軸) 
  });



  //捲動至top0的位置  
  $("#gotop").click(function () {
    $(" html,body").animate({ scrollTop: 0 }, 1000);
  });

  //指定捲軸位置淡出淡入 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#gotop').stop().fadeTo('fast', 1);
    } else {
      $('#gotop').stop().fadeOut('fast');
    }
  });

  $('.box').smoove({
    offset: '40%'
  });

});
 
/* !-----------------手風琴----------------- */
//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
$(document).ready(function () {

  var d = document,
      accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
      touchSupported = ('ontouchstart' in window),
      pointerSupported = ('pointerdown' in window),

      skipClickDelay = function (e) {
          e.preventDefault();
          e.target.click();
      },

      setAriaAttr = function (el, ariaType, newProperty) {
          el.setAttribute(ariaType, newProperty);
      },

      setAccordionAria = function (el1, el2, expanded) {
          switch (expanded) {
              case "true":
                  setAriaAttr(el1, 'aria-expanded', 'true');
                  setAriaAttr(el2, 'aria-hidden', 'false');
                  break;
              case "false":
                  setAriaAttr(el1, 'aria-expanded', 'false');
                  setAriaAttr(el2, 'aria-hidden', 'true');
                  break;
              default:
                  break;
          }
      },

      switchAccordion = function (e) {
          e.preventDefault();
          var thisAnswer = e.target.parentNode.nextElementSibling,
              thisQuestion = e.target,
              // Check if the answer is in collapsed state
              isCollapsed = thisAnswer.classList.contains('is-collapsed');

          // Iterate over all the toggles and collaspse
          // them all and only toggle the current tab
          for (var i = 0; i < accordionToggles.length; i++) {
              var currQuestion = accordionToggles[i],
                  currAnswer = currQuestion.parentNode.nextElementSibling;

              setAccordionAria(currQuestion, currAnswer, 'false');

              currQuestion.classList.add('is-collapsed');
              currQuestion.classList.remove('is-expanded');
              currAnswer.classList.add('is-collapsed');
              currAnswer.classList.remove('is-expanded');

              currAnswer.classList.remove('animateIn');

          }

          if (isCollapsed) {
              setAccordionAria(thisQuestion, thisAnswer, 'true');

              thisQuestion.classList.add('is-expanded');
              thisQuestion.classList.add('is-collapsed');
              thisAnswer.classList.add('is-expanded');
              thisAnswer.classList.remove('is-collapsed');
              thisAnswer.classList.add('animateIn');
          }
      };


  for (var i = 0, len = accordionToggles.length; i < len; i++) {
      if (touchSupported) {
          accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
      }
      if (pointerSupported) {
          accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
      }
      accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
});
/*  */










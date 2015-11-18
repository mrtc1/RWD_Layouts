/**
 * Created by Marta on 17.11.2015.
 */

$(document).ready(function () {

    var menuMobile = $('.mobileMenu');
    var menuNormal = $('.nav-toolbar');
    var hamMenu= $('.mobileMenu img');

    function respMenu(){

        if ($(window).width() < 500) {
          menuMobile.show();
          menuNormal.hide();
      }
        else{
          menuMobile.hide();
          menuNormal.show();
      }
    }
    respMenu();
    $(window).resize(function () {
            respMenu()
    });

    $(hamMenu).on('click', function () {
        menuNormal.toggle();
    })
});

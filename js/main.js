$(function(){
'use strict';
var winH = $(window).height(),
    navH = $('.navbar').innerHeight();
$('.slider').height(winH-navH);
});
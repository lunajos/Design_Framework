'use strict';

// // get the tablist element
// var list = document.querySelector( '[role="tablist"]' );

// // create the tablist instance
// var tablist = new window.Tablist( list );

// // optionnaly add callbacks to on show and hide a tab
// tablist.on( 'show', function( tab, tabPanel ){
//   …
// });

// tablist.on( 'hide', function( tab, tabPanel ){
//   …
// });

// // start the plugin
// tablist.mount();

var lists = document.querySelectorAll( '[role="tablist"]' );

Array.prototype.forEach.call( lists, function( list ) {
  new window.Tablist( list ).mount();
});

var accessBlock = new AccessBlock({
    overlayOpacity: 0.4,
    title: 'Loading',
    description: 'Please wait'
});

var trigger = document.getElementById('trigger');
trigger.addEventListener('click', function () {
    accessBlock.open();

    console.log('computing');

    // Example to close it
    setTimeout(function () {
        console.log('computed');
        accessBlock.close();
    }, 3000);
});
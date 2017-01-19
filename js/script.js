$( document ).ready(function() {
    console.log( "ready!" );


var par1Reveal = {
  delay    : 500,
  // distance : '90px',
  easing   : 'ease-in-out',
  // rotate   : { x: 100 },
  scale    : 0.8
};

var sloom = {
	delay: 300,
	duration: 800,
};



window.sr = ScrollReveal();
sr.reveal('.index', par1Reveal);
sr.reveal('.imageblock', sloom);
sr.reveal('#textblock', sloom);
sr.reveal('#textblock11', sloom);
sr.reveal('#textblock12', sloom);
sr.reveal('#textblock14', sloom);
sr.reveal('#textblock15', sloom);
sr.reveal('#textblock16');
sr.reveal('#textblock17');
sr.reveal('#textblock18');
sr.reveal('#textblock19');
sr.reveal('#textblock20');
sr.reveal('#textblock21');
sr.reveal('#textblock22');
sr.reveal('.par16', sloom);
// sr.reveal('.chap1in', sloom);

//  $('#indexintro').click(function(){
//      $(this).animate({height:'1100'})
// })

// var elementPosition = $('.titlechapter').offset();

// $(window).scroll(function(){
//         if($(window).scrollTop() > elementPosition.top){
//               $('.side').css('position','fixed').css('top');
//         } else {
//             $('.side').css('position','static');
//         }    
// });

$( function( ) {

 var chapters = $( '.chapter' );
 var titles = $( '.titlechapter' );

 function updateHeader( ) {
  var scrolltop = $( window ).scrollTop( );
 
  var active_title = -1;
  chapters.each( function( ) {
   if ( scrolltop > $( this ).offset( ).top )
    active_title = $( this ).find( 'div.titlechapter' );
  } );
 
  titles.not( active_title ).css( 'position', 'static' );
  active_title.css( { 'position': 'fixed', 'top': 0 } ); 
 }


 $( window ).scroll( updateHeader )
      .trigger( 'scroll' );
     
} );



});


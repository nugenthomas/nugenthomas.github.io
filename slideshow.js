/*
JQuery-Photo-Slideshow
by John E Maddox
*/

var sPos = 0; // slideshow array position
var sTime = 5000; // slide timer
var sDir = 'slides/'; // photo directory
var sTarget = '#slideShow'; // target element

$(document).ready(function(){

  var t = $(sTarget);

  // load slideshow json file
  $.getJSON('slideshow.json')
    .done(sPics => {

      // load first picture
      t.html('<img src="'+sDir+sPics[0].file+'"><div style="opacity:0"></div>');

      // display note
      displayNote(sPics[0].note,t);

      // sequentially preload remaining images
      // start index at 1 because first image is already loaded
      // when done, start slideshow
      seqPreloader(sPics.map(pic => pic.file),1)
        .done(setInterval(() => {slideshow(sPics,t)},sTime));
    })
    .fail(t.html('Unable to load slideshow at this time.'));
});

/*
  this function loads images one at a time
  this decreases page load time by spacing out bandwidth use
*/
function seqPreloader(pics, i) {
  var d = $.Deferred();
  if(i < pics.length){
    var img = new Image();
    img.onload = seqPreloader(pics, i + 1);
    img.src = sDir+pics[i];
  }
  return d.promise();
}

/*
  slideshow - cycles through images
  creates a fade effect by layering.
*/
function slideshow(sPics,t){

  // image count
  var cnt = sPics.length-1;

  // move old image to top
  t.find('img').attr('src', sDir+sPics[sPos].file).css('opacity', 1);

  // cycle through photos
  if(sPos < cnt){
    sPos++;
  }else{
    sPos = 0;
  }

  // load new image
  t.css('background-image', 'url("'+sDir+sPics[sPos].file+'")');

  // display note
  displayNote(sPics[sPos].note,t);

  // fade out old image
  t.find('img').animate({opacity: 0}, 50);
}

/*
  display note
  if note is present, display it.
  if note is not present, fade out div.
*/
function displayNote(n,t){
  if(n){
    t.find('div').html(n).animate({opacity: 1}, 500);
  }else{
    t.find('div').animate({opacity: 0}, 500);
  }
}

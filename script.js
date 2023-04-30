// code for all image feature
function format(elementToClick, elementToToggle) {
  $(elementToClick).click(
  function() {
    $(elementToToggle).toggle();
  });  
}

$(document).ready(function() {
  $(".chefInfo").hide();
  $(".bakerInfo").hide();
  $(".singInfo").hide();
  $(".proInfo").hide();
  $(".cateringInfo").hide();
  $(".mpInfo").hide();
  $(".streetArtistInfo").hide();
  $(".photographerInfo").hide();
 $(".fashionDesignerInfo").hide();
  
  // culinary
  format(".chefImg", ".chefInfo");
  format(".bakerImg", ".bakerInfo");
  format(".cateringImg", ".cateringInfo");

  // music
  format(".singImg", ".singInfo");
  format(".proImg", ".proInfo");
  format(".mpImg", ".mpInfo");
  
  // art
  format(".streetArtistImg",  ".streetArtistInfo");
  format(".photographerImg", ".photographerInfo");
  format(".fashionDesignerImg", ".fashionDesignerInfo");
 
});

$(document).ready(function(){
  $("#bubble").hover(
    function(){
    $(this).animate({height: "300px", width: "300px", borderRadius: "150px"});},
    function(){
    $(this).animate({height: "200px", width: "200px"});})
});


$(document).ready(function() {
  $(".ThankYou").hide();
  
  $(".Yes").click(function(){
    $(".ThankYou").show();
    $(".ThankYou").fadeOut(1000);
  });
  
  $(".No").click(function(){
    $(".ThankYou").show();
    $(".ThankYou").fadeOut(1000);
  });
});
$(document).ready(function() {
  $(".mainTitle").hide();
  $(".mainTitle").fadeIn(1000);  
});


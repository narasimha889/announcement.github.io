$(document).ready(function () {
  $('.announcements-button').click(function (){
      var totalAnnouncements = $("#carouselExampleControls").find('.carousel-item').length;
      if(totalAnnouncements>0){
          $("#announcements-container").show();
      }
      var totalPriorityAnnouncements = $("#priorityCarouselExample").find('.carousel-item').length;
      var priorityAnnouncements = true;
      if(priorityAnnouncements && totalPriorityAnnouncements>0){
          $(".overlay-sp-parent-terms").addClass("d-block");
          }
  });
  $("#announcements-container-close").click(function () {
      $("#announcements-container").hide();
  });
  });
function markAnnouncementRead(annid) {
  var totalAnnouncements = $("#carouselExampleControls").find('.carousel-item').length;
  var totalPriorityAnnouncements =  $("#priorityCarouselExample").find('.carousel-item').length;
      //less priority announcements
      if($('#'+annid).next().hasClass("carousel-item") && totalAnnouncements>1){
          $('#'+annid).next().addClass("active");
              $('#'+annid).remove(); 
      }
      else if(!$('#'+annid).next().hasClass("carousel-item") && totalAnnouncements>1){
          $('#'+annid).prev().addClass("active");
              $('#'+annid).remove(); 
      }
      else if(!$('#'+annid).next().hasClass("carousel-item") && totalAnnouncements==1){
              $('#'+annid).remove();
              $('#announcements-container').hide();
      }
      //priority Announcements
      if($('#'+annid).next().hasClass("carousel-item") && totalPriorityAnnouncements>1){
          $('#'+annid).next().addClass("active");
              $('#'+annid).remove(); 
      }
      else if(!$('#'+annid).next().hasClass("carousel-item") && totalPriorityAnnouncements>1){
          $('#'+annid).prev().addClass("active");
              $('#'+annid).remove(); 
      }
      if(totalPriorityAnnouncements=="1"){
          $(".overlay-sp-parent-terms").removeClass("d-block");
      }
  }


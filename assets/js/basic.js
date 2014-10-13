$(window).load(function () {
  $('.note').prepend("<div class='title'>N O T E</div>");
  $('.memo').prepend("<div class='title'>M E M O</div>");
  $('.problem').prepend("<div class='title'>問 題</div>");
　$('.keywords').prepend("<div class='title'>keywords</div>");
  for (var i=0; i<=$("#TFquestion li").length; i++){
	st = String(i)
  	$("#TFquestion li").eq(i)
	.append('<br><input type="radio" name="q'+st+'" value=1 id="q'+st+'y" /><label for="q'+st+'y" class="radio">○</label><input type="radio" name="q'+st+'" value=0 id="q'+st+'n" /><label for="q'+st+'n" class="radio">×</label>');
  };
  $('.inter li a').attr("href",function(i,val){
    return location.origin + "/hajiloji" + val;
  });
　$('.target_blank a').attr("target='_blank'");
});


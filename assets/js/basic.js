var markdownize = function(markdown, html) {
  $('#mainWrap').each(function(){
        var txt = $(this).html();
        $(this).html(txt.replace(markdown,html));
  });
};
var sub_div_class = function(markdown, class_name) {
  markdownize(markdown, '<div class="'+class_name+'">')
};

$(function () {
// 以下の4行は kramdown様の素晴らしい能力に完全に取って代わられた！2016/1/13
//  sub_div_class(/note:::/g, "box note")
//  sub_div_class(/memo:::/g, "memo")
//  sub_div_class(/jufra:::/g, "jufra")
//  markdownize(/::::/g, "</div>")
  $('.note').prepend("<div class='title'>NOTE</div>");
  $('.memo').prepend("<div class='title'>MEMO</div>");
  $('.problem').prepend("<div class='title'>もんだい</div>");
//　$('.keywords').prepend("<div class='title'>keywords</div>");
  for (var i=0; i<=$("#TFquestion li").length; i++){
	st = String(i)
  	$("#TFquestion li").eq(i)
	.append('<br><input type="radio" name="q'+st+'" value=1 id="q'+st+'y" class="oxbutton" /><label for="q'+st+'y" class="radio">○</label><input type="radio" name="q'+st+'" value=0 id="q'+st+'n" /><label for="q'+st+'n" class="radio">×</label>');
  };
  $('.inter li a').attr("href",function(i,val){
    return location.origin + "/hajiloji" + val;
  });
　$('.target_blank a').attr("target='_blank'");
  $(document).on('click','#titlebar',function(){
    document.location = location.origin + "/hajiloji/"; 
  });
});

//下のコメントを見てください。
//var markdownize = function(markdown, html) {
//  $('#mainWrap').each(function(){
//        var txt = $(this).html();
//        $(this).html(txt.replace(markdown,html));
//  });
//};
//var sub_div_class = function(markdown, class_name) {
//  markdownize(markdown, '<div class="'+class_name+'">')
//};

$(function () {
// 以下の4行は kramdown様の素晴らしい能力に完全に取って代わられた！2016/1/13
//  sub_div_class(/note:::/g, "box note")
//  sub_div_class(/memo:::/g, "memo")
//  sub_div_class(/jufra:::/g, "jufra")
//  markdownize(/::::/g, "</div>")
  $('.note').prepend("<div class='title'>NOTE</div>");
  $('.memo').prepend("<div class='title'>MEMO</div>");
  $('.problem').prepend("<div class='title'>もんだい</div>");
  for (var i=0; i<=$("#TFquestion li").length; i++){
	   st = String(i)
     $("#TFquestion li").eq(i)
	    .append('<p><div class="btn-group" data-toggle="buttons"><label class="btn btn-default"><input type="radio" autocomplete="off" name="q' + st + '" value=1>○</label><label class="btn btn-default"><input type="radio" autocomplete="off" name="q' + st + '" value=0>×</label></div></p>');
  };
  $('.inter li a').attr("href", function(i, val){
    return location.origin + "/hajiloji" + val;
  });
});

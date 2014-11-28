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

$(function() {

    //プリントプレビュークリックイベント
    $(document).on('click','.print-preview',function(){
        doPrintPreview();
    });

});

/**
 * プリントプレビュー
 */
doPrintPreview = (function(){
    //現在のURLに'print'パラメータを付加し、新しいウィンドウで表示させる。
    window.open(location.href+'?print=true');
});



$(function() {
    //URLパラメータに'print'が存在する場合、
    if (location.href.indexOf('?print') > -1) { 
        //bodyにprintクラスを付加。
        $("body").addClass('print');

        //.btnBoxの中身を空にし、印刷ボタンをアペンド。
        $('.btnBox').html('').append('<input type="button" value="印刷する" id="doPrint" name="doPrint">');

        //印刷ボタンのクリックイベントに印刷機能を設定
        $('#doPrint').on('click', function(){
            window.print();
        });

    }
});

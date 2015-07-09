$(function () {
    var characters = [["koc",6],["sor",7],["sev",4]];
    for (var i=0; i< characters.length; i++){
        var name = characters[i][0];
        var max = characters[i][1];
        for (var j=1; j<=max; j++){
            $('.mainsection p').each(function(){
                var txt = $(this).html();
                var reg = new RegExp(name+j+":","g");
                $(this).html(txt.replace(reg,'<img src="/hajiloji/assets/pixra/'+name+j+'.png" class="icon">'));
            });
        }
    };
});


$(window).load(function () {
	var host = location.host;
	var characters = [["koc",6],["sor",7],["sev",4]];
	for (var i=0; i< characters.length; i++){
		name = characters[i][0];
		max = characters[i][1];
		for (var j=1; j<=max; j++){
			$(function(){
    			$('.mainsection').each(function(){
        			var txt = $(this).html();
					var reg = new RegExp(name+j+":","g");
        			$(this).html(txt.replace(reg,'<img src="'+location.origin+'/coga_iu_n'+'/assets/pixra/'+name+j+'.png" >'));
    			});
			});
		}
	};
});


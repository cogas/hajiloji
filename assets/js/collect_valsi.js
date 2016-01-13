$(function () {
	dt = $(".valsi dt, .drani dt").map(function(){return $(this).html()});
	dd = $(".valsi dd, .drani dd").map(function(){return $(this).html()});
	n = $(".valsi dt, .drani dt").size();
	
	for (var i = 0; i<n; i++){
		$("#vocab")
		.append(
			$("<tr></tr>")
				.append($("<td></td>").text(dt[i]))
				.append($("<td class='meaning'></td>").text(dd[i]))
		);
	}

});

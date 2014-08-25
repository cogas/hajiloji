$(window).load(function () {
	dt = $(".words dt dfn").map(function(){return $(this).html()})
	dd = $(".words dd").map(function(){return $(this).html()})
	n = $(".words dt dfn").size()
	
	for (var i = 0; i<n; i++){
		$("#vocab")
		.append(
			$("<tr></tr>")
				.append($("<td></td>").text(dt[i]))
				.append($("<td class='meaning'></td>").text(dd[i]))
		);
	}
});
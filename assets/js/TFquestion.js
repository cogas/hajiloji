function yesnocheck(){
	var anstemp = $("input[name='answer']").val();
	var num = anstemp.length;
	var answer = [];
	for (var i=0; i<num; i++){
		answer.push(parseInt(anstemp[i]));
	}
	var data = [];
	for (var i=0; i<num; i++){
		data.push(parseInt($("input[name='q"+i+"']:checked").val()));
	}
	var cor = 0;
	for (var i=0; i<num; i++){
		if (data[i] == answer[i]) cor++;
	}
	$("#yesnoans").empty().append(cor+"/"+num+"問正解！");
	if(cor==num) $("#yesnoans").append("全問正解！おめでとう！");
};

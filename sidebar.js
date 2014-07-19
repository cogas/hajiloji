<script>
	var link = document.querySelector('link[rel="import"]');
	var content = link.import;
	var el = content.querySelector('.sidebar');
    document.getElementById("sideWrap").appendChild(el.cloneNode(true));
</script>
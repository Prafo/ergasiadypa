function change1(obj) {
	    var selectBox = obj;
    	var selected = selectBox.options[selectBox.selectedIndex].value;
    	var div2 = document.getElementById("direction_select");
    	var div3 = document.getElementById("stop_select");
    	var div4 = document.getElementById("go1");	
		document.getElementById("select2").value = '0';
		document.getElementById("select3").value = '0';
		div4.style.visibility = "hidden";		
	if (selected == 0) {
		div2.style.visibility = "hidden";
		div3.style.visibility = "hidden";}
	else {
		div2.style.visibility ="visible";}
}
function change2(obj) {
	    var selectBox = obj;
    	var selected = selectBox.options[selectBox.selectedIndex].value;
    	var div3 = document.getElementById("stop_select");
    	var div4 = document.getElementById("go1");
    	document.getElementById("select3").value = '0';
    	div4.style.visibility = "hidden";    	
	if (selected == 0) {
		div3.style.visibility = "hidden";
		div4.style.visibility = "hidden";}
	else {
		div3.style.visibility ="visible";}
}
function change3(obj) {
		var selectBox = obj;
    	var selected = selectBox.options[selectBox.selectedIndex].value;
    	var div4 = document.getElementById("go1");    	
	if (selected == 0) {
		div4.style.visibility = "hidden";}
	else {
		div4.style.visibility ="visible";}
}
function button(obj) {
	var modal = document.getElementById('myModal');
	var btn = document.getElementById("button1");
	var span = document.getElementsByClassName("close")[0];
	var x = document.getElementById("epivates");
	x.innerHTML = Math.floor((Math.random() * 41) + 20);		
  	modal.style.display = "block";	
	span.onclick = function() {
  	modal.style.display = "none";}
	window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";}
	}
}
var studentChart = document.getElementById('myChart').getContext('2d');
new Chart(studentChart).Line(data);

var data = {
	labels : ["January","February","March","April","May","June"],
	datasets : [
		{
			fillColor : "rgba(172,194,132,0.4)",
			strokeColor : "#ACC26D",
			pointColor : "#fff",
			pointStrokeColor : "#9DB86D",
			data : [203,156,99,251,305,247]
		}
	]
}


var pieOptions = {
	segmentShowStroke : false,
	animateScale : true
}
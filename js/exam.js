new Chart(document.getElementById("horizontalBar"), {
"type": "horizontalBar",
"data": {
"labels": ["前端", "後端", "C", "pytheon", "Ardiuno", "電腦硬體裝修", "後端"],
"datasets": [{
"label": "我程式能力強弱",
"data": [50, 40, 20, 40, 60, 80, 30],
"fill": false,
"backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)",
"rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)",
"rgba(153, 102, 255, 0.2)", "rgba(201, 240, 207, 0.2)"
],
"borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
"rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"
],
"borderWidth": 1
}]
},
"options": {
"scales": {
"xAxes": [{
"ticks": {
"beginAtZero": true
}
}]
}
}
});
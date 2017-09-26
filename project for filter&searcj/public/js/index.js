// var xhr = new XMLHttpRequest();
// xhr.open('POST','/filter')
// xhr.setRequestHeader("Content-type","application/json")
// xhr.send(JSON.stringify({key:23}));
// xhr.onreadystatechange = function(){
// 	if(xhr.readyState ===4 && xhr.status ===200){
// 		console.log(JSON.parse(xhr.responseText))
// 	}
// }

var filter = document.getElementById('filter');
var textinput = document.getElementById('textinput');
var search = document.getElementById('search');

var content = document.getElementById('content');
filter.onclick = function(){
	
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST','/filter')
	xhr.setRequestHeader("Content-type","application/json")
	xhr.send(null);
	xhr.onreadystatechange = function(){
		if(xhr.readyState ===4 && xhr.status ===200){
			var arr = JSON.parse(xhr.responseText).key	
			console.log(arr)
				content.innerHTML=null
				
			for(var i = 0;i<arr.length;i++){
				var p = document.createElement('p')
				p.innerHTML =arr[i]
				content.appendChild(p)
			}

		
		}
	}
}
search.onclick = function(){
	if(textinput.value == ''){
		alert('please type your key word')
	}
	else{
		var xhr = new XMLHttpRequest();
		xhr.open('POST','/search')
		xhr.setRequestHeader("Content-type","application/json")
		xhr.send(JSON.stringify({key:textinput.value}));
		xhr.onreadystatechange = function(){
			if(xhr.readyState ===4 && xhr.status ===200){
				var arr = JSON.parse(xhr.responseText).key
				console.log(arr)
				content.innerHTML=null
				for(var i = 0;i<arr.length;i++){
					var p = document.createElement('p')
					p.innerHTML =arr[i]
					content.appendChild(p)
				}
			}
		}
	}
}
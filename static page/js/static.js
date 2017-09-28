$(document).ready(function(){
	$('#button_Logon').mouseover(function(){
		$('#button_Logon').fadeTo('fast',0.8)
	});
	$('#button_Logon').mouseleave(function(){
		$('#button_Logon').fadeTo('fast',1)
	});
	$('.logon').mouseleave(function(){
		$('#button_Logon').fadeTo('fast',1)
	});

	
})


var nav = document.getElementById('nav');
var logonbox = document.getElementById('logonbox');
nav.onmouseover = function(e){
	var target= e.target;
	if(target.nodeName =="LI"){
		var a  = target.getElementsByTagName('a')[0];
		a.style.fontWeight = 'bold';
		target.style.backgroundColor ='rgba(255,255,0,0.5)'
		target.onmouseleave = function(){
			target.style.backgroundColor =''
			a.style.fontWeight = 'normal';
		}
	}
}
var arr = []
logonbox.onmouseover =function(e){
	var father = ''
	target =e.target
	
	if(target.nodeName =='SPAN' ||target.nodeName =='EM'){
		father = target.parentNode
		var content = father.getElementsByTagName('i')[0]
		var img = father.getElementsByTagName('img')[0]
		var ul = father.getElementsByTagName('ul')[0]
		father.onclick =function(e){
			
			

			if(e.target.nodeName =='LI'){
					content.innerHTML = e.target.innerHTML
					ul.style.display = 'none'
					arr.splice(arr.indexOf(ul),1)
					img.removeAttribute('class','rotate')
				
			}
			else{
				img.setAttribute('class','rotate')
				ul.style.display = 'block'
				if (arr.indexOf(ul)==-1) {
					for (var i = 0; i < arr.length; i++) {
						arr[i].style.display="none"
						arr=[]
					}
					arr.push(ul)
				}else{
					for (var i = 0; i < arr.length; i++) {
						arr[i].style.display="none"
						arr=[]
					}
				}
console.log(arr)
			}
		}
		logonbox.onmouseleave = function(){
			img.removeAttribute('class','rotate')
			ul.style.display = 'none'
			
		}
	}
}

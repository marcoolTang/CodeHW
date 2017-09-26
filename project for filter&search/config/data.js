 var arr = ['asdasd','asfasfasf','asfasfasf125125','1510292393@qq.com','1510292393@qq.com',
 '1510292393@qq.com',
 '1510292393@qq.com',
 '15102af92393@qq.com',
 '1510292393@qq.com',
 '15102as92393@qq.com',
 '15102asdasd92393@qq.com',
 '262@qq.com',
 ]
var arrmail = []
var arr1 = []
 exports.filter =  function(req,res){
 	arrmail =[]
 	var reg = /(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$)|(^$)/;
 	for(var i = 0; i <arr.length;i++){
 		if(reg.test(arr[i]) == true){
 			arrmail.push(arr[i])
 		}
 	}
 	res.json({key:arrmail})
 }
 exports.search =  function(req,res){
 	var data =req.body.key
 	arr1 = []
 	for(var i = 0;i < arr.length;i++){
 		if(arr[i].match(data+".*")!=null){
 			arr1.push(arr[i].match(data+".*"))
 		}		
	}
 	res.send({key:arr1})
 }

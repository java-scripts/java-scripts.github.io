 $(".button-collapse").sideNav();

angular.module('myapp',[])
.controller('MainController',['$scope','$http',function(s,http){
	s.data=[];http.get('js/data.json').success(function(data){s.data = data;});	
}]); 

function loadContent(){
	console.log(arguments);
}

var options = [
    {selector: '#gallery2', offset: 100, callback: 'loadContent("#gallery2")'},    
  ];
Materialize.scrollFire(options);
  
  
  
  
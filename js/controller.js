 $(".button-collapse").sideNav();

angular.module('myapp',[])
.controller('MainController',['$scope','$http',function(s,http){
	s.data=[];http.get('js/data.json').success(function(data){s.data = data;});	
	s.lazygallery=[];
}]); 

function loadContent(el,ll,ul){
	var s = angular.element($(el)[0]).scope();	
	s.lazygallery =s.lazygallery.concat(s.data.gallery2.slice(ll,ul));
	s.$apply();	
}

var options = [
    {selector: '#gallery2', offset: 200, callback: 'loadContent("#gallery2",0,4)'},    
	 {selector: '#gallery2', offset: 500, callback: 'loadContent("#gallery2",4,8)'},    
	 {selector: '#gallery2', offset: 800, callback: 'loadContent("#gallery2",8,12)'},    
	 {selector: '#gallery2', offset: 1100, callback: 'loadContent("#gallery2",12,16)'},    
	 {selector: '#gallery2', offset: 1100, callback: 'loadContent("#gallery2",16,18)'},    
  ];
Materialize.scrollFire(options);
  
  
  
  

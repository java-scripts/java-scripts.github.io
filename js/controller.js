 $(".button-collapse").sideNav();
angular.module('myapp',[])
.controller('MainController',['$scope','$http',function(s,http){
	s.dm={};http.get('js/data.json').success(function(res){s.dm = res;});	
	s.start=0;s.end=5;		
	s.filterData={};var filterData={};	
	s.updateFilterData = function(fname){
		filterData[fname]?delete filterData[fname]:filterData[fname]=true;				
		s.filterData=filterData;
	};	
}])
.filter('cardfilter',function(){
	var findMatch=function(r,filters){	
		for(var key in filters){
			if(r.labels.indexOf(key)!=-1)return true;
		}		
		return false;	
	}
	return function(data, filters){		
		if(!filters || angular.equals({}, filters)){return data;}
		var result=[];		
		data.forEach(function(r){
			if(findMatch(r,filters))result.push(r);
		});
		return result;
	};	
});
function loadContent(el,ll,ul){	
	var s = angular.element($(el)[0]).scope();s.end+=4;s.$apply();	
}
var options=[];
for(var i=0;i<5;i++){options.push({selector: '#scrollcontainer', offset: i*350+1400, callback: 'loadContent("#scrollcontainer")'})}
Materialize.scrollFire(options);
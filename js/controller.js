

angular.module('myapp',[])
.controller('MainController',['$scope',function(s){
	s.name="sarat";

	
	
	s.cards=getCards();
}]); 




function getCards(){
	var cards=[
		{
			title:'Wave CAD',
			description:'A Computer Aided Design Tool to simulate Electromagnetic Waves and Optical Structures  ',
			url:'http://java-scripts.github.io/wave-cad',
			image:'images/wavecad.png',
			p:[4,1]
		},
		{
			title:'CSS 3D',
			description:'First Person walking is made possible with css3 3d transformations',
			url:'http://java-scripts.github.io/html3d/',
			image:'images/css3d.png',
			p:[7,2]
		},
		{
			title:'Canvas Graphics',
			description:'light weight frame work for creating animations and 2d-visualizations on cavas',
			url:'http://java-scripts.github.io/canvas-graphics',
			image:'images/canvasgraphics.png',
			p:[5,5]
		},
		{
			title:'Image Processing',
			description:'A Java-Script Photo Editor Tool',
			url:'http://java-scripts.github.io/image-processing',
			image:'images/imageprocess.png',
			p:[10,3]
		}
	];
	

	return cards;
}
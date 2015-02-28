contentData=[
		{
			title:'Wave CAD',
			description:'A Computer Aided Design Tool to simulate Electromagnetic Waves and Optical Structures  ',
			url:'http://java-scripts.github.io/wave-cad',
			p:[4,1]
		},
		{
			title:'CSS 3D',
			description:'First Person walking is made possible with css3 3d transformations',
			url:'http://java-scripts.github.io/css3-3d-walking',
			p:[7,2]
		},
		{
			title:'Canvas Graphics',
			description:'light weight frame work for creating animations and 2d-visualizations on cavas',
			url:'http://java-scripts.github.io/canvas-graphics',
			p:[5,5]
		},
		{
			title:'Image Processing',
			description:'A Java-Script Photo Editor Tool',
			url:'http://java-scripts.github.io/image-processing',
			p:[10,3]
		}
	];
	
	colorUtil={
		hue:0,
		hueScatter:10,
		getRandColor:function(hue){	
			var h=(this.getRand(hue-this.hueScatter/2,hue+this.hueScatter/2)+255)%255;	
			var s=this.getRand(150,200);
			var v=this.getRand(180,250);;
			var rgb = this.hsvToRgb(h,s,v);
			return 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
		},
		getRand:function(a,b){
			return Math.round(a+(b-a)*Math.random());
		},
		rgbToHsv:function(r, g, b){
			r = r/255, g = g/255, b = b/255;
			var max = Math.max(r, g, b), min = Math.min(r, g, b);
			var h, s, v = max;

			var d = max - min;
			s = max == 0 ? 0 : d / max;

			if(max == min){
				h = 0; // achromatic
			}else{
				switch(max){
					case r: h = (g - b) / d + (g < b ? 6 : 0); break;
					case g: h = (b - r) / d + 2; break;
					case b: h = (r - g) / d + 4; break;
				}
				h /= 6;
			}
			return [Math.round(h*255), Math.round(s*255), Math.round(v*255)];
		},	
		hsvToRgb:function(h, s, v){
			h=h/255 ; s = s/255; v= v/255;
			var r, g, b;
			var i = Math.floor(h * 6);
			var f = h * 6 - i;
			var p = v * (1 - s);
			var q = v * (1 - f * s);
			var t = v * (1 - (1 - f) * s);
			switch(i % 6){
				case 0: r = v, g = t, b = p; break;
				case 1: r = q, g = v, b = p; break;
				case 2: r = p, g = v, b = t; break;
				case 3: r = p, g = q, b = v; break;
				case 4: r = t, g = p, b = v; break;
				case 5: r = v, g = p, b = q; break;
			}
			return [Math.round(r * 255), Math.round(g * 255),Math.round(b * 255)];
		}
	};
	
	
	
	var numberOfHolesPerRow = 16;
	var width = Math.max($(window).width(),1560);
	var height = Math.max($(window).height(),700);		
	var holeSize =  Math.round(width/numberOfHolesPerRow);
	
	var numberOfRows = Math.round(height/holeSize);		
	for(var row=0;row<numberOfRows;row++){
		for(var col=0;col<numberOfHolesPerRow;col++){
			s=holeSize-6;
			l=col*holeSize;
			t=row*holeSize;
			c = colorUtil.getRandColor(colorUtil.hue);
			$('#container').append('<div class="hole" style="width:'+s+'px;height:'+s+'px;left:'+l+'px;top:'+t+'px;background:'+c+';" ></div>')
		}
	}	
	
	
	
	var coverSize = holeSize*2-6;	
	$.each(contentData,function(index,r){
		s=coverSize;		
		l=r.p[0]*holeSize;
		t=r.p[1]*holeSize;	
			
		
		var html='';
		html+='<div class="cover" style="background-size:'+width+';background-position:-'+l+'px -'+t+'px;width:'+s+'px;height:'+s+'px;left:'+l+'px;top:'+t+'px;">';
			html+='<div class="hole2" index="'+index+'">';
				html+='<div class="content">';
					html+='<div class="title">'+r.title+'</div>';
					html+='<div class="description">'+r.description+'</div>';
				html+='</div>'
			html+='</div>'
		html+='</div>';
		
		$('#container').append(html);		
	});	
	
	$('.hole2').each(function(){
		$(this).css('background',colorUtil.getRandColor(colorUtil.hue));
	});
	
	
	/*
	cx = $(window).width()/2-100;
	cy=$(window).height()/2;
	depthOffset=2;
	$(document).mousemove(function(e){
		var x=e.clientX;
		var y = e.clientY;
		var dx = (cx-x)/30;
		var dy = (cy-y)/25;
		var depth=Math.sqrt(dx*dx,dy*dy)/2+depthOffset;
		var shadow=' '+dx+'px '+dy+'px '+depth+'px rgb(27, 27, 27)';	
		$('.hole, .hole2').css('box-shadow','inset '+shadow);		
	})
	
	*/
	var sign=1;
	
	$('.column-header').click(function(){
		
		$('.hole, .hole2').each(function(){
			$(this).css('background',colorUtil.getRandColor(colorUtil.hue));
		});
		sign=-1*sign;
		if(sign==1){
			//hue=colorUtil.getRand(0,255);
			colorUtil.hue=(colorUtil.hue+15)%255;			
		}
		$('.hole, .hole2').toggleClass('borderRadius');
		$('.cover').width($('.cover').width()-sign*4).height($('.cover').width());
	});

	
	
	$('.column-header').mousedown(function(){
		$(this).css('box-shadow',' -4px -3px 2px rgba(0, 0, 0, 0.75)');
	}).mouseup(function(){
		$(this).css('box-shadow',' -8px -8px 5px rgba(0, 0, 0, 0.75)');
	});
	
	$('.hole2').click(function(){				
		location.href=contentData[$(this).attr('index')].url;		
	})

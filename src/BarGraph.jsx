import React, { Component } from 'react';
import * as d3 from 'd3'; 


class BarGraph extends Component {

  render() {
  
  	/*添加一个svg画布*/
		var width = 900;  //画布的宽度
		var height = 600;   //画布的高度
		var svg = d3.select("#theChart")     //选择文档中的body元素
		    .append("svg")          //添加一个svg元素
		    .attr("width", width)       //设定宽度
		    .attr("height", height); 

	 	var marge = {top:60,bottom:60,left:60,right:60}  
       	var g = svg.append("g")  
            .attr("transform","translate("+marge.top+","+marge.left+")");  	
            /*数据集*/
        var dataset = [10,20,30,23,13,40,27,35,20];  
        
        /*在x/y轴方向绘制坐标轴*/
        var xScale = d3.scaleBand()  
            .domain(d3.range(dataset.length))  
            .rangeRound([0,width-marge.left-marge.right]);  
        var xAxis = d3.axisBottom(xScale);  
         g.append("g")  
            .attr("transform","translate("+0+","+(height-marge.top-marge.bottom)+")") 
            .call(xAxis);      
        var yScale = d3.scaleLinear()  
            .domain([0,d3.max(dataset)])  
            .range([height-marge.top-marge.bottom,0]);  
        var yAxis = d3.axisLeft(yScale); 
        g.append("g")  
            .attr("transform","translate(0,0)") 
            .call(yAxis); 
		/*为每个矩形和对应的文字创建一个分组<g>*/
        var gs = g.selectAll(".rect")  
            .data(dataset)  
            .enter()  
            .append("g"); 

        /*绘制矩形 左上角坐标x、y和长宽*/
        var rectPadding = 20;//矩形之间的间隙  
        gs.append("rect")  
            .attr("x",function(d,i){  
                return xScale(i)+rectPadding/2;  
            })
            .attr("y",function(d){ /*改变*/
            var min=yScale.domain()[0];
                return yScale(min);  
            })   
            .attr("width",function(){  
                return xScale.step()-rectPadding;  
            })  
             .attr("height",function(d){  
                return 0;  
            }) 
            .attr("fill","blue")
            .transition()
            .duration(2000)
            .delay(function(d,i){
                return i*400;
            })
            /*.ease(d3.easeElasticInOut)  */
            .attr("y",function(d){  /*回到最终状态*/
                return yScale(d);  
            }) 
            .attr("height",function(d){  
                return height-marge.top-marge.bottom-yScale(d);  
            });  
         /*绘制文字给文字添加动态效果*/
        gs.append("text")  
            .attr("x",function(d,i){  
                return xScale(i)+rectPadding/2;  
            })
            .attr("y",function(d){/*改变的部分*/
                var min=yScale.domain()[0];
                return yScale(min);
            })  
            .attr("dx",function(){  
                return (xScale.step()-rectPadding)/2-10;  
            })  
            .attr("dy",0)  
            .text(function(d){  
                return d;  
            })
            .transition()
            .duration(2000)
            .delay(function(d,i){
                return i*400;
            })
           /* .ease(d3.easeElasticInOut)*/
            .attr("y",function(d){  
                return yScale(d);  
            }); 

    return (
      <div id="theChart"></div>
    );
  }
}

export default BarGraph;
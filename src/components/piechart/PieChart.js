import React, { Component } from 'react';
import * as d3 from 'd3';

class PieChart extends Component {

    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const data = [2, 4, 8, 10];

        const svg = d3.select("#pie-chart"),
        width = svg.attr("width"),
        height = svg.attr("height"),
        radius = Math.min(width, height) / 2,
        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        const color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

        const pie = d3.pie();

        const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);
        
        const label = d3.arc()
        .outerRadius(radius)
        .innerRadius(radius - 80);

        const arcs = g.selectAll("arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc")

        arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", arc);

        arcs.append("text")
        .attr("transform", function(d) { 
                 return "translate(" + label.centroid(d) + ")"; 
         })
        .text(function(d, i) { return i; });

    }

    render() {
        return (
           <div className="hero-body chart-content">
               <h3 id="PieChart" className="title">Pie Chart</h3>
                <p className="subtitle">400x400px Pie Chart</p>
               <svg id="pie-chart" width="400" height="400">
               </svg>
           </div>
        );
    }
}

export default PieChart;

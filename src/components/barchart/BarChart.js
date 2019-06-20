import React, { Component } from 'react';
import * as d3 from 'd3';
import dataSet from './data.csv';
import '../../assets/scss/barchart.scss';

class BarChart extends Component {

    componentDidMount() {
        this.drawChart();
    }
    

    drawChart() {
        const svg = d3.select("#bar-chart"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin


    const xScale = d3.scaleBand().range([0, width]).padding(0.4),
        yScale = d3.scaleLinear().range([height, 0]);

    const g = svg.append("g")
               .attr("transform", "translate(" + 100 + "," + 100 + ")");

    d3.csv(dataSet).then(function(data) {

        xScale.domain(data.map(function(d) { return d.year; }));
        yScale.domain([0, d3.max(data, function(d) { return d.value; })]);

        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale))
         .append("text")
         .attr("y", height)
         .attr("x", width)
         .attr("text-anchor", "end")
         .attr("stroke", "white")
         .text("Year");

        g.append("g")
         .call(d3.axisLeft(yScale).tickFormat(function(d){
             return "$" + d;
         })
         .ticks(10))
         .append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 6)
         .attr("dy", "-5.1em")
         .attr("text-anchor", "end")
         .attr("stroke", "white")
         .text("Stock Price");

        g.selectAll(".bar")
         .data(data)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return xScale(d.year); })
         .attr("y", function(d) { return yScale(d.value); })
         .attr("width", xScale.bandwidth())
         .attr("height", function(d) { return height - yScale(d.value); });
    });
    }

    render() {
        return (
            <div className="hero-body chart-content">
               <h3 id="BarChart" className="title">Bar Chart</h3>
                <p className="subtitle">400x400px Bar Chart</p>
               <svg id="bar-chart" width="400" height="400">
               </svg>
           </div>
        );
    }
}

export default BarChart;

import React, { Component } from 'react';
import Chart from 'chart.js/auto';

import { createRef } from 'react';


export default class Barchar extends Component {
    chartRef = createRef()
    componentDidMount() {
        const ctx = this.chartRef.current.getContext("2d");
        Chart.defaults.font.size=20





        new Chart(ctx, {
            type: "radar",
            data: {
                labels: this.props.details.stats.map(e => e.stat.name),
                datasets: [{
                    label: "stats",
                    borderColor: "transparent",
                    fill: true,
                    radius: 8,
                    pointRadius: 8,
                    pointBorderWidth: 4,
                    pointBackgroundColor: [
                        'rgba(34, 223, 17, 0.4)',
                        'rgba(204, 15, 15, 0.4)',
                        'rgba(166, 71, 12, 0.4)',
                        'rgba(112, 12, 166, 0.4)',
                        'rgba(129, 27, 9, 0.4)',
                        'rgba(26, 157, 239, 0.4)'
                    ],
                    pointBorderColor: [
                        'rgba(34, 223, 17, 0.4)',
                        'rgba(204, 15, 15, 0.4)',
                        'rgba(166, 71, 12, 0.4)',
                        'rgba(112, 12, 166, 0.4)',
                        'rgba(129, 27, 9, 0.4)',
                        'rgba(26, 157, 239, 0.4)'
                    ],
                    pointHoverRadius: 10,
                    data: this.props.details.stats.map(e => e.base_stat),
                    backgroundColor: [
                        'rgba(34, 223, 17, 0.4)',
                        'rgba(204, 15, 15, 0.4)',
                        'rgba(166, 71, 12, 0.4)',
                        'rgba(112, 12, 166, 0.4)',
                        'rgba(129, 27, 9, 0.4)',
                        'rgba(26, 157, 239, 0.4)'
                    ],
                }]

            },
            options: {
                responsive:true,
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 16
                            },
                            color:"black"
                        }
                    }
                }
                
            }

        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
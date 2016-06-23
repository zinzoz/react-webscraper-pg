import React from 'react';
//import $ from 'jquery';
//import Highcharts from 'highcharts';
//import addFunnel from 'highcharts/modules/funnel';
let urls = '/getdatagraph';
export default class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    render() {
        return ( <section className = "" >
            <header className = "section-header" >
            <h3 className = "title" > Nasdaq Graph </h3>
            </header >
            <section className = "section-content" >
            <div id = "container"> </div>
            </section >
          </section>
        );
    }
    componentDidMount() {
        // fetch('/getdatagraph').then((response) => {
        //     return response.json();
        // }).then((data) => {
        //     this.setState({
        //         items: data.items
        //     });
        // }).catch((err) => {
        //     throw new Error(err);
        // });
        $.getJSON(urls, function(data) {
          $('#container').highcharts('StockChart', {
              rangeSelector: {
                  selected: 1
              },
              title: {
                  text: 'Nasdaq Stock'
              },
              series: [ {
                  name: 'Nasdaq',
                  data: data,
                  tooltip: {
                      valueDecimals: 2
                  }
              } ]
          });
      });

        setInterval(() => {
          $.getJSON(urls, function(data) {
            $('#container').highcharts('StockChart', {
                rangeSelector: {
                    selected: 1
                },
                title: {
                    text: 'Nasdaq Stock'
                },
                series: [ {
                    name: 'Nasdaq',
                    data: data,
                    tooltip: {
                        valueDecimals: 2
                    }
                } ]
            });
        });
      }, 10000);

    }

}

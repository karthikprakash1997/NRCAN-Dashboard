import { HighchartsReact } from 'highcharts-react-official';
import * as Highcharts from 'highcharts';

import { IPieChartTypes } from '../charts.types';

const PieChart = ({ props }: { props: IPieChartTypes }) => {
  const chartOptions = {
    chart: {
      type: 'pie',
      width: props.height, // Set the width of the chart
      height: props.width, // Set the height of the chart
      borderRadius: 12,
      zoom: 2
    },
    title: {
      text: undefined // No title
    },
    subtitle: {
      useHTML: true,
      verticalAlign: 'middle'
    },
    credits: {
      enabled: false
    },
    legend: {
      align: 'bottom',
      verticalAlign: 'bottom',
      layout: 'vertical',
      x: 0,
      y: 100
    },

    tooltip: {
      enabled: true
    },

    // plotOptions: {
    //   series: {
    //     borderWidth: 0,
    //     colorByPoint: true,
    //     type: 'pie',
    //     size: '100%',
    //     innerSize: '80%',
    //     dataLabels: {
    //       enabled: false,
    //       crop: false,
    //       distance: '-10%',
    //       style: {
    //         fontWeight: 'bold',
    //         fontSize: '16px'
    //       },
    //       connectorWidth: 0
    //     }
    //   }
    // },
    plotOptions: props.plotOptions,
    colors: ['#FCE700', '#F8C4B4', '#f6e1ea', '#B8E8FC', '#BCE29E'],
    // series: [
    //   {
    //     type: 'pie',
    //     // name: startYear,
    //     data: [
    //       { name: 'Category A', y: 45 },
    //       { name: 'Category B', y: 25 },
    //       { name: 'Category C', y: 15 },
    //       { name: 'Category D', y: 10 },
    //       { name: 'Category E', y: 5 }
    //     ]
    //   }
    // ]
    series: props.series
  };
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </>
  );
};

export default PieChart;

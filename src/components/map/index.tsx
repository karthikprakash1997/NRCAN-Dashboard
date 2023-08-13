import { HighchartsReact } from 'highcharts-react-official';
import * as Highcharts from 'highcharts';
import highchartsMap from 'highcharts/modules/map';
import { useEffect, useState, useRef } from 'react';

import { IMaps } from './maps.types';

highchartsMap(Highcharts);

const Map = ({ props, handleMapClick }: { props: IMaps; handleMapClick: (data: { isOpen: boolean; modelType: 'filter' | 'detail'; modelData?: any }) => void }) => {
  const [mapOptioin, setMapOptions] = useState<any>({});
  const chartRef = useRef<any>(null);

  const getApiData = async () => {
    const mapData = await fetch('https://code.highcharts.com/mapdata/custom/world.topo.json').then((response) => response.json());
    setMapOptions({ mapData, data: getGraticule() });
  };

  useEffect(() => {
    getApiData();
  }, []);
  // console.log(chartColors, 'getGraticule');

  const mapOptions: Highcharts.Options = {
    chart: {
      height: '610px',
      map: mapOptioin.mapData,
      // width:'100%',
      // width:"100%",
      // map: 'countries/ie/ie-all'
      // height: '39%',
      backgroundColor: props.backgroundColor,
      // plotBackgroundColor: '#4b96af',
      borderRadius: 12
      // polar: true,
      // type: 'line',

      // spacing: [0, 0, 0, 0]
      // events:{
      //   render(){
      //     // this.getOptions('graticule')
      //     const chart = this as any;
      //       let verb = "animate";
      //       if (!chart.sea) {
      //         chart.sea = chart.renderer
      //           .circle()
      //           .attr({
      //             fill: {
      //               radialGradient: {
      //                 cx: 0.4,
      //                 cy: 0.4,
      //                 r: 1
      //               },
      //               stops: [
      //                 [0, "#dbf4fe"]
      //               ]
      //             },
      //             zIndex: 0
      //           })
      //           .add(chart.get("graticule")?.group);
      //         verb = "attr";
      //       }

      //       const bounds = chart.get("graticule")?.bounds,
      //         p1 = chart?.mapView?.projectedUnitsToPixels({
      //           x: bounds?.x1,
      //           y: bounds?.y1
      //         }),
      //         p2 = chart?.mapView.projectedUnitsToPixels({
      //           x: bounds?.x2,
      //           y: bounds?.y2
      //         });
      //         console.log(bounds, p1,p2)
      //         if(bounds){
      //           chart?.sea[verb]({
      //             cx: (p1?.x + p2?.x) / 2,
      //             cy: (p1?.y + p2?.y) / 2,
      //             r: Math.min(p2?.x - p1?.x, p1?.y - p2?.y) / 2
      //              });
      //         }

      //       console.log(chart.sea[verb],verb, "chart.sea")
      //       // console.log(chart.)
      //     }
      // }
    },
    legend: {
      enabled: false
    },
    title: {
      text: undefined
    },
    credits: {
      enabled: false
    },
    tooltip: {
      headerFormat: ''
    },
    mapNavigation: {
      enabled: true,
      enableDoubleClickZoomTo: true,
      buttonOptions: {
        verticalAlign: 'bottom',
        align: 'right'
      }
    },
    colorAxis: {
      min: 0,
      stops: [
        [0, '#EFEFFF'],
        [0.5, '#f50505' as any],
        [1, Highcharts.color('#f50505').brighten(-0.5).get()]
      ]
    },

    mapView: {
      projection: {
        name: props.projection
        // projectedBounds: 'world'
        // name: 'WebMercator'
      }
      // center: [10, 58],
      // zoom: 1.8
    },
    series: [
      {
        // Use the gb-all map with no data as a basemap
        name: 'Basemap',
        id: 'graticule',
        data: [
          ['in', 5],
          ['au', 10],
          ['us', 97]
        ],
        point: {
          events: {
            click(e: any) {
              handleMapClick({ isOpen: true, modelData: e, modelType: 'detail' });
            }
          }
        },
        // mapData: mapOptioin,
        // borderColor: '#A0A0A0',
        nullColor: '#D3D3D3'
      }
    ] as any
  };

  return (
    <>
      <HighchartsReact ref={chartRef} constructorType={'mapChart'} allowChartUpdate immutable updateArgs={[true, true, true]} highcharts={Highcharts} options={mapOptions} />
    </>
  );
};

export default Map;

const getGraticule = () => {
  const data = [];

  // Meridians
  for (let x = -180; x <= 180; x += 15) {
    data.push({
      geometry: {
        type: 'LineString',
        coordinates:
          x % 90 === 0
            ? [
                [x, -90],
                [x, 0],
                [x, 90]
              ]
            : [
                [x, -80],
                [x, 80]
              ]
      }
    });
  }

  // Latitudes
  for (let y = -90; y <= 90; y += 10) {
    const coordinates = [];
    for (let x = -180; x <= 180; x += 5) {
      coordinates.push([x, y]);
    }
    data.push({
      geometry: {
        type: 'LineString',
        coordinates
      },
      lineWidth: y === 0 ? 2 : undefined
    });
  }

  return data;
};

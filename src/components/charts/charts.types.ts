export interface IChartTypes {
  props: any;
  options: Highcharts.Options;
  chartComponentRef: React.RefObject<HTMLDivElement>;
}

export interface IPieChartTypes {
  height: number;
  width: number;
  plotOptions: any;
  series: Highcharts.SeriesPieOptions[];
}

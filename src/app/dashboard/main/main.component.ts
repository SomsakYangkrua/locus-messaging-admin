import { Param } from './../param.model';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DashboardService } from './../dashboard.service';
import { Sessionsummary } from './../sessionsummary.model';
import { Component, ViewChild, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
  ApexTitleSubtitle,
  ApexFill,
} from 'ng-apexcharts';
import { EChartOption } from 'echarts';

export type SparklineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  colors: string[];
  labels: string[] | number[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

export type areaChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit{
  @ViewChild('chart') chart: ChartComponent;

  private subscription: Subscription;
  public sessionSummary: Sessionsummary = new Sessionsummary();
  public sessionDonutChartData: Param[] = new Array(
    new Param("Line", 0),
    new Param("Facebook Messaging", 0),
    new Param("Whatsapp", 0),
    new Param("IWT", 0),
  );

  public tracing_session: string[];

  // sparkline chart start
  public commonBarSparklineOptions: Partial<SparklineChartOptions> = {
    chart: {
      type: 'bar',
      width: 100,
      height: 25,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
      },
    },
    series: [
      {
        name: 'income',
        data: [31, 40, 28, 44, 60, 55, 68, 51, 42, 85, 77],
      },
    ],
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {},
      marker: {
        show: false,
      },
    },
  };

  // sparkline chart end
  // donut chart start
  public donut_chart: EChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      show: false,
      data: ['Line', 'Facebook Messaging', 'Whatsapp', 'IWT'],
      textStyle: {
        color: '#9aa0ac',
        padding: [5, 10],
      },
    },
    toolbox: {
      show: false,
    },
    series: [
      {
        name: 'Access to the resource',
        type: 'pie',
        radius: ['35%', '55%'],
        itemStyle: {
          normal: {
            label: {
              show: !0,
            },
            labelLine: {
              show: !0,
            },
          },
          emphasis: {
            label: {
              show: !0,
              position: 'center',
              textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
              },
            },
          },
        },
        data: this.sessionDonutChartData,
      },
    ],
    color: ['#13E916', '#337DFF', '#235A66', '#FF7733'],
  };

  // donut chart end
  // area chart start
  public areaChartOptions: Partial<areaChartOptions> = {
    series: [
      {
        name: 'Bot',
        data: [31, 40, 28, 51, 42, 85, 77],
      },
      {
        name: 'Agent',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 380,
      type: 'area',
      toolbar: {
        show: false,
      },
      foreColor: '#9aa0ac',
    },
    colors: ['#9F8DF1', '#E79A3B'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center',
      offsetX: 0,
      offsetY: 0,
    },

    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  // area chart end
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.subscription = timer(0, 2000).pipe(
      switchMap(() => this.dashboardService.getDashboard())
    ).subscribe((data) => {
      this.tracing_session = data.result.tail_logs.reverse().filter(x=> x !== '');
      data.result.session_summary.forEach(item => {
        switch (item.name) {
          case 'Line':
            this.sessionSummary.line = item.value;
            this.sessionDonutChartData[0].value = item.value;
            break;
          case 'Messenger':
            this.sessionSummary.messenger = item.value;
            this.sessionDonutChartData[1].value = item.value;
            break;
          case 'Whatsapp':
            this.sessionSummary.whatsapp = item.value;
            this.sessionDonutChartData[2].value = item.value;
            break;
          case 'IWT':
            this.sessionSummary.iwt = item.value;
            this.sessionDonutChartData[3].value = item.value;
            break;
          default:
            break;
        }
      });


    });

    this.sessionSummary.line = 0;
    this.sessionSummary.messenger = 0;
    this.sessionSummary.whatsapp = 0;
    this.sessionSummary.iwt = 0;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}//end class

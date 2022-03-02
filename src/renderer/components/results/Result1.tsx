import '../../App.css';
import ReactApexChart from "react-apexcharts"
import TableStatic from "../TableStatic";
import InfoCard from "../InfoCard";


export default function Result1(props: any) {

  const lineGraph = {
    series: [
      {
        name: "Náklady",
        data: props.result.costData
      },
      {
        name: "Tržby",
        data: props.result.incomeData
      },
      {
        name: "Zisk",
        data: props.result.profitData
      }
    ],
    options: {
      chart: {
        type: 'line',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Náklady, výnosy a zisk',
        align: 'center'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: props.result.header,
      },
      legend: {
        horizontalAlign: 'right',
      }
    },
  };

  const colGraph = {

    series: [{
      name: 'Rentabilita výnosov',
      data: props.result.incomeProfitabilityData
    }, {
      name: 'Rentabilita nákladov',
      data: props.result.costProfitabilityData
    }, {
      name: 'Nákladová účinnosť',
      data: props.result.costEfficiencyData
    }, {
      name: 'Nákladovosť',
      data: props.result.costIndicatorData
    }],
    options: {
      chart: {
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      title: {
        text: 'Vývoj ekonomických ukazovateľov',
        align: 'center'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: props.result.header,
      },
      fill: {
        opacity: 1
      },
    },
  }

 // pridat graf stlpcovy/riadkovy len pre jednotlive ukazovatele

  return (
    <div style={{paddingLeft: 10, paddingRight: 10}}>

      <div className={"card-body"}>

        <h2>Ekonomická analýza ukazovateľov</h2>

        <div className={"row"}>

          <div className={"col"}>
            <InfoCard header={"VÝNOSY CELKOM"}
                      value={props.result.incomeTotal}
                      color={"success"}
                      icon={"fa fa-line-chart"}
            />
          </div>

          <div className={"col"}>
            <InfoCard header={"NÁKLADY CELKOM"}
                      value={props.result.costTotal}
                      color={"primary"}
                      icon={"fa fa-shopping-cart"}
            />
          </div>

          <div className={"col"}>
            <InfoCard header={"ZISK CELKOM"}
                      value={props.result.profitTotal}
                      color={"warning"}
                      icon={"fa fa-money"}
            />
          </div>

        </div>

      </div>

      <div className={"card"}>

        <h1 className={"bold text-primary"} style={{textAlign: "center", margin: 20}}>Ukazovatele</h1>

        <div className={"row"}>

          <div className={"col"}>
            <TableStatic header={[...props.result.header]}
                         inputs={["Zisk", "Rentabilita výnosov", "Rentabilita nákladov", "Nákladová účinnosť", "Nákladovosť"]}
                         data={[
                           [...props.result.profitData],
                           [...props.result.incomeProfitabilityData],
                           [...props.result.costProfitabilityData],
                           [...props.result.costEfficiencyData],
                           [...props.result.costIndicatorData]
                         ]}
            />
          </div>

        </div>

      </div>


      <h1 className={"bold text-primary"} style={{textAlign: "center", margin: 50}}>Dashboarding</h1>

      <div className={"row"}>

        <div className={"col-lg-12 col-md-12"}>
          <div className={"card mb-3"}>
            <div className={"card-body"}>
              {
                // @ts-ignore
                <ReactApexChart options={lineGraph.options} series={lineGraph.series} type="line" height={400}/>
              }
            </div>
          </div>
        </div>

      </div>

      <div>
        <div className={"card mb-3"}>
          <div className={"card-body"}>
            {   // @ts-ignore
              <ReactApexChart options={colGraph.options} series={colGraph.series} type="bar" height={400}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
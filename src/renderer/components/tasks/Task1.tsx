import '../../App.css';
import TableDynamic from "../TableDynamic";
import Result1 from "../results/Result1";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Task1() {

  let [getResult, setResult] = useState(
    {
      // @ts-ignore
      header: [],
      // @ts-ignore
      costTotal: 0,
      // @ts-ignore
      incomeTotal: 0,
      // @ts-ignore
      costData: [],
      // @ts-ignore
      incomeData: [],
      // @ts-ignore
      profitData: [],
      // @ts-ignore
      incomeProfitabilityData: [],
      // @ts-ignore
      costProfitabilityData: [],
      // @ts-ignore
      costEfficiencyData: [],
      // @ts-ignore
      costIndicatorData: [],
      // @ts-ignore
      costFlow: [],
      // @ts-ignore
      incomeFlow: [],
      // @ts-ignore
      profitFlow: []
    }
  )

  let state = useState({
    header: ["2000", "2001"],
    inputs: ["Vynos", "Naklad"],
    data: [
      ["2", "4"],
      ["1", "3"]
    ]
  })
  const makeArray = (numerator: number[], denominator: number[]): number[] => {
    let arr: number[] = []
    for (let i = 0; i < state[0].header.length; i++) {
      if (numerator[i] === 0 || denominator[i] === 0) arr.push(0)
      else arr.push(Math.round(100 * numerator[i] / denominator[i]) / 100)
    }
    return arr
  }

  const task1 = () => {

    let costTotal: number = 0
    let incomeTotal: number = 0
    let costData: number[] = []
    let incomeData: number[] = []
    let profitData: number[] = []

    state[0].data[0].map((value: string) => {
      incomeTotal += parseFloat(value)
      incomeData.push(parseFloat(value))
    })
    state[0].data[1].map((value: string) => {
      costTotal += parseFloat(value)
      costData.push(parseFloat(value))
    })

    for (let i = 0; i < state[0].header.length; i++) {
      profitData.push(incomeData[i] - costData[i])
    }

    let incomeProfitabilityData: number[] = makeArray(profitData, incomeData);
    let costProfitabilityData: number[] = makeArray(profitData, costData);
    let costEfficiencyData: number[] = makeArray(incomeData, costData);
    let costIndicatorData: number[] = makeArray(costData, incomeData);

    let profitFlow: number[] = []
    let costFlow: number[] = []
    let incomeFlow: number[] = []

    for (let i = 0; i < state[0].header.length; i++) {
      profitFlow[i] = 0
      for (let j = 0; j <= i; j++) {
        profitFlow[i] += profitData[j]
      }
    }

    for (let i = 0; i < state[0].header.length; i++) {
      costFlow[i] = 0
      for (let j = 0; j <= i; j++) {
        costFlow[i] += costData[j]
      }
    }

    for (let i = 0; i < state[0].header.length; i++) {
      incomeFlow[i] = 0
      for (let j = 0; j <= i; j++) {
        incomeFlow[i] += incomeData[j]
      }
    }


    setResult({
      // @ts-ignore
      header: state[0].header,
      // @ts-ignore
      costTotal: costTotal,
      // @ts-ignore
      incomeTotal: incomeTotal,
      // @ts-ignore
      costData: costData,
      // @ts-ignore
      incomeData: incomeData,
      // @ts-ignore
      profitData: profitData,
      // @ts-ignore
      incomeProfitabilityData: incomeProfitabilityData,
      // @ts-ignore
      costProfitabilityData: costProfitabilityData,
      // @ts-ignore
      costEfficiencyData: costEfficiencyData,
      // @ts-ignore
      costIndicatorData: costIndicatorData,
      // @ts-ignore
      costFlow: costFlow,
      // @ts-ignore
      incomeFlow: incomeFlow,
      // @ts-ignore
      profitFlow: profitFlow
    })
  }

  useEffect(task1, [])

  return (
    <div className={"scrollbox-lg"} style={{height: "100vh"}}>

      <div>
        <TableDynamic header={state[0].header}
                      inputs={state[0].inputs}
                      data={state[0].data}
                      rows={2} cols={2}
                      dynRows={false} dynCols={true}
                      proceed={task1}
        />
      </div>
      <div>
        <Result1 result={getResult}/>
      </div>
      <button><Link to={"/taskselect"}>Back</Link></button>
    </div>
  )
}

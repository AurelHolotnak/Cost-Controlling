import '../App.css';
import {useState} from "react";

export default function TableDynamic(props: any) {

  const [getState, setState] = useState({rows: props.rows, cols: props.cols})

  const handleChangeData = function (event: any, row: number, col: number) {
    props.data[row][col] = event.target.value === '' ? "0" : event.target.value
    props.proceed()
  }

  const handleChangeHeader = function (event: any, idx: number,) {
    props.header[idx] = event.target.value
    props.proceed()

  }

  const handleChangeInput = function (event: any, idx: number,) {
    props.inputs[idx] = event.target.value
    props.proceed()

  }

  const addColumn = () => {
    props.header.push((parseInt(props.header[props.header.length - 1]) + 1).toString())
    props.data.map((value: any) => {
      value.push(0)
    })
    setState({cols: getState.cols + 1, rows: getState.rows})

  }

  const addRow = () => {
    let arr: number[] = []
    props.inputs.push("naklad")
    props.types.push(false)
    for (let i = 0; i < props.data[0].length; i++) {
      arr.push(0)
    }
    props.data.push(arr)
    setState({cols: getState.cols, rows: getState.rows + 1})

  }

  return (
    <div className="card mb-3">

      <div className="card-header">
        <h3 className="caption">{props.taskName}</h3>
      </div>

      <table className="table table-bordered table-responsive">
        <thead className="thead-light">
        <tr>
          <th>
            Ekonomická položka
          </th>
          <th>
            Typ
          </th>
          {props.header.map((value: string, idx: number) => {
            return <th key={value}><input type="text" className="input-group-text"
                                          style={{border: 0, margin: 0, padding: 0, width: 60}}
                                          defaultValue={value}
                                          onBlur={() => (handleChangeHeader(event, idx))}/></th>
          })}
        </tr>

        </thead>
        <tbody>
        {props.inputs.map((value: string, row: number) => {
          return (
            <tr key={row}>
              <td key={value}>
                <input type="text" style={{border: 0}} defaultValue={value}
                       onBlur={() => (handleChangeInput(event, row))}/>
              </td>
              <td onClick={() => {
                props.types[row] = !props.types[row];
                props.proceed()
              }}>
                {props.types[row] ? "+" : "-"}
              </td>

              {props.data[row].map((value: string, col: number) => {
                return (
                  <td key={row + ":" + col}>
                    <input type="text"
                           style={{
                             border: 0,
                             margin: 0,
                             padding: 0,
                             width: 60,
                             textAlign: "center"
                           }}
                           defaultValue={value}
                           onBlur={() => (handleChangeData(event, row, col))}/>
                  </td>
                )
              })}
              {row === 0 && props.dynCols
                ? <td rowSpan={props.data.length} onClick={addColumn}>+</td>
                : console.log('else')}
            </tr>)
        })
        }
        {props.dynRows
          ? <tr>
            <td colSpan={props.header.length + 2} onClick={addRow}>+</td>
          </tr>
          : console.log("dynamic rows disabled")
        }
        </tbody>
      </table>

    </div>
  );
};
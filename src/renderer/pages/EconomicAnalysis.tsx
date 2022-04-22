import EconomicResult from '../components/results/EconomicResult';
import {economicActions, selectEconomic} from 'renderer/store/slice';
import HeaderBar from '../components/HeaderBar';
import groupedOptions from '../chartOfAccounts';
import TableDynamic from '../components/TableDynamic';
import TextField from '../components/TextField';
import {useBilanceCalc} from 'renderer/calculations';
import {useAppSelector} from 'renderer/store/hooks';

export default function EconomicAnalysis(props:any) {
  const {headers, items, data, values, text} = useAppSelector(selectEconomic);
  const result = useBilanceCalc(data, values);


  return (
    <div className={'task-container'}>
      {
        !props.hideHeader && <HeaderBar id={"1"} title={'Ekonomická analýza hospodárenia'}  back={"taskselect"}/>
      }

      <TableDynamic
        corner={'Ekonomická položka (Náklady(€) /Výnosy(€))'}
        headerType={'input'}
        header={headers}
        inputType={'select'}
        inputs={items}
        data={data}
        dynRows={true}
        dynCols={true}
        selectRow={groupedOptions}
        actions={economicActions}
      />

      <EconomicResult result={{headers, ...result}}/>

      <TextField text={text} action={economicActions.changeText}/>
    </div>
  );
}

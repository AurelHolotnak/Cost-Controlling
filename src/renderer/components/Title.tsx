export default function Title(props: any) {
  return props.sortable || props.hasAnalytic ? (
    <>
      <div className={'row hideInPrint'} style={{ height: 120 }}>
        {props.hasAnalytic ? (
          <div className={'col-3 sort-button'} onClick={props.toggleAnalytic}>
            {props.analytic ? 'Odobrať' : 'Pridať'} analytické účty
          </div>
        ) : (
          <div className={'col-3'} />
        )}
        <div className={'col-2 hideInScreen'} />
        <div className={'col-2'} />
        <div className={'col-2'}>
          <h1 className={'result-h1'}>Vstupy</h1>
        </div>
        <div className={'col-4'} />
        {props.sortable ? (
          <div className={'col-1 sort-button'} onClick={props.sort}>
            Zoradiť
          </div>
        ) : (
          <div className={'col-1'} />
        )}
      </div>
      <h1 className={'result-h1 hideInScreen'}>Vstupy</h1>
    </>
  ) : (
    <h1 className={'result-h1'}>Vstupy</h1>
  );
}

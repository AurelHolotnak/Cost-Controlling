import SelectCard from '../components/SelectCard';
import HeaderBar from '../components/HeaderBar';

export default function TaskSelection() {
  return (
    <div
      className={"selection-container"}
    >
      <HeaderBar
        title={'Ekonomické analýzy'}
        back={"welcome"}
        save={true}
      />
      <div className={'row'} style={{ marginBottom: '10vh' }}>
        <SelectCard
          to={'/task1'}
          head={'Ekonomická analýza hospodárenia'}
          body={
            'Hodnotenie úrovne hospodárenia podniku z hľadiska efektívnosti a hospodárnosti.'
          }
        />

        <SelectCard
          to={'/task2'}
          head={'Štruktúrna analýza'}
          body={
            'Analýza štruktúry nákladov podľa druhového a kalkulačného členenia.'
          }
        />

        <SelectCard
          to={'/task4'}
          head={'CVP analýza'}
          body={
            'Analýza zameraná na určenie kritického objemu výroby a stanovenie nulového bodu.'
          }
        />
      </div>

      <div className={'row'} style={{ marginBottom: '10vh' }}>
        <SelectCard
          to={'/task5'}
          head={'Sortimentná analýza'}
          body={
            'Analýza ekonomických ukazovateľov pre optimálnu štruktúru výrobného sortimentu.'
          }
        />

        <SelectCard
          to={'/task3'}
          head={'Indexná analýza'}
          body={'Zhodnotenie trendu vývoja druhových nákladov.'}
        />

        <SelectCard
          to={'/task6'}
          head={'Pareto analýza'}
          body={'Sledovanie príčin vzniku nákladov na základe pravidla 80/20.'}
        />
      </div>
    </div>
  );
}

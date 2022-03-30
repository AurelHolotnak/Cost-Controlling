import {
  useBilanceCalc,
  useChainCalc,
  useCVPCalc,
  usePretoCalc,
  useSortimentCalc,
  useStructureCalc,
} from '../renderer/calculations';

test('useBilanceCalc test1', () => {
  expect(
    useBilanceCalc(
      [
        [1307569, 1442146],
        [1356220, 1563250],
        [5601048, 6317942],
      ],
      ['501', '502', '602']
    )
  ).toEqual({
    costTotal: 5669185,
    incomeTotal: 11918990,
    profitTotal: 6249805,
    costData: [2663789, 3005396],
    incomeData: [5601048, 6317942],
    profitData: [2937259, 3312546],
    incomeProfitabilityData: [0.52, 0.52],
    costProfitabilityData: [1.1, 1.1],
    costEfficiencyData: [2.1, 2.1],
    costIndicatorData: [0.48, 0.48],
  });
});

test('useBilanceCalc test2', () => {
  expect(
    useBilanceCalc(
      [
        [68145, 78436, 52898, 49008],
        [58625, 63625, 50516, 48400],
      ],
      ['601', '501']
    )
  ).toEqual({
    costTotal: 221166,
    incomeTotal: 248487,
    profitTotal: 27321,
    costData: [58625, 63625, 50516, 48400],
    incomeData: [68145, 78436, 52898, 49008],
    profitData: [9520, 14811, 2382, 608],
    incomeProfitabilityData: [0.14, 0.19, 0.05, 0.01],
    costProfitabilityData: [0.16, 0.23, 0.05, 0.01],
    costEfficiencyData: [1.16, 1.23, 1.05, 1.01],
    costIndicatorData: [0.86, 0.81, 0.95, 0.99],
  });
});

test('useStructureCalc test', () => {
  expect(
    useStructureCalc([
      [584, 0, 52, 6],
      [0, 0, 60, 10],
      [0, 45, 42, 29],
      [0, 17, 16, 11],
      [0, 0, 40, 10],
      [0, 0, 10, 68],
    ])
  ).toEqual({
    rowSums: [642, 70, 116, 44, 50, 78],
    colSums: [584, 62, 220, 134],
    totalCost: 1000,
  });
});

test('useChainCalc test', () => {
  expect(
    useChainCalc(
      [
        [1307569, 1356220, 1442146],
        [0, 5601048, 6317942],
      ],
      ['Bázický rok', '2000', '2001'],
      ['501', '601']
    )
  ).toEqual({
    headers: ['2000', '2001'],
    costSumsForYears: [1356220, 1442146],
    incomeSumsForYears: [5601048, 6317942],
    costSumBase: 1307569,
    incomeSumBase: 0,
    chainIndexes: [1.06],
    baseIndexes: [1.04, 1.1],
    costDiff: [6.34],
    incomeDiff: [12.8],
    reaction: [0.5],
    betweenYears: ['2000/2001'],
  });
});

test('useCVPCalc test1', () => {
  expect(
    useCVPCalc(
      [
        [8600, 8, 5.6],
        [5300, 15, 6.8],
      ],
      150870,
      54000
    )
  ).toEqual({
    volumes: [8600, 5300],
    prices: [8, 15],
    costs: [5.6, 6.8],
    fixTotal: 150870,
    minProfit: 54000,
    zeroEur: [502900, 275981.71],
    zeroTon: [62862.5, 18398.78],
    zeroProf: [85362.5, 24984.15],
  });
});

test('useCVPCalc test2', () => {
  expect(
    useCVPCalc(
      [
        [20, 10, 7],
        [30, 5, 3],
      ],
      50,
      200
    )
  ).toEqual({
    volumes: [20, 30],
    prices: [10, 5],
    costs: [7, 3],
    fixTotal: 50,
    minProfit: 200,
    zeroEur: [166.67, 125],
    zeroTon: [16.67, 25],
    zeroProf: [83.33, 125],
  });
});

test('useSortimentCalc', () => {
  expect(
    useSortimentCalc([
      [985, 1215],
      [1745, 1581],
      [2700, 2600],
      [8000, 4000],
    ])
  ).toEqual({
    rentCost: [54.73, 64.45],
    rentIncome: [35.37, 39.19],
    marginProfit: [955, 1019],
    marginGross: [1715, 1385],
    allowance: [0.64, 0.53],
    profit: [7640000, 4076000],
  });
});

test('useSortimentCalc test1', () => {
  expect(
    useSortimentCalc([
      [39.6, 38.36, 35.27, 31.82, 29.3],
      [43.18, 41.94, 38.85, 35.4, 32.88],
      [75.24, 71.68, 64.37, 59.73, 53.09],
      [136846, 42969, 41354, 250818, 146059],
    ])
  ).toEqual({
    rentCost: [74.25, 70.91, 65.69, 68.73, 61.47],
    rentIncome: [42.61, 41.49, 39.65, 40.73, 38.07],
    marginProfit: [32.06, 29.74, 25.52, 24.33, 20.21],
    marginGross: [35.64, 33.32, 29.1, 27.91, 23.79],
    allowance: [0.47, 0.46, 0.45, 0.47, 0.45],
    profit: [4387282.76, 1277898.06, 1055354.08, 6102401.94, 2951852.39],
  });
});

test('useParetoCalc test1', () => {
  expect(
    usePretoCalc(
      [[3998], [1307], [361], [82], [104], [1573], [5]],
      [
        'Chyby mechanického trieskového opracovania',
        'Chyby tvárnenia materiálu',
        'Materiálové chyby',
        'Chyby zvárania',
        'Chyby povrchu a povrchovej úpravy',
        'Chyby kompletizácie, balenia',
        'Chyby dokumentácie',
      ]
    )
  ).toEqual({
    causes: [
      'Chyby mechanického trieskového opracovania',
      'Chyby kompletizácie, balenia',
      'Chyby tvárnenia materiálu',
      'Materiálové chyby',
      'Chyby povrchu a povrchovej úpravy',
      'Chyby zvárania',
      'Chyby dokumentácie',
    ],
    percentages: [53.81, 21.17, 17.59, 4.86, 1.4, 1.1, 0.07],
    values: [3998, 1573, 1307, 361, 104, 82, 5],
    kumul: [53.81, 74.98, 92.57, 97.43, 98.83, 99.93, 100],
    valuesKumul: [3998, 5571, 6878, 7239, 7343, 7425, 7430],
    sum: 7430,
  });
});
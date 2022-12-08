export const photoControlOptions = [
  [
    {
      type: 'range',
      value: '300px',
      name: 'width',
      max: '400',
      min: '200'
    },
    {
      type: 'range',
      value: '300px',
      name: 'height',
      max: '400',
      min: '200'
    },
    {
      type: 'range',
      value: '0',
      name: 'borderRadius',
      max: '200',
      min: '0'
    },
    {
      type: 'color',
      value: 'rgb(255, 103, 0)',
      name: 'backgroundColor'
    },{
      type: 'text',
      value: 'none',
      name: 'backgroundImage'
    },
  ],
  [
    {
      type: 'range',
      value: '20px',
      name: 'marginTop',
      max: '300',
      min: '-300'
    },
    {
      type: 'range',
      value: '40px',
      name: 'marginLeft',
      max: '200',
      min: '-200'
    },
    {
      type: 'range',
      value: '500',
      name: 'fontWeight',
      max: '900',
      min: '100'
    },
    {
      type: 'range',
      value: '180px',
      name: 'fontSize',
      max: '200',
      min: '12'
    },
    {
      type: 'range',
      value: '0',
      name: 'letterSpacing',
      max: '20',
      min: '0'
    },
    {
      type: 'select',
      value: ['Dengxian','Aldhabi','Arial Black','Kaiti', 'Microsoft YaHei','SimKai'],
      name: 'fontFamily'
    },
    {
      type: 'color',
      value: '#001f3f',
      name: 'color'
    }
  ]
];

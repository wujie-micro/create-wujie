export default [
  {
    name: 'mainFramework',
    type: 'select',
    instructions: false,
    message: 'What framework do you choose as your main application',
    choices: [
      {
        title: 'Webpack + Vue2',
        value: 'main-vue'
      },
      // {
      //   title: 'Vite + Vue3',
      //   value: 'main-vite'
      // },
      {
        title: 'Webpack + React17',
        value: 'main-react'
      }
    ]
  },
  {
    name: 'mainRouter',
    type: 'select',
    instructions: false,
    message: 'Select the main application route pattern',
    choices: [
      {
        title: 'hash',
        value: 'hash'
      },
      {
        title: 'history',
        value: 'history'
      }
    ]
  },
  {
    name: 'subFramework',
    type: 'multiselect',
    message: 'What framework do you choose as your micro application',
    instructions: false,
    choices: [
      {
        title: 'Vue3 + Vite',
        value: 'Vite'
      },
      {
        title: 'Vue2 + Webpack',
        value: 'Vue2'
      },
      {
        title: 'Vue3 + Webpack',
        value: 'Vue3'
      },
      {
        title: 'React16 + Webpack',
        value: 'React16'
      },
      {
        title: 'React17 + Webpack',
        value: 'React17'
      },
      // {
      //   title: '🚧 React18 + Webpack',
      //   value: 'React18',
      //   disabled: true
      // },
      { title: 'Angular12', value: 'Angular12' }
    ]
  },
  {
    name: 'subRouter',
    type: 'select',
    instructions: false,
    message: 'Select the sub application route pattern',
    choices: [
      {
        title: 'hash',
        value: 'hash'
      },
      {
        title: 'history',
        value: 'history'
      }
    ]
  }
]

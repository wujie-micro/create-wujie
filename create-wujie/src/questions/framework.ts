export default [
  {
    name: 'mainFramework',
    type: 'select',
    instructions: false,
    message: 'What framework do you choose as your main application ?',
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
    message: 'Select the main application route pattern (选择主应用路由模式)',
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
    message: 'What framework do you choose as your sub application ?',
    instructions: false,
    choices: [
      {
        title: 'Vite',
        value: 'Vite'
      },
      {
        title: 'Vue2',
        value: 'Vue2'
      },
      {
        title: 'Vue3',
        value: 'Vue3'
      },
      {
        title: 'React16',
        value: 'React16'
      },
      {
        title: 'React17',
        value: 'React17'
      },
      // {
      //   title: '🚧 React18',
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
    message: 'Select the sub application route pattern (选择子应用路由模式)',
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

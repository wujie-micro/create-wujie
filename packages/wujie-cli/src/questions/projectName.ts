import options from '@/shared/options'
import emptyDirName from '@/utils/emptyDirName'
import { red } from 'kolorist'
const defaultProjectName = 'project-name'

const packageName = [
  {
    name: 'projectName',
    type: 'text',
    message: 'Project name:',
    initial: defaultProjectName,
    onState: (state) => {
      options.name = state.value
    },
    active: 'Yes',
    inactive: 'No'
  },
  {
    name: 'shouldOverwrite',
    type: async () => ((await emptyDirName(options.name)) ? null : 'toggle'),
    initial: false,
    message: async () => {
      return `Target "${options.name}" is not empty. Remove existing files and continue?`
    },
    active: 'Yes',
    inactive: 'No'
  },
  {
    name: 'overwriteChecker',
    type: (prev, values) => {
      if (values.shouldOverwrite === false) {
        throw new Error(red('✖') + ' Operation cancelled')
      }
      return null
    }
  }
]
export default packageName

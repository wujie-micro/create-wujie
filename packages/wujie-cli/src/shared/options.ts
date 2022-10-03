interface Options {
  name?: string
  projectName?: string
  package?: 'pnpm' | 'npm' | 'yarn'
  mainFramework?: string
  subFramework?: string[]
  dest?: string
}

const options: Options = {}
export default options

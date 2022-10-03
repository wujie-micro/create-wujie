import options from '@/shared/options'
import { red } from 'kolorist'

async function createQuestion(util, question) {
  const result = await util(question, {
    onCancel: () => {
      throw new Error(red('✖') + ' Operation cancelled')
    }
  })
  Object.assign(options, result)
  return Promise.resolve(true)
}

export default createQuestion

import options from '@/shared/options'

async function createQuestion(util, question) {
  const result = await util(question, {
    onCancel: () => {
      throw new Error('❌' + ' operation cancelled')
    }
  })
  Object.assign(options, result)
  return Promise.resolve(true)
}

export default createQuestion

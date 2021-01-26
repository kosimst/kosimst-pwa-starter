import callableFunction from '../../helpers/callable-functions'

const helloWorld = callableFunction<'helloWorld'>(async () => {
  return {
    date: new Date(),
    greeting: 'Hello world!',
  }
})

export default helloWorld

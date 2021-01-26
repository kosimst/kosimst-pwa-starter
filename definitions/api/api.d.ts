import ApiFunction from '../generics/api-function'
import HelloWorld from '../types/hello-world'

interface Api {
  helloWorld: ApiFunction<null, HelloWorld>
}

export default Api

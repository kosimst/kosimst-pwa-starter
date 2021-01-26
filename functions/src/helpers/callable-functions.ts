import * as functions from 'firebase-functions'

import Api from '../../../definitions/api'
import cleanDates from './clean-dates'

const callableFunction = <name extends keyof Api>(
  handler: (
    input: Api[name]['input'],
    context: functions.https.CallableContext
  ) => Promise<Api[name]['output']>
) =>
  functions.region('europe-west3').https.onCall(async (input, context) => {
    const output = await handler(input, context)

    return cleanDates(output)
  })

export default callableFunction

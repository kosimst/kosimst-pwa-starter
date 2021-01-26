const parseDates = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(parseDates)
  }
  if (typeof obj._timestamp === 'number') {
    return new Date(obj._timestamp)
  }
  if (typeof obj === 'object' && obj !== null) {
    const result: any = {}
    for (const [key, value] of Object.entries(obj)) {
      result[key] = parseDates(value)
    }
    return result
  }

  return obj
}

export default parseDates

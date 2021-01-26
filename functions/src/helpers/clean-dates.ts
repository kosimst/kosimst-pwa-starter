const cleanDates = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(cleanDates)
  }
  if (obj instanceof Date) {
    return { _timestamp: obj.getTime() }
  }
  if (typeof obj === 'object' && obj !== null) {
    const result: any = {}
    for (const [key, value] of Object.entries(obj)) {
      result[key] = cleanDates(value)
    }
    return result
  }

  return obj
}

export default cleanDates

// remove empty objects
export function removeEmpty(obj) {
  Object.keys(obj).forEach((key) => {
    ;(obj[key] && typeof obj[key] === 'object' && removeEmpty(obj[key])) ||
      ((obj[key] === '' || obj[key] === undefined || obj[key] === null) &&
        delete obj[key])
  })
  return obj
}

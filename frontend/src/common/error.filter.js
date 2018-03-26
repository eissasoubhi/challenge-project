export default (errorValue) => {
  if (Array.isArray(errorValue)) {
    return `${errorValue[0]}`
  }

  return `${errorValue}`
}

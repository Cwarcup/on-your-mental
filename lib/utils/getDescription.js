function getDescription(str) {
  const descriptionArr = str.split('\n').filter((item) => item)
  let index = descriptionArr.findIndex((v) => v.includes('Welcome back to On Your Mental')) + 1
  return descriptionArr[index]
}

export default getDescription

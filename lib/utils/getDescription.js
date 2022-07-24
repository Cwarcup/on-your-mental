function getDescription(str) {
  const descriptionArr = str.split('\n').filter((item) => item)
  let index = descriptionArr.findIndex((v) => v.includes('Hey everyone')) + 1
  return descriptionArr[index]
}

export default getDescription

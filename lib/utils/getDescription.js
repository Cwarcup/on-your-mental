function getDescription(str) {
  // const descriptionArr = str.split('\n').filter((item) => item)

  console.log('descriptionArr run: ', str)

  // let index = descriptionArr.findIndex((v) => v.includes('back to On Your Mental') + 1)
  let breakAt = '___________________________________________________________________________'
  // slice from index 0 to index of str
  let slimDescription = str.slice(0, str.indexOf(breakAt))
  console.log('slimDescription: ', slimDescription)

  return slimDescription
}

export default getDescription

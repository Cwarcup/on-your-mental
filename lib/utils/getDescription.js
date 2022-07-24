function getDescription(str) {
  const descriptionArr = str.split('\n').filter((item) => item)
  let breakAt = '___________________________________________________________________________'
  let slimDescription = descriptionArr.slice(0, descriptionArr.indexOf(breakAt))
  return slimDescription
}

export default getDescription

function getDescription(str) {
  const descriptionArr = str.split('\n').filter((item) => item)
  let breakAt = '___________________________________________________________________________'
  // return before breakAt
  let slimDescription = descriptionArr.slice(0, descriptionArr.indexOf(breakAt))
  return slimDescription
}

export default getDescription

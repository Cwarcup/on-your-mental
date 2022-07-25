function getDescription(str) {
  const descriptionArr = str.split('\n').filter((item) => item)
  let breakAt = '___________________________________________________________________________'
  // return before breakAt
  let slimDescription = descriptionArr
    .slice(0, descriptionArr.indexOf(breakAt))
    .filter((item) => !item.includes('CHECK OUT OUR NEW WEBSITE'))
    .filter((item) => !item.includes('the podcast that encourages'))
    .filter((item) => item !== 'www.onyourmental.com')
  return slimDescription
}

export default getDescription

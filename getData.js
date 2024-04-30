const getData = () => {
  return fetch('https://www.google.com/global-API/?search=javascript+module')
    .then(response => {
      if(!response.ok) throw new Error(response.statusText)
      return response
    })
  .then(response => {
    if(response.hasOwnProperty('Error')) {
    throw new Error(response.Error)
    } else {
      if(response.Search) return response.Search
      return response
    }
  })
}

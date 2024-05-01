export const getData = (key, value) => {
  const randomMovies = getRandomMovies(10)
  return fetch(`https://www.google.com/global-API/?${key || 's'}=${value || randomMovies}`)
    .then(response => {
      if(!response.ok) throw new Error(response.statusText)
      console.log(response)
      return response
    })
  .then(response => {
    if(response.hasOwnProperty('Error')) {
    throw new Error(response.Error)
      console.log(response)
    } else {
      if(response.Search) return response.Search
      return response
    }
  })
}

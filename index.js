import Y from 'ycomb'

export default Y(f => (g, i) => {
  let r = g(i - 1)
  return r !== false ? r : f(g, i - 1)
})

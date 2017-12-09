
let files = require.context('@/middleware', false, /^\.\/.*\.(js|ts)$/)
let filenames = files.keys()

function getModule (filename) {
  let file = files(filename)
  return file.default
    ? file.default
    : file
}
let middleware = {}

// Generate the middleware
for (let filename of filenames) {
  let name = filename.replace(/^\.\//, '').replace(/\.(js|ts)$/, '')
  middleware[name] = getModule(filename)
}

export default middleware


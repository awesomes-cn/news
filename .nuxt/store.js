import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Recursive find files in ~/store
const files = require.context('~/store', true, /^\.\/.*\.(js|ts)$/)
const filenames = files.keys()

// Store
let storeData = {}

// Check if store/index.js exists
const indexFilename = filenames.find((filename) => filename.includes('./index.'))
if (indexFilename) {
  storeData = getModule(indexFilename)
}

// If store is not an exported method = modules store
if (typeof storeData !== 'function') {

  // Store modules
  if (!storeData.modules) {
    storeData.modules = {}
  }

  for (let filename of filenames) {
    let name = filename.replace(/^\.\//, '').replace(/\.(js|ts)$/, '')
    if (name === 'index') continue

    let namePath = name.split(/\//)
    let module = getModuleNamespace(storeData, namePath)

    name = namePath.pop()
    module[name] = getModule(filename)
    module[name].namespaced = true
  }

}

// createStore
export const createStore = storeData instanceof Function ? storeData : () => {
  return new Vuex.Store(Object.assign({}, storeData, {
    state: storeData.state instanceof Function ? storeData.state() : {}
  }))
}

// Dynamically require module
function getModule (filename) {
  const file = files(filename)
  const module = file.default || file
  if (module.commit) {
    throw new Error('[nuxt] store/' + filename.replace('./', '') + ' should export a method which returns a Vuex instance.')
  }
  if (module.state && typeof module.state !== 'function') {
    throw new Error('[nuxt] state should be a function in store/' + filename.replace('./', ''))
  }
  return module
}

function getModuleNamespace (storeData, namePath) {
  if (namePath.length === 1) {
    return storeData.modules
  }
  let namespace = namePath.shift()
  storeData.modules[namespace] = storeData.modules[namespace] || {}
  storeData.modules[namespace].namespaced = true
  storeData.modules[namespace].modules = storeData.modules[namespace].modules || {}
  return getModuleNamespace(storeData.modules[namespace], namePath)
}

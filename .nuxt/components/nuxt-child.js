import Vue from 'vue'

const transitionsKeys = [
  'name',
  'mode',
  'css',
  'type',
  'duration',
  'enterClass',
  'leaveClass',
  'enterActiveClass',
  'enterActiveClass',
  'leaveActiveClass',
  'enterToClass',
  'leaveToClass'
]
const listenersKeys = [
  'beforeEnter',
  'enter',
  'afterEnter',
  'enterCancelled',
  'beforeLeave',
  'leave',
  'afterLeave',
  'leaveCancelled'
]

export default {
  name: 'nuxt-child',
  functional: true,
  render (h, { parent, data }) {
    data.nuxtChild = true

    const transitions = parent.$nuxt.nuxt.transitions
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition
    let depth = 0
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++
      }
      parent = parent.$parent
    }
    data.nuxtChildDepth = depth
    const transition = transitions[depth] || defaultTransition
    let transitionProps = {}
    transitionsKeys.forEach((key) => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key]
      }
    })
    let listeners = {}
    listenersKeys.forEach((key) => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key]
      }
    })
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [
      h('router-view', data)
    ])
  }
}

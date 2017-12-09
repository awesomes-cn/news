import axios from '~/plugins/axios'

export default async function ({ store, redirect, isServer, req, head }) {
  if (store.state.session) {
    let notifications = await axios(req).get('notification/unread?domain=news')
    store.commit('notifiy', notifications.data.count)
  }
}

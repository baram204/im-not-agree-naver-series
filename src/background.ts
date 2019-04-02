import store from './store/index'

// this does nothing.
chrome.browserAction.onClicked.addListener(function (tab) {  console.log(`Hello ${store.getters.foo}!`)
})

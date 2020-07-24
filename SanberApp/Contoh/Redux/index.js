import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react';

// Import komponen App
import App from './App'

// Import store
import store from './store'

// Memasukkan store pada Provider
export default function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
import React from 'react';
import Router from "./Router/Router"

import {Provider} from "react-redux"
import store from "./store/store"
function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router></Router>
    </Provider>
    </div>
  );
}

export default App;

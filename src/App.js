import React from "react";
import { Provider } from "react-redux";

import MainRouter from "./features/router/MainRouter";
import store from "./store";
import StaffDB from "./screens/Dashboard/StaffDB";

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
      <StaffDB/>
    
    </Provider>
    
  );
}

export default App;
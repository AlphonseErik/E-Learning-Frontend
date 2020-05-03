import React from "react";
import { Provider } from "react-redux";

import MainRouter from "./features/router/MainRouter";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <MainRouter />
<<<<<<< HEAD
      <StaffDB/>
    
=======
>>>>>>> 55198250c94ed907fd2634bf8d47ae354700e673
    </Provider>
    
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux"
import { store } from "./store/store.js";

// createRoot(document.getElementById("root")).render(
//   // <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   // </StrictMode>
// );


import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
)
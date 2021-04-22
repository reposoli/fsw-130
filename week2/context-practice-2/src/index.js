import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import {PlantContextProvider} from "./provider/plantContext";


ReactDOM.render(
     <React.StrictMode>
          <BrowserRouter>
               <PlantContextProvider>
                    <App />
               </PlantContextProvider>, 
          </BrowserRouter>
     </React.StrictMode>,
     document.getElementById("root")
);

import React from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from './features/recipeSlice'
import { Provider } from 'react-redux'

import App from "./components/App"
import Battle from "./components/Battle"
import Pokemon from "./components/Pokemon"
import Error from "./components/Error"

// import reducers from './reducers'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "battle",
    element: <Battle />,
    children: [
      {
        path: "pokedex",
        element: <Pokemon />,
      },
    ],
  }
]);

const store = configureStore({ 
  reducer: {
    recipe: recipeReducer
  }
})

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
)


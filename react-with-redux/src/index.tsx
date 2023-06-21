import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "@store/index";
import {Provider} from "react-redux";
import { ReactQueryDevtools } from 'react-query/devtools'
import {queryClient} from "./libs/react-query/queryClient";
import { QueryClientProvider } from 'react-query'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      <ReactQueryDevtools />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

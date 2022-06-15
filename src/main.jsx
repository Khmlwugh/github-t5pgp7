import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './main.css';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Manan from './routes/manan';

let rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/manan" element={<Manan />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

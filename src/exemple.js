

{/*import * as React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from './App';

ReactDOM.render(
  <HashRouter>
  <App />
  </HashRouter>,
  root
);


import { Route } from 'react-router-dom';

<Route path="/home" component={Home} />




import { Link } from 'react-router-dom';

<Link to="/home">Home</Link>*/}



<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/user" element={<UserList />} />
  <Route path="/user/:id" element={<Users />} />
</Routes>








import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import "./css/reset.css";
import "./css/global.css";
import { Auth0Provider } from '@auth0/auth0-react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-k1d0n8bovawkxoek.us.auth0.com"
    clientId="vuYTNMTSkuJR4Wt1Lq16qlyEBPEcSIMW"
    // redirectUri={window.location.origin}
  
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <Router />
  </React.StrictMode>
  </Auth0Provider>
);

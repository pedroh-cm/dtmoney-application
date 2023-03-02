import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Desenvolvimento",
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1500,
          createdAt: new Date('2021-02-20 10:00:00')
        },
        {
          id: 3,
          title: "Macbook",
          type: "withdraw",
          category: "Setup",
          amount: 12000,
          createdAt: new Date('2021-02-20 10:00:00')
        },
        {
          id: 4,
          title: "Desenvolvimento de APP",
          type: "deposit",
          category: "Aplicativo",
          amount: 12000,
          createdAt: new Date('2021-02-20 10:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction")
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create("transaction", data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

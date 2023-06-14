import React from 'react';
import "./App.scss";
import { Layout } from './Components/layout/layout';
import { PaymentForm } from './pages/Payment/payment';

function App() {
  return (
    <div className="App" title='App'>
      <Layout>
        <div className="App">
          <PaymentForm />
        </div>
      </Layout>
    </div>
  );
}

export default App;

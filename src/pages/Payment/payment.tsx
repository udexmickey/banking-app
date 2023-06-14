import React from 'react';
import { InputForm } from '../../Components/ui/form';
import { Receipt } from '../../Components/ui/receipt';
import { Header } from '../../Components/ui/header';

export const PaymentForm = () => {
  
  return (
        <div className="wrapper grid grid-cols-12">
        <div className="close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Close</title><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"/></svg>
        </div>
        <div className="col-span-12 md:col-span-7">
            <div className="form">
                <Header />
                <section className="form-body">
                    <InputForm />
                </section>
            </div>
        </div>
        <Receipt />
    </div>
  )
}

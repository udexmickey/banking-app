import React from 'react'
import { ReceiptProps } from '../types/receipt.type';
import '../../styles/master-card.scss';

export function Receipt(props: ReceiptProps) {
  return (
    <div className="col-span-12 md:col-span-5 payment-col">
        <div className="checkout">
            <div className="checkout-details">
            <div className="credit-card">
            <span className="blu"></span>
                <div className="credit-card__head">
                    <img src="assets/chip.png" alt="" className="chip" />
                    <img src="assets/wifi.png" alt="" className="wifi" />
                </div>
                <div className="credit-card__body">
                    <span className="holder">{ props.name ??`jonathan micheal`}</span>
                    <div className="card-digits">
                        <div className="hidden-digits">
                            <span className="circle"></span>
                            <span className="circle"></span>
                            <span className="circle"></span>
                            <span className="circle"></span>
                        </div>
                        <span className="visible-digits">3456</span>
                    </div>
                </div>
                <div className="credit-card__footer">
                    <span className="expiry">09/22</span>
                    <img src="assets/mastercard-2.svg" alt="" className="logo" />
                </div>
                <div className="card__design">
                    <span className="inner"></span>
                </div>
            </div>
                <div className="purchase-data">
                    <div className="data">
                        <span className="title">company</span>
                        <span className="value">
                            <img src="assets/apple-13.svg" alt="" />
                            <span className="inner-text">apple</span>
                        </span>
                    </div>
                    <div className="data">
                        <span className="title">order number</span>
                        <span className="value">
                            <span className="inner-text">1266201</span>
                        </span>
                    </div>
                    <div className="data">
                        <span className="title">product</span>
                        <span className="value">
                            <span className="inner-text">macbook air</span>
                        </span>
                    </div>
                    <div className="data">
                        <span className="title">VAT (20%)</span>
                        <span className="value">
                            <span className="inner-text">$100.00</span>
                        </span>
                    </div>
                </div>
                <div className="divider">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <div className="purchase-total">
                    <div className="total">
                        <span className="desc">You have to Pay</span>
                        <div className="t-amount">
                            <h1 className="amount">549<sub>.99</sub></h1>
                            <span className="symbol">USD</span>
                        </div>
                    </div>
                    <img src="assets/docket.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

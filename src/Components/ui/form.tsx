import React, { ChangeEvent, useState } from 'react'
import { Form } from 'react-bootstrap'
import { CardNumberAutoFormat } from '../../utils';
import { PayButton } from './button';
import { FormInterface } from '../interface/form-interface';

export function InputForm() {
  const [value, setValue] = useState<FormInterface | null> ({});

    const onChangeCardNum = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = CardNumberAutoFormat(e.target.value);
    // setValue(targetValue);
    setValue({ ...value, cardNum: targetValue } as unknown  as FormInterface)

    //getting the actual value without dash and space
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const actualNumber = value.cardNum.replace(/ - /g, '')
  };

    const handleCvvOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = +e.target.value;
    setValue({...value, cvv:targetValue} as FormInterface)
  };
  const handleExpireDayOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = +e.target.value;
    setValue({...value, expireDay:targetValue} as FormInterface)
  };

  const handleExpireYearOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = +e.target.value;
    setValue({...value, expireYear:targetValue} as FormInterface)
  };

  const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    setValue({...value, password:targetValue.replace(/' '/g, '')} as FormInterface)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValue({value: null} as FormInterface)
    console.log('value ', value);
  }
  return (
    <Form action="" onSubmit={handleSubmit}>
        <div className="input-group header-digit">
            <div className="header header-digit">
                <div className="description">
                    <h2 className="title">card number</h2>
                    <p className="desc">Enter the 15-digit card number on the card</p>
                </div>
                <button className="edit">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
                    viewBox="0 0 512 512" xmlSpace="preserve">
                        <g>
                            <g>
                                <path d="M311.18,78.008L32.23,356.958L0.613,485.716c-1.771,7.209,0.355,14.818,5.604,20.067
                                c5.266,5.266,12.88,7.368,20.067,5.604l128.759-31.617l278.95-278.95L311.18,78.008z M40.877,471.123l10.871-44.271l33.4,33.4
                                L40.877,471.123z" />
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M502.598,86.818L425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0l-30.825,30.825l122.812,122.812l30.825-30.825
                                C515.134,119.679,515.134,99.354,502.598,86.818z" />
                            </g>
                        </g>
                    </svg>
                    <span className="btn-desc">Edit</span>
                </button>
            </div>
            <div className="main card-number-input">
                <img src="assets/mc_symbol.svg" alt="" className="leading-icon" />
                <input type="tel" maxLength={25} value={value?.cardNum} onChange={onChangeCardNum}  placeholder="2412   -   7512   -   3412   -   3456" />
                <img src="assets/verified-badge.svg" alt="" className="trailing-icon" />
            </div>
        </div>
        <div className="input-group __col">
            <div className="header">
                <div className="description">
                    <h2 className="title">CVV number</h2>
                    <p className="desc">Enter the 3 or 4 digit number on the card</p>
                </div>
            </div>
            <div className="main">
                <input type="tel" maxLength={3} value={value?.cvv}  onChange={handleCvvOnChange} placeholder="327" />
                <img src="assets/dots.svg" alt="" className="trailing-icon" />
            </div>
        </div>
        <div className="input-group __col">
            <div className="header">
                <div className="description">
                    <h2 className="title">expiry date</h2>
                    <p className="desc">Enter the expiration date of the card</p>
                </div>
            </div>
            <div className="grp">
                <div className="main __date">
                    <input type="tel" maxLength={2} value={value?.expireDay}  onChange={handleExpireDayOnChange} placeholder="09" />
                </div>
                <span className="divider">/</span>
                <div className="main __date">
                    <input type="tel" maxLength={2} value={value?.expireYear}  onChange={handleExpireYearOnChange} placeholder="22" />
                </div>
            </div>
        </div>
        <div className="input-group __col">
            <div className="header">
                <div className="description">
                    <h2 className="title">password</h2>
                    <p className="desc">Enter your Dynamic password</p>
                </div>
            </div>
            <div className="main">
                <input type="password" value={value?.password} onChange={handlePasswordOnChange} placeholder="******" />
                <img src="assets/dots.svg" alt="" className="trailing-icon" />
            </div>
        </div>
        {/* <button type="submit" className="btn-submit">
            pay now
        </button> */}
        <PayButton type="submit" className="btn-submit" defaultValue={'pay now'} />
    </Form>
  )
}

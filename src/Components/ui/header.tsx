import React from 'react'
import { HiInboxStack } from 'react-icons/hi2'

export function Header() {
  return (
    <header className="form-header">
        <div className="logo">
            <span className="logo-circle">
                <i className='icon-bag'>
                    <HiInboxStack />
                </i>
            </span>
            <h1>AceCoin<span className="lean">Pay</span></h1>
        </div>
        <div className="timer">
            <div>
                <span className="timer-box">0</span>
                <span className="timer-box">1</span>
            </div>
            <span className="timer-divider">:</span>
            <div>
                <span className="timer-box">1</span>
                <span className="timer-box">9</span>
            </div>
        </div>
    </header>
  )
}

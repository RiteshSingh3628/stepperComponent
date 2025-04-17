import React, { Component } from 'react'
import CheckOutStepper from './component/CheckOutStepper'

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Provide your shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Provide your Payment details.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been deliverd.</div>,
  },
]

function App() {
  return (
    <div>
      <h1>Stepper UI</h1>
      <CheckOutStepper stepsConfig = {CHECKOUT_STEPS}/>
    </div>
  )
}

export default App

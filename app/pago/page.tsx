'use client'

import React from "react"


type BoldCheckoutProps = {
  orderId: string
  currency: string
  amount: string
  apiKey: string
  integritySignature: string
  description: string
  tax: string
}

const initBoldCheckout = () => {
  if (document.querySelector('script[src="https://checkout.bold.co/library/boldPaymentButton.js"]')) {
    console.warn('Bold Checkout script is already loaded.')
    return
  }

  let js
  js = document.createElement('script')
  js.onload = () => {
    window.dispatchEvent(new Event('boldCheckoutLoaded'))
  }
  js.onerror = () => {
    window.dispatchEvent(new Event('boldCheckoutLoadFailed'))
  }
  js.src = 'https://checkout.bold.co/library/boldPaymentButton.js'
  document.head.appendChild(js)
}

const Payment = () => {
  // If coming from checkout, params are ?bold-order-id=123456789&bold-tx-status=approved

  const [boldCheckoutProps, setBoldCheckoutProps] = React.useState<BoldCheckoutProps | null>(null)
  React.useEffect(() => {
    window.addEventListener('boldCheckoutLoaded', async () => {
      const boldCheckoutProps = await fetch('/api/get-bold-checkout').then(res => res.json())
      setBoldCheckoutProps(boldCheckoutProps)
    })
    initBoldCheckout()
  }, [])

  const pay = () => {
    const checkout = new (window as any).BoldCheckout({
      redirectionUrl: window.location.href,
      ...boldCheckoutProps,
    })
    checkout.open()
  }
  return <div className="w-screen h-screen flex justify-center items-center">
    <button onClick={pay} className="rounded-xl bg-orange-300 px-4 py-1 border border-orange-500">
      Pagar
    </button>
  </div>
}

export default Payment

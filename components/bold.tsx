import React from 'react'

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

const BoldButton = (props: { children?: React.ReactNode }) => {
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

  return (
    <button onClick={pay} className="rounded-xl bg-orange-300 px-4 py-1 border border-orange-500">
      {props.children}
    </button>
  )
}

export default BoldButton
'use client'

import React from "react"

import BoldButton from "@/components/bold"

const Payment = () => {
  // If coming from checkout, params are ?bold-order-id=123456789&bold-tx-status=approved

  return <div className="w-screen h-screen flex justify-center items-center">
    <BoldButton />
  </div>
}

export default Payment

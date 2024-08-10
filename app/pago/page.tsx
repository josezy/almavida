'use client'

import React from "react"

import BoldButton from "@/components/bold"
import FileUploadLLM from "@/components/FileUploadLLM"

const Payment = () => {
  // If coming from checkout, params are ?bold-order-id=123456789&bold-tx-status=approved

  return <div className="w-screen h-screen flex flex-col justify-center items-center">
    <BoldButton>
      Comprar créditos
    </BoldButton>
    <FileUploadLLM />
  </div>
}

export default Payment

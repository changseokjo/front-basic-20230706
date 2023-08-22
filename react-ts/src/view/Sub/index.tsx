import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { useGlobalStore } from 'stores'

export default function Sub() {

     const { state1 } = useGlobalStore();

  return (
    <div style={{ height: '600px', backgroundColor: 'rgba(0, 255, 0, 0.5)' }}>
        {state1}
    </div>
  )
}

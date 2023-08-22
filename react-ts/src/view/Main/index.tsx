import React from 'react'
import Header from '../../layout/Header'
import Footer from 'layout/Footer';
import { useGlobalStore } from 'stores';

interface Props {
    setPage: React.Dispatch<React.SetStateAction<"sub" | "main">>
}

export default function Main({ setPage }: Props) {

    const { state1 } = useGlobalStore();

  return (
        <div style={{ height: '600px', backgroundColor: 'rgba(255, 0, 255, 0.5)' }}>
            {state1}
        </div>
  )
}

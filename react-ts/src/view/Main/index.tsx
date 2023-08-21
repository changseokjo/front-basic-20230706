import React from 'react'
import Header from '../../layout/Header'
import Footer from 'layout/Footer';

interface Props {
    setPage: React.Dispatch<React.SetStateAction<"sub" | "main">>
}

export default function Main({ setPage }: Props) {

    const onClickHandler = () => {
        setPage('sub');
    }

  return (
        <div style={{ height: '600px', backgroundColor: 'rgba(255, 0, 255, 0.5)' }}>Main</div>
  )
}

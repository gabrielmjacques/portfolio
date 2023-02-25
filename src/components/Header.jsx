import React from 'react'

import '../styles/components/header.sass'

export default function Header( props )
{
    return (
        <header>
            <button><p>Início</p></button>
            <button onClick={ () => props.scrollPage() }><p>Projetos</p></button>
        </header>
    )
}

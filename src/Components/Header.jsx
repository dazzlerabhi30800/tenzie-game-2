import React from 'react';
import './Main.css';
import Die from './Die'
import Button from './Button'

function Header() {
    return(
        <main>
            <h1 className="heading">Tenzies Game Definitive Edition</h1>
            <p className="description">
                This is the enhanced edition of previous tenzies game with power of unreal engine 5.
            </p>
            <div className="die--container">
                <Die />
                <Die />
                <Die />
                <Die />
                <Die />
                <Die />
                <Die />
                <Die />
                <Die />
                <Die />
            </div>
            <Button />
        </main>
    )
}

export default Header;
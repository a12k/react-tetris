import React from 'react'
import { Link } from 'react-router'

function Home(props) {
    return (
        <div>
            <h1>React Tetris</h1>
            <p className='lead'>Get started below:</p>
            <Link to='/tetris'>
                <button type='button' className='btn btn-lg btn-success'>Get Started</button>
            </Link>
            <p className='lead'></p>
            <Link to='/about'>
                <button type='button' className='btn btn-lg'>About</button>
            </Link>
        </div>
    )
}

export default Home;
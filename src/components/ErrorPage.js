import React from 'react'
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
      <h1>Uh oh!</h1>
      <p>That didn't work out, huh?</p><p> Try again from the <Link to='/'>HomePage</Link>.</p>
      <img src='https://media.giphy.com/media/3o7bub3n9T5vJU9V5e/giphy.gif' alt="404 page" />
    </div>
  )
}

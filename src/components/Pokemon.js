import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'

const Pokemon = ({pokemon}) => {
  return (
    <div className={`${pokemon.types[0].type.name}`}>
      <Card className={`${pokemon.types[0].type.name} my-3 p-3 rounded text-center shadow2 mb-5`} style={{border: 'none'}}>
        <Link to={`/pokemon/${pokemon.id}`}>
          <Card.Img style={{width: '8rem'}} src={pokemon.sprites.front_default} variant='top'/>
        </Link>
        <Card.Body className={`${pokemon.types[0].type.name}`}>
          <Link to={`/pokemon/${pokemon.id}`} className='link-name'>
            <Card.Title as='div'>
              <strong>
                #{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} 
              </strong>
              <div>
              Type : {pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}
              </div>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Pokemon
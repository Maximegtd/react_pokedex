import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card, Row, Col } from 'react-bootstrap'
import '../App.css'

//components
import Loader from '../components/Loader'
import { useParams } from 'react-router-dom'


const PokemonPage = () => {

  const id = useParams().id
  const [pokemonDetails, setPokemonDetails] = useState()
  const [loading, setLoading] = useState(true)

  const getPokemon = async () => {
    const details = await getPokemonData(id)
    setPokemonDetails(details.data)
    setLoading(false)
  }

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res
  }

  useEffect(() => {
    getPokemon(id)
  }, [])

  return (
    <div>
      {loading ? (
        <Loader/>
      ) : (
        <div className={`pokemonpageBG ${pokemonDetails.types[0].type.name}`}>
          <Row>
            <Col>
              <Card className='my-5 p-3 rounded shadow bg-white' style={{border: 'none'}} >
                <Card.Img className='img' style={{width: '17rem'}} src={pokemonDetails.sprites.front_default} variant='top'/>
              </Card>
            </Col>
            <Col>
              <Card className='my-5 p-5 rounded text-center shadow bg-white' style={{border: 'none'}}>
                <Card.Body>
                  <Card.Title>
                    <strong>#{pokemonDetails.id} {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</strong>
                  </Card.Title>
                  <Card.Text>
                    <Col>
                      {pokemonDetails.types.map(t => (
                        <Col key={t.type.name}>
                          <div className={`${t.type.name} rounded px-4 py-4`} style={{color: 'black'}}>
                            {t.type.name.toUpperCase()}
                          </div>
                        </Col>
                      ))}
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </div>
  )
}

export default PokemonPage

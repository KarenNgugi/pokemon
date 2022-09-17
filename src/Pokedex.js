import React, {Component} from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component { 
    render() {
        let results;
        if (this.props.isWinner) {
            results = <h2 className="Pokedex-winner">WINNING TEAM</h2>;
        } else {
            results = <h2 className="Pokedex-loser">LOSING TEAM</h2>;
        }
        return (
            <div className='Pokedex'>
                <div className='Pokedex-results'>
                   {results} 
                </div>
                <p className='Pokedex-exp'><b>Total EXP:</b> {this.props.exp}</p>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map(p =>
                        <Pokecard 
                        id={p.id} 
                        name={p.name} 
                        type={p.type} 
                        exp={p.base_experience} />)}
                </div>
            </div>
        )
    }
}

export default Pokedex;
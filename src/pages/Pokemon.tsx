import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Pokeballimg from '../assets/pokeball.png'
import Footer from '../component/Footer'
import styles from './pokemon.module.css'
import { PokemonDetail } from '../types/types'
import { fetchPokemon } from '../api/fetchPokemon'
import LoadingScreem from '../component/LoadingScreem'
import { waitFor } from '../utils/utils'

const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemon, setPokemon] = useState<PokemonDetail>()
    const { name } = useParams();
    const navegate = useNavigate();

    useEffect(() => {
        async function getPokemon() {
            setIsLoading(true)
            await waitFor(300)
            const fetchedPokemon = await fetchPokemon(name as string)
            setPokemon(fetchedPokemon)
            setIsLoading(false)
        }
        getPokemon()
    }, [name])

    if(isLoading || !pokemon) return <LoadingScreem />

    return (
        <>
            <button className={styles.pokeballbutton} onClick={() => navegate(-1)}>
                <img className={styles.pokeballImg} src={Pokeballimg} alt="pokeball" />
                Go back
            </button>
            <div className={styles.pokemon}>
                <main className={styles.pokemonInfo}>
                    <div className={styles.pokemonTitle}>
                        {pokemon?.name.toUpperCase()}
                    </div>
                    <div>Nr. {pokemon?.id}</div>
                    <div>
                        <img
                            className={styles.pokemonInfoImg}
                            src={pokemon?.imgSrc}
                            alt={pokemon?.name}
                            />
                    </div>
                    <div>HP: {pokemon?.hp}</div>
                    <div>Attack: {pokemon?.attack}</div>
                    <div>Defense: {pokemon?.defense}</div>
                </main>
            </div>
            <Footer />
        </>
    )
};

export default Pokemon;
import { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import styles from './pokemons.module.css'

import BulbasaurPic from "../assets/bulbasaur.gif"
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types";
import LoadingScreem from "../component/LoadingScreem";
import { waitFor } from "../utils/utils";

const Pokemons = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("")
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            setIsLoading(true)
            await waitFor(1000)
            const allPokemons = await fetchPokemons();
            setPokemons(allPokemons);
            setIsLoading(false)
        }
        fetchAllPokemons()
    }, [])

    if(isLoading || !pokemons) {
        return < LoadingScreem />
    }

    return (
        <>
            <Header query={query} setQuery={setQuery} />
            <main>
                <nav className={styles.nav}>
                    {pokemons?.slice(0, 649).map((pokemon) => (
                        <Link
                            key={pokemon.id}
                            className={styles.listeItem}
                            to={`/pokemons/${pokemon.name.toLocaleLowerCase()}`}
                        >
                            <img
                                className={styles.listeItemIcon}
                                src={pokemon.imgSrc}
                                alt={pokemon.name} />
                            <div className={styles.listeItemText}>
                                <span>{pokemon.name}</span>
                                <span>{pokemon.id}</span>
                            </div>
                        </Link>
                    ))}
                </nav>
            </main>
            <Footer />
        </>
    );
};

export default Pokemons;
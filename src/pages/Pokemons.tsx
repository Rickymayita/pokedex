import { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import styles from './pokemons.module.css'

import BulbasaurPic from "../assets/bulbasaur.gif"

const Pokemons = () => {
    const [query, setQuery] = useState("")
    return (
        <>
            <Header query={query} setQuery={setQuery} />
            <main>
                <Link className={styles.listeItem} to="/">
                    <img className={styles.listeItemIcon} src={BulbasaurPic} alt="bulbasaur" />
                    <div className={styles.listeItemText}>
                        <span>Bulbasaur</span>
                        <span>001</span>
                    </div>
                </Link>
            </main>
            <Footer />
        </>
    );
};

export default Pokemons;
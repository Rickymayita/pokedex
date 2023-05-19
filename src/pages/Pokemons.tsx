import { useState } from "react";
import Header from "../component/Header";

const Pokemons = () => {
    const [query, setQuery] = useState("")
    return (
        <>
            <Header query={query} setQuery={setQuery} />
           <main>
            <h1>POKEMONS</h1>
           </main>
           <footer>
            footer
           </footer>
        </>
    );
};

export default Pokemons;
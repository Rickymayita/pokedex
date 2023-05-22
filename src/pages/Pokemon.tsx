import { useNavigate, useParams } from 'react-router-dom'
import Pokeballimg from '../assets/pokeball.png'
import Bulbasour from '../assets/bulbasaur.gif'
import Footer from '../component/Footer';
import styles from './pokemon.module.css'

const Pokemon = () => {
    const { name } = useParams();
    const navegate = useNavigate();

    return (
    <>
        <button className={styles.pokeballbutton} onClick={() => navegate(-1)}>
           <img className={styles.pokeballImg} src={Pokeballimg} alt="pokeball" /> Go back
        </button>
        <div className={styles.pokemon}>
            <main className={styles.pokemonInfo}>
                <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
                <div>Nr. 001</div>
                <div>
                    <img className={styles.pokemonInfoImg} src={Bulbasour} alt="Bulbasour" />
                </div>
                <div>HP: 000</div>
                <div>Attack: 000</div>
                <div>Defense: 000</div>
            </main>
        </div>
        <Footer />
    </>
    )
};

export default Pokemon;
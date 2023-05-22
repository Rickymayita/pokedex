import Pokedex from '../assets/pokedex.png'
import styles from './loadingScreem.module.css'

const LoadingScreem = () => {
    return (
        <div className={styles.loadingScreem}>
            <img className={styles.loadingScreemIcon} src={Pokedex} alt="Pokedex" />
        </div>
    );
};

export default LoadingScreem;
import styles from './loadingScreem.module.css'

const LoadingScreem = () => {
    return (
        <div className={styles.loadingScreem}>
            <div className={styles.spinnerContainer}>
                <div className={styles.container}>
                    <div className={styles.mainball}>
                        <div className={styles.pokebutton}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreem;
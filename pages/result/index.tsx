import styles from '../styles/Home.module.scss';
import Header from '../../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className="ly_main">
        <section className="ly_result">
          <div className="ly_resultInner">
            <div className="bl_resultBox">
              <h2></h2>
              <p></p>
            </div>
            <button></button>
          </div>
          <div className=""></div>
        </section>
      </main>
    </div>
  );
}

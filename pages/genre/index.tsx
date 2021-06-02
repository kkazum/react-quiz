import Header from '../../components/Header';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className="ly_main">
        <section className="ly_genre">
          <div className="ly_genreInner">
            <h2></h2>
            <ul className="bl_genreList">
              <li className="bl_genreListItem">
                <p></p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

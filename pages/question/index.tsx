import Header from '../../components/Header';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className="ly_main">
        <section className="ly_question">
          <div className="ly_questionInner">
            <div className="bl_selectBox">
              <h2></h2>
              <ul className="bl_selectList">
                <li className="bl_selectListItem"></li>
              </ul>
              <div className="bl_progressBar"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import Header from '../../components/Header';
import Link from 'next/link';

export default function Genre() {
  return (
    <div>
      <Header />
      <main className="ly_main">
        <section className="ly_genre">
          <div className="ly_genreInner">
            <h2>ジャンルを選択してください。</h2>
            <ul className="bl_genreList">
              <li className="bl_genreListItem">
                <Link href="/question/1">
                  <a>
                    <p>ジャンル</p>
                  </a>
                </Link>
              </li>
              <li className="bl_genreListItem">
                <Link href="/question/2">
                  <a>
                    <p>ジャンル</p>
                  </a>
                </Link>
              </li>
              <li className="bl_genreListItem">
                <Link href="/question/3">
                  <a>
                    <p>ジャンル</p>
                  </a>
                </Link>
              </li>
              <li className="bl_genreListItem">
                <Link href="/question/4">
                  <a>
                    <p>ジャンル</p>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

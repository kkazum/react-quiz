import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LinearProgress, {
  LinearProgressProps,
} from '@material-ui/core/LinearProgress';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  })
)(LinearProgress);

function LinearProgressWithOutLabel(
  props: LinearProgressProps & { value: number }
) {
  return <BorderLinearProgress variant="determinate" {...props} />;
}

export default function Question() {
  const router = useRouter();
  const { gid } = router.query;
  const [progress, setProgress] = useState(100);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress == 0 ? 100 : prevProgress - 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    progress == 0 ? setIsTimeUp(true) : setIsTimeUp(false);
  }, [progress]);

  return (
    <div>
      <Header />
      <main className="ly_main">
        <section className="ly_question">
          <div className="ly_questionInner">
            <div className="bl_selectBox">
              <h2>
                <span>Q.</span>ジャンル{gid}の問題です。
              </h2>
              <ul className="bl_selectList">
                <li className="bl_selectListItem">
                  <p>
                    <span>{gid}.</span>選択肢
                  </p>
                </li>
                <li className="bl_selectListItem">
                  <p>
                    <span>{gid}.</span>選択肢
                  </p>
                </li>
                <li className="bl_selectListItem">
                  <p>
                    <span>{gid}.</span>選択肢
                  </p>
                </li>
                <li className="bl_selectListItem">
                  <p>
                    <span>{gid}.</span>選択肢
                  </p>
                </li>
              </ul>
              <div className="bl_clock">
                {progress == 0 ? (
                  <Image
                    src="/clock.png"
                    alt="Picture of the clock"
                    width={100}
                    height={85}
                  />
                ) : null}
              </div>
              <div className="bl_progressBar">
                <LinearProgressWithOutLabel value={progress} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

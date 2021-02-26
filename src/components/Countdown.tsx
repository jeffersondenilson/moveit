import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
  const { startNewChallenge, activeChallenge } = useContext(ChallengesContext);

  const initialCycleTime = 0.1;

  const [time, setTime] = useState(initialCycleTime * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // insere '0' no começo se só tiver um digito
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountdown = () => setIsActive(true);

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(initialCycleTime * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => setTime(time - 1), 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  useEffect(() => {
    if (activeChallenge === null) {
      setHasFinished(false);
      resetCountdown();
    }
  }, [activeChallenge]);

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.countdownNumber}>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>

      <span className={styles.countdownSeparator}>:</span>

      <div className={styles.countdownNumber}>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>

      { hasFinished ?
        (
          <button
            disabled
            className={styles.countdownButton}
          >
            Ciclo encerrado <img src="icons/check.svg" alt="check" />
          </button>
        ) : (
          <>
            { isActive ?
              (
                <button
                  type="button"
                  className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                  onClick={resetCountdown}
                >
                  Abandonar ciclo <img src="icons/close.svg" alt="close" />
                </button>
              ) : (
                <button
                  type="button"
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  Iniciar um ciclo <img src="icons/play.svg" alt="play" />
                </button>
              )
            }
          </>
        )
      }
    </div>
  );
}

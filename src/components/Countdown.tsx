import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";

export default function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // insere '0' no começo se só tiver um digito
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountdown = () => setActive(true);

  useEffect(() => {
    if(active && time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    }
  }, [active, time])

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

      <button type="button" className={styles.countdownButton} onClick={startCountdown}>
        Iniciar um ciclo
      </button>
    </div>
  );
}

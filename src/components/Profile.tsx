import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jeffersondenilson.png" alt="avatar" />

      <div className={styles.profileInfo}>
        <strong>Jefferson Denilson</strong>
        <p>
          <img src="icons/level.svg" alt="level icon" />
          Level { level }
        </p>
      </div>
    </div>
  );
}

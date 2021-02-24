import styles from "../styles/components/Profile.module.css";

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jeffersondenilson.png" alt="avatar" />

      <div className={styles.profileInfo}>
        <strong>Jefferson Denilson</strong>
        <p>
          <img src="icons/level.svg" alt="level icon" />
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;

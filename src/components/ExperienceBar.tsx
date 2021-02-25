import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from '../styles/components/ExperienceBar.module.css';

function ExperienceBar(){
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

	return (
		<header className={styles.experienceBar}>
			<span>0 px</span>
			<div className={styles.experience}>
				<div className={styles.experienceFill} style={{ width: `${percentToNextLevel}%` }} />

				<span className={styles.experienceText} style={{ left: `${percentToNextLevel}%` }}>
					{ currentExperience } xp
				</span>
			</div>
			<span>{ experienceToNextLevel } px</span>
		</header>
	);
}

export default ExperienceBar;

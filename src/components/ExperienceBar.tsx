import styles from '../styles/components/ExperienceBar.module.css';

function ExperienceBar(){
	return (
		<header className={styles.experienceBar}>
			<span>0 px</span>
			<div className={styles.experience}>
				<div className={styles.experienceFill} style={{ width: '50%' }} />

				<span className={styles.experienceText} style={{ left: '50%' }}>
					300 xp
				</span>
			</div>
			<span>600 px</span>
		</header>
	);
}

export default ExperienceBar;

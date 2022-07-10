import { useState } from 'react';
import styles from './About.module.scss';
import Life from '../../view/Life/Life';
import clsx from 'clsx';

const About = () => {

	const [lifeSection, setLifeSection] = useState('professional');


	return (
		<div className={styles.about}>
			<div className={styles.header}>
				<h3>Please pick a life section</h3>
			</div>
			<div className={styles.lifeSelector}>
				<div
					onClick={() => setLifeSection('professional')}
					className={clsx(styles.professional, lifeSection === 'professional' ? styles.active : undefined)}
				>
					<p>Professional</p>
				</div>
				<div
					onClick={() => setLifeSection('personal')} 
					className={clsx(styles.personal, lifeSection === 'personal' ? styles.active : undefined)}
				>
					<p>Personal</p>
				</div>
			</div>
			{lifeSection === 'professional' ? <Life lifeSection={'professional'} /> : <Life lifeSection={'personal'} />}
		</div>
	)
}

export default About;
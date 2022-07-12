import Project from '../../view/Project/Project';
import styles from './Projects.module.scss';

const Projects = () => {

	const recentProject = [
		{id: 'Pizzeria',
		shortDescription: 'Side for the restaurant with orders online and the table booking. Comunication with API',
		description: 'sakdasjdasldjasldadlsakjdaslkdjaslkdasdljasklaksjfgludjhfgh dfh sdifuhd fie eihsdfuafsdjasldi huaufd hadlfh akduhsakduah adkuash dakudhakufsdvfsdkhf kusfh adkudhasukdf hkuds fhdskuf hsukf',
		img:'pizzeria'},
		{id: 'Waiters App',
		shortDescription: 'Web Application for waiters - it allows to check the orders, bills and overall status of table',
		img:'waiters'},
		{id: 'Cos',
		shortDescription: 'Web Application for waiters - it allows to check the orders, bills and overall status of table',
		img:'waiters'},
	]

	return(
		<div className={styles.projects}>
			{recentProject.map(
				x => {
					return(
						<Project key={x.id} projectDetails={x} />
					)
				}
			)}
		</div>
	)
}

export default Projects;
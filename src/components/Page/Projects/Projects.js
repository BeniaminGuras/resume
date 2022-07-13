import Project from '../../view/Project/Project';
import styles from './Projects.module.scss';
import { recentProject } from '../../../db/informations';

const Projects = () => {

	const myProjects = recentProject;

	return(
		<div className={styles.projects}>
			{myProjects.map(
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
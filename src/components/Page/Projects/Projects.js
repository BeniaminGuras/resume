import Project from '../../view/Project/Project';
import styles from './Projects.module.scss';

const Projects = () => {

	const recentProject = [
		{id: 'Pizzeria',
		shortDescription: 'Side for the restaurant with orders online and booking tables',
		description: 'Full responsive website for restaurant, it has the online orders, tabels booking, all with API communication. It has been developed in Vanilla JS - in OOP methodology.',
		gitHub: 'https://github.com/BeniaminGuras/Pizzeria',
		img:'pizzeria'},
		{id: 'Waiters App',
		shortDescription: 'Web Application for waiters',
		description: 'Website Application that allows waiters to manage the table status. It has been written with React, React Router, React Bootstrap, Redux. It\'s dynamically communicating the changes with API.',
		gitHub: 'https://github.com/BeniaminGuras/waiters_app',
		img:'waiters'},
		{id: 'Form Project',
		shortDescription: 'Demo of conditional form build with React',
		description: 'Demo of form that generates the question conditianlly, after submiting it checks the correctness of filled inputs - if it\'s ok it starts communication with API. Demo is created in React.',
		gitHub: 'https://github.com/BeniaminGuras/form_project',
		img:'form'},
		{id: 'To do list',
		shortDescription: 'Application to create dynamic to do list',
		description: 'On the website we can dynamically generate categories and a lists of to do tasks with customizable icons. It has been created with React, React Router, Redux.',
		gitHub: 'https://github.com/BeniaminGuras/To-do-list',
		img:'to_do_list'},
		{id: 'Autocompliter',
		shortDescription: 'Component to autocomplete text and others',
		description: 'Component accepts the list of elements that will be searched for a writen phrase. After finding a match it allows the client to select and automatically add the word or number as a tag. It has been created with React.',
		gitHub: 'https://github.com/BeniaminGuras/Autocompliter-react',
		img:'autocompliter'},
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
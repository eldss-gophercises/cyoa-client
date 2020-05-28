import { h } from 'preact';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1><a href="https://courses.calhoun.io/" target="_">
			Gophercises - Choose Your Own Adventure
		</a></h1>
	</header >
);

export default Header;

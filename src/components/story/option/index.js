import { Component } from 'preact';
import style from './style.css';

export default class Option extends Component {
    render(props) {
        return (
            <div class={style.option}>
                <button onClick={props.getArcHandler}>
                    Go!
                </button>
                <p>{props.text}</p>
            </div>
        );
    }
}
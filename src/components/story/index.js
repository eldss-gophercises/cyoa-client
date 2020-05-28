import { Component } from 'preact';

import style from './style.css';
import Option from "./option";

export default class Story extends Component {
    render() {
        return (
            <section class={style.story}>
                <h2 class={style.title}>Lorem Ipsem</h2>
                <div class={style.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid blanditiis error libero totam exercitationem, at quasi harum natus facere. Reiciendis commodi atque at itaque, id deleniti architecto officiis quis!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere tempore odio nemo voluptatum, eaque aspernatur atque. Modi, nisi! Maiores quibusdam sint magni neque ad distinctio voluptate minus soluta enim!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iure id architecto ea? Dolor laboriosam ipsam officia praesentium natus a minima quidem, tempore maiores. Maxime ut dolores optio debitis commodi.</p>
                </div>
                <div class={style.options}>
                    <Option
                        getArcHandler={console.log}
                        text="This is the option text"
                    />
                    <Option
                        getArcHandler={console.log}
                        text="This is the option text"
                    />
                </div>
            </section>
        );
    }
}
import { Component } from 'preact';

import style from './style.css';
import Option from "./option";

export default class Story extends Component {

    state = {
        title: '',
        story: [],
        options: [],
    };

    componentDidMount() {
        // Get intro story for first render
        this.fetchStoryArc("intro")
    }

    /**
     * Gets a story arc from the backend service. On error, prints the
     * err to the console.
     * @param {string} arc The arc, or chapter, of the story to fetch.
     */
    fetchStoryArc = arc => {
        const apiPath = 'http://localhost:8085/arc/';

        fetch(apiPath + arc)
            .then(data => {
                return data.json();
            })
            .then(jsn => {
                // Ensure all values are defined
                const title = jsn.title ? jsn.title : '';
                const story = jsn.story ? jsn.story : [];
                const options = jsn.options ? jsn.options : [];
                this.setState({ title, story, options });
            })
            .catch(err => console.error(err));
    }

    render() {
        const title = this.state.title;
        const story = this.state.story.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
        });
        const options = this.state.options.map((option, index) => {
            return (
                <Option
                    key={index}
                    getArcHandler={() => this.fetchStoryArc(option.arc)}
                    text={option.text}
                />
            );
        });

        return (
            <section class={style.story}>

                <h2 class={style.title}>
                    {title}
                </h2>

                <div class={style.content}>
                    {story}
                </div>

                <div class={style.options}>
                    {options}
                </div>

            </section>
        );
    }
}
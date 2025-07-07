import './AboutMe.css'
import Hero from './Heroprops'

const AboutMe = () => {
    return (
        <div className="">
            <h1>About Me</h1>
            <Hero />
            <p>Hello! I am Qingyan(Monica) Lu!</p>
            <p>I am currently pursuing a dual major in Computer Systems and Electrical Engineering at Rensselaer Polytechnic Institute. My technical interests span data science and embedded systems.</p>
            <p>I am participating in a research introducing myself to RNNs, LSTMs, GRUs, and further working with attention frameworks and transformer models with recommender systems.</p>
        </div>
    );
}

export default AboutMe;
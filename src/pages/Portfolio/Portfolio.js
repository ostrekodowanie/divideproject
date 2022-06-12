import './sass/portfolio.css';
import ukrck from '../../assets/Portfolio/projects/ukrck.png';
import business from '../../assets/Portfolio/projects/business.png';
import view from '../../assets/Portfolio/projects/view.svg';
import like from '../../assets/Portfolio/projects/like.svg';

export default function Portfolio() {
    return (
        <>
            <Background />
            <Projects />
        </>
    )
}

function Background() {
    return (
        <div className="bg-wrapper">
            <h1>PORTFOLIO</h1>
        </div>
    )
}

const projects = [
    {
        id: 1,
        image: ukrck,
        link: 'ukrainskiecentrumkultury',
        numOfViews: 20,
        numOfLikes: 2
    },
    {
        id: 2,
        image: business,
        link: 'businessportfoliosite',
        numOfViews: 39,
        numOfLikes: 11
    }
]

function Projects() {
    return (
        <section className="section projects">
            <div className="projects-wrapper">
                {projects.map(project => <Project image={project.image} link={project.link} key={project.id} views={project.numOfViews} likes={project.numOfLikes} />)}
            </div>
        </section>
    )
}

function Project(props) {
    return (
        <div className="project">
            <img src={props.image} alt='' />
            <div className="link">
                <span>{props.link}.</span>
                <span>herokuapp.com</span>
            </div>
            <div className="stats">
                <img src={view} alt="" />
                <span>{props.views}</span>
                <div className="dot"></div>
                <img src={like} alt="" />
                <span>{props.likes}</span>
            </div>
        </div>
    )
}
import netflixCloneReact from './assets/projects/netflix-clone-react.png'
import calculator from './assets/projects/calculator.png'
import IHateSquares from './assets/projects/i-hate-squares.png'
import PizzaNetRJ from './assets/projects/pizza.png'

const projects = [
    {
        name: 'Netflix Homepage Clone',
        img: netflixCloneReact,
        techs: [ 'React', 'JSX', 'Material Icons', 'API' ],
        desc: 'Clone da página principal da Netflix criado em React, utilizando a API TheMovieDataBase',
        github: 'https://github.com/gabrielmjacques/netflix-clone-react',
        demo: 'https://netflix-clone-react-vert-zeta.vercel.app/'
    },

    {
        name: 'Calculadora',
        img: calculator,
        techs: [ 'React', 'JSX ' ],
        desc: 'Calculadora simples com design minimalista criada com a biblioteca React',
        github: 'https://github.com/gabrielmjacques/calculator-react',
        demo: 'https://calculator-react-umber.vercel.app/'
    },

    {
        name: 'I Hate Squares',
        img: IHateSquares,
        techs: [ 'C#', 'Unity Engine' ],
        desc: `Protótipo de jogo shoot'em up no estilo pixel art, desenvolvido na Unity Engine`,
        github: '',
        demo: 'https://biroplayer.itch.io/i-hate-squares'
    },

    {
        name: 'PizzaNetRJ',
        img: PizzaNetRJ,
        techs: [ 'JavaScript', 'HTML', 'CSS' ],
        desc: 'Protótipo de um website de pizzaria criado para o projeto final do primeiro semestre da faculdade de Análise e Desenvolvimento de Sistemas',
        github: 'https://github.com/gabrielmjacques/pizzanetrj',
        demo: 'https://gabrielmjacques.github.io/pizzanetrj'
    },
]

export default projects
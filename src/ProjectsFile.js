import netflixCloneReact from './assets/projects/netflix-clone-react.png'
import calculator from './assets/projects/calculator.png'
import IHateSquares from './assets/projects/i-hate-squares.png'
import PizzaNetRJ from './assets/projects/pizza.png'

const projects = [
    {
        name: 'Netflix Homepage Clone',
        img: netflixCloneReact,
        techs: [ 'React', 'JSX', 'Material Icons', 'API' ],
        desc: 'Clone da Netflix desenvolvido com a biblioteca React e consumindo a API do site themoviedb.org para fornecer informações sobre filmes e programas de TV para os usuários.',
        github: 'https://github.com/gabrielmjacques/netflix-clone-react',
        demo: 'https://netflix-clone-react-vert-zeta.vercel.app/'
    },

    {
        name: 'Calculadora',
        img: calculator,
        techs: [ 'React', 'JSX ' ],
        desc: 'Calculadora online desenvolvida utilizando a biblioteca React para construção de interfaces de usuário. Ao acessar o site, os usuários podem realizar operações matemáticas básicas, como adição, subtração, multiplicação e divisão.',
        github: 'https://github.com/gabrielmjacques/calculator-react',
        demo: 'https://calculator-react-umber.vercel.app/'
    },

    {
        name: 'I Hate Squares',
        img: IHateSquares,
        techs: [ 'C#', 'Unity Engine' ],
        desc: `"I Hate Squares" é um pequeno jogo de arcade desenvolvido por mim que desafia os jogadores a desviarem de quadrados enquanto avançam por um cenário. O jogo é projetado com gráficos simples e recursos de leaderboard para oferecer uma experiência divertida e casual para jogadores de todas as idades.`,
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
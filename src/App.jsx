import './App.css';
import Button from "./components/Button/Button.jsx";
import H1 from "./components/H1/H1.jsx";
import P from "./components/P/P.jsx";

function App() {

    return (
        <>
            <H1>Поиск</H1>
            <Button>Искать</Button>
            <P>
                Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
            </P>
            <P type="large">
                After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of
                the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order
                to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences
                may be in store.
            </P>
        </>
    );
}

export default App;

import './App.css';
import Button from "./components/Button/Button.jsx";
import H1 from "./components/H1/H1.jsx";
import P from "./components/P/P.jsx";
import NavBar from "./layouts/NavBar/NavBar.jsx";
import Input from "./components/Input/Input.jsx";
import Form from  "./components/Form/Form.jsx";

function App() {

    const clickHandler = (event) => {
        console.log(event);
    };

    return (
        <>
            <NavBar />
            <H1>Поиск</H1>
            <P>
                Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
            </P>
            <Form type="search">
                <Input type="search" label={{hidden: true, text: "Поиск"}} placeholder="Введите название" icon="/icon-search.svg" />
                <Button onClick={clickHandler}>Искать</Button>
            </Form>
        </>
    );
}

export default App;

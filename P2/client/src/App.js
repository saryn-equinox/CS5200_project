// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import CustomerList from "./components/customer/customer-list";
import CustomerEditor from './components/customer/customer-editor';
import TableList from "./components/table/table-list";
import TableEditor from "./components/table/table-editor";
import RecipeList from "./components/recipe/recipe-list";
import RecipeEditor from "./components/recipe/recipe-editor";

function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>      */}

            <BrowserRouter>
                <Route exact path="/customer/:id"
                       component={CustomerEditor} />
                <Route exact path={["/customer/", "/"]}
                       component={CustomerList} />

                <Route exact path="/table/:id"
                       component={TableEditor} />
                <Route exact path={["/table/", "/"]}
                       component={TableList} />

                <Route exact path="/recipe/:id"
                       component={RecipeEditor} />
                <Route exact path={["/recipe/", "/"]}
                       component={RecipeList} />
            </BrowserRouter>
        </div>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, IndexRoute,} from 'react-router';
import { HashRouter } from 'react-router-dom'
import './index.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import * as serviceWorker from './serviceWorker';
import Problem from "./components/apply/problem/Problem";
import Blockchain from "./components/blockchains/blockchain/Blockchain";
import Directoryblock from "./components/blockchains/directoryblock/Directoryblock";
import Depositdetails from "./components/blockchains/depositdetails/Depositdetails";
import Progress from "./components/apply/progress/Progress";
import Damage from "./components/apply/damage/Damage";
import Apply from "./components/apply/apply/Apply";

ReactDOM.render((
    <HashRouter>
        <Route path="/" exact component={Login} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Home" component={Home} />
        <Route path="/Problem" component={Problem} />
        <Route path="/BlockChain" component={Blockchain}/>
        <Route path="/Directoryblock" component={Directoryblock}/>
        <Route path="/Depositdetails" component={Depositdetails}/>
        <Route path="/Progress" component={Progress}/>
        <Route path="/Damage" component={Damage}/>
        <Route path="/Apply" component={Apply}/>
    </HashRouter>
    ),document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

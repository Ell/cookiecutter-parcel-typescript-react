import './scss/global.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.FunctionalComponent = () => <h1>{{cookiecutter.repo_name}}</h1>;

ReactDOM.render(<App />, document.getElementById("root"));


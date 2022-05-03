import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from './barChart';

const App = () => {
    return(
        <div>
            <BarChart />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
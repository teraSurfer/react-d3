import React, {Fragment} from 'react';
import PieChart from './components/piechart/PieChart';
import Search from './components/search/Search';
import BarChart from './components/barchart/BarChart';
// import styles from './assets/scss/app.module.scss';

function App() {
  
  document.title = 'React D3';

  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <h1 className="title">React D3 Charts</h1>
          <p className="subtitle">
            A kitchen sink for react d3 charts.
          </p>
          <Search></Search>
        </div>
      </section>
      <section id="charts" className="hero is-primary">
        <PieChart></PieChart>
      </section>
      <section id="charts" className="hero is-dark">
        <BarChart></BarChart>
      </section>
    </Fragment>
  );
}

export default App;

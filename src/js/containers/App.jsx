import React from 'react';
import Header from '../components/Header.jsx';
import MainSection from '../components/MainSection.jsx';
import MyChart from '../components/MyChart.jsx';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainSection />
        <MyChart />
      </div>
    );
  }
}

export default App;

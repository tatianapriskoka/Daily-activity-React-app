import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My daily activities</h1>

        <Chart
          chartType="PieChart"
          data={[
            ["Task", "Hours per Day"],
            ["Eat", 3],
            ["Study", 6],
            ["Dance", 2],
            ["Sleep", 8],
            ["Homework", 5]
          ]}
          width="100%"
          height="400px"
          legendToggle
        />
      </header>
    </div>
  );
}

export default App;

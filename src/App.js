import './App.css';
import RealTimeAreaChart from "./chart/RealtimeChart";
import {DataProvider} from "./context/ChartDataContext";
import {DataProcessingService} from "./service/DataProcessingService";

function App() {
  return (
      <DataProvider>
        <DataProcessingService/>
        <RealTimeAreaChart/>
      </DataProvider>
  );
}

export default App;

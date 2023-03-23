// import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import ProjectInformationIntakeForm from './pages/ProjectInformationIntakeForm';
import Workflow from './pages/Workflow';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/form" element={<ProjectInformationIntakeForm />} />
            <Route path="/workflow" element={<Workflow />} />
            <Route path="/" element={<ProjectInformationIntakeForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

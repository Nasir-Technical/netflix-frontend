import Body from "./components/Body";
import { Toaster } from 'react-hot-toast'; 
import MovieDialog from "./components/MovieDialog";
import './index.css';
 
function App() {
  return (
    <div>
       <Body/>
       <Toaster/>  
       <MovieDialog/>
    </div>
  );
}

export default App;
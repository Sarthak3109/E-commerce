
import Left from './components/Left';
import Right from './components/Right';
import Navbar from './components/Navbar';
import FRONT_PAGE from './components/FRONT_PAGE';
import { BrowserRouter , Router,Route, Routes} from 'react-router-dom'; 
import './App.css';

function App() {

  return (
   <>
    <Navbar />
   
          
                <Routes>
                  <Route path = '/' element={<FRONT_PAGE/>}   />
                  <Route path = '/order' element={

                    <div className='flex flex-row bg-gradient-to-r from-cyan-500 to-blue-500 min-h-[90vh] main'>
                                        
                    <Left className="flex-2"/>
                    <Right className='flex-1'/>
                    </div>
                  }   />
               
              </Routes>
      
     
     
   </>
  )
}

export default App;

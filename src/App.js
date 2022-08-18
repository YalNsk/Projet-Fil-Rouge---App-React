import './App.css';
import Header from './containers/header/header'; 
import NavBar from './containers/navbar/navbar';
import { useState } from 'react';

function App() {

  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <>        
    
        <Header onOpenMenu={ () => setMenuVisible(true)} />
        <NavBar isVisible={menuVisible}
        onCloseMenu={()=> setMenuVisible(false)} />
      <main className="App">



      </main>
    </>
  );
}

export default App;

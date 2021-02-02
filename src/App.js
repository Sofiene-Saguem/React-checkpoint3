import logo from './logo.svg';
import './App.css';
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName"
import ProfilPhoto from './Component/Profile/ProfilPhoto';


function App() {
  return (
    <div className="container"
    >
      
        <ProfilPhoto/>
        <div className="background-go">
        <div className="Position-item">
        <h5 style={{color:"#ffffff"}}> Name : </h5>
        <FullName/>
        </div>
        
        <div className="Position-item">
        <h5 style={{color:"#ffffff"}}> Address : </h5>
        <Address/>
        </div>
        </div>
        
        
      
      
      

    </div>
  );
}

export default App;

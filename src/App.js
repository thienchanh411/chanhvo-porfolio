import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import FabIconsBottom from './components/FabIconsBottom';
import FabIconsLeftConner from './components/FabIconsLeft';
import Footer from './components/Footer';
import GeneralInfomation from './components/GeneralInfomation';
import ListProjects from './components/ListProject';

import NavigationBar from './components/NavBar';

function App() {
  return (
    <div className="App" >
      <NavigationBar/>
      {/* <div className="row justify-content-center align-items-center" 
      style={{ minHeight: "90vh", background: "#F8F8F8" }}>
        <div className="col-9 align-items-center"> */}
          <FabIconsLeftConner />
          <GeneralInfomation />
          <AboutMe />
          <ListProjects />
          <ContactMe/>
          <FabIconsBottom/>
          <Footer/>
        {/* </div>
      </div> */}

    </div>
  );
}

export default App;

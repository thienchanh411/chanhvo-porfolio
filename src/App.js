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
          <FabIconsLeftConner />
          <GeneralInfomation />
          <AboutMe />
          <ListProjects />
          <ContactMe/>
          <FabIconsBottom/>
          <Footer/>

    </div>
  );
}

export default App;

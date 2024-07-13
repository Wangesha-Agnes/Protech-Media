import Footer from './Footer';
import Podcast from './Podcast';
import Video from './Videos';
import './App.css';
import Navbar from './Navbar';
import Page from './Landing';
import Portfolio from './Portfolio'
import Summary from './Summary'
function App() {
  return (
    <div>
      <Navbar/>
      <Page/>
      <Podcast/>
      <Video/>
      <Summary/>
      <Portfolio/>
      <Footer/>   
    </div>
  );
}
export default App;


import {Link} from 'react'
import logo from './assets/logo.svg'
import Header from './components/Header';
import StudyPost from './components/StudyPost';
function App() {
  return (
    <>
    <div className="App">
        <Header/>
        <StudyPost/>
        <StudyPost/>
        <StudyPost/>

    </div></>
  );
}

export default App;

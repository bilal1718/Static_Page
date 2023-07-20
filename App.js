import React from 'react';
import Header from './react/Components/header';
import MainContent from './react/Components/mainContent';
import './react/App.css';

export default function App() {
    const [darkMode,setDarkMode]=React.useState(true)
    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }
    return (
        <div className='container'>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}  />
            <MainContent darkMode={darkMode} />
        </div>
    )
}



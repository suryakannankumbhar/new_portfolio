import { useEffect } from 'react'
import styles from './App.module.css'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target.closest('a, button, div[class*="emailWrapper"], div[class*="contactButton"]');
      
      if (target) {
        target.classList.add('flash-green');
        
    
        setTimeout(() => {
          target.classList.remove('flash-green');
        }, 1000);
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
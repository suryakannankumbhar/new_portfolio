import { FaGithub } from 'react-icons/fa'
import styles from './Sidebar.module.css'

export default function Sidebar() {

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetId = href.substring(1);
    
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      const paddingOffset = 32; 

      window.scrollTo({
        top: offsetPosition - paddingOffset, 
        behavior: 'smooth'
      });
    }
  }

  return (
    <aside className={styles.sidebar}>
      <div>
        
        <div className={styles.bio}>
          <h1>Surya</h1>
          <p>Software Developer</p>
          <p className={styles.location}>India</p>
        </div>

        
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#experience" onClick={handleScroll}>
                * Experience & Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleScroll}>
                * Contact
              </a>
            </li>
            <li>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                * View Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      
      <div className={styles.socials}>
        <a 
          href="https://github.com/suryakannankumbhar" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
          suryakannankumbhar
        </a>
      </div>
    </aside>
  )
}
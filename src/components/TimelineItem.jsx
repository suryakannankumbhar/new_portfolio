import styles from './TimelineItem.module.css'
import { FaGithub, FaReact, FaNodeJs } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { SiTypescript, SiFirebase, SiJavascript, SiHtml5, SiCss3, SiPython } from 'react-icons/si'


const getTechIcon = (techName) => {
  const normalizedTech = techName.toLowerCase();
  
  if (normalizedTech.includes('react')) return <FaReact />;
  if (normalizedTech.includes('typescript')) return <SiTypescript />;
  if (normalizedTech.includes('firebase') || normalizedTech.includes('firestore')) return <SiFirebase />;
  if (normalizedTech.includes('node')) return <FaNodeJs />;
  if (normalizedTech.includes('javascript') || normalizedTech.includes('vanilla js')) return <SiJavascript />;
  if (normalizedTech.includes('html')) return <SiHtml5 />;
  if (normalizedTech.includes('css')) return <SiCss3 />;
  if (normalizedTech.includes('python') || normalizedTech.includes('pygame')) return <SiPython />;
  
  return null;
}

export default function TimelineItem({ date, title, description, image, tech, links }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.timelineDot}></div>
      <p className={styles.date}>{date}</p>
      <h3 className={styles.title}>{title}</h3>
      
      {image && (
        <img 
          src={image} 
          alt={title} 
          className={styles.image}
        />
      )}
      
      <p className={styles.description}>{description}</p>

      
      <div className={styles.linksContainer}>
        {links?.live && (
          <a 
            href={links.live} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.linkButton}
          >
            <FiExternalLink />
            Visit Website
          </a>
        )}
        {links?.repo && (
          <a 
            href={links.repo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.linkButton}
          >
            <FaGithub />
            Source Code
          </a>
        )}
      </div>

      
      <div className={styles.techContainer}>
        {tech?.map((techName) => (
          <span key={techName} className={styles.techPill}>
            {getTechIcon(techName)}
            {techName}
          </span>
        ))}
      </div>
    </div>
  )
}
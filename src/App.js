import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#contact">Contact Info</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="App-header">
        <h1>William Susi's Portfolio</h1>
      </header>

      {/* Contact Info */}
      <section id="contact" className="section">
        <h2>Contact Info</h2>
        <p>Email: willsusi14@gmail.com</p>
        <p>Phone: (978) 549-6089</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/will-susi" target="_blank" rel="noreferrer">linkedin.com/in/will-susi</a></p>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2>Education</h2>
        <p><strong>B.S. in Computer Science, University of Massachusetts Lowell</strong></p>
        <p>Graduated May 2025</p>
        <p>GPA/Honors: 3.9, Summa Cum Laude</p>
      </section>

      <section id="experience" className="section">
      <h2>Work Experience</h2>
        <div className="experience-entry">
          <div className="experience-header">
            <h3><strong>Software Engineer at SureScan</strong> <i>(Boxborough, MA)</i></h3>
            <span className="date">May 2024 – Current</span>
          </div>

          <div className="experience-description">
          <p><strong>Tasks:</strong></p>
            <ul>
              <li>Helped build and integrate Python scripts with QT services in construction of a threat image projection library.</li>
              <li>Designed a database comparison tool in QT that compares snapshots of database instances, showing data additions, deletions, and insertions to assist QA in debugging.</li>
              <li>Engineered a QT script with Postgres database integration, automating the verification of test case results for the Detect 1000, improving accuracy and reducing processing time.</li>
              <li>Implementing various functionality to an Angular web application.</li>
            </ul>
          </div>

          <div className="experience-skills">
           <p><strong>Skills: </strong>Qt, C++, PostgreSQL, Python, AngularJS</p>
          </div>
        </div>

        <div className="experience-entry">
          <div className="experience-header">
            <h3><strong>Human-Robot Interaction Research Intern at UML HRI Lab</strong> <i>(Lowell, MA)</i></h3>
            <span className="date">June 2022 – August 2022</span>
          </div>
        </div>

        <div className="experience-entry">
          <div className="experience-header">
            <h3><strong>Sales Associate at TJMaxx</strong> <i>(Hudson, MA)</i></h3>
            <span className="date">October 2019 – March 2020</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <h3><strong>Fridgie</strong> <i>(React Native, NodeJS, PostgreSQL)</i></h3>
        <p>Jan 2025 - Current</p>
        <h3><strong>Goose Guantlet</strong> <i>(Python)</i></h3>
        <p>October 2024 - December 2024</p>
        <h3><strong>Word Wizard</strong> <i>(Java)</i></h3>
        <p>November 2024 - December 2024</p>
        <h3><strong>2D Terminal Games</strong> <i>(C++)</i></h3>
        <p>February 2024 - March 2024</p>
        <h3><strong>Computing IV Portfolio</strong> <i>(C++)</i></h3>
        <p>January 2023 - May 2023</p>
      </section>
    </div>
  );
}

export default App;

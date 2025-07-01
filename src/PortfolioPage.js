import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import JobApplicationsPage from './JobApplicationsPage';
import './App.css';

import fridgieIcon from './assets/fridgie_icon.png'; // adjust path as needed


function PortfolioPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSecretClick = () => {
    setShowPopup(true);
    setPassword('');
    setError('');
  };

  const handlePasswordSubmit = () => {
    if (password === 'jobs') {
      navigate('/job-applications');
    } else {
      setError('Incorrect password.');
    }
  };

  return (
    <div className="Portfolio">

      {/* Secret Button */}
      <button className="secret-button" onClick={handleSecretClick} />

      {/* Popup Password Prompt */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Enter Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {error && <p className="error">{error}</p>}
            <div className="popup-buttons">
              <button onClick={handlePasswordSubmit}>Submit</button>
              <button onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#contact">Contact Info</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Techincal Skills</a></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="Portfolio-header"> William Susi's Portfolio</header>

      {/* Contact Info */}
      <section id="contact" className="section">
        <h1>Contact Info</h1>
        <p><u>Email</u>: willsusi14@gmail.com</p>
        <p><u>Phone</u>: (978) 549-6089</p>
        <p><u>LinkedIn</u>: <a href="https://linkedin.com/in/will-susi" style={{ color: "#0077b5" }} target="_blank" rel="noreferrer">linkedin.com/in/will-susi</a></p>
        <p><u>Github</u>: <a href="https://github.com/Will-Susi?tab=repositories" style={{ color: "#0077b5" }} target="_blank" rel="noreferrer">https://github.com/Will-Susi?tab=repositories</a></p>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h1>Education</h1>
        <div className="entry-header">
          <h2><strong>B.S. in Computer Science, University of Massachusetts Lowell</strong></h2>
          <span className="date">Graduated May 2025</span>
        </div>
        <p><u>GPA/Honors</u>: 3.88, Summa Cum Laude</p>
        <p><u>Relevant Courses</u>: Computing I-IV (OOP, Data Structures, Algorithms), Software Engineering I, Mobile App Development I & II, Data Communications I, Assembly Language Programming, Computer Architecture, Operating Systems, Organization of Programming Languages, Discrete Mathematics I & II, Linear Algebra I</p>
      </section>

      {/* Work Exp */}
      <section id="experience" className="section">
        <h1>Work Experience</h1>
        <div className="entry">
          <div className="entry-header">
            <h2><strong>Software Engineering Intern</strong> at SureScan Corporation <i>(Boxborough, MA)</i></h2>
            <span className="date">May 2024 – June 2025</span>
          </div>

          <div className="entry-task">
            <p><strong><u>Tasks</u>: </strong></p>
            <ul>
              <li>Helped build and integrate Python scripts with QT services in construction of a threat image projection library.</li>
              <li>Designed a database comparison tool in QT that compares snapshots of database instances, showing data additions, deletions, and insertions to assist QA in debugging.</li>
              <li>Engineered a QT script with Postgres database integration, automating the verification of test case results for the Detect 1000, improving accuracy and reducing processing time.</li>
              <li>Implementing various functionality to an Angular web application.</li>
            </ul>
          </div>

          <div className="entry-skills">
            <p><strong><u>Skills</u>: </strong>Qt, C++, PostgreSQL, Python, AngularJS</p>
          </div>
        </div>

        <div className="entry">
          <div className="entry-header">
            <h2><strong>Human-Robot Interaction Research Intern</strong> at UML HRI Lab <i>(Lowell, MA)</i></h2>
            <span className="date">June 2022 – August 2022</span>
          </div>

          <div className="entry-task">
            <p><strong><u>Tasks</u>: </strong></p>
            <ul>
              <li>Developed a Python script to assess electrical box components on Navy ships using images from Boston Dynamics “Spot” robot, automating inspections.</li>
              <li>Applied advanced image processing techniques, including feature detection, thresholding, erosion, and dilation techniques to extrapolate components and subsequently their state/statuses.</li>
            </ul>
          </div>

          <div className="entry-skills">
            <p><strong><u>Skills</u>: </strong>Python, OpenCV, Computer Vision</p>
          </div>
        </div>

        <div className="entry">
          <div className="entry-header">
            <h2><strong>Sales Associate</strong> at TJMaxx <i>(Hudson, MA)</i></h2>
            <span className="date">October 2019 – March 2020</span>
          </div>

          <div className="entry-task">
            <p><strong><u>Tasks</u>: </strong></p>
            <ul>
              <li>Worked on the sales floor to organize and stock products, and assist customers in finding them.</li>
              <li>Operated the cash register, processing transactions for customers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h1>Projects</h1>

        <div className="entry">
          <div className="entry-header">
            <h2><strong>Portfolio</strong></h2>
            <span className="date">May 2025 - Current</span>
          </div>

          <div className="entry-overview">
            <p><strong><u>Overview</u>: </strong> The portfolio you are seeing now!</p> 
          </div>

          <div className="entry-skills">
            <p><strong><u>Skills</u>: </strong>React, JavaScript, HTML, CSS</p>
          </div>
        </div>

        <div className="entry">
          <div className="entry-header">
            <h2><strong>Fridgie</strong></h2>
            <span className="date">January 2025 - Current</span>
          </div>

          {/* <div className="entry-image">
            <img 
              src= {fridgieIcon}
              alt="Fridgie app screenshot" 
            />
          </div> */}

          <div className="entry-overview">
            <p><strong><u>Overview</u>: </strong> Fridgie is a mobile application that allows users to virtually track and organize items in their fridge and pantries.</p> 
          </div>

          <div className="entry-highlights">
            <p><strong><u>Highlights</u>: </strong></p>
            <ul>
              <li>Under development by myself and 3 fellow students from UML who were granted funding after winning the Rist DifferenceMaker S.E.E.D Fund Award.</li>
              <li>Aims to reduce food waste by reminding the user to use items that are about to expire.</li>
              <li>Built using a React Native frontend that communicates with a Node.js backend API, which in turn interacts with a PostgreSQL database to manage and retrieve data.</li>
            </ul>
          </div>

          <div className="entry-skills">
            <p><strong><u>Skills</u>: </strong>React Native, PostgreSQL, JIRA, ExpoGO, NodeJS</p>
          </div>
        </div>

        <div className="entry">
          <div className="entry-header">
            <h2><strong>Goose Guantlet</strong></h2>
            <span className="date">October 2024 - December 2024</span>
          </div>

          <div className="entry-overview">
            <p><strong><u>Overview</u>: </strong>Goose Gauntlet is a game where the player progresses through levels, constructing words to defeat enemies, and rewarding the player for forming more difficult words.</p> 
          </div>

          <div className="entry-highlights">
            <p><strong><u>Highlights</u>: </strong></p>
            <ul>
              <li>Along with this project is an in-depth Software Requirements Specification (SRS) document that outlines the complete design process.</li>
              <li>A website was created containing this document and all other related materials, along with the development team, and a playable version: <a href="https://ltorrettor.github.io/GooseGauntlet/" style={{ color: "#0077b5" }} target="_blank" rel="noreferrer">Goose Gauntlet Website</a>
              </li>
            </ul>
          </div>

          <div className="entry-skills">
            <p><strong><u>Skills</u>: </strong>Python, Godot, SRS Document, UML Diagrams (Class, Sequence, State, Case)</p>
          </div>
        </div>

        <div className="entry">
          <div className="entry-header">
            <h2><strong>Word Wizard</strong></h2>
            <span className="date">November 2024 - December 2024</span>
          </div>

          <div className="entry-overview">
            <p><strong><u>Overview</u>: </strong>Word Wizard is an Android phrase game similar to the game Catchphrase, but with additons such as custom categories.</p> 
          </div>

          <div className="entry-skills">
            <p><strong><u>Skills</u>: </strong>Java, Android Studio</p>
          </div>
        </div>

        <div className="entry">
          <div className="entry-header">
            <h2><strong>2D Terminal Games</strong></h2>
            <span className="date">February 2024 - March 2024</span>
          </div>

          <div className="entry-overview">
            <p><strong><u>Overview</u>: </strong>2D Terminal Games is a series of classic games that have my own twist on them and can be run and played within a terminal.</p> 
          </div>

          <div className="entry-highlights">
            <p><strong><u>Games</u>: </strong></p>
            <ul>
              <li><i>Mordle</i>: Similar to New York Times game “Wordle” that allows the user to pick the number of guesses and the length of the word. Its functionality is supported by an algorithm for pattern matching that can distinguish between an exact, partial, or no match.</li>
              <li><i>Battleship</i>: A replication of "Battleship" that allows for two players or the option to play the computer with an algorithm that makes it a formidable opponent, replicating actions similar to that of a real player.</li>
            </ul>
          </div>

          <div className="entry-skills">
            <p><strong><u>Skills</u>: </strong>C++, Makefile</p>
          </div>
        </div>

        <div className="entry">
          <div className="entry-header">
            <h2><strong>Computing IV Portfolio</strong></h2>
            <span className="date">January 2023 - May 2023</span>
          </div>

          <div className="entry-overview">
            <p><strong><u>Overview</u>: </strong> A portfolio containing projects produced during Computing IV at the University of Massachusetts Lowell.</p> 
          </div>

          <div className="entry-highlights">
            <p><strong><u>Projects</u>: </strong></p>
            <ul>
              <li><i>Text Generator</i>: A program that analyzes the frequency and distribution of substrings of varying lengths within provided text to generate novel text.</li>
              <li><i>Log Parser</i>: A program that uses regular expression parsing techniques to analyze a complex log file, producing a legible report file.</li>
              <li><i>DNA Comparison</i>: A program that uses dynamic programming to compare and align DNA sequences to figure out places of insertion and deletion of DNA substrings.</li>
            </ul>
          </div>

          <div className="entry-skills">
            <p><strong><u>Skills</u>: </strong>C++, SFML</p>
          </div>
        </div>

      </section>

      {/* Techincal Skills */}
      <section id="skills" className="section">
        <h1>Technical Skills</h1>
        <p><u>Programming Languages</u>: C++, Python, Java, SQL, React, JavaScript/TypeScript, HTML, CSS</p>
        <p><u>Tools</u>: QT, Visual Studio Code, Android Studio, Github, SVN, UML</p>
        <p><u>Operating Systems</u>: Linux (Ubuntu, CentOS, RedHat), Windows</p>
      </section>

    </div>
  );
}

export default PortfolioPage;

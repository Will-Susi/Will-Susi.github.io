import WorkExperienceEntry from './WorkExperienceEntry';
import ProjectEntry from './ProjectEntry';
import './App.css';

function PortfolioPage() {
  return (
    <div className="Portfolio">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Techincal Skills</a></li>
        </ul>
        <div className="social-links">
          <a href="https://linkedin.com/in/will-susi" target="_blank" rel="noreferrer" title="LinkedIn">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{ width: '28px', height: '28px' }} />
          </a>
          <a href="https://github.com/Will-Susi?tab=repositories" target="_blank" rel="noreferrer" title="GitHub">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" style={{ width: '28px', height: '28px' }} />
          </a>
        </div>
      </nav>

      {/* Header & Contatc Info*/}
      <header className="Portfolio-header">
        <div>William Susi's Portfolio</div>
        <div className="contact-info">
          <a href="mailto:willsusi14@gmail.com" style={{ color: '#ffffff', textDecoration: 'none' }}>willsusi14@gmail.com</a>
          <span style={{ margin: '0 15px', color: '#ffffff' }}>|</span>
          <a href="tel:+19785496089" style={{ color: '#ffffff', textDecoration: 'none' }}>(978) 549-6089</a>
        </div>
      </header>

      {/* Education */}
      <section id="education" className="section">
        <h1>Education</h1>
        <div className="entry-header">
          <h2><strong>B.S. in Computer Science, University of Massachusetts Lowell</strong></h2>
          <span className="date">Graduated May 2025</span>
        </div>
        <p><u>GPA/Honors</u>: 3.88, Summa Cum Laude</p>
        <p><u>Minors</u>: Mathematics</p>
        <p><u>Relevant Courses</u>: Computing I-IV (OOP, Data Structures, Algorithms), Software Engineering I, Mobile App Development I & II, Data Communications I, Assembly Language Programming, Computer Architecture, Operating Systems, Organization of Programming Languages, Discrete Mathematics I & II, Linear Algebra I</p>
        <p><u>Clubs/Activities</u>: Club Soccer, Intramural Soccer</p>
      </section>

      {/* Work Exp */}
      <section id="experience" className="section">
        <h1>Work Experience</h1>
        
        <WorkExperienceEntry
          position="Software Engineering Intern"
          employmentType="Internship"
          company="SureScan Corporation"
          location="Boxborough, MA"
          timeframe="May 2024 – June 2025"
          overview={[
            "During this position, I was often assigned to different tasks based on project needs, though my primary focus was developing tools to assist the QA team.",
            "One of my main projects was a database comparison tool designed to track data changes in a database before and after an operation. To achieve this, I used PostgreSQL’s pg_dump to export database snapshots pre- and post-operation, then utilized Bash’s diff command to compare the two dumps. Since diff outputs raw line-by-line differences, I wrote additional parsing code to interpret and categorize these results into clear summaries of insertions, deletions, and data modifications.",
            "Another project I developed was a verification tool for validating the functionality of Threat Image Projection (TIP) on real-time baggage scans using the Detect 1000 scanner. This tool compared user-specified TIP parameters with the actual results from the Detect 1000 and provided visual feedback indicating the likelihood of malfunctions or incorrect deployments.",
            "I also contributed to several smaller projects. I helped implement new features on an Angular-based web server that interfaced with the Detect 1000 system. Additionally, I assisted in building and integrating Python scripts with Qt services to construct a Threat Image Projection (TIP) library. Finally, I conducted research on migrating a Subversion-based repository system to Git, exploring best practices and potential challenges.",
          ]}
          skills="Qt, C++, PostgreSQL, Python, AngularJS, Restful APIs, Bash Scripting, Documentation"
        />

        <WorkExperienceEntry
          position="Human-Robot Interaction Research Intern"
          employmentType="Internship"
          company="UML HRI Lab"
          location="Lowell, MA"
          timeframe="June 2022 – August 2022"
          overview={[
            "During this position, I researched and developed a prototype program for the U.S. Navy to evaluate the condition of components inside an electrical control box aboard a ship, using images captured by Boston Dynamics’ “Spot” robot. The goal was to automatically assess the state of three key components: the breaker switch (on/off), the fuse set (presence or absence of fuses), and the temperature gauges (approximate readings from two dials).",
            "To achieve this, I applied a range of image processing techniques. To first locate the components within the box, I used feature detection with ORB descriptors and Brute-Force Matching for object recognition. These methods identify distinctive regions in the provided image and match them to a set of reference images to confirm an object’s presence. I also implemented thresholding, dilation, and erosion on the regions where the components were found, which helped distinguish foreground objects, fill gaps, and remove noise.",
            "For the breaker switch, I analyzed the position of the tip of the switch relative to the top and bottom of the switch to determine whether it was on or off. For the fuse set, which was housed in a black box, I used color filtering and pixel analysis; an excess of black pixels indicated missing fuses. Finally, for the temperature gauges, I used color thresholding and geometric analysis to determine the direction the dials were pointing, convert their angular positions into numeric readings, and estimate the temperature within a few degrees.",
          ]}
          skills="Python, OpenCV, Computer Vision"
        />

        <WorkExperienceEntry
          position="Sales Associate"
          employmentType="Part-Time"
          company="TJMaxx"
          location="Hudson, MA"
          timeframe="October 2019 – March 2020"
          tasks={[
            "Worked on the sales floor to organize and stock products, and assist customers in finding them.",
            "Operated the cash register, processing transactions for customers."
          ]}
        />
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h1>Projects</h1>

        <ProjectEntry
          name="Portfolio"
          timeframe="May 2025 - Current"
          image={require('./assets/WS.png')}
          overview="The portfolio you are seeing now!"
          skills="React, JavaScript, HTML, CSS"
        />

        <ProjectEntry
          name="Fridgie"
          timeframe="January 2025 - Current"
          image={require('./assets/fridgie_icon.png')}
          overview={[
            "Fridgie is a mobile application designed to help users virtually track and organize food in their kitchens, aiming to reduce food waste and save money. The app is built with a React Native frontend that communicates with a Node.js backend API, which interacts with a PostgreSQL database to manage and retrieve data.",
            "This project began during my senior year as part of my Mobile Application Capstone, where I collaborated with three fellow UML students. Early in development, we submitted the project idea to the First DifferenceMaker 2025 competition. After advancing through multiple stages, we were awarded the S.E.E.D. award, which included funding to support the app’s development.",
            "With this funding and the combined efforts of our team, we continue to develop the application. Its features include item input through scanning items and receipts using AI, a virtual storage system to track items, notifications for foods nearing expiration, and smart grocery lists that track available items and allow for quick additions once items are purchased. While still in development, we aim to release the app soon and have ambitious plans for future features.",
          ]}
          relevantLinks={[
            { info: "Stay up to date and see our progress here:", text: "Fridgie Website", url: "https://fridgieapp.com/" }
          ]}
          skills="React Native, ExpoGO, PostgreSQL, NodeJS"
        />

        <ProjectEntry
          name="Goose Gauntlet"
          timeframe="October 2024 - December 2024"
          image={require('./assets/goose_guantlet_icon.png')}
          overview={[
            "Goose Gauntlet is an edutainment game where players construct words to defeat enemies, rewarding the player for forming more complex words. The game was designed with middle school students in mind, focusing on improving their spelling and vocabulary through an engaging and entertaining experience.",
            "The project was developed during my Software Engineering course in collaboration with four classmates using the Godot Engine. Accompanying the game is a comprehensive Software Requirements Specification (SRS) document detailing the entire design process, including system functionality descriptions and UML diagrams that outline the game’s structure and behavior.",  
          ]}
          relevantLinks={[
            { info: "Play the game and see all other related documents and materials here:", text: "Goose Gauntlet Website", url: "https://ltorrettor.github.io/GooseGauntlet/" }
          ]}
          skills="Python, Godot, SRS Document, UML Diagrams (Class, Sequence, State, Case)"
        />

        <ProjectEntry
          name="Word Wizard"
          image={require('./assets/word_wizard_icon.jpg')}
          timeframe="November 2024 - December 2024"
          overview="Word Wizard is an Android phrase game similar to the game Catchphrase, but with various small additions, such as custom categories. The project was developed during my Mobile Application course in collaboration with two classmates using Android Studio."
          skills="Java, Android Studio"
        />

        <ProjectEntry
          name="Terminal Games"
          timeframe="February 2024 - March 2024"
          image={require('./assets/terminal_icon.png')}
          overview={[
            "A library containing various strategy and puzzle games that can be played through terminal IO.These games include Mordle (Extension of Wordle), Battleship, Mastermind, and Connect 4."
          ]}
          relevantLinks={[
            { info: "See or download the code for the games here:", text: "Terminal Games Github", url: "https://github.com/Will-Susi/Terminal_Games" }
          ]}
          skills="C++, Makefile"
        />

        <ProjectEntry
          name="Computing IV Portfolio"
          timeframe="January 2023 - May 2023"
          overview={[
            "An extensive portfolio featuring projects designed to demonstrate and reinforce various software development practices. These projects are primarily developed in C++, with several incorporating graphical interfaces built using SFML. Each project includes detailed documentation that provides an overview of the project, discusses key design decisions, highlights skills learned, and reflects on the challenges encountered throughout development.",
          ]}
          relevantLinks={[
            { info: "See the projects and detailed documentation here:", text: "Computing IV Portfolio Github", url: "https://github.com/Will-Susi/Computing-IV-Projects" }
          ]}
          skills="C++, SFML, LateX"
        />

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

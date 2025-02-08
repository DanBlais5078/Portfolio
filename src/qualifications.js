import React from 'react';
import './css/qualifications.css';
import  { ReactComponent as LinkIcon } from './assets/link.svg';
import { ReactComponent as SearchIcon } from './assets/search.svg';
import AlgonquinImage from './assets/algonquin-college.png';
import CatchDupeImage from './assets/catch-dupe.png';

function QualificationsPage () {
  return (
    <div id="qualifications" className="qualifications">
        <h2 className="qualifications-header">My Qualifications.</h2>
        <div className="programming-languages">
            <h3 className="programming-languages-header">Programming Languages and Frameworks</h3>
            <div className="search-container">
              <SearchIcon className="search-icon" />
              <input type="text" placeholder="Search Languages or Frameworks" className="search-bar" />
            </div>
            <ul className="programming-languages-list">
              <li className="programming-language js-tag">JavaScript</li>
              <li className="programming-language js-tag">NodeJS</li>
              <li className="programming-language js-tag">ReactJS</li>
              <li className="programming-language js-tag">ExpressJS</li>
              <li className="programming-language js-tag">AnimeJS</li>
              <li className="programming-language js-tag">ThreeJS</li>
              <li className="programming-language js-tag">Axios</li>
              <li className="programming-language js-tag">Ajax</li>
              <li className="programming-language css-tag">CSS</li>
              <li className="programming-language css-tag">SCSS</li>
              <li className="programming-language html-tag">HTML</li>
              <li className="programming-language php-tag">PHP</li>
              <li className="programming-language python-tag">Python</li>
              <li className="programming-language sql-tag">SQL</li>
        </ul>
        </div>
        <div className="education">
            <h3 className="education-header">Education</h3>
            <div className="education-outer-container">
              <img src={AlgonquinImage} alt="Algonquin College Logo" className="algonquin-image" />
              <div className="education-inner-container">
                <h4 className="school">Algonquin College</h4>
                <div className="program-container">
                  <h5 className="program">Computer Programmming Diploma</h5>
                  <h5 className="year">2023-2024</h5>
                </div>
                <p className="program-description">The computer programming program at Algonquin College is a highly reputable two-year program
                    that provides students with a solid foundation in programming concepts, algorithms, and data structures. Students are exposed
                    to AGILE methodologies and are trained in software development methodologies, such as Scrum and Kanban. The program also includes
                    hands-on experience with a wide range of web-programming languages, including HTML, CSS, JavaScript, PHP, and Python. As a final
                    capstone project, students are paired with a client and work on a real-world project, such as a website or web application.
                </p>
                <a href="https://www.algonquincollege.com/sat/program/computer-programming/" className="algonquin-link">Visit the AC Computer Programming Homepage <LinkIcon className="link-icon" /></a>
              </div>
            </div>
        </div>
        <div className="experience">
            <h3 className="experience-header">Relevant Professional Experience</h3>
            <div className="experience-outer-container">
              <img src={CatchDupeImage} alt="Screenshot of project for Yutechs LLC" className="catch-dupe-image" />
              <div className="experience-container">
                <h2 className="job-title">Student Development Project</h2>
                <div className="career-container">
                  <h3 className="company">Client: Yutechs LLC</h3>
                  <h3 className="date">2024</h3>
                </div>
                <p className="job-description">Developed a web application for the client, Yutechs LLC which consisted 
                    of a local SQL database, a functionality to identify duplicate records within the database, and a
                    functionality to report the results of duplicate identification searches. The application was integrated
                    with Zoho CRM and featured the use of NodeJS and Axios to interact with the Zoho API. This
                    was used to retrieve data from the Zoho CRM and to send data to the local database for searches to be performed on.
                    This resulted in an significant optimization of the client&apos;s ability to identify duplicate records, while
                    reducing the number of API calls they used to perform search operations. Searches were based upon a dynamic
                    number of user-defined search criteria based on the columns within their dataset. The produced algorithm combines column
                    criteria into a resulting boolean expression and evaluates it to identify duplicate records.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default QualificationsPage;
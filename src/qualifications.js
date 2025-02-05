import React from 'react';
import './css/qualifications.css';

function QualificationsPage () {
  return (
    <div id="qualifications" className="qualifications">
        <h2 className="qualifications-header">My Qualifications</h2>
        <div className="education">
            <h3 className="education-header">Education</h3>
            <h4 className="school">Algonquin College</h4>
            <h5 className="program">Computer Programmming Diploma</h5>
            <h5 className="year">2023-2024</h5>
            <p className="program-description">The computer programming program at Algonquin College is a highly reputable two-year program
                that provides students with a solid foundation in programming concepts, algorithms, and data structures. Students are exposed
                to AGILE methodologies and are trained in software development methodologies, such as Scrum and Kanban. The program also includes
                hands-on experience with a wide range of web-programming languages, including HTML, CSS, JavaScript, PHP, and Python. As a final
                capstone project, students are paired with a client and work on a real-world project, such as a website or web application.
            </p>
            <a href="https://algonquincollege.com/" className="algonquin-link">Visit the AC Computer Programming Homepage</a>
        </div>
        <div className="programming-languages">
            <h3 className="programming-languages-header">Programming Languages and Frameworks</h3>
        </div>
    </div>
  )
}

export default QualificationsPage;
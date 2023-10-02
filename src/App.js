import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Define a common icon class for all section titles
  
  return (
    <div style={{ backgroundColor: '#191c26' }}>
      <div className="app">
        <div className="header">
          
          <Header />
        </div>
        <div className="main-content">
          <Hero />
          {/* Apply the same icon to each section title */}
          <Content sectionId="about" title={<><i className="fas fa-user"></i> About Me</>}>
            {/* Add your details here*/}
            <span style={{ color: '#8c9cb0' }}>
            <p>Experienced DevOps Engineer with 2+ years of hands-on experience in Jenkins, 
                  Continuous Integration and Continuous Deployment (CI/CD), GitHub, Urban Code 
                  Deploy, and SonarQube. Proficient in utilizing ELK, Dynatrace, and MoogSoft for 
                  effective monitoring and troubleshooting. Strong knowledge of an Terraform, Docker, 
                  Kubernetes, AWS, Microsoft Azure. Strong coding skills in Java, Hibernate, Spring 
                  Boot, Microservices. Dedicated to streamlining software development, ensuring efficient deployments and maintaining code quality. Continuously staying updated with 
                  the latest industry trends to drive continuous improvement in DevOps practices.</p>
                  </span>
          </Content>
          <Content sectionId="employment" title={<><i className="fas fa-briefcase"></i> Employment History</>}>
            {/* Add your employment history content here */}
            <h3>Senior Software Enginner, Capgemini, Pune/Hyderabad</h3>
            <h4>0 6 / 2 0 2 1 - P r e s e n t</h4>
            <span style={{ color: '#8c9cb0' }}>
            <p>
            • Streamlined software development processes by implementing Jenkins for 
              Continuous Integration (CI) & Continuous Deployment (CD), ensuring efficient 
              software development, testing, and deployment processes resulting decrease 
              in bug detection time and increase in deployment frequency.<br></br>
              </p>
              <p>
              • Collaborated with functional teams to configure and implement SonarQube
              for CI/CD pipeline, automated code analysis, enabling proactive identification 
              of code issues, and vulnerabilities.<br></br> 
              </p>
              <p>
              • Leveraged Ansible to automate configuration management, reducing manual 
              effort and increasing operational efficiency. Created and organized complex 
              templates, playbooks and roles to define configuration for services, enabling 
              consistent and repeatable deployments across environments.<br></br>
              </p>
              <p>
              • Implementation of Azure DevOps to enable efficient software delivery and 
              deployment processes through the configuration and management of Azure 
              Repos for collaborative code development and version control. Developed 
              and maintained Azure Pipelines within Azure DevOps to automate build, test, 
              and release processes, ensuring reliable and frequent software releases in 
              a continuous integration, continuous delivery, and continuous deployment 
              (CI/CD) pipeline.<br></br>
              </p>
              <p>
              • Possessing comprehensive knowledge of Terraform, including strong knowledge of its concepts, syntax, and best practices. To provision and manage 
              infrastructure resources with infrastructure as code principles. Skilled in automating infrastructure deployment, creating reusable modules, and integrating Terraform into CI/CD pipelines. Continuously staying updated with the 
              latest advancements in Terraform for efficient infrastructure management.<br></br>
              </p>
              <p>
              • Extensive knowledge of Docker and Kubernetes, including containerization, 
              deployment, application orchestration and management. Continuously staying updated with the latest advancements in both technologies.<br></br>
              </p>
              <p>
              • Impressive hands-on experience with a range of DevOps tools and technologies, including: ELK, GitHub, Urban Code Deploy, Dynatrace, MoogSoft, 
              Apigee, PingFederate.<br></br> </p>
              </span>
          </Content>
          <Content sectionId="certifications" title={<><i className="fas fa-certificate"></i> Certifications</>}>
            {/* Add your certifications content here */}
            <span style={{ color: '#8c9cb0' }}>
            <h3>AZ – 204 Microsoft Certified Azure Developer Associate, Microsoft</h3>
            <h3>AZ – 400 Microsoft Certified Azure DevOps Engineer Expert, Microsoft</h3>
            </span>
          </Content>
          <Content sectionId="education" title={<><i className="fas fa-graduation-cap"></i> Education</>}>
            {/* Add your education content here */}
            <h4>Bachelor of Engineering, Anantrao Pawar college of Engineering and Research, Pune</h4>
            <h5>0 8 / 2 0 1 7 - 1 2 / 2 0 2 0</h5>
            <span style={{ color: '#8c9cb0' }}>
            <h5>Computer Engineering (CGPA - 7.21)</h5>
            </span>
            <br></br>
            <p>

            </p>
            <h4>Diploma, Government Polytechnic, Solapur</h4>
            <h5>0 8 / 2 0 1 4 - 0 5 / 2 0 1 7</h5>
            <span style={{ color: '#8c9cb0' }}>
            <h5>Information Technology (Percentage - 65%)</h5>
            </span>
          </Content>
          <Content sectionId="contact" title={<><i className="fas fa-envelope"></i> Contact</>}>
            {/* Add your contact content here */}
            <span style={{ color: '#8c9cb0' }}>
            <h5>prathameshshivpuje@gmail.com</h5>
            <h5>8484016778</h5>
            </span>
            <a href="https://github.com/PrathameshShivpuje/Automated_Repository/raw/1e19500c9355f6ae2091e513309d08104bbef794/Prathamesh_Shivpuje_CV.pdf" download style={{ color: 'white' }}>Download Resume</a>
            </Content>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

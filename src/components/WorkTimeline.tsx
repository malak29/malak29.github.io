import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(58, 92, 124)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2025 - Present"
            iconStyle={{ background: 'rgb(58, 92, 124', color: '#3A5C7C' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">IpserLabs - Remote</h4>
            <p>
              AI-powered Trip Advisor Chatbot that provides user-specific travel recommendations and booking assistance.
            </p>
            <p>
              Integrated backend APIs via an MCP server to LLMs using prompt engineering for dynamic, real-time responses.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(58, 92, 124)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2025 - Mar 2025"
            iconStyle={{ background: 'rgb(58, 92, 124', color: '#3A5C7C' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">VesterAI, Capstone - Remote</h4>
            <p>
              Temporal-aware RAG system with FastAPI, LangChain, and GPT-4 for real-time crypto insights using Binance API.
            </p>
            <p>
              Bitcoin and Ethereum wallet integration and scalable ETL pipelines with Airflow, PostgreSQL, and Docker.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2024 - Dec 2024"
            iconStyle={{ background: 'rgb(58, 92, 124', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Dooit - Xperiential Learning - Remote</h4>
            <p>
              Performed predictive analysis and clustering on OpenPayments healthcare data to uncover gender-based disparities in industry payments.
            </p>
            <p>
              Built a Python ETL pipeline using Pandas, scikit-learn, and Matplotlib for data cleaning, feature engineering, and model visualization.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2021 - Aug 2023"
            iconStyle={{ background: 'rgb(58, 92, 124', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer II</h3>
            <h4 className="vertical-timeline-element-subtitle">Philips Healthcare - Bengaluru, India</h4>
            <p>Developed patient detection module with Python, OpenCV, improving diagnostics accuracy.</p>
            <p>Led log analytics project using Random Forest, reducing critical errors.</p>
            <p>Built real-time dashboards with Tableau and SQL, enhancing decisions by 35%.</p>
            <p>Implemented recommendation algorithm in Python, increasing user engagement twenty-five percent.</p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2019 - Jul 2021"
            iconStyle={{ background: 'rgb(58, 92, 124', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer I</h3>
            <h4 className="vertical-timeline-element-subtitle">Philips Healthcare - Bengaluru, India</h4>
            <p>Reduced payment frauds using Solidity and Web3.js smart contracts.</p>
            <p>Improved system performance 40% using React, Twilio, and Webpack tools.</p>
            <p>Built cardiology dashboards with Angular, Maps API, improving response time.</p>
            <p>Enhanced scan accuracy with OpenCV, CNN, processing 10,000 monthly images.</p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2018 - Jul 2019"
            iconStyle={{ background: 'rgb(58, 92, 124', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Research Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Philips Healthcare - Bengaluru, India</h4>
            <p>Developed blockchain-based healthcare apps at Philips using Hyperledger and Go.</p>
            <p>Built smart contract platform with Docker, Hyperledger Fabric, and Golang.</p>
            <p>Engineered consent management system using React, Express, and MySQL.</p>
            <p>Improved compliance and security with HL7 FHIR, reducing data breaches.</p>

          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
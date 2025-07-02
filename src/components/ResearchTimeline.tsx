import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";

function ResearchTimeline() {
  return (
    <div id="research">
      <div className="items-container">
        <h1>Research</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2024 - Aug 2024"
            iconStyle={{ background: 'rgb(58, 92, 124', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGoogleScholar as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Washington State University - Remote</h4>
            <p>Presented poster "Buildings as a GridEdge Resource" with Ninad Gaikwad at WSU GridEdge event <a href="https://www.linkedin.com/posts/ninadkirangaikwad_gridedge-sciml-generativeai-ugcPost-7234941650945327106-XNXd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACIbsx8Bb-cMaW0OJeE2dEjO12TYsaFn9OE"
              target="_blank"
              style={{ color: "#4e779e" }}>
              (View post)
            </a>.</p>
            <p>Fused PINNs and NeuralODEs for precise building thermal modeling.</p>
            <p>Modeled multi-zone buildings as simplified ANN-based single-zone systems.</p>
            <p>Automated regression and ANN training pipeline using Python scripting tools.</p>
            <p>Trained MLP, RNN, LSTM, GRU models for dynamic temperature prediction.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2018 - May 2019"
            iconStyle={{ background: 'rgb(58, 92, 124', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGoogleScholar as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Reinforcing Security of Medical Data using Blockchain</h3>
            <h4 className="vertical-timeline-element-subtitle">NMIMS University - Master's Thesis</h4>
            <p>Co-authored IEEE paper with Prof. Dr. Seema Shah on healthcare blockchain — <a href="https://ieeexplore.ieee.org/document/9065830" target="_blank" style={{ color: "#4e779e" }}>Read here</a>.</p>
            <p>Proposed blockchain-based system for secure medical data sharing and privacy.</p>
            <p>Used Hyperledger Fabric and encryption to manage patient data permissions.</p>
            <p>Enhanced compliance with healthcare data regulations using decentralized architecture.</p>
            <p>Improved trust, auditability, and control in medical record management systems.</p>

          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default ResearchTimeline;
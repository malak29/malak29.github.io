import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

function AcademicTimeline() {
  return (
    <div id="academics">
      <div className="items-container">
        <h1>Academics</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2023 - Mar 2025"
            iconStyle={{ background: 'rgb(58, 92, 124', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuildingColumns as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Master's in Applied Machine Intelligence</h3>
            <h4 className="vertical-timeline-element-subtitle">Northeastern University, Boston</h4>
            <p>Courses: Fundamentals &amp; Applications of AI, Data management &amp; Big Data, Data Mining, Deep Learning, NLP, LLMs. </p>
            <p>CGPA - 3.7/4.0</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2017 - May 2019"
            iconStyle={{ background: 'rgb(58, 92, 124', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuildingColumns as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Master's in Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">NMIMS University, Mumbai</h4>
            <p>Courses: Artificial Intelligence, Image Processing, Advance Algorithms, Distributed Computing, Advanced Databases. </p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2013 - May 2017"
            iconStyle={{ background: 'rgb(58, 92, 124', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuildingColumns as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor's of Engineering in Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Mumbai, Mumbai</h4>
            <p>Courses: Data structures, Database Management Systems, Algorithms, Operating systems, Digital Logic</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default AcademicTimeline;
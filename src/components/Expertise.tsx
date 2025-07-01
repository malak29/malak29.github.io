import React from "react"
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Chip from '@mui/material/Chip'
import '../assets/styles/Expertise.scss'
import { faRobot, faNetworkWired, faCubes } from "@fortawesome/free-solid-svg-icons"
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

const labelsFirst = [
    "DeepLearning.AI Certified",
    "Pytorch",
    "Tensorflow",
    "Pandas",
    "Numpy",
    "Hugging Face",
    "OpenAI API",
    "DeepSeek API",
    "OpenCV",
    "Transformers",
    "Scikit-learn",
    "XGBoost",
    "PySpark",
    "Hadoop",
    "Tableau"
]

const labelsSecond = [
    "Ethereum",
    "Solidity",
    "Web3.js",
    "Ethers.js",
    "Bitcoin",
    "Bitcoinjs-lib",
    "Hyperledger Fabric",
    "Go"
]

const labelsFrontend = [
    "React",
    "Angular",
    "HTML5",
    "CSS/SAAS",
    "Jest/Jasmine",
    "Redux",
    "Storybook",
    "Invision/Figma"
]

const labelsBackend = [
    "Express",
    "Spring Boot",
    "FastAPI",
    "ELK Stack",
    "Junit/PyTest",
    "Rest API",
    "PostGreSQL",
    "GraphQL",
    "Redis",
    "RabbitMQ",
    "Kafka"
]

const labelsCloud = [
    "AWS EC2/S3",
    "Nginx",
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub Actions",
    "Jenkins",
]

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faRobot as IconProp} size="3x"/>
                    <h3>Machine Learning</h3>
                    <p>Do you want to build end to end ML pipelines and models from traditional ML to Physic Informed Neural Networks, GenAI, LLMs?</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNetworkWired as IconProp} size="3x"/>
                    <h3>Blockchain</h3>
                    <p>Are you looking to create Hyperleder Fabric private network, User security and privacy focussed Smart contracts?</p>
                    <p>Crypto Exchanges and wallets integration for BTC and ETC</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCubes as IconProp} size="3x"/>
                    <h3>Full Stack</h3>
                    <p>I could lead and mentored your Agile teams deploying micro frontends and micro services.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Frontend:</span>
                        {labelsFrontend.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                        
                    </div>
                    <div className="flex-chips">
                        <span className="chip-title">Backend:</span>
                            {labelsBackend.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                    </div>
                    <div className="flex-chips">
                        <span className="chip-title">Cloud:</span>
                            {labelsCloud.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                    </div>    
                </div>
            </div>
        </div>
    </div>
    )
}

export default Expertise
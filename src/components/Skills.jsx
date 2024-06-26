import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { Container } from 'react-bootstrap';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  iconStyle: {
    height: 50,
    width: 50,
    margin: 15,
    marginBottom: 0,
    cursor: 'pointer',
  },
  introTextContainer: {
    whiteSpace: 'pre-wrap',
    fontSize: '1.5rem',
  },
  skill: {
    display: 'inline-block',
  },
};

function Skills(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const renderSkillsIntro = (intro) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown children={intro} />
    </h4>
  );

  useEffect(() => {
    fetch(endpoints.skills, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div className="section-content-container">
            <Container>
              {renderSkillsIntro(data.intro)}
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                  {data.skills?.map((rows) => (
                    <div key={rows.title}>
                      <br />
                      <h3>{rows.title}</h3>
                      {rows.items.map((item) => (
                        <div key={item.title} style={styles.skill}>
                          <img
                            style={styles.iconStyle}
                            src={item.icon}
                            alt={item.title}
                          />
                          <p style={{ cursor: 'pointer' }}>{item.title}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div>
                  {data.skills2?.map((rows) => (
                    <div key={rows.title}>
                      <br />
                      <h3>{rows.title}</h3>
                      {rows.items.map((item) => (
                        <div key={item.title} style={styles.skill}>
                          <img
                            style={styles.iconStyle}
                            src={item.icon}
                            alt={item.title}
                          />
                          <p style={{ cursor: 'pointer' }}>{item.title}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner />}
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;

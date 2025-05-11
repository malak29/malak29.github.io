import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data
            ? (
              <Fade>
                {window?.innerWidth < 576 ? (
                  <Row style={styles.introImageContainer}>
                    <img src={data?.imageSource} alt="profile" style={{ width: '82%' }} />
                  </Row>
                ) : <></>}
                <Row>
                  <Col style={styles.introTextContainer}>
                    {data.about.map((line) => (
                      <p>{line}</p>
                    ))}
                  </Col>
                  {window?.innerWidth > 576 ? (
                    <Col style={styles.introImageContainer}>
                      <img src={data?.imageSource} alt="profile" style={{ width: '82%' }} />
                    </Col>
                  ) : <></>}
                </Row>
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;

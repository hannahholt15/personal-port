import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const About = () => (
    <>
    <br />
    <br />
    <br />
    <Row xs={1} md={2} className="g-4"></Row>
      <Container>
        <Row>
          <Card>
            <h1> Hello! My name is Hannah Holt </h1>
            <p>I am currently searching for a company to join and further expand my skills. I love to develop projects that make life simpler.</p>
            <p> My recently used skills include: React.js Ruby / Ruby on Rails.</p>
          </Card>
    </Row>
    <br />
    <br />
    <br />
      </Container>
      <Container>
        <Row>
          <Card>
              <h3> Work Expereince</h3>
              <h5> Golden Customer Care</h5>
              <p> 06/2017- 11/2022</p>
              <p> customer service representitive & email support.</p>
            </Card>
          </Row>
      </Container>
      <br />
    <br />
    <br />
        <Container>
        <Row>
          <Card>
            <h3> Education</h3>
            <h5> Cottonwood High School</h5>
            <p> 05/2016 - High School Diploma</p>
            <h5> DevPoint Labs </h5>
            <p>11/2022- 02/2023 - Certificate Full Stack Development</p>
          </Card>
        </Row>
      </Container>

        </>
    )
      
      export default About;
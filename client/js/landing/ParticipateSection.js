import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Anchor from '../nav/Anchor';

const sectionName = 'participate';

export default () => (
  <div>
    <Anchor id={sectionName} />
    <div className="content-section-b">
      <div className="container">
        <Row>
          <Col lg={12}>
            <h2 className="section-heading">Who are we?</h2>
            <p className="lead">
              Zühlke Engineering AG is the preferred partner for delivering business innovation in a global context.
              We develop financially successful products, services and business models for today’s digital world -
              from coming up with the initial idea through to the implementation and operation. We believe that
              innovation requires an entrepreneurial mindset combined with the courage to push boundaries and break
              new ground. Want to learn more about us?
              Read our <a href="https://www.zuehlke.com/ch/de/success-stories/" target="_blank">Success Stories</a>.
            </p>
            <h2 className="section-heading">Why a Jass-Challenge?</h2>
            <p className="lead">
              We invest in our employees in order for Zühlke to stay ahead. Each year, we invest more than 12% of our
              turnover into training and development budgets. Next to technical and social skills trainings, each year
              our teams spend a few days at a training camp abroad, exploring interesting topics and taking some time
              to talk about professional issues and to get to know each other personally. Last year, one team decided
              to develop the Jass-Challenge:
            </p>
            <div style={{ position: 'relative', height: 0, paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/vxk3j87WwkI?ecver=2"
                width="640"
                height="360"
                frameBorder="0"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  left: 0
                }}
                allowFullScreen
              />
            </div>
            <h2 className="section-heading">Who can participate?</h2>
            <p className="lead">
              Every student who is enrolled at a Swiss university. You can either participate as a team (2 people) or
              individually. Very good German and English language skills are mandatory.
            </p>
            <h2 className="section-heading">What can I win?</h2>
            <p className="lead">
              The winning student or team gets a GoPro camera (each) and the unique chance to join one of our camps
              for two days. In the camp, you meet the creators of the Jass-Challenge and discover the field of
              software engineering at Zühlke. The camp takes place on 14-15 June 2017.
            </p>
            <h2 className="section-heading">How can I register?</h2>
            <p className="lead">
              The first training has already taken place, but you still have the chance to submit your bot and let it compete against the other bots at the next training on Tuesday, 16.5.2017! The final round will be held on Monday, 22.5.2017 in Schlieren.<br /><br />
              We are happy to announce that Monika Fasnacht is part of the final and will compete against a bot, live on stage! Who will win: Human or computer?<br />
              Find out and register now!<br /><br />
              Sign in with either your Github or Bitbucket account. Create a
              repo for your bot or simply clone one of our skeleton bots:<br />
              <a href="https://github.com/webplatformz/challenge-client-js" target="_blank">
                JavaScript
              </a>
              &nbsp;|&nbsp;
              <a href="https://github.com/webplatformz/challenge-client-java" target="_blank">
                Java
              </a>
              &nbsp;|&nbsp;
              <a href="https://github.com/adiherzog/JassBotSkeleton-CSharp" target="_blank">
                C#
              </a>
            </p>
            <p className="lead">
              Save your repo-URL in your profile and give our tournament account READ rights.<br />
              <a href="https://github.com/jass-challenge" target="_blank">
                github - jass-challenge
              </a>
              &nbsp;|&nbsp;
              <a href="https://bitbucket.org/jass-challenge/" target="_blank">
                bitbucket - jass-challenge
              </a>
            </p>
            <h2 className="section-heading">What programming languages are allowed?</h2>
            <p className="lead">
              Theoretically any programming language that can communicate over a Websocket can be used.<br />
              But for this tournament we have to run your bots in a closed environment. For the sake of simplicity we will only allow:
              <ul>
                <li>JavaScript</li>
                <li>Java</li>
                <li>C#</li>
              </ul>
            </p>
            <h2 className="section-heading">How will my bot run?</h2>
            <p className="lead">
              On the tournament days we will launch two instances of your bot that connect to the same tournament. These two instances will always play together against two instances of the bots of your opponents.
              Please do not try to communicate with your other instance. We will run them in different docker containers and verify your code to make sure nobody cheats in the tournament.
            </p>
            <h2 className="section-heading">How can I run it locally?</h2>
            <p className="lead">
              To run and test your bot locally, you need to have the&nbsp;
              <a href="https://github.com/webplatformz/challenge" target="_blank">
                jass-server
              </a>
              &nbsp;up and running on your computer. Follow the instructions from our&nbsp;
              <a href="https://github.com/webplatformz/challenge-client-js#installation"
                 target="_blank">
                javascript skeleton
              </a>
              &nbsp;or the&nbsp;
              <a href="https://github.com/webplatformz/challenge-client-java#getting-started"
                 target="_blank">
                java skeleton
              </a>
              .
            </p>
            <h2 className="section-heading">What are the rules?</h2>
            <p className="lead">
              Check them out on the wiki of our <a href="https://github.com/webplatformz/challenge/wiki/Jass-Rules" target="_blank">Github repository</a>.
            </p>
            <h2 className="section-heading">When does it start?</h2>
            <p className="lead">
              After signing up, you can immediately start hacking. Here is the timetable for the trainings and the
              final:
            </p>
            <table className="table table-striped table-bordered timetable">
              <tbody>
              <tr>
                <td>Now - 08.05.<br />@9am</td>
                <td>Implement your first bot version</td>
              </tr>
              <tr>
                <td>09.05.</td>
                <td>
                  Training #1 - See how your bot v0.1 performs against others<br />
                  There will be no event for this training. We will run the Tournament and then publish the results via email. You will get access to the logs of all games in this Tournament.
                </td>
              </tr>
              <tr>
                <td>09.05. - 15.05.<br />@9am</td>
                <td>Improve your bot to v0.9 so it will rock next training day</td>
              </tr>
              <tr>
                <td>16.05.</td>
                <td>
                  Training #2 - See how your bot v0.9 performs against others<br />
                  There will be no event for this training. We will run the Tournament and then publish the results via email. You will get access to the logs of all games in this Tournament.
                </td>
              </tr>
              <tr>
                <td>16.05. - 21.05.<br />@5pm</td>
                <td>Improve your bot to crush your competitors</td>
              </tr>
              <tr>
                <td>22.05.<br />@18:00</td>
                <td>
                  Final - Find out if you won the challenge during the awards ceremony, meet your competitors and the
                  creators of the Jass-Challenge and enjoy the evening with some food and drinks. You can find the detailed agenda here: <a href="https://www.zuehlke.com/ch/de/jass-challenge/">https://www.zuehlke.com/ch/de/jass-challenge/</a>
                </td>
              </tr>
              </tbody>
            </table>
            <h2 className="section-heading">Any Questions?</h2>
            <p className="lead">
              Get in touch with us: <a href="mailto:jass-challenge.zch@zuehlke.com">jass-challenge.zch@zuehlke.com</a>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

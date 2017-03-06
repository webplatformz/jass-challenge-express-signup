import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default () => (
    <div>
        <a name="bots"></a>
        <div className="content-section-b">
            <div className="container">
                <Row>
                    <Col lg={8} sm={9}>
                        <hr className="section-heading-spacer" />
                        <div className="clearfix"></div>
                        <h2 className="section-heading">Who can participate?</h2>
                        <p className="lead">
                            Every enrolled student in switzerland can participate in our challenge. It is also
                            welcome if you participate as a small team of students.
                        </p>
                        <h2 className="section-heading">What can I win?</h2>
                        <p className="lead">
                            At the end of the tournament the winning student / team will get a lot of fame, 2 GoPro
                            cameras as well as the opportunity to participate 1-2 days at one of our company’s
                            educational camps.
                        </p>
                        <h2 className="section-heading">How can I register?</h2>
                        <p className="lead">
                            Simply sign in with either your github or bitbucket account. Create a
                            repo for your bot or simply clone one of our skeleton bots.<br />
                            <a href="https://github.com/webplatformz/challenge-client-js" target="_blank">
                                JavaScript
                            </a>
                            &nbsp;|&nbsp;
                            <a href="https://github.com/webplatformz/challenge-client-java" target="_blank">
                                Java
                            </a>
                            &nbsp;|&nbsp;
                            <a href="tbd" target="_blank">
                                C#
                            </a>
                        </p>
                        <p className="lead">
                            Save your repo-url in your profile and give our tournament account READ rights.<br />
                            <a href="https://github.com/jass-challenge" target="_blank">
                                github - jass-challenge
                            </a>
                            &nbsp;|&nbsp;
                            <a href="https://bitbucket.org/jass-challenge/" target="_blank">
                                bitbucket - jass-challenge
                            </a>
                        </p>
                        <h2 className="section-heading">How can i run it locally?</h2>
                        <p className="lead">
                            To run/test your bot locally, you need to have the&nbsp;
                            <a href="https://github.com/webplatformz/challenge" target="_blank">
                                jass-server
                            </a> up and running on your machine. Follow the instruction from our&nbsp;
                            <a href="https://github.com/webplatformz/challenge-client-js#installation"
                               target="_blank">
                                javascript skeleton
                            </a>
                            &nbsp;or the java skeleton.
                        </p>
                        <h2 className="section-heading">When does it start?</h2>
                        <p className="lead">
                            After signing up, you can immediately start hacking. See following timetable for
                            milestones until the final day on 22.05.
                        </p>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td>Now - 08.05. @09:00</td>
                                <td>Implement your first Bot version</td>
                            </tr>
                            <tr>
                                <td>09.05</td>
                                <td>Training #1 - See how your Bot v0.1 performs against others</td>
                            </tr>
                            <tr>
                                <td>09.05 - 15.05. @09:00</td>
                                <td>Improve your Bot to v0.9 so it will rock next training day</td>
                            </tr>
                            <tr>
                                <td>16.05</td>
                                <td>Training #2 - See how your Bot v0.9 performs against others</td>
                            </tr>
                            <tr>
                                <td>16.05 - 21.05. @17:00</td>
                                <td>Further improve your Bot to crush any competitors</td>
                            </tr>
                            <tr>
                                <td>22.05 @18:00</td>
                                <td><b>Final</b> - Take part at our Zühlke-Jass-Event to collect your price and fame
                                    if your Bot v1.0 wins the tournament
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col lg={2} lgOffset={2} sm={3}>
                        <h5>JavaScript Bot</h5>
                        <h5>Java Bot</h5>
                        <h5>C# Bot</h5>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
);

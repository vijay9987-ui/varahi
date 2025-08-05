import React from 'react';
import { Container, Card } from 'react-bootstrap';

const PrivacyAndPolicy = () => {
    return (
        <Container className="py-5">
            <Card className="shadow border-0 rounded-4">
                <Card.Header className="bg-white border-bottom-0 text-center py-4">
                    <h1 className="fw-bold text-dark mb-0">Privacy Policy</h1>
                </Card.Header>

                <Card.Body className="px-md-5 py-4">
                    {/* Introduction */}
                    <p className="text-muted fs-5 mb-5">
                        At <strong>VSD Cars</strong>, we respect your privacy and are committed
                        to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your data when you use our App.
                    </p>

                    {/* Section 1: Collection of Personal Data */}
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold text-dark mb-3">1. Collection of Personal Data</h2>
                        <p>We collect personal data that you provide to us when you:</p>
                        <ul>
                            <li>Create an account on the App</li>
                            <li>Fill out a profile or registration form</li>
                            <li>Upload content to the App</li>
                            <li>Contact us with a question or request</li>
                        </ul>
                        <p>The personal data we collect may include:</p>
                        <ul>
                            <li>Your name and contact information (userName, email address, phone number)</li>
                            <li>Your profile information (Profile Image)</li>
                            <li>Your Aadhar and Driving License</li>
                            <li>Your current location</li>
                            <li>Any other information you choose to provide to us</li>
                        </ul>
                    </section>

                    {/* Section 2: Use of Personal Data */}
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold text-dark mb-3">2. Use of Personal Data</h2>
                        <p>We use your personal data for the following purposes:</p>
                        <ul>
                            <li>To provide access to the App and its features</li>
                            <li>For account creation and sign-up verification</li>
                            <li>To display your profile information</li>
                            <li>For customer verification using Aadhar and Driving License</li>
                            <li>To suggest nearby available cars based on location</li>
                            <li>To personalize your experience on the App</li>
                            <li>To respond to your questions and support requests</li>
                            <li>To improve the App and enhance functionality</li>
                        </ul>
                    </section>

                    {/* Section 3: Protection of Personal Data */}
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold text-dark mb-3">3. Protection of Personal Data</h2>
                        <p>We take reasonable measures to protect your personal data from unauthorized access, use, or disclosure. These include:</p>
                        <ul>
                            <li>Encrypting your personal data during transmission</li>
                            <li>Storing your data on secure servers</li>
                        </ul>
                    </section>

                    {/* Section 4: Sharing of Personal Data */}
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold text-dark mb-3">4. Sharing of Personal Data</h2>
                        <p>We may share your data with third-party service providers who help us operate and support the App, including:</p>
                        <ul>
                            <li>Cloud storage providers</li>
                            <li>Customer support platforms</li>
                        </ul>
                        <p>We may also share your data with law enforcement or regulatory agencies if legally required.</p>
                    </section>

                    {/* Section 5: Your Rights */}
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold text-dark mb-3">5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal data</li>
                            <li>Correct or update your personal data</li>
                            <li>Delete your personal data</li>
                            <li>Delete your personal account</li>
                        </ul>
                        <p>
                            To exercise your rights, please contact us at:{" "}
                            <a
                                href="mailto:contact.vsdcars@gmail.com"
                                className="text-decoration-underline"
                            >
                                contact.vsdcars@gmail.com
                            </a>
                        </p>
                        <p>
                            Or open Gmail to compose directly:{" "}
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=contact.vsdcars@gmail.com&su=Regarding%20Privacy%20Policy&body=Hello%2C%20I%20would%20like%20to..."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click to compose in Gmail
                            </a>
                        </p>
                    </section>

                    {/* Section 6: Changes to Privacy Policy */}
                    <section>
                        <h2 className="h5 fw-semibold text-dark mb-3">6. Changes to Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. If any significant changes are made, we’ll notify you via email or through an App notice.
                            By continuing to use the App, you acknowledge and agree to the updated terms.
                        </p>
                    </section>
                </Card.Body>

                <Card.Footer className="bg-light text-muted text-center py-3 small">
                    Last updated: {new Date().toLocaleDateString()}
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default PrivacyAndPolicy;

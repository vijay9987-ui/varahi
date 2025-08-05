import React from 'react';
import { Container, Card } from 'react-bootstrap';

const TermsAndConditions = () => {
    return (
        <Container className="py-5">
            <Card className="shadow border-0 rounded-4">
                <Card.Header className="bg-white border-bottom-0 text-center py-4">
                    <h1 className="fw-bold text-dark mb-0">Terms and Conditions</h1>
                </Card.Header>
                <Card.Body className="px-md-5 py-4">
                    <p className="text-muted fs-5 mb-5">
                        These Terms and Conditions ("Terms") govern your use of the VSD Cars application ("App"). By accessing or using the App, you agree to comply with and be bound by these Terms.
                    </p>

                    {/* Section 1 */}
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold text-dark mb-3">1. Acceptance of Terms</h2>
                        <p>
                            By creating an account or using any part of the App, you accept these Terms in full. If you disagree with any part of the Terms, you must not use the App.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold text-dark mb-3">2. Eligibility</h2>
                        <p>
                            You must be at least 18 years old and possess a valid Driving License and Aadhar to use the App’s services.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold text-dark mb-3">3. User Responsibilities</h2>
                        <ul>
                            <li>You agree to provide accurate and complete information during registration.</li>
                            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                            <li>You must not misuse the App or its features in any illegal or unauthorized way.</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold text-dark mb-3">4. Verification & Documents</h2>
                        <p>
                            We require users to upload their Aadhar and Driving License for identity and driving eligibility verification. These documents are securely stored and used only for the intended verification purpose.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold text-dark mb-3">5. Booking & Usage</h2>
                        <ul>
                            <li>Users must ensure the vehicle is handled with care during the booking period.</li>
                            <li>Any damage caused during the rental period may result in charges as per company policy.</li>
                            <li>Location data may be used to suggest nearby available vehicles.</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold text-dark mb-3">6. Termination</h2>
                        <p>
                            We reserve the right to suspend or terminate your account for any breach of these Terms or misuse of the App, with or without notice.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold text-dark mb-3">7. Limitation of Liability</h2>
                        <p>
                            VSD Cars is not liable for any indirect, incidental, or consequential damages arising from your use of the App.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold text-dark mb-3">8. Updates to Terms</h2>
                        <p>
                            These Terms may be updated periodically. Continued use of the App after such updates constitutes your agreement to the revised Terms.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="h5 fw-semibold text-dark mb-3">9. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about these Terms, please contact us at:{" "}
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=contact.vsdcars@gmail.com&su=Terms%20and%20Conditions&body=Hello"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                contact.vsdcars@gmail.com
                            </a>
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

export default TermsAndConditions;

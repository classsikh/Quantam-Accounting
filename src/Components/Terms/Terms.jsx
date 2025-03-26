import React from "react";

function Terms() {
    return (
        <div>
            {/* Header Section */}
            <div className="bg-white border-gray-200 px-4 h-20 lg:px-6 py-2.5 mt-4">
                <h1 className="font-helvetica text-3xl text-center font-bold">Terms and Conditions</h1>
                <h3 className="font-helvetica text-gray-500 mt-2 text-center">
                    Let's Build Trust Together
                </h3>
                <img src="/Aboutus1.jpg" className="w-full h-full mb-4" alt="About Us" />
            </div>

            {/* Terms and Conditions Content */}
            <div className="p-6">
                <h2 className="text-3xl mt-8 text-center font-semibold">
                    Quantum Accounting and Business Solution
                </h2>

                <div className="mt-6  leading-relaxed">
                    <p><strong>1. Introduction</strong><br/>
                    Welcome to <strong>Quantum Accounting and Business Solution</strong>. By using our website and services, you agree to comply with these terms.</p>

                    <p><strong>2. Services</strong><br/>
                    We provide professional accounting, bookkeeping, and financial services on an outsourcing basis.</p>

                    <p><strong>3. Client Responsibilities</strong></p>
                    <ul className="list-disc ml-5">
                        <li>Clients must provide accurate and timely financial information.</li>
                        <li>Compliance with local tax laws and regulations is the client’s responsibility.</li>
                        <li>Delays in providing information may impact service delivery.</li>
                    </ul>

                    <p><strong>4. Payment Terms</strong></p>
                    <ul className="list-disc ml-5">
                        <li>Payment terms are outlined in the service agreement.</li>
                        <li>Invoices must be paid within the specified period to avoid late fees.</li>
                        <li>Non-payment may result in service suspension or termination.</li>
                    </ul>

                    <p><strong>5. Confidentiality</strong></p>
                    <ul className="list-disc ml-5">
                        <li>We implement security measures to protect client data.</li>
                        <li>Both parties must not disclose sensitive financial information to unauthorized third parties.</li>
                    </ul>

                    <p><strong>6. Limitation of Liability</strong><br/>
                    We are not responsible for financial losses resulting from decisions based on our reports. Our liability is limited to the amount paid for services in the last three months.</p>

                    <p><strong>7. Termination</strong><br/>
                    Either party may terminate the agreement with prior written notice. All outstanding fees must be settled before the final handover of records.</p>

                    <p><strong>8. Intellectual Property</strong><br/>
                    All reports, models, and documents created by us remain our intellectual property unless otherwise agreed. Clients may use them solely for internal business purposes.</p>

                    <p><strong>9. Compliance with Laws</strong><br/>
                    We comply with applicable financial regulations. Clients are responsible for their tax law compliance.</p>

                    <p><strong>10. Dispute Resolution</strong><br/>
                    Disputes shall first be resolved through negotiation. If unresolved, arbitration will follow as per applicable laws.</p>

                    <p><strong>11. Changes to Terms & Conditions</strong><br/>
                    We reserve the right to update these Terms. Continued use of our services after updates implies acceptance.</p>

                    <p><strong>12. Contact Information</strong><br/>
                    📍 Quantum Accounting and Business Solution<br/>
                    📧 info@quantumabs.com<br/>
                    📍 PN 94, Shiv Prem Vatika, Mandideep, Bhopal, MP - 462046<br/>
                    📞 +91 8299893026</p>
                </div>
            </div>
        </div>
    );
}

export default Terms;

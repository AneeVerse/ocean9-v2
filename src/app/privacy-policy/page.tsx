"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#045cb9] via-[#024594] to-[#002365] text-white flex flex-col selection:bg-cyan-300 selection:text-[#001742]">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-32 pb-6 sm:pt-36 sm:pb-8 bg-transparent">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-roboto text-sm sm:text-base text-cyan-200 font-medium mt-2">
            Last Updated: 28-07-2026
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 py-6 sm:py-10 relative z-10">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#001742]/85 backdrop-blur-md border border-white/25 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 font-roboto text-white/95 text-sm sm:text-[15px] leading-relaxed">
            
            {/* Introductory Draft Notice */}
            <p className="text-white/95 leading-relaxed">
              This draft is designed for Ocean 9’s enquiry forms, career applications, website analytics and contact tools. It should be checked against the final website setup before publishing. India’s Digital Personal Data Protection Act, 2023 and Digital Personal Data Protection Rules, 2025 cover the handling of digital personal data.
            </p>

            {/* 1. Introduction */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                1. Introduction
              </h2>
              <p>Ocean 9 Offshore Services Pvt. Ltd. respects your privacy.</p>
              <p>
                This Privacy Policy explains what information we collect, why we collect it and how we protect it when you use our website.
              </p>
              <p>By using this website, you agree to this Privacy Policy.</p>
            </section>

            {/* 2. Information We Collect */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                2. Information We Collect
              </h2>
              <p>We may collect information that you provide through our website, including:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-white/90">
                <li>Full name</li>
                <li>Company name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Project location</li>
                <li>Service requirement</li>
                <li>Project details</li>
                <li>Resume and certificates</li>
                <li>Documents uploaded with an enquiry</li>
                <li>Any message you send to us</li>
              </ul>
              <p className="pt-2">We may also collect basic technical information such as:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-white/90">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device type</li>
                <li>Pages visited</li>
                <li>Time spent on the website</li>
                <li>Website traffic data</li>
              </ul>
            </section>

            {/* 3. How We Collect Information */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                3. How We Collect Information
              </h2>
              <p>We may collect information when you:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-white/90">
                <li>Submit an enquiry form</li>
                <li>Apply for a job</li>
                <li>Upload a resume or document</li>
                <li>Contact us by email</li>
                <li>Contact us through WhatsApp</li>
                <li>Call our team</li>
                <li>Use or browse our website</li>
              </ul>
            </section>

            {/* 4. How We Use Your Information */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                4. How We Use Your Information
              </h2>
              <p>We may use your information to:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-white/90">
                <li>Respond to your enquiry</li>
                <li>Understand your project requirement</li>
                <li>Prepare a quotation</li>
                <li>Contact you about our services</li>
                <li>Review job applications</li>
                <li>Arrange interviews</li>
                <li>Improve our website</li>
                <li>Maintain website security</li>
                <li>Meet legal or business requirements</li>
              </ul>
              <p className="pt-1">We will only use the information for a clear and valid purpose.</p>
            </section>

            {/* 5. Project Documents */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                5. Project Documents
              </h2>
              <p>
                You may submit drawings, work scopes, photographs or other project documents through the website.
              </p>
              <p>These documents will only be used to:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-white/90">
                <li>Understand the project</li>
                <li>Review technical requirements</li>
                <li>Prepare a response or quotation</li>
                <li>Communicate with you about the project</li>
              </ul>
              <p className="pt-1 text-white/80">Please do not upload confidential or sensitive information unless it is required.</p>
            </section>

            {/* 6. Career Applications */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                6. Career Applications
              </h2>
              <p>When you apply for a job, we may collect:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-white/90">
                <li>Your resume</li>
                <li>Contact details</li>
                <li>Work experience</li>
                <li>Qualifications</li>
                <li>Medical or training certificates</li>
                <li>Diving or marine certificates</li>
                <li>Passport or travel details, when required</li>
              </ul>
              <p className="pt-1">
                This information will be used only for recruitment, document review and project mobilisation.
              </p>
              <p>Submitting an application does not guarantee employment.</p>
            </section>

            {/* 7. Sharing of Information */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                7. Sharing of Information
              </h2>
              <p>We may share information only when required with:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-white/90">
                <li>Ocean 9 employees</li>
                <li>Project or recruitment teams</li>
                <li>Website and hosting service providers</li>
                <li>Technical support providers</li>
                <li>Government or legal authorities</li>
                <li>Professional advisers</li>
                <li>Business partners involved in your project</li>
              </ul>
              <p className="pt-1 font-medium text-cyan-200">We do not sell or rent personal information.</p>
            </section>

            {/* 8. Third-Party Services */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                8. Third-Party Services
              </h2>
              <p>Our website may use third-party services such as:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-white/90">
                <li>Google Maps</li>
                <li>Website analytics</li>
                <li>Email services</li>
                <li>Hosting services</li>
                <li>WhatsApp</li>
                <li>Contact-form services</li>
                <li>Video platforms</li>
              </ul>
              <p className="pt-1">
                These services may collect information according to their own privacy policies.
              </p>
              <p>Ocean 9 is not responsible for the privacy practices of external websites or platforms.</p>
            </section>

            {/* 9. Cookies */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                9. Cookies
              </h2>
              <p>Cookies are small files stored on your device.</p>
              <p>We may use cookies to:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-white/90">
                <li>Keep the website working properly</li>
                <li>Understand website traffic</li>
                <li>Improve website performance</li>
                <li>Remember basic preferences</li>
                <li>Protect the website from misuse</li>
              </ul>
              <p className="pt-1 text-white/80">
                You can control or block cookies through your browser settings. Some website features may not work properly when cookies are disabled.
              </p>
            </section>

            {/* 10. Data Security */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                10. Data Security
              </h2>
              <p>We take reasonable steps to protect personal information from:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-white/90">
                <li>Unauthorised access</li>
                <li>Loss</li>
                <li>Misuse</li>
                <li>Damage</li>
                <li>Unwanted changes</li>
                <li>Unauthorised sharing</li>
              </ul>
              <p className="pt-1 text-white/80">However, no website or online system can guarantee complete security.</p>
            </section>

            {/* 11. How Long We Keep Information */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                11. How Long We Keep Information
              </h2>
              <p>We keep information only for as long as it is needed for:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-white/90">
                <li>Responding to enquiries</li>
                <li>Managing projects</li>
                <li>Recruitment</li>
                <li>Legal requirements</li>
                <li>Business records</li>
                <li>Resolving disputes</li>
              </ul>
              <p className="pt-1 text-white/80">Information that is no longer required may be safely deleted.</p>
            </section>

            {/* 12. Your Choices and Rights */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                12. Your Choices and Rights
              </h2>
              <p>You may contact us to:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-white/90">
                <li>Ask what information we hold about you</li>
                <li>Correct incorrect information</li>
                <li>Update your details</li>
                <li>Request deletion of your information</li>
                <li>Withdraw your consent, where applicable</li>
                <li>Raise a privacy concern</li>
              </ul>
              <p className="pt-1 text-white/80">Some information may need to be kept when required by law or for an active project.</p>
            </section>

            {/* 13. Children’s Privacy */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                13. Children’s Privacy
              </h2>
              <p>This website is intended for business users and job applicants.</p>
              <p>We do not knowingly collect personal information from children.</p>
            </section>

            {/* 14. External Links */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                14. External Links
              </h2>
              <p>Our website may contain links to other websites.</p>
              <p>
                Ocean 9 is not responsible for the content, security or privacy practices of external websites.
              </p>
              <p className="text-white/80">Please review their policies before sharing personal information.</p>
            </section>

            {/* 15. Changes to This Policy */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                15. Changes to This Policy
              </h2>
              <p>We may update this Privacy Policy when our website, services or legal requirements change.</p>
              <p>The latest version will always be available on this page with the updated date.</p>
            </section>

            {/* 16. Contact Us */}
            <section className="space-y-3 pt-2">
              <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">
                16. Contact Us
              </h2>
              <p>For questions, corrections or privacy requests, contact:</p>
              <p className="font-semibold text-white">Ocean 9 Offshore Services Pvt. Ltd.</p>
              
              <div className="space-y-1 text-white/90">
                <p><strong className="text-white">Email:</strong></p>
                <p>
                  <a href="mailto:info@ocean9offshoreservices.com" className="text-cyan-300 hover:underline">
                    info@ocean9offshoreservices.com
                  </a>
                </p>
              </div>

              <div className="space-y-1 text-white/90">
                <p><strong className="text-white">Phone:</strong></p>
                <p>
                  <a href="tel:02227701886" className="text-cyan-300 hover:underline">
                    022-27701886
                  </a>
                </p>
              </div>

              <div className="space-y-1 text-white/90">
                <p><strong className="text-white">Mobile:</strong></p>
                <p>+91 9320168056</p>
                <p>+91 9022433033</p>
              </div>

              <div className="space-y-1 text-white/90">
                <p><strong className="text-white">Office Address:</strong></p>
                <p>
                  Office No. 110, First Floor,<br />
                  Seawoods Corner CHS, Plot No. 19A,<br />
                  Sector 25, Seawoods, Nerul East,<br />
                  Navi Mumbai – 400706, Maharashtra, India.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

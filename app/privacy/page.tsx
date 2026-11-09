import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  LEGAL_NAME, ADDRESS, PHONE_DISPLAY, PHONE_TEL, EMAIL,
  PROGRAM_NAME, ACCOUNT_NOTIFICATIONS_DEF, CUSTOMER_CARE_DEF, NOT_INCLUDED_LINE,
  HEALTH_INFO_NOTE,
} from '../lib/siteContent';

export const metadata: Metadata = {
  title: 'Privacy Policy — Omohan',
  description: 'Omohan is a care-navigation employee benefit. Employees get a dedicated human navigator for childcare, eldercare, and family care needs.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Privacy Policy</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Last Updated: November 9, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>1. Introduction</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Omohan (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides human care navigation as an employee benefit offered through enrolled employers. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service and website at {`www.omohan.com`}. By using our service, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>2. Information We Collect</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>When you sign up for or use our service, we may collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>Name, work email, and company</li>
            <li>Employee ID</li>
            <li>Mobile phone number, if provided</li>
            <li>Caregiving needs and family information you choose to share with your navigator</li>
            <li>SMS consent preferences (Account Notifications and/or Customer Care)</li>
            <li>Usage and device data</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>3. How We Use Information</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>To provide human care navigation</li>
            <li>To send opted-in text messages</li>
            <li>For account administration and security</li>
            <li>To improve the service</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>4. Sensitive Information</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Care details you share are used only to provide care navigation. We share this information with care providers only with your permission. We never sell this information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>5. What Your Employer Can See</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Your employer can see your enrollment and participation status only. Your employer never sees your care details or conversations with your navigator.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>6. Sharing</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#6B7280' }}>
            <li>With service providers who are bound by confidentiality obligations</li>
            <li>With care providers, only with your permission</li>
            <li>As required by law</li>
          </ul>
          <p className="mb-6 font-semibold" style={{ color: '#1F2937' }}>
            Text messaging originator opt-in data and consent will not be shared with any third parties. All the above categories exclude text messaging originator opt-in data and consent.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }} id="sms">7. SMS Messaging</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            If you opt in to receive SMS messages from Omohan as part of {PROGRAM_NAME}, the following terms apply:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#6B7280' }}>
            <li>{ACCOUNT_NOTIFICATIONS_DEF}</li>
            <li>{CUSTOMER_CARE_DEF}</li>
            <li>{NOT_INCLUDED_LINE}</li>
            <li>Message and data rates may apply. Message frequency varies.</li>
            <li>To opt out, reply STOP to any message. To resubscribe, reply START. To get help, reply HELP or contact us at {EMAIL}.</li>
            <li><strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong></li>
            <li>Opting in to SMS is optional and not required to use our service. Consent is not a condition of purchase.</li>
          </ul>
          <p className="mb-6" style={{ color: '#6B7280' }}>{HEALTH_INFO_NOTE}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>8. Data Security</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We use reasonable administrative, technical, and physical safeguards to protect your information. No method of transmission or storage is completely secure.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>9. Your Rights</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You may request access to, correction of, or deletion of your information, and you may opt out of SMS messages at any time, by contacting us at {EMAIL}.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>10. Children&apos;s Privacy</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            The Service is for adults 18 years of age and older. Any information about children is provided by the parent or guardian.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>11. Changes</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised &quot;Last Updated&quot; date.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>12. Contact Us</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            If you have questions about this Privacy Policy, please contact us at:<br />
            {LEGAL_NAME}<br />
            {ADDRESS}<br />
            Phone: <a href={`tel:${PHONE_TEL}`} style={{ color: '#2D7D6F' }}>{PHONE_DISPLAY}</a><br />
            Email: <a href={`mailto:${EMAIL}`} style={{ color: '#2D7D6F' }}>{EMAIL}</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}


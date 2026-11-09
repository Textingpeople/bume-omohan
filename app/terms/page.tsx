import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  LEGAL_NAME, ADDRESS, PHONE_DISPLAY, PHONE_TEL, EMAIL,
  PROGRAM_NAME, ACCOUNT_NOTIFICATIONS_DEF, CUSTOMER_CARE_DEF, NOT_INCLUDED_LINE,
  HEALTH_INFO_NOTE, SAMPLE_MESSAGES, EMERGENCY_DISCLAIMER, SCOPE_DISCLAIMER,
} from '../lib/siteContent';

export const metadata: Metadata = {
  title: 'Terms of Service — Omohan',
  description: 'Omohan is a care-navigation employee benefit. Employees get a dedicated human navigator for childcare, eldercare, and family care needs.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Terms of Service</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Last Updated: November 9, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>1. Acceptance of Terms</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            By accessing or using Omohan&apos;s service (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not access or use the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>2. Description of Service</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Omohan is a care-navigation employee benefit offered through enrolled employers. Each enrolled employee is paired with a dedicated human care navigator — a real person, not a chatbot — who helps research options, vet providers, and build a personalized care plan for childcare, eldercare, special-needs support, new-parent needs, and family transitions. Navigators provide guidance and referrals only. Omohan does not provide medical care, therapy, legal advice, or insurance, does not sell or enroll anyone in Medicare, Medicaid, or insurance plans, and is not an emergency service. Only employees of enrolled employers may use the Service; Omohan does not offer public or consumer signup.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>3. Eligibility</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You must be at least 18 years old, an employee of an employer enrolled with Omohan, and in possession of a valid Employee ID issued by your employer to use the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>4. Care Navigation Scope</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>{SCOPE_DISCLAIMER}</p>
          <p className="mb-4" style={{ color: '#6B7280' }}>{EMERGENCY_DISCLAIMER}</p>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You are solely responsible for all care decisions. Omohan does not guarantee any third-party provider and is not responsible for the services such providers deliver.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }} id="sms">5. SMS Communications</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            {PROGRAM_NAME} is an optional SMS program for enrolled employees who opt in during signup.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#6B7280' }}>
            <li>{ACCOUNT_NOTIFICATIONS_DEF}</li>
            <li>{CUSTOMER_CARE_DEF}</li>
            <li>{NOT_INCLUDED_LINE}</li>
          </ul>
          <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#6B7280' }}>
            <li>Message and data rates may apply.</li>
            <li>Message frequency varies.</li>
            <li>Reply STOP to opt out (you&apos;ll receive one confirmation).</li>
            <li>Reply START to resubscribe.</li>
            <li>Reply HELP or email {EMAIL} for help.</li>
            <li>Opting in is optional and not required to use Omohan.</li>
            <li>Consent is not a condition of purchase.</li>
            <li>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
          </ul>
          <p className="mb-4" style={{ color: '#6B7280' }}>{HEALTH_INFO_NOTE}</p>
          <p className="mb-2 font-semibold" style={{ color: '#1F2937' }}>Sample messages:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            {SAMPLE_MESSAGES.map((msg) => <li key={msg}>&quot;{msg}&quot;</li>)}
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>6. Acceptable Use</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You agree not to misuse the Service, impersonate another person, share your Employee ID with anyone not authorized by your employer, or use the Service for any unlawful purpose.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>7. Termination</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Omohan may suspend or terminate your access to the Service if your employer&apos;s enrollment ends, if your Employee ID is no longer valid, or if you violate these Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>8. Disclaimer of Warranties</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            The Service is provided &quot;as is&quot; without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>9. Limitation of Liability</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Omohan shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service, including damages arising from your interactions with third-party care providers.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>10. Changes to Terms</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We may update these Terms from time to time. We will post the updated Terms on this page with a revised &quot;Last Updated&quot; date. Continued use of the Service after changes constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>11. Governing Law</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-law principles.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>12. Contact</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            For questions about these Terms, contact {LEGAL_NAME} at {ADDRESS}, by phone at{' '}
            <a href={`tel:${PHONE_TEL}`} style={{ color: '#2D7D6F' }}>{PHONE_DISPLAY}</a>, or by email at{' '}
            <a href={`mailto:${EMAIL}`} style={{ color: '#2D7D6F' }}>{EMAIL}</a>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}


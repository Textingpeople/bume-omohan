import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  LEGAL_NAME, PHONE_DISPLAY, EMAIL,
  PROGRAM_NAME, ACCOUNT_NOTIFICATIONS_DEF, CUSTOMER_CARE_DEF, NOT_INCLUDED_LINE,
  HEALTH_INFO_NOTE, SAMPLE_MESSAGES, EMERGENCY_DISCLAIMER,
} from '../lib/siteContent';

export const metadata: Metadata = {
  title: 'SMS Program — Omohan',
  description: 'Optional account notifications and care-navigator messages for enrolled employees.',
};

const AT_A_GLANCE: [string, string][] = [
  ['Program name', PROGRAM_NAME],
  ['Sender', LEGAL_NAME],
  ['Message types', `${ACCOUNT_NOTIFICATIONS_DEF} ${CUSTOMER_CARE_DEF}`],
  ['Not included', NOT_INCLUDED_LINE],
  ['Who receives', 'Enrolled employees who opt in'],
  ['How to opt in', 'Two optional, unchecked checkboxes on /signup step 3, one per message type'],
  ['Frequency', 'Varies'],
  ['Cost', 'Message and data rates may apply'],
  ['Opt out', 'Reply STOP'],
  ['Resubscribe', 'Reply START'],
  ['Help', `Reply HELP, email ${EMAIL}, or call ${PHONE_DISPLAY}`],
  ['Consent', 'Not a condition of purchase'],
  ['Health information', HEALTH_INFO_NOTE],
  ['Data sharing', 'Mobile information and opt-in consent are never shared with or sold to third parties.'],
];

const TRIGGERS: [string, string][] = [
  ['Account activated', 'Welcome message'],
  ['Navigator assigned', 'Navigator introduction'],
  ['Check-in scheduled', 'Reminder'],
  ['Employee texts navigator', 'Navigator reply'],
  ['New sign-in', 'Security alert'],
];

export default function SmsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Omohan SMS Program</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            Optional account notifications and care-navigator messages for enrolled employees.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>At a Glance</h2>
        <div className="overflow-hidden rounded-xl border" style={{ borderColor: '#E5E7EB' }}>
          <table className="w-full text-sm">
            <tbody>
              {AT_A_GLANCE.map(([label, value], i) => (
                <tr key={label} style={{ backgroundColor: i % 2 === 0 ? '#F9FAFB' : '#FFFFFF' }}>
                  <td className="px-4 py-3 font-semibold align-top w-1/4" style={{ color: '#1F2937' }}>{label}</td>
                  <td className="px-4 py-3 align-top" style={{ color: '#6B7280' }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>When We Text You</h2>
        <div className="overflow-hidden rounded-xl border" style={{ borderColor: '#E5E7EB' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: '#F0FDF9' }}>
                <th className="px-4 py-3 text-left font-semibold" style={{ color: '#1F2937' }}>Event</th>
                <th className="px-4 py-3 text-left font-semibold" style={{ color: '#1F2937' }}>Message</th>
              </tr>
            </thead>
            <tbody>
              {TRIGGERS.map(([event, message], i) => (
                <tr key={event} style={{ backgroundColor: i % 2 === 0 ? '#F9FAFB' : '#FFFFFF' }}>
                  <td className="px-4 py-3" style={{ color: '#1F2937' }}>{event}</td>
                  <td className="px-4 py-3" style={{ color: '#6B7280' }}>{message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>Sample Messages</h2>
        <ul className="list-disc pl-6 space-y-3" style={{ color: '#6B7280' }}>
          {SAMPLE_MESSAGES.map((msg) => <li key={msg}>&quot;{msg}&quot;</li>)}
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-base" style={{ color: '#6B7280' }}>
          Read the full program terms in our{' '}
          <Link href="/terms#sms" className="underline font-semibold" style={{ color: '#2D7D6F' }}>Terms of Service</Link>,{' '}
          our <Link href="/privacy" className="underline font-semibold" style={{ color: '#2D7D6F' }}>Privacy Policy</Link>, or{' '}
          <Link href="/contact" className="underline font-semibold" style={{ color: '#2D7D6F' }}>contact us</Link> with questions.
        </p>
      </section>

      <section className="py-10" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs" style={{ color: '#9CA3AF', lineHeight: 1.6 }}>{EMERGENCY_DISCLAIMER}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import { Heart, BookOpen, Phone, CheckCircle, UserCheck, XCircle, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  LEGAL_NAME, ADDRESS, PHONE_DISPLAY, PHONE_TEL, EMAIL,
  EMERGENCY_DISCLAIMER, SCOPE_DISCLAIMER,
} from '../lib/siteContent';

export const metadata: Metadata = {
  title: 'About — Omohan',
  description: 'Omohan is a care-navigation employee benefit. Employees get a dedicated human navigator for childcare, eldercare, and family care needs.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#CCFBF1', color: '#2D7D6F' }}>
            <Heart className="w-4 h-4" fill="#2D7D6F" />
            About Omohan
          </div>
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1A4A42' }}>
            Caregiving Is Hard.<br />
            <span style={{ color: '#2D7D6F' }}>We Make It Manageable.</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#4B7A72' }}>
            Omohan helps working caregivers find and coordinate care, so they can balance work and family.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A4A42' }}>Our Mission</h2>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                Many employees manage caregiving responsibilities for children, aging parents, or family members with special needs. Yet most employers offer little to no support for these challenges.
              </p>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                Omohan partners with employers to provide every employee with a dedicated care navigator — a real human expert who helps research options, vet providers, and create personalized care plans.
              </p>
              <p className="text-lg" style={{ color: '#6B7280' }}>
                The result: employees who feel supported, show up fully at work, and stay longer with employers who care about their whole lives.
              </p>
            </div>
            <div className="rounded-2xl p-10" style={{ backgroundColor: '#1A4A42' }}>
              <h3 className="text-2xl font-bold text-white mb-8">What Omohan Provides</h3>
              <div className="space-y-6">
                {[
                  { icon: UserCheck, label: 'A dedicated human navigator' },
                  { icon: BookOpen, label: 'Personalized care plans' },
                  { icon: Heart, label: 'Support at every life stage' },
                  { icon: CheckCircle, label: 'No IT setup for HR' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2D7D6F' }}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#CCFBF1' }}>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Care Navigation Works */}
      <section className="py-20" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#1A4A42' }}>How Care Navigation Works</h2>
          <p className="text-xl text-center mb-12" style={{ color: '#6B7280' }}>Your dedicated navigator is a real person — not a chatbot — who becomes an expert on your family&apos;s needs.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, step: '1', title: 'Connect Anytime', desc: 'Call, text, or message your navigator whenever you need help. No appointments, no waiting rooms.' },
              { icon: BookOpen, step: '2', title: 'Get Expert Guidance', desc: 'Your navigator researches options, vets providers, and creates a personalized care plan for your situation.' },
              { icon: Heart, step: '3', title: 'Ongoing Support', desc: 'As your needs evolve, your navigator adapts your plan. We&apos;re with you for the long haul — not just a one-time call.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 bg-white rounded-2xl border" style={{ borderColor: '#CCFBF1' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-extrabold text-white" style={{ backgroundColor: '#2D7D6F' }}>
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#CCFBF1' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#2D7D6F' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A4A42' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1A4A42' }}>Care navigation for every stage of life</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Childcare & Daycare Finding', 'Eldercare & Senior Living', 'Special Needs Support',
              'Mental Health Resources', 'Newborn & Parental Leave', 'Urgent Caregiving Changes',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: '#CCFBF1', backgroundColor: '#F0FDF9' }}>
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#2D7D6F' }} />
                <span className="font-medium text-sm" style={{ color: '#1A4A42' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#1A4A42' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" style={{ color: '#99F6E4' }} fill="#99F6E4" />
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Support Your Employees?</h2>
          <p className="text-xl mb-10" style={{ color: '#99F6E4' }}>Give your team the care support they deserve — help your employees balance work and caregiving.</p>
          <Link href="/signup" className="inline-block text-white font-bold px-10 py-4 rounded-xl text-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#2D7D6F' }}>
            Get Care Support
          </Link>
        </div>
      </section>

      {/* What Omohan is — and isn't */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1A4A42' }}>What Omohan is — and isn&apos;t</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold mb-5 flex items-center gap-2" style={{ color: '#1A4A42' }}>
                <CheckCircle className="w-5 h-5" style={{ color: '#2D7D6F' }} /> Omohan is
              </h3>
              <ul className="space-y-3">
                {[
                  'A care-navigation benefit offered through employers',
                  'Dedicated human care navigators',
                  'Personalized care plans and provider referrals',
                  'Support for childcare, eldercare, special needs, new parents',
                  'Optional text notifications and navigator messaging',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#6B7280' }}>
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#2D7D6F' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-5 flex items-center gap-2" style={{ color: '#1A4A42' }}>
                <XCircle className="w-5 h-5" style={{ color: '#9CA3AF' }} /> Omohan is not
              </h3>
              <ul className="space-y-3">
                {[
                  'A medical, mental health, or legal provider',
                  'An insurance company or Medicare/Medicaid enroller',
                  'An emergency service',
                  'AI or a chatbot',
                  'A public or consumer signup service',
                  'A sender of marketing texts',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#6B7280' }}>
                    <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#9CA3AF' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14" style={{ color: '#1A4A42' }}>How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Employer offers Omohan', desc: 'Employers make Omohan available to their employees as a benefit.' },
              { step: '2', title: 'Employee enrolls with Employee ID', desc: "Employees sign up using the Employee ID from their HR onboarding email." },
              { step: '3', title: 'Navigator builds and updates a care plan', desc: "A dedicated human navigator learns the family's needs and keeps the plan current." },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 bg-white rounded-2xl border" style={{ borderColor: '#CCFBF1' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-xl font-extrabold text-white" style={{ backgroundColor: '#2D7D6F' }}>
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1A4A42' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who can use Omohan + Text messages */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1A4A42' }}>Who can use Omohan</h2>
            <p className="text-base" style={{ color: '#6B7280' }}>
              Employees of enrolled employers, using an Employee ID from HR.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: '#1A4A42' }}>
              <MessageSquare className="w-5 h-5" style={{ color: '#2D7D6F' }} /> Text messages
            </h2>
            <p className="text-base" style={{ color: '#6B7280' }}>
              Text messages are optional. Enrolled employees can opt in to account notifications and messages with their care navigator. Omohan does not send marketing texts. See our{' '}
              <Link href="/sms" className="underline font-semibold" style={{ color: '#2D7D6F' }}>SMS Program</Link> for details.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#1A4A42' }}>Contact</h2>
          <p className="text-base" style={{ color: '#6B7280' }}>
            {LEGAL_NAME}<br />
            {ADDRESS}<br />
            <a href={`tel:${PHONE_TEL}`} style={{ color: '#2D7D6F' }}>{PHONE_DISPLAY}</a>
            {' · '}
            <a href={`mailto:${EMAIL}`} style={{ color: '#2D7D6F' }}>{EMAIL}</a>
          </p>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 text-center">
          <p className="text-xs" style={{ color: '#9CA3AF', lineHeight: 1.6 }}>{EMERGENCY_DISCLAIMER}</p>
          <p className="text-xs" style={{ color: '#9CA3AF', lineHeight: 1.6 }}>{SCOPE_DISCLAIMER}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}


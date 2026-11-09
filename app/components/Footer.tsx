import Link from 'next/link';
import Image from 'next/image';
import { LEGAL_NAME, ADDRESS, PHONE_DISPLAY, PHONE_TEL, EMAIL, EMERGENCY_DISCLAIMER, SCOPE_DISCLAIMER } from '../lib/siteContent';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#174B43', color: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="mb-5">
              {/* Heart Leaf Logo — designed for dark backgrounds, no filter needed */}
              <Image
                src="/logo-dark.png"
                alt="Omohan"
                width={140}
                height={44}
                className="h-11 w-auto object-contain"
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '280px', fontFamily: 'Inter, sans-serif' }}>
              Care support for every family. At every stage of life.
            </p>
            <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>
              {LEGAL_NAME}<br />{ADDRESS}<br />
              <a href={`tel:${PHONE_TEL}`} style={{ color: 'rgba(255,255,255,0.45)' }}>{PHONE_DISPLAY}</a><br />
              <a href={`mailto:${EMAIL}`} style={{ color: 'rgba(255,255,255,0.45)' }}>{EMAIL}</a>
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>Company</p>
            <ul className="space-y-3">
              {[{ label: 'About Us', href: '/about' }, { label: 'Product', href: '/product' }, { label: 'Employee Signup', href: '/signup' }, { label: 'Contact Us', href: '/contact' }].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>Legal</p>
            <ul className="space-y-3">
              {[{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Service', href: '/terms' }, { label: 'SMS Program', href: '/sms' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }].map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 space-y-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto' }}>
            {EMERGENCY_DISCLAIMER}
          </p>
          <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto' }}>
            {SCOPE_DISCLAIMER}
          </p>
          <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
            Text messages are optional. Reply STOP to opt out, HELP for help. Msg & data rates may apply.
          </p>
          <p className="text-center text-sm pt-2" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>
            &copy; {new Date().getFullYear()} {LEGAL_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

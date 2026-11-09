import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employee Signup — Omohan',
  description: 'Omohan is a care-navigation employee benefit. Employees get a dedicated human navigator for childcare, eldercare, and family care needs.',
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}

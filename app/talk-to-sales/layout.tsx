import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Demo — Omohan',
  description: 'Omohan is a care-navigation employee benefit. Employees get a dedicated human navigator for childcare, eldercare, and family care needs.',
};

export default function TalkToSalesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

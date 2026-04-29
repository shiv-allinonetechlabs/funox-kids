'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import Accordion from '@/components/Accordion';
import InnerBanner from '@/components/InnerBanner';
import { allRoute } from '@/constants/allRoutes';

const PrivacyStatementParents = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: '2. Which data is used and for what purposes?',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p>
            All features on the Funox Kids Website are available without the
            need for registration. We don&apos;t work with accounts or chat
            boxes. No personal data like emails or phone numbers is requested
            from children.
          </p>
          <p className="text-deepblue font-bold">What we use data for:</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              'Remembering settings & game progress',
              'Handling requests & complaints',
              'Defending legal rights',
              'Complying with legal obligations',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="bg-primary h-2 w-2 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-deepblue font-bold">Data processed:</p>
          <div className="flex flex-wrap gap-2">
            {['IP Address', 'Device ID', 'Browser Type', 'Language'].map(
              (tag, i) => (
                <span
                  key={i}
                  className="bg-secondary/10 text-secondary rounded-lg px-3 py-1 text-sm font-bold"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      ),
    },
    {
      title: '3. How do we obtain data?',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      ),
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-primary/5 rounded-xl p-4">
            <h4 className="text-primary mb-2 font-bold">Directly from you</h4>
            <p className="text-sm">
              Data received straight from you when you contact us via email or
              phone.
            </p>
          </div>
          <div className="bg-secondary/5 rounded-xl p-4">
            <h4 className="text-secondary mb-2 font-bold">Automatically</h4>
            <p className="text-sm">
              Data collected via cookies and similar techniques when your device
              contacts our servers.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: '4. Who do we share data with?',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      content: (
        <div>
          <p>
            We only share data with third parties if it is necessary for
            providing our services. All partners are contractually obliged to
            keep data safe.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-start gap-3">
              <div className="bg-accent/20 mt-1 h-2 w-2 shrink-0 rounded-full" />
              <p>Authorized Funox employees</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-accent/20 mt-1 h-2 w-2 shrink-0 rounded-full" />
              <p>Trusted service providers & sub-contractors</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-accent/20 mt-1 h-2 w-2 shrink-0 rounded-full" />
              <p>Government institutions (only when legally required)</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '5. How do we secure data?',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      content: (
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="rounded-2xl bg-green-500/10 p-6 text-center sm:flex-1">
            <div className="text-3xl">🛡️</div>
            <p className="mt-2 text-sm font-medium">Technical Measures</p>
          </div>
          <div className="rounded-2xl bg-blue-500/10 p-6 text-center sm:flex-1">
            <div className="text-3xl">📋</div>
            <p className="mt-2 text-sm font-medium">Internal Procedures</p>
          </div>
          <div className="rounded-2xl bg-purple-500/10 p-6 text-center sm:flex-1">
            <div className="text-3xl">🚀</div>
            <p className="mt-2 text-sm font-medium">Fast Breach Response</p>
          </div>
        </div>
      ),
    },
    {
      title: '6. To which countries will we transfer data?',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" x2="22" y1="12" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      content: (
        <div>
          <p>
            Data is mostly processed in the Netherlands. For transfers outside
            the EEA, we use strict safety standards:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm">
            <li>European Commission Adequacy decisions</li>
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>Strict GDPR Article 49 safeguards</li>
          </ul>
        </div>
      ),
    },
    {
      title: '7. How long we keep your data?',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      content: (
        <p>
          We don&apos;t keep data longer than necessary. Usually, this is{' '}
          <span className="text-primary font-bold">6 months</span>. However, we
          may keep it longer if required by law or for legal procedures.
        </p>
      ),
    },
    {
      title: '8. Which privacy rights apply?',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 14 4-4" />
          <path d="m3.34 19 1.4-1.4" />
          <path d="m5.88 16.47 1.4-1.4" />
          <path d="M9.2 13.15 13.7 8.65" />
          <path d="M14 11V9" />
          <path d="M14 6.7V5" />
          <path d="M15.41 4.93 17.24 3.1" />
          <path d="M15.7 13.4 17.5 15.2" />
          <path d="m17 11 4-4" />
          <path d="M18.5 15.6 19.9 17" />
          <path d="M19.3 11.5 21.1 13.3" />
          <path d="M20.9 18.4 22.3 19.8" />
          <path d="M5.3 10.6 7.1 12.4" />
          <path d="M7 6.1 8.4 7.5" />
          <path d="M8.1 10.5 9.5 11.9" />
        </svg>
      ),
      content: (
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { label: 'Right of Access', emoji: '👁️' },
            { label: 'Right to Rectification', emoji: '✏️' },
            { label: 'Right to Erasure', emoji: '🗑️' },
            { label: 'Right to Object', emoji: '🚫' },
            { label: 'Right to Restriction', emoji: '⏸️' },
            { label: 'No Automated Decisions', emoji: '🤖' },
          ].map((right, i) => (
            <div
              key={i}
              className="border-glass-border hover:bg-primary/5 flex items-center gap-3 rounded-xl border p-3 transition-colors"
            >
              <span className="text-xl">{right.emoji}</span>
              <span className="font-medium">{right.label}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: '9. Who is responsible?',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      content: (
        <p>
          Funox is responsible for processing data on our website. We ensure
          game developers remove all outgoing links and branding to keep the
          environment safe for children.
        </p>
      ),
    },
    {
      title: '10. How can you contact us?',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p>
            Questions? Email us at{' '}
            <a
              href="mailto:kids@funox.com"
              className="text-primary font-bold underline"
            >
              kids@funox.com
            </a>
          </p>
          <div className="bg-primary/5 text-deepblue rounded-2xl p-6 shadow-inner">
            <p className="font-baloo text-xl font-bold">Funox B.V.</p>
            <p>Spui 10, 1012 WZ Amsterdam</p>
            <p>The Netherlands</p>
            <p className="text-primary mt-3 font-bold">📞 +31 20 2800 870</p>
          </div>
        </div>
      ),
    },
    {
      title: '11. Changes',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
      ),
      content: (
        <p>
          We may update this statement as technologies or laws change. The
          latest version is always here. Important changes will be highlighted!
        </p>
      ),
    },
  ];

  return (
    <section className="container">
      <InnerBanner
        title="Privacy Statement"
        subtitle="Detailed information for parents and guardians about our privacy practices."
        emoji="👨‍👩‍👧‍👦"
        gradientFrom="from-primary"
        gradientTo="to-secondary"
      />

      <div className="border-glass-border bg-glass-bg relative overflow-hidden rounded-[32px] border-6 p-6 shadow-xl backdrop-blur-md md:p-12">
        {/* Version Badge */}
        <div className="mb-4 flex justify-end sm:mb-6 md:mb-8">
          <span className="bg-accent-soft text-accent inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold">
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"
              />
            </svg>
            Version July 2023
          </span>
        </div>

        <article className="max-w-none">
          <div className="space-y-6">
            {/* Section 1 - Introduction (Keeping as a highlighted section) */}
            <section className="border-glass-border bg-primary/5 rounded-[24px] border-2 p-8 shadow-sm">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="bg-primary shadow-primary/20 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl text-white shadow-lg">
                  👋
                </div>
                <div>
                  <h3 className="font-baloo text-deepblue mt-0 text-3xl font-bold">
                    1. General information
                  </h3>
                  <p className="text-muted mt-2 text-lg leading-relaxed">
                    The Funox Kids Website is a safe environment dedicated to
                    visitors under 16 years old. We are especially committed to
                    protecting your child&apos;s privacy.
                  </p>
                </div>
              </div>
              <div className="text-muted mt-6 space-y-4 leading-relaxed">
                <p>
                  This document is drafted for parents or guardians. For
                  children, we also have a simplified Privacy Info document.
                  This statement covers the data we collect through our{' '}
                  <span className="text-primary font-bold">kids.funox.com</span>{' '}
                  platform.
                </p>
                <p>
                  The Funox Kids Website is owned and operated by{' '}
                  <strong>Funox B.V.</strong>, an entity incorporated under the
                  laws of the Netherlands.
                </p>
                <Link
                  href={allRoute.cookieStatementParents}
                  className="bg-primary/10 text-primary hover:bg-primary mt-4 inline-flex items-center gap-2 rounded-full px-6 py-2 font-bold transition-all hover:text-white"
                >
                  View Cookie Statement
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </section>

            <div className="space-y-4">
              {sections.map((section, index) => (
                <Accordion
                  key={index}
                  title={section.title}
                  icon={section.icon}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                >
                  {section.content}
                </Accordion>
              ))}
            </div>

            <div className="from-primary/10 to-secondary/10 mt-12 overflow-hidden rounded-[24px] bg-linear-to-br p-10 text-center shadow-lg">
              <div className="animate-bounce text-5xl">✨</div>
              <p className="font-baloo text-deepblue mt-4 text-2xl font-bold">
                We&apos;re dedicated to making Funox Kids a safe place to play!
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PrivacyStatementParents;

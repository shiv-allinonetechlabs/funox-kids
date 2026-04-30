'use client';

import Link from 'next/link';
import { useState } from 'react';

import Accordion from '@/components/Accordion';
import InnerBanner from '@/components/InnerBanner';
import { allRoute } from '@/constants/allRoutes';

const CookieStatementParents = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: '2. What are cookies?',
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
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
          <path d="M8.5 8.5v.01" />
          <path d="M16 15.5v.01" />
          <path d="M12 12v.01" />
          <path d="M11 17v.01" />
          <path d="M7 14v.01" />
        </svg>
      ),
      content: (
        <p>
          Cookies are small bits of data stored on your device. They help our
          website recognize your browser and remember things like your game
          progress. We only allow cookies that are necessary for the website to
          function.
        </p>
      ),
    },
    {
      title: '3. What type of cookies do we use?',
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
          <path d="M12 2v10" />
          <path d="M18.4 4.6a10 10 0 1 1-12.8 0" />
        </svg>
      ),
      content: (
        <p>
          Funox only uses <strong>functional cookies</strong>. These are
          essential for the proper layout and navigation of the website, such as
          remembering your settings and progress.
        </p>
      ),
    },
    {
      title: '4. Who places which cookies?',
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
        <p>
          Game developers on Funox Kids may use cookies strictly to save your
          points and progress. We have strict rules and contracts to ensure they
          don&apos;t use data for any other purpose.
        </p>
      ),
    },
    {
      title: '5. Managing cookie settings?',
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
          <line x1="4" x2="20" y1="21" y2="21" />
          <line x1="4" x2="20" y1="3" y2="3" />
          <line x1="12" x2="12" y1="21" y2="3" />
          <path d="M12 8a4 4 0 1 0 0 8" />
        </svg>
      ),
      content: (
        <p>
          You can adjust your browser settings to warn you before a cookie is
          placed or to refuse all cookies. Note that if you block cookies, some
          parts of the website may not work correctly.
        </p>
      ),
    },
  ];

  return (
    <section className="container">
      <InnerBanner
        title="Cookie Statement"
        subtitle="How we use small bits of data to make your experience better and safer."
        emoji="🍪"
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
            Version June 2021
          </span>
        </div>

        <article className="max-w-none">
          <div className="space-y-6">
            <section className="border-glass-border bg-primary/5 rounded-[24px] border-2 p-8 shadow-sm">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="bg-primary shadow-primary/20 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl text-white shadow-lg">
                  🍪
                </div>
                <div>
                  <h3 className="font-baloo text-deepblue mt-0 text-3xl font-bold">
                    1. General Information
                  </h3>
                  <p className="text-muted mt-2 text-lg leading-relaxed">
                    The Funox Kids Website provides a safe environment for
                    children. We are committed to protecting the privacy of our
                    visitors.
                  </p>
                </div>
              </div>
              <p className="text-muted mt-6 leading-relaxed">
                Funox B.V. is responsible for the processing of data via the
                Funox Kids Website. For more details, please also check our{' '}
                <Link
                  href={allRoute.privacyStatementParents}
                  className="text-primary font-bold underline"
                >
                  Privacy Statement Parents
                </Link>
                .
              </p>
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
              <h3 className="font-baloo text-deepblue text-2xl font-bold">
                More Questions?
              </h3>
              <p className="text-deepblue/70 mt-2">
                We care about your privacy. Contact us if you have any concerns.
              </p>
              <a
                href="mailto:kids@funox.com"
                className="font-baloo bg-primary hover:shadow-primary/30 mt-6 inline-block rounded-xl px-8 py-3 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
              >
                Contact Privacy Team
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CookieStatementParents;

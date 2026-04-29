import { Metadata } from 'next';
import Link from 'next/link';

import InnerBanner from '@/components/InnerBanner';
import { allRoute } from '@/constants/allRoutes';

export const metadata: Metadata = {
  title: 'Cookie Statement | Funox Kids',
  description:
    'Our Cookie Statement explains how we use cookies to ensure a better and safer gaming experience for your children. We prioritize privacy and transparency.',
};

const CookieStatementParents = () => {
  return (
    <section className="container">
      <InnerBanner
        title="Cookie Statement"
        subtitle="How we use small bits of data to make your experience better and safer."
        emoji="🍪"
        gradientFrom="from-primary"
        gradientTo="to-secondary"
      />

      <div className="relative overflow-hidden rounded-[32px] border-6 border-white bg-white/40 p-6 shadow-xl backdrop-blur-md md:p-12">
        {/* Version Badge */}
        <div className="mb-8 flex justify-end">
          <span className="bg-primary/10 text-primary inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold">
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
            <section className="rounded-2xl border-2 border-white bg-white/50 p-6 shadow-sm">
              <h3 className="font-baloo text-deepblue mt-0 text-2xl font-bold">
                1. GENERAL INFORMATION
              </h3>
              <p className="text-deepblue/70 leading-relaxed">
                The Funox Kids Website provides a safe environment for children.
                We are especially committed to protecting the privacy of our
                visitors. This document explains how we use cookies in a clear
                and transparent way.
              </p>
              <p className="text-deepblue/70 leading-relaxed">
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
              {[
                {
                  title: '2. WHAT ARE COOKIES?',
                  content:
                    'Cookies are small bits of data stored on your device. They help our website recognize your browser and remember things like your game progress. We only allow cookies that are necessary for the website to function.',
                },
                {
                  title: '3. WHAT TYPE OF COOKIES DO WE USE?',
                  content:
                    'Funox only uses functional cookies. These are essential for the proper layout and navigation of the website, such as remembering your settings and progress.',
                },
                {
                  title: '4. WHO PLACES WHICH COOKIES?',
                  content:
                    "Game developers on Funox Kids may use cookies strictly to save your points and progress. We have strict rules and contracts to ensure they don't use data for any other purpose.",
                },
                {
                  title: '5. MANAGING COOKIE SETTINGS',
                  content:
                    'You can adjust your browser settings to warn you before a cookie is placed or to refuse all cookies. Note that if you block cookies, some parts of the website may not work correctly.',
                },
              ].map((section, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border-2 border-white bg-white/30 p-4 transition-all open:bg-white hover:bg-white"
                >
                  <summary className="font-baloo text-deepblue flex cursor-pointer list-none items-center justify-between text-xl font-bold">
                    {section.title}
                    <span className="text-2xl transition-transform group-open:rotate-180">
                      ⌄
                    </span>
                  </summary>
                  <div className="text-deepblue/70 mt-4 leading-relaxed">
                    {section.content}
                  </div>
                </details>
              ))}
            </div>

            <div className="bg-linear-to-br from-primary/5 to-secondary/5 mt-12 rounded-2xl p-8 text-center">
              <h3 className="font-baloo text-deepblue text-2xl font-bold">
                More Questions?
              </h3>
              <p className="text-deepblue/70 mt-2">
                We care about your privacy. Contact us if you have any concerns.
              </p>
              <a
                href="mailto:kids@funox.com"
                className="font-baloo bg-primary mt-4 inline-block rounded-xl px-6 py-2 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
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

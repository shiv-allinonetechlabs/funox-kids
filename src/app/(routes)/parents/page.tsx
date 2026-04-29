import { Metadata } from 'next';
import InnerBanner from '@/components/InnerBanner';

export const metadata: Metadata = {
  title: "Parents' Guide | Funox Kids",
  description:
    'Explore our comprehensive guide for parents. Learn about our commitment to safety, privacy, and providing a fun environment for your children.',
};

const Parents = () => {
  return (
    <section className="container">
      <InnerBanner
        title="Parents' Guide"
        subtitle="Everything you need to know about safety and fun on Funox Kids."
        emoji="🧸"
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
            Updated: July 2023
          </span>
        </div>

        <article className="max-w-none">
          <div className="space-y-10">
            <section>
              <p className="text-deepblue text-lg leading-relaxed font-medium">
                Thanks for stopping by! We&apos;re as serious about kids&apos;
                safety online as we are about them having fun - so we built
                Funox Kids just for them. We sometimes receive questions about
                our service and we&apos;ve put the most common ones below.
              </p>
              <p className="text-deepblue/70 mt-4">
                If you have another question, please get in touch at{' '}
                <a
                  href="mailto:kids@funox.com"
                  className="text-primary font-bold underline"
                >
                  kids@funox.com
                </a>
                .
              </p>
            </section>

            <div className="grid gap-8">
              {[
                {
                  q: 'DO I HAVE TO PAY FOR ANY OF THE GAMES?',
                  a: 'No. Every game is 100% free.',
                },
                {
                  q: 'CAN MY CHILD CHAT WITH OTHERS ON FUNOX KIDS?',
                  a: 'No, not at all. Funox Kids doesn&apos;t have a user login or chat system.',
                },
                {
                  q: 'DO YOU TRACK PERSONAL DATA?',
                  a: 'No, we don&apos;t use any tracking cookies. Actually, we don&apos;t use any cookies at all on this website, except those necessary to keep this website running properly and to enable players to save their game progress. Please see our Privacy Statement and Cookie Statement for more information.',
                },
                {
                  q: "HOW DO YOU SAFEGUARD CHILDREN'S ONLINE PRIVACY?",
                  a: "Funox Kids is GDPR compliant and supports COPPA standards. We don't process unnecessary data and follow strict rules to ensure a safe environment. We're dedicated to providing a secure playground for everyone.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border-2 border-white bg-white/50 p-6 shadow-sm transition-all hover:bg-white"
                >
                  <h3 className="font-baloo text-deepblue text-xl font-bold">
                    {item.q}
                  </h3>
                  <p className="text-deepblue/70 mt-3 text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <section className="from-primary/5 to-secondary/5 rounded-2xl bg-linear-to-br p-8 text-center">
              <h3 className="font-baloo text-deepblue text-2xl font-bold">
                Need more help?
              </h3>
              <p className="text-deepblue/70 mt-2">
                Write to us anytime at{' '}
                <a
                  href="mailto:kids@funox.com"
                  className="text-primary font-bold underline"
                >
                  kids@funox.com
                </a>
              </p>
              <div className="text-deepblue/40 mt-6 flex flex-col items-center gap-1 text-sm font-medium">
                <p className="text-deepblue/60 font-bold">Funox Kids</p>
                <p>Spui 10, 1012 WZ Amsterdam</p>
                <p>The Netherlands</p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Parents;

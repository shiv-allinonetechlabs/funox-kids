import { Metadata } from 'next';
import InnerBanner from '@/components/InnerBanner';

export const metadata: Metadata = {
  title: 'Terms of Use | Funox Kids',
  description:
    'Read our Terms of Use to understand the rules and guidelines for playing on Funox Kids. We aim to keep our platform a safe and fun place for everyone!',
};

const TermsOfUse = () => {
  return (
    <section className="container">
      <InnerBanner
        title="Terms of Use"
        subtitle="A couple of simple rules to keep Funox Kids a fun place for everyone!"
        emoji="📜"
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Version March 2021
          </span>
        </div>

        <article className="max-w-none">
          <div className="space-y-10">
            <section className="rounded-2xl border-2 border-white bg-white/50 p-6 shadow-sm">
              <p className="text-deepblue text-lg leading-relaxed font-medium">
                Welcome to Funox! We have made up a couple of rules (these{' '}
                <span className="text-primary font-bold">Rules</span>) for
                everyone under the age of 16 that uses our website. If you use
                our website, these Rules apply to you.
              </p>
              <p className="text-deepblue/70 mt-4">
                Want to know more? Contact us at{' '}
                <a
                  href="mailto:kids@funox.com"
                  className="text-primary font-bold underline"
                >
                  kids@funox.com
                </a>
                . We want our website to be a fun place for everyone!
              </p>
            </section>

            <div className="grid gap-6">
              {[
                {
                  title: 'The Golden Rules',
                  content:
                    'Do not use our website for anything illegal or harmful. This means no bullying, no pretending to be someone else, and no hacking or spreading viruses.',
                  emoji: '🌟',
                },
                {
                  title: 'Our Stuff',
                  content:
                    "The games and content on Funox are 'our stuff' or from our partners. You're not allowed to copy or share them without our permission.",
                  emoji: '🎨',
                },
                {
                  title: 'Free to Play',
                  content:
                    "Using our website is free! Just remember that your internet provider might charge for data, so make sure your parents know you're online.",
                  emoji: '🎮',
                },
                {
                  title: 'At Your Own Risk',
                  content:
                    "Using our website is at your own risk. We do our best to keep things safe, but we're not responsible for any damage caused by using the site.",
                  emoji: '⚖️',
                },
              ].map((rule, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 rounded-2xl border-2 border-white bg-white/50 p-6 transition-all hover:bg-white md:flex-row md:items-start md:gap-6"
                >
                  <div className="bg-primary/5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl">
                    {rule.emoji}
                  </div>
                  <div>
                    <h3 className="font-baloo text-deepblue m-0 text-xl font-bold">
                      {rule.title}
                    </h3>
                    <p className="text-deepblue/70 mt-2 text-base leading-relaxed">
                      {rule.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
              <p className="font-baloo text-deepblue text-xl font-bold">
                Respect the rules, help us keep Funox fun! 😊
              </p>
              <div className="text-deepblue/40 mt-6 space-y-1 text-sm font-medium">
                <p className="text-deepblue/60 font-bold">Funox Kids</p>
                <p>Spui 10, 1012 WZ Amsterdam, The Netherlands</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TermsOfUse;

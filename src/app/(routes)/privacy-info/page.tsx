import InnerBanner from '@/components/InnerBanner';
import { allRoute } from '@/constants/allRoutes';
import { generatePageMetadata } from '@/utils/generatePageMetadata';

export async function generateMetadata() {
  return generatePageMetadata(allRoute.privacyInfo);
}

const privacyItems = [
  {
    q: 'WHAT DATA DO WE USE AND WHAT FOR?',
    a: "We don't work with accounts or chat box functions, so we don't use that kind of data. We only use technical data to keep the website running and save your game progress so you can pick up where you left off!",
    emoji: '🎮',
  },
  {
    q: 'WHO HAS ACCESS?',
    a: 'Only the people that need access to your data, will have it. Within Funox, our masterminds make sure everything works properly. We do not share your data in any other way.',
    emoji: '👥',
  },
  {
    q: 'HOW ABOUT SECURITY?',
    a: 'Protecting your data is very important to us. We have several measures to prevent something bad from happening to your data, including strict security rules and training.',
    emoji: '🛡️',
  },
  {
    q: 'IS MY DATA USED IN OTHER COUNTRIES?',
    a: 'Yes, all Funox Kids data is stored in the Netherlands. If you visit from another country, your data is exchanged between your country and the Netherlands.',
    emoji: '🌍',
  },
  {
    q: 'FOR HOW LONG DO YOU USE MY DATA?',
    a: "We don't use your data for longer than six months. This period restarts every time you visit. If you haven't visited for six months, we no longer have your data.",
    emoji: '📅',
  },
  {
    q: 'WHAT ARE MY RIGHTS?',
    a: 'You can always ask what data we have about you, ask us to delete it, or correct it. You can ask a grown-up to help you with this, or simply ask us!',
    emoji: '⚖️',
  },
];

const PrivacyInfo = () => {
  return (
    <section className="container">
      <InnerBanner
        title="Privacy Info"
        subtitle="Hey there! Here's how we keep your information safe while you play."
        emoji="🔒"
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
            Version June 2022
          </span>
        </div>

        <article className="max-w-none">
          <div className="space-y-12">
            <p className="text-foreground text-base leading-relaxed font-medium sm:text-lg">
              Hey you! Thanks for looking at our privacy info. We promise
              we&apos;ll keep it short and easy to understand.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {privacyItems.map((item, index) => (
                <div
                  key={index}
                  className="group border-glass-border bg-card-bg relative flex flex-col gap-4 rounded-2xl border-2 p-6 transition-all hover:bg-white/5 md:flex-row md:items-start md:gap-6"
                >
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl transition-transform group-hover:scale-110">
                    {item.emoji}
                  </div>
                  <div>
                    <h3 className="font-baloo text-deepblue m-0 text-xl font-bold">
                      {item.q}
                    </h3>
                    <p className="text-muted mt-2 text-base leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="from-primary/5 to-secondary/5 rounded-2xl bg-linear-to-br p-8 text-center">
              <h3 className="font-baloo text-deepblue text-2xl font-bold">
                Contact Us
              </h3>
              <p className="text-deepblue/70 mt-2">
                E-mail:{' '}
                <a
                  href="mailto:kids@funox.com"
                  className="text-primary font-bold underline"
                >
                  kids@funox.com
                </a>
              </p>
              <div className="text-deepblue/40 mt-6 space-y-1 text-sm font-medium">
                <p className="text-deepblue/60 font-bold">Funox B.V.</p>
                <p>Spui 10, 1012 WZ Amsterdam</p>
                <p>The Netherlands</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PrivacyInfo;

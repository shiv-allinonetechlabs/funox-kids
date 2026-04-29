import { Metadata } from 'next';
import Link from 'next/link';

import InnerBanner from '@/components/InnerBanner';
import { allRoute } from '@/constants/allRoutes';

export const metadata: Metadata = {
  title: 'Privacy Statement | Funox Kids',
  description:
    'Our comprehensive Privacy Statement for parents and guardians. Detailed information on how we collect, use, and protect data to ensure a secure environment for children.',
};

const PrivacyStatementParents = () => {
  return (
    <section className="container">
      <InnerBanner
        title="Privacy Statement"
        subtitle="Detailed information for parents and guardians about our privacy practices."
        emoji="👨‍👩‍👧‍👦"
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
            Version July 2023
          </span>
        </div>

        <article className="max-w-none">
          <div className="space-y-6">
            {/* Section 1 */}
            <section className="rounded-2xl border-2 border-white bg-white/50 p-6 shadow-sm">
              <h3 className="font-baloo text-deepblue mt-0 text-2xl font-bold">
                1. General information
              </h3>
              <p className="text-deepblue/70 leading-relaxed">
                The Funox Kids Website is dedicated to website visitors under
                the age of 16 years (“Website Visitors”) and provides a safe
                environment for such children. Funox is especially committed to
                protecting the privacy of these Website Visitors. This is
                explained in a simplified manner in our Privacy Info document,
                in order to also be understandable for children. For parents or
                guardians that are interested in being informed on how Funox
                process data of the Website Visitors in more detail, we’ve
                drafted this “Privacy Statement Parents” as well as the{' '}
                <Link
                  href={allRoute.cookieStatementParents}
                  className="text-primary font-bold underline"
                >
                  Cookie Statement Parents
                </Link>
                . It is designed to provide further transparency into Funox’s
                privacy practices and principles. It provides information on the
                data that we collect from Website Visitors through our
                kids.funox.com web platform (“Funox Kids Website”) from the
                European Economic Area (EEA).
              </p>
              <p className="text-deepblue/70 leading-relaxed">
                The Funox Kids Website is owned and operated by Funox B.V.
                (referred to in this Privacy Statement Parents as “Funox”, “we”,
                “our”, or “us”). Funox is an entity incorporated under the laws
                of the Netherlands.
              </p>
            </section>

            <div className="space-y-4">
              {/* Section 2 */}
              <details className="group rounded-2xl border-2 border-white bg-white/30 p-4 transition-all open:bg-white hover:bg-white">
                <summary className="font-baloo text-deepblue flex cursor-pointer list-none items-center justify-between text-xl font-bold">
                  2. Which data is used and for what purposes?
                  <span className="text-2xl transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <div className="text-deepblue/70 mt-4 space-y-4 leading-relaxed">
                  <p>
                    All features on the Funox Kids Website are available without
                    the need for registration by Website Visitors. We don’t work
                    with accounts or chat box functions. No personal data (such
                    as email addresses and phone numbers) is requested from
                    Website Visitors. Furthermore, we don’t allow any third
                    parties to place advertisements on our Funox Kids Website.
                  </p>
                  <p className="text-deepblue font-bold">
                    Processing data on the Funox Kids Website
                  </p>
                  <p>
                    We process data for providing, maintaining and improving our
                    Funox Kids Website. This includes:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>
                      For the functioning of the Funox Kids Website: incl.
                      remembering settings and saving game progress.
                    </li>
                    <li>For handling requests, complaints, and disputes.</li>
                    <li>For determining, exercising, and defending rights.</li>
                    <li>For complying with legal obligations.</li>
                  </ul>
                  <p className="text-deepblue font-bold">
                    The data that is processed:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>IP address and Device ID</li>
                    <li>Browser type and language setting</li>
                    <li>Technical interaction data and log data</li>
                  </ul>
                </div>
              </details>

              {/* Section 3 */}
              <details className="group rounded-2xl border-2 border-white bg-white/30 p-4 transition-all open:bg-white hover:bg-white">
                <summary className="font-baloo text-deepblue flex cursor-pointer list-none items-center justify-between text-xl font-bold">
                  3. How do we obtain data?
                  <span className="text-2xl transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <div className="text-deepblue/70 mt-4 space-y-4 leading-relaxed">
                  <p>We obtain a Website Visitor’s data in various ways:</p>
                  <ul className="list-disc pl-6">
                    <li>
                      <span className="font-bold">
                        Provided by the Visitor:
                      </span>{' '}
                      Data received straight from you when contacted via email
                      or phone.
                    </li>
                    <li>
                      <span className="font-bold">Automatically obtained:</span>{' '}
                      Data collected via cookies and similar techniques when the
                      device contacts our web servers.
                    </li>
                  </ul>
                  <p>
                    Website Visitors are under no obligation to provide
                    information, but blocking certain technical cookies may
                    impact the functionality of features like &quot;save
                    game&quot;.
                  </p>
                </div>
              </details>

              {/* Section 4 */}
              <details className="group rounded-2xl border-2 border-white bg-white/30 p-4 transition-all open:bg-white hover:bg-white">
                <summary className="font-baloo text-deepblue flex cursor-pointer list-none items-center justify-between text-xl font-bold">
                  4. Who do we share data with?
                  <span className="text-2xl transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <div className="text-deepblue/70 mt-4 space-y-4 leading-relaxed">
                  <p>
                    We only share data with third parties if it is necessary for
                    the provision of a service. This includes:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Authorized persons employed by Funox.</li>
                    <li>
                      Service providers and sub-contractors engaged by Funox.
                    </li>
                    <li>
                      Authorized government institutions when legally required.
                    </li>
                  </ul>
                  <p>
                    All third parties are contractually obliged to treat data
                    confidentially and ensure appropriate security measures.
                  </p>
                </div>
              </details>

              {/* Section 5 */}
              <details className="group rounded-2xl border-2 border-white bg-white/30 p-4 transition-all open:bg-white hover:bg-white">
                <summary className="font-baloo text-deepblue flex cursor-pointer list-none items-center justify-between text-xl font-bold">
                  5. How do we secure data?
                  <span className="text-2xl transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <div className="text-deepblue/70 mt-4 space-y-4 leading-relaxed">
                  <p>
                    Protecting privacy is vital. Funox has implemented technical
                    and organizational measures to prevent violations of
                    confidentiality and integrity.
                  </p>
                  <p>
                    We have internal documentation describing security levels
                    and a data breach procedure to handle potential issues
                    immediately.
                  </p>
                </div>
              </details>

              {/* Section 6 */}
              <details className="group rounded-2xl border-2 border-white bg-white/30 p-4 transition-all open:bg-white hover:bg-white">
                <summary className="font-baloo text-deepblue flex cursor-pointer list-none items-center justify-between text-xl font-bold">
                  6. To which countries will we transfer data?
                  <span className="text-2xl transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <div className="text-deepblue/70 mt-4 space-y-4 leading-relaxed">
                  <p>
                    Data originating from the EEA may be processed in the
                    Netherlands or other countries. For transfers outside the
                    EEA, we use:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Adequacy decisions of the European Commission.</li>
                    <li>Standard Contractual Clauses (SCCs).</li>
                    <li>Specific derogations under Article 49 GDPR.</li>
                  </ul>
                </div>
              </details>

              {/* Section 7 */}
              <details className="group rounded-2xl border-2 border-white bg-white/30 p-4 transition-all open:bg-white hover:bg-white">
                <summary className="font-baloo text-deepblue flex cursor-pointer list-none items-center justify-between text-xl font-bold">
                  7. How do we determine how long we retain data?
                  <span className="text-2xl transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <div className="text-deepblue/70 mt-4 space-y-4 leading-relaxed">
                  <p>
                    In general, we don&apos;t keep data longer than necessary
                    (usually 6 months). Exceptions include:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Legal retention obligations.</li>
                    <li>Necessity for legal procedures.</li>
                    <li>Freedom of expression and information requirements.</li>
                  </ul>
                </div>
              </details>

              {/* Section 8 */}
              <details className="group rounded-2xl border-2 border-white bg-white/30 p-4 transition-all open:bg-white hover:bg-white">
                <summary className="font-baloo text-deepblue flex cursor-pointer list-none items-center justify-between text-xl font-bold">
                  8. Which privacy rights apply?
                  <span className="text-2xl transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <div className="text-deepblue/70 mt-4 space-y-4 leading-relaxed">
                  <p>Under the GDPR, Website Visitors have several rights:</p>
                  <ul className="list-decimal space-y-2 pl-6">
                    <li>
                      <span className="font-bold">Right of access:</span>{' '}
                      Request a copy of data we hold.
                    </li>
                    <li>
                      <span className="font-bold">Right to rectification:</span>{' '}
                      Correct inaccurate data.
                    </li>
                    <li>
                      <span className="font-bold">Right to erasure:</span>{' '}
                      Request deletion of data.
                    </li>
                    <li>
                      <span className="font-bold">Right to object:</span> Object
                      to processing based on legitimate interest.
                    </li>
                    <li>
                      <span className="font-bold">Right to restriction:</span>{' '}
                      Request limited processing.
                    </li>
                    <li>
                      <span className="font-bold">
                        Automated decision-making:
                      </span>{' '}
                      Right not to be subject to automated decisions.
                    </li>
                    <li>
                      <span className="font-bold">Right to complaint:</span>{' '}
                      Lodge a complaint with a supervisory authority.
                    </li>
                  </ul>
                </div>
              </details>

              {/* Section 9 */}
              <details className="group rounded-2xl border-2 border-white bg-white/30 p-4 transition-all open:bg-white hover:bg-white">
                <summary className="font-baloo text-deepblue flex cursor-pointer list-none items-center justify-between text-xl font-bold">
                  9. Who is responsible for the processing of the data?
                  <span className="text-2xl transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <div className="text-deepblue/70 mt-4 space-y-4 leading-relaxed">
                  <p>
                    Funox is in principle responsible for the processing of the
                    Website Visitor’s data in the context of the Funox Kids
                    Website. The developers of the games on the Funox Kids
                    Website are required to remove all outgoing links and
                    branding/advertisements (e.g. splash-screens, social links
                    and app-store links) from their game(s).
                  </p>
                </div>
              </details>

              {/* Section 10 */}
              <details className="group rounded-2xl border-2 border-white bg-white/30 p-4 transition-all open:bg-white hover:bg-white">
                <summary className="font-baloo text-deepblue flex cursor-pointer list-none items-center justify-between text-xl font-bold">
                  10. How can you contact us?
                  <span className="text-2xl transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <div className="text-deepblue/70 mt-4 space-y-4 leading-relaxed">
                  <p>
                    If you or the minor you represent have any questions
                    concerning this Privacy Statement Parents, or data
                    collection in particular, please contact us at{' '}
                    <a
                      href="mailto:kids@funox.com"
                      className="text-primary font-bold underline"
                    >
                      kids@funox.com
                    </a>{' '}
                    or via:
                  </p>
                  <div className="bg-primary/5 text-deepblue rounded-xl p-6">
                    <p className="font-bold">Funox B.V.</p>
                    <p>Spui 10</p>
                    <p>1012 WZ Amsterdam</p>
                    <p>The Netherlands</p>
                    <p className="mt-2 font-bold">
                      +31 20 2800 870 (for communication in Dutch or English)
                    </p>
                  </div>
                  <p>
                    Please let us know by e-mail in advance if you prefer to
                    have further contact over the phone via another preferred
                    language. We will then provide you with the relevant phone
                    number.
                  </p>
                </div>
              </details>

              {/* Section 11 */}
              <details className="group rounded-2xl border-2 border-white bg-white/30 p-4 transition-all open:bg-white hover:bg-white">
                <summary className="font-baloo text-deepblue flex cursor-pointer list-none items-center justify-between text-xl font-bold">
                  11. Changes
                  <span className="text-2xl transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <div className="text-deepblue/70 mt-4 space-y-4 leading-relaxed">
                  <p>
                    We may change this Privacy Statement Parents from time to
                    time to accommodate new technologies, industry practices,
                    regulatory requirements or for other purposes. The latest
                    version can always be consulted via the Funox Kids Website.
                    Important changes will also be communicated proactively.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-linear-to-br from-primary/5 to-secondary/5 mt-12 rounded-2xl p-8 text-center">
              <p className="font-baloo text-deepblue text-xl font-bold">
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

import { allRoute } from '@/constants/allRoutes';
import { generatePageMetadata } from '@/utils/generatePageMetadata';

export async function generateMetadata() {
  return generatePageMetadata(allRoute.contact);
}

const Contact = () => {
  return (
    <section className="container">
      <div className="relative">
        {/* Background Decorations */}
        <div className="absolute -top-10 -left-10 animate-bounce text-5xl opacity-20">
          ✨
        </div>
        <div className="absolute top-1/2 -right-12 animate-pulse text-6xl opacity-20">
          🎈
        </div>
        <div className="absolute -bottom-10 left-1/4 animate-bounce text-5xl opacity-20 delay-300">
          🌈
        </div>

        <div className="border-glass-border bg-glass-bg relative overflow-hidden rounded-[40px] border-6 p-4 shadow-2xl backdrop-blur-xl sm:p-6 md:p-10">
          {/* Inner Mesh Gradients */}
          <div className="bg-primary/20 absolute -top-24 -right-24 h-[300px] w-[300px] rounded-full blur-[80px]" />
          <div className="bg-secondary/20 absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full blur-[80px]" />

          <div className="relative z-10">
            {/* Header section */}
            <div className="text-center">
              <div className="bg-accent-soft border-glass-border mb-4 inline-flex items-center gap-2 rounded-full border-2 px-5 py-1.5 shadow-sm">
                <span className="text-lg">💬</span>
                <span className="font-baloo text-accent text-xs font-bold tracking-wide uppercase">
                  Let&apos;s Chat!
                </span>
              </div>

              <h1 className="font-baloo text-deepblue text-3xl leading-tight font-black sm:text-4xl md:text-5xl">
                Got a{' '}
                <span className="from-primary via-secondary to-primary bg-linear-to-r bg-clip-text text-transparent">
                  Question?
                </span>
              </h1>

              <p className="text-muted mx-auto mt-4 max-w-xl text-base font-medium md:text-lg">
                We&apos;re here to help you and your little ones have the best
                time on Funox Kids! Reach out to us anytime.
              </p>
            </div>

            {/* Grid Section */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {/* Email Card */}
              <div className="group border-glass-border bg-card-bg relative overflow-hidden rounded-3xl border-4 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="bg-primary shadow-primary/20 mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-2xl text-white shadow-lg transition-transform group-hover:scale-110">
                  📧
                </div>
                <h3 className="font-baloo text-deepblue text-xl font-bold">
                  Send an Email
                </h3>
                <p className="text-muted mt-3 text-sm leading-relaxed font-medium">
                  Have tips or questions? Shoot us an email and we&apos;ll get
                  back to you within 24 hours!
                </p>
                <a
                  href="mailto:kids@funox.com"
                  className="font-baloo bg-primary mt-6 inline-block rounded-xl px-6 py-2 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  kids@funox.com
                </a>
              </div>

              {/* Address Card */}
              <div className="group border-glass-border bg-card-bg relative overflow-hidden rounded-3xl border-4 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="bg-secondary shadow-secondary/20 mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-2xl text-white shadow-lg transition-transform group-hover:scale-110">
                  🏠
                </div>
                <h3 className="font-baloo text-deepblue text-xl font-bold">
                  Our Headquarters
                </h3>
                <div className="text-muted mt-3 space-y-0.5 text-sm font-medium">
                  <p className="text-secondary font-bold">Funox Kids</p>
                  <p>Spui 10, 1012 WZ</p>
                  <p>Amsterdam, The Netherlands</p>
                </div>
                <div className="text-secondary mt-6 flex items-center gap-2">
                  <span className="text-xl">🚲</span>
                  <span className="font-baloo text-sm font-bold">
                    Made in Amsterdam
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-10 text-center">
              <div className="inline-block animate-bounce text-4xl">🧸</div>
              <p className="font-baloo text-deepblue mt-2 text-lg font-bold">
                Thank you for being part of our journey!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

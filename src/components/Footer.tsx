'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { allRoute } from '@/constants/allRoutes';

const companyLinks = [
  { to: allRoute.parents, text: 'Parents' },
  { to: allRoute.contact, text: 'Contact Us' },
];

const legalLinks = [
  { to: allRoute.privacyInfo, text: 'Privacy Info' },
  { to: allRoute.privacyStatementParents, text: 'Privacy Statement' },
  { to: allRoute.termsOfUse, text: 'Terms of Use' },
  { to: allRoute.cookieStatementParents, text: 'Cookie Statement' },
];

const Footer = React.memo(() => {
  return (
    <footer className="relative w-full overflow-hidden pt-10 pb-4 [contain-intrinsic-size:500px] [content-visibility:auto]">
      <div className="container">
        <div className="border-glass-border bg-glass-bg relative mb-8 overflow-hidden rounded-[24px] border-2 p-5 shadow-[0_15px_40px_rgba(0,156,255,0.05)] backdrop-blur-xl transition-transform duration-500 will-change-transform hover:scale-[1.01] md:p-8">
          <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="animate-bounce-slow relative h-16 w-16 shrink-0 will-change-transform">
              <div className="bg-primary/20 absolute inset-0 animate-pulse rounded-full blur-xl" />
              <span className="relative z-10 text-5xl">👾</span>
            </div>

            <div className="flex-1">
              <h3 className="font-baloo text-deepblue mb-1 text-xl font-black">
                Safe & Fun Playground
              </h3>
              <p className="text-deepblue/60 max-w-2xl text-xs leading-relaxed font-medium">
                Funox Kids is an online playground specially created for young
                players. We work closely together with game developers to curate
                a fun and exciting collection of adventures for Kids. We&apos;re
                passionate about making sure it&apos;s a super safe environment
                for kids to play and enjoy themselves. Let&apos;s play!
              </p>
            </div>

            <Link href="https://kidsafe.com/member/funoxkids">
              <Image
                alt="Kids.Funox.com is certified by the kidSAFE Seal Program."
                height={40}
                src="https://www.kidsafeseal.com/sealimage/1348407079634597140/pokikids_small_darktm.png"
                width={110}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="from-primary to-brand-blue hover:shadow-primary/20 flex flex-col justify-between rounded-[32px] bg-linear-to-br p-8 text-white shadow-xl transition-all duration-500 will-change-transform lg:w-1/3">
            <div>
              <Link href={allRoute.home} className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg">
                  <span className="text-xl">🎮</span>
                </div>
                <span className="font-baloo flex items-center text-3xl font-black tracking-tight text-white">
                  <span>Funox</span>
                  <span className="ml-2 flex items-center gap-0.5">
                    {'Kids'.split('').map((letter, i) => (
                      <span
                        key={i}
                        className="inline-block animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
              <p className="mt-4 text-xs leading-relaxed font-medium text-white/80">
                The ultimate destination for kids who love to play, learn, and
                explore! Join thousands of kids in a safe digital playground.
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              {['🎈', '🌈', '⭐', '🚀'].map((emoji, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md transition-all will-change-transform hover:scale-110 hover:bg-white/20"
                >
                  <span className="text-base">{emoji}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:w-2/3">
            <div className="hover:border-primary/20 bg-card-bg rounded-[32px] border-2 border-transparent p-8 shadow-lg shadow-black/5 transition-all duration-500 will-change-transform">
              <h4 className="font-baloo text-deepblue mb-4 flex items-center gap-2 text-lg font-black">
                <span className="bg-primary h-2 w-2 rounded-full" /> Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.to}
                      className="text-deepblue/60 hover:text-primary group flex items-center gap-2 text-xs font-black tracking-widest uppercase transition-colors"
                    >
                      <span className="-translate-x-2 opacity-0 transition-all will-change-transform group-hover:translate-x-0 group-hover:opacity-100">
                        ➜
                      </span>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hover:border-primary/20 bg-card-bg rounded-[32px] border-2 border-transparent p-8 shadow-lg shadow-black/5 transition-all duration-500 will-change-transform">
              <h4 className="font-baloo text-deepblue mb-4 flex items-center gap-2 text-lg font-black">
                <span className="bg-primary h-2 w-2 rounded-full" /> Support &
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.to}
                      className="text-deepblue/60 hover:text-primary group flex items-center gap-2 text-xs font-black tracking-widest uppercase transition-colors"
                    >
                      <span className="-translate-x-2 opacity-0 transition-all will-change-transform group-hover:translate-x-0 group-hover:opacity-100">
                        ➜
                      </span>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary/5 absolute top-1/2 left-0 -z-10 h-72 w-72 -translate-y-1/2 rounded-full blur-[60px]" />
      <div className="bg-secondary/5 absolute right-0 bottom-0 -z-10 h-72 w-72 rounded-full blur-[60px]" />
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;

"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#000080] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-t-4 border-[#F28500] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-extrabold tracking-wider text-white">
                VECAI
              </span>
            </Link>
            <p className="text-sm text-slate-200/90 leading-relaxed max-w-sm">
              Building Africa&apos;s Future Through Intelligent Construction. VECAI connects people, technology, and artificial intelligence into one smart platform.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#F28500] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-200">
              <li>
                <Link href="#who-we-are" className="hover:text-[#F28500] transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="#what-we-offer" className="hover:text-[#F28500] transition-colors">
                  What We Offer
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-[#F28500] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#F28500] transition-colors">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#F28500] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-200">
              <li>
                <Link href="/about" className="hover:text-[#F28500] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#F28500] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#F28500] transition-colors">
                  Industries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>&copy; {currentYear} VECAI Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
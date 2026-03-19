import { Link } from 'react-router-dom';
import { studioInfo } from '../data/site-data';

export function Footer() {
  return (
    <footer className="w-full bg-surface text-ink border-t border-line pt-16 pb-8 px-6 md:px-12 lg:px-16">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-16">
        
        {/* Top Section: Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Column 1: Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest text-ink-faint font-mono mb-2">Navigation</h4>
            <Link to="/" className="text-sm hover:italic transition-all w-fit">Home</Link>
            <Link to="/approach" className="text-sm hover:italic transition-all w-fit">Approach</Link>
            <Link to="/collab" className="text-sm hover:italic transition-all w-fit">Collaborations</Link>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest text-ink-faint font-mono mb-2">Contact</h4>
            <a href={`mailto:${studioInfo.contact.email}`} className="text-sm hover:italic transition-all w-fit">
              {studioInfo.contact.email}
            </a>
            <span className="text-sm">WeChat: {studioInfo.contact.wechat}</span>
            <span className="text-sm">Xiaohongshu: {studioInfo.contact.xiaohongshu}</span>
          </div>

          {/* Column 3: Address */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest text-ink-faint font-mono mb-2">Location</h4>
            <p className="text-sm leading-relaxed max-w-xs">
              {studioInfo.contact.address}
            </p>
          </div>
        </div>

        {/* Middle Section: Giant Logo */}
        <div className="flex items-center justify-center py-12 md:py-20 border-y border-line">
          <h2 className="text-[12vw] leading-none font-medium tracking-tighter uppercase text-center">
            {studioInfo.logoText}
          </h2>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-ink-faint font-mono">
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Disclaimers</a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} {studioInfo.logoText}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

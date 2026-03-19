import { ReactNode } from 'react';

interface SplitLayoutProps {
  left: ReactNode;
  right: ReactNode;
}

export function SplitLayout({ left, right }: SplitLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left side - Fixed on desktop, normal flow on mobile */}
      <div className="w-full md:w-1/2 md:sticky md:top-0 md:h-screen p-6 md:p-12 lg:p-16 flex flex-col border-b md:border-b-0 md:border-r border-line">
        {left}
      </div>
      
      {/* Right side - Scrollable on desktop, normal flow on mobile */}
      <div className="w-full md:w-1/2 min-h-screen p-6 md:p-12 lg:p-16 relative">
        {right}
      </div>
    </div>
  );
}

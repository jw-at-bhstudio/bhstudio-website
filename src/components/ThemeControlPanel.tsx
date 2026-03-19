import { useState, useEffect } from 'react';
import { Settings2, X } from 'lucide-react';

export function ThemeControlPanel() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Initial colors based on the current theme
  const [colors, setColors] = useState({
    surface: '#F9F9F8',
    ink: '#1A1A1A',
    line: '#E6E6E6', // A solid hex approximation of rgba(26,26,26,0.1) on #F9F9F8
  });

  // Helper to convert hex to rgb string "r, g, b"
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
  };

  useEffect(() => {
    const root = document.documentElement;
    
    // Update base colors
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-ink', colors.ink);
    root.style.setProperty('--color-line', colors.line);
    
    // Update derived colors (muted/faint)
    const inkRgb = hexToRgb(colors.ink);
    if (inkRgb) {
      root.style.setProperty('--color-ink-muted', `rgba(${inkRgb}, 0.6)`);
      root.style.setProperty('--color-ink-faint', `rgba(${inkRgb}, 0.4)`);
      root.style.setProperty('--color-line-strong', colors.ink);
    }
  }, [colors]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-surface border border-line p-6 rounded-2xl shadow-xl w-72 mb-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium tracking-tight">Theme Control</h3>
            <button onClick={() => setIsOpen(false)} className="text-ink-muted hover:text-ink">
              <X size={18} />
            </button>
          </div>
          
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-mono text-ink-muted">Background</label>
              <input 
                type="color" 
                value={colors.surface}
                onChange={(e) => setColors({...colors, surface: e.target.value})}
                className="w-8 h-8 rounded cursor-pointer border-0 p-0 bg-transparent"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-sm font-mono text-ink-muted">Text (Ink)</label>
              <input 
                type="color" 
                value={colors.ink}
                onChange={(e) => setColors({...colors, ink: e.target.value})}
                className="w-8 h-8 rounded cursor-pointer border-0 p-0 bg-transparent"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-mono text-ink-muted">Borders</label>
              <input 
                type="color" 
                value={colors.line}
                onChange={(e) => setColors({...colors, line: e.target.value})}
                className="w-8 h-8 rounded cursor-pointer border-0 p-0 bg-transparent"
              />
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-line">
            <p className="text-xs text-ink-faint leading-relaxed font-mono">
              * Preview only. To save permanently, copy hex values to src/index.css.
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-ink text-surface scale-90' : 'bg-surface text-ink border border-line hover:scale-105'
        }`}
      >
        <Settings2 size={20} />
      </button>
    </div>
  );
}

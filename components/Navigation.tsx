import Image from 'next/image';
import { Code2, Briefcase, Award, BookOpen, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: 'about' | 'experience' | 'skills' | 'education' | 'contact') => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const navItems = [
    { id: 'about', label: 'ABOUT', icon: Code2 },
    { id: 'experience', label: 'EXPERIENCE', icon: Briefcase },
    { id: 'skills', label: 'SKILLS', icon: Award },
    { id: 'education', label: 'EDUCATION', icon: BookOpen },
    { id: 'contact', label: 'CONTACT', icon: Mail },
  ];

  return (
    <aside className="w-full bg-card border-b border-border lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:border-r lg:border-b-0 lg:overflow-y-auto flex lg:flex-col justify-between lg:p-8 p-4 lg:sticky">
      {/* Profile Section - Hidden on mobile */}
      <div className="hidden lg:flex flex-col items-start mb-8">
        <div className="relative mb-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/passport-pic-29f5PDMoYjeDA5YGfFTaKWIWPyAEQK.jpg"
            alt="Brian Odhiambo"
            width={120}
            height={120}
            className="rounded-lg object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Brian Odhiambo</h1>
        <p className="text-muted-foreground text-sm mt-2">Engineering Lead & Full-Stack Developer</p>
      </div>

      <div className="hidden lg:block h-px bg-border mb-8" />

      {/* Navigation Links */}
      <nav className="flex lg:flex-col gap-1 flex-wrap justify-start lg:justify-start w-full lg:w-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id as any)}
              className={`flex items-center gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-lg transition-all text-xs lg:text-sm font-medium whitespace-nowrap lg:w-full flex-1 lg:flex-none justify-center lg:justify-start ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              <Icon size={16} />
              <span className="inline lg:inline">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="hidden lg:block mt-auto pt-8 border-t border-border text-xs text-muted-foreground space-y-3">
        <div>
          <p className="font-semibold text-foreground">Contact</p>
          <a href="tel:+254713069866" className="hover:text-foreground transition">
            +254 713 069 866
          </a>
        </div>
        <div>
          <p className="font-semibold text-foreground">Email</p>
          <a href="mailto:brianodhiambo530@gmail.com" className="hover:text-foreground transition break-all">
            brianodhiambo530@gmail.com
          </a>
        </div>
        <div>
          <p className="font-semibold text-foreground">Location</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
    </aside>
  );
}

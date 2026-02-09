import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, ExternalLink, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { 
      name: "PRODUCTS", 
      options: ["Vision AI Platform", "Document Intelligence", "Custom Solutions"] 
    },
    { 
      name: "INDUSTRY SOLUTIONS", 
      options: ["Financial Services", "Legal & Compliance", "Public Safety", "Healthcare"] 
    },
    { 
      name: "RESOURCES", 
      options: ["AdTech Resources", "ALPR Resources", "Documentation", "Case Studies"] 
    },
    { 
      name: "ABOUT US", 
      options: ["Our Mission", "Team", "Careers", "Contact"] 
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-white/10 py-3 shadow-lg"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">I</div>
            <span className="text-xl font-heading font-bold tracking-tighter text-white">
              IOLAIRE<span className="text-primary">.AI</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 mr-4">
            {navItems.map((item) => (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="text-[13px] font-bold text-white/80 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider outline-none">
                  {item.name} <ChevronDown className="h-3 w-3 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card/95 backdrop-blur-xl border-white/10 min-w-[200px]">
                  {item.options.map((opt) => (
                    <DropdownMenuItem key={opt} className="text-sm py-2 hover:bg-primary/20 cursor-pointer">
                      {opt}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6 flex items-center gap-2 h-10">
              Contact Us <ExternalLink className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full px-6 flex items-center gap-2 h-10">
              Client Login <Lock className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col gap-2">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.name}</span>
              {item.options.map((opt) => (
                <a key={opt} href="#" className="text-lg text-white/90 hover:text-primary pl-2">{opt}</a>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-full h-12">
              Contact Us
            </Button>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full h-12">
              Client Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

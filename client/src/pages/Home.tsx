import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText, Lock, Search, Zap, Cpu, BarChart3, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Asset imports (Assuming the previous tool call generated these)
import heroBg from "@/assets/hero-bg.png";
import featureAnalysis from "@/assets/feature-analysis.png";
import featureSecurity from "@/assets/feature-security.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />
        
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-accent uppercase">Next Gen AI Processing</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6 tracking-tight">
              Unlock the <span className="text-gradient">Intelligence</span> inside your data
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Transform unstructured documents into actionable insights with IOLAIRE's advanced AI engine. Automate extraction, analysis, and decision-making.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-bold rounded-full h-12 px-8 text-base">
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white rounded-full h-12 px-8 text-base">
                View Capabilities
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full aspect-square md:aspect-auto md:h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20">
              <img 
                src={heroBg} 
                alt="AI Neural Network" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Logos */}
            {['Acme Corp', 'GlobalBank', 'TechFlow', 'DataSys', 'SecureNet'].map((logo) => (
              <div key={logo} className="text-xl font-heading font-bold">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Built for High-Scale Intelligence</h2>
            <p className="text-lg text-muted-foreground">
              IOLAIRE combines proprietary machine learning models with enterprise-grade security to process millions of documents with 99.9% accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: "Real-time Processing", 
                desc: "Ingest and analyze documents in milliseconds, not minutes. Built for speed." 
              },
              { 
                icon: Cpu, 
                title: "Advanced OCR & NLP", 
                desc: "Understand context, sentiment, and relationships within unstructured text." 
              },
              { 
                icon: Lock, 
                title: "Enterprise Security", 
                desc: "SOC2 compliant architecture with end-to-end encryption for sensitive data." 
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-card/40 border-white/10 hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES / FEATURE SPLIT */}
      <section id="capabilities" className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img src={featureAnalysis} alt="Document Analysis" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Automated Document Analysis
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stop manual data entry. Our AI reads contracts, invoices, and reports like a human expert, extracting key data points automatically.
              </p>
              <ul className="space-y-4">
                {['Pattern Recognition', 'Semantic Search', 'Table Extraction'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="h-5 w-5 text-accent" /> {item}
                  </li>
                ))}
              </ul>
              <Button variant="link" className="mt-8 text-primary p-0 h-auto font-bold text-lg hover:text-accent">
                Learn more about Analysis <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Secure Data Vault
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your data is your most valuable asset. IOLAIRE ensures complete privacy with private cloud deployment options and granular access controls.
              </p>
              <ul className="space-y-4">
                {['End-to-end Encryption', 'GDPR Compliance', 'Audit Logs'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="h-5 w-5 text-accent" /> {item}
                  </li>
                ))}
              </ul>
              <Button variant="link" className="mt-8 text-primary p-0 h-auto font-bold text-lg hover:text-accent">
                Explore Security <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img src={featureSecurity} alt="Security" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES GRID */}
      <section id="use-cases" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Industries we serve</h2>
              <p className="text-lg text-muted-foreground">Tailored solutions for sector-specific challenges.</p>
            </div>
            <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white rounded-full">
              View all use cases
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Financial Services", icon: BarChart3, desc: "Automate loan processing and fraud detection." },
              { title: "Legal", icon: FileText, desc: "Accelerate contract review and due diligence." },
              { title: "Healthcare", icon: Search, desc: "Extract patient data from unstructured medical records." },
            ].map((useCase, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                <useCase.icon className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">{useCase.desc}</p>
                <span className="text-sm font-bold text-primary flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Read Case Study <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to transform your workflow?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join forward-thinking companies using IOLAIRE to unlock the power of their data.
            </p>
            
            <form className="max-w-md mx-auto flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input placeholder="Enter your work email" className="h-12 bg-background/50 border-white/20 text-white placeholder:text-muted-foreground/50 rounded-lg" />
                <Button className="h-12 px-8 bg-primary hover:bg-primary/90 text-background font-bold rounded-lg whitespace-nowrap">
                  Get Started
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">No credit card required. 14-day free trial.</p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center lg:items-start lg:pl-80 p-6 lg:p-12">
      <div className="max-w-4xl w-full">
        {/* Main Heading */}
        <div className="mb-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Versatile Software Engineer & Data Scientist
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I build scalable backend systems with Django and REST APIs, design modern UIs with React, and develop machine learning models. 
            Experienced in bridging data and engineering with proven success in leading teams, driving impactful insights, and supporting technology advancement.
          </p>
        </div>

        {/* About Content */}
        <div className="grid gap-8 mb-12 md:grid-cols-3">
          <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center mb-4">
              <span className="text-background font-bold text-lg">💼</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Current Role</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              <span className="font-medium text-foreground">Engineering Lead at Datawise Africa</span> (Jan 2022 - Present)
              <br />
              Leading software and data engineering projects with a cross-functional team.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center mb-4">
              <span className="text-background font-bold text-lg">⚙️</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Technical Stack</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Python, Django, React, BigQuery, Machine Learning, Docker, and more. Proficient in building scalable systems and data pipelines.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center mb-4">
              <span className="text-background font-bold text-lg">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Leadership Impact</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Mentoring teams, driving product decisions, and bridging data science with engineering to deliver impactful solutions.
            </p>
          </div>
        </div>

        {/* CTA and Social Links */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/BrianOdhiambo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/brian-odhiambo-6b036b181/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:brianodhiambo530@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

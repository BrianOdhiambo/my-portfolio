import { BookOpen, Award } from 'lucide-react';

export default function Education() {
  return (
    <section className="lg:pl-80 p-6 lg:p-12 min-h-screen py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-foreground mb-12 flex items-center gap-3">
          <BookOpen size={32} />
          Education & Certifications
        </h2>

        {/* Formal Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="text-foreground">🎓</span> Formal Education
          </h3>
          
          <div className="bg-card rounded-lg p-6 border border-border hover:border-foreground transition">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-2">
              <div>
                <h4 className="text-xl font-bold text-foreground">Bachelor of Science in Information Technology</h4>
                <p className="text-lg text-muted-foreground">Zetech University</p>
              </div>
              <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">September 2016 - December 2020</p>
            </div>
            <div className="text-muted-foreground">
              <p className="font-medium">Grade: Second Class Upper Division</p>
              <p className="mt-2">Focused on software development, databases, and information systems design.</p>
            </div>
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Award size={24} /> Professional Certifications
          </h3>
          
          <div className="bg-card rounded-lg p-6 border border-border hover:border-foreground transition">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-2">
              <div>
                <h4 className="text-xl font-bold text-foreground">Certification in Data Science</h4>
                <p className="text-lg text-muted-foreground">10 Academy (Remote)</p>
              </div>
              <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">June 2020 - September 2020</p>
            </div>
            <div className="text-muted-foreground space-y-2">
              <p><span className="font-medium text-foreground">Core Focus Areas:</span></p>
              <ul className="space-y-1 ml-4">
                <li>• Python & SQL Programming for Data Science</li>
                <li>• Statistical Modeling & Linear Algebra</li>
                <li>• Data Visualization using Tableau and Power BI</li>
                <li>• Model Deployment with Flask</li>
              </ul>
              <p className="mt-3"><span className="font-medium text-foreground">Key Projects:</span></p>
              <ul className="space-y-1 ml-4">
                <li>• User Analytics: Telecommunication Industry Analysis</li>
                <li>• Brand Awareness & Ad Performance Evaluation</li>
                <li>• COVID-19 Change Point Analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Continuous Learning */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Continuous Learning</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="text-lg font-bold text-foreground mb-3">Machine Learning</h4>
              <p className="text-muted-foreground mb-4">
                Continuously updating expertise in ML model development, including recommender systems, computer vision, and NLP.
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-foreground font-medium">Focus: scikit-learn, TensorFlow, advanced algorithms</p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="text-lg font-bold text-foreground mb-3">Full-Stack Development</h4>
              <p className="text-muted-foreground mb-4">
                Staying current with modern web development practices, cloud deployment, and infrastructure as code.
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-foreground font-medium">Focus: Django, React, Docker, CI/CD pipelines</p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="text-lg font-bold text-foreground mb-3">Data Engineering</h4>
              <p className="text-muted-foreground mb-4">
                Building expertise in large-scale data processing, pipeline design, and data warehouse architecture.
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-foreground font-medium">Focus: BigQuery, data pipelines, database optimization</p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="text-lg font-bold text-foreground mb-3">Leadership & Management</h4>
              <p className="text-muted-foreground mb-4">
                Developing strong leadership skills through hands-on experience managing teams and driving strategic initiatives.
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-foreground font-medium">Focus: Team leadership, mentoring, product strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

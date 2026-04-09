import { Briefcase } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Job {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const experienceData = [
  { role: 'Data Analyst/SWE (Tisini)', responsibilities: 4, duration: 11 },
  { role: 'Lead Software Engineer (Loans)', responsibilities: 3, duration: 7 },
  { role: 'Engineering Lead (Datawise)', responsibilities: 5, duration: 24 },
];

const jobs: Job[] = [
  {
    title: 'Engineering Lead',
    company: 'Datawise Africa',
    period: 'January 2022 - Present',
    responsibilities: [
      'Lead software and data engineering projects, managing a cross-functional team',
      'Designed and deployed full-stack applications integrating Django REST backends with React frontends',
      'Developed query tools with Google BigQuery and Python algorithms enabling dynamic filtering and data access',
      'Built and deployed machine learning models, including recommender systems, computer vision models, and NLP models',
      'Configured and maintained server infrastructure for hosting and production deployments',
    ],
  },
  {
    title: 'Lead Software Engineer',
    company: 'Loans.co.ke',
    period: 'June 2022 - December 2022',
    responsibilities: [
      'Oversaw software development and supervised engineering team',
      'Designed and optimized reporting tools for tracking the impact of deployed technologies on business performance',
      'Contributed to product roadmap and technical decision-making',
    ],
  },
  {
    title: 'Data Analyst / Software Engineer',
    company: 'Tisini',
    period: 'February 2021 - December 2021',
    responsibilities: [
      'Automated workflows for data import, cleaning, and analysis',
      'Produced actionable insights and user ranking systems',
      'Maintained and enhanced website content and UI/UX',
      'Developed interactive dashboards using Dash and Plotly',
    ],
  },
];

export default function Experience() {
  return (
    <section className="lg:pl-80 p-6 lg:p-12 min-h-screen py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-foreground mb-12 flex items-center gap-3">
          <Briefcase size={32} />
          Professional Experience
        </h2>

        {/* Experience Overview Chart */}
        <div className="mb-12 bg-card rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">Experience Timeline</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={experienceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="role" stroke="#6b7280" angle={-45} textAnchor="end" height={100} interval={0} />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '6px' }} />
              <Bar dataKey="duration" fill="#1f2937" radius={[8, 8, 0, 0]} name="Duration (months)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== jobs.length - 1 && (
                <div className="absolute left-6 top-20 w-px h-16 bg-border hidden lg:block" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="relative hidden lg:flex">
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center ring-4 ring-background">
                    <Briefcase size={20} className="text-background" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-lg p-6 border border-border">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{job.title}</h3>
                      <p className="text-lg text-muted-foreground">{job.company}</p>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">{job.period}</p>
                  </div>

                  <ul className="space-y-3">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="text-foreground mt-1">→</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

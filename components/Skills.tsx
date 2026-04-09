import { Award } from 'lucide-react';
import { BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SkillCategory {
  category: string;
  skills: string[];
}

const proficiencyData = [
  { skill: 'Python', proficiency: 95 },
  { skill: 'Django', proficiency: 90 },
  { skill: 'React', proficiency: 88 },
  { skill: 'BigQuery', proficiency: 92 },
  { skill: 'Machine Learning', proficiency: 85 },
  { skill: 'Leadership', proficiency: 90 },
];

const expertiseAreasData = [
  { area: 'Full-Stack Development', value: 92 },
  { area: 'Data Science', value: 88 },
  { area: 'Team Leadership', value: 90 },
  { area: 'Cloud Infrastructure', value: 82 },
  { area: 'ML Models', value: 85 },
  { area: 'Data Visualization', value: 88 },
];

const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Django', 'JavaScript', 'SQL', 'MongoDB', 'React'],
  },
  {
    category: 'Data Science & Analytics',
    skills: ['BigQuery', 'Pandas', 'NumPy', 'scikit-learn', 'Tableau', 'Power BI', 'Plotly', 'Dash'],
  },
  {
    category: 'Infrastructure & Deployment',
    skills: ['Docker', 'Gunicorn', 'Linux', 'CI/CD', 'Netlify'],
  },
  {
    category: 'Professional Skills',
    skills: [
      'Data Cleaning & Processing',
      'Data Analysis & Visualization',
      'Machine Learning Development',
      'Software Engineering',
      'Web Development',
      'API Design',
    ],
  },
  {
    category: 'Soft Skills',
    skills: ['Leadership', 'Team Management', 'Problem-Solving', 'Communication', 'Planning', 'Mentoring'],
  },
];

export default function Skills() {
  return (
    <section className="lg:pl-80 p-6 lg:p-12 min-h-screen py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-foreground mb-12 flex items-center gap-3">
          <Award size={32} />
          Skills & Expertise
        </h2>

        {/* Proficiency Chart */}
        <div className="mb-12 bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-foreground mb-6">Technical Proficiency</h3>
          <div style={{ width: '100%', height: '350px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={proficiencyData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
                <XAxis dataKey="skill" stroke="#64748b" angle={-35} textAnchor="end" height={80} interval={0} />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '6px', color: '#1a3a52' }} />
                <Bar dataKey="proficiency" fill="#2563eb" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expertise Radar Chart */}
        <div className="mb-12 bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-foreground mb-6">Expertise Overview</h3>
          <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={expertiseAreasData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                <PolarGrid stroke="#cbd5e1" />
                <PolarAngleAxis dataKey="area" stroke="#64748b" fontSize={12} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#cbd5e1" />
                <Radar name="Proficiency %" dataKey="value" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.6} />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '6px', color: '#1a3a52' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-border hover:border-foreground transition">
              <h3 className="text-xl font-bold text-foreground mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

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
        <div className="mb-12 bg-card rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">Technical Proficiency</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={proficiencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="skill" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '6px' }} />
              <Bar dataKey="proficiency" fill="#1f2937" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Expertise Radar Chart */}
        <div className="mb-12 bg-card rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">Expertise Overview</h3>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={expertiseAreasData}>
              <PolarGrid stroke="#d1d5db" />
              <PolarAngleAxis dataKey="area" stroke="#6b7280" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#6b7280" />
              <Radar name="Proficiency %" dataKey="value" stroke="#1f2937" fill="#1f2937" fillOpacity={0.6} />
              <Tooltip contentStyle={{ backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '6px' }} />
            </RadarChart>
          </ResponsiveContainer>
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

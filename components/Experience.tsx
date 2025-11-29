import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-background/50 border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-foreground/70">{exp.company}</p>
                </div>
                <div className="text-sm text-foreground/60 mt-2 sm:mt-0">
                  {exp.location} • {exp.startDate} - {exp.endDate}
                </div>
              </div>
              
              <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/80">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-foreground/10 text-foreground/70 rounded-full text-sm"
                  >
                    {tech}
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


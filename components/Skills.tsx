'use client';

import { skills } from '@/data/portfolio';
import { useState } from 'react';

const categories: Array<'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other'> = [
  'Frontend',
  'Backend',
  'Database',
  'Tools',
  'Other',
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  const groupedSkills = categories.map((category) => ({
    category,
    items: filteredSkills.filter((skill) => skill.category === category),
  }));

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Skills
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === null
                ? 'bg-foreground text-background'
                : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupedSkills.map(
            ({ category, items }) =>
              items.length > 0 && (
                <div
                  key={category}
                  className="bg-background/50 border border-foreground/10 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-foreground/10 text-foreground/80 rounded-full text-sm"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}


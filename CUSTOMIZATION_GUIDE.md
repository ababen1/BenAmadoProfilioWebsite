# Portfolio Customization Guide

This guide will help you populate your portfolio website with your actual information from your resume.

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Update Your Information**
   - Open `data/portfolio.ts`
   - Replace all placeholder data with your actual information

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Visit `http://localhost:3000`

## Customization Steps

### 1. Update Contact Information

Edit `data/portfolio.ts` and update the `contactInfo` object:

```typescript
export const contactInfo: ContactInfo = {
  email: 'your-email@example.com', // Replace with your email
  linkedin: 'https://www.linkedin.com/in/ben-amado/', // Already set
  github: 'https://github.com/ababen1', // Already set
  location: 'Your City, Country', // Add your location
  phone: '+1 (123) 456-7890', // Optional: Add your phone
};
```

### 2. Add Your Work Experience

Replace the example experience in `experiences` array with your actual work history:

```typescript
export const experiences: Experience[] = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, Country',
    startDate: 'Month Year',
    endDate: 'Present' or 'Month Year',
    description: [
      'Bullet point 1 describing your achievements',
      'Bullet point 2 describing your achievements',
      'Bullet point 3 describing your achievements',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  // Add more experiences...
];
```

**Tips:**
- List experiences in reverse chronological order (most recent first)
- Use action verbs (Developed, Built, Implemented, etc.)
- Quantify achievements when possible
- Include technologies used in each role

### 3. Add Your Projects

Update the `projects` array with your portfolio projects:

```typescript
export const projects: Project[] = [
  {
    title: 'Project Name',
    description: 'A detailed description of what the project does and key features.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/project-name',
    liveUrl: 'https://your-project-demo.com', // Optional: if you have a live demo
  },
  // Add more projects...
];
```

**Tips:**
- Include 3-6 of your best projects
- Add live demo links if available
- Describe what makes each project unique
- List all relevant technologies

### 4. Update Your Skills

Add all your technical skills to the `skills` array:

```typescript
export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  // ... add more
  
  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  // ... add more
  
  // Database
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  // ... add more
  
  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  // ... add more
];
```

**Categories available:**
- `'Frontend'`
- `'Backend'`
- `'Database'`
- `'Tools'`
- `'Other'`

### 5. Personalize Your Bio

Update the `aboutMe` object:

```typescript
export const aboutMe = {
  name: 'Ben Amado',
  title: 'Your Professional Title', // e.g., 'Full Stack Developer', 'Software Engineer'
  bio: `Your personal bio here. Write 2-3 sentences about:
        - Who you are professionally
        - What you're passionate about
        - What makes you unique`,
};
```

### 6. Update Metadata

Edit `app/layout.tsx` to update the page title and description:

```typescript
export const metadata: Metadata = {
  title: 'Ben Amado - Full Stack Developer',
  description: 'Portfolio website of Ben Amado, Full Stack Developer specializing in...',
};
```

## Styling Customization

### Change Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --background: #0a0a0a; /* Dark background */
  --foreground: #ededed; /* Light text */
}
```

### Change Gradient Colors

Edit `components/Hero.tsx` to change the gradient:

```tsx
className="... bg-gradient-to-r from-blue-400 to-purple-600 ..."
```

Change `from-blue-400 to-purple-600` to your preferred colors.

## Adding New Sections

To add a new section:

1. Create a new component in `components/YourSection.tsx`
2. Import and add it to `app/page.tsx`
3. Add a navigation link in `components/Navigation.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

## Next Steps

1. ✅ Fill in all your information
2. ✅ Add your actual projects
3. ✅ Update your skills list
4. ✅ Customize colors/styling (optional)
5. ✅ Test on mobile and desktop
6. ✅ Deploy!

## Need Help?

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review the [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Check component files for code examples

Good luck with your portfolio! 🚀


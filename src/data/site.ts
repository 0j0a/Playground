export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  number: string;
  type: string;
  title: string;
  description: string;
  year: string;
  link: string;
}

export interface Article {
  date: string;
  readTime: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  body: string;
}

export interface LearningItem {
  title: string;
  description: string;
}

export interface SiteContent {
  nav: NavItem[];
  signal: string;
  hero: {
    eyebrow: string;
    intro: string;
  };
  about: {
    bio: string;
    learningIntro: string;
    journalNote: string;
    learningItems: LearningItem[];
  };
  contact: {
    email: string;
    instagramHandle: string;
    instagramUrl: string;
  };
  projects: Project[];
  articles: Article[];
}

export const siteContent: SiteContent = {
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
  signal: 'Studying how fiber becomes structure, shape, and something wearable.',
  hero: {
    eyebrow: 'Fashion / textile / 2026',
    intro:
      'I’m Joa, a Fashion and Textile Technologies student drawn to fiber art, pattern making, and clothing construction.',
  },
  about: {
    bio: 'I’m a Fashion and Textile Technologies student with a part-time job in marketing and sales at an HR company. Outside work and study, I keep coming back to fiber, shape, and the quiet problem-solving of making clothes.',
    learningIntro:
      'My interests sit between soft sculpture and wearable form: fiber art, pattern making, clothing construction, and the small decisions that make a material behave differently.',
    journalNote:
      'This website is a record of samples, adjustments, unfinished thoughts, and the final pieces that grow from them.',
    learningItems: [
      {
        title: 'Fiber art',
        description: 'Exploring texture, surface, tension, and the ways loose materials can become structure.',
      },
      {
        title: 'Pattern making',
        description: 'Learning to translate an idea into lines, measurements, balance, and a shape that can move.',
      },
      {
        title: 'Clothing construction',
        description: 'Building patience and precision through seams, fittings, finishing, and wearing the result.',
      },
    ],
  },
  contact: {
    email: 'hello@example.com',
    instagramHandle: '@joa.visscher',
    instagramUrl: 'https://instagram.com',
  },
  projects: [
    {
      number: '01',
      type: 'Fiber study',
      title: 'Surface / tension',
      description: 'Testing texture, layering, and structure through small fiber art samples.',
      year: 'In progress',
      link: '/projects',
    },
    {
      number: '02',
      type: 'Pattern study',
      title: 'A shape that moves',
      description: 'Working from measurements and paper experiments toward a wearable pattern.',
      year: '2026',
      link: '/projects',
    },
    {
      number: '03',
      type: 'Construction',
      title: 'First finished piece',
      description: 'Documenting the fittings, changes, seams, and final details of a constructed garment.',
      year: 'Exploring',
      link: '/contact',
    },
  ],
  articles: [
    {
      date: '09.09.26',
      readTime: '4 min read',
      slug: 'what-the-first-sample-taught-me',
      category: 'Material study',
      title: 'What the first sample taught me',
      excerpt: 'A material test does not need to be beautiful to be useful. It needs to show you what to try next.',
      body: `The first sample is rarely the finished idea. It is a question made visible: what happens when this fiber is pulled, folded, layered, or left alone?

I am learning to keep the samples that look unsuccessful. A loose edge or unexpected shape often tells me more than a perfect test because it points directly to the next decision.

For this study, I changed the tension and repeated the same small section three times. The differences were subtle, but they gave me a clearer direction for the larger piece.`,
    },
    {
      date: '02.09.26',
      readTime: '6 min read',
      slug: 'the-pattern-is-not-the-garment',
      category: 'Pattern making',
      title: 'The pattern is not the garment',
      excerpt: 'Notes from moving between flat paper, a three-dimensional body, and the adjustments in between.',
      body: `A pattern can look correct on paper and still behave unexpectedly when it becomes three-dimensional. The distance between those two states is where much of the learning happens.

I am paying more attention to where the material wants to move. A straight line on paper can become a fold, a pull, or a completely different line once it meets the body.

The next version will keep the general shape but change the balance. I am recording each adjustment so the finished garment still carries the evidence of the process.`,
    },
    {
      date: '24.08.26',
      readTime: '3 min read',
      slug: 'keeping-the-messy-middle',
      category: 'Process note',
      title: 'Keeping the messy middle',
      excerpt: 'Why progress photos and unfinished samples belong beside the final piece.',
      body: `The final piece is only one moment in the life of a project. It does not show the rejected shapes, uneven samples, or small discoveries that made it possible.

I want this journal to keep those middle stages visible. Not as a performance of perfection, but as a practical record I can return to when I begin something new.

Progress is easier to understand when it has somewhere to go. This archive is that place.`,
    },
    {
      date: '10.09.26',
      readTime: '6 min read',
      slug: 'you-smell-like-an-unfinished-project',
      category: 'My life',
      title: 'You smell like an unfinished project',
      excerpt: 'Notes from moving between flat paper, a three-dimensional body, and the adjustments in between.',
      body: `You can tell a lot about a person by the smell of their clothes. The scent of an unfinished project is different from the scent of a finished one.

<img src="/images/journal/first-sample.jpg" alt="Close-up of the first fiber tension sample" width="15%">

I am learning to notice the small details that make a garment feel complete. A well-pressed seam, a carefully chosen fabric, and the right fit all contribute to the overall impression.

The next time I work on a project, I will pay attention to how it smells and feels, and I will strive to create something that is not only visually appealing but also complete in every sense.`,
    },
  ],
};

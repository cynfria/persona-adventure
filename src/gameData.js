export const personas = {
  brickie: {
    id: 'brickie',
    name: 'The Brickie',
    vibe: 'A sturdy, block-shaped friend who loves stacking things perfectly.',
    traits: ['grid system enthusiast', 'loves clean layouts', 'component library curator', 'design system guardian', 'hates inconsistent spacing'],
    color: '#D2691E',
    emoji: '🧱',
    mostCompatible: { id: 'stickyNote', reason: 'Both appreciate structure and organization' },
    leastCompatible: { id: 'glitchGremlin', reason: 'Chaos and instability clash with your need for stability' }
  },
  pixelPuff: {
    id: 'pixelPuff',
    name: 'The Pixel Puff',
    vibe: 'A soft, colorful cloud that changes colors based on its mood.',
    traits: ['color palette perfectionist', 'gradient master', 'font pairing expert', 'dribbble browser', 'allergic to Comic Sans'],
    color: '#FFB6D9',
    emoji: '☁️',
    mostCompatible: { id: 'sparkleChaser', reason: 'Both appreciate beauty and sparkly things' },
    leastCompatible: { id: 'glitchGremlin', reason: 'Their chaos destroys your carefully crafted aesthetics' }
  },
  stickyNote: {
    id: 'stickyNote',
    name: 'The Sticky Note',
    vibe: 'A helpful, square piece of paper that sticks to everyone to remind them of things.',
    traits: ['kanban board addict', 'task master', 'documentation lover', 'Notion power user', 'reminder champion'],
    color: '#FFE66D',
    emoji: '📝',
    mostCompatible: { id: 'brickie', reason: 'Your organization helps them build perfectly' },
    leastCompatible: { id: 'glitchGremlin', reason: 'They ignore all your careful reminders and break everything' }
  },
  numberNoodle: {
    id: 'numberNoodle',
    name: 'The Number Noodle',
    vibe: 'A long, wiggly worm made of graphs and digits.',
    traits: ['analytics nerd', 'A/B test enthusiast', 'metrics obsessed', 'dashboard builder', 'conversion optimizer'],
    color: '#4ECDC4',
    emoji: '📊',
    mostCompatible: { id: 'lazyLoop', reason: 'You both optimize for maximum efficiency' },
    leastCompatible: { id: 'glitchGremlin', reason: 'Random chaos ruins all your carefully calculated predictions' }
  },
  sparkleChaser: {
    id: 'sparkleChaser',
    name: 'The Sparkle Chaser',
    vibe: 'A hyperactive creature that runs after anything shiny.',
    traits: ['trend hunter', 'beta tester', 'early adopter', 'new feature addict', 'ADHD energy'],
    color: '#FFD93D',
    emoji: '⭐',
    mostCompatible: { id: 'hypeHorn', reason: 'You match each other\'s high energy and enthusiasm' },
    leastCompatible: { id: 'mossyRock', reason: 'Their stillness and slowness drive you absolutely crazy' }
  },
  safetySnail: {
    id: 'safetySnail',
    name: 'The Safety Snail',
    vibe: 'A shy creature that hides in its tough shell when strangers appear.',
    traits: ['security first', 'permission checker', 'backup obsessive', '2FA advocate', 'trust no dependency'],
    color: '#A8DADC',
    emoji: '🐌',
    mostCompatible: { id: 'mossyRock', reason: 'You both appreciate peace, quiet, and not moving' },
    leastCompatible: { id: 'sparkleChaser', reason: 'Their unpredictable energy is way too overwhelming for you' }
  },
  glitchGremlin: {
    id: 'glitchGremlin',
    name: 'The Glitch Gremlin',
    vibe: 'A mischievous little monster that eats code and spits out errors.',
    traits: ['bug magnet', 'console.log enthusiast', 'break things expert', 'experimental coder', 'production pusher'],
    color: '#E63946',
    emoji: '👾',
    mostCompatible: { id: 'sparkleChaser', reason: 'They find your chaos exciting and unpredictable' },
    leastCompatible: { id: 'brickie', reason: 'You destroy everything they carefully build' }
  },
  mossyRock: {
    id: 'mossyRock',
    name: 'The Mossy Rock',
    vibe: 'An ancient, unmoving boulder that has been here since the beginning of time.',
    traits: ['legacy code guardian', 'if it works don\'t touch it', 'change resistant', 'stable version only', 'monolith defender'],
    color: '#6C757D',
    emoji: '🪨',
    mostCompatible: { id: 'safetySnail', reason: 'You both prefer staying in one safe, comfortable place' },
    leastCompatible: { id: 'hypeHorn', reason: 'All that noise and energy disturbs your peaceful existence' }
  },
  hypeHorn: {
    id: 'hypeHorn',
    name: 'The Hype Horn',
    vibe: 'A loud, energetic megaphone creature that loves parties.',
    traits: ['hype builder', 'community evangelist', 'launch party planner', 'engagement booster', 'always shouting'],
    color: '#FF6B6B',
    emoji: '📣',
    mostCompatible: { id: 'sparkleChaser', reason: 'You both live for excitement and high energy moments' },
    leastCompatible: { id: 'safetySnail', reason: 'Your volume and intensity terrify them into their shell' }
  },
  lazyLoop: {
    id: 'lazyLoop',
    name: 'The Lazy Loop',
    vibe: 'A character shaped like an infinity symbol that rolls around so it doesn\'t have to walk.',
    traits: ['automation addict', 'script writer', 'workflow optimizer', 'DRY principle lover', 'effort minimizer'],
    color: '#95E1D3',
    emoji: '∞',
    mostCompatible: { id: 'numberNoodle', reason: 'You both appreciate efficiency and smart optimization' },
    leastCompatible: { id: 'hypeHorn', reason: 'All that energy and noise exhausts you - you just want to nap' }
  }
};

export const questions = [
  {
    id: 1,
    scenario: "✨ You wake up in a funky digital world! What catches your eye first?",
    choices: [
      {
        text: "Ooh, everything is so neat and organized!",
        scores: { brickie: 2, stickyNote: 2 }
      },
      {
        text: "OMG the colors are SO pretty!! 🌈",
        scores: { pixelPuff: 2, hypeHorn: 1 }
      },
      {
        text: "Cool, floating numbers everywhere!",
        scores: { numberNoodle: 2, lazyLoop: 2 }
      },
      {
        text: "Um... is it safe here? 😰",
        scores: { safetySnail: 2, mossyRock: 2 }
      }
    ]
  },
  {
    id: 2,
    scenario: "🎮 A cute lil creature bounces up and offers you a quest!",
    choices: [
      {
        text: "YES YES YES LET'S GOOO!! 🏃‍♀️",
        scores: { sparkleChaser: 2, hypeHorn: 2 }
      },
      {
        text: "Wait, lemme write this down! 📝",
        scores: { stickyNote: 2, numberNoodle: 2 }
      },
      {
        text: "*hides* stranger danger!!",
        scores: { safetySnail: 2, mossyRock: 2 }
      },
      {
        text: "What if I do the quest... wrong? 👀",
        scores: { glitchGremlin: 2, sparkleChaser: 1 }
      }
    ]
  },
  {
    id: 3,
    scenario: "🔧 You find a mysterious gadget! What's your move?",
    choices: [
      {
        text: "Time to build something cool and organized!",
        scores: { brickie: 2, stickyNote: 1 }
      },
      {
        text: "Can I make it prettier? ✨",
        scores: { pixelPuff: 2, safetySnail: 1 }
      },
      {
        text: "Hmm, let me calculate the optimal use case...",
        scores: { numberNoodle: 2, lazyLoop: 2 }
      },
      {
        text: "What if I push THIS button? 👀",
        scores: { glitchGremlin: 2, mossyRock: 1 }
      }
    ]
  },
  {
    id: 4,
    scenario: "👥 Your squad needs a leader! What do you do?",
    choices: [
      {
        text: "GET HYPED!! *rallies everyone*",
        scores: { hypeHorn: 2, sparkleChaser: 2 }
      },
      {
        text: "Make a checklist for everyone!",
        scores: { stickyNote: 2, brickie: 2 }
      },
      {
        text: "I'll just... watch from over here 👀",
        scores: { mossyRock: 2, safetySnail: 2 }
      },
      {
        text: "Let's automate this so we can all chill",
        scores: { lazyLoop: 2, numberNoodle: 1 }
      }
    ]
  },
  {
    id: 5,
    scenario: "🚪 Locked door with a puzzle! How do you crack it?",
    choices: [
      {
        text: "Build a solution piece by piece!",
        scores: { brickie: 2, lazyLoop: 1 }
      },
      {
        text: "Match all the pretty colors! 🎨",
        scores: { pixelPuff: 2, hypeHorn: 1 }
      },
      {
        text: "Calculate the sequence... *thinking emoji*",
        scores: { numberNoodle: 2, stickyNote: 1 }
      },
      {
        text: "Just... jiggle everything??",
        scores: { glitchGremlin: 2, sparkleChaser: 1 }
      }
    ]
  },
  {
    id: 6,
    scenario: "🚨 CHAOS ALERT!! Everything's going wrong! What now?",
    choices: [
      {
        text: "TIME TO TAKE CHARGE!! 📢",
        scores: { hypeHorn: 2, brickie: 1 }
      },
      {
        text: "*retreats into cozy hiding spot*",
        scores: { safetySnail: 2, mossyRock: 2 }
      },
      {
        text: "Hehe... this might be my fault 😬",
        scores: { glitchGremlin: 2, sparkleChaser: 1 }
      },
      {
        text: "Let me analyze the situation calmly...",
        scores: { numberNoodle: 2, stickyNote: 1 }
      }
    ]
  },
  {
    id: 7,
    scenario: "🎁 Treasure chest!! What do you hope is inside?",
    choices: [
      {
        text: "SPARKLES AND SHINY THINGS!! ✨",
        scores: { sparkleChaser: 2, pixelPuff: 1 }
      },
      {
        text: "Perfect art supplies in dreamy colors!",
        scores: { pixelPuff: 2, safetySnail: 1 }
      },
      {
        text: "The world's best notebook!! 📓",
        scores: { stickyNote: 2, brickie: 1 }
      },
      {
        text: "Something that does the work for me 😴",
        scores: { mossyRock: 2, lazyLoop: 2 }
      }
    ]
  },
  {
    id: 8,
    scenario: "🎉 Victory!! Time to celebrate! What's your vibe?",
    choices: [
      {
        text: "PARTY TIME!! *blasts music*",
        scores: { hypeHorn: 2, sparkleChaser: 2 }
      },
      {
        text: "Aesthetic celebration with good vibes only~",
        scores: { pixelPuff: 2, stickyNote: 1 }
      },
      {
        text: "Can we celebrate... at home? 🏠",
        scores: { safetySnail: 2, mossyRock: 2 }
      },
      {
        text: "I'll set up an auto-party and nap",
        scores: { lazyLoop: 2, numberNoodle: 1 }
      }
    ]
  },
  {
    id: 9,
    scenario: "💼 Someone needs your help on a project!",
    choices: [
      {
        text: "Let me build you a solid plan!",
        scores: { brickie: 2, numberNoodle: 1 }
      },
      {
        text: "I'll make it look AMAZING! ✨",
        scores: { pixelPuff: 2, sparkleChaser: 1 }
      },
      {
        text: "I know how to optimize this!",
        scores: { lazyLoop: 2, stickyNote: 1 }
      },
      {
        text: "Whoops I made it weird lol",
        scores: { glitchGremlin: 2, safetySnail: 1 }
      }
    ]
  },
  {
    id: 10,
    scenario: "🌟 The end! What's your legacy?",
    choices: [
      {
        text: "A solid foundation for future friends!",
        scores: { brickie: 2, mossyRock: 2 }
      },
      {
        text: "Beautiful vibes and inspiration! 💫",
        scores: { pixelPuff: 2, hypeHorn: 2 }
      },
      {
        text: "Perfect documentation of everything!",
        scores: { stickyNote: 2, numberNoodle: 2 }
      },
      {
        text: "Pure chaotic fun energy!!",
        scores: { glitchGremlin: 2, sparkleChaser: 2 }
      }
    ]
  }
];

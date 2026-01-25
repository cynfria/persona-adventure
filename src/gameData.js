import blockImg from './assets/personas/block.png';
import pixelImg from './assets/personas/pixel.png';
import stickyImg from './assets/personas/sticky.png';
import wormImg from './assets/personas/worm.png';
import starImg from './assets/personas/star.png';
import snailImg from './assets/personas/snail.png';
import bugImg from './assets/personas/bug.png';
import rockImg from './assets/personas/rock.png';
import blobImg from './assets/personas/blob.png';
import ballImg from './assets/personas/ball.png';
import coffeeImg from './assets/personas/coffee.png';
import moonImg from './assets/personas/moon.png';
import duckImg from './assets/personas/duck.png';

// Animated scenes
import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10 } from './components/AnimatedScenes';

export const personas = {
  brickie: {
    id: 'brickie',
    name: 'Blocky',
    vibe: 'A colorful, blocky friend who loves snapping pieces together perfectly.',
    traits: ['modular', 'alphabetizes cereal boxes', 'color codes closet by RGB value', 'only eats square foods', 'everything must click together', 'owns 12 types of containers', 'organized'],
    color: '#D2691E',
    emoji: '🧱',
    image: blockImg,
    mostCompatible: { id: 'stickyNote', reason: 'Both appreciate structure and organization' },
    leastCompatible: { id: 'glitchGremlin', reason: 'Chaos and instability clash with your need for stability' }
  },
  pixelPuff: {
    id: 'pixelPuff',
    name: 'The Pixel Puff',
    vibe: 'A soft, colorful cloud that changes colors based on its mood.',
    traits: ['perfectionist', 'drinks matcha lattes only', 'has 47 pinterest boards', 'cries at sunsets', 'aesthetic', 'rearranges furniture weekly', 'owns too many throw pillows'],
    color: '#FFB6D9',
    emoji: '☁️',
    image: pixelImg,
    mostCompatible: { id: 'sparkleChaser', reason: 'Both appreciate beauty and sparkly things' },
    leastCompatible: { id: 'glitchGremlin', reason: 'Their chaos destroys your carefully crafted aesthetics' }
  },
  stickyNote: {
    id: 'stickyNote',
    name: 'The Sticky Note',
    vibe: 'A helpful, square piece of paper that sticks to everyone to remind them of things.',
    traits: ['organized', 'meal preps on sundays', 'has 3 different planners', 'sends calendar invites to nap', 'punctual', 'makes lists of lists', 'arrives 30 min early everywhere'],
    color: '#FFE66D',
    emoji: '📝',
    image: stickyImg,
    mostCompatible: { id: 'brickie', reason: 'Your organization helps them build perfectly' },
    leastCompatible: { id: 'glitchGremlin', reason: 'They ignore all your careful reminders and break everything' }
  },
  numberNoodle: {
    id: 'numberNoodle',
    name: 'The Number Noodle',
    vibe: 'A long, wiggly worm made of graphs and digits.',
    traits: ['analytical', 'tracks daily steps religiously', 'rates everything out of 10', 'counts sheep in spreadsheets', 'optimizer', 'budgets fun to the penny', 'times showers for efficiency'],
    color: '#4ECDC4',
    emoji: '📊',
    image: wormImg,
    mostCompatible: { id: 'lazyLoop', reason: 'You both optimize for maximum efficiency' },
    leastCompatible: { id: 'glitchGremlin', reason: 'Random chaos ruins all your carefully calculated predictions' }
  },
  sparkleChaser: {
    id: 'sparkleChaser',
    name: 'The Sparkle Chaser',
    vibe: 'A hyperactive creature that runs after anything shiny.',
    traits: ['impulsive', '47 unfinished hobbies', 'buys every new gadget', 'drinks 6 coffees a day', 'chaotic', 'forgets why they entered rooms', 'has 284 browser tabs open'],
    color: '#FFD93D',
    emoji: '⭐',
    image: starImg,
    mostCompatible: { id: 'bouncyBall', reason: 'You match each other\'s high energy and enthusiasm' },
    leastCompatible: { id: 'mossyRock', reason: 'Their stillness and slowness drive you absolutely crazy' }
  },
  safetySnail: {
    id: 'safetySnail',
    name: 'The Safety Snail',
    vibe: 'A shy creature that hides in its tough shell when strangers appear.',
    traits: ['cautious', 'wears helmet indoors', 'triple checks locks', 'reads all terms & conditions', 'paranoid', 'uses VPN at home', 'googles people before meeting them'],
    color: '#A8DADC',
    emoji: '🐌',
    image: snailImg,
    mostCompatible: { id: 'mossyRock', reason: 'You both appreciate peace, quiet, and not moving' },
    leastCompatible: { id: 'sparkleChaser', reason: 'Their unpredictable energy is way too overwhelming for you' }
  },
  glitchGremlin: {
    id: 'glitchGremlin',
    name: 'Bug Buddy',
    vibe: 'A chaotic code creature that thrives on bugs, broken builds, and "it works on my machine".',
    traits: ['chaotic', 'eats pizza for breakfast', 'sleeps in jeans', 'breaks prod on fridays', 'lost 3 wallets this year', 'nocturnal', 'thinks documentation is optional'],
    color: '#E63946',
    emoji: '👾',
    image: bugImg,
    mostCompatible: { id: 'sparkleChaser', reason: 'They find your chaos exciting and unpredictable' },
    leastCompatible: { id: 'brickie', reason: 'You destroy everything they carefully build' }
  },
  mossyRock: {
    id: 'mossyRock',
    name: 'The Mossy Rock',
    vibe: 'An ancient, unmoving boulder that has been here since the beginning of time.',
    traits: ['stubborn', 'same lunch for 10 years', 'still uses windows XP', 'naps 3 times daily', 'unchanging', 'refuses to update anything', 'has had same haircut since 2008'],
    color: '#6C757D',
    emoji: '🪨',
    image: rockImg,
    mostCompatible: { id: 'safetySnail', reason: 'You both prefer staying in one safe, comfortable place' },
    leastCompatible: { id: 'bouncyBall', reason: 'All that noise and energy disturbs your peaceful existence' }
  },
  bouncyBall: {
    id: 'bouncyBall',
    name: 'Bouncy Ball',
    vibe: 'A cheerful, bouncy friend that can\'t sit still and spreads good vibes everywhere.',
    traits: ['energetic', 'texts in all caps', 'dances in grocery stores', 'knows everyone somehow', 'optimistic', 'triple books weekends', 'photobombs strangers'],
    color: '#FF6B6B',
    emoji: '🏐',
    image: ballImg,
    mostCompatible: { id: 'sparkleChaser', reason: 'You both live for excitement and high energy moments' },
    leastCompatible: { id: 'safetySnail', reason: 'Your endless energy and enthusiasm overwhelm them' }
  },
  lazyLoop: {
    id: 'lazyLoop',
    name: 'Chill Blob',
    vibe: 'A squishy, shapeless friend that flows through life effortlessly and keeps everything smooth.',
    traits: ['efficient', 'works from bed', 'orders groceries online', 'invented the 2-hour nap', 'makes hard things easy', 'relaxed', 'automates birthday texts'],
    color: '#95E1D3',
    emoji: '🫠',
    image: blobImg,
    mostCompatible: { id: 'numberNoodle', reason: 'You both appreciate efficiency and smart optimization' },
    leastCompatible: { id: 'bouncyBall', reason: 'All that energy and noise disrupts your peaceful flow' }
  },
  coffeeCup: {
    id: 'coffeeCup',
    name: 'Coffee Cup',
    vibe: 'A warm, energizing friend who\'s always buzzing with ideas and enthusiasm.',
    traits: ['caffeinated', 'morning person', 'always has new ideas', 'talks really fast', 'productive', 'wakes up at 5am', 'needs constant stimulation'],
    color: '#8B4513',
    emoji: '☕',
    image: coffeeImg,
    mostCompatible: { id: 'sparkleChaser', reason: 'You both have endless energy and enthusiasm' },
    leastCompatible: { id: 'mossyRock', reason: 'Your constant energy exhausts their slow, steady pace' }
  },
  sleepyMoon: {
    id: 'sleepyMoon',
    name: 'Sleepy Moon',
    vibe: 'A dreamy, nocturnal friend who thinks deeply and feels everything intensely.',
    traits: ['nocturnal', 'creative at 2am', 'overthinks everything', 'loves stargazing', 'moody', 'writes poetry', 'sleeps til noon'],
    color: '#C8A2C8',
    emoji: '🌙',
    image: moonImg,
    mostCompatible: { id: 'pixelPuff', reason: 'You both appreciate beauty and deep feelings' },
    leastCompatible: { id: 'coffeeCup', reason: 'Their morning energy clashes with your night owl schedule' }
  },
  rubberDuck: {
    id: 'rubberDuck',
    name: 'Rubber Duck',
    vibe: 'A patient, supportive friend who listens without judgment and helps you figure things out.',
    traits: ['patient', 'good listener', 'asks helpful questions', 'non-judgmental', 'supportive', 'always available', 'debugging expert'],
    color: '#FFD700',
    emoji: '🦆',
    image: duckImg,
    mostCompatible: { id: 'safetySnail', reason: 'You both value careful, thoughtful approaches' },
    leastCompatible: { id: 'glitchGremlin', reason: 'Their chaos stresses you out' }
  }
};

export const questions = [
  {
    id: 1,
    scenario: "You wake up in a funky digital world! What catches your eye first?",
    scene: Scene1,
    choices: [
      {
        text: "Ooh, everything is so neat and organized!",
        scores: { brickie: 2, stickyNote: 2 }
      },
      {
        text: "OMG the colors are SO pretty!! 🌈",
        scores: { pixelPuff: 2, bouncyBall: 1 }
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
    scenario: "A cute lil creature bounces up and offers you a quest!",
    scene: Scene2,
    choices: [
      {
        text: "YES YES YES LET'S GOOO!! 🏃‍♀️",
        scores: { sparkleChaser: 2, bouncyBall: 2, coffeeCup: 1 }
      },
      {
        text: "Wait, lemme write this down! 📝",
        scores: { stickyNote: 2, numberNoodle: 2, rubberDuck: 1 }
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
    scenario: "You find a mysterious gadget! What's your move?",
    scene: Scene3,
    choices: [
      {
        text: "Time to build something cool and organized!",
        scores: { brickie: 2, stickyNote: 1 }
      },
      {
        text: "Can I make it prettier? ✨",
        scores: { pixelPuff: 2, sleepyMoon: 1 }
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
    scenario: "Your squad needs a leader! What do you do?",
    scene: Scene4,
    choices: [
      {
        text: "GET HYPED!! *rallies everyone*",
        scores: { bouncyBall: 2, sparkleChaser: 2 }
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
    scenario: "Locked door with a puzzle! How do you crack it?",
    scene: Scene5,
    choices: [
      {
        text: "Build a solution piece by piece!",
        scores: { brickie: 2, lazyLoop: 1 }
      },
      {
        text: "Match all the pretty colors! 🎨",
        scores: { pixelPuff: 2, bouncyBall: 1 }
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
    scenario: "CHAOS ALERT!! Everything's going wrong! What now?",
    scene: Scene6,
    choices: [
      {
        text: "TIME TO TAKE CHARGE!! 📢",
        scores: { bouncyBall: 2, coffeeCup: 1 }
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
        scores: { numberNoodle: 2, rubberDuck: 1 }
      }
    ]
  },
  {
    id: 7,
    scenario: "Treasure chest!! What do you hope is inside?",
    scene: Scene7,
    choices: [
      {
        text: "SPARKLES AND SHINY THINGS!! ✨",
        scores: { sparkleChaser: 2, pixelPuff: 1 }
      },
      {
        text: "Perfect art supplies in dreamy colors!",
        scores: { pixelPuff: 2, sleepyMoon: 1 }
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
    scenario: "Victory!! Time to celebrate! What's your vibe?",
    scene: Scene8,
    choices: [
      {
        text: "PARTY TIME!! *blasts music*",
        scores: { bouncyBall: 2, sparkleChaser: 2, coffeeCup: 1 }
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
    scenario: "Someone needs your help on a project!",
    scene: Scene9,
    choices: [
      {
        text: "Let me build you a solid plan!",
        scores: { brickie: 2, rubberDuck: 1 }
      },
      {
        text: "I'll make it look AMAZING! ✨",
        scores: { pixelPuff: 2, sleepyMoon: 1 }
      },
      {
        text: "I know how to optimize this!",
        scores: { lazyLoop: 2, coffeeCup: 1 }
      },
      {
        text: "Whoops I made it weird lol",
        scores: { glitchGremlin: 2, sparkleChaser: 1 }
      }
    ]
  },
  {
    id: 10,
    scenario: "The end! What's your legacy?",
    scene: Scene10,
    choices: [
      {
        text: "A solid foundation for future friends!",
        scores: { brickie: 2, rubberDuck: 2 }
      },
      {
        text: "Beautiful vibes and inspiration! 💫",
        scores: { pixelPuff: 2, sleepyMoon: 2 }
      },
      {
        text: "Perfect documentation of everything!",
        scores: { stickyNote: 2, numberNoodle: 2 }
      },
      {
        text: "Pure chaotic fun energy!!",
        scores: { glitchGremlin: 2, coffeeCup: 2 }
      }
    ]
  }
];

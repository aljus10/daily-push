const modeConfig = {
  morning: {
    label: "Morning mode",
    title: "The day has not asked for perfection. Only presence.",
    subcopy: "Morning is usually when doubt tries to disguise itself as caution. What feels closest right now?",
    prompt: "Choose your morning state.",
    colors: ["#21486b", "#7fb6d8", "#f7deb0"],
    moods: ["Hesitant", "Anxious", "Distracted"]
  },
  afternoon: {
    label: "Afternoon mode",
    title: "The middle of the day is where weak stories grow.",
    subcopy: "This is often the hour of sagging energy and slipping focus. Be honest. What is happening to you right now?",
    prompt: "Choose what feels closest.",
    colors: ["#355070", "#b78d52", "#e8d8c3"],
    moods: ["Tired", "Unmotivated", "Overwhelmed"]
  },
  evening: {
    label: "Evening mode",
    title: "Do not let the evening turn into silent surrender.",
    subcopy: "Evening can either become reflection or regret. Name the feeling before it starts running the room.",
    prompt: "What mood owns this evening?",
    colors: ["#5d275d", "#c06c84", "#f6bd60"],
    moods: ["Regretful", "Drained", "Restless"]
  },
  night: {
    label: "Night mode",
    title: "Night magnifies what the mind refuses to settle.",
    subcopy: "This is where overthinking grows loud. Slow it down by naming it.",
    prompt: "What are you carrying tonight?",
    colors: ["#111827", "#243b53", "#8da9c4"],
    moods: ["Overthinking", "Lonely", "Numb"]
  }
};

const library = {
  morning: {
    Hesitant: [
      {
        quote: "Waste no more time arguing what a good man should be. Be one.",
        author: "Marcus Aurelius",
        reflection: "Hesitation often dresses itself like intelligence. But there is a point where delay becomes avoidance. Start before your mind makes the day smaller.",
        action: "Choose one useful task and begin it for three minutes."
      },
      {
        quote: "It is not death that a man should fear, but he should fear never beginning to live.",
        author: "Marcus Aurelius",
        reflection: "A cautious morning can quietly become a postponed life. The first move matters because it reminds you that you are not stuck.",
        action: "Do the thing you have been mentally circling."
      }
    ],
    Anxious: [
      {
        quote: "We suffer more often in imagination than in reality.",
        author: "Seneca",
        reflection: "Your nervous system may be forecasting disaster long before the day has earned that verdict. Do not hand the morning to imagined pain.",
        action: "Exhale slowly and name one real thing you can control."
      },
      {
        quote: "Today I escaped from anxiety. Or no, I discarded it, because it was within me.",
        author: "Marcus Aurelius",
        reflection: "Anxiety feels like weather, but part of it is interpretation. You may not control the first feeling, but you can refuse to worship it.",
        action: "Sit upright and start with the smallest real responsibility."
      }
    ],
    Distracted: [
      {
        quote: "You could leave life right now. Let that determine what you do and say and think.",
        author: "Marcus Aurelius",
        reflection: "Distraction is expensive because it trades the living day for scattered fragments. Treat attention like something sacred again.",
        action: "Put your phone down for ten minutes and focus on one thing."
      },
      {
        quote: "If a man knows not to which port he sails, no wind is favorable.",
        author: "Seneca",
        reflection: "A distracted morning often means the target was never named. Clarity is often more powerful than motivation.",
        action: "Write the single most important thing for today."
      }
    ]
  },
  afternoon: {
    Tired: [
      {
        quote: "Fortify thyself with contentment: that is an impregnable stronghold.",
        author: "Epictetus",
        reflection: "A tired body is not a ruined day. Energy is lower, yes — but dignity, steadiness, and simple effort are still available to you.",
        action: "Drink water, stand up, and do the next task gently instead of dramatically."
      },
      {
        quote: "How much more grievous are the consequences of anger than the causes of it.",
        author: "Marcus Aurelius",
        reflection: "Do not become hostile toward your own slump. Afternoon fatigue needs adjustment, not self-contempt.",
        action: "Reduce the task, then continue anyway."
      }
    ],
    Unmotivated: [
      {
        quote: "No man is free who is not master of himself.",
        author: "Epictetus",
        reflection: "Motivation is a guest. Self-command is a skill. Let the next ten minutes prove who is in charge.",
        action: "Work for five focused minutes before you ask your mood for permission."
      },
      {
        quote: "Do not explain your philosophy. Embody it.",
        author: "Epictetus",
        reflection: "You do not need another internal speech. You need a visible act that interrupts drift.",
        action: "Start one task so small it feels almost insulting."
      }
    ],
    Overwhelmed: [
      {
        quote: "Thou mayest always speed, if thou wilt but make choice of the right way.",
        author: "Marcus Aurelius",
        reflection: "Overwhelm usually comes from trying to carry the whole day at once. The mind softens when the next step is made concrete.",
        action: "Write only the next step. Not the whole plan. Just the next step."
      },
      {
        quote: "He who is everywhere is nowhere.",
        author: "Seneca",
        reflection: "Your mind is stretched because it is being asked to live in too many places at once. Return it to one task and one breath.",
        action: "Close everything except the thing in front of you."
      }
    ]
  },
  evening: {
    Regretful: [
      {
        quote: "Think of yourself as dead. You have lived your life. Now take what is left and live it properly.",
        author: "Marcus Aurelius",
        reflection: "Regret is often a demand to relive what cannot be relived. Evening is better used for repair than self-prosecution.",
        action: "Choose one thing you can still do well before sleep."
      },
      {
        quote: "Begin at once to live, and count each separate day as a separate life.",
        author: "Seneca",
        reflection: "Today may not have impressed you. But it is not beyond dignity yet. Finish it in a way that earns some respect.",
        action: "Reset your space and close one open loop."
      }
    ],
    Drained: [
      {
        quote: "The happiness of your life depends upon the quality of your thoughts.",
        author: "Marcus Aurelius",
        reflection: "Drain is real, but exhaustion often gets mixed with harsh inner narration. Do not let fatigue become a character judgment.",
        action: "Lower the standard, keep the standard of effort."
      },
      {
        quote: "It is not that we have a short time to live, but that we waste a lot of it.",
        author: "Seneca",
        reflection: "Do not spend your last awake hours numbing yourself past recovery. A softer, cleaner close is still possible.",
        action: "Choose rest on purpose instead of escaping by accident."
      }
    ],
    Restless: [
      {
        quote: "Nowhere can man find a quieter or more untroubled retreat than in his own soul.",
        author: "Marcus Aurelius",
        reflection: "Restlessness is often unspent thought and unprocessed noise. The solution may be less input, not more stimulation.",
        action: "Step away from the feed and sit in silence for two minutes."
      },
      {
        quote: "Make the best use of what is in your power, and take the rest as it happens.",
        author: "Epictetus",
        reflection: "You cannot resolve the entire emotional inventory of a day in one evening. But you can stop fighting what is no longer yours to control.",
        action: "Write one thing to do tomorrow and let the rest stay closed."
      }
    ]
  },
  night: {
    Overthinking: [
      {
        quote: "The soul becomes dyed with the color of its thoughts.",
        author: "Marcus Aurelius",
        reflection: "Night makes thoughts feel authoritative. They are not automatically true because they arrived late and loud.",
        action: "Name the thought, then ask whether it deserves your sleep."
      },
      {
        quote: "If you are distressed by anything external, the pain is not due to the thing itself but to your estimate of it.",
        author: "Marcus Aurelius",
        reflection: "Some thoughts are facts. Many are interpretations with better marketing. Separate the two before you obey either.",
        action: "Write what is true, then write what you are adding to it."
      }
    ],
    Lonely: [
      {
        quote: "The best revenge is not to be like your enemy.",
        author: "Marcus Aurelius",
        reflection: "Loneliness often tempts you toward bitterness, resentment, or self-abandonment. Refuse that trade. Keep your character warm.",
        action: "Send one honest message or speak kindly to yourself out loud."
      },
      {
        quote: "Difficulties strengthen the mind, as labor does the body.",
        author: "Seneca",
        reflection: "Lonely nights can distort your worth. But solitude is not proof of meaninglessness. Sometimes it is the place where depth is being built quietly.",
        action: "Put one hand on your chest and stay with yourself instead of running."
      }
    ],
    Numb: [
      {
        quote: "Very little is needed to make a happy life; it is all within yourself.",
        author: "Marcus Aurelius",
        reflection: "Numbness is not always emptiness. Sometimes it is overload, depletion, or unprocessed strain. Treat it gently, not theatrically.",
        action: "Take one grounding action: water, shower, prayer, or sleep."
      },
      {
        quote: "First say to yourself what you would be; and then do what you have to do.",
        author: "Epictetus",
        reflection: "When you feel nothing, identity can still lead where emotion will not. Be the kind of person who takes care of the night.",
        action: "Prepare for sleep like someone worth protecting."
      }
    ]
  }
};

const perspectiveNotes = {
  morning: "This morning did not arrive for you to be decorative. It arrived so you could use it.",
  afternoon: "A fading afternoon is not proof that the day is lost. It is a test of whether you can recover on command.",
  evening: "The day may be imperfect, but it is still unfinished. That matters.",
  night: "You are still here. That is larger than the story your tired mind is telling."
};

const introPanel = document.getElementById("introPanel");
const resultPanel = document.getElementById("resultPanel");
const perspectivePanel = document.getElementById("perspectivePanel");
const modeSwitcher = document.getElementById("modeSwitcher");

const timeLabel = document.getElementById("timeLabel");
const mainTitle = document.getElementById("mainTitle");
const mainSubcopy = document.getElementById("mainSubcopy");
const promptLine = document.getElementById("promptLine");
const moodButtons = document.getElementById("moodButtons");
const metaLine = document.getElementById("metaLine");

const selectedMood = document.getElementById("selectedMood");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const reflectionText = document.getElementById("reflectionText");
const actionText = document.getElementById("actionText");
const perspectiveText = document.getElementById("perspectiveText");

const backBtn = document.getElementById("backBtn");
const anotherBtn = document.getElementById("anotherBtn");
const perspectiveBtn = document.getElementById("perspectiveBtn");
const changeModeBtn = document.getElementById("changeModeBtn");
const closeSwitcherBtn = document.getElementById("closeSwitcherBtn");
const switchButtons = Array.from(document.querySelectorAll(".switch-btn"));

let currentMode = detectMode();
let currentMood = null;
let currentIndex = 0;

function detectMode() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
}

function updateMeta() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const dayString = now.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });
  metaLine.textContent = `${dayString} • ${timeString}`;
}

function setColors(mode) {
  const [a, b, c] = modeConfig[mode].colors;
  const root = document.documentElement;
  root.style.setProperty("--bg1", a);
  root.style.setProperty("--bg2", b);
  root.style.setProperty("--bg3", c);
}

function renderIntro() {
  const config = modeConfig[currentMode];
  setColors(currentMode);
  updateMeta();

  timeLabel.textContent = config.label;
  mainTitle.textContent = config.title;
  mainSubcopy.textContent = config.subcopy;
  promptLine.textContent = config.prompt;

  moodButtons.innerHTML = "";
  config.moods.forEach((mood) => {
    const btn = document.createElement("button");
    btn.className = "mood-btn";
    btn.type = "button";
    btn.textContent = mood;
    btn.addEventListener("click", () => showThought(mood));
    moodButtons.appendChild(btn);
  });

  perspectiveText.textContent = perspectiveNotes[currentMode];
  introPanel.classList.remove("hidden");
  resultPanel.classList.add("hidden");
  perspectivePanel.classList.add("hidden");
}

function showThought(mood) {
  currentMood = mood;
  const entries = library[currentMode][mood];
  currentIndex = Math.floor(Math.random() * entries.length);
  renderThought(entries[currentIndex]);
}

function renderThought(entry) {
  selectedMood.textContent = `You chose: ${currentMood}`;
  quoteText.textContent = entry.quote;
  quoteAuthor.textContent = `— ${entry.author}`;
  reflectionText.textContent = entry.reflection;
  actionText.textContent = entry.action;

  introPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");
  perspectivePanel.classList.remove("hidden");
}

function showAnother() {
  if (!currentMood) return;
  const entries = library[currentMode][currentMood];
  currentIndex = (currentIndex + 1) % entries.length;
  renderThought(entries[currentIndex]);
}

backBtn.addEventListener("click", renderIntro);
anotherBtn.addEventListener("click", showAnother);
perspectiveBtn.addEventListener("click", () => {
  perspectiveText.textContent = perspectiveNotes[currentMode];
});
changeModeBtn.addEventListener("click", () => {
  modeSwitcher.classList.remove("hidden");
});
closeSwitcherBtn.addEventListener("click", () => {
  modeSwitcher.classList.add("hidden");
});

switchButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentMode = btn.dataset.mode;
    modeSwitcher.classList.add("hidden");
    renderIntro();
  });
});

updateMeta();
setInterval(updateMeta, 30000);
renderIntro();
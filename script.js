// API Base URL
const API_BASE = '/api';

// Quiz questions database - All questions are loaded here
const quizQuestions = [
  {
    "question": "Harmony in the family begins with understanding",
    "options": ["Human relationships", "Wealth accumulation", "Social status", "Power structures"],
    "answer": 0
  },
  {
    "question": "The foundation of human relationships is based on",
    "options": ["Mutual trust and respect", "Competition", "Authority", "Fear"],
    "answer": 0
  },
  {
    "question": "Living in harmony with others promotes",
    "options": ["Mutual happiness", "Isolation", "Domination", "Exploitation"],
    "answer": 0
  },
  {
    "question": "The ultimate aim of harmony in society is",
    "options": ["Universal human order", "Economic superiority", "Political dominance", "Cultural uniformity"],
    "answer": 0
  },
  {
    "question": "Coexistence in nature refers to",
    "options": ["Mutual dependence and balance", "Survival of the fittest", "Human exploitation of nature", "Random order"],
    "answer": 0
  }
];
  {
    "question": "The best way to make friends is",
    "options": ["Being kind and genuine", "Having a lot of money", "Having a good job", "Being popular"],
    "answer": 0
  },
  {
    "question": "The most important thing in life is",
    "options": ["Health", "Wealth", "Fame", "Power"],
    "answer": 0
  },
  {
    "question": "The best way to overcome failure is",
    "options": ["Learning from it", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial stability is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve success in life is",
    "options": ["Hard work and dedication", "Luck", "Networking", "Inheritance"],
    "answer": 0
  },
  {
    "question": "The most important thing in a marriage is",
    "options": ["Communication", "Money", "Sex", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to achieve financial security is",
    "options": ["Saving and investing", "Inheritance", "Lottery", "High-paying job"],
    "answer": 0
  },
  {
    "question": "The most important thing in a friendship is",
    "options": ["Trust", "Shared interests", "Physical proximity", "Material benefits"],
    "answer": 0
  },
  {
    "question": "The best way to improve your health is",
    "options": ["Eating well and exercising", "Taking supplements", "Surgery", "Rest"],
    "answer": 0
  },
  {
    "question": "The key to a successful career is",
    "options": ["Hard work and dedication", "Networking", "Luck", "Education"],
    "answer": 0
  },
  {
    "question": "The best way to achieve inner peace is",
    "options": ["Mindfulness and meditation", "Material possessions", "Social status", "Power"],
    "answer": 0
  },
  {
    "question": "The most important thing in a relationship is",
    "options": ["Trust", "Money", "Physical attraction", "Dominance"],
    "answer": 0
  },
  {
    "question": "The best way to overcome adversity is",
    "options": ["Resilience and perseverance", "Giving up", "Blaming others", "Ignoring it"],
    "answer": 0
  },
  {
    "question": "The key to a successful business is",
    "options": ["Innovation and customer service", "Money", "Luck", "Dominance"],
    "answer": 0
  }
];
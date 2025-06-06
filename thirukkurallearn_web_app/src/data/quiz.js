//
// Mock quiz data for ThirukkuralLearn.
// Each question is either a meaning/translation multiple choice or matching Kural to explanation.
//

const quizQuestions = [
  {
    id: 1,
    type: "meaning",
    question: "What is the meaning of this Kural?",
    kural: {
      number: 1,
      tamil: "அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு.",
    },
    options: [
      "A as the first of all letters, the world has the Almighty as first.",
      "The world begins with love, as the alphabet begins with 'A'.",
      "Without virtue, life holds no meaning.",
      "Learning starts with 'A', but wisdom starts with effort.",
    ],
    correctOptionIndex: 0,
    explanation:
      "'A' is the beginning, just as the Almighty is the origin of the world.",
  },
  {
    id: 2,
    type: "match",
    question: "Select the correct explanation for this Kural.",
    kural: {
      number: 4,
      tamil: "வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு\nயாண்டும் இடும்பைஇல்.",
      english:
        "To those united with the desireless One, there is never distress.",
    },
    options: [
      "Supreme happiness lies in right companionship.",
      "Those aligned with detachment suffer no miseries.",
      "True learning bears fruit only with devotion.",
      "Compassion brings all blessings.",
    ],
    correctOptionIndex: 1,
    explanation:
      "Those who practice detachment and unite with the desireless One do not encounter misery.",
  },
  {
    id: 3,
    type: "meaning",
    question: "What does this Kural teach?",
    kural: {
      number: 8,
      tamil: "அன்பும் அறமும் உடைத்தே பொருளும்\nஇன்பும் உயிர்காவல் செயுபவர்க்கு உண்டு.",
      english: "",
    },
    options: [
      "Love and virtue, wealth and joy dwell with those who protect life.",
      "Only those with knowledge can achieve happiness.",
      "Truthful speech leads to wealth.",
      "Hard work always brings prosperity.",
    ],
    correctOptionIndex: 0,
    explanation: "Compassion brings all blessings.",
  },
  {
    id: 4,
    type: "match",
    question: "Which is the correct couplet for this meaning? 'Clarity and peace come with stillness of mind.'",
    kural: null,
    options: [
      "அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு.",
      "இந்தையுள் உள்ள எல்லாம் தெரிந்தாயினும்\nசிந்தையின் சோர்வு வரும்.",
      "செல்வம் பொழுது போல் வருமாயின்\nஅல்லது விதியாம்.",
      "அன்பும் அறமும் உடைத்தே பொருளும்\nஇன்பும் உயிர்காவல் செயுபவர்க்கு உண்டு.",
    ],
    correctOptionIndex: 1,
    explanation:
      "'Even knowing all, fatigue afflicts one whose mind is restless.' Stillness brings clarity and peace.",
  },
];

export default quizQuestions;

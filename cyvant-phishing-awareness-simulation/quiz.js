const questions = [
  {
    question: "What is phishing?",
    options: [
      "A type of outdoor sport",
      "A cyberattack using fake emails or websites to steal information",
      "A software used to catch computer viruses",
      "A secure method of sending emails"
    ],
    correct: 1,
    explanation: "✅ Correct! Phishing is a cyberattack where criminals use deceptive emails or fake websites to trick victims into revealing sensitive information like passwords or credit card numbers."
  },
  {
    question: "You receive an urgent email from your 'bank' saying your account will be closed in 24 hours unless you click a link immediately. What should you do?",
    options: [
      "Click the link immediately — it sounds urgent",
      "Forward it to all your colleagues",
      "Delete it and contact your bank directly through their official website",
      "Reply to the email asking for more information"
    ],
    correct: 2,
    explanation: "✅ Correct! Urgency is a classic phishing tactic. Always contact organisations directly through their official website or phone number — never through links in suspicious emails."
  },
  {
    question: "Which of these URLs is most likely to be a phishing attempt?",
    options: [
      "https://www.barclays.co.uk/login",
      "https://www.barclays-secure-login.net/verify",
      "https://barclays.co.uk/help",
      "https://online.barclays.com"
    ],
    correct: 1,
    explanation: "✅ Correct! The URL 'barclays-secure-login.net' is suspicious. Attackers add words like 'secure' and 'verify' to fake URLs to appear legitimate. Always check the actual domain name carefully."
  },
  {
    question: "What does the padlock icon in your browser's address bar indicate?",
    options: [
      "The website is 100% safe and cannot be a phishing site",
      "The website belongs to a government organisation",
      "The connection between your browser and the website is encrypted",
      "The website has been verified by your IT department"
    ],
    correct: 2,
    explanation: "✅ Correct! The padlock means your connection is encrypted (HTTPS), but it does NOT guarantee the website is legitimate. Phishing sites can also have padlocks. Always verify the full URL."
  },
  {
    question: "You receive an email at work with an attachment named 'Salary_Update_2024.exe'. What should you do?",
    options: [
      "Open it immediately — it could be important news about your salary",
      "Open it only if it came from your manager's name",
      "Do not open it — report it to your IT security team immediately",
      "Save it to your desktop and scan it with any free online tool"
    ],
    correct: 2,
    explanation: "✅ Correct! .exe files sent via email are extremely dangerous. Legitimate HR communications never send executable files. Report it to your IT security team immediately without opening it."
  }
];

function loadQuestion() {

  const current = questions[currentQuestion];

  feedbackBox.className = 'feedback-box';
  feedbackText.textContent = '';

  questionCounter.textContent =
    'Question ' + (currentQuestion + 1) + ' of ' + questions.length;

  progressBar.style.width =
    ((currentQuestion + 1) / questions.length * 100) + '%';

  questionText.textContent = current.question;

  const buttons = optionsGrid.querySelectorAll('.option-btn');

  buttons.forEach(function(btn, index) {
    btn.textContent = current.options[index];
    btn.className = 'option-btn';
    btn.disabled = false;
    btn.onclick = function() {
      selectAnswer(index);
    };
  });

}

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById('questionText');
const optionsGrid = document.getElementById('optionsGrid');
const feedbackBox = document.getElementById('feedbackBox');
const feedbackText = document.getElementById('feedbackText');
const questionCounter = document.getElementById('questionCounter');
const scoreTracker = document.getElementById('scoreTracker');
const progressBar = document.getElementById('progressBar');
const questionCard = document.getElementById('questionCard');
const scoreScreen = document.getElementById('scoreScreen');
const finalScore = document.getElementById('finalScore');
const scoreMessage = document.getElementById('scoreMessage');
const scoreIcon = document.getElementById('scoreIcon');
const restartBtn = document.getElementById('restartBtn');

function selectAnswer(selectedIndex) {

  const current = questions[currentQuestion];
  const buttons = optionsGrid.querySelectorAll('.option-btn');

  buttons.forEach(function(btn) {
    btn.disabled = true;
  });

  if (selectedIndex === current.correct) {
    score++;
    buttons[selectedIndex].classList.add('correct');
    feedbackBox.className = 'feedback-box show-correct';
    feedbackText.textContent = current.explanation;
    scoreTracker.textContent = 'Score: ' + score;
  } else {
    buttons[selectedIndex].classList.add('wrong');
    buttons[current.correct].classList.add('correct');
    feedbackBox.className = 'feedback-box show-wrong';
    feedbackText.textContent = '❌ Incorrect. ' + current.explanation;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    setTimeout(loadQuestion, 2500);
  } else {
    setTimeout(showScoreScreen, 2500);
  }

}

function showScoreScreen() {

  questionCard.style.display = 'none';

  finalScore.textContent = score;
  scoreScreen.classList.add('visible');

  if (score === 5) {
    scoreIcon.textContent = '🏆';
    scoreMessage.textContent = 'Perfect score! Outstanding cybersecurity awareness. You are well equipped to identify and avoid phishing attacks.';
  } else if (score >= 3) {
    scoreIcon.textContent = '👍';
    scoreMessage.textContent = 'Good effort! You have a solid understanding of phishing threats. Review the awareness guide to strengthen your knowledge further.';
  } else {
    scoreIcon.textContent = '📚';
    scoreMessage.textContent = 'Keep learning! Phishing attacks are sophisticated and evolving. We strongly recommend reviewing the full awareness guide below.';
  }

}

restartBtn.addEventListener('click', function() {
  currentQuestion = 0;
  score = 0;
  scoreTracker.textContent = 'Score: 0';
  scoreScreen.classList.remove('visible');
  questionCard.style.display = 'block';
  loadQuestion();
});

loadQuestion();
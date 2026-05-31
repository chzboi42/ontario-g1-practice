
let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const titleScreen = document.getElementById('title-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionSlider = document.getElementById('question-slider');
const questionCountVal = document.getElementById('question-count-val');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const explanationContainer = document.getElementById('explanation-container');
const explanationText = document.getElementById('explanation-text');

const currentNumberElem = document.getElementById('current-number');
const totalNumberElem = document.getElementById('total-number');
const scoreText = document.getElementById('score-text');

// Setup Slider Limits dynamically based on database size
questionSlider.max = g1QuestionsDatabase.length;
questionSlider.value = g1QuestionsDatabase.length;
questionCountVal.innerText = questionSlider.value;

// Update slider UI text when dragged
questionSlider.addEventListener('input', (e) => {
    questionCountVal.innerText = e.target.value;
});

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', handleNextButton);
restartBtn.addEventListener('click', () => {
    resultsScreen.classList.add('hide');
    titleScreen.classList.remove('hide');
});

function startQuiz() {
    titleScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    
    currentQuestionIndex = 0;
    score = 0;

    // 1. Randomize/Shuffle the master question list
    const shuffledMaster = [...g1QuestionsDatabase].sort(() => Math.random() - 0.5);
    
    // 2. Slice the array to match what the user selected on the slider
    const totalRequested = parseInt(questionSlider.value);
    activeQuestions = shuffledMaster.slice(0, totalRequested);

    totalNumberElem.innerText = activeQuestions.length;
    
    showQuestion();
}

function showQuestion() {
    resetState();
    
    let currentQuestion = activeQuestions[currentQuestionIndex];
    currentNumberElem.innerText = currentQuestionIndex + 1;
    questionText.innerText = currentQuestion.question;

    // Shuffle options so the correct answer isn't always in the same slot
    const shuffledOptions = [...currentQuestion.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(button, option, currentQuestion.correct, currentQuestion.explanation));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hide');
    explanationContainer.classList.add('hide');
    optionsContainer.innerHTML = '';
}

function selectOption(selectedBtn, chosenOption, correctOption, explanation) {
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    if (chosenOption === correctOption) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        allButtons.forEach(btn => {
            if (btn.innerText === correctOption) {
                btn.classList.add('correct');
            }
        });
    }

    explanationText.innerText = explanation;
    explanationContainer.classList.remove('hide');
    nextBtn.classList.remove('hide');
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.add('hide');
    resultsScreen.classList.remove('hide');
    scoreText.innerText = `You scored ${score} out of ${activeQuestions.length}!\n` +
                            (score / activeQuestions.length >= 0.8 ? `You passed!`
                                                                : `You failed. Please try again.`);
}
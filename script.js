// ==========================================
// 1. MULTIPLE CHOICE BANK
// ==========================================
const mcData = [
    {
        question: "Which law recognizes Filipino Sign Language (FSL) as the national sign language of the Filipino Deaf?",
        options: ["Republic Act No. 10533", "Republic Act No. 11106", "Republic Act No. 7277", "Republic Act No. 9344"],
        answer: "Republic Act No. 11106",
        explanation: "RA 11106 establishes FSL's use in relevant educational and government contexts."
    },
    {
        question: "If a learner has already mastered the required content, which teaching strategy reduces unnecessary repetition?",
        options: ["Curriculum Compacting", "Mentorship", "Flexible Pacing", "Enrichment"],
        answer: "Curriculum Compacting",
        explanation: "Curriculum compacting reduces repetitive practice to provide more advanced learning opportunities."
    },
    {
        question: "When a learner's development seems atypical, what is the correct boundary of a teacher's role?",
        options: ["Diagnose the condition", "Observe, document, refer, support, and strengthen", "Provide immediate medical intervention", "Wait for the learner to catch up"],
        answer: "Observe, document, refer, support, and strengthen",
        explanation: "Teachers observe and support; only qualified professionals diagnose."
    },
    {
        question: "What is the primary difference between 'Gifted' and 'Talented' according to the slides?",
        options: ["Gifted is for sports, Talented is for math.", "They are exact synonyms.", "Gifted is intellectual/academic; Talented is exceptional developed ability in a particular area.", "Talented learners learn rapidly, gifted do not."],
        answer: "Gifted is intellectual/academic; Talented is exceptional developed ability in a particular area.",
        explanation: "Giftedness is often associated with advanced potential in intellectual domains, while talent refers to areas like music, arts, or sports."
    },
    {
        question: "Which Republic Act amended the Magna Carta for Disabled Persons to change the terminology to 'persons with disability'?",
        options: ["RA 9442", "RA 10665", "RA 11650", "RA 8371"],
        answer: "RA 9442",
        explanation: "RA 9442 also prohibits public ridicule and vilification of persons with disability."
    },
    {
        question: "Which law is known as the Indigenous Peoples' Rights Act of 1997?",
        options: ["Republic Act No. 8371", "Republic Act No. 9344", "Presidential Decree No. 603", "Republic Act No. 10533"],
        answer: "Republic Act No. 8371",
        explanation: "RA 8371 ensures Indigenous children have the right to education in their own language."
    },
    {
        question: "During which stage of child development do learners primarily focus on identity, abstract thinking, and independence?",
        options: ["Infancy", "Early Childhood", "Middle Childhood", "Adolescence"],
        answer: "Adolescence",
        explanation: "Adolescence (approx. ages 12-18) is characterized by identity exploration and abstract thinking."
    },
    {
        question: "What is a recommended accommodation for a learner who experiences severe anxiety during oral presentations?",
        options: ["Force public speaking", "Alternative recorded/video presentation", "Provide a communication board", "Reduce background noise"],
        answer: "Alternative recorded/video presentation",
        explanation: "Providing an alternative presentation method accommodates the anxiety barrier while still assessing the learner."
    },
    {
        question: "Which of the following is an example of 'Low-tech' Augmentative and Alternative Communication (AAC)?",
        options: ["Tablet applications", "Speech-generating devices", "Picture cards and symbol charts", "Screen readers"],
        answer: "Picture cards and symbol charts",
        explanation: "Low-tech AAC includes physical items like picture cards, whereas High-tech includes tablets and digital devices."
    },
    {
        question: "What law is known as the Open High School System Act?",
        options: ["RA 10665", "RA 6710", "RA 9344", "RA 7277"],
        answer: "RA 10665",
        explanation: "RA 10665 provides an alternative modality for learners who experience geographical, socioeconomic, or personal constraints."
    }
];

// ==========================================
// 2. TRUE OR FALSE BANK
// ==========================================
const tfData = [
    {
        question: "A common classroom misconception about gifted learners is that they do not need help and will simply teach themselves.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Many falsely assume gifted learners don't need help, but they actually require responsive educational modifications."
    },
    {
        question: "When communicating with a learner who has difficulty hearing, a teacher should talk while walking around the room.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Strategy 1 explicitly states to avoid talking while walking away or facing the board; you must face the learner."
    },
    {
        question: "Child development is multidimensional, involving cognitive, social, emotional, physical, and language domains.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Child development involves progressive changes across all these interconnected domains."
    },
    {
        question: "An instructional video is automatically accessible to a learner with difficulty hearing as long as it contains clear visual content.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Never assume a video is accessible just because it is visual; you must provide accurate captions/subtitles."
    },
    {
        question: "Under Republic Act No. 11650, Individualized Education Plans (IEPs) are institutionalized.",
        options: ["True", "False"],
        answer: "True",
        explanation: "IEPs are required for learners needing specially designed instruction under this 2022 inclusion act."
    },
    {
        question: "Republic Act No. 7277 is the Magna Carta for Disabled Persons.",
        options: ["True", "False"],
        answer: "True",
        explanation: "RA 7277 establishes rights related to rehabilitation, self-development, and integration into mainstream society."
    },
    {
        question: "Presidential Decree No. 603 focuses primarily on children in conflict with the law.",
        options: ["True", "False"],
        answer: "False",
        explanation: "PD 603 is the Child and Youth Welfare Code. RA 9344 is the Juvenile Justice and Welfare Act for children in conflict with the law."
    },
    {
        question: "If a learner makes a language error, the teacher should constantly correct them by saying 'No, that's wrong'.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Instead of constant correction, teachers should model the desired language form naturally."
    },
    {
        question: "Acceleration strategies for gifted learners can include flexible pacing and advanced coursework.",
        options: ["True", "False"],
        answer: "True",
        explanation: "When educationally appropriate, acceleration provides advanced materials and pacing."
    },
    {
        question: "Middle childhood (ages 9-11) focuses heavily on logical thinking and peer relationships.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The major developmental focus of middle childhood includes logical thinking, competence, and peer connections."
    }
];

// ==========================================
// 3. IDENTIFICATION BANK
// ==========================================
const identData = [
    {
        question: "This Republic Act, enacted in 2022, institutes a policy of inclusion and services for learners with disabilities.",
        answer: "Republic Act No. 11650",
        explanation: "RA 11650 mandates Inclusive Learning Resource Centers (ILRCs)."
    },
    {
        question: "This 1974 decree establishes a child's right to be born well and the right to a wholesome family life.",
        answer: "Presidential Decree No. 603",
        explanation: "PD 603 is also known as The Child and Youth Welfare Code."
    },
    {
        question: "This broad developmental domain involves understanding, expressing, and regulating emotions.",
        answer: "Emotional",
        explanation: "Emotional development dictates how children regulate their feelings."
    },
    {
        question: "This teaching strategy connects gifted learners with professionals, artists, or community experts.",
        answer: "Mentorship",
        explanation: "Mentorship provides specialized guidance beyond standard curriculum."
    },
    {
        question: "This law provides special protection against child abuse, exploitation, and discrimination.",
        answer: "Republic Act No. 6710",
        explanation: "RA 6710 allows the State to intervene if parents or caregivers fail to protect children."
    },
    {
        question: "This law covers children at risk and children in conflict with the law (Juvenile Justice and Welfare Act of 2006).",
        answer: "Republic Act No. 9344",
        explanation: "RA 9344 emphasizes prevention, intervention, and reintegration."
    },
    {
        question: "This term refers to the progressive changes that occur in a child from birth through adolescence.",
        answer: "Child development",
        explanation: "Child development spans cognitive, physical, social, emotional, and language domains."
    },
    {
        question: "This teaching strategy for learners with difficulty seeing involves replacing phrases like 'Watch what happens' with explicit verbal explanations.",
        answer: "Describe Demonstrations",
        explanation: "Explaining the action verbally ensures the learner isn't left out of visual experiments."
    },
    {
        question: "This strategy for learners with difficulty communicating replaces 'Never mind. I'll ask someone else' with 'Take your time.'",
        answer: "Give Additional Processing Time",
        explanation: "Giving extra time reduces communication pressure and anxiety."
    },
    {
        question: "This developmental stage (ages 3-8) focuses on language, autonomy, play, and early academic skills.",
        answer: "Early Childhood",
        explanation: "Early childhood bridges the gap between infancy and middle childhood."
    }
];

// ==========================================
// APP LOGIC & TRACKERS
// ==========================================
let totalAnswered = 0;
let totalCorrect = 0;
let totalIncorrect = 0;

let currentQuizData = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let currentMode = ""; 

// Elements
const dashboard = document.getElementById("dashboard-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const identContainer = document.getElementById("identification-container");
const identInput = document.getElementById("ident-input");
const submitIdentBtn = document.getElementById("submit-ident-btn");
const nextBtn = document.getElementById("next-btn");
const questionCounter = document.getElementById("question-counter");
const explanationBox = document.getElementById("explanation-box");
const explanationTitle = document.getElementById("explanation-title");
const explanationText = document.getElementById("explanation-text");

// Listeners
document.getElementById("mode-mc-btn").addEventListener("click", () => startQuiz(mcData, "mc"));
document.getElementById("mode-tf-btn").addEventListener("click", () => startQuiz(tfData, "tf"));
document.getElementById("mode-ident-btn").addEventListener("click", () => startQuiz(identData, "ident"));
document.getElementById("return-btn").addEventListener("click", returnToDashboard);
document.getElementById("restart-btn").addEventListener("click", returnToDashboard);
nextBtn.addEventListener("click", loadNextQuestion);

// Randomizer function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateDashboardStats() {
    document.getElementById("stat-answered").textContent = totalAnswered;
    document.getElementById("stat-correct").textContent = totalCorrect;
    document.getElementById("stat-incorrect").textContent = totalIncorrect;
    
    let accuracy = totalAnswered === 0 ? 0 : Math.round((totalCorrect / totalAnswered) * 100);
    document.getElementById("stat-accuracy").textContent = accuracy + "%";
}

function returnToDashboard() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    dashboard.classList.remove("hidden");
    updateDashboardStats();
}

function startQuiz(dataArray, mode) {
    currentQuizData = [...dataArray]; // Copy the array
    shuffleArray(currentQuizData);    // Shuffle the copy for random questions!
    
    currentMode = mode;
    currentQuestionIndex = 0;
    currentScore = 0;
    
    dashboard.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const currentQuestion = currentQuizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuizData.length}`;

    if (currentMode === "mc" || currentMode === "tf") {
        optionsContainer.classList.remove("hidden");
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");
            button.addEventListener("click", () => selectAnswer(button, option, currentQuestion.answer, currentQuestion.explanation));
            optionsContainer.appendChild(button);
        });
    } else if (currentMode === "ident") {
        identContainer.classList.remove("hidden");
        submitIdentBtn.onclick = () => {
            selectAnswer(null, identInput.value.trim(), currentQuestion.answer, currentQuestion.explanation);
        };
    }
}

function selectAnswer(button, selected, correct, explanation) {
    // Ensure both answers are trimmed and lowercase for fair identification matching
    const isCorrect = selected.trim().toLowerCase() === correct.trim().toLowerCase();
    
    // Disable inputs
    const allButtons = document.querySelectorAll(".option-btn");
    allButtons.forEach(btn => btn.disabled = true);
    identInput.disabled = true;
    submitIdentBtn.disabled = true;

    // Update Global Trackers
    totalAnswered++;
    if (isCorrect) {
        totalCorrect++;
        currentScore++;
        if (button) button.classList.add("correct");
        
        explanationBox.className = "explanation-correct";
        explanationTitle.textContent = "CORRECT";
        explanationTitle.style.color = "#48bb78";
    } else {
        totalIncorrect++;
        if (button) button.classList.add("incorrect");
        
        explanationBox.className = "explanation-incorrect";
        explanationTitle.textContent = "NOT QUITE";
        explanationTitle.style.color = "#f56565";
    }

    // Show Explanation
    explanationText.textContent = explanation || `The correct answer was: ${correct}`;
    explanationBox.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizData.length) {
        loadQuestion();
    } else {
        quizScreen.classList.add("hidden");
        resultScreen.classList.remove("hidden");
        document.getElementById("final-score").textContent = `You scored ${currentScore} out of ${currentQuizData.length}`;
    }
}

function resetState() {
    explanationBox.classList.add("hidden");
    nextBtn.classList.add("hidden");
    optionsContainer.innerHTML = "";
    optionsContainer.classList.add("hidden");
    identContainer.classList.add("hidden");
    identInput.value = "";
    identInput.disabled = false;
    submitIdentBtn.disabled = false;
}
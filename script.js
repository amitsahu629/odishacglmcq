// DOM Elements
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const questionCountEl = document.querySelector('.question-count');
const timerEl = document.querySelector('.timer');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const reviewBtn = document.getElementById('review-btn');
const resultEl = document.getElementById('result');
const backToTopBtn = document.querySelector('.back-to-top');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const sectionFilter = document.getElementById('section-filter');
const progressGrid = document.getElementById('progress-grid');

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);
let time = 180 * 60; // 180 minutes in seconds
let timerInterval;
let touchStartX = 0;
let touchEndX = 0;
let bookmarkedQuestions = [];

function initQuiz() {
  startTimer();
  displayQuestion();
  updateProgressSidebar();
  setupEventListeners();
  checkMobile();
  loadDarkModePreference();
  setInitialFilter();
}

function setInitialFilter() {
  const allButton = document.querySelector('#section-filter button[data-section="All"]');
  if (allButton) {
    allButton.classList.add('active');
  }
}

function setupEventListeners() {
  prevBtn.addEventListener('click', prevQuestion);
  nextBtn.addEventListener('click', nextQuestion);
  submitBtn.addEventListener('click', submitQuiz);
  reviewBtn.addEventListener('click', toggleBookmark);
  document.getElementById('exit-btn').addEventListener('click', exitQuiz);

  optionsEl.addEventListener('touchstart', handleTouchStart, { passive: true });
  optionsEl.addEventListener('touchend', handleTouchEnd, { passive: true });

  backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('resize', handleResize);
  window.addEventListener('orientationchange', handleOrientationChange);
  window.addEventListener('scroll', toggleBackToTopButton);
  darkModeToggle.addEventListener('click', toggleDarkMode);

  sectionFilter.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      document.querySelectorAll('#section-filter button').forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      filterQuestions(e.target.dataset.section);
    }
  });
}

function filterQuestions(section) {
  if (section === 'All') {
    currentQuestionIndex = 0;
  } else {
    const firstInSection = quizData.findIndex(q => q.section === section);
    if (firstInSection !== -1) {
      currentQuestionIndex = firstInSection;
    }
  }
  displayQuestion();
  updateProgressSidebar();
}

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}

function handleSwipe() {
  const swipeThreshold = 50;
  const activeFilter = document.querySelector('#section-filter button.active').dataset.section;
  
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left - next question
    const nextIndex = findNextQuestionInSection(activeFilter);
    if (nextIndex !== -1) {
      currentQuestionIndex = nextIndex;
      displayQuestion();
    }
  } else if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right - previous question
    const prevIndex = findPrevQuestionInSection(activeFilter);
    if (prevIndex !== -1) {
      currentQuestionIndex = prevIndex;
      displayQuestion();
    }
  }
}

function findNextQuestionInSection(section) {
  if (section === 'All') {
    return currentQuestionIndex < quizData.length - 1 ? currentQuestionIndex + 1 : -1;
  }
  
  for (let i = currentQuestionIndex + 1; i < quizData.length; i++) {
    if (quizData[i].section === section) {
      return i;
    }
  }
  return -1;
}

function findPrevQuestionInSection(section) {
  if (section === 'All') {
    return currentQuestionIndex > 0 ? currentQuestionIndex - 1 : -1;
  }
  
  for (let i = currentQuestionIndex - 1; i >= 0; i--) {
    if (quizData[i].section === section) {
      return i;
    }
  }
  return -1;
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      submitQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
//   timerEl.textContent = window.innerWidth < 480 ? `${minutes}:${seconds}` : `Time: ${minutes}:${seconds}`;
document.querySelector('.timer').textContent = `Time: ${minutes}:${seconds}`;
  
  // Update timer progress bar
  const totalTime = 180 * 60;
  const percentage = (time / totalTime) * 100;
  document.querySelector('.timer-progress').style.width = `${percentage}%`;
}

function displayQuestion() {
  const question = quizData[currentQuestionIndex];
  questionEl.innerHTML = `${question.id}. ${question.question}`;
  questionCountEl.textContent = `Question ${question.id} of ${quizData.length}`;
  optionsEl.innerHTML = '';

  // Add question type/section indicator
  const sectionIndicator = document.createElement('div');
  sectionIndicator.className = 'section-indicator';
  sectionIndicator.textContent = question.section;
  questionEl.insertBefore(sectionIndicator, questionEl.firstChild);

  if (question.statements) {
    const statementsContainer = document.createElement('div');
    statementsContainer.className = 'statements-container';
    question.statements.forEach(statement => {
      const statementEl = document.createElement('div');
      statementEl.className = 'statement';
      statementEl.textContent = statement;
      statementsContainer.appendChild(statementEl);
    });
    optionsEl.appendChild(statementsContainer);
  }

  if (question.tableData) {
    if (window.innerWidth < 768) {
      const tableContainer = document.createElement('div');
      tableContainer.className = 'mobile-table-container';
      question.tableData.rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'mobile-table-row';
        row.forEach((cell, i) => {
          const cellDiv = document.createElement('div');
          cellDiv.innerHTML = `<span class="mobile-table-header">${question.tableData.headers[i]}:</span> ${cell}`;
          rowDiv.appendChild(cellDiv);
        });
        tableContainer.appendChild(rowDiv);
      });
      optionsEl.appendChild(tableContainer);
    } else {
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      question.tableData.headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);
      const tbody = document.createElement('tbody');
      question.tableData.rows.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
          const td = document.createElement('td');
          td.textContent = cellData;
          row.appendChild(td);
        });
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
      optionsEl.appendChild(table);
    }
  }

  question.options.forEach((option, index) => {
    const optionEl = document.createElement('div');
    optionEl.className = 'option';
    if (userAnswers[currentQuestionIndex] === index) {
      optionEl.classList.add('selected');
    }
    optionEl.innerHTML = `
      <input type="radio" name="option" id="option-${index}" value="${index}" ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}>
      <label for="option-${index}">${option}</label>
    `;
    optionEl.addEventListener('click', () => selectOption(index));

    if (isTouchDevice()) {
      optionEl.addEventListener('touchstart', () => optionEl.classList.add('option-selected'));
      optionEl.addEventListener('touchend', () => setTimeout(() => optionEl.classList.remove('option-selected'), 200));
    }
    optionsEl.appendChild(optionEl);
  });

  // Update navigation buttons based on filter
  const activeFilter = document.querySelector('#section-filter button.active').dataset.section;
  prevBtn.disabled = findPrevQuestionInSection(activeFilter) === -1;
  nextBtn.disabled = findNextQuestionInSection(activeFilter) === -1;
  
  submitBtn.style.display = currentQuestionIndex === quizData.length - 1 ? 'block' : 'none';
  reviewBtn.classList.toggle('bookmarked', bookmarkedQuestions.includes(currentQuestionIndex));

  updateProgressSidebar();
  scrollToQuestion();
}

function selectOption(index) {
  userAnswers[currentQuestionIndex] = index;
  displayQuestion();
}

function toggleBookmark() {
  const index = bookmarkedQuestions.indexOf(currentQuestionIndex);
  if (index === -1) {
    bookmarkedQuestions.push(currentQuestionIndex);
  } else {
    bookmarkedQuestions.splice(index, 1);
  }
  reviewBtn.classList.toggle('bookmarked', bookmarkedQuestions.includes(currentQuestionIndex));
  updateProgressSidebar();
}

function nextQuestion() {
    
  const activeFilter = document.querySelector('#section-filter button.active').dataset.section;
  const nextIndex = findNextQuestionInSection(activeFilter);
  if (nextIndex !== -1) {
    currentQuestionIndex = nextIndex;
    displayQuestion();
  }
}

function prevQuestion() {
    
  const activeFilter = document.querySelector('#section-filter button.active').dataset.section;
  const prevIndex = findPrevQuestionInSection(activeFilter);
  if (prevIndex !== -1) {
    currentQuestionIndex = prevIndex;
    displayQuestion();
  }
}

// function scrollToQuestion() {
//   questionEl.scrollIntoView({ behavior: 'smooth', block: window.innerWidth < 768 ? 'center' : 'start' });
// }

function scrollToQuestion() {
  // Only scroll if needed (for mobile)
  if (window.innerWidth < 768) {
    questionEl.scrollIntoView({
      behavior: 'auto', // Changed from 'smooth' to 'auto'
      block: 'center'
    });
  }
}

function submitQuiz() {
  clearInterval(timerInterval);
  score = 0;
  quizData.forEach((question, index) => {
    if (userAnswers[index] === question.answer) score++;
  });
  
  const minutes = Math.floor((180 * 60 - time) / 60);
  const seconds = (180 * 60 - time) % 60;
  
  resultEl.innerHTML = `
    <h2>Quiz Completed!</h2>
    <div class="result-stats">
      <div><span>Score:</span> ${score}/${quizData.length}</div>
      <div><span>Percentage:</span> ${((score / quizData.length) * 100).toFixed(2)}%</div>
      <div><span>Time:</span> ${minutes}m ${seconds}s</div>
    </div>
    <button class="download-btn" id="download-btn">Download Answer Key (PDF)</button>
  `;
  
  resultEl.style.display = 'block';
  submitBtn.style.display = 'none';
  resultEl.scrollIntoView({ behavior: 'smooth' });

  document.getElementById('download-btn').addEventListener('click', downloadAnswerKey);
}

function updateProgressSidebar() {
  const activeFilter = document.querySelector('#section-filter button.active').dataset.section;
  const filteredQuestions = activeFilter === 'All' 
    ? quizData 
    : quizData.filter(q => q.section === activeFilter);

  const total = filteredQuestions.length;
  const answered = filteredQuestions.filter(q => userAnswers[q.id - 1] !== null).length;
  const remaining = total - answered;

  document.getElementById('total-questions').textContent = total;
  document.getElementById('answered-questions').textContent = answered;
  document.getElementById('remaining-questions').textContent = remaining;

  progressGrid.innerHTML = '';

  quizData.forEach((question, index) => {
    // Skip questions not in current filter
    if (activeFilter !== 'All' && question.section !== activeFilter) return;

    const item = document.createElement('div');
    item.className = 'progress-item';
    if (index === currentQuestionIndex) item.classList.add('current');
    else if (userAnswers[index] !== null) item.classList.add('answered');
    else item.classList.add('unanswered');
    
    if (bookmarkedQuestions.includes(index)) {
      item.classList.add('bookmarked');
    }
    
    item.textContent = question.id;
    item.addEventListener('click', () => {
      currentQuestionIndex = index;
      displayQuestion();
    });
    progressGrid.appendChild(item);
  });
}

function exitQuiz() {
  if (confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
    window.location.href = '#';
  }
}

function handleResize() {
  displayQuestion();
  checkMobile();
}

function handleOrientationChange() {
  clearTimeout(window.orientationDebounce);
  window.orientationDebounce = setTimeout(() => displayQuestion(), 200);
}

function toggleBackToTopButton() {
  backToTopBtn.style.display = window.innerWidth < 768 && window.scrollY > 300 ? 'block' : 'none';
}

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

function checkMobile() {
  document.body.classList.toggle('mobile-view', window.innerWidth < 768);
  document.body.classList.toggle('touch-device', isTouchDevice());
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
}

function loadDarkModePreference() {
  if (localStorage.getItem('darkMode') === 'enabled') document.body.classList.add('dark-mode');
}

async function downloadAnswerKey() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  doc.setFontSize(14);
  doc.text('Quiz Answer Key', 10, 15);
  doc.setFontSize(11);
  
  let y = 25;
  quizData.forEach((question, index) => {
    if (y > 270) {
      doc.addPage();
      y = 15;
    }
    
    doc.text(`Q${index + 1}. ${question.question}`, 10, y);
    y += 6;
    
    question.options.forEach((opt, i) => {
      const marker = i === question.answer ? '(✓ Correct)' : '';
      const selected = userAnswers[index] === i ? '[Your Answer]' : '';
      const line = `   ${String.fromCharCode(65 + i)}. ${opt} ${selected} ${marker}`;
      
      if (y > 280) {
        doc.addPage();
        y = 15;
      }
      
      doc.text(line, 10, y);
      y += 5;
    });
    
    y += 4;
  });
  
  doc.save('quiz-answer-key.pdf');
}

// Initialize the quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', initQuiz);
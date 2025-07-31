# odishacglmcq
# OSSSC Quiz Application

![OSSSC Quiz App Screenshot](./screenshot.png)

A responsive web application designed to help aspirants prepare for OSSSC (Odisha Sub-Ordinate Staff Selection Commission) competitive exams with practice quizzes.

## Features

- **Subject-wise Practice**: Filter questions by subject (Math, Reasoning, Odia, English, GK, Computer)
- **Timed Tests**: 180-minute timer with progress indicator
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark Mode**: Eye-friendly dark theme option
- **Progress Tracking**: Visual indicators for answered/unanswered questions
- **Review System**: Mark questions for later review
- **Answer Key**: Download PDF with correct answers and user responses

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Libraries**: jsPDF (for answer key generation)
- **Design**: Responsive layout with mobile-first approach

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/osssc-quiz-app.git
   ```

2. Navigate to project directory:
   ```bash
   cd osssc-quiz-app
   ```

3. Open `index.html` in your browser (no server required)

## Usage

1. Select a subject filter or use "All" for mixed questions
2. Answer questions using the multiple-choice options
3. Use navigation buttons or swipe gestures (on mobile) to move between questions
4. Click "Mark for Review" to flag important questions
5. Submit when finished to see your score and download answer key

## File Structure

```
osssc-quiz-app/
├── index.html          # Main application HTML
├── style.css           # All styling rules
├── script.js           # Main application logic
├── quiz-data.js        # All quiz questions and answers
├── images/             # Contains all images
│   ├── favicon.png     # Application icon
│   ├── footerbg.png    # Footer logo
│   └── screenshot.png  # App screenshot for README
└── README.md           # This file
```

## Customization

To add more questions:
1. Edit `quiz-data.js`
2. Follow the existing format:
   ```javascript
   {
     id: [number],
     section: "[subject]",
     question: "[question text]",
     options: ["option1", "option2", "option3", "option4"],
     answer: [correct_option_index]
   }
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Maintainer - [Amit Kumar Sahu](mailto:amitvits3@gmail.com)

Project Link: [https://github.com/yourusername/osssc-quiz-app](https://github.com/yourusername/osssc-quiz-app)

## Acknowledgments

- [jsPDF](https://parall.ax/products/jspdf) for PDF generation
- All contributors and testers
- OSSSC for providing examination materials

---

**Note**: Replace placeholder values (yourusername, screenshot.png paths, contact info) with your actual project details before publishing.

// Array of question objects containing questions, answer options, and correct answers
    const quizData = [
  
  {
    id: 1,
    section: "Math",
    question: "If the average marks of three classes of 60, 65 and 70 students are 60, 65, 70 respectively, find the average marks of all the students. (Approximately)",
    options: ["69.25", "67.25", "71.25", "65.25"],
    answer: 3
  },
  {
    id: 2,
    section: "Math",
    question: "3 litres are drawn from a cask full of wine and is then filled with water. This operation is performed once more. The ratio of the quantity of wine now left in cask to that of the water is 16:9. How much wine does the cask hold originally? (In liters)",
    options: ["15", "9", "11", "13"],
    answer: 1
  },
  {
    id: 3,
    section: "Math",
    question: "31 people can cut 62 trees in 36 days. In how many days, 32 people can cut 96 trees?",
    options: ["52", "58", "54", "56"],
    answer: 3
  },
  {
    id: 4,
    section: "Math",
    question: "If 23a=24b and 31b=23c, find a:b:c.",
    options: ["23:24:31", "24:31:24", "24:23:31", "31:24:23"],
    answer: 3
  },
  {
    id: 5,
    section: "Math",
    question: "A lent a part of Rs.25800 to X at 9% simple interest and the rest to Y at 5% simple interest. After 4 years, if he got an amount of Rs.33540 in total, then what is the amount lent to Y? (In Rs.)",
    options: ["9775", "9675", "9575", "9875"],
    answer: 2
  },
  {
    id: 6,
    section: "Math",
    question: "What will come in place of question mark(?) in the following equation? 1171.58 – 499.31 = 1076.84 – ?",
    options: ["404.57", "408.57", "406.57", "402.57"],
    answer: 1
  },
  {
    id: 7,
    section: "Math",
    question: "Ramesh is on a 9 day trip with his college mates. He had decided to keep his average expense for 9 days at Rs.215. However, at the end of eighth day he realized that his expenses on first eight days were Rs.188, Rs.194, Rs.218, Rs.220, Rs,180, Rs.204, Rs.208, and Rs.206 respectively. How much should he spend on the 9th day to ensure that he meets his targeted average expense?(in Rs.)",
    options: ["327", "317", "337", "307"],
    answer: 2
  },
  {
    id: 8,
    section: "Math",
    question: "Jenny gets successive discounts of 10% and then 20% on his food bill of Rs.4550. What is the amount paid by Jenny?(In Rs.)",
    options: ["2976", "3276", "3076", "3176"],
    answer: 2
  },
  {
    id: 9,
    section: "Math",
    question: "A boat goes 150 km upstream in 30 hours and a distance of 217 km downstream in 31 hours. Find the speed of the boat in still water. (In kmph)",
    options: ["2", "6", "4", "8"],
    answer: 2
  },
  {
    id: 10,
    section: "Math",
    question: "A five digit number is formed with the digits 2, 3, 4, 5 and 6 without repetition. Find the probability that the number is divisible by 5.",
    options: ["4/5", "2/5", "3/5", "1/5"],
    answer: 4
  },
  {
    id: 11,
    section: "Math",
    question: "The sum of two numbers is 55 and the difference of their squares is 385. What is the difference between the two numbers?",
    options: ["10", "5", "7", "15"],
    answer: 1
  },
  {
    id: 12,
    section: "Math",
    question: "The simple interest on a certain sum for 2 years at 4% per annum is Rs.320. The principal amount is:",
    options: ["Rs.4000", "Rs.3200", "Rs.3600", "Rs.3800"],
    answer: 1
  },
  {
    id: 13,
    section: "Math",
    question: "A train running at the speed of 72 km/hr crosses a pole in 20 seconds. The length of the train is:",
    options: ["400 m", "300 m", "350 m", "450 m"],
    answer: 1
  },
  {
    id: 14,
    section: "Math",
    question: "The ratio of the ages of A and B is 4:5 six years hence, the ratio will be 5:6. Find the sum of their present ages.",
    options: ["54 years", "60 years", "66 years", "72 years"],
    answer: 3
  },
  {
    id: 15,
    section: "Math",
    question: "If the circumference of a circle is 88 cm, what is the diameter of the circle? (Use π = 22/7)",
    options: ["28 cm", "22 cm", "14 cm", "44 cm"],
    answer: 1
  },
  {
    id: 16,
    section: "Math",
    question: "The value of (5^3 × 5^2) ÷ 5^4 is:",
    options: ["5^1", "5^2", "5^3", "5^4"],
    answer: 1
  },
  {
    id: 17,
    section: "Math",
    question: "A box contains 6 red, 4 green and 5 blue balls. If a ball is drawn at random, what is the probability that it is not green?",
    options: ["5/15", "10/15", "6/15", "11/15"],
    answer: 4
  },
  {
    id: 18,
    section: "Math",
    question: "Find the sum of all the multiples of 3 between 1 and 100.",
    options: ["1683", "1656", "1635", "1713"],
    answer: 1
  },
  {
    id: 19,
    section: "Math",
    question: "If 3x – y = 7 and 2x + 3y = 4, find the value of x+y.",
    options: ["1", "2", "3", "4"],
    answer: 3
  },
  {
    id: 20,
    section: "Math",
    question: "The volumes of two cubes are in the ratio 125:64. The ratio of their surface areas is:",
    options: ["25:16", "5:4", "15:8", "9:4"],
    answer: 1
  },
  {
    id: 21,
    section: "Math",
    question: "The difference between the simple interest and compound interest on Rs.2000 at 10% per annum for 2 years is:",
    options: ["Rs.20", "Rs.10", "Rs.15", "Rs.25"],
    answer: 2
  },
  {
    id: 22,
    section: "Math",
    question: "The value of (4/9)^(-1/2) is:",
    options: ["3/2", "2/3", "3", "2"],
    answer: 3
  },
  {
    id: 23,
    section: "Math",
    question: "A sphere and a cylinder have equal radius and equal volumes. If the height of the cylinder is 24 cm, what is the radius of the sphere?",
    options: ["12 cm", "8 cm", "6 cm", "24 cm"],
    answer: 2
  },
  {
    id: 24,
    section: "Math",
    question: "If the sum of three consecutive even numbers is 48, find the numbers.",
    options: ["14, 16, 18", "12, 14, 16", "10, 12, 14", "16, 18, 20"],
    answer: 1
  },
  {
    id: 25,
    section: "Math",
    question: "The perimeter of a rectangle is 56 cm. If its length is twice the breadth, find the area.",
    options: ["140 cm²", "112 cm²", "160 cm²", "128 cm²"],
    answer: 1
  },
  {
    id: 26,
    section: "Math",
    question: "Find the median of the data set: 10, 12, 15, 18, 20, 22.",
    options: ["16.5", "15", "17", "18"],
    answer: 1
  },
  {
    id: 27,
    section: "Math",
    question: "The cost price of an article is Rs.850 and it is sold at a profit of 20%. What is the selling price?",
    options: ["Rs.1020", "Rs.1000", "Rs.1050", "Rs.1100"],
    answer: 3
  },
  {
    id: 28,
    section: "Math",
    question: "If the angle of elevation of the top of a tower from a point is 45°, and the height of the tower is 50 m, find the distance of the point from the foot of the tower.",
    options: ["50 m", "70 m", "60 m", "55 m"],
    answer: 1
  },
  {
    id: 29,
    section: "Math",
    question: "A container is in the shape of a cuboid with length 40 cm, breadth 30 cm and height 25 cm. How many cubic cm of water can it hold?",
    options: ["30000", "25000", "27000", "28000"],
    answer: 1
  },
  {
    id: 30,
    section: "Math",
    question: "Find the value of x if (x – 3)^2 = 25.",
    options: ["8 or -2", "3 or 7", "-8 or 2", "5 or -5"],
    answer: 1
  },
  {
    id: 31,
    section: "Math",
    question: "The square root of (81/256) is:",
    options: ["9/16", "3/16", "9/256", "81/256"],
    answer: 1
  },
  {
    id: 32,
    section: "Math",
    question: "The Number of ways to arrange the letters of the word ‘BANANA’ is:",
    options: ["60", "180", "120", "360"],
    answer: 2
  },
  {
    id: 33,
    section: "Math",
    question: "Two pipes A and B can fill a tank in 12 hours and 15 hours respectively. How long will they take to fill the tank if both pipes are opened together?",
    options: ["6 hours 40 minutes", "7 hours", "8 hours 30 minutes", "7 hours 50 minutes"],
    answer: 1
  },
  {
    id: 34,
    section: "Math",
    question: "The LCM of 12, 18 and 20 is:",
    options: ["180", "120", "60", "360"],
    answer: 4
  },
  {
    id: 35,
    section: "Math",
    question: "The place value of 7 in the number 469372 is:",
    options: ["700", "70", "7", "7000"],
    answer: 2
  },
  {
    id: 36,
    section: "Math",
    question: "If a container contains 40 liters of milk mixed with some water. On mixing 20 liters of water, the milk becomes 3/7 of the total mixture. Find the quantity of water initially in the container.",
    options: ["10 liters", "15 liters", "20 liters", "25 liters"],
    answer: 1
  },
  {
    id: 37,
    section: "Math",
    question: "A person sells an article for Rs.2100 and gains 5%. Find the cost price of the article.",
    options: ["Rs.2000", "Rs.1900", "Rs.1950", "Rs.1850"],
    answer: 1
  },
  {
    id: 38,
    section: "Math",
    question: "The angle between the hour and minute hands of a clock at 3:15 is:",
    options: ["7.5°", "0°", "30°", "45°"],
    answer: 1
  },
  {
    id: 39,
    section: "Math",
    question: "If the ratio of men to women in a company is 7:3 and the company has 200 employees, how many women are there?",
    options: ["60", "50", "70", "90"],
    answer: 1
  },
  {
    id: 40,
    section: "Math",
    question: "The area of a triangle is 30 cm² and base is 6 cm. Find the height of the triangle.",
    options: ["10 cm", "6 cm", "8 cm", "12 cm"],
    answer: 1
  },
  {
    id: 41,
    section: "Math",
    question: "If sin A = 3/5, find cos A.",
    options: ["4/5", "3/5", "5/3", "1/5"],
    answer: 1
  },
  {
    id: 42,
    section: "Math",
    question: "Find the next number in the sequence: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "45", "50"],
    answer: 1
  },
  {
    id: 43,
    section: "Math",
    question: "In how many years will Rs.2000 amount to Rs.2500 at 5% per annum simple interest?",
    options: ["5 years", "4 years", "6 years", "7 years"],
    answer: 1
  },
  {
    id: 44,
    section: "Math",
    question: "The mean of the numbers 2, 5, 9, 11 and x is 7. Find the value of x.",
    options: ["8", "9", "10", "7"],
    answer: 1
  },
  {
    id: 45,
    section: "Math",
    question: "If the perimeter of a square is 48 cm, find its area.",
    options: ["144 cm²", "144", "48 cm²", "196 cm²"],
    answer: 1
  },
  {
    id: 46,
    section: "Math",
    question: "The sum of the interior angles of a polygon is 1260°. How many sides does the polygon have?",
    options: ["7", "8", "6", "9"],
    answer: 1
  },
  {
    id: 47,
    section: "Math",
    question: "Convert 75% to fraction.",
    options: ["3/4", "7/10", "3/5", "5/8"],
    answer: 1
  },
  {
    id: 48,
    section: "Math",
    question: "Two numbers are in the ratio 5:7 and their LCM is 630. The numbers are:",
    options: ["45, 63", "50, 70", "35, 49", "30, 42"],
    answer: 1
  },
  {
    id: 49,
    section: "Math",
    question: "The compound interest on Rs.1000 at 10% per annum for 2 years is:",
    options: ["Rs.210", "Rs.200", "Rs.220", "Rs.230"],
    answer: 1
  },
  {
    id: 50,
    section: "Math",
    question: "If the cost price of 12 articles is equal to the selling price of 10 articles, find the profit or loss percent.",
    options: ["20% Profit", "20% Loss", "16.66% Profit", "16.66% Loss"],
    answer: 1
  },


  {
    id: 51,
    section: "Reasoning",
    question: "The statement given below is followed by assumptions numbered as 1 and 2. Look at the statements and decide which of the assumptions is/are implicit. Statement: Mini asked her son to wash his plate himself. Assumptions: 1. Mini wants her son to help her. 2. Mini wants her son to learn good habits.",
    options: [
      "Only assumption 1 is implicit",
      "Only assumption 2 is implicit",
      "Both assumptions 1 and 2 are implicit",
      "Neither assumption 1 nor 2 is implicit"
    ],
    answer: 3
  },
  {
    id: 52,
    section: "Reasoning",
    question: "In a certain code language, if PURPLE is coded as UPRPEL, then how is ORANGE coded in that language?",
    options: ["OARGNE", "RONAGE", "ROANEG", "ONGRAE"],
    answer: 3
  },
  {
    id: 53,
    section: "Reasoning",
    question: "Find the missing term in the series: 2, 6, 12, 20, 30, ?",
    options: ["38", "40", "42", "44"],
    answer: 2
  },
  {
    id: 54,
    section: "Reasoning",
    question: "If in a certain language, 'PEACE' is written as 'QFBDF', how will 'WORLD' be written in that language?",
    options: ["XPSME", "XQSME", "WRPME", "XPSND"],
    answer: 1
  },
  {
    id: 55,
    section: "Reasoning",
    question: "How many rectangles are there in a 4x3 grid?",
    options: ["50", "60", "70", "80"],
    answer: 2
  },
  {
    id: 56,
    section: "Reasoning",
    question: "From the given alternatives, select the one that is similar to the given pair: Knife : Cut",
    options: ["Pen : Write", "Brush : Paint", "Scissors : Tear", "Spoon : Eat"],
    answer: 1
  },
  {
    id: 57,
    section: "Reasoning",
    question: "Find out the odd word from the following: Apple, Banana, Cherry, Carrot, Mango",
    options: ["Apple", "Banana", "Carrot", "Mango"],
    answer: 3
  },
  {
    id: 58,
    section: "Reasoning",
    question: "If 9 men can do a piece of work in 12 days, how many men will be required to do the same work in 9 days?",
    options: ["12", "15", "9", "16"],
    answer: 2
  },
  {
    id: 59,
    section: "Reasoning",
    question: "Find the odd number from the series: 2, 6, 12, 20, 31, 42",
    options: ["20", "31", "42", "12"],
    answer: 2
  },
  {
    id: 60,
    section: "Reasoning",
    question: "Which of the following completes the series: 7, 14, 28, 56, ?",
    options: ["108", "112", "110", "114"],
    answer: 2
  },
  {
    id: 61,
    section: "Reasoning",
    question: "If A is taller than B, B is taller than C, and C is taller than D, who is the shortest?",
    options: ["A", "B", "C", "D"],
    answer: 4
  },
  {
    id: 62,
    section: "Reasoning",
    question: "What will come next in the series: A, C, F, J, O, ?",
    options: ["U", "T", "S", "R"],
    answer: 2
  },
  {
    id: 63,
    section: "Reasoning",
    question: "If DAY is coded as 234, and NIGHT is coded as 79358, then what is the code for HIGH?",
    options: ["9583", "7359", "8593", "3579"],
    answer: 3
  },
  {
    id: 64,
    section: "Reasoning",
    question: "Choose the number which is different from others: 16, 25, 36, 49, 55",
    options: ["25", "36", "49", "55"],
    answer: 4
  },
  {
    id: 65,
    section: "Reasoning",
    question: "If ‘+’ means ‘-’, ‘-’ means ‘÷’, ‘÷’ means ‘×’, and ‘×’ means ‘+’, what is the value of 6 + 2 × 5 – 8 ÷ 4?",
    options: ["23", "11", "9", "7"],
    answer: 2
  },
  {
    id: 66,
    section: "Reasoning",
    question: "Complete the analogy: Book is to Reading as Fork is to...?",
    options: ["Drawing", "Writing", "Eating", "Stirring"],
    answer: 3
  },
  {
    id: 67,
    section: "Reasoning",
    question: "If in a certain code, ‘CAT’ is ‘DBU’, what is ‘DOG’?",
    options: ["EPH", "EPI", "EPJ", "EOH"],
    answer: 1
  },
  {
    id: 68,
    section: "Reasoning",
    question: "Find the next number in the series: 2, 4, 8, 16, ?",
    options: ["20", "24", "32", "30"],
    answer: 3
  },
  {
    id: 69,
    section: "Reasoning",
    question: "A clock shows the time as 3:15. What is the angle between the hour and the minute hands?",
    options: ["7.5°", "0°", "30°", "45°"],
    answer: 1
  },
  {
    id: 70,
    section: "Reasoning",
    question: "Which number is missing in the series: 1, 4, 9, 16, ?, 36, 49",
    options: ["20", "21", "25", "30"],
    answer: 3
  },
  {
    id: 71,
    section: "Reasoning",
    question: "If the first and the last letters of 'STATISTICS' are interchanged, what is the new word?",
    options: ["TATISTICS", "SATISTICT", "TATISTICSS", "STATISTIC"],
    answer: 2
  },
  {
    id: 72,
    section: "Reasoning",
    question: "Two clocks start simultaneously. One gains 5 minutes in 3 hours and the other loses 4 minutes in 3 hours. After how long will they be exactly 9 minutes apart?",
    options: ["4.5 hours", "3.6 hours", "5.4 hours", "6 hours"],
    answer: 1
  },
  {
    id: 73,
    section: "Reasoning",
    question: "If MATH is written as 7314, and SCIENCE as 9213847, what is the odd one out?",
    options: ["MATHEMATICS", "SCIENCE", "ENGLISH", "HISTORY"],
    answer: 3
  },
  {
    id: 74,
    section: "Reasoning",
    question: "Select the odd figure from the given options (visual or pattern-based question – replace with text if necessary).",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 2
  },
  {
    id: 75,
    section: "Reasoning",
    question: "If all the vowels in the word 'EDUCATION' are removed, what is the remaining word?",
    options: ["DCTN", "DCATN", "DCTON", "DCT"],
    answer: 1
  },
  {
    id: 76,
    section: "Reasoning",
    question: "In a certain code, 'SUN' is written as '625'. How is 'FUN' written in the code?",
    options: ["625", "655", "425", "624"],
    answer: 3
  },
  {
    id: 77,
    section: "Reasoning",
    question: "What comes in place of the question mark in the series: 5, 11, 17, 23, ?, 35",
    options: ["28", "29", "30", "31"],
    answer: 2
  },
  {
    id: 78,
    section: "Reasoning",
    question: "If 'APPLE' is coded as 'BQQLF', then what is the code for 'BANANA'?",
    options: ["CBOBOB", "CBNAOB", "CBNBNB", "CBMNBM"],
    answer: 1
  },
  {
    id: 79,
    section: "Reasoning",
    question: "Find the missing number: 3, 6, 12, 24, ?, 96",
    options: ["36", "48", "42", "54"],
    answer: 2
  },
  {
    id: 80,
    section: "Reasoning",
    question: "Which of the following words is opposite in meaning to ‘Generous’?",
    options: ["Kind", "Selfish", "Charitable", "Helpful"],
    answer: 2
  },
  {
    id: 81,
    section: "Reasoning",
    question: "In the number 547, what is the place value of 4?",
    options: ["40", "400", "4", "4000"],
    answer: 2
  },
  {
    id: 82,
    section: "Reasoning",
    question: "The statement ‘All cows are animals’ is:",
    options: ["True", "False", "Cannot say", "None of the above"],
    answer: 1
  },
  {
    id: 83,
    section: "Reasoning",
    question: "Find the next term in the sequence: 3, 9, 27, 81, ?",
    options: ["162", "243", "324", "729"],
    answer: 2
  },
  {
    id: 84,
    section: "Reasoning",
    question: "Select the related word: Moon is to night as Sun is to __?",
    options: ["Evening", "Morning", "Day", "Midnight"],
    answer: 3
  },
  {
    id: 85,
    section: "Reasoning",
    question: "If 6 is coded as 9, 5 as 7, what is 7 coded as?",
    options: ["11", "14", "10", "13"],
    answer: 4
  },
  {
    id: 86,
    section: "Reasoning",
    question: "If in a certain language, 'SCHOOL' is written as 'RBNNPK', what is the code for ‘LEARN’?",
    options: ["KDZQM", "KDZPL", "KDAQM", "MEZQP"],
    answer: 1
  },
  {
    id: 87,
    section: "Reasoning",
    question: "Find the odd number: 8, 27, 64, 125, 216, 250",
    options: ["125", "216", "250", "64"],
    answer: 3
  },
  {
    id: 88,
    section: "Reasoning",
    question: "A series is given: 2, 6, 12, 20, 30, 42. What is the next number?",
    options: ["56", "60", "54", "52"],
    answer: 1
  },
  {
    id: 89,
    section: "Reasoning",
    question: "Find the next number in the series: 1, 4, 9, 16, 25, ?",
    options: ["30", "35", "36", "40"],
    answer: 3
  },
  {
    id: 90,
    section: "Reasoning",
    question: "In a row of students, A is 7th from left and B is 12th from right. If they are 20 students between them, how many students are there in total?",
    options: ["38", "39", "40", "41"],
    answer: 3
  },
  {
    id: 91,
    section: "Reasoning",
    question: "Find the time taken to cover 240 km at a speed of 60 km/h.",
    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
    answer: 3
  },
  {
    id: 92,
    section: "Reasoning",
    question: "Which letter will replace the question mark? A, D, G, J, M, ?",
    options: ["O", "P", "Q", "N"],
    answer: 1
  },
  {
    id: 93,
    section: "Reasoning",
    question: "Find the missing number: 18, 36, ?, 144, 180",
    options: ["54", "72", "90", "108"],
    answer: 2
  },
  {
    id: 94,
    section: "Reasoning",
    question: "Identify the figure which is the mirror image of the given figure.",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 4
  },
  {
    id: 95,
    section: "Reasoning",
    question: "Arrange the following words in alphabetical order: Banana, Apple, Mango, Grape",
    options: [
      "Apple, Banana, Grape, Mango",
      "Banana, Apple, Mango, Grape",
      "Grape, Mango, Banana, Apple",
      "Mango, Grape, Banana, Apple"
    ],
    answer: 1
  },
  {
    id: 96,
    section: "Reasoning",
    question: "Find the odd man out: 345, 435, 543, 354, 253",
    options: ["345", "435", "543", "253"],
    answer: 4
  },
  {
    id: 97,
    section: "Reasoning",
    question: "If the day before yesterday was Thursday, what day will it be the day after tomorrow?",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    answer: 3
  },
  {
    id: 98,
    section: "Reasoning",
    question: "What is the cube of 4?",
    options: ["12", "16", "64", "256"],
    answer: 3
  },
  {
    id: 99,
    section: "Reasoning",
    question: "Find the pair which when combined make a meaningful word: “Back” and __",
    options: ["Side", "Pack", "Book", "Space"],
    answer: 1
  },
  {
    id: 100,
    section: "Reasoning",
    question: "If ‘CAT’ is 3120, and ‘DOG’ is 3240, then what will be the value of ‘ANT’ using the same code?",
    options: ["1350", "1305", "1230", "1250"],
    answer: 1
  },

  {
    id: 101,
    section: "Odia",
    question: "ଏହି ବାକ୍ୟରେ କେଉଁଟି ଶବ୍ଦ ସଂଯୋଗ ଶବ୍ଦ ? ‘ସୁର୍ଯ୍ୟ ଉଦୟ ହେଲେ ଆମେ ଯାଉଥିଲୁ’",
    options: ["ଏହି", "ହେଲେ", "ଉଦୟ", "ଯାଉଥିଲୁ"],
    answer: 2
  },
  {
    id: 102,
    section: "Odia",
    question: "‘ସଠିକ୍’ ପଦର ଅର୍ଥ କଣ?",
    options: ["ଅଣ୍ଡା", "ଠୋସ", "ଠିକ୍", "କଠିନ"],
    answer: 3
  },
  {
    id: 103,
    section: "Odia",
    question: "ନିମ୍ନଲିଖିତ ବାକ୍ୟରେ ଅନୁସ୍ୱାର କେଉଁଠି ଅଛି? ‘ସଂସ୍କୃତ ଗ୍ରନ୍ଥ ଅଧ୍ୟୟନ’",
    options: ["ସଂସ୍କୃତ", "ଗ୍ରନ୍ଥ", "ଅଧ୍ୟୟନ", "ଅଛି"],
    answer: 1
  },
  {
    id: 104,
    section: "Odia",
    question: "‘ମୋ ଭାଇ ଆସିଲା’ ବାକ୍ୟରେ ‘ମୋ’ ଶବ୍ଦଟି କ’ଣ?",
    options: ["ବିଶେଷ୍ୟ", "ପ୍ରତ୍ୟୟ", "ସମ୍ବନ୍ଧ ବୋଧକ", "କ୍ରିୟା"],
    answer: 3
  },
  {
    id: 105,
    section: "Odia",
    question: "‘ସ୍ନେହ’ ଶବ୍ଦଟି କ’ଣ ପ୍ରକାର ବିଶେଷ୍ୟ ?",
    options: ["ବ୍ୟକ୍ତିବାଚକ", "ଗୁଣବାଚକ", "ଜାତିବାଚକ", "କ୍ରିୟାବାଚକ"],
    answer: 2
  },
  {
    id: 106,
    section: "Odia",
    question: "‘ପ୍ରଭାତ’ ଶବ୍ଦଟିର ଅର୍ଥ କ’ଣ?",
    options: ["ଦିନ", "ସଂଧ୍ୟା", "ଉଷା", "ସନ୍ଧ୍ୟା"],
    answer: 3
  },
  {
    id: 107,
    section: "Odia",
    question: "‘ଆମେ ଦେଖିବା’ ବାକ୍ୟରେ କ୍ରିୟାଶବ୍ଦ କ’ଣ?",
    options: ["ଆମେ", "ଦେଖିବା", "ବାକ୍ୟ", "ନାହିଁ"],
    answer: 2
  },
  {
    id: 108,
    section: "Odia",
    question: "ଓଡ଼ିଆ ଭାଷାର ମୁଖ୍ୟ ବିଶେଷତା କଣ?",
    options: ["ବନ୍ଧୁଗତ ଶବ୍ଦ", "ମାନବତା", "ଶବ୍ଦ ଗଠନର ସହଜତା", "ଗମ୍ଭୀରତା"],
    answer: 3
  },
  {
    id: 109,
    section: "Odia",
    question: "‘ସତ୍ୟ’ର ବିପରୀତ ଶବ୍ଦ କ’ଣ?",
    options: ["ଠିକ୍", "ମିଥ୍ୟା", "ସ୍ନେହ", "କ୍ରୋଧ"],
    answer: 2
  },
  {
    id: 110,
    section: "Odia",
    question: "‘ଗଢ଼ି’ ଶବ୍ଦଟି କ’ଣ ବଚନ?",
    options: ["ଏକବଚନ", "ଦ୍ୱିବଚନ", "ବହୁବଚନ", "ନିର୍ବଚନ"],
    answer: 1
  },
  {
    id: 111,
    section: "Odia",
    question: "“ମା’” ଶବ୍ଦର ବିଭକ୍ତି କ’ଣ?",
    options: ["ଏକବଚନ", "ବହୁବଚନ", "ଅପ୍ରକୃତି", "ଉତ୍ସ"],
    answer: 1
  },
  {
    id: 112,
    section: "Odia",
    question: "‘ବର୍ଷା’ ଶବ୍ଦଟିର ପ୍ରଯୁକ୍ତି କ’ଣ?",
    options: ["ନାମ", "କ୍ରିୟା", "ବିଶେଷଣ", "ପ୍ରତିଗ୍ୟା"],
    answer: 1
  },
  {
    id: 113,
    section: "Odia",
    question: "‘ସମାସ’ ଶବ୍ଦର ଅର୍ଥ କ’ଣ?",
    options: ["ବିଶ୍ଳେଷଣ", "ସଂଯୋଗ", "ପ୍ରତିବେଶୀ", "ବିପ୍ରତିପାଦ"],
    answer: 2
  },
  {
    id: 114,
    section: "Odia",
    question: "‘ପ୍ରଭାତି’ ବାକ୍ୟରେ କ’ଣ ଅର୍ଥ ବ୍ୟକ୍ତ କରିଛି?",
    options: ["ସନ୍ଧ୍ୟା", "ପ୍ରଭାତ", "ଦିନ", "ଚନ୍ଦ୍ର"],
    answer: 2
  },
  {
    id: 115,
    section: "Odia",
    question: "‘ଆମେ ତିନି ଜଣ ଯାଉଛୁ’ ବାକ୍ୟରେ ‘ତିନି’ ଶବ୍ଦଟି କ’ଣ?",
    options: ["ସଂଖ୍ୟା", "ବିଶେଷ୍ୟ", "ବିଶେଷଣ", "କ୍ରିୟା"],
    answer: 1
  },
  {
    id: 116,
    section: "Odia",
    question: "‘ଉପନ୍ୟାସ’ କ’ଣ ପ୍ରକାର ସାହିତ୍ୟ ରଚନା?",
    options: ["ଭାଷା", "ପଦ୍ୟ", "ଗଦ୍ୟ", "ଅଭିନୟ"],
    answer: 3
  },
  {
    id: 117,
    section: "Odia",
    question: "‘ଅଜନା’ର ବିପରୀତ ଶବ୍ଦ କ’ଣ?",
    options: ["ଗ୍ୟାତ", "ନିମ୍ନ", "ମଧ୍ୟମ", "ଉପର"],
    answer: 1
  },
  {
    id: 118,
    section: "Odia",
    question: "‘ଗାଧା’ କ’ଣ ପ୍ରକାର ଜନ୍ତୁ?",
    options: ["ଗର୍ଭପାୟୀ", "ପଙ୍ଖୀ", "ଉଦ୍ଭିଦ", "ମାଛ"],
    answer: 1
  },
  {
    id: 119,
    section: "Odia",
    question: "‘କଳା’ ସଂପୃକ୍ତ ବିଭାଗ କ’ଣ?",
    options: ["ଗଣିତ", "ସାହିତ୍ୟ", "ବିଜ୍ଞାନ", "କ୍ରିଡ଼ା"],
    answer: 2
  },
  {
    id: 120,
    section: "Odia",
    question: "‘ନୀଳ’ ଶବ୍ଦର ଅର୍ଥ କ’ଣ?",
    options: ["ଶ୍ୱେତ", "ହଳଦିଆ", "କଳା", "ନୀଳ"],
    answer: 4
  },


  {
    id: 121,
    section: "English",
    question: "You _______ take leave now. Your application form is submitted.",
    options: ["could", "would", "may", "will"],
    answer: 3
  },
  {
    id: 122,
    section: "English",
    question: "Education is not an end, but a means to an end. In other words, we do not educate children only for the purpose of educating them; __________ purpose is to fit them for life.",
    options: ["that", "what", "this", "our"],
    answer: 4
  },
  {
    id: 123,
    section: "English",
    question: "Choose the correct passive voice form: 'They will complete the project on time.'",
    options: [
      "The project was completed on time by them.",
      "The project will be completed on time by them.",
      "The project has been completed on time by them.",
      "The project is completing on time by them."
    ],
    answer: 2
  },
  {
    id: 124,
    section: "English",
    question: "Fill in the blank with the correct form of 'go': 'She _______ to the market every Sunday.'",
    options: ["go", "goes", "going", "gone"],
    answer: 2
  },
  {
    id: 125,
    section: "English",
    question: "Identify the synonym of the word 'happy'.",
    options: ["sad", "joyful", "angry", "tired"],
    answer: 2
  },
  {
    id: 126,
    section: "English",
    question: "Choose the correct article: 'I saw _______ eagle flying high.'",
    options: ["a", "an", "the", "no article"],
    answer: 2
  },
  {
    id: 127,
    section: "English",
    question: "Complete the sentence with the correct preposition: 'He is good _______ mathematics.'",
    options: ["in", "at", "on", "for"],
    answer: 2
  },
  {
    id: 128,
    section: "English",
    question: "What is the correct comparative form of 'bad'?",
    options: ["badder", "worse", "more bad", "worst"],
    answer: 2
  },
  {
    id: 129,
    section: "English",
    question: "Choose the correct sentence.",
    options: [
      "He don't like coffee.",
      "He doesn't likes coffee.",
      "He doesn't like coffee.",
      "He do not like coffee."
    ],
    answer: 3
  },
  {
    id: 130,
    section: "English",
    question: "Select the correctly spelled word.",
    options: ["Recieve", "Receive", "Recive", "Recieive"],
    answer: 2
  },
  {
    id: 131,
    section: "English",
    question: "Identify the part of speech of the underlined word: 'He ran quickly.'",
    options: ["Noun", "Adjective", "Adverb", "Verb"],
    answer: 3
  },
  {
    id: 132,
    section: "English",
    question: "Choose the correct question tag: 'You are coming, _______?'",
    options: ["aren't you", "isn't you", "don't you", "doesn't you"],
    answer: 1
  },
  {
    id: 133,
    section: "English",
    question: "Fill in the blank: 'She has been working here _______ 2010.'",
    options: ["since", "for", "from", "at"],
    answer: 1
  },
  {
    id: 134,
    section: "English",
    question: "Choose the correct form of verb: 'If I _______ you, I would apologize.'",
    options: ["am", "were", "was", "be"],
    answer: 2
  },
  {
    id: 135,
    section: "English",
    question: "Find the antonym of the word 'Generous'.",
    options: ["Kind", "Selfish", "Helpful", "Polite"],
    answer: 2
  },
  {
    id: 136,
    section: "English",
    question: "Select the active voice of the sentence: 'The letter was written by him.'",
    options: [
      "He writes the letter.",
      "He wrote the letter.",
      "He is writing the letter.",
      "He has written the letter."
    ],
    answer: 2
  },
  {
    id: 137,
    section: "English",
    question: "Identify the error in the sentence: 'She don't want to go.'",
    options: ["She", "don't", "want", "to go"],
    answer: 2
  },
  {
    id: 138,
    section: "English",
    question: "Choose the correct plural form of 'Child'.",
    options: ["Childs", "Children", "Childes", "Childrens"],
    answer: 2
  },
  {
    id: 139,
    section: "English",
    question: "Fill in the blank with the appropriate modal verb: 'You _______ finish your homework before playing.'",
    options: ["must", "can", "may", "should"],
    answer: 1
  },
  {
    id: 140,
    section: "English",
    question: "Complete the idiom: 'A blessing in _______.'",
    options: ["disguise", "surprise", "costume", "waiting"],
    answer: 1
  },

  {
    id: 141,
    section: "GK",
    question: "Which of the following is an Autotroph?",
    options: ["Deer", "Zooplankton", "Squirrel", "Algae"],
    answer: 4
  },
  {
    id: 142,
    section: "GK",
    question: "What is the expansion of 'IDBI', a financial institution in India?",
    options: [
      "International Development Bank of India",
      "Industrial Business and Development Industry",
      "Institute of Development and Business in India",
      "Industrial Development Bank of India"
    ],
    answer: 4
  },
  {
    id: 143,
    section: "GK",
    question: "Who was the first President of India?",
    options: ["Rajendra Prasad", "Zakir Husain", "Sarvepalli Radhakrishnan", "V. V. Giri"],
    answer: 1
  },
  {
    id: 144,
    section: "GK",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 2
  },
  {
    id: 145,
    section: "GK",
    question: "Who wrote the Indian national anthem?",
    options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Subramania Bharati", "Sarojini Naidu"],
    answer: 2
  },
  {
    id: 146,
    section: "GK",
    question: "What is the chemical symbol for Gold?",
    options: ["Au", "Ag", "Gd", "Ga"],
    answer: 1
  },
  {
    id: 147,
    section: "GK",
    question: "Which is the largest continent on earth?",
    options: ["Africa", "Asia", "Europe", "Antarctica"],
    answer: 2
  },
  {
    id: 148,
    section: "GK",
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "United Kingdom", "Russia"],
    answer: 2
  },
  {
    id: 149,
    section: "GK",
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: 3
  },
  {
    id: 150,
    section: "GK",
    question: "Who discovered the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    answer: 2
  },
  {
    id: 151,
    section: "GK",
    question: "Which organ purifies our blood?",
    options: ["Heart", "Kidney", "Liver", "Lungs"],
    answer: 2
  },
  {
    id: 152,
    section: "GK",
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: 2
  },
  {
    id: 153,
    section: "GK",
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Oscar Wilde", "Charles Dickens", "Leo Tolstoy"],
    answer: 1
  },
  {
    id: 154,
    section: "GK",
    question: "What is the main source of energy for the Earth?",
    options: ["Moon", "Sun", "Stars", "Wind"],
    answer: 2
  },
  {
    id: 155,
    section: "GK",
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: 3
  },
  {
    id: 156,
    section: "GK",
    question: "Who is known as the Father of the Nation in India?",
    options: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
    answer: 3
  },
  {
    id: 157,
    section: "GK",
    question: "What is the freezing point of water?",
    options: ["0°C", "32°C", "100°C", "273°C"],
    answer: 1
  },
  {
    id: 158,
    section: "GK",
    question: "Which animal is known as the Ship of the Desert?",
    options: ["Horse", "Camel", "Elephant", "Donkey"],
    answer: 2
  },
  {
    id: 159,
    section: "GK",
    question: "What is the national bird of India?",
    options: ["Peacock", "Eagle", "Parrot", "Swan"],
    answer: 1
  },
  {
    id: 160,
    section: "GK",
    question: "Which software is used to make presentations?",
    options: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Mozilla Firefox"],
    answer: 3
  },
  {
    id: 161,
    section: "GK",
    question: "Which country has the highest population in the world?",
    options: ["India", "China", "USA", "Indonesia"],
    answer: 2
  },
  {
    id: 162,
    section: "GK",
    question: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Won", "Dollar"],
    answer: 2
  },
  {
    id: 163,
    section: "GK",
    question: "Which vitamin is produced when the skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answer: 4
  },
  {
    id: 164,
    section: "GK",
    question: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    answer: 1
  },
  {
    id: 165,
    section: "GK",
    question: "Which is the smallest unit of life?",
    options: ["Tissue", "Organ", "Cell", "Organism"],
    answer: 3
  },
  {
    id: 166,
    section: "GK",
    question: "Which planet has the largest number of moons?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: 2
  },
  {
    id: 167,
    section: "GK",
    question: "Who was the first Indian to win a Nobel Prize?",
    options: [
      "Rabindranath Tagore",
      "C.V. Raman",
      "Amartya Sen",
      "Mother Teresa"
    ],
    answer: 1
  },
  {
    id: 168,
    section: "GK",
    question: "What is the SI unit of force?",
    options: ["Newton", "Joule", "Pascal", "Watt"],
    answer: 1
  },
  {
    id: 169,
    section: "GK",
    question: "Which is the highest mountain peak in the world?",
    options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    answer: 3
  },
  {
    id: 170,
    section: "GK",
    question: "Which element is said to keep bones and teeth healthy?",
    options: ["Calcium", "Iron", "Potassium", "Magnesium"],
    answer: 1
  },
  {
    id: 171,
    section: "GK",
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["France", "UK", "Germany", "Russia"],
    answer: 1
  },
  {
    id: 172,
    section: "GK",
    question: "What is the main ingredient of glass?",
    options: ["Sand", "Clay", "Salt", "Lime"],
    answer: 1
  },
  {
    id: 173,
    section: "GK",
    question: "Who is the author of the book 'Harry Potter' series?",
    options: ["J.K. Rowling", "Stephen King", "J.R.R. Tolkien", "C.S. Lewis"],
    answer: 1
  },
  {
    id: 174,
    section: "GK",
    question: "Which is the fastest land animal?",
    options: ["Lion", "Tiger", "Cheetah", "Leopard"],
    answer: 3
  },
  {
    id: 175,
    section: "GK",
    question: "Which is the smallest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Pluto"],
    answer: 1
  },
  {
    id: 176,
    section: "GK",
    question: "How many players are there in a football team on the field?",
    options: ["9", "10", "11", "12"],
    answer: 3
  },
  {
    id: 177,
    section: "GK",
    question: "What is the process by which plants make their own food?",
    options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
    answer: 2
  },
  {
    id: 178,
    section: "GK",
    question: "Who was the Prime Minister of India during 1991-1996?",
    options: ["Atal Bihari Vajpayee", "P.V. Narasimha Rao", "Rajiv Gandhi", "Manmohan Singh"],
    answer: 2
  },
  {
    id: 179,
    section: "GK",
    question: "In which year did India gain independence?",
    options: ["1945", "1947", "1950", "1949"],
    answer: 2
  },
  {
    id: 180,
    section: "GK",
    question: "Which gas is essential for human respiration?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
    answer: 2
  },


  {
    id: 181,
    section: "Computer",
    question: "Which of the following is used to design and develop the web pages?",
    options: ["Basic", "Fortran", "Dreamweaver", "Oracle"],
    answer: 3
  },
  {
    id: 182,
    section: "Computer",
    question: "Which type of printers are Laser printers and Inkjet printers?",
    options: ["3D Printers", "LED Printers", "Non-Impact Printers", "Impact Printers"],
    answer: 3
  },
  {
    id: 183,
    section: "Computer",
    question: "What does CPU stand for in computer terminology?",
    options: ["Central Process Unit", "Central Processing Unit", "Control Processing Unit", "Central Performance Unit"],
    answer: 2
  },
  {
    id: 184,
    section: "Computer",
    question: "Which device is used as the primary input device for a computer?",
    options: ["Monitor", "Keyboard", "Printer", "Speaker"],
    answer: 2
  },
  {
    id: 185,
    section: "Computer",
    question: "What is the full form of URL?",
    options: ["Uniform Resource Locator", "Universal Resource Locator", "Unified Resource Link", "Universal Reference Link"],
    answer: 1
  },
  {
    id: 186,
    section: "Computer",
    question: "Which of the following is an example of an operating system?",
    options: ["Microsoft Word", "Windows 10", "Adobe Photoshop", "Google Chrome"],
    answer: 2
  },
  {
    id: 187,
    section: "Computer",
    question: "Which language is primarily used for web development?",
    options: ["Python", "HTML", "C++", "Java"],
    answer: 2
  },
  {
    id: 188,
    section: "Computer",
    question: "What kind of device is a scanner?",
    options: ["Input", "Output", "Storage", "Processing"],
    answer: 1
  },
  {
    id: 189,
    section: "Computer",
    question: "Which company developed the Windows operating system?",
    options: ["Apple", "IBM", "Microsoft", "Google"],
    answer: 3
  },
  {
    id: 190,
    section: "Computer",
    question: "What is the name of the memory that stores data temporarily for quick access?",
    options: ["ROM", "RAM", "Hard Disk", "Cache"],
    answer: 2
  },
  {
    id: 191,
    section: "Computer",
    question: "Which device is used to connect a computer to a network?",
    options: ["Modem", "Router", "Switch", "All of the above"],
    answer: 4
  },
  {
    id: 192,
    section: "Computer",
    question: "On which layer of the OSI model does the IP protocol operate?",
    options: ["Data Link Layer", "Network Layer", "Transport Layer", "Application Layer"],
    answer: 2
  },
  {
    id: 193,
    section: "Computer",
    question: "Which software helps to detect and remove viruses from a computer?",
    options: ["Antivirus", "Firewall", "Browser", "Driver"],
    answer: 1
  },
  {
    id: 194,
    section: "Computer",
    question: "What does USB stand for?",
    options: ["Universal Serial Bus", "Universal Service Bus", "Unified Serial Bus", "Universal System Block"],
    answer: 1
  },
  {
    id: 195,
    section: "Computer",
    question: "Which part of the computer is known as the brain of the computer?",
    options: ["Hard Disk", "CPU", "RAM", "Motherboard"],
    answer: 2
  },
  {
    id: 196,
    section: "Computer",
    question: "What does PDF stand for?",
    options: ["Portable Document Format", "Public Document File", "Personal Data File", "Portable Data Format"],
    answer: 1
  },
  {
    id: 197,
    section: "Computer",
    question: "What is the shortcut key to copy selected text in most computer programs?",
    options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    answer: 2
  },
  {
    id: 198,
    section: "Computer",
    question: "Which of these is not an input device?",
    options: ["Joystick", "Monitor", "Mouse", "Keyboard"],
    answer: 2
  },
  {
    id: 199,
    section: "Computer",
    question: "What is the extension of a Word Document file?",
    options: [".docx", ".pdf", ".txt", ".xls"],
    answer: 1
  },
  {
    id: 200,
    section: "Computer",
    question: "What type of memory is ROM?",
    options: ["Volatile", "Non-Volatile", "Primary", "Cache"],
    answer: 2
  }
];

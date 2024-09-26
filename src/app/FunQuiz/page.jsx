'use client';
import { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';


export default function CompatibilityTest() {
  const [step, setStep] = useState(0);
  const [isMuslim, setIsMuslim] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [matchPercentage, setMatchPercentage] = useState(null);


 

  const referenceAnswers = {
    1: 'Yes',
    2: 'Five times a day',
    3: 'Very Important',
    4: 'Yes',
    5: 'Equal Partnership',
    6: 'Meditation/Prayer',
    7: 'Very comfortable',
    8: 'Yes, I believe it is essential',
    9: 'Quality time',
    10: 'Open communication and compromise',
    11: 'More Cats!',
    12: 'Samsung',
  };

  const questions = [
    { id: 1, question: 'Are you a Muslim?', options: ['Yes', 'No'] },
    { id: 2, question: 'How often do you pray?', options: ['Five times a day', 'Occasionally', 'Rarely'] },
    { id: 3, question: 'How important is practicing Islam in your daily life?', options: ['Very Important', 'Somewhat Important', 'Not Important'] },
    { id: 4, question: 'Do you practice Quran recitation in your daily life?', options: ['Yes', 'No'] },
    { id: 5, question: 'How do you view the roles of a husband and wife in marriage?', options: ['Equal Partnership', 'Traditional Roles', 'Unsure'] },
    { id: 6, question: 'How do you manage stress or emotional challenges in your life?', options: ['Meditation/Prayer', 'Talking to a trusted person', 'Physical activity (sports, exercise)', 'Keeping it to myself'] },
    { id: 7, question: 'How comfortable are you discussing your emotions with a partner?', options: ['Very comfortable', 'Somewhat comfortable', 'Not comfortable'] },
    { id: 8, question: 'Do you believe in seeking professional help (like counseling) for mental health or relationship issues?', options: ['Yes, I believe it is essential', 'Only in extreme cases', 'No, I prefer to handle things myself'] },
    { id: 9, question: 'How do you express love and affection?', options: ['Verbally (words of affirmation)', 'Physical touch', 'Acts of service', 'Gifts or material things', 'Quality time'] },
    { id: 10, question: 'How do you handle conflicts in a relationship?', options: ['Open communication and compromise', 'Avoid conflict and hope it resolves', 'Get defensive or argue'] },
    { id: 11, question: 'Cats or Cats? (Because we all know the answer)', options: ['Cats', 'More Cats!'] },
    { id: 12, question: 'iPhone or Samsung?(This is me being petty)', options: ['iPhone', 'Samsung'] },
  ];

  const handleAnswer = (option) => {
    if (step === 0 && option === 'No') {
      setIsMuslim(false);
    } else {
      setIsMuslim(true);
      setUserAnswers([...userAnswers, option]);
      
      setStep(step + 1);
    }
  };

  const calculateMatch = () => {
    let totalQuestions = Object.keys(referenceAnswers).length;
    let matchingAnswers = 0;

    userAnswers.forEach((answer, index) => {
      const questionId = index + 1;
      if (answer === referenceAnswers[questionId]) {
        matchingAnswers++;
      }
    });

    const matchPercentage = Math.round((matchingAnswers / totalQuestions) * 100);
    setMatchPercentage(matchPercentage);

    if (matchPercentage >= 75) {
      confetti({
        particleCount: 150,
        spread: 60,
        origin: { y: 0.6 },
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 },
  };

 
  const progressPercentage = (userAnswers.length / questions.length) * 100;

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        {isMuslim === false ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank you!</h2>
            <p className="text-gray-600">This test is designed for Muslims only.</p>
          </div>
        ) : step < questions.length ? (
          <>
            <motion.div
              key={questions[step].id}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">{questions[step].question}</h2>
              <div className="flex flex-col gap-4">
                {questions[step].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-400"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Progress:</h3>
              <div className="h-4 bg-gray-200 rounded">
                <div
                  className="h-full bg-blue-600 rounded"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            
          </>
        ) : matchPercentage === null ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">End of the Test</h2>
            <button
              onClick={calculateMatch}
              className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-400"
            >
              Calculate Compatibility
            </button>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Compatibility Score</h2>
            <p className="text-gray-600 mb-4">You are {matchPercentage}% compatible!</p>
            {matchPercentage >= 75 ? (
              <div>
                <p className="text-green-600 mb-4">Great match! You can reach out to me:</p>
                <button className="text-black bg-yellow-500 rounded-md p-2 font-bold">
                  <Link href="/ContactMe">Contact ME</Link>
                </button>
              </div>
            ) : (
              <p className="text-red-600">Sorry, we’re not a great match!</p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

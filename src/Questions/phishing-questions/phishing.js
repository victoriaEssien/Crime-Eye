export const quiz = {
  topic: 'Phishing',
  level: 'Beginner',
  totalQuestions: 10,
  perQuestionScore: 1,
  questions: [
    {
      question: 'You receive an email claiming to be from your bank, asking you to urgently update your account details or risk having your account suspended. What should you do?',
      choices: ['Click the provided link and update your account information',
      'Ignore the email and delete it',
      'Reply to the email with your account details',
      'Forward the email to all your contacts for awareness'
      ],
      type: 'MCQs',
      correctAnswer: 'Ignore the email and delete it',
    },
    {
      question: 'You receive a text message informing you that you have won a lottery and need to provide your bank account details to claim the prize. What should you do?',
      choices: ['Provide your bank account details as requested',
      'Report the message as spam and delete it',
      'Share the message on social media to alert others',
      'Reply with a request for more information'
      ],
      type: 'MCQs',
      correctAnswer: 'Report the message as spam and delete it',
    },
    {
      question: 'You receive an email claiming to be from a popular online shopping website, offering an exclusive discount on a product you recently searched for. The email asks you to click on a link to claim the discount. What should you do?',
      choices: ['Click the link and enter your payment information to activate the discount', 
      'Forward the email to your friends to let them know about the discount', 'Delete the email without clicking on any links', 'Reply to the email with your appreciation for the offer'
    ],
      type: 'MCQs',
      correctAnswer: 'Delete the email without clicking on any links',
    },
    {
      question: 'You receive an email from a colleague asking you to urgently transfer funds to a specified account for an important project. The email includes the colleagues name and company logo. What should you do?',
      choices: ['Transfer the funds as requested without any further verification', 'Reply to the email asking for more details about the project', 'Double-check the email address and contact your colleague directly to verify the request', 'Forward the email to your supervisor for guidance'],
      type: 'MCQs',
      correctAnswer: 'Double-check the email address and contact your colleague directly to verify the request',
    },
    {
      question: 'You receive a pop-up message on your computer warning you that your system has been infected with a virus and you need to call a provided phone number to fix the issue. What should you do?',
      choices: ['Call the provided phone number and follow their instructions', 'Disconnect from the internet and run a trusted antivirus scan', 'Click on the pop-up message to learn more about the virus', 'Share the pop-up message on social media to warn others'],
      type: 'MCQs',
      correctAnswer: 'Disconnect from the internet and run a trusted antivirus scan',
    },
    {
      question: 'You receive a phone call from someone claiming to be a representative of a tech support company, stating that your computer has been hacked. They request remote access to fix the issue. What should you do?',
      choices: ['Provide remote access to the caller as requested', 'Hang up the call and report it to your local authorities', 'Ask for their credentials and verify their identity before proceeding', 'Share the details of the call on online forums to warn others'],
      type: 'MCQs',
      correctAnswer: 'Hang up the call and report it to your local authorities',
    },
    {
      question: 'You come across a website offering free downloads of paid software. To access the downloads, the website asks for your email address and password. What should you do?',
      choices: ['Provide your email address and password to access the downloads', 'Report the website to the appropriate authorities', 'Close the website and search for legitimate sources to download the software', 'Share the website link on social media to warn others'],
      type: 'MCQs',
      correctAnswer: 'Close the website and search for legitimate sources to download the software',
    },
    {
      question: 'You receive an email claiming to be from a charitable organization requesting donations for a recent natural disaster. The email includes a link to donate. What should you do?',
      choices: ['Click the link and donate immediately', 'Forward the email to your friends and family to encourage donations', 'Delete the email without clicking on any links and donate directly through the organizations official website', 'Reply to the email asking for more information about the disaster'],
      type: 'MCQs',
      correctAnswer: 'Delete the email without clicking on any links and donate directly through the organizations official website',
    },
    {
      question: 'You receive a message on social media from someone claiming to be a long-lost relative who needs financial help urgently. What should you do?',
      choices: ['Transfer the requested funds to the provided bank account', 'Report the message as suspicious and block the sender', 'Share the message on your social media profile to gather advice from others', 'Reply to the message with questions to verify the senders identity'],
      type: 'MCQs',
      correctAnswer: 'Report the message as suspicious and block the sender',
    },
    {
      question: 'You receive an email with an attachment claiming to be an invoice for a recent purchase. The email requests you to open the attachment for more details. What should you do?',
      choices: ['Open the attachment to review the invoice', 'Forward the email to your colleagues for awareness', 'Delete the email without opening the attachment', 'Reply to the email asking for clarification about the purchase'],
      type: 'MCQs',
      correctAnswer: 'Delete the email without opening the attachment',
    },
  ],
}
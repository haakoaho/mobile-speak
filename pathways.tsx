export type PathwaySpeech = {
  speechNumber: number;
  title: string;
  overview: string;
  objective: string;
  greenCard: string;
  yellowCard: string;
  redCard: string;
};

export type Pathway = {
  title: string;
  level1: PathwaySpeech[];
  level2: PathwaySpeech[];
  level3: PathwaySpeech[];
  level4: PathwaySpeech[];
  level5: PathwaySpeech[];
};

export const pathways: Pathway[] = [
  {
    title: "Presentation Mastery",
    level1: [
      {
        speechNumber: 1,
        title: "Icebreaker",
        overview:
          "This foundational project is designed to introduce you to your club and the skills you need to begin your Toastmasters journey.",
        objective:
          "Write and deliver a speech about any topic to introduce yourself to the club. Your speech may be humorous, informational, or any other style that appeals to you.",
        greenCard: "4:00",
        yellowCard: "5:00",
        redCard: "6:00",
      },
      {
        speechNumber: 2,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "Present a speech on any topic. You will receive feedback from your evaluator and then present a second speech incorporating the feedback.",
        objective:
          "Deliver a speech and then incorporate feedback to improve your skills.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "Present a speech that incorporates feedback from your first speech.",
        objective:
          "Incorporate the feedback from your first speech and present again to demonstrate improvement.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Researching and Presenting",
        overview:
          "Learn or review basic research methods and present a well-organized, researched speech on any topic.",
        objective:
          "Research a topic and present it in a clear and engaging manner.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level2: [
      {
        speechNumber: 1,
        title: "Understanding Your Communication Style",
        overview:
          "Identify your communication style and how it impacts your interactions with others.",
        objective:
          "Deliver a speech that discusses your communication style and its impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Effective Body Language",
        overview:
          "Learn about effective body language and its impact on your communication.",
        objective:
          "Deliver a speech on a topic of your choice and incorporate effective body language.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "Learn about the importance of mentoring in Toastmasters and how to benefit from being a mentor and mentee.",
        objective:
          "Deliver a speech about your experience with mentoring or the benefits of having a mentor.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Persuasive Speaking",
        overview:
          "Learn how to influence and persuade others through your speech.",
        objective:
          "Deliver a speech that persuades your audience on a particular topic.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Using Presentation Software",
        overview:
          "Learn how to use presentation software effectively to support your speech.",
        objective:
          "Deliver a speech with the support of presentation software such as PowerPoint.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Connect with Storytelling",
        overview:
          "Learn how to use storytelling to make your message more engaging and memorable.",
        objective:
          "Deliver a speech that uses storytelling to convey your message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "Building a Social Media Presence",
        overview:
          "Learn how to build and maintain a social media presence to enhance your personal or professional brand.",
        objective:
          "Deliver a speech about your experience with building a social media presence.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Managing a Difficult Audience",
        overview:
          "Learn strategies for managing difficult audience members and maintaining control during your speech.",
        objective:
          "Deliver a speech where you demonstrate your ability to handle a difficult audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "Prepare to Speak Professionally",
        overview:
          "Develop the skills to present professionally and prepare for speaking opportunities outside of Toastmasters.",
        objective:
          "Deliver a speech as if you were speaking to a professional audience outside of Toastmasters.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 2,
        title: "Reflect on Your Path",
        overview:
          "Review the path you have completed and the skills you have developed.",
        objective:
          "Deliver a speech reflecting on your Toastmasters journey and the progress you have made.",
        greenCard: "10:00",
        yellowCard: "12:00",
        redCard: "14:00",
      },
    ],
  },
  {
    title: "Leadership Development",
    level1: [
      {
        speechNumber: 1,
        title: "Icebreaker",
        overview:
          "This foundational project is designed to introduce you to your club and the skills you need to begin your Toastmasters journey.",
        objective:
          "Write and deliver a speech about any topic to introduce yourself to the club. Your speech may be humorous, informational, or any other style that appeals to you.",
        greenCard: "4:00",
        yellowCard: "5:00",
        redCard: "6:00",
      },
      {
        speechNumber: 2,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "Present a speech on any topic. You will receive feedback from your evaluator and then present a second speech incorporating the feedback.",
        objective:
          "Deliver a speech and then incorporate feedback to improve your skills.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "Present a speech that incorporates feedback from your first speech.",
        objective:
          "Incorporate the feedback from your first speech and present again to demonstrate improvement.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Researching and Presenting",
        overview:
          "Learn or review basic research methods and present a well-organized, researched speech on any topic.",
        objective:
          "Research a topic and present it in a clear and engaging manner.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level2: [
      {
        speechNumber: 1,
        title: "Understanding Your Leadership Style",
        overview:
          "Identify your leadership style and how it impacts your interactions with others.",
        objective:
          "Deliver a speech that discusses your leadership style and its impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Creating Effective Presentations",
        overview:
          "Learn how to create effective presentations that engage and inform your audience.",
        objective: "Deliver a speech that includes an effective presentation.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "Learn about the importance of mentoring in Toastmasters and how to benefit from being a mentor and mentee.",
        objective:
          "Deliver a speech about your experience with mentoring or the benefits of having a mentor.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Reaching Consensus",
        overview:
          "Learn how to lead a team to reach consensus and make decisions.",
        objective:
          "Deliver a speech about a time you led a team to reach a consensus.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Planning and Implementing",
        overview: "Learn how to plan and implement a project successfully.",
        objective:
          "Deliver a speech about a project you planned and implemented.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Motivate Others",
        overview: "Learn how to motivate others to achieve their goals.",
        objective: "Deliver a speech about how you motivated others.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "Leading in Your Volunteer Organization",
        overview:
          "Learn how to take on a leadership role in a volunteer organization.",
        objective:
          "Deliver a speech about your experience leading in a volunteer organization.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Manage Change",
        overview: "Learn how to manage change within an organization.",
        objective: "Deliver a speech about a time you managed change.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "Lead in Any Situation",
        overview: "Learn how to lead effectively in any situation.",
        objective:
          "Deliver a speech about a time you led in a challenging situation.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 2,
        title: "Reflect on Your Path",
        overview:
          "Review the path you have completed and the skills you have developed.",
        objective:
          "Deliver a speech reflecting on your Toastmasters journey and the progress you have made.",
        greenCard: "10:00",
        yellowCard: "12:00",
        redCard: "14:00",
      },
    ],
  },
  {
    title: "Effective Coaching",
    level1: [
      {
        speechNumber: 1,
        title: "Icebreaker",
        overview:
          "This foundational project is designed to introduce you to your club and the skills you need to begin your Toastmasters journey.",
        objective:
          "Write and deliver a speech about any topic to introduce yourself to the club. Your speech may be humorous, informational, or any other style that appeals to you.",
        greenCard: "4:00",
        yellowCard: "5:00",
        redCard: "6:00",
      },
      {
        speechNumber: 2,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "Present a speech on any topic. You will receive feedback from your evaluator and then present a second speech incorporating the feedback.",
        objective:
          "Deliver a speech and then incorporate feedback to improve your skills.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "Present a speech that incorporates feedback from your first speech.",
        objective:
          "Incorporate the feedback from your first speech and present again to demonstrate improvement.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Researching and Presenting",
        overview:
          "Learn or review basic research methods and present a well-organized, researched speech on any topic.",
        objective:
          "Research a topic and present it in a clear and engaging manner.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level2: [
      {
        speechNumber: 1,
        title: "Understanding Your Leadership Style",
        overview:
          "Identify your leadership style and how it impacts your interactions with others.",
        objective:
          "Deliver a speech that discusses your leadership style and its impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Active Listening",
        overview:
          "Learn how to listen actively and provide effective feedback.",
        objective: "Deliver a speech about the importance of active listening.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "Learn about the importance of mentoring in Toastmasters and how to benefit from being a mentor and mentee.",
        objective:
          "Deliver a speech about your experience with mentoring or the benefits of having a mentor.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Reaching Consensus",
        overview:
          "Learn how to lead a team to reach consensus and make decisions.",
        objective:
          "Deliver a speech about a time you led a team to reach a consensus.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Successful Collaboration",
        overview:
          "Learn how to collaborate successfully with others to achieve a common goal.",
        objective:
          "Deliver a speech about a time you successfully collaborated with others.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Motivate Others",
        overview: "Learn how to motivate others to achieve their goals.",
        objective: "Deliver a speech about how you motivated others.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "Improvement Through Positive Coaching",
        overview:
          "Learn how to provide positive and effective coaching to others.",
        objective:
          "Deliver a speech about a time you provided positive coaching.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Manage Projects Successfully",
        overview:
          "Learn how to manage projects successfully and lead a team to achieve project goals.",
        objective: "Deliver a speech about a project you managed successfully.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "Effective Coaching",
        overview:
          "Learn how to coach others effectively to help them achieve their goals.",
        objective:
          "Deliver a speech about your experience with effective coaching.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 2,
        title: "Reflect on Your Path",
        overview:
          "Review the path you have completed and the skills you have developed.",
        objective:
          "Deliver a speech reflecting on your Toastmasters journey and the progress you have made.",
        greenCard: "10:00",
        yellowCard: "12:00",
        redCard: "14:00",
      },
    ],
  },
  {
    title: "Persuasive Influence",
    level1: [
      {
        speechNumber: 1,
        title: "Icebreaker",
        overview:
          "This foundational project is designed to introduce you to your club and the skills you need to begin your Toastmasters journey.",
        objective:
          "Write and deliver a speech about any topic to introduce yourself to the club. Your speech may be humorous, informational, or any other style that appeals to you.",
        greenCard: "4:00",
        yellowCard: "5:00",
        redCard: "6:00",
      },
      {
        speechNumber: 2,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "Present a speech on any topic. You will receive feedback from your evaluator and then present a second speech incorporating the feedback.",
        objective:
          "Deliver a speech and then incorporate feedback to improve your skills.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "Present a speech that incorporates feedback from your first speech.",
        objective:
          "Incorporate the feedback from your first speech and present again to demonstrate improvement.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Researching and Presenting",
        overview:
          "Learn or review basic research methods and present a well-organized, researched speech on any topic.",
        objective:
          "Research a topic and present it in a clear and engaging manner.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level2: [
      {
        speechNumber: 1,
        title: "Understanding Your Leadership Style",
        overview:
          "Identify your leadership style and how it impacts your interactions with others.",
        objective:
          "Deliver a speech that discusses your leadership style and its impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Active Listening",
        overview:
          "Learn how to listen actively and provide effective feedback.",
        objective: "Deliver a speech about the importance of active listening.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "Learn about the importance of mentoring in Toastmasters and how to benefit from being a mentor and mentee.",
        objective:
          "Deliver a speech about your experience with mentoring or the benefits of having a mentor.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Understanding Conflict Resolution",
        overview:
          "Learn strategies for resolving conflicts and maintaining positive relationships.",
        objective: "Deliver a speech about a time you resolved a conflict.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Building Social Media Presence",
        overview:
          "Learn how to build and maintain a social media presence to enhance your personal or professional brand.",
        objective:
          "Deliver a speech about your experience with building a social media presence.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Motivate Others",
        overview: "Learn how to motivate others to achieve their goals.",
        objective: "Deliver a speech about how you motivated others.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "Leading in Difficult Situations",
        overview: "Learn how to lead effectively in difficult situations.",
        objective:
          "Deliver a speech about a time you led in a difficult situation.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Public Relations Strategies",
        overview:
          "Learn strategies for managing public relations and maintaining a positive public image.",
        objective:
          "Deliver a speech about a public relations strategy you implemented.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "Develop Your Vision",
        overview:
          "Learn how to develop and articulate your vision for the future.",
        objective:
          "Deliver a speech about your vision for the future and how you plan to achieve it.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 2,
        title: "Reflect on Your Path",
        overview:
          "Review the path you have completed and the skills you have developed.",
        objective:
          "Deliver a speech reflecting on your Toastmasters journey and the progress you have made.",
        greenCard: "10:00",
        yellowCard: "12:00",
        redCard: "14:00",
      },
    ],
  },
  {
    title: "Engaging Humor",
    level1: [
      {
        speechNumber: 1,
        title: "Icebreaker",
        overview:
          "This foundational project is designed to introduce you to your club and the skills you need to begin your Toastmasters journey.",
        objective:
          "Write and deliver a speech about any topic to introduce yourself to the club. Your speech may be humorous, informational, or any other style that appeals to you.",
        greenCard: "4:00",
        yellowCard: "5:00",
        redCard: "6:00",
      },
      {
        speechNumber: 2,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "Present a speech on any topic. You will receive feedback from your evaluator and then present a second speech incorporating the feedback.",
        objective:
          "Deliver a speech and then incorporate feedback to improve your skills.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "Present a speech that incorporates feedback from your first speech.",
        objective:
          "Incorporate the feedback from your first speech and present again to demonstrate improvement.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Researching and Presenting",
        overview:
          "Learn or review basic research methods and present a well-organized, researched speech on any topic.",
        objective:
          "Research a topic and present it in a clear and engaging manner.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level2: [
      {
        speechNumber: 1,
        title: "Know Your Sense of Humor",
        overview:
          "Learn about your sense of humor and how it impacts your communication.",
        objective: "Deliver a speech that explores your sense of humor.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Connect with Your Audience",
        overview: "Learn how to connect with your audience through humor.",
        objective:
          "Deliver a speech that uses humor to connect with your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "Learn about the importance of mentoring in Toastmasters and how to benefit from being a mentor and mentee.",
        objective:
          "Deliver a speech about your experience with mentoring or the benefits of having a mentor.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Engaging Your Audience with Humor",
        overview: "Learn how to engage your audience through the use of humor.",
        objective: "Deliver a speech that uses humor to engage your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Using Humor in Different Situations",
        overview:
          "Learn how to use humor appropriately in different situations.",
        objective:
          "Deliver a speech that demonstrates the appropriate use of humor in different situations.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Motivate Others",
        overview: "Learn how to motivate others to achieve their goals.",
        objective: "Deliver a speech about how you motivated others.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "Building a Humor Toolkit",
        overview:
          "Learn how to build a toolkit of humorous material for your speeches.",
        objective:
          "Deliver a speech that incorporates material from your humor toolkit.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Using Humor in Public Speaking",
        overview:
          "Learn strategies for using humor effectively in public speaking.",
        objective:
          "Deliver a speech that uses humor effectively in public speaking.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "Engaging Humor",
        overview: "Learn how to engage your audience through the use of humor.",
        objective: "Deliver a speech that uses humor to engage your audience.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 2,
        title: "Reflect on Your Path",
        overview:
          "Review the path you have completed and the skills you have developed.",
        objective:
          "Deliver a speech reflecting on your Toastmasters journey and the progress you have made.",
        greenCard: "10:00",
        yellowCard: "12:00",
        redCard: "14:00",
      },
    ],
  },
  {
    title: "Dynamic Leadership",
    level1: [
      {
        speechNumber: 1,
        title: "Icebreaker",
        overview:
          "This foundational project is designed to introduce you to your club and the skills you need to begin your Toastmasters journey.",
        objective:
          "Write and deliver a speech about any topic to introduce yourself to the club. Your speech may be humorous, informational, or any other style that appeals to you.",
        greenCard: "4:00",
        yellowCard: "5:00",
        redCard: "6:00",
      },
      {
        speechNumber: 2,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "Present a speech on any topic. You will receive feedback from your evaluator and then present a second speech incorporating the feedback.",
        objective:
          "Deliver a speech and then incorporate feedback to improve your skills.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "Present a speech that incorporates feedback from your first speech.",
        objective:
          "Incorporate the feedback from your first speech and present again to demonstrate improvement.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Researching and Presenting",
        overview:
          "Learn or review basic research methods and present a well-organized, researched speech on any topic.",
        objective:
          "Research a topic and present it in a clear and engaging manner.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level2: [
      {
        speechNumber: 1,
        title: "Understanding Your Leadership Style",
        overview:
          "Identify your leadership style and how it impacts your interactions with others.",
        objective:
          "Deliver a speech that discusses your leadership style and its impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Active Listening",
        overview:
          "Learn how to listen actively and provide effective feedback.",
        objective: "Deliver a speech about the importance of active listening.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "Learn about the importance of mentoring in Toastmasters and how to benefit from being a mentor and mentee.",
        objective:
          "Deliver a speech about your experience with mentoring or the benefits of having a mentor.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Effective Team Building",
        overview: "Learn how to build and lead an effective team.",
        objective:
          "Deliver a speech about a time you built and led an effective team.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Inspiring Leadership",
        overview: "Learn how to inspire others through your leadership.",
        objective:
          "Deliver a speech about a time you inspired others through your leadership.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Motivate Others",
        overview: "Learn how to motivate others to achieve their goals.",
        objective: "Deliver a speech about how you motivated others.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "Managing Challenges",
        overview: "Learn how to manage and overcome challenges.",
        objective:
          "Deliver a speech about a time you managed and overcame challenges.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Negotiating Skills",
        overview: "Learn effective negotiation skills.",
        objective:
          "Deliver a speech about a time you used negotiation skills successfully.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "Dynamic Leadership",
        overview:
          "Learn how to lead dynamically and adapt to changing situations.",
        objective:
          "Deliver a speech about a time you led dynamically and adapted to changing situations.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 2,
        title: "Reflect on Your Path",
        overview:
          "Review the path you have completed and the skills you have developed.",
        objective:
          "Deliver a speech reflecting on your Toastmasters journey and the progress you have made.",
        greenCard: "10:00",
        yellowCard: "12:00",
        redCard: "14:00",
      },
    ],
  },
  {
    title: "Motivational Strategies",
    level1: [
      {
        speechNumber: 1,
        title: "Icebreaker",
        overview:
          "This foundational project is designed to introduce you to your club and the skills you need to begin your Toastmasters journey.",
        objective:
          "Write and deliver a speech about any topic to introduce yourself to the club. Your speech may be humorous, informational, or any other style that appeals to you.",
        greenCard: "4:00",
        yellowCard: "5:00",
        redCard: "6:00",
      },
      {
        speechNumber: 2,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "Present a speech on any topic. You will receive feedback from your evaluator and then present a second speech incorporating the feedback.",
        objective:
          "Deliver a speech and then incorporate feedback to improve your skills.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "Present a speech that incorporates feedback from your first speech.",
        objective:
          "Incorporate the feedback from your first speech and present again to demonstrate improvement.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Researching and Presenting",
        overview:
          "Learn or review basic research methods and present a well-organized, researched speech on any topic.",
        objective:
          "Research a topic and present it in a clear and engaging manner.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level2: [
      {
        speechNumber: 1,
        title: "Understanding Motivation",
        overview:
          "Learn about different motivational strategies and how they can be applied.",
        objective:
          "Deliver a speech about different motivational strategies and their effectiveness.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Active Listening",
        overview:
          "Learn how to listen actively and provide effective feedback.",
        objective: "Deliver a speech about the importance of active listening.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "Learn about the importance of mentoring in Toastmasters and how to benefit from being a mentor and mentee.",
        objective:
          "Deliver a speech about your experience with mentoring or the benefits of having a mentor.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Motivational Techniques",
        overview: "Learn various techniques to motivate individuals and teams.",
        objective:
          "Deliver a speech demonstrating the application of motivational techniques.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Inspiring Leadership",
        overview: "Learn how to inspire others through your leadership.",
        objective:
          "Deliver a speech about a time you inspired others through your leadership.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Motivate Others",
        overview: "Learn how to motivate others to achieve their goals.",
        objective: "Deliver a speech about how you motivated others.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "Motivating a Team",
        overview: "Learn how to motivate a team to achieve common goals.",
        objective: "Deliver a speech about a time you motivated a team.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Understanding Emotional Intelligence",
        overview: "Learn how emotional intelligence impacts motivation.",
        objective:
          "Deliver a speech about the role of emotional intelligence in motivation.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "Mastering Motivation",
        overview: "Learn how to master the art of motivation.",
        objective:
          "Deliver a speech demonstrating mastery of motivational strategies.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 2,
        title: "Reflect on Your Path",
        overview:
          "Review the path you have completed and the skills you have developed.",
        objective:
          "Deliver a speech reflecting on your Toastmasters journey and the progress you have made.",
        greenCard: "10:00",
        yellowCard: "12:00",
        redCard: "14:00",
      },
    ],
  },
  {
    title: "Innovative Planning",
    level1: [
      {
        speechNumber: 1,
        title: "Icebreaker",
        overview:
          "This foundational project is designed to introduce you to your club and the skills you need to begin your Toastmasters journey.",
        objective:
          "Write and deliver a speech about any topic to introduce yourself to the club. Your speech may be humorous, informational, or any other style that appeals to you.",
        greenCard: "4:00",
        yellowCard: "5:00",
        redCard: "6:00",
      },
      {
        speechNumber: 2,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "Present a speech on any topic. You will receive feedback from your evaluator and then present a second speech incorporating the feedback.",
        objective:
          "Deliver a speech and then incorporate feedback to improve your skills.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "Present a speech that incorporates feedback from your first speech.",
        objective:
          "Incorporate the feedback from your first speech and present again to demonstrate improvement.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Researching and Presenting",
        overview:
          "Learn or review basic research methods and present a well-organized, researched speech on any topic.",
        objective:
          "Research a topic and present it in a clear and engaging manner.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level2: [
      {
        speechNumber: 1,
        title: "Understanding Your Audience",
        overview:
          "Learn how to analyze your audience and tailor your message to their needs.",
        objective:
          "Deliver a speech that demonstrates your understanding of your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Effective Use of Visual Aids",
        overview:
          "Learn how to effectively use visual aids to enhance your message.",
        objective:
          "Deliver a speech that incorporates visual aids effectively.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Inspire Your Audience",
        overview:
          "Learn how to inspire and motivate your audience through your speech.",
        objective: "Deliver an inspiring speech that motivates your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "The Power of Storytelling",
        overview:
          "Learn how to effectively use storytelling to convey your message.",
        objective:
          "Deliver a speech that uses storytelling to convey your message effectively.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Connect with Your Audience Emotionally",
        overview:
          "Learn how to connect with your audience on an emotional level.",
        objective:
          "Deliver a speech that connects with your audience emotionally.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Effective Use of Language",
        overview:
          "Learn how to use language effectively to enhance your message.",
        objective:
          "Deliver a speech that demonstrates effective use of language.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "Developing a Compelling Vision",
        overview: "Learn how to develop and articulate a compelling vision.",
        objective:
          "Deliver a speech that presents a compelling vision and inspires your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Leading Change",
        overview: "Learn how to lead and manage change effectively.",
        objective:
          "Deliver a speech about a change initiative you led and its impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "Innovative Planning",
        overview:
          "Learn how to innovate and plan effectively for future success.",
        objective:
          "Deliver a speech that showcases innovative planning and strategic thinking.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 2,
        title: "Reflect on Your Path",
        overview:
          "Review the path you have completed and the skills you have developed.",
        objective:
          "Deliver a speech reflecting on your Toastmasters journey and the progress you have made.",
        greenCard: "10:00",
        yellowCard: "12:00",
        redCard: "14:00",
      },
    ],
  }
];

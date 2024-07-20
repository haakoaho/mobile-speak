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
        title: "Writing a Speech with Purpose",
        overview:
          "This project addresses topic selection strategies, how to define the purpose of your speech, and methods for producing a well-organized speech.",
        objective:
          "Select a topic that appeals to you. It can be anything. Be sure your topic is narrow enough to be an effective 5- to 7-minute speech. Clearly define your topic and consider your goal for your speech. Before you organize your speech, clearly define your purpose. Practice your speech and continue to refine its organization. Present your speech at a club meeting.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Vocal Variety and Body Language",
        overview:
          "This project focuses on the importance of vocal variety and body language in your speech delivery.",
        objective:
          "Learn to use vocal variety and body language to enhance the impact of your speech. Practice incorporating these elements into your delivery. Present your speech at a club meeting.",
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
          "This project helps you understand your communication style and how it impacts your interactions with others.",
        objective:
          "Complete the communication style quiz and review your results. Prepare a 5- to 7-minute speech to share your communication style and its impact on your professional and personal relationships.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Effective Body Language",
        overview:
          "This project addresses the importance of recognizing and using body language to enhance your speech.",
        objective:
          "Deliver a 5- to 7-minute speech on a topic of your choice. Incorporate the lessons you learned about body language in your delivery.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Mentoring",
        overview:
          "This project introduces the value of mentorship and the roles and responsibilities of a mentor.",
        objective:
          "Deliver a 5- to 7-minute speech about your experience as a protégé or mentor, or about the impact of mentorship on your life.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Persuasive Speaking",
        overview: "This project focuses on how to prepare a persuasive speech.",
        objective:
          "Deliver a persuasive 5- to 7-minute speech on a topic of your choice. Use the techniques learned in this project to present a strong and convincing argument.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Connect with Storytelling",
        overview:
          "This elective project addresses storytelling techniques and how to use them to enhance your speeches.",
        objective:
          "Deliver a 5- to 7-minute story that is either personal or fictional. Use the storytelling techniques discussed in the project to engage your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Using Presentation Software",
        overview:
          "This elective project addresses the use of presentation software and how to effectively incorporate it into your speeches.",
        objective:
          "Deliver a 5- to 7-minute speech using presentation software to enhance your message. Ensure your slides are clear and support your speech.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Creating Effective Visual Aids",
        overview:
          "This elective project focuses on creating effective visual aids and how to use them in your presentations.",
        objective:
          "Deliver a 5- to 7-minute speech using visual aids to support your message. Ensure your visual aids are clear and enhance your speech.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Using Descriptive Language",
        overview:
          "This elective project focuses on using descriptive language to enhance your speeches.",
        objective:
          "Deliver a 5- to 7-minute speech using vivid and descriptive language to paint a picture for your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "Managing a Difficult Audience",
        overview:
          "This project focuses on strategies for managing difficult audiences and handling interruptions.",
        objective:
          "Deliver a 5- to 7-minute speech to a challenging audience, incorporating techniques for managing interruptions and difficult audience members.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Building a Social Media Presence",
        overview:
          "This elective project addresses strategies for building a social media presence to enhance your personal or professional brand.",
        objective:
          "Develop a plan to build a social media presence. Deliver a 5- to 7-minute speech about your plan and its potential impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Question-and-Answer Session",
        overview:
          "This elective project focuses on preparing and conducting a question-and-answer session.",
        objective:
          "Deliver a 5- to 7-minute speech followed by a 5-minute question-and-answer session.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Public Relations Strategies",
        overview:
          "This elective project addresses strategies for managing public relations and communicating with the public.",
        objective:
          "Develop a public relations strategy for a specific event or situation. Deliver a 5- to 7-minute speech about your strategy.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Create a Podcast",
        overview:
          "This elective project focuses on creating a podcast to share information or tell a story.",
        objective:
          "Create and record a 60-minute podcast. Deliver a 5- to 7-minute speech about your podcast and its content.",
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
          "This project focuses on developing a vision and long-term goals.",
        objective:
          "Develop a vision for your personal or professional life. Deliver a 5- to 7-minute speech about your vision and the steps you will take to achieve it.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Reflect on Your Path",
        overview:
          "This project focuses on reflecting on your journey through the Pathways program and the impact it has had on your personal and professional life.",
        objective:
          "Deliver a 10- to 12-minute speech reflecting on your Pathways journey and how it has influenced your communication and leadership skills.",
        greenCard: "10:00",
        yellowCard: "11:00",
        redCard: "12:00",
      },
      {
        speechNumber: 3,
        title: "High Performance Leadership",
        overview:
          "This elective project focuses on developing leadership skills through a high-performance leadership project.",
        objective:
          "Plan, organize, and complete a high-performance leadership project. Deliver a 5- to 7-minute speech about your project and its impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Leading in Your Volunteer Organization",
        overview:
          "This elective project focuses on developing leadership skills through volunteer work.",
        objective:
          "Take on a leadership role in a volunteer organization. Deliver a 5- to 7-minute speech about your experience and the skills you developed.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Prepare to Speak Professionally",
        overview:
          "This elective project focuses on preparing to speak professionally and developing the skills necessary for professional speaking engagements.",
        objective:
          "Prepare and deliver a 20- to 40-minute keynote-style speech. This project includes developing professional speaking skills and techniques.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
    ],
  },
  {
    "title": "Leadership Development",
    "level1": [
      {
        "speechNumber": 1,
        "title": "Icebreaker",
        "overview": "This foundational project is designed to introduce you to your club and the skills you need to begin your Toastmasters journey.",
        "objective": "Write and deliver a speech about any topic to introduce yourself to the club. Your speech may be humorous, informational, or any other style that appeals to you.",
        "greenCard": "4:00",
        "yellowCard": "5:00",
        "redCard": "6:00"
      },
      {
        "speechNumber": 2,
        "title": "Evaluation and Feedback - First Speech",
        "overview": "This project addresses the skills needed to give and receive feedback effectively.",
        "objective": "Deliver a 5- to 7-minute speech on any topic. Incorporate feedback received during the first speech into a second 5- to 7-minute speech on any topic.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 3,
        "title": "Evaluation and Feedback - Second Speech",
        "overview": "This project addresses the skills needed to give and receive feedback effectively.",
        "objective": "Incorporate feedback received during the first speech into a second 5- to 7-minute speech on any topic.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 4,
        "title": "Evaluation and Feedback - Evaluator Role",
        "overview": "This project addresses the skills needed to give and receive feedback effectively.",
        "objective": "Serve as a speech evaluator for a fellow member at a club meeting.",
        "greenCard": "",
        "yellowCard": "",
        "redCard": ""
      }
    ],
    "level2": [
      {
        "speechNumber": 1,
        "title": "Understanding Your Leadership Style",
        "overview": "This project helps you identify your leadership style and understand how it impacts your interactions with others.",
        "objective": "Complete the leadership style quiz and review your results. Prepare a 5- to 7-minute speech to share your leadership style and its impact on your professional and personal relationships.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 2,
        "title": "Active Listening",
        "overview": "This project focuses on active listening skills, which are essential for effective communication.",
        "objective": "Prepare a 5- to 7-minute speech on the importance of active listening. Include personal examples to illustrate your points.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 3,
        "title": "Introduction to Toastmasters Mentoring",
        "overview": "This project introduces the value of mentorship and the roles and responsibilities of a mentor.",
        "objective": "Deliver a 5- to 7-minute speech about your experience as a protégé or mentor, or about the impact of mentorship on your life.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      }
    ],
    "level3": [
      {
        "speechNumber": 1,
        "title": "Planning and Implementing",
        "overview": "This project focuses on the skills needed to plan and implement a project effectively.",
        "objective": "Deliver a 5- to 7-minute speech about a project you planned and implemented. Share the steps you took and the results you achieved.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 2,
        "title": "Connect with Storytelling",
        "overview": "This elective project addresses storytelling techniques and how to use them to enhance your speeches.",
        "objective": "Deliver a 5- to 7-minute story that is either personal or fictional. Use the storytelling techniques discussed in the project to engage your audience.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 3,
        "title": "Using Presentation Software",
        "overview": "This elective project addresses the use of presentation software and how to effectively incorporate it into your speeches.",
        "objective": "Deliver a 5- to 7-minute speech using presentation software to enhance your message. Ensure your slides are clear and support your speech.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 4,
        "title": "Creating Effective Visual Aids",
        "overview": "This elective project focuses on creating effective visual aids and how to use them in your presentations.",
        "objective": "Deliver a 5- to 7-minute speech using visual aids to support your message. Ensure your visual aids are clear and enhance your speech.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 5,
        "title": "Using Descriptive Language",
        "overview": "This elective project focuses on using descriptive language to enhance your speeches.",
        "objective": "Deliver a 5- to 7-minute speech using vivid and descriptive language to paint a picture for your audience.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      }
    ],
    "level4": [
      {
        "speechNumber": 1,
        "title": "Leading Your Team",
        "overview": "This project focuses on the skills needed to lead a team effectively.",
        "objective": "Deliver a 5- to 7-minute speech about a time when you led a team. Share the challenges you faced and the strategies you used to overcome them.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 2,
        "title": "Building a Social Media Presence",
        "overview": "This elective project addresses strategies for building a social media presence to enhance your personal or professional brand.",
        "objective": "Develop a plan to build a social media presence. Deliver a 5- to 7-minute speech about your plan and its potential impact.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 3,
        "title": "Question-and-Answer Session",
        "overview": "This elective project focuses on preparing and conducting a question-and-answer session.",
        "objective": "Deliver a 5- to 7-minute speech followed by a 5-minute question-and-answer session.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 4,
        "title": "Public Relations Strategies",
        "overview": "This elective project addresses strategies for managing public relations and communicating with the public.",
        "objective": "Develop a public relations strategy for a specific event or situation. Deliver a 5- to 7-minute speech about your strategy.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 5,
        "title": "Create a Podcast",
        "overview": "This elective project focuses on creating a podcast to share information or tell a story.",
        "objective": "Create and record a 60-minute podcast. Deliver a 5- to 7-minute speech about your podcast and its content.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      }
    ],
    "level5": [
      {
        "speechNumber": 1,
        "title": "Leading in Your Volunteer Organization",
        "overview": "This project focuses on developing leadership skills through volunteer work.",
        "objective": "Take on a leadership role in a volunteer organization. Deliver a 5- to 7-minute speech about your experience and the skills you developed.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 2,
        "title": "Reflect on Your Path",
        "overview": "This project focuses on reflecting on your journey through the Pathways program and the impact it has had on your personal and professional life.",
        "objective": "Deliver a 10- to 12-minute speech reflecting on your Pathways journey and how it has influenced your communication and leadership skills.",
        "greenCard": "10:00",
        "yellowCard": "11:00",
        "redCard": "12:00"
      },
      {
        "speechNumber": 3,
        "title": "High Performance Leadership",
        "overview": "This elective project focuses on developing leadership skills through a high-performance leadership project.",
        "objective": "Plan, organize, and complete a high-performance leadership project. Deliver a 5- to 7-minute speech about your project and its impact.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      },
      {
        "speechNumber": 4,
        "title": "Prepare to Speak Professionally",
        "overview": "This elective project focuses on preparing to speak professionally and developing the skills necessary for professional speaking engagements.",
        "objective": "Prepare and deliver a 20- to 40-minute keynote-style speech. This project includes developing professional speaking skills and techniques.",
        "greenCard": "20:00",
        "yellowCard": "30:00",
        "redCard": "40:00"
      },
      {
        "speechNumber": 5,
        "title": "Ethical Leadership",
        "overview": "This elective project focuses on the importance of ethical leadership and the skills needed to lead with integrity.",
        "objective": "Deliver a 5- to 7-minute speech on the importance of ethical leadership and how you have applied these principles in your own leadership roles.",
        "greenCard": "5:00",
        "yellowCard": "6:00",
        "redCard": "7:00"
      }
    ]
  }
,  
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
  },
];

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
      {
        speechNumber: 4,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "This project addresses how to receive and apply feedback to improve your speaking skills.",
        objective:
          "Deliver a speech on any topic you choose. It can be humorous, informational, or any other style. After your speech, receive feedback from your evaluator. Incorporate the feedback into your next speech.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "This project requires you to apply the feedback received from your first speech to improve your speaking skills.",
        objective:
          "Using the feedback received from your first Evaluation and Feedback speech, revise your speech and deliver it again, or prepare a new speech. Incorporate the feedback into this speech.",
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
          "This project focuses on recognizing the impact of your communication style on your interactions with others and how to adjust it to different situations.",
        objective:
          "Identify your primary communication style and learn how to flex it for more effective interactions. Deliver a speech reflecting on your communication style and how it influences your relationships.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Effective Body Language",
        overview:
          "This project emphasizes understanding and using effective body language to enhance your speech delivery.",
        objective:
          "Deliver a speech with a strong focus on using effective body language. Your speech can be on any topic and should incorporate movements and gestures that complement your message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Mentoring",
        overview:
          "This project introduces the concept of mentoring and the benefits it can bring to both the mentor and mentee.",
        objective:
          "Deliver a speech about your experience with mentoring, either as a mentor or a mentee. Discuss what you have learned and how it has impacted you personally and professionally.",
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
          "This project focuses on understanding and utilizing persuasive techniques in your speeches.",
        objective:
          "Deliver a speech that uses persuasive techniques to present a viewpoint or motivate the audience to take action.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Using Presentation Software",
        overview:
          "This elective project addresses the effective use of presentation software to enhance your speech.",
        objective:
          "Create a speech that integrates presentation software to complement and enhance your message. Ensure that the software supports your points and does not distract from your speech.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Connect with Storytelling",
        overview:
          "This elective project focuses on using storytelling as a communication tool to convey your message effectively.",
        objective:
          "Craft and deliver a speech that incorporates storytelling techniques. Use a personal story or a fictional narrative to make your message more engaging and memorable.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Creating Effective Visual Aids",
        overview:
          "This elective project emphasizes creating and using visual aids effectively in your presentations.",
        objective:
          "Design visual aids that support and enhance your speech. Ensure that the aids are clear, professional, and relevant to your message. Deliver a speech using these visual aids.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Using Descriptive Language",
        overview:
          "This elective project focuses on using descriptive and vivid language to create a lasting impression on your audience.",
        objective:
          "Craft a speech that utilizes descriptive language to paint a vivid picture for your audience. Use sensory details to enhance your message and engage your listeners.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 6,
        title: "Making Connections Through Networking",
        overview:
          "This elective project addresses the skills needed to network effectively and build relationships.",
        objective:
          "Deliver a speech about your experience with networking. Share strategies that you have found effective and discuss how networking has benefited you personally or professionally.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 7,
        title: "Connect with Your Audience",
        overview:
          "This elective project emphasizes the importance of connecting with your audience during a presentation.",
        objective:
          "Deliver a speech that demonstrates techniques for engaging and connecting with your audience. Use eye contact, gestures, and other methods to create a strong rapport with your listeners.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Prepare for an Interview",
        overview:
          "This elective project prepares you to effectively participate in interviews.",
        objective:
          "Deliver a speech about your experience preparing for an interview. Share techniques you used and what you learned from the experience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 9,
        title: "Understanding Vocal Variety",
        overview:
          "This elective project focuses on using vocal variety to enhance your speech delivery.",
        objective:
          "Deliver a speech that demonstrates vocal variety techniques. Use changes in pitch, tone, volume, and pace to make your speech more dynamic and engaging.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 10,
        title: "Effective Body Language",
        overview:
          "This elective project emphasizes the use of body language to enhance your speech delivery.",
        objective:
          "Deliver a speech that demonstrates effective body language techniques. Use gestures, facial expressions, and movement to support your message and engage your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 11,
        title: "Focus on the Positive",
        overview:
          "This elective project addresses the importance of positive communication.",
        objective:
          "Deliver a speech that focuses on positive communication. Share strategies for maintaining a positive attitude and language in your interactions.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 12,
        title: "Inspire Your Audience",
        overview:
          "This elective project focuses on delivering an inspiring message to your audience.",
        objective:
          "Craft and deliver a speech that aims to inspire your audience. Use techniques such as storytelling, vivid imagery, and emotional appeal to leave a lasting impact on your listeners.",
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
          "This project addresses strategies for developing a social media presence and building a following.",
        objective:
          "Create a social media plan for yourself or a business. Deliver a speech about your strategy and how you plan to build your presence and engage with your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Managing a Difficult Audience",
        overview:
          "This project focuses on strategies for managing challenging audience situations.",
        objective:
          "Deliver a speech on any topic and use strategies to manage a difficult audience, such as one that is unresponsive or disruptive.",
        greenCard: "12:00",
        yellowCard: "14:00",
        redCard: "15:00",
      },
      {
        speechNumber: 3,
        title: "Create a Podcast",
        overview:
          "This elective project focuses on developing the skills needed to create a podcast.",
        objective:
          "Create a podcast episode and deliver a speech about your process and what you learned. Share your podcast with your club.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 4,
        title: "Building a Team",
        overview:
          "This elective project emphasizes the skills required to build and lead an effective team.",
        objective:
          "Build a team and lead them through a project. Deliver a speech about your experience, the challenges you faced, and the lessons you learned.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Managing Projects Successfully: First speech",
        overview:
          "This elective project focuses on developing the skills to manage projects effectively.",
        objective:
          "Plan and complete a project. Deliver a speech about your project management experience, including planning, execution, and lessons learned.",
        greenCard: "2:00",
        yellowCard: "3:00",
        redCard: "4:00",
      },
      {
        speechNumber: 6,
        title: "Managing Projects Successfully: Second speech",
        overview:
          "This project focuses on skills needed to effectively manage a project, develop rapport with stakeholders and cultivate strong relationships with a team. The purpose of this project is to practice developing a plan, building a team, and fulfilling the plan with the help of your team.",
        objective:
          "Overview: Form a team of three to four people and choose a project. Create a plan for your project and present the plan to your club in a 2- to 3-minute speech. Work with your team to complete your project. Present a 5- to 7-minute speech about your experience. This speech may be humorous, informational, or any type of speech that appeals to you. It should not be a report about the content of this project, but a reflection of your experience applying what you learned.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 7,
        title: "Creating a Blog",
        overview:
          "This elective project addresses developing a blog and writing blog posts that engage readers.",
        objective:
          "Create a blog and write at least eight posts over a period of time. Deliver a speech about your blog and what you have learned from the experience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Manage Online Meetings",
        overview:
          "This project focuses on the skills needed to effectively manage online meetings.",
        objective:
          "Organize and conduct an online meeting or webinar. Deliver a speech about your experience, including the challenges and solutions you implemented.",
        greenCard: "20:00",
        yellowCard: "24:00",
        redCard: "25:00",
      },
      {
        speechNumber: 9,
        title: "Public Relations Strategies",
        overview:
          "This elective project emphasizes the importance of public relations and strategies for effective public communication.",
        objective:
          "Develop a public relations strategy for an event or organization. Deliver a speech about your strategy and its anticipated impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 10,
        title: "Write a Compelling Blog",
        overview:
          "This elective project focuses on writing blog posts that are engaging and compelling for readers.",
        objective:
          "Write a blog post and deliver a speech about your writing process and the content of your blog. Share the post with your club.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "Prepare to Speak Professionally",
        overview:
          "This project focuses on understanding the skills required to be a professional speaker and applying them in your speech.",
        objective:
          "Deliver a keynote-style speech, using the techniques and strategies of professional speakers, to inspire and motivate your audience.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 2,
        title: "Reflect on Your Path",
        overview:
          "This project requires you to reflect on your growth during your Toastmasters journey and share your experiences with your club.",
        objective:
          "Deliver a speech reflecting on your experience in the Presentation Mastery pathway. Discuss the highlights of your journey, the lessons you learned, and how you have grown as a speaker.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 3,
        title: "Ethical Leadership",
        overview:
          "This elective project focuses on the importance of ethical leadership and how to apply it in various situations.",
        objective:
          "Deliver a speech about a time when you were faced with an ethical dilemma. Discuss how you handled the situation and the lessons you learned.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 4,
        title: "High Performance Leadership - first speech",
        overview:
          "This elective project emphasizes the skills needed to lead a high-performance team and achieve successful outcomes.",
        objective:
          "Plan, organize, and complete a leadership project. Deliver a speech about your experience, including the challenges you faced and the results you achieved.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },

      {
        speechNumber: 5,
        title: "High Performance Leadership - second speech",
        overview:
          "The focus of this project is to design and complete a project with well-defined goals, lead a team and be accountable to a guidance committee. The purpose of this project is to apply your leadership and planning knowledge to develop a project plan, organize a guidance committee, and implement your plan with the help of a team.",
        objective:
          "Overview: Select a project to complete with a team of at least three other members. Form a guidance committee and meet at least five times through the duration of the project. Deliver a 5-to 7-minute speech at a club meeting to introduce your plan and vision. After you implement the plan, deliver a second 5- to 7-minute speech at a club meeting to share your experience developing and completing your plan.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 6,
        title: "Leading in Your Volunteer Organization",
        overview:
          "This elective project focuses on the skills needed to effectively lead in a volunteer organization.",
        objective:
          "Deliver a speech about your leadership role in a volunteer organization. Discuss the challenges you faced and the impact you made.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 7,
        title: "Lessons Learned",
        overview:
          "This elective project emphasizes the importance of reflecting on and sharing the lessons you have learned from various experiences.",
        objective:
          "Deliver a speech about a lesson you learned from a personal or professional experience. Discuss how this lesson has impacted your life and how you apply it today.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Moderate a Panel Discussion",
        overview:
          "This elective project focuses on developing the skills needed to moderate a panel discussion effectively.",
        objective:
          "Organize and moderate a panel discussion. Deliver a speech about your experience, the challenges you faced, and what you learned.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 9,
        title: "Prepare to Speak Professionally",
        overview:
          "This elective project focuses on preparing for professional speaking engagements.",
        objective:
          "Deliver a speech as you would in a professional speaking engagement, such as a seminar or conference. Use the techniques and strategies of professional speakers to engage your audience.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      }
]

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
      {
        speechNumber: 4,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "This project addresses how to receive and apply feedback to improve your speaking skills.",
        objective:
          "Deliver a speech on any topic you choose. It can be humorous, informational, or any other style. After your speech, receive feedback from your evaluator. Incorporate the feedback into your next speech.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "This project requires you to apply the feedback received from your first speech to improve your speaking skills.",
        objective:
          "Using the feedback received from your first Evaluation and Feedback speech, revise your speech and deliver it again, or prepare a new speech. Incorporate the feedback into this speech.",
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
          "This project helps you identify your leadership style and understand how it impacts your interactions with others.",
        objective:
          "Complete the leadership style quiz and review your results. Prepare a 5- to 7-minute speech to share your leadership style and its impact on your professional and personal relationships.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Active Listening",
        overview:
          "This project focuses on active listening skills, which are essential for effective communication.",
        objective:
          "Prepare a 5- to 7-minute speech on the importance of active listening. Include personal examples to illustrate your points.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
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
        title: "Planning and Implementing",
        overview:
          "This project focuses on the skills needed to plan and implement a project effectively.",
        objective:
          "Deliver a 5- to 7-minute speech about a project you planned and implemented. Share the steps you took and the results you achieved.",
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
        title: "Leading Your Team",
        overview:
          "This project focuses on the skills needed to lead a team effectively.",
        objective:
          "Deliver a 5- to 7-minute speech about a time when you led a team. Share the challenges you faced and the strategies you used to overcome them.",
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
        title: "Leading in Your Volunteer Organization",
        overview:
          "This project focuses on developing leadership skills through volunteer work.",
        objective:
          "Take on a leadership role in a volunteer organization. Deliver a 5- to 7-minute speech about your experience and the skills you developed.",
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
        title: "Prepare to Speak Professionally",
        overview:
          "This elective project focuses on preparing to speak professionally and developing the skills necessary for professional speaking engagements.",
        objective:
          "Prepare and deliver a 20- to 40-minute keynote-style speech. This project includes developing professional speaking skills and techniques.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 5,
        title: "Ethical Leadership",
        overview:
          "This elective project focuses on the importance of ethical leadership and the skills needed to lead with integrity.",
        objective:
          "Deliver a 5- to 7-minute speech on the importance of ethical leadership and how you have applied these principles in your own leadership roles.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
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
      {
        speechNumber: 4,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "This project addresses how to receive and apply feedback to improve your speaking skills.",
        objective:
          "Deliver a speech on any topic you choose. It can be humorous, informational, or any other style. After your speech, receive feedback from your evaluator. Incorporate the feedback into your next speech.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "This project requires you to apply the feedback received from your first speech to improve your speaking skills.",
        objective:
          "Using the feedback received from your first Evaluation and Feedback speech, revise your speech and deliver it again, or prepare a new speech. Incorporate the feedback into this speech.",
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
      {
        speechNumber: 4,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "This project addresses how to receive and apply feedback to improve your speaking skills.",
        objective:
          "Deliver a speech on any topic you choose. It can be humorous, informational, or any other style. After your speech, receive feedback from your evaluator. Incorporate the feedback into your next speech.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "This project requires you to apply the feedback received from your first speech to improve your speaking skills.",
        objective:
          "Using the feedback received from your first Evaluation and Feedback speech, revise your speech and deliver it again, or prepare a new speech. Incorporate the feedback into this speech.",
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
      {
        speechNumber: 4,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "This project addresses how to receive and apply feedback to improve your speaking skills.",
        objective:
          "Deliver a speech on any topic you choose. It can be humorous, informational, or any other style. After your speech, receive feedback from your evaluator. Incorporate the feedback into your next speech.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "This project requires you to apply the feedback received from your first speech to improve your speaking skills.",
        objective:
          "Using the feedback received from your first Evaluation and Feedback speech, revise your speech and deliver it again, or prepare a new speech. Incorporate the feedback into this speech.",
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
      {
        speechNumber: 4,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "This project addresses how to receive and apply feedback to improve your speaking skills.",
        objective:
          "Deliver a speech on any topic you choose. It can be humorous, informational, or any other style. After your speech, receive feedback from your evaluator. Incorporate the feedback into your next speech.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "This project requires you to apply the feedback received from your first speech to improve your speaking skills.",
        objective:
          "Using the feedback received from your first Evaluation and Feedback speech, revise your speech and deliver it again, or prepare a new speech. Incorporate the feedback into this speech.",
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
      {
        speechNumber: 4,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "This project addresses how to receive and apply feedback to improve your speaking skills.",
        objective:
          "Deliver a speech on any topic you choose. It can be humorous, informational, or any other style. After your speech, receive feedback from your evaluator. Incorporate the feedback into your next speech.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "This project requires you to apply the feedback received from your first speech to improve your speaking skills.",
        objective:
          "Using the feedback received from your first Evaluation and Feedback speech, revise your speech and deliver it again, or prepare a new speech. Incorporate the feedback into this speech.",
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
      {
        speechNumber: 4,
        title: "Evaluation and Feedback - First Speech",
        overview:
          "This project addresses how to receive and apply feedback to improve your speaking skills.",
        objective:
          "Deliver a speech on any topic you choose. It can be humorous, informational, or any other style. After your speech, receive feedback from your evaluator. Incorporate the feedback into your next speech.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Evaluation and Feedback - Second Speech",
        overview:
          "This project requires you to apply the feedback received from your first speech to improve your speaking skills.",
        objective:
          "Using the feedback received from your first Evaluation and Feedback speech, revise your speech and deliver it again, or prepare a new speech. Incorporate the feedback into this speech.",
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

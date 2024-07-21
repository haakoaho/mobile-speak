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
        title: "Managing Time",
        overview:
          "This project addresses the importance of time management and strategies for effectively managing your time.",
        objective:
          "Deliver a speech about a time management technique you have applied or plan to apply in your daily life. Share the impact it has had or you anticipate it will have.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Understanding Your Leadership Style",
        overview:
          "This project focuses on identifying your leadership style and understanding how it influences your actions and interactions with others.",
        objective:
          "Deliver a speech about your leadership style, how you identified it, and how it impacts your leadership approach. Share examples of how you have applied this understanding.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "This project introduces the basics of Toastmasters mentoring and the benefits of being a mentor and a mentee.",
        objective:
          "Deliver a speech about your experience with mentoring, either as a mentor or a mentee. Discuss the benefits and challenges you have encountered and what you have learned from the experience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Planning and Implementing - 1",
        overview:
          "This project focuses on the skills needed to plan and implement a project successfully.",
        objective:
          "Deliver a brief speech about your project plan and objectives. Share your goals and how you plan to achieve them.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 2,
        title: "Planning and Implementing - 2",
        overview:
          "This project focuses on the skills needed to plan and implement a project successfully.",
        objective:
          "Deliver a speech about the implementation of your project, the challenges you faced, and the outcomes. Reflect on what you learned from the experience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Deliver Social Speeches - 1",
        overview:
          "This elective project focuses on developing skills for delivering social speeches.",
        objective:
          "Deliver a social speech, such as a toast, eulogy, or congratulatory speech, at a club meeting.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 4,
        title: "Deliver Social Speeches - 2",
        overview:
          "This elective project focuses on developing skills for delivering social speeches.",
        objective:
          "Deliver a second social speech, different from the first, at a club meeting.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 5,
        title: "Using Presentation Software",
        overview:
          "This elective project focuses on developing skills for using presentation software effectively.",
        objective:
          "Deliver a speech using presentation software to support or enhance your message. Share your experience and what you learned about using the software.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 6,
        title: "Connect with Storytelling",
        overview:
          "This elective project emphasizes the importance of storytelling as a communication tool.",
        objective:
          "Deliver a speech that incorporates storytelling techniques to engage and connect with your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 7,
        title: "Creating Effective Visual Aids",
        overview:
          "This elective project focuses on developing skills for creating effective visual aids to enhance your speech.",
        objective:
          "Deliver a speech using visual aids to support your message. Discuss the impact of the visual aids and what you learned from the experience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Using Descriptive Language",
        overview:
          "This elective project focuses on developing skills for using descriptive language to enhance your speech.",
        objective:
          "Deliver a speech that uses descriptive language to paint vivid pictures for your audience. Reflect on the impact of your language choices.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 9,
        title: "Connect with Your Audience",
        overview:
          "This elective project focuses on techniques for connecting with your audience.",
        objective:
          "Deliver a speech using techniques to connect with your audience and engage them in your message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 10,
        title: "Make Connections Through Networking",
        overview:
          "This elective project emphasizes the importance of networking for personal and professional development.",
        objective:
          "Deliver a speech about your experience with networking, including strategies you use and the benefits you have gained.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 11,
        title: "Focus on the Positive - 1",
        overview:
          "This elective project focuses on developing a positive outlook and sharing it with others.",
        objective:
          "Deliver a brief speech about a positive experience or a positive aspect of your life.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 12,
        title: "Focus on the Positive - 2",
        overview:
          "This elective project focuses on developing a positive outlook and sharing it with others.",
        objective:
          "Deliver a speech that continues to explore positive experiences or aspects of your life. Reflect on the impact of focusing on the positive.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 13,
        title: "Inspire Your Audience",
        overview:
          "This elective project focuses on developing skills to inspire and motivate your audience.",
        objective:
          "Deliver a speech designed to inspire and motivate your audience. Reflect on the impact of your message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 14,
        title: "Prepare for an Interview",
        overview:
          "This elective project focuses on preparing for and succeeding in interviews.",
        objective:
          "Deliver a speech about your preparation for an interview and the techniques you used to succeed. Share your insights and lessons learned.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 15,
        title: "Understanding Vocal Variety",
        overview:
          "This elective project focuses on using vocal variety to enhance your speech.",
        objective:
          "Deliver a speech that demonstrates effective use of vocal variety to engage and impact your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 16,
        title: "Effective Body Language",
        overview:
          "This elective project focuses on using body language to enhance your speech.",
        objective:
          "Deliver a speech that demonstrates effective use of body language to engage and impact your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 17,
        title: "Active Listening",
        overview:
          "This elective project focuses on developing active listening skills.",
        objective:
          "Deliver a speech about the importance of active listening and share techniques for improving this skill.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 18,
        title: "Know Your Sense of Humor",
        overview:
          "This elective project focuses on understanding and using your sense of humor in speeches.",
        objective:
          "Deliver a speech that incorporates humor to engage and entertain your audience. Reflect on the impact of your humor.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 19,
        title: "Researching and Presenting",
        overview:
          "This elective project focuses on developing skills for researching and presenting information effectively.",
        objective:
          "Deliver a speech that presents well-researched information on a topic of your choice. Share your research process and what you learned.",
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
          "This project focuses on developing skills for leading and managing a team effectively.",
        objective:
          "Deliver a speech about your experience leading a team. Discuss the challenges you faced, the strategies you used, and the outcomes you achieved.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
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
        speechNumber: 3,
        title: "Building a Social Media Presence",
        overview:
          "This elective project addresses strategies for developing a social media presence and building a following.",
        objective:
          "Create a social media plan for yourself or a business. Deliver a speech about your strategy and how you plan to build your presence and engage with your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Managing a Difficult Audience",
        overview:
          "This elective project focuses on strategies for managing challenging audience situations.",
        objective:
          "Deliver a speech on any topic and use strategies to manage a difficult audience, such as one that is unresponsive or disruptive.",
        greenCard: "10:00",
        yellowCard: "12:00",
        redCard: "15:00",
      },
      {
        speechNumber: 5,
        title: "Write a Compelling Blog",
        overview:
          "This elective project focuses on developing the skills needed to write a compelling blog.",
        objective:
          "Write a blog post and deliver a speech about your writing process and the content of your blog. Share the post with your club.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 6,
        title: "Manage Online Meetings",
        overview:
          "This elective project focuses on the skills needed to effectively manage online meetings.",
        objective:
          "Organize and conduct an online meeting or webinar. Deliver a speech about your experience, including the challenges and solutions you implemented.",
        greenCard: "20:00",
        yellowCard: "23:00",
        redCard: "25:00",
      },
      {
        speechNumber: 7,
        title: "Question-and-Answer Session",
        overview:
          "This elective project focuses on developing skills to conduct a question-and-answer session effectively.",
        objective:
          "Deliver a speech on a topic of your choice and then conduct a question-and-answer session. Reflect on the questions asked and how you addressed them.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
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
        speechNumber: 9,
        title: "Manage Projects Successfully - 1",
        overview:
          "This elective project focuses on developing the skills to manage projects effectively.",
        objective:
          "Plan and complete a project. Deliver a brief speech about your project management plan and objectives.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 10,
        title: "Manage Projects Successfully - 2",
        overview:
          "This elective project focuses on developing the skills to manage projects effectively.",
        objective:
          "Deliver a speech about the implementation of your project, the challenges you faced, and the outcomes. Reflect on what you learned from the experience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "Manage Successful Events",
        overview:
          "This project focuses on developing skills to manage and conduct successful events.",
        objective:
          "Deliver a speech about an event you managed or plan to manage. Discuss the planning, execution, and outcomes of the event.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Lessons Learned",
        overview:
          "This project emphasizes the importance of reflecting on and sharing the lessons you have learned from various experiences.",
        objective:
          "Deliver a speech about a lesson you learned from a personal or professional experience. Discuss how this lesson has impacted your life and how you apply it today.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Moderate a Panel Discussion",
        overview:
          "This project focuses on developing the skills needed to moderate a panel discussion effectively.",
        objective:
          "Organize and moderate a panel discussion. Deliver a speech about your experience, the challenges you faced, and what you learned.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 4,
        title: "Ethical Leadership",
        overview:
          "This project focuses on the importance of ethical leadership and how to apply it in various situations.",
        objective:
          "Deliver a speech about a time when you were faced with an ethical dilemma. Discuss how you handled the situation and the lessons you learned.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 5,
        title: "Leading in Your Volunteer Organization",
        overview:
          "This project focuses on the skills needed to effectively lead in a volunteer organization.",
        objective:
          "Deliver a speech about your leadership role in a volunteer organization. Discuss the challenges you faced and the impact you made.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 6,
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
        speechNumber: 7,
        title: "High Performance Leadership - 1",
        overview:
          "This elective project emphasizes the skills needed to lead a high-performance team and achieve successful outcomes.",
        objective:
          "Plan, organize, and complete a leadership project. Deliver a brief speech about your project plan and objectives.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "High Performance Leadership - 2",
        overview:
          "This elective project emphasizes the skills needed to lead a high-performance team and achieve successful outcomes.",
        objective:
          "Deliver a speech about the implementation of your leadership project, the challenges you faced, and the outcomes. Reflect on what you learned from the experience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 9,
        title: "Reflect on Your Path",
        overview:
          "This project requires you to reflect on your growth during your Toastmasters journey and share your experiences with your club.",
        objective:
          "Deliver a speech reflecting on your experience in the Leadership Development pathway. Discuss the highlights of your journey, the lessons you learned, and how you have grown as a leader.",
        greenCard: "10:00",
        yellowCard: "12:00",
        redCard: "15:00",
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
          "This project focuses on identifying and understanding your personal leadership style.",
        objective:
          "Deliver a speech about your leadership style, including your strengths and areas for improvement. Share examples of how you apply your leadership style in different situations.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Understanding Your Communication Style",
        overview:
          "This project emphasizes the importance of understanding your communication style and how it affects your interactions with others.",
        objective:
          "Deliver a speech about your communication style, including its strengths and weaknesses. Discuss how your communication style impacts your relationships and how you can improve it.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "This project introduces the concept of mentoring and the benefits of having a mentor and being a mentor.",
        objective:
          "Deliver a speech about your experience with mentoring, either as a mentor or a mentee. Discuss the impact of mentoring on your personal and professional growth.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Reaching Consensus - 1",
        overview:
          "This project focuses on developing the skills needed to reach consensus in group settings.",
        objective:
          "Lead a group discussion to reach a consensus on a topic. Deliver a speech about the process and the outcomes of the discussion.",
        greenCard: "18:00",
        yellowCard: "19:00",
        redCard: "20:00",
      },
      {
        speechNumber: 2,
        title: "Reaching Consensus - 2",
        overview:
          "This project continues to focus on developing the skills needed to reach consensus in group settings.",
        objective:
          "Deliver a speech about the experience of leading a group to reach consensus. Discuss the challenges faced and the strategies used to facilitate the discussion.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Deliver Social Speeches - 1",
        overview:
          "This elective project focuses on delivering effective social speeches.",
        objective:
          "Deliver a brief speech for a social occasion, such as a toast or an introduction.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 4,
        title: "Deliver Social Speeches - 2",
        overview:
          "This elective project continues to focus on delivering effective social speeches.",
        objective:
          "Deliver a second brief speech for a social occasion, such as a toast or an introduction.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 5,
        title: "Using Presentation Software",
        overview:
          "This elective project focuses on developing the skills to use presentation software effectively.",
        objective:
          "Deliver a speech using presentation software to support your message. Discuss how the software enhanced your presentation.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 6,
        title: "Connect with Storytelling",
        overview:
          "This elective project emphasizes the use of storytelling to connect with an audience.",
        objective:
          "Deliver a speech using a story to convey your message. Discuss how storytelling enhanced your connection with the audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 7,
        title: "Creating Effective Visual Aids",
        overview:
          "This elective project focuses on creating and using visual aids to enhance your speech.",
        objective:
          "Deliver a speech using visual aids to support your message. Discuss how the visual aids improved your presentation.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Using Descriptive Language",
        overview:
          "This elective project emphasizes the use of descriptive language to enhance your speech.",
        objective:
          "Deliver a speech using descriptive language to paint a vivid picture for your audience. Discuss how this technique improved your delivery.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 9,
        title: "Connect with Your Audience",
        overview:
          "This elective project focuses on techniques to connect with your audience during your speech.",
        objective:
          "Deliver a speech using techniques to engage and connect with your audience. Discuss how these techniques impacted your delivery.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 10,
        title: "Make Connections Through Networking",
        overview:
          "This elective project focuses on developing networking skills to build connections.",
        objective:
          "Deliver a speech about your networking experiences and the connections you made. Discuss how networking has impacted your personal or professional life.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 11,
        title: "Focus on the Positive - 1",
        overview:
          "This elective project emphasizes the importance of focusing on the positive aspects of your experiences.",
        objective:
          "Deliver a brief speech about a positive experience or achievement.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 12,
        title: "Focus on the Positive - 2",
        overview:
          "This elective project continues to emphasize the importance of focusing on the positive aspects of your experiences.",
        objective:
          "Deliver a speech about a positive experience or achievement. Discuss how focusing on the positive has impacted your outlook.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 13,
        title: "Inspire Your Audience",
        overview:
          "This elective project focuses on techniques to inspire and motivate your audience.",
        objective:
          "Deliver a speech designed to inspire and motivate your audience. Discuss the techniques you used and their impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 14,
        title: "Prepare for an Interview",
        overview:
          "This elective project emphasizes the skills needed to prepare for and succeed in an interview.",
        objective:
          "Deliver a speech about your experience preparing for an interview. Discuss the techniques you used and their effectiveness.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 15,
        title: "Understanding Vocal Variety",
        overview:
          "This elective project focuses on the use of vocal variety to enhance your speech delivery.",
        objective:
          "Deliver a speech using vocal variety to enhance your message. Discuss how this technique improved your delivery.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 16,
        title: "Effective Body Language",
        overview:
          "This elective project emphasizes the use of body language to enhance your speech delivery.",
        objective:
          "Deliver a speech using effective body language to enhance your message. Discuss how this technique improved your delivery.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 17,
        title: "Active Listening",
        overview:
          "This elective project focuses on developing active listening skills.",
        objective:
          "Deliver a speech about the importance of active listening and how it has impacted your interactions. Discuss techniques for improving active listening skills.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 18,
        title: "Know Your Sense of Humor",
        overview:
          "This elective project focuses on understanding and using your sense of humor to enhance your speeches.",
        objective:
          "Deliver a speech that incorporates your sense of humor. Discuss how humor can be used effectively in public speaking.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 19,
        title: "Researching and Presenting",
        overview:
          "This elective project focuses on developing the skills needed to research and present information effectively.",
        objective:
          "Deliver a speech based on research you have conducted. Discuss your research process and how you ensured the accuracy and relevance of your information.",
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
          "This project focuses on developing the skills necessary to provide effective and positive coaching.",
        objective:
          "Deliver a speech about a time when you provided coaching to someone. Discuss the strategies you used and the outcomes of the coaching.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Create a Podcast",
        overview:
          "This elective project focuses on creating a podcast to share information and engage with an audience.",
        objective:
          "Record a podcast episode and deliver a speech about the experience, including the planning, recording, and editing processes.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 3,
        title: "Building a Social Media Presence",
        overview:
          "This elective project emphasizes the importance of building a social media presence to connect with an audience.",
        objective:
          "Deliver a speech about your experience building a social media presence. Discuss the strategies you used and the impact of your efforts.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Managing a Difficult Audience",
        overview:
          "This elective project focuses on developing strategies to manage a difficult audience during a presentation.",
        objective:
          "Deliver a speech in front of an audience that is instructed to be difficult or disruptive. Demonstrate techniques to handle the situation effectively.",
        greenCard: "12:00",
        yellowCard: "13:30",
        redCard: "15:00",
      },
      {
        speechNumber: 5,
        title: "Write a Compelling Blog",
        overview:
          "This elective project focuses on developing the skills to write engaging and compelling blog posts.",
        objective:
          "Write a blog post and deliver a speech about your experience, including the planning, writing, and editing processes.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 6,
        title: "Manage Online Meetings",
        overview:
          "This elective project emphasizes the skills needed to manage and lead effective online meetings.",
        objective:
          "Deliver a speech about your experience managing an online meeting. Discuss the challenges you faced and the strategies you used to overcome them.",
        greenCard: "20:00",
        yellowCard: "22:00",
        redCard: "25:00",
      },
      {
        speechNumber: 7,
        title: "Question-and-Answer Session",
        overview:
          "This elective project focuses on developing the skills to manage a question-and-answer session effectively.",
        objective:
          "Deliver a speech followed by a question-and-answer session. Demonstrate techniques to handle questions and manage the session effectively.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Public Relations Strategies",
        overview:
          "This elective project focuses on developing effective public relations strategies to promote an event or organization.",
        objective:
          "Deliver a speech about a public relations strategy you developed and implemented. Discuss the planning process and the outcomes of your efforts.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 9,
        title: "Manage Projects Successfully - 1",
        overview:
          "This elective project focuses on developing the skills needed to manage projects successfully.",
        objective:
          "Deliver a brief speech about a project you managed. Discuss the planning, execution, and outcomes of the project.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 10,
        title: "Manage Projects Successfully - 2",
        overview:
          "This elective project continues to focus on developing the skills needed to manage projects successfully.",
        objective:
          "Deliver a speech about a project you managed, focusing on the challenges you faced and the strategies you used to overcome them.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "High Performance Leadership - 1",
        overview:
          "This project focuses on developing leadership skills through the completion of a project of your choice. You will lead a team and complete a project that benefits an organization or the community.",
        objective:
          "Deliver a speech about the planning and implementation of your High Performance Leadership project. Discuss the project goals, your leadership style, and the results.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "High Performance Leadership - 2",
        overview:
          "This project continues the development of leadership skills through the completion of a High Performance Leadership project.",
        objective:
          "Deliver a speech about the outcomes of your High Performance Leadership project. Discuss the challenges you faced and the lessons you learned.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Lessons Learned",
        overview:
          "This project focuses on sharing the lessons you have learned throughout your Toastmasters journey and how they can be applied to your personal and professional life.",
        objective:
          "Deliver a speech about the lessons you have learned during your time in Toastmasters. Discuss how these lessons have impacted your personal or professional life.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Moderate a Panel Discussion",
        overview:
          "This elective project focuses on developing the skills to moderate a panel discussion effectively.",
        objective:
          "Moderate a panel discussion on a topic of your choice. Ensure the discussion is engaging and that all panelists have the opportunity to speak.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 5,
        title: "Ethical Leadership",
        overview:
          "This elective project focuses on understanding and practicing ethical leadership.",
        objective:
          "Deliver a speech about the importance of ethical leadership and how you apply ethical principles in your leadership role.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 6,
        title: "Leading in Your Volunteer Organization",
        overview:
          "This elective project emphasizes the skills needed to lead effectively in a volunteer organization.",
        objective:
          "Deliver a speech about your experience leading in a volunteer organization. Discuss the challenges you faced and the strategies you used to overcome them.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 7,
        title: "Prepare to Speak Professionally",
        overview:
          "This elective project focuses on developing the skills needed to speak professionally, including planning and delivering a professional-level speech.",
        objective:
          "Deliver a professional-level speech. The speech can be one you have given before or a new one, but it should be well-rehearsed and polished.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 8,
        title: "Reflect on Your Path",
        overview:
          "This project focuses on reflecting on your experience in the Pathways learning experience and sharing your reflections with others.",
        objective:
          "Deliver a speech reflecting on your experience in the Effective Coaching pathway. Discuss the highlights, challenges, and lessons learned.",
        greenCard: "10:00",
        yellowCard: "11:00",
        redCard: "12:00",
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
          "This project focuses on identifying your leadership style and understanding how it impacts your interactions with others.",
        objective:
          "Deliver a speech about your leadership style, its strengths, and how it impacts your interactions with others.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Active Listening",
        overview:
          "This project focuses on developing and practicing active listening skills, which are crucial for effective communication.",
        objective:
          "Deliver a speech on the importance of active listening in effective communication and share your experience of practicing active listening.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "This project introduces the concept of mentoring in Toastmasters and the benefits it offers to both mentors and mentees.",
        objective:
          "Deliver a speech about your experience as a mentor or mentee and the benefits of Toastmasters mentoring.",
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
          "This project focuses on developing skills to effectively manage and resolve conflicts in various situations.",
        objective:
          "Deliver a speech about a conflict you faced, how you resolved it, and the outcome. Share the strategies you used for conflict resolution.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Deliver Social Speeches - 1",
        overview:
          "This elective project focuses on delivering social speeches, such as toasts or tributes.",
        objective:
          "Deliver a social speech, such as a toast or tribute, at a club meeting.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 3,
        title: "Deliver Social Speeches - 2",
        overview:
          "This elective project continues to focus on delivering social speeches.",
        objective:
          "Deliver another social speech, such as a toast or tribute, at a club meeting.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 4,
        title: "Using Presentation Software",
        overview:
          "This elective project focuses on using presentation software to enhance your speeches.",
        objective:
          "Create a speech that uses presentation software to enhance your message. Deliver your speech at a club meeting.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Connect with Storytelling",
        overview:
          "This elective project emphasizes the power of storytelling to connect with an audience.",
        objective:
          "Deliver a speech that uses a story to make a connection with the audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 6,
        title: "Creating Effective Visual Aids",
        overview:
          "This elective project focuses on creating and using effective visual aids in your speeches.",
        objective:
          "Create visual aids that support your message and deliver a speech that uses them effectively.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 7,
        title: "Using Descriptive Language",
        overview:
          "This elective project focuses on using descriptive language to enhance your speeches.",
        objective:
          "Deliver a speech that uses descriptive language to create vivid imagery and engage the audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Connect with Your Audience",
        overview:
          "This elective project emphasizes the importance of connecting with your audience during a speech.",
        objective:
          "Deliver a speech that focuses on building a connection with your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 9,
        title: "Make Connections Through Networking",
        overview:
          "This elective project focuses on developing networking skills to make meaningful connections.",
        objective:
          "Deliver a speech about the importance of networking and share your experiences with making connections through networking.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 10,
        title: "Focus on the Positive - 1",
        overview:
          "This elective project emphasizes the importance of focusing on positive aspects in various situations.",
        objective:
          "Deliver a brief speech about a positive experience or aspect of your life.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 11,
        title: "Focus on the Positive - 2",
        overview:
          "This elective project continues to emphasize the importance of focusing on positive aspects.",
        objective:
          "Deliver a speech about a positive experience or aspect of your life in more detail.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 12,
        title: "Inspire Your Audience",
        overview:
          "This elective project focuses on developing the skills to inspire an audience through your speech.",
        objective:
          "Deliver a speech that inspires your audience and leaves a lasting impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 13,
        title: "Prepare for an Interview",
        overview:
          "This elective project focuses on developing skills to prepare for and succeed in an interview.",
        objective:
          "Deliver a speech about the preparation and strategies you used for a successful interview.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 14,
        title: "Understanding Vocal Variety",
        overview:
          "This elective project emphasizes the importance of vocal variety in speech delivery.",
        objective:
          "Deliver a speech that demonstrates effective use of vocal variety to engage your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 15,
        title: "Effective Body Language",
        overview:
          "This elective project focuses on developing effective body language to enhance your speeches.",
        objective:
          "Deliver a speech that demonstrates effective use of body language to engage your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 16,
        title: "Know Your Sense of Humor",
        overview:
          "This elective project emphasizes the importance of understanding and using your sense of humor in speeches.",
        objective:
          "Deliver a speech that incorporates your sense of humor to engage the audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 17,
        title: "Researching and Presenting",
        overview:
          "This elective project focuses on developing research skills and presenting the findings effectively.",
        objective:
          "Conduct research on a topic of interest and deliver a speech presenting your findings.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "Leading in Difficult Situations",
        overview:
          "This project focuses on the skills needed to lead effectively in challenging situations.",
        objective:
          "Deliver a speech about a difficult leadership situation you encountered, the steps you took to address it, and the outcome.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Create a Podcast",
        overview:
          "This elective project focuses on creating and sharing a podcast.",
        objective:
          "Create a podcast and present a segment of it at a club meeting.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 3,
        title: "Building a Social Media Presence",
        overview:
          "This elective project emphasizes the importance of building and maintaining a social media presence.",
        objective:
          "Deliver a speech about your strategies and experiences in building a social media presence.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Managing a Difficult Audience",
        overview:
          "This elective project focuses on strategies to manage a difficult audience during a speech.",
        objective:
          "Deliver a speech to a difficult audience and implement strategies to manage their behavior.",
        greenCard: "12:00",
        yellowCard: "13:30",
        redCard: "15:00",
      },
      {
        speechNumber: 5,
        title: "Write a Compelling Blog",
        overview:
          "This elective project focuses on writing and sharing a compelling blog.",
        objective:
          "Write a blog post and present it as a speech at a club meeting.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 6,
        title: "Manage Online Meetings",
        overview:
          "This elective project focuses on developing the skills needed to manage online meetings effectively.",
        objective:
          "Deliver a speech about your experience and strategies for managing online meetings.",
        greenCard: "20:00",
        yellowCard: "22:30",
        redCard: "25:00",
      },
      {
        speechNumber: 7,
        title: "Question-and-Answer Session",
        overview:
          "This elective project emphasizes the importance of preparing for and conducting a Q&A session.",
        objective:
          "Deliver a speech that includes a Q&A session with the audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Public Relations Strategies",
        overview:
          "This elective project focuses on developing and implementing effective public relations strategies.",
        objective:
          "Deliver a speech about your strategies and experiences in public relations.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 9,
        title: "Manage Projects Successfully - 1",
        overview:
          "This elective project focuses on the skills needed to manage projects successfully.",
        objective:
          "Deliver a short speech about a project you managed and the steps you took to ensure its success.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 10,
        title: "Manage Projects Successfully - 2",
        overview:
          "This elective project continues to focus on project management skills.",
        objective:
          "Deliver a speech about the outcome of a project you managed, highlighting the challenges and successes.",
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

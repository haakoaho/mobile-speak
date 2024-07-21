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
        title: "High Performance Leadership - 1",
        overview:
          "This project focuses on leading a project of significant importance to your organization or community.",
        objective:
          "Deliver a speech about the planning and preparation phase of your High Performance Leadership project.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "High Performance Leadership - 2",
        overview:
          "This project continues from the first part of the High Performance Leadership project.",
        objective:
          "Deliver a speech about the execution and outcomes of your High Performance Leadership project.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Lessons Learned",
        overview:
          "This project focuses on sharing lessons learned from your experiences.",
        objective:
          "Deliver a speech about the lessons you've learned from your experiences in Toastmasters or your professional or personal life.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Moderate a Panel Discussion",
        overview:
          "This elective project focuses on developing skills to moderate a panel discussion effectively.",
        objective:
          "Moderate a panel discussion on a topic of your choice, ensuring active participation from all panel members.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 5,
        title: "Ethical Leadership",
        overview:
          "This elective project emphasizes the importance of ethical leadership and decision-making.",
        objective:
          "Deliver a speech about an ethical dilemma you faced, the decision you made, and the outcome.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 6,
        title: "Leading in Your Volunteer Organization",
        overview:
          "This elective project focuses on leadership skills in a volunteer organization.",
        objective:
          "Deliver a speech about your experiences and challenges leading in a volunteer organization.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 7,
        title: "Prepare to Speak Professionally",
        overview:
          "This elective project emphasizes preparing and delivering a professional-level speech.",
        objective:
          "Deliver a professional-level speech on a topic of your choice.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 8,
        title: "Reflect on Your Path",
        overview:
          "This project is a comprehensive reflection on your journey through the Persuasive Influence pathway.",
        objective:
          "Deliver a speech reflecting on your growth, experiences, and accomplishments in the Persuasive Influence pathway.",
        greenCard: "10:00",
        yellowCard: "11:00",
        redCard: "12:00",
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
          "This project focuses on understanding the different types of humor and identifying your own sense of humor.",
        objective:
          "Deliver a speech about your sense of humor and share examples that illustrate it.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Connect With Your Audience",
        overview:
          "This project emphasizes the importance of connecting with your audience through humor.",
        objective:
          "Deliver a speech that incorporates humor and observe the audience's reaction.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "This project focuses on the benefits of having a mentor and being a mentor within Toastmasters.",
        objective:
          "Deliver a speech about your experience with mentoring, either as a mentor or mentee.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Engage Your Audience with Humor",
        overview:
          "This project focuses on developing and delivering a speech that uses humor to engage your audience.",
        objective:
          "Deliver a speech that incorporates humor to enhance your message and engage your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Active Listening",
        overview:
          "This elective project emphasizes the importance of active listening in communication.",
        objective:
          "Demonstrate your active listening skills in a meeting or conversation.",
        greenCard: "?",
        yellowCard: "?",
        redCard: "?",
      },
      {
        speechNumber: 3,
        title: "Connect with Storytelling",
        overview:
          "This elective project focuses on using storytelling techniques to connect with your audience.",
        objective:
          "Deliver a speech that uses storytelling to make a strong connection with your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Creating Effective Visual Aids",
        overview:
          "This elective project focuses on creating and using visual aids to enhance your speech.",
        objective:
          "Deliver a speech that uses effective visual aids to enhance your message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Deliver Social Speeches - 1",
        overview:
          "This elective project focuses on delivering a social speech in a short timeframe.",
        objective: "Deliver a brief speech for a social occasion.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 6,
        title: "Deliver Social Speeches - 2",
        overview:
          "This elective project continues from the first part and focuses on delivering another social speech.",
        objective: "Deliver another brief speech for a social occasion.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 7,
        title: "Effective Body Language",
        overview:
          "This elective project emphasizes the importance of body language in communication.",
        objective:
          "Deliver a speech that incorporates effective body language.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Focus on the Positive - 1",
        overview:
          "This elective project focuses on the importance of maintaining a positive attitude.",
        objective:
          "Deliver a short speech that highlights a positive aspect of your life or work.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 9,
        title: "Focus on the Positive - 2",
        overview:
          "This elective project continues from the first part and focuses on another positive aspect.",
        objective:
          "Deliver another short speech that highlights a positive aspect of your life or work.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 10,
        title: "Inspire Your Audience",
        overview:
          "This elective project focuses on delivering an inspirational speech.",
        objective: "Deliver a speech that inspires your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 11,
        title: "Make Connections Through Networking",
        overview:
          "This elective project focuses on developing networking skills.",
        objective:
          "Deliver a speech about your experience with networking and the connections you made.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 12,
        title: "Prepare for an Interview",
        overview:
          "This elective project focuses on preparing for and participating in a successful interview.",
        objective:
          "Deliver a speech about your preparation and experience with an interview.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 13,
        title: "Understanding Vocal Variety",
        overview:
          "This elective project emphasizes the importance of vocal variety in speech delivery.",
        objective:
          "Deliver a speech that incorporates vocal variety to enhance your message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 14,
        title: "Using Descriptive Language",
        overview:
          "This elective project focuses on using descriptive language to paint a vivid picture for your audience.",
        objective:
          "Deliver a speech that incorporates descriptive language to enhance your message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 15,
        title: "Using Presentation Software",
        overview:
          "This elective project focuses on using presentation software to enhance your speech.",
        objective:
          "Deliver a speech that incorporates presentation software to enhance your message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 16,
        title: "Researching and Presenting",
        overview:
          "This elective project focuses on researching a topic and presenting your findings.",
        objective:
          "Deliver a speech that presents your research on a topic of your choice.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "The Power of Humor in an Impromptu Speech - 1",
        overview:
          "This project focuses on using humor effectively in impromptu speaking situations.",
        objective: "Deliver an impromptu speech that incorporates humor.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 2,
        title: "The Power of Humor in an Impromptu Speech - 2",
        overview:
          "This project continues to develop your skills in using humor in impromptu speaking.",
        objective: "Deliver another impromptu speech that incorporates humor.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 3,
        title: "Building a Social Media Presence",
        overview:
          "This elective project focuses on developing and maintaining a social media presence.",
        objective:
          "Deliver a speech about your experience with building a social media presence.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Create a Podcast",
        overview:
          "This elective project focuses on creating and delivering a podcast.",
        objective:
          "Deliver a speech about your experience with creating a podcast.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 5,
        title: "Manage Online Meetings",
        overview:
          "This elective project focuses on managing online meetings effectively.",
        objective:
          "Deliver a speech about your experience with managing online meetings.",
        greenCard: "20:00",
        yellowCard: "22:30",
        redCard: "25:00",
      },
      {
        speechNumber: 6,
        title: "Manage Projects Successfully - 1",
        overview:
          "This elective project focuses on planning and managing projects successfully.",
        objective:
          "Deliver a speech about the planning phase of a project you managed.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 7,
        title: "Manage Projects Successfully - 2",
        overview:
          "This elective project continues from the first part and focuses on the execution and completion phases.",
        objective:
          "Deliver a speech about the execution and completion phases of a project you managed.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Managing a Difficult Audience",
        overview:
          "This elective project focuses on techniques for managing a difficult audience.",
        objective:
          "Deliver a speech and manage the audience effectively, even if they are difficult.",
        greenCard: "12:00",
        yellowCard: "13:30",
        redCard: "15:00",
      },
      {
        speechNumber: 9,
        title: "Public Relations Strategies",
        overview:
          "This elective project focuses on developing and implementing public relations strategies.",
        objective:
          "Deliver a speech about your experience with public relations strategies.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 10,
        title: "Question-and-Answer Session",
        overview:
          "This elective project focuses on preparing for and conducting a question-and-answer session.",
        objective:
          "Deliver a speech and conduct a question-and-answer session.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 11,
        title: "Write a Compelling Blog",
        overview:
          "This elective project focuses on writing compelling blog posts.",
        objective:
          "Deliver a speech about your experience with writing a compelling blog post.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "Deliver Your Message With Humor",
        overview:
          "This project focuses on developing a longer speech or a series of short speeches that incorporate humor to deliver a message.",
        objective:
          "Deliver a speech or a series of short speeches that incorporate humor to effectively deliver a message.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 2,
        title: "Ethical Leadership",
        overview:
          "This elective project focuses on understanding and practicing ethical leadership.",
        objective:
          "Deliver a speech about your understanding and experience with ethical leadership.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 3,
        title: "High Performance Leadership - 1",
        overview:
          "This elective project involves planning and executing a leadership project. This is the first part of the project.",
        objective:
          "Deliver a speech about the planning phase of your leadership project.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "High Performance Leadership - 2",
        overview:
          "This elective project involves planning and executing a leadership project. This is the second part of the project.",
        objective:
          "Deliver a speech about the execution and outcomes of your leadership project.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Lessons Learned",
        overview:
          "This elective project focuses on sharing the lessons you've learned from your experiences in Toastmasters.",
        objective:
          "Deliver a speech about the lessons you've learned from your experiences in Toastmasters.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 6,
        title: "Moderate a Panel Discussion",
        overview:
          "This elective project focuses on preparing for and moderating a panel discussion.",
        objective: "Moderate a panel discussion on a topic of your choice.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 7,
        title: "Prepare to Speak Professionally",
        overview:
          "This elective project focuses on preparing for and delivering a professional-level speech.",
        objective:
          "Deliver a professional-level speech to a club or other audience.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 8,
        title: "Reflect on Your Path",
        overview:
          "This project focuses on reviewing and reflecting on the path you have completed.",
        objective:
          "Deliver a speech about your journey through the Engaging Humor pathway.",
        greenCard: "10:00",
        yellowCard: "11:00",
        redCard: "12:00",
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
          "This project focuses on identifying your personal leadership style and the impact it has on your environment and the people around you.",
        objective:
          "Learn about different leadership styles and identify your own. Reflect on how your leadership style impacts your interactions.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Understanding Your Communication Style",
        overview:
          "This project focuses on identifying your communication style, understanding how it impacts your interactions with others, and improving your ability to lead.",
        objective:
          "Identify your communication style and consider how it affects your leadership and interactions. Deliver a speech reflecting on your communication style and its impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "This project introduces the value of mentorship and the responsibilities of being a mentor. You will prepare for and start the process of mentoring.",
        objective:
          "Deliver a speech about a time when you were mentored or when you mentored someone else.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Negotiate the Best Outcome",
        overview:
          "This project focuses on understanding the principles of negotiation and implementing them to achieve a mutually beneficial outcome.",
        objective:
          "Learn and apply negotiation strategies to reach an agreement. Deliver a speech reflecting on your experience with negotiation.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Deliver Social Speeches - 1",
        overview:
          "This elective project focuses on preparing and delivering a social speech for a special occasion.",
        objective: "Prepare and deliver a brief speech for a social occasion.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 3,
        title: "Deliver Social Speeches - 2",
        overview:
          "This elective project focuses on preparing and delivering a social speech for a special occasion.",
        objective:
          "Prepare and deliver a second brief speech for a social occasion.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 4,
        title: "Using Presentation Software",
        overview:
          "This elective project focuses on learning how to effectively use presentation software to support your message.",
        objective:
          "Prepare a speech that uses presentation software to enhance the message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Connect with Storytelling",
        overview:
          "This elective project focuses on the techniques of storytelling and how to use them to connect with an audience.",
        objective: "Prepare and deliver a speech that tells a story.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 6,
        title: "Creating Effective Visual Aids",
        overview:
          "This elective project focuses on creating and using visual aids to enhance your speech.",
        objective: "Prepare a speech that uses visual aids effectively.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 7,
        title: "Using Descriptive Language",
        overview:
          "This elective project focuses on the importance of descriptive language and how it enhances a speech.",
        objective:
          "Prepare a speech that uses descriptive language to paint a vivid picture for your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Connect with Your Audience",
        overview:
          "This elective project focuses on learning and applying techniques to connect with your audience.",
        objective:
          "Prepare a speech that uses techniques to connect with your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 9,
        title: "Make Connections Through Networking",
        overview:
          "This elective project focuses on building and maintaining professional relationships through networking.",
        objective:
          "Prepare a speech about the importance of networking and your experience with it.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 10,
        title: "Focus on the Positive - 1",
        overview:
          "This elective project focuses on the importance of maintaining a positive attitude and how it can benefit your life and interactions.",
        objective:
          "Prepare a brief speech on the benefits of focusing on the positive.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 11,
        title: "Focus on the Positive - 2",
        overview:
          "This elective project focuses on the importance of maintaining a positive attitude and how it can benefit your life and interactions.",
        objective:
          "Prepare a speech on a personal experience where focusing on the positive made a difference.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 12,
        title: "Inspire Your Audience",
        overview:
          "This elective project focuses on learning and applying techniques to inspire your audience.",
        objective: "Prepare and deliver a speech that inspires your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 13,
        title: "Prepare for an Interview",
        overview:
          "This elective project focuses on the skills needed to prepare for and succeed in an interview.",
        objective:
          "Prepare and deliver a speech on your experience with interviews or tips for succeeding in an interview.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 14,
        title: "Understanding Vocal Variety",
        overview:
          "This elective project focuses on the use of vocal variety to enhance a speech.",
        objective:
          "Prepare and deliver a speech that uses vocal variety to add impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 15,
        title: "Deliver Social Speeches - 1",
        overview:
          "This elective project focuses on preparing and delivering a social speech for a special occasion.",
        objective: "Prepare and deliver a brief speech for a social occasion.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 16,
        title: "Active Listening",
        overview:
          "This elective project focuses on the importance of active listening and how it can improve your communication skills.",
        objective:
          "Prepare and deliver a speech on your experience with active listening or the benefits it has brought you.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 17,
        title: "Know Your Sense of Humor",
        overview:
          "This elective project focuses on understanding and applying your sense of humor in speeches.",
        objective:
          "Prepare and deliver a speech that uses your sense of humor effectively.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 18,
        title: "Effective Body Language",
        overview:
          "This elective project focuses on the use of body language to enhance a speech.",
        objective:
          "Prepare and deliver a speech that uses body language to add impact.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 19,
        title: "Researching and Presenting",
        overview:
          "This elective project focuses on conducting research and presenting it effectively.",
        objective:
          "Prepare and deliver a speech that incorporates research findings.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "Manage Change",
        overview:
          "This project focuses on the skills needed to manage change effectively in an organization or team.",
        objective:
          "Learn and apply strategies to manage change effectively. Deliver a speech on your experience with managing change.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Create a Podcast",
        overview:
          "This elective project focuses on the skills needed to create and publish a podcast.",
        objective:
          "Create a podcast of two to three minutes. Deliver a speech about the experience.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 3,
        title: "Building a Social Media Presence",
        overview:
          "This elective project focuses on the skills needed to build and maintain a social media presence.",
        objective:
          "Develop a social media presence. Deliver a speech about your experience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Managing a Difficult Audience",
        overview:
          "This elective project focuses on strategies for managing a difficult audience during a presentation.",
        objective:
          "Prepare and deliver a speech to a difficult audience, applying techniques to manage the situation.",
        greenCard: "12:00",
        yellowCard: "13:30",
        redCard: "15:00",
      },
      {
        speechNumber: 5,
        title: "Write a Compelling Blog",
        overview:
          "This elective project focuses on the skills needed to write and publish a compelling blog.",
        objective:
          "Write a blog post of 200 to 800 words. Deliver a speech about your experience.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 6,
        title: "Manage Online Meetings",
        overview:
          "This elective project focuses on the skills needed to manage effective online meetings.",
        objective:
          "Learn and apply strategies for managing online meetings. Deliver a speech about your experience.",
        greenCard: "20:00",
        yellowCard: "23:00",
        redCard: "25:00",
      },
      {
        speechNumber: 7,
        title: "Question-and-Answer Session",
        overview:
          "This elective project focuses on the skills needed to handle a question-and-answer session effectively.",
        objective:
          "Prepare and deliver a speech, followed by a question-and-answer session.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Public Relations Strategies",
        overview:
          "This elective project focuses on the skills needed to develop and implement effective public relations strategies.",
        objective:
          "Develop and implement a public relations strategy. Deliver a speech about your experience.",
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
          "Learn and apply project management skills. Deliver a speech about a project you managed successfully.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 10,
        title: "Manage Projects Successfully - 2",
        overview:
          "This elective project focuses on the skills needed to manage projects successfully.",
        objective:
          "Learn and apply project management skills. Deliver a speech about a project you managed successfully.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "Lead in Any Situation",
        overview:
          "This project focuses on the skills needed to lead in various situations and environments.",
        objective:
          "Develop and demonstrate your ability to lead in a specific situation. Deliver a speech on your leadership experience.",
        greenCard: "8:00",
        yellowCard: "9:00",
        redCard: "10:00",
      },
      {
        speechNumber: 2,
        title: "Lessons Learned",
        overview:
          "This project focuses on reflecting on and sharing the lessons you have learned throughout your Toastmasters journey.",
        objective:
          "Reflect on your experiences and lessons learned in Toastmasters. Deliver a speech sharing these lessons.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Moderate a Panel Discussion",
        overview:
          "This elective project focuses on the skills needed to effectively moderate a panel discussion.",
        objective:
          "Prepare and moderate a panel discussion on a topic of your choice. Ensure the discussion lasts between 20 and 40 minutes.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 4,
        title: "Ethical Leadership",
        overview:
          "This elective project focuses on the principles and practices of ethical leadership.",
        objective:
          "Develop and demonstrate ethical leadership skills. Deliver a speech on your experience with ethical leadership.",
        greenCard: "20:00",
        yellowCard: "30:00",
        redCard: "40:00",
      },
      {
        speechNumber: 5,
        title: "Leading in Your Volunteer Organization",
        overview:
          "This elective project focuses on the skills needed to lead effectively in a volunteer organization.",
        objective:
          "Develop and demonstrate leadership skills within a volunteer organization. Deliver a speech on your experience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 6,
        title: "Prepare to Speak Professionally",
        overview:
          "This elective project focuses on preparing and delivering a professional-level speech.",
        objective:
          "Develop and deliver a professional-level speech on a topic of your choice. Ensure your speech lasts between 18 and 22 minutes.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 7,
        title: "High Performance Leadership - 1",
        overview:
          "This elective project focuses on the skills needed to lead a high-performance team.",
        objective:
          "Develop and demonstrate high-performance leadership skills. Deliver a speech on your experience leading a high-performance team.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "High Performance Leadership - 2",
        overview:
          "This elective project focuses on the skills needed to lead a high-performance team.",
        objective:
          "Develop and demonstrate high-performance leadership skills. Deliver a speech on your experience leading a high-performance team.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 9,
        title: "Reflect on Your Path",
        overview:
          "This project focuses on reflecting on your growth and experiences throughout the Dynamic Leadership pathway.",
        objective:
          "Reflect on your experiences and growth in the Dynamic Leadership pathway. Deliver a speech sharing your reflections.",
        greenCard: "10:00",
        yellowCard: "11:00",
        redCard: "12:00",
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
        title: "Active Listening",
        overview:
          "This project focuses on the skills needed to listen actively and effectively in various situations.",
        objective:
          "Develop and demonstrate active listening skills. Deliver a speech on your experience with active listening.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Understanding Your Communication Style",
        overview:
          "This project focuses on identifying and understanding your personal communication style.",
        objective:
          "Analyze your communication style and deliver a speech on what you have learned.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "This project focuses on the benefits of having a mentor and being a mentor within Toastmasters.",
        objective:
          "Deliver a speech about your experience with mentoring, either as a mentor or mentee.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Understanding Emotional Intelligence",
        overview:
          "This project explores the concept of emotional intelligence and its role in motivating others.",
        objective:
          "Deliver a speech on emotional intelligence, how it affects motivation, and how to leverage it in leadership.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Deliver Social Speeches - 1",
        overview:
          "This project focuses on delivering short, impactful speeches that are appropriate for social settings.",
        objective:
          "Deliver a speech designed for a social setting, focusing on clarity and engagement.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 3,
        title: "Deliver Social Speeches - 2",
        overview:
          "This project builds on the skills learned in Deliver Social Speeches - 1, emphasizing different approaches to engaging an audience.",
        objective:
          "Deliver another speech for a social setting, incorporating feedback from the previous speech and focusing on improving engagement.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 4,
        title: "Using Presentation Software",
        overview:
          "This project covers the use of presentation software to enhance speeches.",
        objective:
          "Create and use visual aids in a speech, demonstrating effective use of presentation software.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Connect with Storytelling",
        overview:
          "This project focuses on the use of storytelling to connect with and motivate your audience.",
        objective:
          "Incorporate storytelling techniques into your speech to engage and motivate your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 6,
        title: "Creating Effective Visual Aids",
        overview:
          "This project teaches how to create visual aids that complement and enhance your speech.",
        objective:
          "Design and use visual aids in your speech to support and clarify your message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 7,
        title: "Using Descriptive Language",
        overview:
          "This project focuses on the use of descriptive language to create vivid imagery and engage your audience.",
        objective:
          "Incorporate descriptive language into your speech to enhance storytelling and audience engagement.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Connect with Your Audience",
        overview:
          "This project explores techniques to build a strong connection with your audience.",
        objective:
          "Deliver a speech that demonstrates effective strategies for connecting with and engaging your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 9,
        title: "Make Connections Through Networking",
        overview:
          "This project emphasizes the importance of networking and how to effectively make connections.",
        objective:
          "Deliver a speech on strategies for effective networking and making professional connections.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 10,
        title: "Focus on the Positive - 1",
        overview:
          "This project introduces techniques for focusing on positive aspects and conveying optimism.",
        objective:
          "Deliver a short speech that demonstrates how to focus on positive aspects and convey an optimistic message.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 11,
        title: "Focus on the Positive - 2",
        overview:
          "This project builds on the previous one, encouraging deeper exploration of positivity and its impact.",
        objective:
          "Deliver a longer speech that expands on techniques for maintaining and promoting positivity.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 12,
        title: "Inspire Your Audience",
        overview:
          "This project focuses on techniques to inspire and motivate your audience.",
        objective:
          "Deliver a speech designed to inspire and motivate your audience, utilizing various motivational techniques.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 13,
        title: "Prepare for an Interview",
        overview:
          "This project prepares you for interviews by focusing on presentation and communication skills.",
        objective:
          "Deliver a speech on how to effectively prepare for and succeed in interviews.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 14,
        title: "Understanding Vocal Variety",
        overview:
          "This project focuses on the use of vocal variety to enhance your speech delivery.",
        objective:
          "Demonstrate effective use of vocal variety in your speech to maintain audience interest and convey emotion.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 15,
        title: "Effective Body Language",
        overview:
          "This project emphasizes the role of body language in effective communication.",
        objective:
          "Incorporate effective body language into your speech to support your message and engage your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 16,
        title: "Know Your Sense of Humor",
        overview:
          "This project explores how to use humor effectively in your speeches.",
        objective:
          "Demonstrate an understanding of how humor can be used to engage and motivate your audience.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 17,
        title: "Researching and Presenting",
        overview:
          "This project focuses on researching a topic and presenting your findings effectively.",
        objective:
          "Research a topic and deliver a well-organized speech presenting your findings and insights.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "Motivate Others",
        overview:
          "This project focuses on strategies to inspire and motivate others effectively.",
        objective:
          "Deliver a speech demonstrating effective techniques for motivating and inspiring others.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Create a Podcast",
        overview:
          "This project involves creating and presenting a podcast episode, focusing on content and delivery.",
        objective:
          "Produce and present a podcast episode that engages and informs your audience.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 3,
        title: "Building a Social Media Presence",
        overview:
          "This project explores techniques for establishing and maintaining a professional social media presence.",
        objective:
          "Create and implement a plan for building and enhancing your social media presence.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Managing a Difficult Audience",
        overview:
          "This project focuses on strategies for handling and managing challenging audience situations.",
        objective:
          "Deliver a speech on techniques for managing and engaging with a difficult audience.",
        greenCard: "12:00",
        yellowCard: "13:00",
        redCard: "15:00",
      },
      {
        speechNumber: 5,
        title: "Write a Compelling Blog",
        overview:
          "This project involves writing a compelling blog post, focusing on engaging content and effective writing techniques.",
        objective:
          "Write and present a blog post that captures the audience's attention and delivers a clear message.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 6,
        title: "Manage Online Meetings",
        overview:
          "This project covers the management and facilitation of effective online meetings.",
        objective:
          "Demonstrate effective techniques for managing and leading online meetings, focusing on engagement and productivity.",
        greenCard: "20:00",
        yellowCard: "22:00",
        redCard: "25:00",
      },
      {
        speechNumber: 7,
        title: "Question-and-Answer Session",
        overview:
          "This project involves managing a question-and-answer session, addressing questions, and maintaining control.",
        objective:
          "Conduct a Q&A session, demonstrating effective techniques for handling questions and keeping the session on track.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Public Relations Strategies",
        overview:
          "This project explores strategies for effective public relations and communication.",
        objective:
          "Present a plan for implementing effective public relations strategies and techniques.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 9,
        title: "Manage Projects Successfully - 1",
        overview:
          "This project introduces key principles of successful project management.",
        objective:
          "Deliver a speech on foundational principles of managing projects successfully.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 10,
        title: "Manage Projects Successfully - 2",
        overview:
          "This project builds on the previous one, focusing on advanced project management techniques.",
        objective:
          "Deliver a more detailed speech on advanced techniques for managing projects successfully.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level5: [
      {
        speechNumber: 1,
        title: "Team Building - 1",
        overview:
          "This project involves demonstrating techniques for effective team building and collaboration.",
        objective:
          "Deliver a speech focusing on strategies and techniques for building and strengthening a team.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 2,
        title: "Team Building - 2",
        overview:
          "This project continues from Team Building - 1, with a focus on advanced team building techniques and implementation.",
        objective:
          "Deliver a detailed speech on advanced strategies for team building and creating effective team dynamics.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Lessons Learned",
        overview:
          "This project involves reflecting on your journey and sharing the lessons learned from your experiences.",
        objective:
          "Present a speech reflecting on the lessons learned throughout your Toastmasters journey and how they have impacted your personal and professional growth.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Moderate a Panel Discussion",
        overview:
          "This project involves moderating a panel discussion, focusing on managing the discussion, engaging panelists, and handling audience questions.",
        objective:
          "Moderate a panel discussion, demonstrating effective techniques for managing the conversation and engaging both the panelists and the audience.",
        greenCard: "20:00",
        yellowCard: "25:00",
        redCard: "30:00",
      },
      {
        speechNumber: 5,
        title: "Ethical Leadership",
        overview:
          "This project focuses on demonstrating and discussing the principles of ethical leadership in various scenarios.",
        objective:
          "Deliver a speech on the principles of ethical leadership, including real-world examples and strategies for maintaining ethical standards in leadership roles.",
        greenCard: "20:00",
        yellowCard: "25:00",
        redCard: "30:00",
      },
      {
        speechNumber: 6,
        title: "Leading in Your Volunteer Organization",
        overview:
          "This project involves discussing and demonstrating leadership strategies specifically for volunteer organizations.",
        objective:
          "Present a speech on leadership strategies and best practices tailored to leading in a volunteer organization.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 7,
        title: "Prepare to Speak Professionally",
        overview:
          "This project focuses on preparing and delivering a professional speech in a high-stakes or formal setting.",
        objective:
          "Deliver a professional speech that demonstrates advanced preparation and presentation skills suitable for a formal or high-stakes environment.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 8,
        title: "High Performance Leadership - 1",
        overview:
          "This project involves developing a high-performance leadership plan and implementing it.",
        objective:
          "Present the first part of a plan for high-performance leadership, including specific goals and strategies for achieving excellence.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 9,
        title: "High Performance Leadership - 2",
        overview:
          "This project builds on High Performance Leadership - 1, focusing on evaluating and reflecting on the implementation of the leadership plan.",
        objective:
          "Deliver a speech reflecting on the implementation of your high-performance leadership plan, including outcomes and lessons learned.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 10,
        title: "Reflect on Your Path",
        overview:
          "This project involves reflecting on your entire Toastmasters journey and how it has influenced your growth and development.",
        objective:
          "Present a reflective speech on your Toastmasters journey, discussing personal growth, key experiences, and future aspirations.",
        greenCard: "10:00",
        yellowCard: "11:00",
        redCard: "12:00",
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
        title: "Understanding Your Leadership Style",
        overview:
          "This project involves identifying and understanding your leadership style and how it impacts your interactions and effectiveness.",
        objective:
          "Deliver a speech that outlines your leadership style, including its strengths and areas for growth, and how it influences your leadership approach.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Connect With Your Audience",
        overview:
          "This project focuses on techniques for establishing a strong connection with your audience, making your message more engaging and effective.",
        objective:
          "Deliver a speech that demonstrates your ability to connect with your audience through engagement strategies, relatable content, and audience interaction.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Introduction to Toastmasters Mentoring",
        overview:
          "This project involves understanding the role of mentoring in Toastmasters and how to effectively mentor others.",
        objective:
          "Deliver a speech on the importance of mentoring in Toastmasters, outlining effective mentoring techniques and your approach to mentoring.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level3: [
      {
        speechNumber: 1,
        title: "Present a Proposal",
        overview:
          "This project involves presenting a proposal, demonstrating your ability to clearly and effectively communicate an idea or plan.",
        objective:
          "Deliver a speech that presents a well-researched proposal, including your recommendations and justifications, and address potential questions or concerns.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "Deliver Social Speeches - 1",
        overview:
          "This project involves delivering a speech in a social setting, focusing on engaging and entertaining your audience.",
        objective:
          "Deliver a speech that is appropriate for a social setting, demonstrating effective use of humor, storytelling, or other techniques to engage the audience.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 3,
        title: "Deliver Social Speeches - 2",
        overview:
          "This project continues the focus on social speeches, providing another opportunity to demonstrate your skills in engaging an audience in a casual setting.",
        objective:
          "Deliver a second social speech, showcasing your ability to adapt your content and style to different social contexts while maintaining audience engagement.",
        greenCard: "3:00",
        yellowCard: "3:30",
        redCard: "4:00",
      },
      {
        speechNumber: 4,
        title: "Using Presentation Software",
        overview:
          "This project focuses on the effective use of presentation software to enhance your speeches and presentations.",
        objective:
          "Deliver a speech that incorporates presentation software to support and enhance your message, demonstrating your ability to use visual aids effectively.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Creating Effective Visual Aids",
        overview:
          "This project involves creating visual aids that support and enhance your speech or presentation.",
        objective:
          "Deliver a speech that utilizes well-designed visual aids to reinforce your message, demonstrating your skills in creating and using visual elements effectively.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 6,
        title: "Using Descriptive Language",
        overview:
          "This project focuses on the use of descriptive language to make your speeches more vivid and engaging.",
        objective:
          "Deliver a speech that effectively uses descriptive language to create a vivid picture for your audience, enhancing their understanding and engagement with your message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 7,
        title: "Make Connections Through Networking",
        overview:
          "This project involves demonstrating your ability to build connections and network effectively within professional and social contexts.",
        objective:
          "Deliver a speech that showcases your networking skills, including how you build and maintain connections and leverage them for professional or personal growth.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 8,
        title: "Focus on the Positive - 1",
        overview:
          "This project involves focusing on positive aspects of a situation and communicating them effectively.",
        objective:
          "Deliver a short speech that highlights the positive aspects of a given situation, demonstrating your ability to focus on and communicate optimism and constructive feedback.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 9,
        title: "Focus on the Positive - 2",
        overview:
          "This project continues the focus on positivity, providing another opportunity to demonstrate your skills in highlighting positive aspects.",
        objective:
          "Deliver a longer speech that continues to focus on positive aspects, showcasing your ability to maintain a positive perspective and inspire others through your message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 10,
        title: "Inspire Your Audience",
        overview:
          "This project focuses on inspiring and motivating your audience through your speech.",
        objective:
          "Deliver a speech that inspires and motivates your audience, demonstrating your ability to convey passion, enthusiasm, and a compelling vision or message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 11,
        title: "Prepare for an Interview",
        overview:
          "This project involves preparing for and delivering a speech that simulates a job interview or other formal interview scenario.",
        objective:
          "Deliver a speech that demonstrates your preparation and readiness for an interview, including how you present yourself and respond to questions or scenarios.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 12,
        title: "Understanding Vocal Variety",
        overview:
          "This project focuses on using vocal variety to enhance your speech and engage your audience.",
        objective:
          "Deliver a speech that demonstrates effective use of vocal variety, including pitch, tone, pace, and volume, to enhance your message and maintain audience interest.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 13,
        title: "Effective Body Language",
        overview:
          "This project focuses on the use of body language to complement and enhance your speech.",
        objective:
          "Deliver a speech that utilizes effective body language to support your message, including gestures, posture, and facial expressions.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 14,
        title: "Active Listening",
        overview:
          "This project involves demonstrating active listening skills during your speech or presentation.",
        objective:
          "Deliver a speech that incorporates elements of active listening, including how you engage with your audience and respond to their feedback or questions.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 15,
        title: "Connect with Storytelling",
        overview:
          "This project focuses on using storytelling to connect with your audience and enhance your message.",
        objective:
          "Deliver a speech that incorporates storytelling to create a connection with your audience, making your message more relatable and memorable.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 16,
        title: "Know Your Sense of Humor",
        overview:
          "This project involves incorporating humor effectively into your speech.",
        objective:
          "Deliver a speech that demonstrates your sense of humor and how it can be used to engage and entertain your audience while supporting your message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 17,
        title: "Researching and Presenting",
        overview:
          "This project focuses on conducting research and presenting findings in a clear and engaging manner.",
        objective:
          "Deliver a speech that showcases your research skills and ability to present information clearly, demonstrating effective use of research to support your message.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
    ],
    level4: [
      {
        speechNumber: 1,
        title: "Manage Projects Successfully - 1",
        overview:
          "This project involves demonstrating your ability to manage a small-scale project successfully.",
        objective:
          "Deliver a speech or presentation on a project you have managed, highlighting your planning, execution, and outcomes.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 2,
        title: "Manage Projects Successfully - 2",
        overview:
          "This project continues the focus on project management, providing an opportunity to showcase your skills in a more complex project.",
        objective:
          "Deliver a detailed speech or presentation on a more complex project you have managed, including insights into overcoming challenges and achieving goals.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Create a Podcast",
        overview:
          "This project involves creating and presenting a podcast episode, demonstrating your ability to communicate effectively through audio media.",
        objective:
          "Produce a podcast episode that showcases your skills in audio production, scripting, and delivering content in a compelling manner.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 4,
        title: "Building a Social Media Presence",
        overview:
          "This project focuses on developing a strong social media presence and effectively using platforms to communicate your message.",
        objective:
          "Deliver a presentation on your strategy for building and maintaining a social media presence, including how you engage with your audience and measure success.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 5,
        title: "Managing a Difficult Audience",
        overview:
          "This project involves demonstrating your ability to handle a challenging audience effectively.",
        objective:
          "Deliver a speech or presentation that showcases your strategies for managing difficult audience situations, including handling interruptions, objections, or disengagement.",
        greenCard: "12:00",
        yellowCard: "13:30",
        redCard: "15:00",
      },
      {
        speechNumber: 6,
        title: "Write a Compelling Blog",
        overview:
          "This project focuses on writing and presenting a compelling blog post, demonstrating your ability to communicate effectively through written content.",
        objective:
          "Deliver a presentation based on a compelling blog post you have written, highlighting your ability to engage readers and convey your message clearly.",
        greenCard: "2:00",
        yellowCard: "2:30",
        redCard: "3:00",
      },
      {
        speechNumber: 7,
        title: "Manage Online Meetings",
        overview:
          "This project involves effectively managing and conducting online meetings, demonstrating your skills in virtual communication and facilitation.",
        objective:
          "Deliver a presentation on how you manage online meetings, including strategies for engaging participants, handling technical issues, and ensuring productive outcomes.",
        greenCard: "20:00",
        yellowCard: "22:30",
        redCard: "25:00",
      },
      {
        speechNumber: 8,
        title: "Question-and-Answer Session",
        overview:
          "This project focuses on conducting an effective question-and-answer session, demonstrating your ability to handle inquiries and engage with your audience.",
        objective:
          "Deliver a presentation that includes a Q&A session, showcasing your skills in responding to audience questions, managing discussions, and maintaining control of the session.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 9,
        title: "Public Relations Strategies",
        overview:
          "This project involves presenting strategies for effective public relations, including how to manage your organization's image and communication.",
        objective:
          "Deliver a presentation on your public relations strategies, including how you handle media relations, manage crises, and build positive relationships with stakeholders.",
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
          "This project involves demonstrating your ability to lead a high-performance team and drive significant results.",
        objective:
          "Deliver a presentation on your leadership experience with a high-performance team, focusing on your strategies for achieving exceptional results and overcoming challenges.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 2,
        title: "High Performance Leadership - 2",
        overview:
          "This project continues the focus on high-performance leadership, with an emphasis on long-term impact and sustainability.",
        objective:
          "Deliver a presentation on how you sustained high performance over time, including strategies for maintaining motivation, managing change, and ensuring ongoing success.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 3,
        title: "Lessons Learned",
        overview:
          "This project involves reflecting on your experiences and lessons learned throughout the Innovative Planning path.",
        objective:
          "Deliver a presentation that summarizes key lessons learned from your projects and experiences, including insights into what worked well and areas for improvement.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 4,
        title: "Moderate a Panel Discussion",
        overview:
          "This project involves moderating a panel discussion, demonstrating your skills in facilitating complex conversations and engaging with multiple speakers.",
        objective:
          "Moderate a panel discussion, including preparing questions, managing the discussion flow, and engaging with both the panelists and the audience effectively.",
        greenCard: "20:00",
        yellowCard: "25:00",
        redCard: "30:00",
      },
      {
        speechNumber: 5,
        title: "Ethical Leadership",
        overview:
          "This project focuses on demonstrating your understanding and application of ethical leadership principles.",
        objective:
          "Deliver a presentation on your approach to ethical leadership, including how you make decisions, manage conflicts, and uphold ethical standards in your leadership role.",
        greenCard: "20:00",
        yellowCard: "25:00",
        redCard: "30:00",
      },
      {
        speechNumber: 6,
        title: "Leading in Your Volunteer Organization",
        overview:
          "This project involves applying your leadership skills in a volunteer organization, showcasing your ability to lead and make an impact in a non-profit or volunteer setting.",
        objective:
          "Deliver a presentation on your leadership experience within a volunteer organization, focusing on your strategies for motivating volunteers, managing projects, and achieving organizational goals.",
        greenCard: "5:00",
        yellowCard: "6:00",
        redCard: "7:00",
      },
      {
        speechNumber: 7,
        title: "Prepare to Speak Professionally",
        overview:
          "This project focuses on preparing and delivering a professional speech or presentation, demonstrating your ability to communicate effectively in a formal setting.",
        objective:
          "Deliver a professional speech or presentation on a topic of your choice, showcasing your ability to engage the audience, present your ideas clearly, and handle questions or feedback.",
        greenCard: "18:00",
        yellowCard: "20:00",
        redCard: "22:00",
      },
      {
        speechNumber: 8,
        title: "Reflect on Your Path",
        overview:
          "This project involves reflecting on your journey through the Innovative Planning path and identifying key accomplishments and growth areas.",
        objective:
          "Deliver a presentation reflecting on your experiences throughout the Innovative Planning path, including your personal growth, achievements, and future goals.",
        greenCard: "10:00",
        yellowCard: "11:00",
        redCard: "12:00",
      },
    ],
  },
];

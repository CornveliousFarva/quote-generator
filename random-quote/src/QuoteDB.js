const quotes = [
    {
        "quote": "Forget all the reasons why it won't work and believe the one reason why it will",
        "author": "Unknown"
    },
    {
        "quote": "Always do what you are afraid to do",
        "author": "Ralph Waldo Emerson"
    },

    {
        "quote": "Don't be intimidated by what you don't know. That can be your greatest strength and ensure that you do things differently from everyone else.",
        "author": "Sara Blakely"
    },
    {
        "quote": "If you keep on doing what you've always done, you will keep getting what you've always gotten.",
        "author": "Unknown"
    },
    {
        "quote": " For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. John 3:16",
        "author": "Jesus Christ"
    },
    {
        "quote": "The surest way to find your dream job is to create it.",
        "author": "Unknown"
    },
    {
        "quote": "You are confined only by the walls you build yourself.",
        "author": "Andrew Murphy"
    },
    {
        "quote": "Today's accomplishments were yesterday's impossibilities.",
        "author": "Robert Schuller"
    },
    {
        "quote": "You don't have to see the whole staircase. Just take the first step.",
        "author": "Martin Luther King"
    },
    {
        "quote": "How many success stories do you need to hear before you make your own?",
        "author": "Unknown"
    },
    {
        "quote": "Watch carefully the magic that occurs when you give a person just enough comfort to be themselves",
        "author": "Atticus"
    },

    {
        "quote": "You never know how strong you are, until being strong is your only choice",
        "author": "Bob Marley"
    },
    {
        "quote": "All great achievements require time",
        "author": "Maya Angelou"
    },
    {
        "quote": "When you have exhausted all possibilities, remember this: you haven't.",
        "author": "Thomas Edison"
    },
    {
        "quote": "Continuous improvement is better than delayed perfection",
        "author": "Mark Twain"
    },
    {
        "quote": "And the God of all grace, who called you to his eternal glory in Christ, after you have suffered a little while, will himself restore you and make you strong, firm and steadfast.",
        "author": "IPeter 5:10"
    },
    {
        "quote": "A I can do all things through Christ who strengthens me.",
        "author": "Philipians4:13"
    },
    {
        "quote": "Time you enjoy wasting is not wasted time",
        "author": "John Lennon"
    },
    {
        "quote": "If you want to lift yourself up, lift up someone else",
        "author": "Booker T. Washington"
    },
    {
        "quote": "Acknowledging the good that you already have in your life is the foundation for all abundance",
        "author": "Eckhart Tolle"
    },
    {
        "quote": "If you want to lift yourself up, lift up someone else",
        "author": "Booker T. Washington"
    },
    {
        "quote": "Muddy water is best cleared by leaving it alone.",
        "author": "AnaÃ¯s Nin"
    },
    {
        "quote": "There is nothing so useless as doing efficiently that which should not be done at all.",
        "author": "Peter Drucker"
    },
    {
        "quote": "Strength does not come from winning. Your struggles develop your strengths",
        "author": "Arnold Schwarzenegger"
    },
    {
        "quote": "Whenever you are confronted with an opponent, conquer them with love",
        "author": "Mahatma Gandhi"
    },
    {
        "quote": "Enjoy the little things, for one day you may look back and realize they were the big things",
        "author": "Robert Brault"
    },
    {
        "quote": "Do something today that your future self will thank you for",
        "author": "Sean Patrick Flanery"
    },
    {
        "quote": "It is not the load that breaks you down. It's the way you carry it",
        "author": "Lou Holtz"
    },
    {
        "quote": "The pursuit of perfection is frustratin and a waste of time, because nothing is ever perfect. The pursuit of excellence is commendable and worthwhile. Therefore, strive for excellence, not perfection.",
        "author": "Alan Kulwicki"
    },
    {
        "quote": "Anyone can have a good day, but you have to be able to perform on a bad day.",
        "author": "Jurgen Klopp"
    },
    {
        "quote": "I was a fighting machine with a will of iron",
        "author": "Jurgen Klopp"
    },
    {
        "quote": "I have only one understanding of development and of making success, and that's going step by step",
        "author": "Jurgen Klopp"
    },
    {
        "quote": "I like learning more about people; I like to talk to people",
        "author": "Jurgen Klopp"
    },
    {
        "quote": "I'm an absolutely normal guy.",
        "author": "Jurgen Klopp"
    },
    {
        "quote": "I'm pretty positive, optimistic, so I always expect the best.",
        "author": "Jurgen Klopp"
    },
    {
        "quote": "I don't feel too much pressure. I only see an opportunity.",
        "author": "Jurgen Klopp"
    },
    {
        "quote": "My experience is listen, see, feel - and then think about what you can change.",
        "author": "Jurgen Klopp"
    },
    {
        "quote": "I think there's some connection between absolute discipline and absolute freedom.",
        "author": "Alan Rickman"
    },
    {
        "quote": "I have a motto: work to become, not to acquire.",
        "author": "Alan Kulwicki"
    },
    {
        "quote": "If you don't believe, you don't belong.",
        "author": "Alan Kulwicki"
    },
    {
        "quote": "In life, have a game plan, and then do your best to achieve it.",
        "author": "Alan Kulwicki"
    },
    {
        "quote": "Racing is like life. If you get up one more time than you fall, you'll make it through.",
        "author": "Alan Kulwicki"
    },
    {
        "quote": "You win some, lose some, and wreck some.",
        "author": "Dale Earnhardt"
    },
    {
        "quote": "You can't let a bad moment spoil a bunch of good ones.",
        "author": "Dale Earnhardt"
    },
    {
        "quote": "Every human being makes mistakes",
        "author": "Ian Smith"
    },
    {
        "quote": "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed",
        "author": "Michael Jordan"
    },
    {
        "quote": "If you're trying to achieve, there will always be roadblocks. I've had them; everybody has had them. But obstacles don't have to stop you. Figure out how to climb it, go through it, or work around it",
        "author": "Michael Jordan"
    },
    {
        "quote": "I can accept failure, everyone fails at something. But I can't accept not trying.",
        "author": "Michael Jordan"
    },
    {
        "quote": "Always turn a negative situation into a positive situation",
        "author": "Michael Jordan"
    },
    {
        "quote": "To be successful you have to be selfish, or else you never achieve. And once you get to your highest level, then you have to be unselfish. Stay reachable. Stay in touch. Don't isolate.",
        "author": "Michael Jordan"
    },
    {
        "quote": "There is a time to take counsel of your fears, and there is a time to neve listen to any fear",
        "author": "George S. Patton"
    },
    {
        "quote": "Courage is fear holding on a minute longer",
        "author": "George S. Patton"
    },
    {
        "quote": "Never tell people how to do things. Tell them what to do and they will surprise you with their ingenuity.",
        "author": "George S. Patton"
    },
    {
        "quote": "Take calculated risks. That is quite different from being rash.",
        "author": "George S. Patton"
    },
    {
        "quote": "The harder you work, the harder it is to surrender",
        "author": "Vince Lombardi"
    },
    {
        "quote": "The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.",
        "author": "Vince Lombardi"
    },
    {
        "quote": "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but a lack of will",
        "author": "Vince Lombardi"
    },
    {
        "quote": "I think everything is possible.",
        "author": "Sadio Mane"
    },
    {
        "quote": "Every year, every day, every month, I am proving myself.",
        "author": "Mohamed Salah"
    },
    {
        "quote": "I always like to improve myself",
        "author": "Mohamed Salah"
    },
    {
        "quote": "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible",
        "author": "St. Francis of Assisi"
    },
    {
        "quote": "I plead with you - never, ever give up on hope, never doubt, never tire, and never be discouraged. Be not afraid.",
        "author": "St. Pope John Paul II"
    },
    {
        "quote": "Remember these two things: play hard and have fun",
        "author": "Tony Gwynn"
    },
    {
        "quote": "Perhaps I am stronger than I think",
        "author": "Thomas Merton"
    },
    {
        "quote": "Don't let the winds blow your dreams away...or steal your faith in God",
        "author": "Vin Scully"
    },
    {
        "quote": "Life is a lively process of becoming",
        "author": "Douglas MacArthur"
    },
    {
        "quote": "We keep moving forward, opeining new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths.",
        "author": "Walt Disney"
    },
    {
        "quote":"Ability is what you're capable of doing. Motivation determines what you do. Attitude determines how well you do it.",
        "author": "Lou Holtz"
    },
    {
        "quote": "You can't win unless you learn how to lose.",
        "author": "Kareem Abdul-Jabbar"
    },
    {
        "quote": "If you're going through hell, keep going",
        "author": "Winston Churchill"
    },
    {
        "quote": "I have self-doubt. I have insecurity. I have fear of failure...We all have self-doubt. You don't deny it, but you also don't capitulate to it. You embrace it.",
        "author": "Kobe Bryant"
    },
    {
        "quote": "Aim for the sky and you'll reach the ceiling. Aim for the ceiling and you'll stay on the floor.",
        "author": "Bill Shankly"
    },
    {
        "quote": "Every now and then, it helps to be a little deaf.",
        "author": "Ruth Bader Ginsburg"
    },
    {
        "quote": "There are risks and costs to action. But they are far less than the long range risks of comfortable inaction.",
        "author": "John F. Kennedy"
    },
    {
        "quote": "If I can change then anyone can change. I promise you that.",
        "author": "Brett Favre"
    },
    {
        "quote": "If I am through learning, I am through.",
        "author": "John Wooden"
    },
    {
        "quote": "People throw insults at you, and sometimes they hit a nerve - and it about not showing that, because they will pick on that. Don't feed the trolls.",
        "author": "Maisie Williams"
    },
    {
        "quote": "Sometimes life hits you in the head with a brick. Don't lose faith.",
        "author": "Steve Jobs"
    },
    {
        "quote": "There are no great limits to growth because there are no limits of human intelligence, imagination, and wonder",
        "author": "Ronald Reagan"
    },
    {
        "quote": "We are never defeated unless we give up on God",
        "author": "Ronald Reagan"
    },
    {
        "quote": "When you can't make them see the light, make them see the heat",
        "author": "Ronald Reagan"
    },
    {
        "quote": "The future doesn't belong to the fainthearted, it belongs to the brave",
        "author": "Ronald Reagan"
    },
    {
        "quote": "We should live, act, and say nothing to the injury of anyone. It is not only best as a matter of principle, but it is the path to peace and honor",
        "author": "R.E. Lee"
    },
    {
        "quote": "We must expect reverses, even defeats. They are sent ot teach us wisdom and prudence, to call forth greater energies, and to prevent our falling into greater disasters",
        "author": "R.E. Lee"
    },

    // {
    //     "quote": "",
    //     "author": ""
    // }
]

export default quotes;
const temas = [
    {
        id: 1,
        name: "Present Simple",
    },
    {
        id: 2,
        name: "Present Continuous",
    },
    {
        id: 3,
        name: "Past Simple",
    },
    {
        id: 4,
        name: "Past Continuous",
    },
    {
        id: 5,
        name: "Future Simple",
    },
    {
        id: 6,
        name: "Future Continuous",
    }
];

const text =`   
VISTA DEL PAST SIMPLE

The formation of past simple for regular verbs, which involves adding "-ed" to the 
end of the infinitive of the verb. For example: "play" becomes "played", "walk" becomes 
"walked", etc.
Irregular verbs in past simple, which do not follow the general rules and need 
to be memorized. For example: "go" becomes "went", "do" becomes "did", etc.
The use of "did" in negative and interrogative sentences, followed by the base 
infinitive of the verb. For example: "did not play", "did you walk?", etc.

EXAMPLES

I:
Positive: I visited my grandmother yesterday.
Negative: I did not visit my grandmother yesterday.
Interrogative: Did I visit my grandmother yesterday?

You:
Positive: You went to the store earlier.
Negative: You did not go to the store earlier.
Interrogative: Did you go to the store earlier?

He/She/It:
Positive: He ate dinner at home last night.
Negative: He did not eat dinner at home last night.
Interrogative: Did he eat dinner at home last night?

We:
Positive: We studied for the test all weekend.
Negative: We did not study for the test all weekend.
Interrogative: Did we study for the test all weekend?

They:
Positive: They played soccer in the park this morning.
Negative: They did not play soccer in the park this morning.
Interrogative: Did they play soccer in the park this morning?


`

const temasd = [
    {
        id: 1,
        title: "Present Simple",
        formation: `For regular verbs, "-s" is added to the third person singular (he, she, it). Example: "She works."
        For irregular verbs, the third person singular has a special form. Example: "He has."`,
        uses: [
            {
                title: "Habitual actions",
                description: `It is used to talk about actions that happen regularly or habits."`,
                Example: "I eat breakfast every day.",

            },
            {
                title: "General truths",
                description: `It is used to talk about universal truths or scientific facts.`,
                Example: "Water boils at 100 degrees Celsius.",
            },
            {
                title: "Schedules and programs",
                description: `It is used to talk about schedules, programs, calendars, and appointments.`,
                Example: "The train departs at 7 p.m.",
            },
            {
                title: "State verbs",
                description: `It is used with state verbs such as "be," "believe," "like," "love," "hate," "prefer," among others.`,
                Example: "She is a teacher.",
            }
        ],

        Sentencestructure: [
            {
                title: "Affirmative form",
                description: `Subject + Verb in base form (+ "-s" in third person singular). `,
                Example: "I work.",
            },
            {
                title: "Negative form",
                description: `Subject + Do/Does + Not + Verb in base form.`,
                Example: "He does not like coffee.",
            },
            {
                title: "Interrogative form",
                description: `Do/Does + Subject + Verb in base form?`,
                Example: "Do you speak English?",
            }
        ],

        Examples: [
            {
                title: "Subject: I",
                afirmative: "I eat an apple.",
                negative: "I do not eat candy.",
                interogative: "Do I like ice cream?",
            },
            {
                title: "Subject: You",
                afirmative: "You play soccer.",
                negative: "You do not watch TV.",
                interogative: "Do you have a pet?",
            },
            {
                title: "Subject: He",
                afirmative: "He reads a book.",
                negative: "He does not like spinach.",
                interogative: "Does he speak English?",
            },
            {
                title: "Subject: She",
                afirmative: "She dances salsa.",
                negative: "She does not drink coffee.",
                interogative: "Does she live in New York?",
            },
            {
                title: "Subject: It",
                afirmative: "It rains in the morning.",
                negative: "It does not snow in summer.",
                interogative: "Does it work properly?",
            },
            {
                title: "Subject: We",
                afirmative: "We play guitar.",
                negative: "We do not eat meat.",
                interogative: "Do we have a meeting tomorrow?",
            },
            {
                title: "Subject: They",
                afirmative: "They study English.",
                negative: "They do not like spicy food.",
                interogative: "Do they live in the same city?",
            },
        ],
    },
    {
        id: 2,
        title: "Present Continuous",

        formation: `The Present Continuous is used to talk about actions that are happening in the 
        present moment, i.e., actions that are occurring at the time of speaking or actions 
        that are in progress during a specific time period. It is formed using the verb "to be" 
        in the present simple followed by the gerund of the main verb.`,

        uses: null,

        Sentencestructure: [
            {
                title: "Affirmative form",
                description: `Subject + "am/is/are" + gerund of verb `,
                Example: "I am taking a shower.",
            },
            {
                title: "Negative form",
                description: `Subject + "am not/is not/are not" + gerund of verb`,
                Example: "He is not seeing a movie.",
            },
            {
                title: "Interrogative form",
                description: `"Am/Is/Are" + subject + gerund of verb + "?"`,
                Example: "Are you working tomorrow?",
            }
        ],

        Examples: [
            {
                title: "Subject: I",
                afirmative: "I am reading a book.",
                negative: "I am not reading a book.",
                interogative: "Am I reading a book?",
            },
            {
                title: "Subject: You",
                afirmative: "You are playing soccer.",
                negative: "You are not playing soccer.",
                interogative: "Are you playing soccer?",
            },
            {
                title: "Subject: He/she/it",
                afirmative: "He/she is studying for an exam.",
                negative: "He/she is not studying for an exam.",
                interogative: "Is/she he studying for an exam?",
            },
            {
                title: "Subject: We",
                afirmative: "We are watching a movie.",
                negative: "We are not watching a movie.",
                interogative: "Are we watching a movie?",
            },
            {
                title: "Subject: They",
                afirmative: "They are traveling to Europe.",
                negative: "They are not traveling to Europe.",
                interogative: "Are they traveling to Europe?",
            },
        ],
    },
    {
        id: 3,
        title: "PAST SIMPLE",

        formation: `The formation of past simple for regular verbs, which involves adding "-ed" to the 
        end of the infinitive of the verb. For example: "play" becomes "played", "walk" becomes 
        "walked", etc.
        Irregular verbs in past simple, which do not follow the general rules and need 
        to be memorized. For example: "go" becomes "went", "do" becomes "did", etc.
        The use of "did" in negative and interrogative sentences, followed by the base 
        infinitive of the verb. For example: "did not play", "did you walk?", etc.
        `,

        uses: null,

        Sentencestructure: null,

        Examples: [
            {
                title: "Subject: I",
                afirmative: "I visited my grandmother yesterday.",
                negative: "I did not visit my grandmother yesterday.",
                interogative: "Did I visit my grandmother yesterday?",
            },
            {
                title: "Subject: You",
                afirmative: "You went to the store earlier",
                negative: "You did not go to the store earlier.",
                interogative: "Did you go to the store earlier?",
            },
            {
                title: "Subject: He/she/it",
                afirmative: ": He ate dinner at home last night.",
                negative: "He did not eat dinner at home last night.",
                interogative: "Did he eat dinner at home last night?",
            },
            {
                title: "Subject: We",
                afirmative: "We studied for the test all weekend.",
                negative: "We did not study for the test all weekend.",
                interogative: "Did we study for the test all weekend?",
            },
            {
                title: "Subject: They",
                afirmative: "They played soccer in the park this morning.",
                negative: "They did not play soccer in the park this morning.",
                interogative: "Did they play soccer in the park this morning?",
            },
        ],
    },
    {
        id: 4,
        title: "Past continuous",

        formation: `
        To use the past continuous, you need to understand how it is formed and when this tense is used 
        in English. The past continuous is formed with the auxiliary verb "was" or "were" followed by the 
        main verb in its gerund form (-ing), and it is used to describe actions or situations in progress 
        at a specific moment in the past.
        
        "Was" and "were" are forms of the auxiliary verb "to be" in the past, and they are used in the 
        past continuous to form affirmative, negative, and interrogative sentences.
        
        "Was" is used with the first person singular (I) and the third person singular (he, she, it).
        Example:
        
        I was studying for my exams yesterday.
        She was reading a book when the phone rang.
        
        "Were" is used with the second person singular (you) and all persons of the plural (we, they).
        Example:
        
        You were playing guitar at the party last night.
        We were watching a movie when it started raining.
        
        It is important to remember that "was" is used with singular subjects, while "were" is used with plural subjects.
         Also, both "was" and "were" are used only in the past and always accompanied by the main verb in its
         gerund form (-ing) to form the past continuous.`,

        uses: null,

        Sentencestructure: null,

        Examples: [
            {
                title: "Subject: I",
                afirmative: "I was studying for my exam yesterday.",
                negative: "I wasn't watching TV at 8 p.m. last night.",
                interogative: "Was I sleeping when you called me?",
            },
            {
                title: "Subject: You",
                afirmative: "You were playing basketball with your friends earlier.",
                negative: "You weren't listening to music during the meeting.",
                interogative: "Were you cooking dinner when the power went out?",
            },
            {
                title: "Subject: He",
                afirmative: "He was working late at the office yesterday.",
                negative: "He wasn't watching TV when I called him.",
                interogative: "Was he playing soccer in the park this morning?",
            },
            {
                title: "Subject: She",
                afirmative: "She was reading a book in the library.",
                negative: "She wasn't eating dinner when I saw her.",
                interogative: "Was she watching a movie at home last night?",
            },
            {
                title: "Subject: It",
                afirmative: "It was raining all day yesterday.",
                negative: "It wasn't snowing during our trip.",
                interogative: "Was it windy at the beach this morning?",
            },
            {
                title: "Subject: We",
                afirmative: "We were traveling to Paris last week.",
                negative: "We weren't watching TV when the storm started.",
                interogative: "Were we studying for the exam together?",
            },
            {
                title: "Subject: They",
                afirmative: "They were playing soccer in the park.",
                negative: "They weren't attending the meeting yesterday.",
                interogative: "Were they dancing at the party last night?",
            },
        ],
    },
    {
        id: 5,
        title: "future simple",

        formation: `Definition: The future simple is a verb tense used to talk about actions that will happen in the future,
        i.e., actions that will occur after the present moment. It is formed using the auxiliary verb "will"
        followed by the base form of the verb without conjugation.
        
        Use: The future simple is used to express future actions that are not planned or that are predicted
        based on a present situation. It is used to make predictions, talk about future plans or intentions, 
        offer or make promises.
        
        Formation:
        
        Affirmative: Subject + will + base form of verb (example: I will travel.)
        Negative: Subject + will not (or the contracted form "won't") + base form of verb (example: They will not/won't come.)
        Interrogative: Will + subject + base form of verb (example: Will you call me?)
        
        Examples:
        I will meet you at the airport tomorrow.
        She won't be able to attend the meeting.
        Will they come to the party tonight?
        
        Note: It is also common to use "going to" to talk about future plans and actions that 
        are already planned or have present evidence, while "will" is used more for predictions or 
        spontaneous decisions.
        `,

        uses: null,

        Sentencestructure: null,

        Examples: [
            {
                title: "Subject: I",
                afirmative: "I will travel to Spain next month.",
                negative: "I will not (won't) forget to bring my passport.",
                interogative: "Will I see you at the party tonight?",
            },
            {
                title: "Subject: You",
                afirmative: "You will pass the exam if you study hard.",
                negative: "You will not (won't) be late for the meeting.",
                interogative: "Will you come to the concert with me?",
            },
            {
                title: "Subject: He",
                afirmative: "He will finish his work before leaving.",
                negative: "He will not (won't) attend the conference due to a scheduling conflict.",
                interogative: "Will he call you later?",
            },
            {
                title: "Subject: She",
                afirmative: "She will go to the store to buy groceries.",
                negative: "She will not (won't) forget to pick up the dry cleaning.",
                interogative: "Will she join us for dinner?",
            },
            {
                title: "Subject: It",
                afirmative: "It will rain tomorrow.",
                negative: "It will not (won't) snow in this region.",
                interogative: "Will it be hot at the beach tomorrow?",
            },
            {
                title: "Subject: We",
                afirmative: "We will celebrate our anniversary at a fancy restaurant.",
                negative: "We will not (won't) forget to bring a gift for the host.",
                interogative: "Will we need to RSVP for the event?",
            },
            {
                title: "Subject: They",
                afirmative: "They will travel to Europe next summer.",
                negative: "They will not (won't) be able to attend the meeting due to a conflicting appointment.",
                interogative: "Will they bring snacks for the picnic?",
            },
        ],
    },
    {
        id: 6,
        title: "Future continuous",

        formation: `The Future Continuous is formed using the auxiliary verb "will" followed 
        by the verb "be" in its present form, and then the main verb in its gerund form (verb + "-ing"). 
        For example
        
        Affirmative form: Subject + will + be + verb in gerund.
        Negative form: Subject + will + not + be + verb in gerund.
        Interrogative form: Will + subject + be + verb in gerund.
        
        Use of the Future Continuous: It is used to talk about actions that will be in progress 
        at a specific future moment. It is generally used to describe an action that will occur in 
        the future and will be in progress at that moment. For example:
        
        "This time next week, I will be studying for my exams."
        
        Time references: The Future Continuous is often used with time expressions that indicate 
        specific moments in the future, such as "this time next week", "tomorrow at 8 PM", or 
        "next month", to indicate when the action will be in progress.
        
        Sense of temporality: The Future Continuous emphasizes the temporality and duration 
        of a future action in progress, i.e., an action that will be occurring during a specific 
        period of time in the future.
        
        Other uses: The Future Continuous can also be used to make predictions about the future 
        or to make educated guesses about future situations.`,

        uses: null,

        Sentencestructure: null,

        Examples: [
            {
                title: "Subject: I",
                afirmative: "I will be studying for my exams tomorrow.",
                negative: ": I will not be studying for my exams tomorrow. (or I won't be studying for my exams tomorrow.)",
                interogative: ": Will I be studying for my exams tomorrow?",
            },
            {
                title: "Subject: You",
                afirmative: ": You will be going to the party later.",
                negative: "You will not be going to the party later. (or You won't be going to the party later.)",
                interogative: ": Will you be going to the party later?",
            },
            {
                title: "Subject: He/she/it",
                afirmative: "He will be working on the project all night.",
                negative: "He will not be working on the project all night. (or He won't be working on the project all night.)",
                interogative: "Will he be working on the project all night?",
            },
            {
                title: "Subject: We",
                afirmative: "We will be traveling to Europe next month.",
                negative: "We will not be traveling to Europe next month. (or We won't be traveling to Europe next month.)",
                interogative: "Will we be traveling to Europe next month?",
            },
            {
                title: "Subject: They",
                afirmative: "They will be having a meeting in the morning.",
                negative: "They will not be having a meeting in the morning. (or They won't be having a meeting in the morning.)",
                interogative: "Will they be having a meeting in the morning?",
            },
        ],
    },
];

const Quizz =  [
    
        {
            id: 0,
            title: "Present Simple",
            preguntas: [
        {
            id: 1,
            question: "Does he _____ to the gym every day?",
            answers: [ 
                "go",
                "goes",
                "going",
                "went"
            ],
            correct: 0,
        },
        {
            id: 2,
            question: "How many siblings does she _____?",
            answers: [
                "has",
                "have",
                "had",
                "having"
            ],
            correct: 1,
            },
        {
            id: 3,
            question: "Can you _____ me the book from the shelf?",
            answers: [
                "get",
                "gets",
                "getting",
                "got"
            ],
            correct: 0,
            },
        {
            id: 4,
            question: "What time does the last train _____?",   
            answers: [
                "leave",
                "leaves",
                "leaving",
                "left"
            ],
            correct: 1,
            },
        {
            id: 5,
            question: "Would you like _____ a cup of tea?",
            answers: [
                "have",
                "has",
                "having",
                "had"
            ],
            correct: 0,
        },
        {
            id: 6,
            question: "Where does your best friend _____?",
            answers: [
                "live",
                "lives",
                "lived",
                "living"
            ],
            correct: 1,
        },
        {
            id: 7,
            question: "What do you usually _____ on weekends?",
            answers: [
                "do",
                "does",
                "doing",
                "did"
            ],
            correct: 0,
        },
        {
            id: 8,
            question: "Do you know where the nearest post office _____?",
            answers: [
                "locate",
                "locates",
                "located",
                "locating"
            ],
            correct: 2,
        },
        {
            id: 9,
            question: "What did she _____ when you last saw her?",
            answers: [
                "says",
                "saying",
                "say",
                "said"
            ],
            correct: 3,
        },
        {
            id: 10,
            question: "How often do you _____ to the beach?",
            answers: [
                "go",
                "goes",
                "going",
                "went"
            ],
            correct: 0,
        },
    ],

    },
    {
        id: 1,
        title: "Present continuous",
        preguntas: [
    {
        id: 1,
        question: "What are you doing? I'm _____ a shower.",
        answers: [ 
            "taking",
            "seeing",
            "wanting",
            "using"
        ],
        correct: 0,
    },
    {
        id: 2,
        question: "Look! They _____ a movie at the theater.",
        answers: [
            "are taking",
            "seeing",
            "wanting",
            "using"
        ],
        correct: 1,
        },
    {
        id: 3,
        question: "She _____ to go to the park later.",
        answers: [
            "taking",
            "seeing",
            "wanting",
            "using"
        ],
        correct: 2,
        },
    {
        id: 4,
        question: "We _____ a new recipe for dinner tonight.",   
        answers: [
            "taking",
            "seeing",
            "wanting",
            "using"
        ],
        correct: 3,
        },
    {
        id: 5,
        question: "I can't find my keys. I think I _____ them.",
        answers: [
            "taking",
            "seeing",
            "wanting",
            "finding"
        ],
        correct: 3,
    },
    {
        id: 6,
        question: "They _____ their old clothes to charity.",
        answers: [
            "taking",
            "seeing",
            "giving",
            "using"
        ],
        correct: 2,
    },
    {
        id: 7,
        question: "He is _____ a story about his trip to Europe.",
        answers: [
            "taking",
            "seeing",
            "wanting",
            "telling"
        ],
        correct: 3,
    },
    {
        id: 8,
        question: "The team _____ on a new project at the moment.",
        answers: [
            "taking",
            "seeing",
            "wanting",
            "working"
        ],
        correct: 3,
    },
    {
        id: 9,
        question: "She _____ her friend later for dinner.",
        answers: [
            "taking",
            "seeing",
            "wanting",
            "calling"
        ],
        correct: 3,
    },
    {
        id: 10,
        question: "He _____ to fix the computer issue.",
        answers: [
            "taking",
            "seeing",
            "wanting",
            "trying"
        ],
        correct: 3,
    },
],

},
{
    id: 2,
    title: "Past Simple",
    preguntas: [
{
    id: 1,
    question: "1.	She _____ a new dress for the party.",
    answers: [ 
        "needed",
        "need",
        "needing",
        "needs"
    ],
    correct: 0,
},
{
    id: 2,
    question: "2.	We _____ a great time at the beach yesterday",
    answers: [
        "feels",
        "felt",
        "feel",
        "feeling"
    ],
    correct: 1,
    },
{
    id: 3,
    question: "3.	He _____ a famous actor after years of hard work.",
    answers: [
        "becomes",
        "became",
        "become",
        "becoming"
    ],
    correct: 1,
    },
{
    id: 4,
    question: "4.	They _____ early this morning for their flight.",   
    answers: [
        "leaves",
        "left",
        "leave",
        "leaving"
    ],
    correct: 1,
    },
{
    id: 5,
    question: "5.	She _____ the keys on the kitchen counter.",
    answers: [
        "put",
        "putting",
        "puts",
        "putted"
    ],
    correct: 0,
},
{
    id: 6,
    question: "6.	I didn't understand what he _____ by his cryptic message.",
    answers: [
        "means",
        "mean",
        "meaning",
        "meant"
    ],
    correct: 3,
},
{
    id: 7,
    question: "7.	He always _____ his promises.",
    answers: [
        "keeps",
        "kept",
        "keeping",
        "keeped"
    ],
    correct: 0,
},
{
    id: 8,
    question: "8.	She _____ me borrow her car for the weekend.",
    answers: [
        "let",
        "letting",
        "lets",
        "letted"
    ],
    correct: 0,
},
{
    id: 9,
    question: "9.	We _____ the project last week.",
    answers: [
        "begins",
        "begin",
        "began",
        "beginning"
    ],
    correct: 2,
},
{
    id: 10,
    question: "10.	It _____ like a good idea at the time.",
    answers: [
        "seems",
        "seem",
        "seeming",
        "seemed"
    ],
    correct: 3,
},
],

},
{
    id: 3,
    title: "Past Continuous",
    preguntas: [
{
    id: 1,
    question: "1.	She was _______ to her friend on the phone when I saw her",
    answers: [ 
        "helping",
        "helped",
        "helps",
        "help"
    ],
    correct: 0,
},
{
    id: 2,
    question: "2.	They were _______ basketball at the park yesterday.",
    answers: [
        "talk",
        "talking",
        "talked",
        "talks"
    ],
    correct: 1,
    },
{
    id: 3,
    question: "3.	We were _______ the TV channel when the power went out.",
    answers: [
        "turning",
        "turned",
        "turn",
        "turns"
    ],
    correct: 0,
    },
{
    id: 4,
    question: "4.	He was _______ a new project at work last week.",   
    answers: [
        "starting",
        "started",
        "starts",
        "start"
    ],
    correct: 0,
    },
{
    id: 5,
    question: "5.	She was _______ her latest artwork at the art gallery.",
    answers: [
        "showing",
        "showed",
        "shows",
        "show"
    ],
    correct: 0,
},
{
    id: 6,
    question: "6.	I was _______ music from my favorite band on the radio.",
    answers: [
        "hearing",
        "heard",
        "hears",
        "hear"
    ],
    correct: 0,
},
{
    id: 7,
    question: "7.	They were _______ soccer in the park when it started raining.",
    answers: [
        "playing",
        "played",
        "plays",
        "play"
    ],
    correct: 0,
},
{
    id: 8,
    question: "8.	He was _______ in the marathon last Sunday.",
    answers: [
        "running",
        "ran",
        "runs",
        "run"
    ],
    correct: 0,
},
{
    id: 9,
    question: "9.	She was _______ to a new apartment downtown.",
    answers: [
        "moving",
        "moved",
        "moves",
        "move"
    ],
    correct: 0,
},
{
    id: 10,
    question: "10.	I was _______ the taste of the new dish at the restaurant.",
    answers: [
        "liking",
        "liked",
        "likes",
        "like"
    ],
    correct: 0,
},
],

},
{
    id: 4,
    title: "Future Simple",
    preguntas: [
{
    id: 1,
    question: "1.	What will she do after finishing her homework?",
    answers: [ 
        "live",
        "believe",
        "hold",
        "do"
    ],
    correct: 3,
},
{
    id: 2,
    question: "2.	He is confident that he will pass the exam.",
    answers: [
        "hold",
        "do",
        "call",
        "work"
    ],
    correct: 1,
    },
{
    id: 3,
    question: "3.	When will they take their vacation this year?",
    answers: [
        "live",
        "believe",
        "hold",
        "take"
    ],
    correct: 3,
    },
{
    id: 4,
    question: "4.	She promises to help her friend with the move.",   
    answers: [
        "use",
        "take",
        "call",
        "help"
    ],
    correct: 3,
    },
{
    id: 5,
    question: "5.	We are going to talk to the manager about the project.",
    answers: [
        "live",
        "take",
        "call",
        "help"
    ],
    correct: 2,
},
{
    id: 6,
    question: "6.	Will he use his laptop for the presentation?",
    answers: [
        "do",
        "use",
        "call",
        "work"
    ],
    correct: 1,
},
{
    id: 7,
    question: "7.	They will work overtime to meet the deadline.",
    answers: [
        "believe",
        "take",
        "help",
        "work"
    ],
    correct: 3,
},
{
    id: 8,
    question: "8.	She plans to hold a charity event next month.",
    answers: [
        "live",
        "believe",
        "hold",
        "take"
    ],
    correct: 2,
},
{
    id: 9,
    question: "9.	What will you call the new product?",
    answers: [
        "use",
        "do",
        "talk",
        "call"
    ],
    correct: 3,
},
{
    id: 10,
    question: "10.	He will live in a different city after graduation.",
    answers: [
        "take",
        "do",
        "call",
        "live"
    ],
    correct: 3,
},
],

},
{
    id: 5,
    title: "Future continuous",
    preguntas: [
{
    id: 1,
    question: "How is the future continuous tense of the verb become conjugated in third person plural (they)?",
    answers: [ 
        "They will be become.",
        "They will be becoming.",
        "They will becoming."
    ],
    correct: 1,
},
{
    id: 2,
    question: "How is the future continuous tense of the verb leave conjugated in second person singular (you)?",
    answers: [
        "You will leave.",
        "You will be leaving.",
        "You leaving."
    ],
    correct: 1,
    },
{
    id: 3,
    question: "How is the future continuous tense of the verb keep conjugated in third person singular (he/she/it)?",
    answers: [
        "He/she/it will be keeping.",
        "He/she/it will keep.",
        "He/she/it will keeping."
    ],
    correct: 0,
    },
{
    id: 4,
    question: "How is the future continuous tense of the verb talk conjugated in first person plural (we)?",   
    answers: [
        "We will be talking.",
        "We will talk.",
        "We will talking."
    ],
    correct: 0,
    },
{
    id: 5,
    question: "How is the future continuous tense of the verb play conjugated in third person singular (he/she/it)?",
    answers: [
        "He/she/it will play.",
        "He/she/it will be playing.",
        "He/she/it will playing.",
        ""
    ],
    correct: 1,
},
{
    id: 6,
    question: "How is the future continuous tense of the verb move conjugated in second person plural (you all)?",
    answers: [
        "You all will move.",
        "You all will be move.",
        "You all will be moving."
    ],
    correct: 2,
},
{
    id: 7,
    question: "How is the future continuous tense of the verb like conjugated in first person singular (I)?",
    answers: [
        "I will like.",
        "I will be liking.",
        "I will liking."
    ],
    correct: 1,
},
{
    id: 8,
    question: "How is the future continuous tense of the verb hold conjugated in third person plural (they)?",
    answers: [
        "They will hold.",
        "They will be hold.",
        "They will be holding."
    ],
    correct: 2,
},
{
    id: 9,
    question: "How is the future continuous tense of the verb run conjugated in first person plural (we)?",
    answers: [
        "We will run.",
        "We will be run.",
        "We will be running."
    ],
    correct: 2,
},
{
    id: 10,
    question: "How is the future continuous tense of the verb help conjugated in second person singular (you)?",
    answers: [
        "You will help.",
        "You will be helping.",
        "You helping."
    ],
    correct: 1,
},
],

},

]


export default temas;
export {temasd};
export {Quizz};
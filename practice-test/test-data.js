// YDS Practice Test Data - Full 80 Question Exam
const practiceTest = {
    info: {
        title: "YDS Practice Exam 1",
        description: "Full length standard YDS exam",
        duration: 180, // minutes
        totalQuestions: 80
    },
    sections: [
        {
            id: "vocabulary",
            title: "Vocabulary",
            questionCount: 6,
            startQuestion: 1,
            endQuestion: 6,
            description: "Choose the correct word to complete the sentence."
        },
        {
            id: "grammar",
            title: "Grammar",
            questionCount: 10,
            startQuestion: 7,
            endQuestion: 16,
            description: "Choose the correct grammatical structure."
        },
        {
            id: "cloze",
            title: "Cloze Test",
            questionCount: 10,
            startQuestion: 17,
            endQuestion: 26,
            description: "Read the text and choose the correct answer for each blank."
        },
        {
            id: "sentence_completion",
            title: "Sentence Completion",
            questionCount: 10,
            startQuestion: 27,
            endQuestion: 36,
            description: "Choose the option that best completes the sentence."
        },
        {
            id: "translation",
            title: "Translation",
            questionCount: 6,
            startQuestion: 37,
            endQuestion: 42,
            description: "Choose the correct translation."
        },
        {
            id: "reading",
            title: "Reading Comprehension",
            questionCount: 20,
            startQuestion: 43,
            endQuestion: 62,
            description: "Read the passages and answer the questions."
        },
        {
            id: "dialogue",
            title: "Dialogue Completion",
            questionCount: 5,
            startQuestion: 63,
            endQuestion: 67,
            description: "Choose the option that best completes the dialogue."
        },
        {
            id: "restatement",
            title: "Restatement",
            questionCount: 4,
            startQuestion: 68,
            endQuestion: 71,
            description: "Choose the sentence with the closest meaning."
        },
        {
            id: "paragraph_completion",
            title: "Paragraph Completion",
            questionCount: 4,
            startQuestion: 72,
            endQuestion: 75,
            description: "Choose the sentence that best completes the paragraph."
        },
        {
            id: "irrelevant",
            title: "Irrelevant Sentence",
            questionCount: 5,
            startQuestion: 76,
            endQuestion: 80,
            description: "Find the sentence that disrupts the flow."
        }
    ],
    questions: [
        // 1-6 Vocabulary
        {
            id: 1,
            type: "vocabulary",
            question: "The government has implemented new policies to _______ the economic recovery after the crisis.",
            options: ["A) accelerate", "B) abandon", "C) decline", "D) frustrate", "E) ignore"],
            correct: "A"
        },
        {
            id: 2,
            type: "vocabulary",
            question: "The scientist made a _______ discovery that changed the way we understand the universe.",
            options: ["A) redundant", "B) significant", "C) trivial", "D) vague", "E) worthless"],
            correct: "B"
        },
        {
            id: 3,
            type: "vocabulary",
            question: "Climate change is likely to _______ the frequency and intensity of extreme weather events.",
            options: ["A) diminish", "B) enhance", "C) obscure", "D) prevent", "E) withdraw"],
            correct: "B"
        },
        {
            id: 4,
            type: "vocabulary",
            question: "It is essential to _______ ample resources to the education sector to ensure future prosperity.",
            options: ["A) allocate", "B) confiscate", "C) deplete", "D) revoke", "E) squander"],
            correct: "A"
        },
        {
            id: 5,
            type: "vocabulary",
            question: "The two companies entered into a _______ agreement that benefited both parties equally.",
            options: ["A) biased", "B) hostile", "C) mutual", "D) one-sided", "E) restricted"],
            correct: "C"
        },
        {
            id: 6,
            type: "vocabulary",
            question: "Despite the initial difficulties, the team managed to _______ all obstacles and complete the project.",
            options: ["A) concede", "B) exaggerate", "C) overcome", "D) surrender", "E) yield"],
            correct: "C"
        },

        // 7-16 Grammar
        {
            id: 7,
            type: "grammar",
            question: "By the time the guests _______, we _______ all the preparations.",
            options: ["A) arrived / had finished", "B) arrive / will have finished", "C) arrived / have finished", "D) arrive / checked", "E) are arriving / finish"],
            correct: "B"
        },
        {
            id: 8,
            type: "grammar",
            question: "If she _______ harder, she _______ the exam with a much higher score.",
            options: ["A) studies / would pass", "B) studied / will pass", "C) had studied / would have passed", "D) studies / would have passed", "E) has studied / passed"],
            correct: "C"
        },
        {
            id: 9,
            type: "grammar",
            question: "It is generally believed _______ regular exercise is beneficial for health.",
            options: ["A) which", "B) that", "C) where", "D) whose", "E) whom"],
            correct: "B"
        },
        {
            id: 10,
            type: "grammar",
            question: "_______ the heavy rain, the football match was not cancelled.",
            options: ["A) Although", "B) Much as", "C) Despite", "D) However", "E) Unless"],
            correct: "C"
        },
        {
            id: 11,
            type: "grammar",
            question: "I remember _______ the door before I left, but I can't find my keys now.",
            options: ["A) locking", "B) to lock", "C) lock", "D) to be locked", "E) being locked"],
            correct: "A"
        },
        {
            id: 12,
            type: "grammar",
            question: "This is the restaurant _______ we had our first dinner together.",
            options: ["A) which", "B) that", "C) where", "D) when", "E) whose"],
            correct: "C"
        },
        {
            id: 13,
            type: "grammar",
            question: "The new bridge _______ by the end of next year.",
            options: ["A) will complete", "B) is completing", "C) will be completed", "D) has completed", "E) was completed"],
            correct: "C"
        },
        {
            id: 14,
            type: "grammar",
            question: "No sooner _______ the house than it started to rain heavily.",
            options: ["A) I had left", "B) has I left", "C) had I left", "D) I left", "E) was I leaving"],
            correct: "C"
        },
        {
            id: 15,
            type: "grammar",
            question: "He is _______ a talented musician _______ he can play five instruments.",
            options: ["A) so / that", "B) such / that", "C) as / as", "D) more / than", "E) too / to"],
            correct: "B"
        },
        {
            id: 16,
            type: "grammar",
            question: "_______ having little money, they are very happy.",
            options: ["A) In spite", "B) Since", "C) Therefore", "D) In addition to", "E) Due to"],
            correct: "A"
        },

        // 17-26 Cloze Test (2 passages, 5 questions each)
        // Passage 1
        {
            id: 17,
            type: "cloze",
            passage: "Coffee is one of the most popular beverages in the world. (17)_______ its stimulating effect, it helps people stay awake and alert. It is produced from the seeds of the Coffea plant. The two most commercially important species (18)_______ Coffea arabica and Coffea canephora (robusta). Coffee plants are cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, India, and Africa. After the berries (19)_______ picked, they are processed to extract the beans. These beans are then roasted to various degrees, (20)_______ on the desired flavor using diffent methods. Coffee is slightly acidic and can have a stimulating effect on humans because of its caffeine content. It is one of the most (21)_______ traded agricultural commodities in the world.",
            question: "Select the correct option for (17)",
            options: ["A) Despite", "B) Due to", "C) Unlike", "D) Similar to", "E) In case of"],
            correct: "B"
        },
        {
            id: 18,
            type: "cloze",
            passage: "Coffee is one of the most popular beverages in the world. (17)_______ its stimulating effect, it helps people stay awake and alert. It is produced from the seeds of the Coffea plant. The two most commercially important species (18)_______ Coffea arabica and Coffea canephora (robusta). Coffee plants are cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, India, and Africa. After the berries (19)_______ picked, they are processed to extract the beans. These beans are then roasted to various degrees, (20)_______ on the desired flavor using diffent methods. Coffee is slightly acidic and can have a stimulating effect on humans because of its caffeine content. It is one of the most (21)_______ traded agricultural commodities in the world.",
            question: "Select the correct option for (18)",
            options: ["A) are", "B) was", "C) have been", "D) had been", "E) will be"],
            correct: "A"
        },
        {
            id: 19,
            type: "cloze",
            passage: "Coffee is one of the most popular beverages in the world. (17)_______ its stimulating effect, it helps people stay awake and alert. It is produced from the seeds of the Coffea plant. The two most commercially important species (18)_______ Coffea arabica and Coffea canephora (robusta). Coffee plants are cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, India, and Africa. After the berries (19)_______ picked, they are processed to extract the beans. These beans are then roasted to various degrees, (20)_______ on the desired flavor using diffent methods. Coffee is slightly acidic and can have a stimulating effect on humans because of its caffeine content. It is one of the most (21)_______ traded agricultural commodities in the world.",
            question: "Select the correct option for (19)",
            options: ["A) have", "B) are", "C) were", "D) will be", "E) are being"],
            correct: "B"
        },
        {
            id: 20,
            type: "cloze",
            passage: "Coffee is one of the most popular beverages in the world. (17)_______ its stimulating effect, it helps people stay awake and alert. It is produced from the seeds of the Coffea plant. The two most commercially important species (18)_______ Coffea arabica and Coffea canephora (robusta). Coffee plants are cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, India, and Africa. After the berries (19)_______ picked, they are processed to extract the beans. These beans are then roasted to various degrees, (20)_______ on the desired flavor using diffent methods. Coffee is slightly acidic and can have a stimulating effect on humans because of its caffeine content. It is one of the most (21)_______ traded agricultural commodities in the world.",
            question: "Select the correct option for (20)",
            options: ["A) depend", "B) depended", "C) depending", "D) to depend", "E) depends"],
            correct: "C"
        },
        {
            id: 21,
            type: "cloze",
            passage: "Coffee is one of the most popular beverages in the world. (17)_______ its stimulating effect, it helps people stay awake and alert. It is produced from the seeds of the Coffea plant. The two most commercially important species (18)_______ Coffea arabica and Coffea canephora (robusta). Coffee plants are cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, India, and Africa. After the berries (19)_______ picked, they are processed to extract the beans. These beans are then roasted to various degrees, (20)_______ on the desired flavor using diffent methods. Coffee is slightly acidic and can have a stimulating effect on humans because of its caffeine content. It is one of the most (21)_______ traded agricultural commodities in the world.",
            question: "Select the correct option for (21)",
            options: ["A) widely", "B) hardly", "C) rarely", "D) scarcely", "E) narrowly"],
            correct: "A"
        },
        // Passage 2
        {
            id: 22,
            type: "cloze",
            passage: "Stress is a natural physical and mental reaction to life experiences. Everyone expresses stress (22)_______ time to time. Anything from everyday responsibilities like work and family to serious life events such as a new diagnosis, war, or the death of a loved one can trigger stress. For immediate, short-term situations, stress can be beneficial (23)_______ your health. It can help you cope with potentially serious situations. Your body responds to stress by releasing hormones that increase your heart and breathing rates and ready your muscles to respond. (24)_______, if your stress response doesn't stop firing, and these stress levels stay elevated far longer than is necessary for survival, it can take a toll on your health. Chronic stress is stress that lasts for a longer period of time. You may have chronic stress if you (25)_______ financial problems, an unhappy marriage, or trouble at work. Any type of stress that goes on for weeks or months is chronic stress. You can become so used to chronic stress that you don't realize it is a problem. If you don't find ways to manage stress, it may (26)_______ to health problems.",
            question: "Select the correct option for (22)",
            options: ["A) on", "B) in", "C) from", "D) at", "E) by"],
            correct: "C"
        },
        {
            id: 23,
            type: "cloze",
            passage: "Stress is a natural physical and mental reaction to life experiences. Everyone expresses stress (22)_______ time to time. Anything from everyday responsibilities like work and family to serious life events such as a new diagnosis, war, or the death of a loved one can trigger stress. For immediate, short-term situations, stress can be beneficial (23)_______ your health. It can help you cope with potentially serious situations. Your body responds to stress by releasing hormones that increase your heart and breathing rates and ready your muscles to respond. (24)_______, if your stress response doesn't stop firing, and these stress levels stay elevated far longer than is necessary for survival, it can take a toll on your health. Chronic stress is stress that lasts for a longer period of time. You may have chronic stress if you (25)_______ financial problems, an unhappy marriage, or trouble at work. Any type of stress that goes on for weeks or months is chronic stress. You can become so used to chronic stress that you don't realize it is a problem. If you don't find ways to manage stress, it may (26)_______ to health problems.",
            question: "Select the correct option for (23)",
            options: ["A) for", "B) to", "C) with", "D) about", "E) of"],
            correct: "B"
        },
        {
            id: 24,
            type: "cloze",
            passage: "Stress is a natural physical and mental reaction to life experiences. Everyone expresses stress (22)_______ time to time. Anything from everyday responsibilities like work and family to serious life events such as a new diagnosis, war, or the death of a loved one can trigger stress. For immediate, short-term situations, stress can be beneficial (23)_______ your health. It can help you cope with potentially serious situations. Your body responds to stress by releasing hormones that increase your heart and breathing rates and ready your muscles to respond. (24)_______, if your stress response doesn't stop firing, and these stress levels stay elevated far longer than is necessary for survival, it can take a toll on your health. Chronic stress is stress that lasts for a longer period of time. You may have chronic stress if you (25)_______ financial problems, an unhappy marriage, or trouble at work. Any type of stress that goes on for weeks or months is chronic stress. You can become so used to chronic stress that you don't realize it is a problem. If you don't find ways to manage stress, it may (26)_______ to health problems.",
            question: "Select the correct option for (24)",
            options: ["A) Therefore", "B) However", "C) Moreover", "D) Thus", "E) Otherwise"],
            correct: "B"
        },
        {
            id: 25,
            type: "cloze",
            passage: "Stress is a natural physical and mental reaction to life experiences. Everyone expresses stress (22)_______ time to time. Anything from everyday responsibilities like work and family to serious life events such as a new diagnosis, war, or the death of a loved one can trigger stress. For immediate, short-term situations, stress can be beneficial (23)_______ your health. It can help you cope with potentially serious situations. Your body responds to stress by releasing hormones that increase your heart and breathing rates and ready your muscles to respond. (24)_______, if your stress response doesn't stop firing, and these stress levels stay elevated far longer than is necessary for survival, it can take a toll on your health. Chronic stress is stress that lasts for a longer period of time. You may have chronic stress if you (25)_______ financial problems, an unhappy marriage, or trouble at work. Any type of stress that goes on for weeks or months is chronic stress. You can become so used to chronic stress that you don't realize it is a problem. If you don't find ways to manage stress, it may (26)_______ to health problems.",
            question: "Select the correct option for (25)",
            options: ["A) have", "B) had", "C) are having", "D) have had", "E) will have"],
            correct: "A"
        },
        {
            id: 26,
            type: "cloze",
            passage: "Stress is a natural physical and mental reaction to life experiences. Everyone expresses stress (22)_______ time to time. Anything from everyday responsibilities like work and family to serious life events such as a new diagnosis, war, or the death of a loved one can trigger stress. For immediate, short-term situations, stress can be beneficial (23)_______ your health. It can help you cope with potentially serious situations. Your body responds to stress by releasing hormones that increase your heart and breathing rates and ready your muscles to respond. (24)_______, if your stress response doesn't stop firing, and these stress levels stay elevated far longer than is necessary for survival, it can take a toll on your health. Chronic stress is stress that lasts for a longer period of time. You may have chronic stress if you (25)_______ financial problems, an unhappy marriage, or trouble at work. Any type of stress that goes on for weeks or months is chronic stress. You can become so used to chronic stress that you don't realize it is a problem. If you don't find ways to manage stress, it may (26)_______ to health problems.",
            question: "Select the correct option for (26)",
            options: ["A) result", "B) lead", "C) cause", "D) bring", "E) make"],
            correct: "B"
        },

        // 27-36 Sentence Completion
        {
            id: 27,
            type: "sentence_completion",
            question: "_______, but he also speaks French fluently.",
            options: ["A) Not only does he speak English", "B) He is learning German", "C) Although he is Spanish", "D) Since he lived in France", "E) If he studies hard"],
            correct: "A"
        },
        {
            id: 28,
            type: "sentence_completion",
            question: "The more you practice speaking a language, _______.",
            options: ["A) the less you understand it", "B) the better you will become at it", "C) it is easier to learn", "D) you will forget grammar rules", "E) then you can speak perfectly"],
            correct: "B"
        },
        {
            id: 29,
            type: "sentence_completion",
            question: "Even though the weather was extremely cold, _______.",
            options: ["A) they decided to stay indoors", "B) so they wore heavy coats", "C) they went hiking in the mountains", "D) because it was snowing", "E) the heating system was broken"],
            correct: "C"
        },
        {
            id: 30,
            type: "sentence_completion",
            question: "Scientists are concerned that _______.",
            options: ["A) unless measures are taken immediately", "B) global warming will cause irreversible damage", "C) since the ice caps are melting", "D) in case of a natural disaster", "E) due to technological advancements"],
            correct: "B"
        },
        {
            id: 31,
            type: "sentence_completion",
            question: "_______ that I had to ask for clarification.",
            options: ["A) The explanation was so confusing", "B) Because the topic was simple", "C) Although I understood", "D) It was such a clear speech", "E) Since he spoke slowly"],
            correct: "A"
        },
        {
            id: 32,
            type: "sentence_completion",
            question: "Before you make a final decision, _______.",
            options: ["A) you should have consulted an expert", "B) it is important to consider all alternatives", "C) the results were announced", "D) why didn't you ask me", "E) ignoring the consequences"],
            correct: "B"
        },
        {
            id: 33,
            type: "sentence_completion",
            question: "It is widely agreed that the invention of the internet _______.",
            options: ["A) which changed communication forever", "B) is one of the most significant events in history", "C) having connected the world", "D) although it has some drawbacks", "E) since it provides information"],
            correct: "B"
        },
        {
            id: 34,
            type: "sentence_completion",
            question: "Unlike his brother who keeps his room tidy, _______.",
            options: ["A) his sister is also neat", "B) he never cleans up his mess", "C) their parents are very strict", "D) the room is always clean", "E) he likes organizing things"],
            correct: "B"
        },
        {
            id: 35,
            type: "sentence_completion",
            question: "If the company had invested in new technology earlier, _______.",
            options: ["A) it would have been more competitive now", "B) they will make more profit", "C) bankruptcy is inevitable", "D) the employees are happy", "E) production costs are increasing"],
            correct: "A"
        },
        {
            id: 36,
            type: "sentence_completion",
            question: "Having finished all his assignment, _______.",
            options: ["A) the TV was turned on", "B) he went out with his friends", "C) it was time to sleep", "D) dinner was ready", "E) his mother called him"],
            correct: "B"
        },

        // 37-42 Translation
        {
            id: 37,
            type: "translation",
            question: "Gelişmekte olan ülkelerdeki eğitim standartlarını yükseltmek, ekonomik büyüme için hayati öneme sahiptir.",
            options: [
                "A) Raising education standards in developing countries is of vital importance for economic growth.",
                "B) Developing countries must increase their education standards to achieve economic growth.",
                "C) Economic growth depends on the rise of education standards in developing nations.",
                "D) In order to grow economically, developing countries should raise their education standards.",
                "E) It is vital to increase education standards in developing countries for the sake of economy."
            ],
            correct: "A"
        },
        {
            id: 38,
            type: "translation",
            question: "Teknoloji hayatımızı kolaylaştırsa da, bizi daha hareketsiz bir yaşama sürüklediği gerçeği yadsınamaz.",
            options: [
                "A) Technology makes our lives easier, but it also makes us more inactive.",
                "B) Even though technology makes our lives easier, the fact that it drives us to a more sedentary life cannot be denied.",
                "C) We cannot deny that technology leads to a sedentary life despite making things easier.",
                "D) Life is easier with technology, yet it is undeniable that we are becoming more inactive.",
                "E) The fact that technology leads to inactivity is undeniable, although it facilitates our lives."
            ],
            correct: "B"
        },
        {
            id: 39,
            type: "translation",
            question: "Many specialists agree that a balanced diet is the key to a healthy and long life.",
            options: [
                "A) Birçok uzman, dengeli beslenmenin sağlıklı ve uzun bir yaşamın anahtarı olduğu konusunda hemfikirdir.",
                "B) Bazı uzmanlara göre sağlıklı ve uzun yaşamanın yolu dengeli beslenmekten geçer.",
                "C) Dengeli beslenmenin uzun ve sağlıklı bir yaşam için önemli olduğunu düşünen birçok uzman vardır.",
                "D) Uzmanların çoğu, sağlıklı ve uzun bir yaşam için dengeli beslenmek gerektiğini savunmaktadır.",
                "E) Sağlıklı ve uzun bir hayatın anahtarı dengeli beslenmektir diyen pek çok uzman vardır."
            ],
            correct: "A"
        },
        {
            id: 40,
            type: "translation",
            question: "Unless serious measures are taken to reduce carbon emissions, we will face severe climate consequences.",
            options: [
                "A) Karbon emisyonlarını azaltmak için ciddi önlemler alınmazsa, ağır iklim sonuçlarıyla karşılaşacağız.",
                "B) Ciddi önlemler alınmadığı sürece karbon emisyonları artacak ve iklim değişecektir.",
                "C) İklim sonuçlarıyla karşılaşmamak için karbon emisyonlarını azaltıcı tedbirler almalıyız.",
                "D) Karbon emisyonları düşürülmezse, karşı karşıya kalacağımız iklim sonuçları ağır olacaktır.",
                "E) Eğer ciddi önlemler alınırsa, karbon emisyonları azalır ve iklim sorunları çözülür."
            ],
            correct: "A"
        },
        {
            id: 41,
            type: "translation",
            question: "İnsanlar tarih boyunca doğayı kontrol etmeye çalışmış, ancak çoğu zaman onun gücü karşısında çaresiz kalmışlardır.",
            options: [
                "A) People have tried to control nature throughout history, but they have often been helpless against its power.",
                "B) Throughout history, humans attempted to control nature, yet they remained helpless against its power.",
                "C) Controlling nature has been a goal for people in history, but its power has always defeated them.",
                "D) Humans have always wanted to control nature, but they are helpless against it most of the time.",
                "E) Despite trying to control nature throughout history, people are often helpless against its power."
            ],
            correct: "A"
        },
        {
            id: 42,
            type: "translation",
            question: "The museum, which was renovated last year, attracts thousands of tourists from all over the world.",
            options: [
                "A) Geçen yıl restore edilen müze, dünyanın her yerinden binlerce turist çekiyor.",
                "B) Müze geçen yıl restore edildiğinden beri dünyanın her yerinden turist akınına uğruyor.",
                "C) Dünyanın her yerinden turist çeken müze geçen yıl restore edildi.",
                "D) Geçen yıl restore edilen müzeyi dünyanın her yerinden binlerce turist ziyaret ediyor.",
                "E) Müze restore edildikten sonra dünyanın her yerinden binlerce turist çekmeye başladı."
            ],
            correct: "A"
        },

        // 43-62 Reading Comprehension (4 passages, 5 questions each)
        // Passage 1: The Bee Crisis
        {
            id: 43,
            type: "reading",
            passage: "Bees are essential for the health of people and the planet. Honey and other products have medicinal properties, and the role of bees as pollinators makes them vital for food supplies. One third of the food that we eat depends on pollinating insects. Some of the crops pollinated by bees include apples, berries, cantaloupes, almonds, and broccoli. However, bee populations are declining globally at an alarming rate. This phenomenon, known as Colony Collapse Disorder (CCD), has puzzled scientists for years. While the exact cause is still debated, it is likely a combination of factors including pesticides, habitat loss, climate change, and diseases. Neonicotinoids, a class of insecticides, have been particularly implicated in the decline. They affect the central nervous system of insects, causing paralysis and death. Furthermore, the destruction of wildflowers and natural habitats deprives bees of their food sources. If the decline continues, it could have devastating effects on global agriculture and biodiversity. Protecting bees requires a multi-faceted approach, including banning harmful pesticides and planting bee-friendly flowers.",
            question: "What is the primary reason bees are considered vital for food supplies?",
            options: ["A) They produce honey.", "B) They act as pollinators.", "C) They control other insect populations.", "D) They improve soil quality.", "E) They consume harmful pests."],
            correct: "B"
        },
        {
            id: 44,
            type: "reading",
            passage: "Bees are essential for the health of people and the planet...",
            question: "Which of the following is NOT mentioned as a crop pollinated by bees?",
            options: ["A) Apples", "B) Wheat", "C) Almonds", "D) Broccoli", "E) Berries"],
            correct: "B"
        },
        {
            id: 45,
            type: "reading",
            passage: "Bees are essential for the health of people and the planet...",
            question: "What is Colony Collapse Disorder (CCD)?",
            options: ["A) A disease that affects only queen bees", "B) The sudden increase in bee populations", "C) The global decline in bee populations", "D) A method of bee farming", "E) The migration pattern of bees"],
            correct: "C"
        },
        {
            id: 46,
            type: "reading",
            passage: "Bees are essential for the health of people and the planet...",
            question: "How do neonicotinoids affect bees?",
            options: ["A) They destroy their hives.", "B) They reduce their honey production.", "C) They affect their nervous system.", "D) They make them aggressive.", "E) They change their color."],
            correct: "C"
        },
        {
            id: 47,
            type: "reading",
            passage: "Bees are essential for the health of people and the planet...",
            question: "What is suggested as a solution to protect bees?",
            options: ["A) Using more pesticides", "B) Importing bees from other countries", "C) Banning harmful pesticides", "D) Reducing agriculture", "E) Keeping bees in captivity"],
            correct: "C"
        },

        // Passage 2: The Industrial Revolution
        {
            id: 48,
            type: "reading",
            passage: "The Industrial Revolution, which began in Britain in the late 18th century, was a period of major industrialization and innovation. It marked a shift from agrarian and handicraft economies to ones dominated by industry and machine manufacturing. Key technological developments included the steam engine, the spinning jenny, and the power loom. These inventions significantly increased production efficiency in the textile industry. The revolution also brought about profound social and economic changes. Urbanization accelerated as people moved from rural areas to cities in search of work in factories. While the Industrial Revolution improved standard of living for some, it also resulted in grim employment and living conditions for the poor and working class. Child labor was common, and workers often faced long hours and dangerous environments. Despite these hardships, the Industrial Revolution laid the foundation for the modern economic system and technological advancements we enjoy today.",
            question: "Where did the Industrial Revolution begin?",
            options: ["A) Germany", "B) The United States", "C) France", "D) Britain", "E) China"],
            correct: "D"
        },
        {
            id: 49,
            type: "reading",
            passage: "The Industrial Revolution, which began in Britain...",
            question: "Which invention is NOT mentioned in the text?",
            options: ["A) Steam engine", "B) Spinning jenny", "C) Telephone", "D) Power loom", "E) All are mentioned"],
            correct: "C"
        },
        {
            id: 50,
            type: "reading",
            passage: "The Industrial Revolution, which began in Britain...",
            question: "What was a major social consequence of the Industrial Revolution?",
            options: ["A) Decrease in population", "B) Increased rural living", "C) Urbanization", "D) Improved conditions for all", "E) End of monarchy"],
            correct: "C"
        },
        {
            id: 51,
            type: "reading",
            passage: "The Industrial Revolution, which began in Britain...",
            question: "Which statement is true about the working conditions?",
            options: ["A) They were generally safe and healthy.", "B) Child labor was strictly forbidden.", "C) Workers had short working hours.", "D) Conditions were often dangerous and difficult.", "E) Everyone enjoyed a high standard of living."],
            correct: "D"
        },
        {
            id: 52,
            type: "reading",
            passage: "The Industrial Revolution, which began in Britain...",
            question: "What is the overall impact of the Industrial Revolution mentioned in the text?",
            options: ["A) It destroyed the economy.", "B) It laid the foundation for the modern economy.", "C) It had no lasting effect.", "D) It only benefited the rich.", "E) It caused a return to farming."],
            correct: "B"
        },

        // Passage 3: Psychology of Color
        {
            id: 53,
            type: "reading",
            passage: "Color psychology is the study of how colors affect human behavior and mood. Different colors are believed to evoke different emotional responses. For example, red is often associated with energy, passion, and danger. It can increase heart rate and create a sense of urgency, which is why it is often used in clearance sales. Blue, on the other hand, is considered a calming color. It is associated with trust, security, and peace, making it a popular choice for corporate logos. Yellow is linked to happiness and optimism, but excessive use can cause eye strain. Green is connected to nature and health, often used to promote eco-friendly products. While these associations are common, color perception can also be influenced by cultural and personal experiences. For instance, white represents purity in Western cultures but is associated with mourning in some Eastern cultures. Marketers and designers use color psychology to influence consumer decisions and brand perception.",
            question: "What is color psychology primarily concerned with?",
            options: ["A) How colors are made", "B) The history of art", "C) How colors affect behavior and mood", "D) Color blindness", "E) Mixing paints"],
            correct: "C"
        },
        {
            id: 54,
            type: "reading",
            passage: "Color psychology is the study of how colors affect human behavior and mood...",
            question: "Why is red often used in clearance sales?",
            options: ["A) It is a cheap color to print.", "B) It creates a sense of urgency.", "C) It is the most popular color.", "D) It makes products look expensive.", "E) It is relaxing."],
            correct: "B"
        },
        {
            id: 55,
            type: "reading",
            passage: "Color psychology is the study of how colors affect human behavior and mood...",
            question: "Which color is associated with trust and security?",
            options: ["A) Red", "B) Yellow", "C) Green", "D) Blue", "E) White"],
            correct: "D"
        },
        {
            id: 56,
            type: "reading",
            passage: "Color psychology is the study of how colors affect human behavior and mood...",
            question: "How does culture affect color perception according to the text?",
            options: ["A) Culture has no effect.", "B) Colors have universal meanings.", "C) White always means purity.", "D) Meanings can vary by culture.", "E) Eastern cultures prefer red."],
            correct: "D"
        },
        {
            id: 57,
            type: "reading",
            passage: "Color psychology is the study of how colors affect human behavior and mood...",
            question: "Who uses color psychology to influence decisions?",
            options: ["A) Only psychologists", "B) Marketers and designers", "C) Engineers", "D) Athletes", "E) Doctors"],
            correct: "B"
        },

        // Passage 4: Space Exploration
        {
            id: 58,
            type: "reading",
            passage: "Space exploration has always captured the human imagination. Since Yuri Gagarin became the first human in space in 1961, we have made incredible strides. The Apollo missions landed humans on the Moon, and the Voyager probes have ventured into interstellar space. Today, the focus has shifted towards Mars. Space agencies like NASA and private companies like SpaceX are working on technologies to send humans to the Red Planet. Mars is seen as the next frontier because it is the most Earth-like planet in our solar system. It has a day length similar to Earth's and polar ice caps. However, challenges remain immense. The journey takes months, and astronauts would be exposed to high levels of radiation. Establishing a colony would require self-sustaining systems for food, water, and air. despite the risks, proponents argue that becoming a multi-planetary species is essential for the long-term survival of humanity.",
            question: "Who was the first human in space?",
            options: ["A) Neil Armstrong", "B) Buzz Aldrin", "C) Yuri Gagarin", "D) John Glenn", "E) Alan Shepard"],
            correct: "C"
        },
        {
            id: 59,
            type: "reading",
            passage: "Space exploration has always captured the human imagination...",
            question: "What is the current primary focus of space exploration?",
            options: ["A) Returning to the Moon", "B) Exploring Venus", "C) Sending humans to Mars", "D) Finding new galaxies", "E) Building a bigger space station"],
            correct: "C"
        },
        {
            id: 60,
            type: "reading",
            passage: "Space exploration has always captured the human imagination...",
            question: "Why is Mars considered a good candidate for exploration?",
            options: ["A) It is very close to Earth.", "B) It has breathable air.", "C) It is the most Earth-like planet.", "D) It has vegetation.", "E) It is warmer than Earth."],
            correct: "C"
        },
        {
            id: 61,
            type: "reading",
            passage: "Space exploration has always captured the human imagination...",
            question: "What is NOT mentioned as a challenge for a Mars mission?",
            options: ["A) Duration of the journey", "B) Radiation exposure", "C) Need for self-sustaining systems", "D) Alien life forms", "E) None of the above"],
            correct: "D"
        },
        {
            id: 62,
            type: "reading",
            passage: "Space exploration has always captured the human imagination...",
            question: "What is the main argument for becoming a multi-planetary species?",
            options: ["A) To find gold", "B) To meet aliens", "C) Long-term survival of humanity", "D) Tourism", "E) To reduce population on Earth"],
            correct: "C"
        },

        // 63-67 Dialogue Completion
        {
            id: 63,
            type: "dialogue",
            question: "Alice: I can't believe how expensive rent has become in this city.\nBob: _______ \nAlice: That's true, but even the suburbs are getting pricey now.\nBob: Well, maybe we should look for a roommate to share the cost.",
            options: [
                "A) You should buy a house instead.",
                "B) Yeah, it's getting harder to find an affordable place.",
                "C) Why don't you move to the countryside?",
                "D) I think the city center is the best place to live.",
                "E) Prices are expected to drop soon."
            ],
            correct: "B"
        },
        {
            id: 64,
            type: "dialogue",
            question: "Interviewer: What do you consider your greatest strength?\nCandidate: I'm very organized and efficient.\nInterviewer: _______\nCandidate: Certainly. In my last job, I created a new filing system that saved the team hours of work each week.",
            options: [
                "A) Can you give me an example of how you apply that?",
                "B) That sounds very boring.",
                "C) What about your weaknesses?",
                "D) We don't need organized people here.",
                "E) How much salary do you expect?"
            ],
            correct: "A"
        },
        {
            id: 65,
            type: "dialogue",
            question: "Doctor: Your blood pressure is a bit high.\nPatient: Is it serious?\nDoctor: _______\nPatient: I see. I will try to cut down on salt and exercise more.",
            options: [
                "A) No, you don't need to do anything.",
                "B) Yes, you need surgery immediately.",
                "C) Not yet, but you should make some lifestyle changes to prevent it from getting worse.",
                "D) I will prescribe you some strong medication.",
                "E) It's probably just a mistake."
            ],
            correct: "C"
        },
        {
            id: 66,
            type: "dialogue",
            question: "Customer: Excuse me, I bought this shirt yesterday, but it has a tear in it.\nShop Assistant: I'm sorry about that. _______\nCustomer: Yes, I do. Here it is.",
            options: [
                "A) We don't accept returns.",
                "B) You must have torn it yourself.",
                "C) Do you have the receipt?",
                "D) Would you like to buy another one?",
                "E) The manager is not here."
            ],
            correct: "C"
        },
        {
            id: 67,
            type: "dialogue",
            question: "Student: I'm really struggling with this math problem.\nTeacher: _______\nStudent: I haven't tried that yet. Thanks for the hint!",
            options: [
                "A) It's actually very easy.",
                "B) Have you tried using the quadratic formula?",
                "C) You should have studied more.",
                "D) Ask your friend for help.",
                "E) I can't help you during the exam."
            ],
            correct: "B"
        },

        // 68-71 Restatement
        {
            id: 68,
            type: "restatement",
            question: "It was only after he had lost everything that he realized the value of his family.",
            options: [
                "A) He didn't appreciate his family until he had lost all his possessions.",
                "B) Losing everything made him realize that his family was not important.",
                "C) He realized the value of his family before he lost everything.",
                "D) He lost his family because he valued his possessions more.",
                "E) The value of his family helped him recover what he had lost."
            ],
            correct: "A"
        },
        {
            id: 69,
            type: "restatement",
            question: "No matter how hard she tried, she couldn't convince him to change his mind.",
            options: [
                "A) She didn't try hard enough to convince him.",
                "B) He changed his mind because she tried very hard.",
                "C) Despite her best efforts, she failed to persuade him.",
                "D) It was easy for her to change his mind.",
                "E) He was willing to change his mind if she tried."
            ],
            correct: "C"
        },
        {
            id: 70,
            type: "restatement",
            question: "I would rather stay home and read a book than go to the party.",
            options: [
                "A) I prefer going to the party to reading a book.",
                "B) Staying home and reading is what I want to do, not going to the party.",
                "C) I will go to the party after I finish my book.",
                "D) I don't like reading books or going to parties.",
                "E) It is better to go to the party than to stay home."
            ],
            correct: "B"
        },
        {
            id: 71,
            type: "restatement",
            question: "Unless you have a ticket, you will not be allowed to enter the concert hall.",
            options: [
                "A) You can enter the concert hall without a ticket.",
                "B) If you have a ticket, you might not be allowed in.",
                "C) Buying a ticket is not necessary to enter.",
                "D) Only those with a ticket can enter the concert hall.",
                "E) You should buy a ticket after you enter."
            ],
            correct: "D"
        },

        // 72-75 Paragraph Completion
        {
            id: 72,
            type: "paragraph_completion",
            question: "Electric cars are becoming increasingly popular. They offer a cleaner alternative to gasoline-powered vehicles. _______ However, range anxiety and charging infrastructure remain concerns for some buyers. As technology improves, these issues are expected to diminish.",
            options: [
                "A) They are also more expensive to maintain.",
                "B) Gasoline cars are still faster.",
                "C) Many governments offer incentives for purchasing them.",
                "D) They have been around for a century.",
                "E) People prefer public transport."
            ],
            correct: "C"
        },
        {
            id: 73,
            type: "paragraph_completion",
            question: "Learning a second language has many cognitive benefits. It can improve memory and attention span. _______ Furthermore, bilingualism may delay the onset of dementia in old age. Therefore, language learning is a workout for the brain.",
            options: [
                "A) It is difficult to learn a new grammar.",
                "B) Many people speak English.",
                "C) It also enhances problem-solving skills.",
                "D) Travel is the best way to learn.",
                "E) Translation apps are very useful."
            ],
            correct: "C"
        },
        {
            id: 74,
            type: "paragraph_completion",
            question: "The desert is a harsh environment. Water is scarce, and temperatures can fluctuate wildly. _______ Plants and animals have evolved unique adaptations to survive these conditions. Cacti, for example, store water in their thick stems.",
            options: [
                "A) It rains every day.",
                "B) Yet, it is home to a surprising variety of life.",
                "C) Nobody lives in the desert.",
                "D) The soil is very fertile.",
                "E) It is always cold at night."
            ],
            correct: "B"
        },
        {
            id: 75,
            type: "paragraph_completion",
            question: "Remote work has become the new norm for many. _______ It eliminates the daily commute and offers a better work-life balance. Employers also benefit from reduced overhead costs. However, it can also lead to feelings of isolation.",
            options: [
                "A) Everyone hates working from home.",
                "B) Offices are becoming more crowded.",
                "C) It offers employees greater flexibility.",
                "D) Technology is making it harder.",
                "E) Commuting is very enjoyable."
            ],
            correct: "C"
        },

        // 76-80 Irrelevant Sentence
        {
            id: 76,
            type: "irrelevant",
            question: "(I) Yoga is an ancient practice that originated in India. (II) It involves physical poses, breathing techniques, and meditation. (III) Many people practice yoga to reduce stress and improve flexibility. (IV) Indian cuisine is known for its spicy curries. (V) Regular practice can also control blood pressure.",
            options: ["A) I", "B) II", "C) III", "D) IV", "E) V"],
            correct: "D"
        },
        {
            id: 77,
            type: "irrelevant",
            question: "(I) The rainforests of the Amazon are often called the lungs of the Earth. (II) They produce a significant amount of the world's oxygen. (III) The river flows through several countries in South America. (IV) They also house millions of species of plants and animals. (V) Protecting these forests is crucial for the global climate.",
            options: ["A) I", "B) II", "C) III", "D) IV", "E) V"],
            correct: "C"
        },
        {
            id: 78,
            type: "irrelevant",
            question: "(I) Penguins are flightless birds found primarily in the Southern Hemisphere. (II) They have adapted to aquatic life with flipper-like wings. (III) Polar bears live in the Arctic and hunt seals. (IV) Their feathers provide insulation against freezing water. (V) They live in colonies and are very social animals.",
            options: ["A) I", "B) II", "C) III", "D) IV", "E) V"],
            correct: "C"
        },
        {
            id: 79,
            type: "irrelevant",
            question: "(I) Recycling is the process of converting waste into new materials. (II) It reduces the consumption of fresh raw materials. (III) Plastic pollution is a major environmental issue. (IV) It also lowers energy usage and air pollution. (V) Communities should be encouraged to recycle more.",
            options: ["A) I", "B) II", "C) III", "D) IV", "E) V"],
            correct: "C"
        },
        {
            id: 80,
            type: "irrelevant",
            question: "(I) Sleep is vital for physical and mental health. (II) Dreams occur mainly during REM sleep. (III) Lack of sleep can lead to serious health problems. (IV) It impairs cognitive function and memory. (V) Establishing a regular sleep routine is recommended.",
            options: ["A) I", "B) II", "C) III", "D) IV", "E) V"],
            correct: "B"
        }
    ],
    sentenceTest: [
        {
            id: "s1",
            type: "translation",
            question: "The recent discovery of a new species of dinosaur in Argentina has challenged previous assumptions about the evolution of large sauropods during the Cretaceous period.",
            options: [
                "A) Arjantin'de yeni bir dinozor türünün bulunması, Kretase dönemindeki büyük sauropodların evrimi hakkındaki önceki varsayımları doğrulamıştır.",
                "B) Arjantin'de yeni bir dinozor türünün yakın zamanda keşfedilmesi, Kretase döneminde büyük sauropodların evrimine ilişkin önceki varsayımlara meydan okumuştur.",
                "C) Kretase döneminde büyük sauropodların evrimine dair varsayımlar, Arjantin'de keşfedilen yeni bir dinozor türüyle değişmiştir.",
                "D) Arjantin'deki dinozor keşifleri, Kretase dönemindeki büyük sauropodların evrimini anlamamıza yardımcı olmaktadır.",
                "E) Yeni keşfedilen dinozor türü, Arjantin'in Kretase dönemindeki büyük sauropodların evrimindeki rolünü ortaya koymuştur."
            ],
            correct: "B"
        },
        {
            id: "s2",
            type: "translation",
            question: "While renewable energy sources are gaining popularity, the transition from fossil fuels is proving to be more complex and costly than initially anticipated.",
            options: [
                "A) Yenilenebilir enerji kaynakları popülerlik kazansa da, fosil yakıtlardan geçiş başlangıçta tahmin edilenden daha karmaşık ve maliyetli olmaktadır.",
                "B) Fosil yakıtlardan geçişin beklenenden daha zor olması, yenilenebilir enerji kaynaklarının popülerliğini etkilemektedir.",
                "C) Yenilenebilir enerji kaynaklarının popülerlik kazanmasıyla birlikte, fosil yakıtlardan geçiş daha karmaşık ve pahalı bir hal almıştır.",
                "D) Başlangıçta tahmin edildiği gibi, yenilenebilir enerji kaynaklarına geçiş süreci fosil yakıtlardan daha karmaşık değildir.",
                "E) Fosil yakıtlardan uzaklaşmak, yenilenebilir enerji kaynaklarının popüler olduğu bir dönemde bile oldukça maliyetlidir."
            ],
            correct: "A"
        },
        {
            id: "s3",
            type: "translation",
            question: "Çocukların erken yaşta yabancı dil öğrenmesi, bilişsel gelişimlerini olumlu yönde etkiler ve ileriki yaşlarda yeni diller öğrenmelerini kolaylaştırır.",
            options: [
                "A) Learning a foreign language at an early age positively affects children's cognitive development and makes it easier for them to learn new languages later in life.",
                "B) Children who learn a foreign language at an early age have better cognitive development and easier language learning skills.",
                "C) It is easier for children to learn new languages later in life if they start learning a foreign language at an early age, which also helps their cognitive development.",
                "D) Practical language learning at an early age is beneficial for cognitive development and future language acquisition.",
                "E) Cognitive development is positively affected by early language learning, making future language acquisition easier for children."
            ],
            correct: "A"
        },
        {
            id: "s4",
            type: "translation",
            question: "Despite the widespread use of digital communication tools, face-to-face interaction remains essential for building trust and maintaining strong relationships in the business world.",
            options: [
                "A) Dijital iletişim araçlarının yaygın kullanımına rağmen, iş dünyasında güven inşa etmek ve güçlü ilişkiler sürdürmek için yüz yüze etkileşim hayati önemini korumaktadır.",
                "B) İş dünyasında güveni sağlamak için yüz yüze iletişim şarttır, ancak dijital araçlar da yaygın olarak kullanılmaktadır.",
                "C) Dijital iletişim araçları ne kadar yaygın olsa da, iş ilişkilerini sürdürmek için yüz yüze görüşmek gerekir.",
                "D) Yüz yüze etkileşimin önemi, dijital iletişim araçlarının yaygınlaşmasıyla birlikte iş dünyasında azalmamıştır.",
                "E) Güven inşa etmek ve ilişkileri korumak için iş dünyasında dijital araçlar yerine yüz yüze etkileşim tercih edilmelidir."
            ],
            correct: "A"
        },
        {
            id: "s5",
            type: "translation",
            question: "Küresel ısınmanın etkilerini azaltmak için hükümetlerin yanı sıra bireylerin de karbon ayak izlerini küçültmeye yönelik adımlar atması gerekmektedir.",
            options: [
                "A) In addition to governments, individuals also need to take steps to reduce their carbon footprints to mitigate the effects of global warming.",
                "B) Goverments and individuals must work together to reduce carbon footprints and stop global warming.",
                "C) Individuals should take steps to reduce their carbon footprints alongside governments to fight global warming.",
                "D) To reduce the effects of global warming, not only governments but also individuals must take steps to minimize their carbon footprints.",
                "E) Reducing carbon footprints is a responsibility for both individuals and governments in order to mitigate global warming."
            ],
            correct: "D"
        },
        {
            id: "s6",
            type: "translation",
            question: "Artificial intelligence has the potential to revolutionize healthcare by enabling earlier diagnosis of diseases and personalized treatment plans.",
            options: [
                "A) Yapay zeka, hastalıkların daha erken teşhis edilmesini ve kişiselleştirilmiş tedavi planlarını mümkün kılarak sağlık hizmetlerinde devrim yaratma potansiyeline sahiptir.",
                "B) Sağlık hizmetlerinde devrim yaratan yapay zeka, hastalıkların erken teşhisi ve kişiye özel tedavi planları sunmaktadır.",
                "C) Hastalıkların erken teşhisi ve kişiselleştirilmiş tedaviler sayesinde yapay zeka sağlık sektöründe devrim yaratabilir.",
                "D) Yapay zekanın sağlık hizmetlerindeki potansiyeli, hastalıkları erken teşhis etmesi ve tedavi planlarını kişiselleştirmesidir.",
                "E) Kişiselleştirilmiş tedavi planları ve erken teşhis imkanı sunan yapay zeka, sağlıkta bir devrim niteliğindedir."
            ],
            correct: "A"
        },
        {
            id: "s7",
            type: "translation",
            question: "Ekonomik istikrarsızlık dönemlerinde yatırımcılar genellikle riskli varlıklardan kaçınır ve altın gibi güvenli limanlara yönelirler.",
            options: [
                "A) During periods of economic instability, investors usually avoid risky assets and turn to safe havens like gold.",
                "B) Investors tend to avoid risks and buy gold when there is economic instability.",
                "C) In times of economic instability, avoiding risky assets and turning to safe havens like gold is common among investors.",
                "D) Gold is a safe haven for investors who avoid risky assets during economic instability.",
                "E) When the economy is unstable, investors prefer safe havens like gold over risky assets."
            ],
            correct: "A"
        },
        {
            id: "s8",
            type: "translation",
            question: "The intricate relationship between sleep and memory consolidation has been a subject of intense scientific study for decades.",
            options: [
                "A) Uyku ve hafıza pekiştirme arasındaki karmaşık ilişki, on yıllardır yoğun bilimsel çalışmanın konusu olmuştur.",
                "B) On yıllardır süren yoğun bilimsel çalışmalar, uyku ve hafıza arasındaki ilişkiyi incelemektedir.",
                "C) Uyku ile hafıza arasındaki ilişki o kadar karmaşıktır ki, bilim insanları bunu on yıllardır incelemektedir.",
                "D) Bilimsel çalışmalar, uyku ve hafıza pekiştirme arasındaki karmaşık ilişkiyi on yıllardır araştırmaktadır.",
                "E) Uyku ve hafızanın pekiştirilmesi arasındaki ilişki, yoğun bilimsel çalışmalara konu olmuştur."
            ],
            correct: "A"
        },
        {
            id: "s9",
            type: "translation",
            question: "Sanat, sadece estetik bir deneyim sunmakla kalmaz, aynı zamanda toplumun kültürel ve tarihi değerlerini de yansıtır.",
            options: [
                "A) Art not only offers an aesthetic experience but also reflects the cultural and historical values of the society.",
                "B) Art provides an aesthetic experience and reflects the cultural values of history.",
                "C) The cultural and historical values of a society are reflected by art, which also offers an aesthetic experience.",
                "D) Offering an aesthetic experience is not the only function of art; it also reflects cultural history.",
                "E) Besides offering an aesthetic experience, art is a reflection of society's history and culture."
            ],
            correct: "A"
        },
        {
            id: "s10",
            type: "translation",
            question: "It is widely accepted that sustainable development can only be achieved if economic growth, social inclusion, and environmental protection are harmonized.",
            options: [
                "A) Sürdürülebilir kalkınmanın ancak ekonomik büyüme, sosyal kapsayıcılık ve çevrenin korunması uyumlu hale getirilirse başarılabileceği yaygın olarak kabul edilmektedir.",
                "B) Ekonomik büyüme, sosyal kapsayıcılık ve çevre koruma uyumlu olduğu sürece sürdürülebilir kalkınma mümkündür.",
                "C) Sürdürülebilir kalkınmayı başarmak için ekonomik büyüme ve çevre korumanın uyumlu olması gerektiği kabul edilir.",
                "D) Yaygın kabule göre, ekonomik büyüme ve sosyal kapsayıcılık olmadan sürdürülebilir kalkınma sağlanamaz.",
                "E) Çevrenin korunması, ekonomik büyüme ve sosyal kapsayıcılık, sürdürülebilir kalkınmanın temel taşlarıdır."
            ],
            correct: "A"
        },
        {
            id: "s11",
            type: "translation",
            question: "Uzun süreli uzay yolculuklarının insan vücudu üzerindeki etkileri, Mars'a yapılacak insanlı görevler için en büyük engellerden biridir.",
            options: [
                "A) The effects of long-duration space travel on the human body are one of the biggest obstacles for manned missions to Mars.",
                "B) One of the biggest obstacles to manned missions to Mars is the effect of long space travel on the body.",
                "C) Manned missions to Mars face a big obstacle which is the effect of space travel on the human body.",
                "D) Long-term space travel affects the human body, which is a major obstacle for missions to Mars.",
                "E) The impact of long space journeys on the human body is the main problem for Mars missions."
            ],
            correct: "A"
        },
        {
            id: "s12",
            type: "translation",
            question: "Whatever the outcome of the negotiations may be, both parties have agreed to maintain a ceasefire until a final resolution is reached.",
            options: [
                "A) Müzakerelerin sonucu ne olursa olsun, her iki taraf da nihai bir çözüme ulaşılana kadar ateşkesi sürdürme konusunda anlaşmışlardır.",
                "B) Nihai bir çözüme ulaşılana kadar ateşkesi sürdürmek, müzakerelerin sonucu ne olursa olsun her iki tarafın da kararıdır.",
                "C) Taraflar, müzakerelerin sonucundan bağımsız olarak, çözüm bulunana kadar ateşkes ilan etmişlerdir.",
                "D) Müzakereler nasıl sonuçlanırsa sonuçlansın, ateşkesin nihai çözüme kadar devam etmesi kararlaştırılmıştır.",
                "E) Her iki taraf da, müzakerelerin sonucuna bakılmaksızın, nihai çözüm bulunana kadar ateşkesi bozmamaya karar vermiştir."
            ],
            correct: "A"
        },
        {
            id: "s13",
            type: "translation",
            question: "Eğitimde fırsat eşitliği sağlanmadan, toplumsal adaletten ve kalkınmadan söz etmek mümkün değildir.",
            options: [
                "A) It is not possible to speak of social justice and development without ensuring equal opportunity in education.",
                "B) Without equal opportunity in education, social justice and development cannot be discussed.",
                "C) Ensuring equal opportunity in education is necessary to speak of social justice and development.",
                "D) Social justice and development depend on the provision of equal opportunity in education.",
                "E) Unless there is equal opportunity in education, it is impossible to mention social justice."
            ],
            correct: "A"
        },
        {
            id: "s14",
            type: "translation",
            question: "The novel, which explores the themes of alienation and identity in a post-colonial society, has been acclaimed by critics worldwide.",
            options: [
                "A) Post-kolonyal bir toplumda yabancılaşma ve kimlik temalarını inceleyen roman, dünya çapında eleştirmenler tarafından övgüyle karşılanmıştır.",
                "B) Dünya çapında eleştirmenlerin övgüyle karşıladığı roman, post-kolonyal toplumda kimlik ve yabancılaşmayı anlatıyor.",
                "C) Post-kolonyal toplumun yabancılaşma ve kimlik sorunlarını işleyen roman, eleştirmenlerden tam not almıştır.",
                "D) Yabancılaşma ve kimlik temalarını işleyen bu roman, post-kolonyal toplum üzerine yazılmış ve çok beğenilmiştir.",
                "E) Eleştirmenler tarafından dünya çapında beğenilen roman, post-kolonyal bir toplumdaki kimlik sorunlarını ele almaktadır."
            ],
            correct: "A"
        },
        {
            id: "s15",
            type: "translation",
            question: "Gelişen teknoloji sayesinde, artık dünyanın herhangi bir yerindeki bilgiye saniyeler içinde ulaşmak mümkün hale gelmiştir.",
            options: [
                "A) Thanks to developing technology, it has now become possible to access information anywhere in the world within seconds.",
                "B) Developing technology has made it possible to access information in seconds from anywhere.",
                "C) Accessing information anywhere in the world is now possible in seconds because of technology.",
                "D) It is now possible to reach information anywhere in the world in seconds, thanks to technology.",
                "E) With the help of developing technology, we can access information from all over the world in seconds."
            ],
            correct: "A"
        },
        {
            id: "s16",
            type: "translation",
            question: "Not only did the heavy rain cause flooding in the low-lying areas, but it also disrupted the city's public transportation system.",
            options: [
                "A) Şiddetli yağmur sadece alçak bölgelerde sele neden olmakla kalmadı, aynı zamanda şehrin toplu taşıma sistemini de aksattı.",
                "B) Alçak bölgelerde sele yol açan şiddetli yağmur, şehrin toplu taşıma sistemini de bozdu.",
                "C) Şehrin toplu taşıma sistemi, alçak bölgelerde sele neden olan şiddetli yağmur yüzünden aksadı.",
                "D) Şiddetli yağmur hem alçak bölgeleri sel bastırdı hem de toplu taşımayı durdurdu.",
                "E) Sadece alçak bölgelerde değil, şehrin toplu taşıma sisteminde de şiddetli yağmur nedeniyle aksamalar oldu."
            ],
            correct: "A"
        },
        {
            id: "s17",
            type: "translation",
            question: "Başarının sırrı, sadece çok çalışmakta değil, aynı zamanda karşılaşılan zorluklar karşısında pes etmemekte yatar.",
            options: [
                "A) The secret of success lies not only in working hard but also in not giving up in the face of difficulties encountered.",
                "B) Working hard and not giving up when facing difficulties is the secret of success.",
                "C) To succeed, one must not only work hard but also never give up against difficulties.",
                "D) The secret to success is working hard and persisting through difficulties.",
                "E) Not giving up against difficulties is as important as working hard for success."
            ],
            correct: "A"
        },
        {
            id: "s18",
            type: "translation",
            question: "Had the government implemented stricter regulations earlier, the financial crisis might have been avoided or at least less severe.",
            options: [
                "A) Hükümet daha sıkı düzenlemeleri daha erken uygulasaydı, mali kriz önlenebilir veya en azından daha az şiddetli olabilirdi.",
                "B) Eğer hükümet sıkı düzenlemeleri erken yapsaydı, mali kriz bu kadar şiddetli olmazdı.",
                "C) Mali krizin önlenmesi için hükümetin daha sıkı düzenlemeleri daha erken uygulaması gerekirdi.",
                "D) Daha sıkı düzenlemeler erken uygulansaydı bile, mali kriz kaçınılmaz olabilirdi.",
                "E) Hükümetin sıkı düzenlemeleri geç uygulaması, mali krizin şiddetini artırmıştır."
            ],
            correct: "A"
        },
        {
            id: "s19",
            type: "translation",
            question: "Bilim insanları, okyanusların derinliklerinde henüz keşfedilmemiş binlerce canlı türü olabileceğini tahmin etmektedir.",
            options: [
                "A) Scientists estimate that there could be thousands of undiscovered species living in the depths of the oceans.",
                "B) It is estimated by scientists that thousands of species in the ocean depths are yet to be discovered.",
                "C) Scientists predict that there are thousands of creature species in the depths of the oceans.",
                "D) The depths of the oceans might contain thousands of undiscovered species, according to scientists.",
                "E) Thousands of undiscovered species are estimated to be living in the deep ocean by scientists."
            ],
            correct: "A"
        },
        {
            id: "s20",
            type: "translation",
            question: "The more we learn about the universe, the more realize how little we actually understand about its origins.",
            options: [
                "A) Evren hakkında ne kadar çok şey öğrenirsek, kökenleri hakkında aslında ne kadar az şey anladığımızı o kadar çok fark ediyoruz.",
                "B) Evrenin kökenleri hakkında ne kadar az şey bildiğimizi, evreni öğrendikçe anlıyoruz.",
                "C) Evren hakkında öğrendiklerimiz arttıkça, kökenini anlamak zorlaşıyor.",
                "D) Evreni tanıdıkça, kökenleri hakkında aslında hiçbir şey bilmediğimizi görüyoruz.",
                "E) Evrenin kökenlerini anlamak için evren hakkında daha çok şey öğrenmemiz gerekiyor."
            ],
            correct: "A"
        }
    ],
    vocabQuiz: [
        {
            id: "vq1",
            type: "vocabulary",
            question: "The government has implemented new policies to _______ economic growth.",
            options: ["A) deter", "B) foster", "C) impede", "D) abolish", "E) neglect"],
            correct: "B"
        },
        {
            id: "vq2",
            type: "vocabulary",
            question: "His improved performance is _______ to his hard work and dedication.",
            options: ["A) attributed", "B) blamed", "C) suspected", "D) accused", "E) charged"],
            correct: "A"
        },
        {
            id: "vq3",
            type: "vocabulary",
            question: "The scientist's _______ discovery changed the course of medical history.",
            options: ["A) trivial", "B) groundbreaking", "C) minor", "D) obsolete", "E) redundant"],
            correct: "B"
        },
        {
            id: "vq4",
            type: "vocabulary",
            question: "It is crucial to _______ the importance of environmental conservation to the younger generation.",
            options: ["A) convey", "B) conceal", "C) distort", "D) withhold", "E) suppress"],
            correct: "A"
        },
        {
            id: "vq5",
            type: "vocabulary",
            question: "The company faced severe _______ after the scandal was revealed.",
            options: ["A) praise", "B) scrutiny", "C) applause", "D) indifference", "E) approval"],
            correct: "B"
        },
        {
            id: "vq6",
            type: "vocabulary",
            question: "She showed great _______ in solving the complex mathematical problem.",
            options: ["A) ignorance", "B) ingenuity", "C) incompetence", "D) apathy", "E) clumsiness"],
            correct: "B"
        },
        {
            id: "vq7",
            type: "vocabulary",
            question: "The two countries signed a treaty to _______ their diplomatic relations.",
            options: ["A) sever", "B) bolster", "C) undermine", "D) terminate", "E) ignore"],
            correct: "B"
        },
        {
            id: "vq8",
            type: "vocabulary",
            question: "The evidence presented in court was _______ ; it left no room for doubt.",
            options: ["A) ambiguous", "B) compelling", "C) vague", "D) debatable", "E) flimsy"],
            correct: "B"
        },
        {
            id: "vq9",
            type: "vocabulary",
            question: "He tried to _______ his feelings, but his eyes gave him away.",
            options: ["A) express", "B) conceal", "C) reveal", "D) display", "E) expose"],
            correct: "B"
        },
        {
            id: "vq10",
            type: "vocabulary",
            question: "The manager's _______ decision led to the failure of the project.",
            options: ["A) prudent", "B) arbitrary", "C) wise", "D) calculated", "E) informed"],
            correct: "B"
        },
        {
            id: "vq11",
            type: "vocabulary",
            question: "Regular exercise is _______ for maintaining good health.",
            options: ["A) detrimental", "B) indispensable", "C) harmful", "D) optional", "E) worthless"],
            correct: "B"
        },
        {
            id: "vq12",
            type: "vocabulary",
            question: "The sudden _______ of the stock market caused widespread panic.",
            options: ["A) rise", "B) plummet", "C) stability", "D) growth", "E) peak"],
            correct: "B"
        },
        {
            id: "vq13",
            type: "vocabulary",
            question: "They made a _______ effort to finish the project on time.",
            options: ["A) lazy", "B) diligent", "C) careless", "D) haphazard", "E) Slow"],
            correct: "B"
        },
        {
            id: "vq14",
            type: "vocabulary",
            question: "The novel depicts the _______ struggle of the working class in the 19th century.",
            options: ["A) joyful", "B) arduous", "C) easy", "D) simple", "E) funny"],
            correct: "B"
        },
        {
            id: "vq15",
            type: "vocabulary",
            question: "Pollution poses a _______ threat to marine life.",
            options: ["A) minor", "B) significant", "C) tiny", "D) negligible", "E) weak"],
            correct: "B"
        },
        {
            id: "vq16",
            type: "vocabulary",
            question: "The CEO was accused of _______ funds for personal use.",
            options: ["A) donating", "B) embezzling", "C) saving", "D) investing", "E) returning"],
            correct: "B"
        },
        {
            id: "vq17",
            type: "vocabulary",
            question: "Her _______ explanation clarify the confusion among the team members.",
            options: ["A) confusing", "B) lucid", "C) obscure", "D) vague", "E) ambiguous"],
            correct: "B"
        },
        {
            id: "vq18",
            type: "vocabulary",
            question: "It is important to _______ the risks before making a decision.",
            options: ["A) ignore", "B) assess", "C) overlook", "D) neglect", "E) avoid"],
            correct: "B"
        },
        {
            id: "vq19",
            type: "vocabulary",
            question: "The politician's speech was full of _______ promises that he never intended to keep.",
            options: ["A) sincere", "B) hollow", "C) honest", "D) genuine", "E) truthful"],
            correct: "B"
        },
        {
            id: "vq20",
            type: "vocabulary",
            question: "The _______ of the situation required immediate action.",
            options: ["A) calm", "B) urgency", "C) peace", "D) quiet", "E) slowness"],
            correct: "B"
        }
    ],
    grammarQuiz: [
        {
            id: "gq1",
            type: "grammar",
            question: "By the time we got to the cinema, the film _______.",
            options: ["A) started", "B) had started", "C) has started", "D) was starting", "E) would start"],
            correct: "B"
        },
        {
            id: "gq2",
            type: "grammar",
            question: "If I _______ you were coming, I would have baked a cake.",
            options: ["A) know", "B) had known", "C) have known", "D) knew", "E) would know"],
            correct: "B"
        },
        {
            id: "gq3",
            type: "grammar",
            question: "She is the woman _______ son won the scholarship.",
            options: ["A) who", "B) whose", "C) whom", "D) which", "E) that"],
            correct: "B"
        },
        {
            id: "gq4",
            type: "grammar",
            question: "He _______ very tired; he has been working for 12 hours straight.",
            options: ["A) must be", "B) can't be", "C) shouldn't be", "D) won't be", "E) needn't be"],
            correct: "A"
        },
        {
            id: "gq5",
            type: "grammar",
            question: "I suggest that she _______ a doctor immediately.",
            options: ["A) sees", "B) see", "C) saw", "D) seeing", "E) to see"],
            correct: "B"
        },
        {
            id: "gq6",
            type: "grammar",
            question: "Despite _______ hard, he failed the exam.",
            options: ["A) study", "B) studying", "C) studied", "D) to study", "E) studies"],
            correct: "B"
        },
        {
            id: "gq7",
            type: "grammar",
            question: "The bridge _______ built right now will connect the two islands.",
            options: ["A) is", "B) being", "C) was", "D) has been", "E) to be"],
            correct: "B"
        },
        {
            id: "gq8",
            type: "grammar",
            question: "Not only _______ the car, but he also crashed it.",
            options: ["A) he stole", "B) did he steal", "C) he did steal", "D) does he steal", "E) stole he"],
            correct: "B"
        },
        {
            id: "gq9",
            type: "grammar",
            question: "It is high time we _______ home.",
            options: ["A) go", "B) went", "C) have gone", "D) are going", "E) will go"],
            correct: "B"
        },
        {
            id: "gq10",
            type: "grammar",
            question: "She asked me where _______ .",
            options: ["A) was I going", "B) I was going", "C) am I going", "D) I am going", "E) did I go"],
            correct: "B"
        },
        {
            id: "gq11",
            type: "grammar",
            question: "I wish I _______ harder when I was at school.",
            options: ["A) studied", "B) had studied", "C) have studied", "D) study", "E) would study"],
            correct: "B"
        },
        {
            id: "gq12",
            type: "grammar",
            question: "He is accused _______ some top secret documents.",
            options: ["A) to steal", "B) of stealing", "C) for stealing", "D) on stealing", "E) with stealing"],
            correct: "B"
        },
        {
            id: "gq13",
            type: "grammar",
            question: "Scarcely had I entered the room _______ the phone rang.",
            options: ["A) when", "B) than", "C) as", "D) while", "E) after"],
            correct: "A"
        },
        {
            id: "gq14",
            type: "grammar",
            question: "Neither the manager nor the employees _______ satisfied with the new policy.",
            options: ["A) is", "B) were", "C) has", "D) was", "E) be"],
            correct: "B"
        },
        {
            id: "gq15",
            type: "grammar",
            question: "_______ tired, he went to bed early.",
            options: ["A) Feeling", "B) Felt", "C) To feel", "D) To feeling", "E) Feels"],
            correct: "A"
        },
        {
            id: "gq16",
            type: "grammar",
            question: "I would rather you _______ smoke in here.",
            options: ["A) don't", "B) didn't", "C) not", "D) won't", "E) haven't"],
            correct: "B"
        },
        {
            id: "gq17",
            type: "grammar",
            question: "The man _______ sitting next to me is a famous actor.",
            options: ["A) who", "B) -", "C) whom", "D) whose", "E) which"],
            correct: "B"
        },
        {
            id: "gq18",
            type: "grammar",
            question: "You _______ have brought your umbrella; it's not going to rain.",
            options: ["A) couldn't", "B) needn't", "C) mustn't", "D) shouldn't", "E) wouldn't"],
            correct: "B"
        },
        {
            id: "gq19",
            type: "grammar",
            question: "Hardly _______ anyone in the town.",
            options: ["A) he knew", "B) did he know", "C) he did know", "D) does he know", "E) knew he"],
            correct: "B"
        },
        {
            id: "gq20",
            type: "grammar",
            question: "It is believed _______ the oldest building in the city.",
            options: ["A) being", "B) to be", "C) be", "D) to being", "E) is"],
            correct: "B"
        }
    ]
};

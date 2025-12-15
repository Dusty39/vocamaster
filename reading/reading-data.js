// Reading Texts Database for YDS Preparation
const readingTexts = [
    {
        id: 1,
        title: "The Impact of Social Media",
        category: "Technology",
        level: "easy",
        wordCount: 250,
        text: `Social media has transformed the way we communicate and share information. Platforms like Facebook, Twitter, and Instagram connect billions of people worldwide. While these platforms offer many benefits, they also present significant challenges.

One major advantage of social media is instant communication. People can stay in touch with friends and family regardless of distance. It also provides opportunities for networking and professional development. Many businesses use social media for marketing and customer engagement.

However, social media has drawbacks. Privacy concerns are growing as companies collect vast amounts of personal data. Cyberbullying and online harassment have become serious problems. Additionally, excessive social media use can lead to addiction and mental health issues.

Another concern is the spread of misinformation. False news can go viral quickly, influencing public opinion and even elections. Users must be critical of the information they encounter online.

Despite these challenges, social media continues to evolve. New features and platforms emerge regularly. Understanding both the benefits and risks helps users make informed decisions about their online presence.`,
        questions: [
            {
                question: "What is the main topic of the passage?",
                options: [
                    "The history of social media",
                    "The advantages and disadvantages of social media",
                    "How to use social media effectively",
                    "The future of communication technology"
                ],
                correct: 1
            },
            {
                question: "According to the passage, which is NOT mentioned as a benefit of social media?",
                options: [
                    "Instant communication",
                    "Professional networking",
                    "Educational purposes",
                    "Business marketing"
                ],
                correct: 2
            },
            {
                question: "What problem related to information is mentioned?",
                options: [
                    "Information overload",
                    "Spread of misinformation",
                    "Language barriers",
                    "Slow information sharing"
                ],
                correct: 1
            },
            {
                question: "The passage suggests that users should:",
                options: [
                    "Avoid social media completely",
                    "Use only one platform",
                    "Be critical of online information",
                    "Share all personal information"
                ],
                correct: 2
            }
        ]
    },
    {
        id: 2,
        title: "Renewable Energy Sources",
        category: "Environment",
        level: "easy",
        wordCount: 280,
        text: `As concerns about climate change grow, renewable energy sources are becoming increasingly important. Unlike fossil fuels, which are finite and polluting, renewable energy comes from natural sources that replenish themselves.

Solar power is one of the most popular renewable energy sources. Solar panels convert sunlight into electricity. This technology has become more affordable and efficient in recent years. Many homes and businesses now use solar panels to reduce their electricity costs and carbon footprint.

Wind energy is another significant renewable resource. Wind turbines capture the kinetic energy of moving air and convert it into electricity. Wind farms can be found both on land and offshore. They're particularly effective in areas with consistent wind patterns.

Hydroelectric power harnesses the energy of moving water. Dams and water turbines generate electricity from rivers and streams. This method has been used for over a century and remains one of the most reliable renewable energy sources.

Geothermal energy taps into heat from beneath Earth's surface. This energy can be used for heating buildings or generating electricity. It's especially viable in areas with volcanic activity.

While renewable energy offers many benefits, challenges remain. Energy storage, infrastructure costs, and weather dependency are ongoing concerns. However, technological advances continue to address these issues, making renewable energy more practical and accessible each year.`,
        questions: [
            {
                question: "What is the main difference between renewable energy and fossil fuels?",
                options: [
                    "Renewable energy is cheaper",
                    "Renewable energy replenishes itself",
                    "Fossil fuels produce more energy",
                    "Fossil fuels are easier to use"
                ],
                correct: 1
            },
            {
                question: "Which renewable energy source has been used for over a century?",
                options: [
                    "Solar power",
                    "Wind energy",
                    "Hydroelectric power",
                    "Geothermal energy"
                ],
                correct: 2
            },
            {
                question: "According to the passage, what has happened to solar panel technology?",
                options: [
                    "It has become obsolete",
                    "It has become more expensive",
                    "It has become more affordable and efficient",
                    "It has remained unchanged"
                ],
                correct: 2
            },
            {
                question: "What is mentioned as a challenge for renewable energy?",
                options: [
                    "Lack of government support",
                    "Public opposition",
                    "Energy storage issues",
                    "Environmental damage"
                ],
                correct: 2
            }
        ]
    },
    {
        id: 3,
        title: "The Evolution of Artificial Intelligence",
        category: "Technology",
        level: "medium",
        wordCount: 350,
        text: `Artificial Intelligence (AI) has evolved dramatically since its inception in the mid-20th century. What began as a theoretical concept has transformed into a technology that influences nearly every aspect of modern life.

The term "artificial intelligence" was first coined in 1956 at a conference at Dartmouth College. Early AI research focused on problem-solving and symbolic methods. Researchers believed that human intelligence could be replicated by teaching computers to follow logical rules. However, this approach proved limited.

The 1980s saw the rise of machine learning, a subset of AI where systems learn from data rather than following predetermined rules. This paradigm shift enabled computers to recognize patterns and make predictions. Neural networks, inspired by the human brain's structure, became increasingly sophisticated.

In recent years, deep learning has revolutionized AI capabilities. This technique uses multiple layers of neural networks to process complex data. Applications range from image recognition to natural language processing. Virtual assistants like Siri and Alexa, self-driving cars, and medical diagnosis systems all rely on deep learning algorithms.

Despite remarkable progress, AI faces significant challenges. Ethical concerns about bias in AI systems are growing. Since AI learns from historical data, it can perpetuate existing prejudices. Privacy issues arise as AI systems require vast amounts of personal data to function effectively.

The question of AI's impact on employment is contentious. While AI may automate certain jobs, it also creates new opportunities in fields like AI development, data science, and robotics. The key lies in preparing the workforce for this transition through education and training.

Looking ahead, AI development must balance innovation with responsibility. Researchers are working on explainable AI systems that can justify their decisions. Regulation and ethical guidelines are being developed to ensure AI benefits society as a whole. The future of AI depends on addressing these challenges while harnessing its potential for positive change.`,
        questions: [
            {
                question: "When was the term 'artificial intelligence' first used?",
                options: [
                    "In the mid-20th century",
                    "In 1956",
                    "In the 1980s",
                    "In recent years"
                ],
                correct: 1
            },
            {
                question: "What was the limitation of early AI research?",
                options: [
                    "Lack of funding",
                    "Limited computer power",
                    "Focus on logical rules proved limiting",
                    "Public opposition"
                ],
                correct: 2
            },
            {
                question: "According to the passage, why can AI systems be biased?",
                options: [
                    "Programmers intentionally introduce bias",
                    "AI learns from historical data that may contain prejudices",
                    "AI systems favor certain groups",
                    "Technology is inherently biased"
                ],
                correct: 1
            },
            {
                question: "What does the passage suggest about AI's impact on jobs?",
                options: [
                    "AI will eliminate all jobs",
                    "AI will not affect employment",
                    "AI may automate some jobs while creating new opportunities",
                    "AI only affects blue-collar jobs"
                ],
                correct: 2
            },
            {
                question: "What is 'explainable AI'?",
                options: [
                    "AI that is easy to program",
                    "AI systems that can justify their decisions",
                    "AI for educational purposes",
                    "AI that speaks multiple languages"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 4,
        title: "The Importance of Sleep",
        category: "Health",
        level: "medium",
        wordCount: 320,
        text: `Sleep is a fundamental biological necessity, yet many people consistently fail to get adequate rest. Research demonstrates that sleep affects nearly every aspect of physical and mental health, making it just as important as diet and exercise.

During sleep, the body undergoes crucial repair processes. The immune system strengthens, muscles rebuild, and tissues heal. Growth hormone, essential for development and repair, is primarily released during deep sleep. Without sufficient rest, these regenerative processes are compromised, leaving individuals more vulnerable to illness and injury.

Cognitive function heavily depends on quality sleep. Memory consolidation occurs during sleep, transforming short-term memories into long-term storage. Studies show that students who sleep well after studying perform significantly better on tests than those who stay up late cramming. Additionally, sleep enhances creativity, problem-solving abilities, and emotional regulation.

The consequences of chronic sleep deprivation are severe. Beyond immediate effects like fatigue and irritability, long-term sleep loss increases the risk of serious health conditions. These include cardiovascular disease, diabetes, obesity, and depression. Research also links insufficient sleep to reduced life expectancy.

Modern lifestyle factors often interfere with healthy sleep patterns. Screen time before bed disrupts circadian rhythms due to blue light exposure. Caffeine consumption, irregular schedules, and stress all contribute to sleep problems. Creating a consistent sleep schedule and developing a relaxing bedtime routine can significantly improve sleep quality.

Sleep requirements vary by age, but most adults need seven to nine hours nightly. Quality matters as much as quantity. Deep sleep and REM (Rapid Eye Movement) sleep are particularly crucial for restoration and cognitive processing.

Prioritizing sleep is not a luxury but a necessity for optimal health and performance. By understanding sleep's vital role and making it a priority, individuals can enhance their physical health, mental clarity, and overall quality of life.`,
        questions: [
            {
                question: "According to the passage, when is growth hormone primarily released?",
                options: [
                    "During exercise",
                    "After meals",
                    "During deep sleep",
                    "In the morning"
                ],
                correct: 2
            },
            {
                question: "What process occurs during sleep that helps with memory?",
                options: [
                    "Memory deletion",
                    "Memory consolidation",
                    "Memory formation",
                    "Memory testing"
                ],
                correct: 1
            },
            {
                question: "Which is NOT mentioned as a consequence of chronic sleep deprivation?",
                options: [
                    "Cardiovascular disease",
                    "Diabetes",
                    "Cancer",
                    "Obesity"
                ],
                correct: 2
            },
            {
                question: "How does blue light from screens affect sleep?",
                options: [
                    "It disrupts circadian rhythms",
                    "It helps you fall asleep faster",
                    "It has no effect on sleep",
                    "It only affects children"
                ],
                correct: 0
            },
            {
                question: "How many hours of sleep do most adults need?",
                options: [
                    "5-6 hours",
                    "6-7 hours",
                    "7-9 hours",
                    "9-11 hours"
                ],
                correct: 2
            }
        ]
    },
    {
        id: 5,
        title: "The Decline of Biodiversity",
        category: "Environment",
        level: "hard",
        wordCount: 420,
        text: `Biodiversity, the variety of life forms on Earth, is declining at an unprecedented rate. Scientists warn that we are entering a sixth mass extinction event, distinct from previous extinctions in that it is driven primarily by human activity rather than natural catastrophes.

The current biodiversity crisis manifests in various ways. Species extinction rates are estimated to be 1,000 times higher than the natural background rate. Habitats worldwide are being destroyed or fragmented, from tropical rainforests to coral reefs. Population sizes of vertebrate species have declined by an average of 68% since 1970, according to the Living Planet Report.

Multiple factors contribute to this decline. Habitat destruction remains the primary threat, driven by agricultural expansion, urbanization, and infrastructure development. Climate change exacerbates these problems by altering ecosystems faster than species can adapt. Overexploitation of resources, including overfishing and poaching, depletes populations. Pollution degrades habitats and directly harms organisms. Invasive species, often introduced through global trade, outcompete native species for resources.

The consequences of biodiversity loss extend far beyond the extinction of individual species. Ecosystems provide essential services that humans depend upon: pollination of crops, water purification, climate regulation, and disease control. Each species plays a role in its ecosystem, and losses can trigger cascading effects throughout food webs. The extinction of key species can lead to ecosystem collapse, affecting countless other organisms.

Economic implications are substantial. The global economy relies heavily on ecosystem services, valued at trillions of dollars annually. Agricultural productivity depends on pollinators and healthy soil ecosystems. Pharmaceutical discoveries often originate from natural compounds found in diverse organisms. As biodiversity declines, we lose not only current resources but also potential future discoveries.

Addressing this crisis requires comprehensive action at multiple levels. Protected areas must be expanded and effectively managed. Sustainable practices in agriculture, fishing, and forestry need widespread adoption. Climate change mitigation is essential, as rising temperatures and changing precipitation patterns threaten countless species. Pollution must be reduced, and invasive species controlled.

International cooperation is crucial. The Convention on Biological Diversity sets global targets, but implementation varies widely. Individual actions matter too: supporting sustainable products, reducing consumption, and advocating for environmental policies all contribute to conservation efforts.

The window for preventing catastrophic biodiversity loss is narrowing. However, successful conservation stories demonstrate that recovery is possible when dedicated efforts are made. Protecting biodiversity is not merely an environmental concern but a fundamental requirement for human well-being and survival.`,
        questions: [
            {
                question: "What makes the current mass extinction different from previous ones?",
                options: [
                    "It is happening faster",
                    "It is caused by natural disasters",
                    "It is driven by human activity",
                    "It affects more species"
                ],
                correct: 2
            },
            {
                question: "According to the passage, by what percentage have vertebrate populations declined since 1970?",
                options: [
                    "50%",
                    "68%",
                    "75%",
                    "80%"
                ],
                correct: 1
            },
            {
                question: "What is identified as the primary threat to biodiversity?",
                options: [
                    "Climate change",
                    "Pollution",
                    "Habitat destruction",
                    "Invasive species"
                ],
                correct: 2
            },
            {
                question: "Which of the following is NOT mentioned as an ecosystem service?",
                options: [
                    "Pollination of crops",
                    "Water purification",
                    "Mineral extraction",
                    "Climate regulation"
                ],
                correct: 2
            },
            {
                question: "What does the passage suggest about individual actions?",
                options: [
                    "They are irrelevant to conservation",
                    "They can contribute to conservation efforts",
                    "They are more important than government policies",
                    "They should focus only on recycling"
                ],
                correct: 1
            },
            {
                question: "What is the tone of the passage regarding biodiversity conservation?",
                options: [
                    "Optimistic",
                    "Indifferent",
                    "Urgent but hopeful",
                    "Completely pessimistic"
                ],
                correct: 2
            }
        ]
    }
];

// Grammar Topics Database
const grammarTopics = [
    {
        id: 1,
        title: "Present Tenses",
        difficulty: "easy",
        description: "Simple Present and Present Continuous basics.",
        content: `
            <h3>Present Simple</h3>
            <p><strong>Usage:</strong> Habits, facts, general truths, scheduled events</p>
            <p><strong>Form:</strong> Subject + base verb (+ s/es for 3rd person)</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I work every day. (Habit)</li>
                <li>The sun rises in the east. (Fact)</li>
                <li>The train leaves at 9 PM. (Schedule)</li>
            </ul>

            <h3>Present Continuous</h3>
            <p><strong>Usage:</strong> Actions happening now, temporary situations, future plans</p>
            <p><strong>Form:</strong> Subject + am/is/are + verb-ing</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I am working right now.</li>
                <li>She is staying with us this week.</li>
                <li>We are meeting them tonight.</li>
            </ul>
`,
        exercises: [
            {
                question: "Water _____ at 100 degrees Celsius.",
                options: ["boil", "boils", "is boiling", "boiled"],
                correct: 1
            },
            {
                question: "Listen! Someone _____ the piano.",
                options: ["play", "plays", "is playing", "played"],
                correct: 2
            },
            {
                question: "I usually _____ coffee, but today I _____ tea.",
                options: ["drink / am drinking", "am drinking / drink", "drink / drink", "drinking / drinking"],
                correct: 0
            }
        ]
    },
    {
        id: 2,
        title: "Past Tenses",
        difficulty: "easy",
        description: "Simple, Continuous, Perfect, and Perfect Continuous",
        content: `
    <h3> Past Simple</h3>
            <p><strong>Usage:</strong> Completed actions in the past</p>
            <p><strong>Form:</strong> Subject + verb-ed / irregular form</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I worked yesterday.</li>
                <li>She went to Paris last year.</li>
                <li>They studied hard for the exam.</li>
            </ul>

            <h3>Past Continuous</h3>
            <p><strong>Usage:</strong> Actions in progress in the past</p>
            <p><strong>Form:</strong> Subject + was/were + verb-ing</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I was working when you called.</li>
                <li>She was studying at 8 PM.</li>
                <li>They were playing football.</li>
            </ul>

            <h3>Past Perfect</h3>
            <p><strong>Usage:</strong> Action happened before another past action</p>
            <p><strong>Form:</strong> Subject + had + past participle (V3)</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>When I arrived, the train had left.</li>
                <li>She had already eaten when we met.</li>
            </ul>

            <h3>Past Perfect Continuous</h3>
            <p><strong>Usage:</strong> Action started in past and continued up to another past time</p>
            <p><strong>Form:</strong> Subject + had been + verb-ing</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I had been waiting for 2 hours when he arrived.</li>
                <li>It had been raining all night.</li>
            </ul>

            <button class="btn-secondary" onclick="toggleIrregularVerbs()" style="margin: 20px 0; width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px;">
                📜 Show Irregular Verbs List
            </button>

            <div id="irregular-verbs-list" style="display:none; background:#f8f9fa; padding:15px; border-radius:8px; border:1px solid #e0e0e0;">
                <h4 style="margin-top:0;">Common Irregular Verbs</h4>
                <table style="width:100%; border-collapse: collapse; font-size: 14px;">
                    <tr style="border-bottom: 2px solid #ddd; text-align: left;">
                        <th style="padding: 8px;">V1 (Base)</th>
                        <th style="padding: 8px;">V2 (Past)</th>
                        <th style="padding: 8px;">V3 (Participle)</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 8px;">be</td>
                        <td style="padding: 8px;">was/were</td>
                        <td style="padding: 8px;">been</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 8px;">begin</td>
                        <td style="padding: 8px;">began</td>
                        <td style="padding: 8px;">begun</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 8px;">break</td>
                        <td style="padding: 8px;">broke</td>
                        <td style="padding: 8px;">broken</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 8px;">come</td>
                        <td style="padding: 8px;">came</td>
                        <td style="padding: 8px;">come</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 8px;">do</td>
                        <td style="padding: 8px;">did</td>
                        <td style="padding: 8px;">done</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 8px;">eat</td>
                        <td style="padding: 8px;">ate</td>
                        <td style="padding: 8px;">eaten</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 8px;">go</td>
                        <td style="padding: 8px;">went</td>
                        <td style="padding: 8px;">gone</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 8px;">have</td>
                        <td style="padding: 8px;">had</td>
                        <td style="padding: 8px;">had</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 8px;">know</td>
                        <td style="padding: 8px;">knew</td>
                        <td style="padding: 8px;">known</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 8px;">see</td>
                        <td style="padding: 8px;">saw</td>
                        <td style="padding: 8px;">seen</td>
                    </tr>
                     <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 8px;">take</td>
                        <td style="padding: 8px;">took</td>
                        <td style="padding: 8px;">taken</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">write</td>
                        <td style="padding: 8px;">wrote</td>
                        <td style="padding: 8px;">written</td>
                    </tr>
                </table>
            </div>
`,
        exercises: [
            {
                question: "I _____ to the cinema yesterday.",
                options: ["go", "went", "have gone", "was going"],
                correct: 1
            },
            {
                question: "She _____ when I arrived.",
                options: ["cooks", "cooked", "was cooking", "has cooked"],
                correct: 2
            }
        ]
    },
    {
        id: 3,
        title: "Future Tenses",
        difficulty: "easy",
        description: "Will, Going to, Present Continuous for future",
        content: `
    <h3> Will Future</h3>
            <p><strong>Usage:</strong> Predictions, spontaneous decisions</p>
            <p><strong>Form:</strong> Subject + will + base verb</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I will help you.</li>
                <li>It will rain tomorrow.</li>
                <li>She will pass the exam.</li>
            </ul>

            <h3>Going to Future</h3>
            <p><strong>Usage:</strong> Plans, intentions, predictions with evidence</p>
            <p><strong>Form:</strong> Subject + am/is/are going to + base verb</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I am going to study tonight.</li>
                <li>She is going to visit her parents.</li>
                <li>Look at those clouds! It's going to rain.</li>
            </ul>
`,
        exercises: [
            {
                question: "I think it _____ rain tomorrow.",
                options: ["will", "is going to", "going to", "will be"],
                correct: 0
            },
            {
                question: "We _____ visit Paris next month. We've already booked the tickets.",
                options: ["will", "are going to", "going to", "will be"],
                correct: 1
            }
        ]
    },
    {
        id: 4,
        title: "Modal Verbs",
        difficulty: "medium",
        description: "Can, Could, May, Might, Must, Should, etc.",
        content: `
    <h3> Ability: Can / Could</h3>
            <p><strong>Can:</strong> Present ability</p>
            <p><strong>Could:</strong> Past ability, polite requests</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I can speak English.</li>
                <li>She could swim when she was 5.</li>
                <li>Could you help me, please?</li>
            </ul>

            <h3>Permission: May / Can</h3>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>May I use your phone?</li>
                <li>Can I go now?</li>
            </ul>

            <h3>Obligation: Must / Have to</h3>
            <p><strong>Must:</strong> Strong obligation (internal)</p>
            <p><strong>Have to:</strong> Obligation (external rules)</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I must study harder.</li>
                <li>You have to wear a uniform at school.</li>
            </ul>
`,
        exercises: [
            {
                question: "You _____ smoke here. It's forbidden.",
                options: ["mustn't", "don't have to", "shouldn't", "can't"],
                correct: 0
            },
            {
                question: "_____ I borrow your pen?",
                options: ["Must", "Should", "May", "Have to"],
                correct: 2
            }
        ]
    },
    {
        id: 5,
        title: "Conditionals",
        difficulty: "medium",
        description: "Zero, First, Second, Third Conditionals",
        content: `
    <h3> Zero Conditional</h3>
            <p><strong>Usage:</strong> General truths, scientific facts</p>
            <p><strong>Form:</strong> If + present simple, present simple</p>
            <p><strong>Example:</strong> If you heat water to 100°C, it boils.</p>

            <h3>First Conditional</h3>
            <p><strong>Usage:</strong> Real possibility in the future</p>
            <p><strong>Form:</strong> If + present simple, will + base verb</p>
            <p><strong>Example:</strong> If it rains, I will stay home.</p>

            <h3>Second Conditional</h3>
            <p><strong>Usage:</strong> Unreal/unlikely situations in present/future</p>
            <p><strong>Form:</strong> If + past simple, would + base verb</p>
            <p><strong>Example:</strong> If I had money, I would buy a car.</p>

            <h3>Third Conditional</h3>
            <p><strong>Usage:</strong> Unreal situations in the past</p>
            <p><strong>Form:</strong> If + past perfect, would have + past participle</p>
            <p><strong>Example:</strong> If I had studied, I would have passed.</p>
`,
        exercises: [
            {
                question: "If I _____ you, I would accept the offer.",
                options: ["am", "was", "were", "will be"],
                correct: 2
            },
            {
                question: "If she _____ harder, she will pass the exam.",
                options: ["studies", "studied", "will study", "would study"],
                correct: 0
            }
        ]
    },
    {
        id: 6,
        title: "Passive Voice",
        difficulty: "medium",
        description: "Formation and usage of passive voice",
        content: `
    <h3> Passive Voice Formation</h3>
            <p><strong>Form:</strong> Subject + be + past participle (+ by agent)</p>
            
            <h3>Present Simple Passive</h3>
            <p><strong>Active:</strong> They make cars in Japan.</p>
            <p><strong>Passive:</strong> Cars are made in Japan.</p>

            <h3>Past Simple Passive</h3>
            <p><strong>Active:</strong> Shakespeare wrote Hamlet.</p>
            <p><strong>Passive:</strong> Hamlet was written by Shakespeare.</p>

            <h3>Present Perfect Passive</h3>
            <p><strong>Active:</strong> They have built a new bridge.</p>
            <p><strong>Passive:</strong> A new bridge has been built.</p>

            <h3>When to use Passive:</h3>
            <ul>
                <li>When the doer is unknown or unimportant</li>
                <li>In formal/scientific writing</li>
                <li>To emphasize the action or object</li>
            </ul>
`,
        exercises: [
            {
                question: "The book _____ by millions of people.",
                options: ["reads", "is read", "was read", "has read"],
                correct: 1
            },
            {
                question: "The bridge _____ in 1950.",
                options: ["built", "was built", "is built", "has built"],
                correct: 1
            }
        ]
    },
    {
        id: 7,
        title: "Reported Speech",
        difficulty: "hard",
        description: "Direct and indirect speech",
        content: `
    <h3> Tense Changes in Reported Speech</h3>
            <table>
                <tr><th>Direct Speech</th><th>Reported Speech</th></tr>
                <tr><td>Present Simple</td><td>Past Simple</td></tr>
                <tr><td>Present Continuous</td><td>Past Continuous</td></tr>
                <tr><td>Past Simple</td><td>Past Perfect</td></tr>
                <tr><td>Will</td><td>Would</td></tr>
                <tr><td>Can</td><td>Could</td></tr>
            </table>

            <h3>Examples:</h3>
            <p><strong>Direct:</strong> "I am tired," she said.</p>
            <p><strong>Reported:</strong> She said (that) she was tired.</p>

            <p><strong>Direct:</strong> "I will help you," he said.</p>
            <p><strong>Reported:</strong> He said (that) he would help me.</p>

            <h3>Time/Place Changes:</h3>
            <ul>
                <li>today → that day</li>
                <li>tomorrow → the next day</li>
                <li>here → there</li>
                <li>this → that</li>
            </ul>
`,
        exercises: [
            {
                question: 'She said, "I am happy." → She said that she _____ happy.',
                options: ["is", "was", "has been", "will be"],
                correct: 1
            },
            {
                question: 'He said, "I will come tomorrow." → He said he _____ come the next day.',
                options: ["will", "would", "can", "could"],
                correct: 1
            }
        ]
    },
    {
        id: 8,
        title: "Relative Clauses",
        difficulty: "medium",
        description: "Defining and non-defining relative clauses",
        content: `
    <h3> Relative Pronouns</h3>
            <ul>
                <li><strong>Who:</strong> for people</li>
                <li><strong>Which:</strong> for things</li>
                <li><strong>That:</strong> for people or things</li>
                <li><strong>Whose:</strong> for possession</li>
                <li><strong>Where:</strong> for places</li>
                <li><strong>When:</strong> for time</li>
            </ul>

            <h3>Defining Relative Clauses</h3>
            <p>Essential information, no commas</p>
            <p><strong>Example:</strong> The man who lives next door is a doctor.</p>

            <h3>Non-defining Relative Clauses</h3>
            <p>Extra information, use commas</p>
            <p><strong>Example:</strong> My brother, who lives in London, is a teacher.</p>
`,
        exercises: [
            {
                question: "The book _____ I bought yesterday is very interesting.",
                options: ["who", "which", "whose", "where"],
                correct: 1
            },
            {
                question: "The woman _____ car was stolen called the police.",
                options: ["who", "which", "whose", "that"],
                correct: 2
            }
        ]
    },
    {
        id: 9,
        title: "Gerunds & Infinitives",
        difficulty: "medium",
        description: "When to use -ing forms and to-infinitives",
        content: `
    <h3> Gerunds(verb + -ing)</h3>
            <p><strong>Use after:</strong></p>
            <ul>
                <li>Prepositions: interested in studying, good at playing</li>
                <li>Certain verbs: enjoy, finish, avoid, mind, suggest</li>
                <li>As subject: Swimming is good exercise.</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I enjoy reading books.</li>
                <li>She finished doing her homework.</li>
                <li>They avoid eating junk food.</li>
            </ul>

            <h3>Infinitives (to + base verb)</h3>
            <p><strong>Use after:</strong></p>
            <ul>
                <li>Certain verbs: want, need, decide, hope, plan, agree</li>
                <li>Adjectives: happy to see, difficult to understand</li>
                <li>To express purpose: I came here to study.</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I want to learn English.</li>
                <li>She decided to move to London.</li>
                <li>It's easy to make mistakes.</li>
            </ul>

            <h3>Verbs that can take both:</h3>
            <ul>
                <li>start, begin, continue, like, love, hate</li>
                <li>Sometimes meaning changes: stop, remember, forget</li>
            </ul>
`,
        exercises: [
            {
                question: "I enjoy _____ to music in my free time.",
                options: ["listen", "listening", "to listen", "listened"],
                correct: 1
            },
            {
                question: "She decided _____ a new language.",
                options: ["learning", "learn", "to learn", "learned"],
                correct: 2
            },
            {
                question: "Do you mind _____ the window?",
                options: ["open", "opening", "to open", "opened"],
                correct: 1
            }
        ]
    },
    {
        id: 13,
        title: "Conjunctions (Bağlaçlar)",
        difficulty: "medium",
        description: "Connecting words and clauses effectively",
        content: `
    <h3> Coordinating Conjunctions(Eşgüdüm Bağlaçları)</h3>
            <p><strong>FANBOYS:</strong> For, And, Nor, But, Or, Yet, So</p>
            <ul>
                <li><strong>For:</strong> because (çünkü) - I stayed home, for it was raining.</li>
                <li><strong>And:</strong> ve - She sings and dances.</li>
                <li><strong>Nor:</strong> ne de - He doesn't smoke, nor does he drink.</li>
                <li><strong>But:</strong> ama, fakat - I like coffee but not tea.</li>
                <li><strong>Or:</strong> veya - Would you like tea or coffee?</li>
                <li><strong>Yet:</strong> yine de - She's young, yet very wise.</li>
                <li><strong>So:</strong> bu yüzden - It was late, so I went home.</li>
            </ul>
            <p><strong>Usage:</strong> Connect two independent clauses with a comma before the conjunction.</p>

            <h3>Subordinating Conjunctions (Yan Cümle Bağlaçları)</h3>
            <p>Connect a dependent clause to an independent clause.</p>
            
            <h4>Time:</h4>
            <ul>
                <li><strong>when, while, as:</strong> -dığında, -ken</li>
                <li><strong>before, after:</strong> önce, sonra</li>
                <li><strong>until, since:</strong> -e kadar, -den beri</li>
            </ul>
            <p>Example: <em>I'll wait until you finish.</em></p>

            <h4>Cause/Reason:</h4>
            <ul>
                <li><strong>because, since, as:</strong> çünkü</li>
            </ul>
            <p>Example: <em>I stayed home because I was sick.</em></p>

            <h4>Condition:</h4>
            <ul>
                <li><strong>if, unless:</strong> eğer, -medikçe</li>
            </ul>
            <p>Example: <em>If it rains, we'll stay inside.</em></p>

            <h4>Contrast:</h4>
            <ul>
                <li><strong>although, though, even though:</strong> -e rağmen</li>
                <li><strong>whereas, while:</strong> oysa, -ken</li>
            </ul>
            <p>Example: <em>Although it was cold, we went out.</em></p>

            <h3>Correlative Conjunctions (İlişkili Bağlaçlar)</h3>
            <p>Work in pairs to connect balanced elements.</p>
            <ul>
                <li><strong>both...and:</strong> hem...hem de
                    <br>Example: She is both smart and kind.</li>
                <li><strong>either...or:</strong> ya...ya da
                    <br>Example: Either you or I will go.</li>
                <li><strong>neither...nor:</strong> ne...ne de
                    <br>Example: Neither coffee nor tea, thanks.</li>
                <li><strong>not only...but also:</strong> sadece...değil aynı zamanda
                    <br>Example: He is not only smart but also hardworking.</li>
                <li><strong>whether...or:</strong> ...olsun veya olmasın
                    <br>Example: Whether you like it or not, you must go.</li>
            </ul>

            <h3>Key Rules:</h3>
            <ul>
                <li>Use a comma before coordinating conjunctions in compound sentences</li>
                <li>When subordinate clause comes first, use a comma: <em>If it rains, I'll stay home.</em></li>
                <li>No comma when main clause comes first: <em>I'll stay home if it rains.</em></li>
                <li>Correlative conjunctions require parallel structure</li>
            </ul>
`,
        exercises: [
            {
                question: "I was tired, _____ I went to bed early.",
                options: ["so", "because", "although", "if"],
                correct: 0
            },
            {
                question: "_____ it was expensive, she bought the dress.",
                options: ["Because", "Although", "So", "And"],
                correct: 1
            },
            {
                question: "You can have _____ tea _____ coffee.",
                options: ["both...and", "either...or", "neither...nor", "not only...but also"],
                correct: 1
            },
            {
                question: "He studied hard _____ he wanted to pass the exam.",
                options: ["so", "but", "because", "or"],
                correct: 2
            },
            {
                question: "She is _____ intelligent _____ hardworking.",
                options: ["either...or", "neither...nor", "both...and", "whether...or"],
                correct: 2
            }
        ]
    },
    {
        id: 10,
        title: "Articles",
        difficulty: "easy",
        description: "A, An, The, and Zero Article",
        content: `
    <h3> Indefinite Articles(a / an)</h3>
            <p><strong>Use 'a':</strong> before consonant sounds (a book, a university)</p>
            <p><strong>Use 'an':</strong> before vowel sounds (an apple, an hour)</p>
            <p><strong>When to use:</strong></p>
            <ul>
                <li>First mention of something: I saw a dog.</li>
                <li>Jobs: She is a teacher.</li>
                <li>One of many: He lives in a big house.</li>
            </ul>

            <h3>Definite Article (the)</h3>
            <p><strong>When to use:</strong></p>
            <ul>
                <li>Second mention: I saw a dog. The dog was black.</li>
                <li>Unique things: the sun, the moon, the earth</li>
                <li>Superlatives: the best, the tallest</li>
                <li>Musical instruments: play the piano</li>
                <li>Rivers, oceans, mountain ranges: the Thames</li>
            </ul>

            <h3>Zero Article (no article)</h3>
            <p><strong>When NOT to use articles:</strong></p>
            <ul>
                <li>Plural/uncountable general: I like coffee. Dogs are friendly.</li>
                <li>Most countries: Turkey, England (except: the USA, the UK)</li>
                <li>Sports: play football, tennis</li>
                <li>Meals: have breakfast, lunch</li>
            </ul>
`,
        exercises: [
            {
                question: "I need _____ new phone.",
                options: ["a", "an", "the", "no article"],
                correct: 0
            },
            {
                question: "_____ Nile is the longest river in Africa.",
                options: ["A", "An", "The", "No article"],
                correct: 2
            },
            {
                question: "She plays _____ piano very well.",
                options: ["a", "an", "the", "no article"],
                correct: 2
            }
        ]
    },
    {
        id: 11,
        title: "Comparatives & Superlatives",
        difficulty: "easy",
        description: "Comparing things and showing extremes",
        content: `
    <h3> Comparative Forms</h3>
            <p><strong>Short adjectives (+ -er):</strong></p>
            <ul>
                <li>tall → taller: She is taller than me.</li>
                <li>big → bigger: This bag is bigger than that one.</li>
                <li>happy → happier: I'm happier now.</li>
            </ul>

            <p><strong>Long adjectives (more + adj):</strong></p>
            <ul>
                <li>beautiful → more beautiful</li>
                <li>expensive → more expensive</li>
                <li>interesting → more interesting</li>
            </ul>

            <h3>Superlative Forms</h3>
            <p><strong>Short adjectives (the + -est):</strong></p>
            <ul>
                <li>tall → the tallest: He is the tallest in the class.</li>
                <li>big → the biggest</li>
                <li>happy → the happiest</li>
            </ul>

            <p><strong>Long adjectives (the most + adj):</strong></p>
            <ul>
                <li>beautiful → the most beautiful</li>
                <li>expensive → the most expensive</li>
            </ul>

            <h3>Irregular Forms</h3>
            <ul>
                <li>good → better → the best</li>
                <li>bad → worse → the worst</li>
                <li>far → farther/further → the farthest/furthest</li>
            </ul>

            <h3>Using 'as...as'</h3>
            <p>He is as tall as his brother. (equal comparison)</p>
            <p>She isn't as fast as him. (not equal)</p>
`,
        exercises: [
            {
                question: "This book is _____ than that one.",
                options: ["interesting", "more interesting", "most interesting", "the most interesting"],
                correct: 1
            },
            {
                question: "Mount Everest is _____ mountain in the world.",
                options: ["high", "higher", "the highest", "highest"],
                correct: 2
            },
            {
                question: "My English is getting _____.",
                options: ["good", "better", "best", "the best"],
                correct: 1
            }
        ]
    },
    {
        id: 12,
        title: "Phrasal Verbs",
        difficulty: "hard",
        description: "Common phrasal verbs and their meanings",
        content: `
    < h3 > What are Phrasal Verbs ?</h3 >
            <p>A verb + particle (preposition/adverb) that creates a new meaning.</p>

            <h3>Common Phrasal Verbs</h3>
            
            <h4>Separable Phrasal Verbs:</h4>
            <ul>
                <li><strong>turn on/off:</strong> to start/stop a device (Turn on the TV / Turn it on)</li>
                <li><strong>pick up:</strong> to collect, lift (Pick up the phone / Pick it up)</li>
                <li><strong>put on:</strong> to wear (Put on your coat / Put it on)</li>
                <li><strong>take off:</strong> to remove (Take off your shoes)</li>
                <li><strong>give up:</strong> to quit (Don't give up!)</li>
            </ul>

            <h4>Inseparable Phrasal Verbs:</h4>
            <ul>
                <li><strong>look after:</strong> to take care of (She looks after her sister)</li>
                <li><strong>look for:</strong> to search (I'm looking for my keys)</li>
                <li><strong>get on:</strong> to enter a bus/train (Get on the bus)</li>
                <li><strong>get off:</strong> to exit a bus/train</li>
                <li><strong>come across:</strong> to find by chance</li>
            </ul>

            <h4>Three-word Phrasal Verbs:</h4>
            <ul>
                <li><strong>look forward to:</strong> to anticipate eagerly</li>
                <li><strong>get along with:</strong> to have a good relationship</li>
                <li><strong>run out of:</strong> to use all of something</li>
                <li><strong>catch up with:</strong> to reach the same level</li>
            </ul>

            <h3>Tips for Learning:</h3>
            <ul>
                <li>Learn phrasal verbs in context, not individually</li>
                <li>Group them by topic (travel, work, relationships)</li>
                <li>Practice with example sentences</li>
            </ul>
`,
        exercises: [
            {
                question: "I need to _____ my keys. I can't find them anywhere.",
                options: ["look at", "look for", "look after", "look up"],
                correct: 1
            },
            {
                question: "Please _____ the lights when you leave the room.",
                options: ["turn off", "turn on", "turn up", "turn down"],
                correct: 0
            },
            {
                question: "I'm really _____ seeing you again!",
                options: ["looking at", "looking after", "looking forward to", "looking for"],
                correct: 2
            },
            {
                question: "We _____ coffee. Can you buy some?",
                options: ["ran out of", "ran into", "ran away", "ran over"],
                correct: 0
            }
        ]
    }
];

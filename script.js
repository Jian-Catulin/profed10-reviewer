// ==========================================
// 1. MULTIPLE CHOICE BANK (50 Items)
// ==========================================
const mcData = [
    { question: "Article XIV, Section 1 of the 1987 Philippine Constitution mandates the State to protect and promote the right of all citizens to:", options: ["Quality education at all levels", "Free university education", "Specialized vocational training", "International scholarships"], answer: "Quality education at all levels", explanation: "The Constitution specifically guarantees 'Quality education at all levels' for all citizens. This serves as the foundational legal basis for inclusive education in the Philippines, ensuring no one is denied access due to physical, mental, or socio-economic conditions." },
    { question: "Republic Act No. 10533, which institutionalized the K to 12 system, is known as:", options: ["The Enhanced Basic Education Act of 2013", "The Magna Carta for Disabled Persons", "The Indigenous Peoples' Rights Act", "The Juvenile Justice and Welfare Act"], answer: "The Enhanced Basic Education Act of 2013", explanation: "RA 10533 expands basic education from 10 to 12 years. More importantly for SPED, it legally mandates that the curriculum must be learner-centered, inclusive, and developmentally appropriate for all types of learners." },
    { question: "Which law explicitly recognizes the right of Indigenous Cultural Communities to education in their own language?", options: ["RA 8371", "RA 9344", "RA 7277", "PD 603"], answer: "RA 8371", explanation: "RA 8371 is the Indigenous Peoples' Rights Act (IPRA) of 1997. It ensures Indigenous children have the right to an integrated system of education relevant to their needs and traditional cultural methods of teaching." },
    { question: "Presidential Decree No. 603 establishes the right of a child to be born well. It is known as:", options: ["The Child and Youth Welfare Code", "The Anti-Child Abuse Law", "The SPED Act", "The Family Code"], answer: "The Child and Youth Welfare Code", explanation: "PD 603 (The Child and Youth Welfare Code) was enacted in 1974. It outlines the fundamental rights of children, including dignity, care, and the right to a wholesome family life, placing primary duty on the parents." },
    { question: "Republic Act No. 7610 provides special protection for children against:", options: ["Child abuse, exploitation, and discrimination", "Failing grades in school", "Geographical isolation", "Disabilities"], answer: "Child abuse, exploitation, and discrimination", explanation: "RA 7610 is a critical law that allows state intervention when parents, guardians, or caregivers fail or are unable to protect children from conditions that are prejudicial to their physical and emotional development." },
    { question: "Under Republic Act No. 9344, children in conflict with the law are supported through:", options: ["Prevention, intervention, and reintegration", "Immediate incarceration", "Expulsion from school", "Deportation"], answer: "Prevention, intervention, and reintegration", explanation: "RA 9344 (Juvenile Justice and Welfare Act of 2006) focuses on restorative justice rather than punishment. It ensures that youth offenders receive diversion programs and continued educational opportunities instead of standard jail time." },
    { question: "Which Republic Act is known as the Magna Carta for Disabled Persons?", options: ["RA 7277", "RA 10533", "RA 10665", "RA 9442"], answer: "RA 7277", explanation: "RA 7277 establishes the rights of PWDs to rehabilitation, self-development, and integration into mainstream society. It explicitly makes it unlawful for schools to deny admission based purely on a disability." },
    { question: "Republic Act No. 9442 amended RA 7277 to explicitly prohibit:", options: ["Public ridicule and vilification of persons with disability", "The use of sign language in public", "PWDs from attending regular schools", "Inclusive education funding"], answer: "Public ridicule and vilification of persons with disability", explanation: "RA 9442 added strong anti-discrimination clauses. It legally protects PWDs from being mocked, bullied, or vilified in public spaces and media, reinforcing their right to dignity." },
    { question: "The Open High School System Act (RA 10665) provides alternative modalities for learners facing:", options: ["Physical, personal, or geographical constraints", "Strictly medical disabilities", "Financial bankruptcy", "Disciplinary suspension"], answer: "Physical, personal, or geographical constraints", explanation: "RA 10665 broadens access to secondary education through distance learning and flexible schedules for learners who cannot attend standard daily classes due to distance, work, or physical limitations." },
    { question: "Which DepEd Order institutionalized SPED Programs in all schools in 1997?", options: ["DepEd Order No. 26 s. 1997", "DepEd Order No. 72 s. 2009", "DepEd Order No. 21 s. 2019", "DepEd Order No. 8 s. 2015"], answer: "DepEd Order No. 26 s. 1997", explanation: "DO 26 s. 1997 was a landmark policy that mandated the creation of specific SPED centers across the country to improve access to basic education for learners with special needs." },
    { question: "DepEd Order No. 72 s. 2009 established Inclusive Education as a strategy specifically for:", options: ["Increasing the participation rate of children with disabilities", "Decreasing teacher workload", "Replacing all SPED centers", "Funding private schools"], answer: "Increasing the participation rate of children with disabilities", explanation: "DO 72 s. 2009 marked a shift from isolated SPED centers to true inclusion, pushing for children with disabilities to receive appropriate education within regular classroom settings alongside their peers." },
    { question: "Which DepEd Order provides the Policy Guidelines on the K to 12 Basic Education Program to ensure it is inclusive?", options: ["DepEd Order No. 21 s. 2019", "DepEd Order No. 72 s. 2009", "DepEd Order No. 26 s. 1997", "DepEd Order No. 42 s. 2016"], answer: "DepEd Order No. 21 s. 2019", explanation: "DO 21 s. 2019 outlines the modern framework ensuring the standard K-12 curriculum is developmentally relevant, culture-sensitive, flexible, and inclusive for all types of learners." },
    { question: "Republic Act No. 11650 mandates the creation of which key resource center?", options: ["Inclusive Learning Resource Centers (ILRCs)", "Child Find Systems", "Open High Schools", "SPED Headquarters"], answer: "Inclusive Learning Resource Centers (ILRCs)", explanation: "RA 11650 (2022) mandates that every municipality establish ILRCs. These centers provide physical resources, specialists, and support services to regular schools to help them implement inclusive education." },
    { question: "Which law establishes Filipino Sign Language (FSL) as the national sign language?", options: ["RA 11106", "RA 10533", "RA 7277", "RA 9344"], answer: "RA 11106", explanation: "RA 11106 officially recognizes FSL and mandates its use in relevant educational and government contexts, shifting away from the forced use of foreign sign languages like American Sign Language (ASL)." },
    { question: "According to RA 11650, what mechanism is used to locate children with disabilities who are not in school?", options: ["Child Find System", "Juvenile Task Force", "Inclusive Search", "SPED Patrol"], answer: "Child Find System", explanation: "The Child Find System is a proactive, systematic process mandated by law to identify, locate, and evaluate learners with special needs so they can be brought into the educational system." },
    { question: "The right to education for ALL, regardless of condition, is primarily rooted globally in:", options: ["The Universal Declaration of Human Rights", "The K-12 Act", "The Magna Carta", "Local Baranggay Ordinances"], answer: "The Universal Declaration of Human Rights", explanation: "While local laws enforce it, the fundamental concept of inclusive education stems from international agreements like the UDHR and the UN Convention on the Rights of Persons with Disabilities." },
    { question: "What is the primary legal document a teacher uses to outline accommodations for a student under RA 11650?", options: ["Individualized Education Plan (IEP)", "Lesson Plan", "Syllabus", "Diversity Wheel"], answer: "Individualized Education Plan (IEP)", explanation: "The IEP is a legally binding document customized for a specific learner. It details their current performance levels, measurable goals, and the exact accommodations the school must provide." },
    { question: "Under PD 603, who holds the primary right and duty to raise children well?", options: ["The Parents", "The School", "The State", "The Baranggay"], answer: "The Parents", explanation: "PD 603 emphasizes that while the State acts as a protector (parens patriae), the primary right and moral obligation to care for and educate a child belongs to the parents." },
    { question: "RA 8371 (IPRA) ensures education is culturally appropriate. What is 'ICC' short for?", options: ["Indigenous Cultural Communities", "Integrated Child Centers", "Inclusive Classrooms Coalition", "International Core Curriculum"], answer: "Indigenous Cultural Communities", explanation: "ICCs refers to groups of people sharing common bonds of language, customs, and traditions. The law protects their right to preserve these cultures within the educational system." },
    { question: "A student is being bullied strictly because they use a wheelchair. What law is primarily being violated?", options: ["RA 9442 (Amended Magna Carta for PWDs)", "RA 10533 (K-12)", "RA 10665 (Open High School)", "DO 21 s. 2019"], answer: "RA 9442 (Amended Magna Carta for PWDs)", explanation: "RA 9442 explicitly criminalizes the public ridicule, bullying, and vilification of PWDs, making such actions punishable by law." },
    { question: "In Loden’s Diversity Wheel, which is a primary/core dimension of diversity?", options: ["Age", "Income", "Education", "Work Experience"], answer: "Age", explanation: "Primary dimensions (Age, Race, Gender, Physical Abilities) are largely inborn or exert a massive, unchangeable impact. Income and Education are secondary because they can change." },
    { question: "Placing students with disabilities in general classes for specific subjects based on their ability to keep up is called:", options: ["Mainstreaming", "Inclusion", "Integration", "Special Education"], answer: "Mainstreaming", explanation: "Mainstreaming requires the student to 'earn' their way into the regular classroom by meeting standard expectations with minimal alterations, unlike true inclusion." },
    { question: "How does 'Inclusion' differ from 'Integration'?", options: ["Integration requires the student to adapt; Inclusion requires the school to adapt.", "Integration is for gifted learners; Inclusion is for PWDs.", "They are exact synonyms.", "Integration is a DepEd mandate; Inclusion is CHED."], answer: "Integration requires the student to adapt; Inclusion requires the school to adapt.", explanation: "Under integration, a child is placed in a mainstream school but must fit into its existing structures. Inclusion actively reshapes the school's culture and practices to support the child." },
    { question: "According to Piaget, during which stage does a child begin to think logically about concrete events?", options: ["Concrete Operational", "Sensorimotor", "Preoperational", "Formal Operational"], answer: "Concrete Operational", explanation: "The Concrete Operational stage (approx. ages 7-11) marks the beginning of logical thought, replacing the highly imaginative/egocentric Preoperational stage." },
    { question: "Which theorist proposed the Social Learning Theory?", options: ["Albert Bandura", "Jean Piaget", "Lev Vygotsky", "Jean Lave"], answer: "Albert Bandura", explanation: "Bandura proved that learning occurs heavily through observation, imitation, and modeling (e.g., the famous Bobo doll experiment)." },
    { question: "In Vygotsky’s theory, what is the 'Zone of Proximal Development' (ZPD)?", options: ["The distance between independent ability and ability with guidance.", "The physical layout of the classroom.", "A phase of motor skill development.", "The curriculum for gifted learners."], answer: "The distance between independent ability and ability with guidance.", explanation: "ZPD identifies the sweet spot for learning: tasks a child cannot quite do alone but can successfully accomplish with the help of a 'More Knowledgeable Other'." },
    { question: "What is the primary goal of Special Education (SPED)?", options: ["To maximize potential toward self-reliance.", "To isolate learners with disabilities.", "To standardize all exams.", "To provide financial assistance."], answer: "To maximize potential toward self-reliance.", explanation: "SPED is not about isolation; it is about providing customized instruction (like IEPs) so that learners achieve maximum independence and integration into society." },
    { question: "Jean Lave’s Situated Learning theory argues that learning is:", options: ["Situated within authentic activity, context, and culture.", "Strictly cognitive and internal.", "Driven solely by biology.", "Best achieved through exams."], answer: "Situated within authentic activity, context, and culture.", explanation: "Situated learning posits that learning is fundamentally a social process. You learn best by actively participating in a specific community of practice." },
    { question: "Providing temporary support to help a learner reach a higher level of comprehension is called:", options: ["Scaffolding", "Compacting", "Mainstreaming", "Segregating"], answer: "Scaffolding", explanation: "Scaffolding is Vygotsky's concept of bridging the ZPD. The teacher provides support (like sentence starters or visual aids) and gradually removes it as the student learns." },
    { question: "In Loden's Diversity Wheel, 'Income' and 'Education' belong to which category?", options: ["Secondary dimensions", "Primary dimensions", "Tertiary dimensions", "Core dimensions"], answer: "Secondary dimensions", explanation: "Secondary dimensions are attributes that can be changed, acquired, or discarded over the course of a person's lifetime, unlike primary dimensions." },
    { question: "The belief that all students have the right to belong and participate in the general education classroom is:", options: ["Inclusivity", "Exclusive Education", "Standardization", "Isolationism"], answer: "Inclusivity", explanation: "Inclusivity is the core philosophical basis of modern SPED, shifting away from segregation and arguing that diversity enriches the learning environment for everyone." },
    { question: "A learner who has both a high intellectual giftedness and a learning disability is called:", options: ["Twice-exceptional", "Multi-talented", "Atypical", "Mainstreamed"], answer: "Twice-exceptional", explanation: "Twice-exceptional (2e) learners are often misunderstood because their giftedness can mask their disability, or their disability can mask their high intelligence. They require dual support." },
    { question: "Which psychological theory emphasizes that human behavior is learned through 'modeling'?", options: ["Bandura's Social Learning Theory", "Piaget's Cognitive Theory", "Vygotsky's Scaffolding", "Lave's Situated Learning"], answer: "Bandura's Social Learning Theory", explanation: "Modeling is a core component of Bandura's theory. Children watch adults or peers and model their behavior based on the observed rewards or punishments." },
    { question: "Equality means giving everyone the same thing. Equity means:", options: ["Giving everyone what they need to succeed.", "Giving everyone the exact same test.", "Lowering the standards for everyone.", "Removing all rules."], answer: "Giving everyone what they need to succeed.", explanation: "Equity acknowledges that different learners start from different places. It provides proportionate support (like a ramp for a wheelchair user) so everyone reaches the same goal." },
    { question: "If a school builds a physical ramp alongside stairs, this is an example of:", options: ["Accessibility accommodation", "Curriculum compacting", "Cognitive scaffolding", "Mainstreaming"], answer: "Accessibility accommodation", explanation: "Accommodations remove physical or procedural barriers to access, allowing the student to enter the learning environment without changing the actual academic curriculum." },
    { question: "Which developmental domain involves thinking, reasoning, memory, and problem-solving?", options: ["Cognitive", "Physical", "Social", "Emotional"], answer: "Cognitive", explanation: "The cognitive domain covers all intellectual functions. Physical covers motor skills, Social covers peer relationships, and Emotional covers feeling regulation." },
    { question: "During Early Childhood (ages 3 to 8), a typical learner is most likely to demonstrate:", options: ["Increasing independence and play-based learning", "Complex abstract thinking", "Complete emotional regulation", "Advanced academic reasoning"], answer: "Increasing independence and play-based learning", explanation: "Early childhood is defined by autonomy, language acquisition, and play. Abstract thinking and logical peer competence develop in later stages." },
    { question: "When a teacher observes atypical development, what is their FIRST appropriate step?", options: ["Observe and record specific behaviors", "Diagnose the medical condition", "Prescribe medication", "Ignore it"], answer: "Observe and record specific behaviors", explanation: "Teachers are not doctors; they cannot legally diagnose. Their role is to Observe, Document, Refer to specialists, Support the learner, and Strengthen their skills." },
    { question: "Which strategy involves reducing unnecessary repetitive practice for a learner who has already mastered the concept?", options: ["Curriculum compacting", "Flexible pacing", "Enrichment", "Mentorship"], answer: "Curriculum compacting", explanation: "Instead of forcing a gifted learner to do 30 basic math problems they already understand, compacting skips the repetition to provide time for a more complex, real-world project." },
    { question: "If a learner has difficulty expressing themselves verbally, what is the best initial accommodation?", options: ["Give additional processing time", "Force them to answer quickly", "Call on someone else immediately", "Lower their grade"], answer: "Give additional processing time", explanation: "Saying 'Take your time, you can answer when you're ready' reduces communication pressure and anxiety, which often severely hinders expressive language." },
    { question: "Which domain of development focuses on gross and fine motor skills?", options: ["Physical", "Cognitive", "Social", "Emotional"], answer: "Physical", explanation: "Physical development tracks how a child gains control over their large muscles (gross motor, like running) and small muscles (fine motor, like holding a pencil)." },
    { question: "Adolescence (ages 12-18) is primarily characterized by the psychological search for:", options: ["Identity", "Basic attachment", "Sensorimotor reflexes", "Basic vocabulary"], answer: "Identity", explanation: "During adolescence, teenagers undergo massive physical and cognitive changes as they explore independence, establish personal values, and form their adult identity." },
    { question: "Loss of previously acquired skills (regression) in a toddler is a sign of:", options: ["Atypical development", "Typical development", "Advanced intellect", "Early puberty"], answer: "Atypical development", explanation: "While children learn at different paces, severe regression—such as a child who used to speak suddenly going silent—is a major red flag requiring immediate specialist referral." },
    { question: "To help a deaf learner access a spoken lecture, a teacher should use:", options: ["Captions and visual aids", "Loud, exaggerated shouting", "Audio recordings", "Blindfolds"], answer: "Captions and visual aids", explanation: "Shouting does not help deafness and over-articulating ruins lip-reading. Visual supports effectively bypass the auditory barrier entirely." },
    { question: "Instead of saying 'Look here', a teacher with a visually impaired student should:", options: ["Verbalize the visual information step-by-step", "Tap the desk loudly", "Tell a classmate to explain it later", "Skip the visual entirely"], answer: "Verbalize the visual information step-by-step", explanation: "Explicit verbal descriptions (e.g., 'In the top right corner of the diagram, there is a red circle representing...') makes visual content accessible without singling the student out." },
    { question: "A student excels in playing the piano but struggles with standard academics. They are considered:", options: ["Talented", "Gifted", "Mainstreamed", "Delayed"], answer: "Talented", explanation: "In SPED terminology, 'Talent' usually refers to exceptional developed ability in specific areas like arts, music, or sports. 'Giftedness' refers to overall high intellectual or academic capability." },
    { question: "Connecting a highly gifted learner with an expert in the community is a strategy known as:", options: ["Mentorship", "Compacting", "Scaffolding", "Inclusion"], answer: "Mentorship", explanation: "Mentors provide specialized, advanced knowledge that goes far beyond what the standard classroom teacher is equipped or scheduled to teach." },
    { question: "Using a communication board with pictures is an example of:", options: ["Low-tech AAC", "High-tech AAC", "Physical therapy", "Curriculum compacting"], answer: "Low-tech AAC", explanation: "Augmentative and Alternative Communication (AAC) helps non-verbal learners. 'Low-tech' involves no batteries or electronics (like paper charts). 'High-tech' involves iPads or speech-generating apps." },
    { question: "A visual timer helps learners with difficulty hearing transition between activities because it:", options: ["Provides a clear visual cue", "Makes a loud ringing noise", "Vibrates the desk", "Speaks the time remaining"], answer: "Provides a clear visual cue", explanation: "Learners with hearing difficulties often miss oral cues like '5 minutes left!'. A visual timer on the board provides a constant, accessible cue for transitions." },
    { question: "Differentiating by 'Complexity' means:", options: ["Moving from simple recall to analyzing concepts", "Giving the student 50 extra questions", "Letting the student skip school", "Only using multiple choice"], answer: "Moving from simple recall to analyzing concepts", explanation: "Complexity deepens the thought process (moving up Bloom's Taxonomy) for advanced learners. It does NOT mean giving them a higher volume of the exact same easy work." }
];

// ==========================================
// 2. TRUE OR FALSE BANK (30 Items)
// ==========================================
const tfData = [
    { question: "The 1987 Philippine Constitution guarantees the right of all citizens to quality education.", options: ["True", "False"], answer: "True", explanation: "Article XIV, Section 1 explicitly states the State shall protect and promote this right, forming the backbone of inclusive education in the country." },
    { question: "Republic Act No. 10533 is the law that institutionalized the K to 12 system in the Philippines.", options: ["True", "False"], answer: "True", explanation: "Also known as the Enhanced Basic Education Act of 2013, it expanded basic education and legally mandated an inclusive, learner-centered curriculum." },
    { question: "The Indigenous Peoples' Rights Act (RA 8371) ignores the educational rights of ICCs.", options: ["True", "False"], answer: "False", explanation: "RA 8371 strongly protects their right to an integrated system of education that respects their language and traditional methods of learning." },
    { question: "Presidential Decree No. 603 establishes a child's right to be born well and receive protection.", options: ["True", "False"], answer: "True", explanation: "The Child and Youth Welfare Code (1974) outlines fundamental rights, including dignity, basic needs, and a wholesome family environment." },
    { question: "Under RA 9344, children in conflict with the law should be treated with an emphasis on punishment.", options: ["True", "False"], answer: "False", explanation: "RA 9344 (Juvenile Justice and Welfare Act) prioritizes restorative justice, prevention, and reintegration, firmly moving away from punitive jail sentences for minors." },
    { question: "RA 7277 states that learning institutions can deny admission to a student based solely on their disability.", options: ["True", "False"], answer: "False", explanation: "The Magna Carta for Disabled Persons makes it strictly and explicitly unlawful to deny school admission purely based on a physical or mental disability." },
    { question: "RA 9442 amended the Magna Carta for Disabled Persons to prohibit public ridicule.", options: ["True", "False"], answer: "True", explanation: "It added vital legal protections to prevent the vilification, mocking, and bullying of Persons with Disability in public and the media." },
    { question: "The Open High School System Act (RA 10665) only benefits students living in Metro Manila.", options: ["True", "False"], answer: "False", explanation: "It is a national law providing alternative, distance-learning modalities for youths and adults across the country who face geographical or physical constraints." },
    { question: "RA 11650 mandates the creation of Inclusive Learning Resource Centers (ILRCs).", options: ["True", "False"], answer: "True", explanation: "Enacted recently in 2022, it institutes a massive national policy of inclusion, mandating physical resource centers and the widespread use of IEPs." },
    { question: "RA 11106 establishes American Sign Language (ASL) as the national sign language of the Philippines.", options: ["True", "False"], answer: "False", explanation: "It formally establishes Filipino Sign Language (FSL) as the official national sign language, acknowledging the unique cultural identity of the Filipino Deaf." },
    { question: "DepEd Order No. 72 s. 2009 argues that Inclusive Education decreases the participation rate of children.", options: ["True", "False"], answer: "False", explanation: "The exact opposite: It was implemented as a core strategy specifically designed to INCREASE the participation rate of children with special needs." },
    { question: "In Loden’s Diversity Wheel, income is considered a primary dimension of diversity.", options: ["True", "False"], answer: "False", explanation: "Income, education, and geographic location are 'Secondary' dimensions because they can change over time. 'Primary' dimensions are innate (Age, Race, Gender)." },
    { question: "Integration means the school must completely change its curriculum to fit the learner.", options: ["True", "False"], answer: "False", explanation: "That is the definition of Inclusion. Integration merely places the learner in the school, but expects the learner to adapt to the existing mainstream structure." },
    { question: "Vygotsky believed that learning is fundamentally a social process.", options: ["True", "False"], answer: "True", explanation: "His Sociocultural Theory emphasizes that social interaction with parents, peers, and culture must occur before internal psychological development happens." },
    { question: "Teachers are qualified to officially diagnose a child with Autism.", options: ["True", "False"], answer: "False", explanation: "Teachers can only observe, document, and refer. Formal medical and psychological diagnoses must be made by qualified developmental specialists." },
    { question: "Accepting multiple response modes means allowing a student to point or draw instead of just speaking.", options: ["True", "False"], answer: "True", explanation: "This is a key accommodation for learners with expressive language difficulties, allowing them to demonstrate they understand the lesson without forcing them to vocalize." },
    { question: "SPED aims to maximize the potential of learners with special needs toward self-reliance.", options: ["True", "False"], answer: "True", explanation: "The ultimate goal of SPED is not to isolate, but to build skills so the learner can achieve maximum independence and self-reliance in society." },
    { question: "Piaget proposed the Social Learning Theory.", options: ["True", "False"], answer: "False", explanation: "Albert Bandura proposed Social Learning Theory (learning via observation). Piaget proposed the stages of Cognitive Development." },
    { question: "RA 11650 officially mandates the use of Individualized Education Plans (IEPs).", options: ["True", "False"], answer: "True", explanation: "The 2022 law legally requires IEPs for learners needing specially designed instruction, ensuring they receive customized accommodations." },
    { question: "Gifted learners never get bored in a regular classroom.", options: ["True", "False"], answer: "False", explanation: "They frequently disengage and become behavioral problems if they are not intellectually challenged through strategies like curriculum compacting or enrichment." },
    { question: "Sign language is the only way a person with difficulty hearing can communicate.", options: ["True", "False"], answer: "False", explanation: "Individuals with hearing difficulties use a wide variety of methods, including speech reading, writing, gestures, and high-tech assistive hearing devices." },
    { question: "Mainstreaming is exactly the same concept as Inclusion.", options: ["True", "False"], answer: "False", explanation: "Mainstreaming expects the student to 'keep up' with the regular class. Inclusion fundamentally changes the classroom rules and methods to help the student belong." },
    { question: "Early childhood development heavily emphasizes play-based learning.", options: ["True", "False"], answer: "True", explanation: "Play is the primary mechanism through which young children (ages 3-8) explore, build autonomy, and make sense of their environment." },
    { question: "Atypical development means deviating significantly from normal growth milestones.", options: ["True", "False"], answer: "True", explanation: "It indicates that a child is developing much faster, much slower, or differently than typical peers, requiring careful observation and potential intervention." },
    { question: "Regression (loss of previously learned skills) is a normal part of development.", options: ["True", "False"], answer: "False", explanation: "While slight pauses are normal, significant regression (like losing speech or walking ability) is a major red flag for atypical development." },
    { question: "Mentorship is an effective strategy for highly talented learners.", options: ["True", "False"], answer: "True", explanation: "Mentors provide specialized, advanced guidance in specific fields (like advanced music or coding) that goes beyond the standard school curriculum." },
    { question: "DepEd Order 26 s. 1997 institutionalized SPED programs in all schools.", options: ["True", "False"], answer: "True", explanation: "It was a landmark order that initiated the creation of widespread SPED centers to improve access to education for children with disabilities." },
    { question: "DepEd Order 21 s. 2019 mandates an exclusive and rigid K-12 curriculum.", options: ["True", "False"], answer: "False", explanation: "The policy explicitly states the curriculum must be inclusive, flexible, and learner-centered to accommodate diverse learning needs." },
    { question: "Scaffolding in education should be permanent.", options: ["True", "False"], answer: "False", explanation: "Scaffolding is designed to be temporary support. As the learner gains competence and moves through the ZPD, the teacher gradually removes the support." },
    { question: "A child's cognitive domain involves their physical growth and motor skills.", options: ["True", "False"], answer: "False", explanation: "The cognitive domain strictly involves mental processes like thinking, reasoning, and memory. The physical domain involves motor skills." }
];

// ==========================================
// 3. IDENTIFICATION BANK (20 Items)
// ==========================================
const identData = [
    { question: "Educational framework where the school modifies its curriculum and environment to fit the learner.", answer: ["Inclusion", "Inclusive Education"], explanation: "Unlike integration, Inclusion fundamentally changes the entire school system, policies, and physical environment to ensure the learner fits in and succeeds." },
    { question: "The Enhanced Basic Education Act of 2013 (Type the RA and number).", answer: ["RA 10533", "Republic Act 10533", "RA No 10533", "Republic Act No 10533"], explanation: "RA 10533 expanded basic education to 12 years and ensured by law that the resulting curriculum is developmentally appropriate, culture-sensitive, and learner-centered." },
    { question: "The Magna Carta for Disabled Persons (Type the RA and number).", answer: ["RA 7277", "Republic Act 7277", "RA No 7277", "Republic Act No 7277"], explanation: "RA 7277 is the foundational disability law in the Philippines, guaranteeing PWDs access to quality education, rehabilitation, and integration into mainstream society." },
    { question: "Law enacted in 2022 that establishes Inclusive Learning Resource Centers (Type the RA and number).", answer: ["RA 11650", "Republic Act 11650", "RA No 11650", "Republic Act No 11650"], explanation: "RA 11650 is a major recent law providing ILRCs in every municipality and formally mandating the use of the Child Find System and Individualized Education Plans (IEPs)." },
    { question: "The Indigenous Peoples' Rights Act (Type the RA and number).", answer: ["RA 8371", "Republic Act 8371", "RA No 8371", "Republic Act No 8371"], explanation: "RA 8371 protects Indigenous Cultural Communities, giving them the right to establish educational systems that are culturally appropriate to their traditions." },
    { question: "The Juvenile Justice and Welfare Act of 2006 (Type the RA and number).", answer: ["RA 9344", "Republic Act 9344", "RA No 9344", "Republic Act No 9344"], explanation: "RA 9344 protects children in conflict with the law, ensuring they receive restorative justice and educational intervention rather than punitive adult jail sentences." },
    { question: "Law providing protection against child abuse and exploitation (Type the RA and number).", answer: ["RA 7610", "Republic Act 7610", "RA No 7610", "Republic Act No 7610"], explanation: "RA 7610 allows the state to intervene and protect vulnerable youth when their guardians fail to provide a safe environment for their physical and emotional development." },
    { question: "Law recognizing Filipino Sign Language as the national sign language (Type the RA and number).", answer: ["RA 11106", "Republic Act 11106", "RA No 11106", "Republic Act No 11106"], explanation: "RA 11106 formally mandates FSL in schools, broadcasting, and government transactions, recognizing the unique cultural and linguistic identity of the Filipino Deaf." },
    { question: "The Child and Youth Welfare Code (Type PD and number).", answer: ["PD 603", "Presidential Decree 603", "PD No 603", "Presidential Decree No 603"], explanation: "PD 603 outlines the fundamental right of every child to be born well, raised in a wholesome family, and protected from conditions prejudicial to their development." },
    { question: "DepEd Order establishing Inclusive Education as the strategy to increase participation rate (Type DO and number).", answer: ["DO 72", "DepEd Order 72", "DepEd Order No 72", "DO No 72"], explanation: "DepEd Order No. 72 s. 2009 shifted focus toward integrating SPED learners into regular settings to drastically improve their low participation rates." },
    { question: "DepEd Order institutionalizing SPED programs in all schools in 1997 (Type DO and number).", answer: ["DO 26", "DepEd Order 26", "DepEd Order No 26", "DO No 26"], explanation: "DepEd Order No. 26 s. 1997 was the landmark mandate that initiated the creation of specialized SPED centers across the nation." },
    { question: "Theorist who introduced the Zone of Proximal Development.", answer: ["Vygotsky", "Lev Vygotsky"], explanation: "Lev Vygotsky's Sociocultural Theory heavily emphasized the necessity of scaffolding and social interaction in a child's cognitive development." },
    { question: "Theorist who introduced the Social Learning Theory.", answer: ["Bandura", "Albert Bandura"], explanation: "Albert Bandura proved through experiments that children learn behaviors by observing and imitating adult and peer models." },
    { question: "The acronym for the gap between independent ability and ability with guidance.", answer: ["ZPD", "Zone of Proximal Development"], explanation: "The Zone of Proximal Development (ZPD) is the critical learning phase where scaffolding from a teacher or peer is most effective." },
    { question: "Developmental domain involving relationships, cooperation, and interaction.", answer: ["Social", "Social domain", "Social development"], explanation: "The social development domain tracks how a child builds bonds, manages conflict, and interacts with peers and adults." },
    { question: "Developmental stage spanning 12 to 18 years focusing on identity.", answer: ["Adolescence", "Adolescent"], explanation: "Adolescents undergo rapid physical puberty while seeking independence, forming their identity, and developing advanced abstract reasoning skills." },
    { question: "Term for a child's growth pattern that significantly deviates from expected milestones.", answer: ["Atypical", "Atypical development"], explanation: "Atypical development (whether delayed, advanced, or entirely different) requires teachers to strictly observe, document, and provide necessary support." },
    { question: "Teaching strategy that reduces unnecessary repetition once mastery is demonstrated.", answer: ["Compacting", "Curriculum compacting"], explanation: "Curriculum compacting prevents gifted learners from acting out in boredom by replacing easy busywork with complex, enriching challenges." },
    { question: "Acronym for the document required by RA 11650 for specially designed instruction.", answer: ["IEP", "Individualized Education Plan", "Individualized Education Program"], explanation: "An Individualized Education Plan (IEP) is a legal document that tailors the educational goals and required accommodations to the specific needs of the student." },
    { question: "Marilyn Loden's framework illustrating primary and secondary dimensions of human differences.", answer: ["Diversity Wheel", "Loden's Diversity Wheel", "Loden Diversity Wheel"], explanation: "The Diversity Wheel maps out how humans differ, categorizing innate traits (like age/race) as primary, and acquired traits (like income/education) as secondary." }
];

// ---------------------------------------------------------
// ADD QUESTION TYPES (This allows Retry mode to mix them)
// ---------------------------------------------------------
mcData.forEach(q => q.type = "mc");
tfData.forEach(q => q.type = "tf");
identData.forEach(q => q.type = "ident");


// ==========================================
// APP LOGIC & TRACKERS (WITH LOCAL STORAGE)
// ==========================================
// Load saved data from the browser, or start at 0 if it's their first time
let totalAnswered = parseInt(localStorage.getItem("profed10_answered")) || 0;
let totalCorrect = parseInt(localStorage.getItem("profed10_correct")) || 0;
let totalIncorrect = parseInt(localStorage.getItem("profed10_incorrect")) || 0;
let wrongQuestions = JSON.parse(localStorage.getItem("profed10_wrong")) || [];

let currentQuizData = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let currentMode = ""; 

const dashboard = document.getElementById("dashboard-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const identContainer = document.getElementById("identification-container");
const identInput = document.getElementById("ident-input");
const submitIdentBtn = document.getElementById("submit-ident-btn");
const nextBtn = document.getElementById("next-btn");
const questionCounter = document.getElementById("question-counter");
const explanationBox = document.getElementById("explanation-box");
const explanationTitle = document.getElementById("explanation-title");
const explanationText = document.getElementById("explanation-text");

// ---------------------------------------------------------
// DYNAMICALLY CREATE BUTTONS (Retry & Clear)
// ---------------------------------------------------------
// Retry Missed Questions Button
const retryBtn = document.createElement("button");
retryBtn.id = "retry-btn";
retryBtn.className = "hidden";
retryBtn.style.marginTop = "20px";
retryBtn.style.backgroundColor = "#e53e3e"; // Red theme
retryBtn.style.color = "white";
retryBtn.style.padding = "12px 24px";
retryBtn.style.border = "none";
retryBtn.style.borderRadius = "4px";
retryBtn.style.fontSize = "1rem";
retryBtn.style.fontWeight = "bold";
retryBtn.style.cursor = "pointer";
retryBtn.style.width = "100%";
retryBtn.addEventListener("click", () => startQuiz(wrongQuestions, "retry"));

// Clear Progress Button
const clearBtn = document.createElement("button");
clearBtn.id = "clear-btn";
clearBtn.textContent = "🗑️ Clear Saved Progress";
clearBtn.style.marginTop = "10px";
clearBtn.style.backgroundColor = "transparent";
clearBtn.style.color = "#a0aec0";
clearBtn.style.border = "1px solid #4a5568";
clearBtn.style.padding = "10px 24px";
clearBtn.style.borderRadius = "4px";
clearBtn.style.cursor = "pointer";
clearBtn.style.width = "100%";
clearBtn.addEventListener("click", () => {
    if(confirm("Are you sure you want to reset all your scores and missed questions?")) {
        localStorage.clear();
        totalAnswered = 0; totalCorrect = 0; totalIncorrect = 0; wrongQuestions = [];
        updateDashboardStats();
    }
});

// Append Buttons to Dashboard
dashboard.appendChild(retryBtn);
dashboard.appendChild(clearBtn);

// Listeners
document.getElementById("mode-mc-btn").addEventListener("click", () => startQuiz(mcData, "mc"));
document.getElementById("mode-tf-btn").addEventListener("click", () => startQuiz(tfData, "tf"));
document.getElementById("mode-ident-btn").addEventListener("click", () => startQuiz(identData, "ident"));
document.getElementById("return-btn").addEventListener("click", returnToDashboard);
document.getElementById("restart-btn").addEventListener("click", returnToDashboard);
nextBtn.addEventListener("click", loadNextQuestion);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateDashboardStats() {
    document.getElementById("stat-answered").textContent = totalAnswered;
    document.getElementById("stat-correct").textContent = totalCorrect;
    document.getElementById("stat-incorrect").textContent = totalIncorrect;
    
    let accuracy = totalAnswered === 0 ? 0 : Math.round((totalCorrect / totalAnswered) * 100);
    document.getElementById("stat-accuracy").textContent = accuracy + "%";

    // Show or Hide Retry Button based on missed questions
    if (wrongQuestions.length > 0) {
        retryBtn.classList.remove("hidden");
        retryBtn.textContent = `🚨 Retry Missed Questions (${wrongQuestions.length})`;
    } else {
        retryBtn.classList.add("hidden");
    }
}

function returnToDashboard() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    dashboard.classList.remove("hidden");
    updateDashboardStats();
}

function startQuiz(dataArray, mode) {
    currentQuizData = [...dataArray]; 
    shuffleArray(currentQuizData);    
    
    currentMode = mode;
    currentQuestionIndex = 0;
    currentScore = 0;
    
    dashboard.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const currentQuestion = currentQuizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuizData.length}`;

    if (currentQuestion.type === "mc" || currentQuestion.type === "tf") {
        optionsContainer.classList.remove("hidden");
        if (currentQuestion.type === "mc") {
            shuffleArray(currentQuestion.options);
        }
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");
            button.addEventListener("click", () => selectAnswer(button, option, currentQuestion.answer, currentQuestion.explanation));
            optionsContainer.appendChild(button);
        });
    } else if (currentQuestion.type === "ident") {
        identContainer.classList.remove("hidden");
        submitIdentBtn.onclick = () => {
            selectAnswer(null, identInput.value.trim(), currentQuestion.answer, currentQuestion.explanation);
        };
    }
}

function selectAnswer(button, selected, correct, explanation) {
    const normalizedSelected = selected.trim().toLowerCase();
    
    const isCorrect = Array.isArray(correct) 
        ? correct.some(ans => normalizedSelected === ans.trim().toLowerCase())
        : normalizedSelected === correct.trim().toLowerCase();

    const displayAnswer = Array.isArray(correct) ? correct[0] : correct;
    const currentQuestion = currentQuizData[currentQuestionIndex];
    
    const allButtons = document.querySelectorAll(".option-btn");
    allButtons.forEach(btn => btn.disabled = true);
    identInput.disabled = true;
    submitIdentBtn.disabled = true;

    totalAnswered++;
    if (isCorrect) {
        totalCorrect++;
        currentScore++;
        if (button) button.classList.add("correct");
        
        explanationBox.className = "explanation-correct";
        explanationTitle.textContent = "CORRECT";
        explanationTitle.style.color = "#48bb78";

        // Remove from wrong list if they got it right
        wrongQuestions = wrongQuestions.filter(q => q.question !== currentQuestion.question);
    } else {
        totalIncorrect++;
        if (button) button.classList.add("incorrect");
        
        explanationBox.className = "explanation-incorrect";
        explanationTitle.textContent = "NOT QUITE";
        explanationTitle.style.color = "#f56565";

        // Add to wrong list if it's not already there
        if (!wrongQuestions.some(q => q.question === currentQuestion.question)) {
            wrongQuestions.push(currentQuestion);
        }
    }

    // Save to Local Storage immediately
    localStorage.setItem("profed10_answered", totalAnswered);
    localStorage.setItem("profed10_correct", totalCorrect);
    localStorage.setItem("profed10_incorrect", totalIncorrect);
    localStorage.setItem("profed10_wrong", JSON.stringify(wrongQuestions));

    explanationText.innerHTML = `<strong>Answer:</strong> ${displayAnswer}<br><br><strong>📚 More Info:</strong> ${explanation}`;
    
    explanationBox.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizData.length) {
        loadQuestion();
    } else {
        quizScreen.classList.add("hidden");
        resultScreen.classList.remove("hidden");
        document.getElementById("final-score").textContent = `You scored ${currentScore} out of ${currentQuizData.length}`;
    }
}

function resetState() {
    explanationBox.classList.add("hidden");
    nextBtn.classList.add("hidden");
    optionsContainer.innerHTML = "";
    optionsContainer.classList.add("hidden");
    identContainer.classList.add("hidden");
    identInput.value = "";
    identInput.disabled = false;
    submitIdentBtn.disabled = false;
}

// Initialize Dashboard Stats on Page Load
updateDashboardStats();
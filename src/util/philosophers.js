const philosopherDetails = {
  // 🦟 Gadfly philosophers
  Socrates: {
    name: "Socrates",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Socrate_du_Louvre.jpg/220px-Socrate_du_Louvre.jpg",
    description:
      "Socrates, born in Athens around 470 BCE, is often regarded as the father of Western philosophy. Known for his relentless questioning and his method of dialectic inquiry—now called the Socratic method—he sought to challenge assumptions and clarify moral concepts. Socrates never wrote anything himself, and his thoughts were primarily preserved through the writings of his student, Plato. He was sentenced to death for allegedly corrupting the youth of Athens and impiety, choosing to drink poison rather than escape. His legacy is an enduring symbol of the pursuit of truth and intellectual integrity.",
    category: "🦟 Gadfly",
  },
  Diogenes: {
    name: "Diogenes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Diogenes-statue-Sinop-enhanced.jpg/440px-Diogenes-statue-Sinop-enhanced.jpg",
    description:
      "Diogenes of Sinope, born around 412 BCE, was a Greek philosopher and one of the founders of Cynicism. Known for his 🧘‍♂️ Ascetic lifestyle, Diogenes lived in a barrel and rejected conventional social values. He sought self-sufficiency and virtue through living in accordance with nature, famously carrying a lantern in broad daylight, claiming to be looking for an honest man. Diogenes often challenged authority and mocked the powerful, becoming known as a 🦟 Gadfly to society. His irreverence and disdain for materialism have made him an icon of countercultural movements throughout history.",
    category: "🦟 Gadfly",
  },
  MichelDeMontaigne: {
    name: "Michel de Montaigne",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Portrait_of_Michel_de_Montaigne%2C_circa_unknown.jpg/440px-Portrait_of_Michel_de_Montaigne%2C_circa_unknown.jpg",
    description:
      "Michel de Montaigne, born in 1533, was a French Renaissance philosopher known for creating the essay form as a means of exploring thoughts and ideas. In his 'Essays,' Montaigne explored subjects like skepticism, human nature, and ethics, often drawing from personal experience. His writing was introspective and reflective, questioning human certainties and encouraging tolerance and understanding. Montaigne's influence on modern thought is profound, particularly in philosophy and literature. His work laid the foundation for modern skepticism and the exploration of the self, inspiring generations of thinkers who followed.",
    category: "🦟 Gadfly",
  },

  // 🧙‍♂️ Sage philosophers
  Kant: {
    name: "Immanuel Kant",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Immanuel_Kant_-_Gemaelde_1.jpg/220px-Immanuel_Kant_-_Gemaelde_1.jpg",
    description:
      "Immanuel Kant, born in 1724 in Königsberg, Prussia, was a central figure in modern philosophy. Known for his work in metaphysics, ethics, and epistemology, Kant proposed that human experience is shaped by both sensory input and innate structures of the mind. His 'Critique of Pure Reason' revolutionized the way we understand knowledge, arguing that we can never know things as they are in themselves, only as they appear to us. Kant’s moral philosophy, centered on the 'categorical imperative,' advocated for universal moral laws based on reason. His influence extends across philosophy, science, and politics.",
    category: "🧙‍♂️ Sage",
  },
  Confucius: {
    name: "Confucius",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/54/Confucius_Tang_Dynasty.jpg",
    description:
      "Confucius, born in 551 BCE in Lu, China, was a philosopher, teacher, and political figure whose ideas profoundly influenced East Asian culture. His teachings, collected in the 'Analects,' emphasize moral integrity, filial piety, and the importance of social harmony. Confucius advocated for a society governed by virtuous rulers who lead by example rather than coercion. His thoughts on ethics and governance laid the foundation for Confucianism, which shaped Chinese society for over two millennia. Confucius’s philosophy continues to inspire discussions about morality, governance, and the role of education in society.",
    category: "🧙‍♂️ Sage",
  },
  Laozi: {
    name: "Laozi",
    image:
      "https://ethics.org.au/wp-content/uploads/2019/06/Laozi-and-Zhuangzi.jpg",
    description:
      "Laozi, born in the 6th century BCE, is the semi-legendary author of the Tao Te Ching and the founder of Taoism. His philosophy emphasizes simplicity, humility, and harmony with the Tao, which is seen as the fundamental principle governing the universe. Laozi advocated for a life of non-action, or 'wu wei,' where one aligns with the natural flow of life rather than striving against it. His teachings have influenced Chinese thought and culture for centuries, especially in the realms of spirituality, politics, and personal well-being. Laozi remains an enduring symbol of wisdom and serenity.",
    category: "🧙‍♂️ Sage",
  },

  // 🧘‍♂️ Ascetic philosophers
  Nietzsche: {
    name: "Friedrich Nietzsche",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/220px-Nietzsche187a.jpg",
    description:
      "Friedrich Nietzsche, born in 1844 in Röcken, Germany, was a radical thinker whose work questioned traditional values and morality. Known for his critiques of religion, especially Christianity, Nietzsche famously proclaimed that 'God is dead,' asserting that traditional religious beliefs no longer held sway in modern life. His philosophy is also marked by the concepts of the 'Übermensch' (Overman) and the 'will to power,' which describe the human drive to transcend limitations and create new values. Nietzsche’s influence extends beyond philosophy to literature, psychology, and cultural criticism, making him one of the most important figures of modern thought.",
    category: "🧘‍♂️ Ascetic",
  },
  Buddha: {
    name: "Gautama Buddha",
    image: "https://iep.utm.edu/wp-content/media/buddha.jpg",
    description:
      "Gautama Buddha, born Siddhartha Gautama in the 5th century BCE, was a spiritual leader and founder of Buddhism. After years of seeking enlightenment through 🧘‍♂️ Ascetic practices, Buddha achieved nirvana and developed a path known as the Middle Way, which avoids both extreme indulgence and extreme asceticism. His teachings on the Four Noble Truths and the Eightfold Path provide a guide to overcoming suffering and achieving inner peace. The Buddha’s influence spread across Asia, shaping spiritual practices and philosophies. His message of compassion, mindfulness, and detachment from material desires remains relevant and transformative today.",
    category: "🧘‍♂️ Ascetic",
  },
  Epictetus: {
    name: "Epictetus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Epicteti_Enchiridion_Latinis_versibus_adumbratum_%28Oxford_1715%29_frontispiece.jpg/440px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_%28Oxford_1715%29_frontispiece.jpg",
    description:
      "Epictetus, born in 50 CE, was a Stoic philosopher who believed that philosophy was a way of life, not merely a theoretical discipline. Born a slave in the Roman Empire, Epictetus gained his freedom and dedicated himself to teaching Stoicism, emphasizing personal responsibility and inner freedom. His teachings, recorded by his student Arrian in the 'Discourses' and the 'Enchiridion,' stress that while external events are beyond our control, our responses to them are entirely up to us. Epictetus's philosophy of self-discipline, rationality, and acceptance of fate has influenced countless thinkers and continues to resonate today.",
    category: "🧘‍♂️ Ascetic",
  },

  // 🏮 Mandarin philosophers
  Aristotle: {
    name: "Aristotle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg",
    description:
      "Aristotle, born in 384 BCE in Stagira, Greece, was a student of Plato and the teacher of Alexander the Great. He wrote extensively on topics ranging from ethics and politics to biology and metaphysics, and his work laid the foundation for much of Western intellectual history. Aristotle’s ethical philosophy emphasized the importance of achieving virtue through rational activity and balancing the extremes of excess and deficiency—a concept he called the 'Golden Mean.' His writings on logic and science shaped Western thought for centuries, and his influence is still felt in contemporary philosophy, science, and political theory.",
    category: "🏮 Mandarin",
  },
  ThomasAquinas: {
    name: "Thomas Aquinas",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/St-thomas-aquinasFXD.jpg/440px-St-thomas-aquinasFXD.jpg",
    description:
      "Thomas Aquinas, born in 1225, was an Italian Catholic priest, philosopher, and theologian. His synthesis of Aristotelian philosophy with Christian doctrine became the cornerstone of Catholic theology, especially in his monumental work 'Summa Theologica.' Aquinas argued that reason and faith were complementary, and that natural law—accessible through human reason—was a reflection of divine law. He believed in the existence of an objective moral order and emphasized the importance of virtues like justice and prudence. His ideas had a profound impact on Christian theology and Western philosophy, influencing areas such as ethics, metaphysics, and political theory.",
    category: "🏮 Mandarin",
  },
  Maimonides: {
    name: "Maimonides",
    image:
      "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT0yOPmgOXDxe8YQzuSrwDHrug0eAkuiuD_2vspv0yzHU1letbfAeGBKEnleqqEL4Oo",
    description:
      "Maimonides, born in 1138 in Córdoba, Spain, was a medieval Jewish philosopher, rabbi, and physician. Known for his work 'The Guide for the Perplexed,' Maimonides sought to reconcile Aristotelian philosophy with Jewish religious thought. His influence extended beyond Jewish scholarship into the broader world of medieval philosophy, particularly in the areas of metaphysics, ethics, and theology. Maimonides also made significant contributions to Jewish law with his codification of the Talmud. His work has been a central text in both Jewish and non-Jewish intellectual traditions, and he remains a towering figure in Jewish philosophy.",
    category: "🏮 Mandarin",
  },

  // 🧪 Curiosa philosophers
  Sartre: {
    name: "Jean-Paul Sartre",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sartre_1967_crop.jpg/220px-Sartre_1967_crop.jpg",
    description:
      "Jean-Paul Sartre, born in 1905 in Paris, was a leading existentialist philosopher, playwright, and novelist. Sartre's work explored themes of freedom, responsibility, and the meaning of existence, particularly in his seminal work 'Being and Nothingness.' He believed that humans are 'condemned to be free,' meaning that they must create meaning in a world without inherent purpose. Sartre’s existentialism, along with his political activism, influenced a generation of intellectuals and students. He was awarded the Nobel Prize in Literature in 1964 but declined it, believing that accepting it would compromise his independence.",
    category: "🧪 Curiosa",
  },
  SimoneDeBeauvoir: {
    name: "Simone de Beauvoir",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZBb_X2-UYrgoQQGBNKHl3Vl7tiy72Ttt42nQg87Ptbc_bkb7k",
    description:
      "Simone de Beauvoir, born in 1908, was a French existentialist philosopher, feminist, and writer. She is best known for her seminal work 'The Second Sex,' which is regarded as a foundational text in feminist philosophy. In it, she explores the social construction of womanhood and the ways in which women have been historically oppressed. A lifelong companion of Jean-Paul Sartre, Beauvoir contributed significantly to existentialist thought, especially with her discussions on freedom, ethics, and the nature of oppression. Her work has inspired countless women and continues to be a major influence in philosophy and feminist theory.",
    category: "🧪 Curiosa",
  },
  BlaisePascal: {
    name: "Blaise Pascal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Blaise_Pascal_Versailles.JPG/440px-Blaise_Pascal_Versailles.JPG",
    description:
      "Blaise Pascal, born in 1623, was a French mathematician, physicist, and religious philosopher. Known for his contributions to probability theory and projective geometry, Pascal is also famous for his religious writings, particularly the 'Pensées,' where he explores the nature of faith and reason. Pascal’s 'wager' suggests that it is better to believe in God, as the potential benefits far outweigh the costs. His work straddles both science and theology, making him a unique figure in intellectual history. Pascal's thoughts on human nature, faith, and reason continue to influence modern philosophy and religious thought.",
    category: "🧪 Curiosa",
  },

  // 🎩 Courtier philosophers
  Voltaire: {
    name: "Voltaire",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Atelier_de_Nicolas_de_Largilli%C3%A8re%2C_portrait_de_Voltaire%2C_d%C3%A9tail_%28mus%C3%A9e_Carnavalet%29_-001.jpg/440px-Atelier_de_Nicolas_de_Largilli%C3%A8re%2C_portrait_de_Voltaire%2C_d%C3%A9tail_%28mus%C3%A9e_Carnavalet%29_-001.jpg",
    description:
      "Voltaire, born in 1694 as François-Marie Arouet, was a French Enlightenment writer, historian, and philosopher. Known for his wit and criticism of the Church and state, Voltaire advocated for civil liberties, freedom of expression, and the separation of church and state. His most famous work, 'Candide,' satirized the optimistic philosophies of his day. Voltaire’s biting critiques of religious and political oppression made him one of the leading figures of the French Enlightenment. His influence on later intellectual movements, especially in the areas of politics, religion, and human rights, cannot be overstated.",
    category: "🎩 Courtier",
  },
  NiccolòMachiavelli: {
    name: "Niccolò Machiavelli",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Portrait_of_Niccol%C3%B2_Machiavelli.jpg/1280px-Portrait_of_Niccol%C3%B2_Machiavelli.jpg",
    description:
      "Niccolò Machiavelli, born in 1469 in Florence, was an Italian diplomat, philosopher, and writer. His best-known work, 'The Prince,' is a treatise on political power and pragmatic rule. Often considered the father of modern political science, Machiavelli’s name has become synonymous with political cunning and manipulation, though his works explore much deeper themes of leadership and governance. He believed that rulers should prioritize stability and power, even if it required unethical actions. His writings continue to be studied and debated, making him one of the most influential political thinkers of all time.",
    category: "🎩 Courtier",
  },
  MarcusAurelius: {
    name: "Marcus Aurelius",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/MSR-ra-61-b-1-DM.jpg/440px-MSR-ra-61-b-1-DM.jpg",
    description:
      "Marcus Aurelius, born in 121 CE, was a Roman emperor and one of the most significant Stoic philosophers. His work 'Meditations,' written during his military campaigns, remains a cornerstone of Stoic philosophy. Marcus Aurelius emphasized the importance of self-control, duty, and rationality in achieving inner peace and virtue. His Stoic principles guided him as he dealt with the challenges of ruling a vast empire, balancing personal reflection with the demands of leadership. 'Meditations' continues to be widely read today for its wisdom on ethics, resilience, and maintaining composure in the face of adversity.",
    category: "🎩 Courtier",
  },
};

export default philosopherDetails;

import type { ActContent } from '../types';

/**
 * ACT 14 — THE LETTERS (Romans–Jude)
 * The apostolic mail: occasional letters that teach the young church how to
 * believe, love, and endure. Matches the Act 1 depth/tone benchmark.
 */
export const theLetters: ActContent = {
  number: 14,
  slug: 'the-letters',
  title: 'The Letters',
  movement: 'restoration',
  books: 'Romans–Jude',
  era: 'the apostolic age',
  accent: '#185FA5',
  icon: 'mail',
  teaser: 'Letters that teach the young church how to believe, love, and endure.',

  featuredVerse: {
    ref: 'Romans 8:38–39',
    text: 'For I am persuaded that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers, nor height, nor depth, nor any other created thing, will be able to separate us from God\'s love, which is in Christ Jesus our Lord.',
    translation: 'WEB',
  },

  overview: `After the Gospels tell the story of Jesus and the Acts of the Apostles tells how the message spread, the New Testament does something surprising: it hands us a stack of *mail*. Twenty-one letters — roughly a third of the New Testament — make up this act. They are not abstract treatises composed in a study, but *occasional* letters: real correspondence written to real first-century churches (in Rome, Corinth, Galatia, Ephesus, Philippi, Colossae, Thessalonica) and to real individuals (Timothy, Titus, Philemon), addressing real situations — a quarrel splitting a congregation, a false teaching gaining ground, a community buckling under persecution, a friend who needs encouragement. They are the apostles' voice carrying on where the apostles themselves could not be present.

The letters fall into two broad groups. The **Pauline epistles** are the thirteen that bear the name of Paul — Romans through Philemon — the most prolific voice of the apostolic age. The **General (or "Catholic," meaning universal) epistles** gather the rest: Hebrews, James, 1–2 Peter, 1–3 John, and Jude, written by other leaders of the early church to a wider audience. Composed across roughly **AD 48 to 95**, several of these letters are the earliest Christian writings we possess — older than the written Gospels. They were dictated, carried by hand across the Roman world, read aloud to gathered believers, copied, passed from church to church, and treasured.

Because the letters are not a single story but a collection of teaching, the "timeline" below is *thematic* — a guided tour of their landmark passages rather than a sequence of events. And what passages they are. Here the New Testament unfolds the *meaning* of Christ's death and resurrection and translates it into a way of life: grace and faith, new life in the Spirit, the church as one body, love as the mark of a disciple, hope that holds under suffering, and holy living that flows from sound belief. Written to *them*, in their crises and questions, the letters were kept because the church recognized they were also written, by God's providence, for *us*.`,

  context: `In genre these are ancient letters, and they follow the conventions of their day: an opening greeting (sender, recipient, blessing), a thanksgiving, the main body, practical exhortation, and a closing with personal greetings. They were usually *dictated* to a secretary, or amanuensis — in Romans, the scribe even signs his own name: "I, Tertius, who write the letter, greet you" (Romans 16:22) — then entrusted to a trusted carrier, read aloud to the assembled church, and circulated onward (Colossians 4:16 asks one letter to be passed to a neighboring congregation). Paul's undisputed letters are among the oldest Christian documents in existence; 1 Thessalonians dates to around AD 50, within roughly twenty years of the crucifixion. The whole corpus spans from the late 40s to the 90s of the first century.

The setting behind the letters is a scattered, often poor, frequently pressured network of house churches dotted across the empire — Jew and Gentile learning, sometimes painfully, to be one family under a crucified and risen Lord. The letters answer the real fractures of that world: the rivalries and excesses at Corinth, the legalism threatening Galatia, the strange teaching menacing Colossae, the grief and fear of believers facing slander and persecution. Their purpose, throughout, is twofold: to anchor the young church in the *gospel of grace*, and to form it into a community shaped by *faith, hope, and love*. A note for the honest reader: scholars discuss the authorship of several of these letters (handled fairly in the questions below). Across those debates, the historic church — Catholic, Orthodox, and Protestant alike — received all twenty-one as apostolic and authoritative Scripture, and reads them so today.`,

  timeline: [
    {
      ref: 'Romans 3–5',
      title: 'Justified by faith — peace with God',
      detail:
        'Paul\'s masterwork argues that all alike have sinned, and all who trust Christ are "justified freely by his grace" (3:24) — declared right with God not by earning but as a gift — so that, justified by faith, "we have peace with God" (5:1).',
    },
    {
      ref: 'Romans 8',
      title: 'Life in the Spirit',
      detail:
        'There is now no condemnation for those in Christ. The Spirit dwells in us, makes us God\'s children who cry "Abba, Father," and seals the promise that nothing "will be able to separate us from God\'s love" (8:38–39).',
    },
    {
      ref: 'Romans 12',
      title: 'A living sacrifice',
      detail:
        'Doctrine turns to daily life: "present your bodies a living sacrifice, holy, acceptable to God" (12:1) — worship as a whole-life offering, the mind renewed, love made sincere, evil overcome with good.',
    },
    {
      ref: '1 Corinthians 13',
      title: 'The way of love',
      detail:
        'Set in the middle of a debate about spiritual gifts, Paul\'s hymn to love insists that without love the greatest gifts are mere noise. "Love never fails," and of faith, hope, and love, "the greatest of these is love" (13:8, 13).',
    },
    {
      ref: '1 Corinthians 15',
      title: 'The resurrection and the resurrection body',
      detail:
        'The earliest summary of the gospel — "Christ died for our sins... was raised on the third day" (15:3–4) — and the promise that we too will be raised, the perishable clothed with the imperishable, death swallowed up in victory.',
    },
    {
      ref: 'Galatians 5:22–23',
      title: 'The fruit of the Spirit',
      detail:
        'The mark of a Spirit-led life is not anxious rule-keeping but fruit that grows: "love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control. Against such things there is no law."',
    },
    {
      ref: 'Ephesians 2:8–10',
      title: 'Saved by grace, created for good works',
      detail:
        '"By grace you have been saved through faith... it is the gift of God, not of works" (2:8–9) — and yet we are "created in Christ Jesus for good works" (2:10). Grace is the root; good works are the fruit.',
    },
    {
      ref: 'Philippians 2',
      title: 'The humility of Christ',
      detail:
        '"Have this in your mind, which was also in Christ Jesus," who "emptied himself" and "humbled himself, becoming obedient to death" — and was therefore exalted, that at his name every knee should bow (2:5–11).',
    },
    {
      ref: 'Colossians 1',
      title: 'The supremacy of Christ',
      detail:
        'Christ is "the image of the invisible God, the firstborn of all creation"; all things were created through him and for him, "and in him all things are held together" (1:15–17) — and through his blood God reconciles all things.',
    },
    {
      ref: 'Hebrews 11',
      title: 'The hall of faith',
      detail:
        'A roll call of those who lived and died by faith — Abel, Noah, Abraham, Moses, and many more — faith being "assurance of things hoped for, proof of things not seen" (11:1), all of them awaiting what is fulfilled in Christ.',
    },
    {
      ref: 'Hebrews 12',
      title: 'Running the race',
      detail:
        'Surrounded by "so great a cloud of witnesses," we "run with perseverance the race that is set before us, looking to Jesus, the author and perfecter of faith," who endured the cross for the joy set before him (12:1–2).',
    },
    {
      ref: 'James 2',
      title: 'Faith that works',
      detail:
        '"Faith, if it has no works, is dead in itself" (2:17). Genuine faith proves itself in deeds of love — caring for the poor, showing mercy — not in words alone or in belief that never moves the hands.',
    },
    {
      ref: '1 Peter 1',
      title: 'A living hope',
      detail:
        'To believers under fire, Peter blesses God who "caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead" (1:3) — an inheritance kept in heaven, present trials refining faith like gold.',
    },
    {
      ref: '1 John 4',
      title: 'God is love',
      detail:
        '"Beloved, let\'s love one another, for love is of God... God is love" (4:7–8). He loved us first and sent his Son as the atoning sacrifice for our sins; therefore we love one another.',
    },
  ],

  deepDive: [
    {
      id: 'grace-and-justification',
      heading: 'Justified by faith — the heart of the gospel (Romans & Galatians)',
      body: `Beneath the surface of Romans and Galatians beats one urgent question: how can guilty people be made right with a holy God? The letters' answer is the engine of the whole New Testament — *not by earning, but by grace, received through faith.*

Paul lays it out like a court case. "All have sinned, and fall short of the glory of God" (Romans 3:23); none of us can clear our own name. And then the verdict no one expected: those who trust Christ are "justified freely by his grace through the redemption that is in Christ Jesus" (3:24). To *justify* is a courtroom word — to declare a person righteous. God does not pretend we are innocent; rather, Christ bears our guilt, and his righteousness is credited to us, so that "a man is justified by faith apart from the works of the law" (3:28). Paul's proof is Abraham, who "believed God, and it was accounted to him for righteousness" (4:3, quoting Genesis 15:6) — counted righteous by faith, before the law was given, before he was circumcised. Faith, not achievement, is the empty hand that receives the gift.

Galatians fights the same battle on a different front. Some were insisting that Gentile believers must take on the full Mosaic law to truly belong. Paul will not have it: "a man is not justified by the works of the law but through faith in Jesus Christ" (Galatians 2:16). To add law-keeping as the *basis* of acceptance is, he says, to empty the cross of its power.

The result is freedom and peace: "Being therefore justified by faith, we have peace with God through our Lord Jesus Christ" (Romans 5:1). This is the good news that has set countless burdened consciences free — you are accepted not because you climbed up to God, but because God came down to you. A word of charity here: Catholic and Protestant traditions have described the mechanics differently — imputed versus infused righteousness, and how works relate to it — yet the 1999 *Joint Declaration on the Doctrine of Justification* affirmed together what these letters proclaim: we are saved by grace, through faith, on account of Christ alone.`,
    },
    {
      id: 'life-in-the-spirit',
      heading: 'Life in the Spirit (Romans 8)',
      body: `If justification answers *how we are accepted*, Romans 8 answers *how we are changed* — and it is the summit of Paul's writing, perhaps of the whole New Testament. Being declared right with God is not the finish line; it is the doorway into a transformed life carried along by God's own Spirit.

It opens with relief: "There is therefore now no condemnation to those who are in Christ Jesus" (8:1). The guilty verdict is gone for good. And the same Spirit who raised Jesus from the dead now lives in the believer, putting the old self to death and bringing forth new life — the fruit of the Spirit Paul names elsewhere: "love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control" (Galatians 5:22–23). This is not gritted-teeth moral effort but a life *led* by the Spirit.

The Spirit also makes us family. "You received the Spirit of adoption, by whom we cry, 'Abba! Father!'" (8:15) — *Abba* is the warm, trusting word of a child. We are no longer slaves but sons and daughters, heirs with Christ. And when we are too weak even to pray, the Spirit "makes intercession for us with groanings which can't be uttered" (8:26). Underneath our faltering, God himself is praying us home, and "all things work together for good for those who love God" (8:28), being conformed to the image of his Son.

Then the chapter rises to its great crescendo, which is also this act's featured verse. "If God is for us, who can be against us?" (8:31). Nothing — not death, not life, not any power in heaven or earth — "will be able to separate us from God's love which is in Christ Jesus our Lord" (8:38–39). The Christian life, Paul insists, is not us holding on to God by our strength, but God holding on to us by his Spirit, and never letting go.`,
    },
    {
      id: 'the-body-of-christ',
      heading: 'One body, many members — the church (1 Corinthians & Ephesians)',
      body: `The letters never imagine a solitary Christian. To belong to Christ is to belong to his *body* — and the church is not an organization we join but an organism we are made part of.

Paul's favorite image gets its fullest treatment in 1 Corinthians 12. The church is one body with many members — eye, hand, foot, ear — each indispensable, each gifted differently by the same Spirit "for the profit of all" (12:7). No member may say to another, "I have no need of you." And the parts are bound together so deeply that "if one member suffers, all the members suffer with it; if one member is honored, all the members rejoice" (12:26). "Now you are the body of Christ, and members individually" (12:27).

Ephesians lifts the image higher still. Christ is the *head*, and from him the whole body grows and "builds itself up in love," as every part does its work (Ephesians 4:16). The ancient wall between Jew and Gentile is torn down — "he is our peace, who made both one" (2:14) — so that former strangers become "fellow citizens with the saints, and of the household of God" (2:19). This is why the letters spend so much ink on unity, humility, patience, and forgiveness: "bearing with one another, and forgiving each other... and above all these things, walk in love" (Colossians 3:13–14).

The deep texture of this shared life has a name in the letters: *koinonia* — fellowship, partnership, communion. It is not mere friendly company but a genuine mutual belonging — sharing Christ's life and Spirit, and so sharing one another's burdens and joys. The church, in the vision of the letters, is the visible body of the risen Lord, his hands and feet, in the world.`,
    },
    {
      id: 'the-way-of-love',
      heading: 'The more excellent way (1 Corinthians 13)',
      body: `Dropped into the middle of a very practical argument about spiritual gifts, Paul suddenly writes the most luminous prose in all his letters. The Corinthians prized the spectacular gifts — tongues, prophecy, dazzling knowledge — and Paul stops them cold to show them "a more excellent way."

"If I speak with the languages of men and of angels, but don't have love, I have become sounding brass, or a clanging cymbal" (13:1). Eloquence without love is just noise. Prophecy, knowledge, mountain-moving faith, even self-sacrifice — without love, he says, "it profits me nothing." Then comes the portrait, the most quoted lines Paul ever wrote: "Love is patient and is kind; love doesn't envy. Love doesn't brag, is not proud... doesn't seek its own" but "bears all things, believes all things, hopes all things, endures all things" (13:4–7).

And the verdict on what lasts: the showy gifts will pass away, but "love never fails" (13:8). At the end, "faith, hope, and love remain — these three. The greatest of these is love" (13:13).

This is no greeting-card sentiment. It is the cross itself, spelled out as a way of life: the self-giving love — *agape* — that God showed in Christ, now made the defining mark of everyone who follows him. Read it slowly, and let it search you. One old practice is to read the chapter again with your own name in place of the word "love" — *I am patient, I am kind, I do not insist on my own way* — to feel both how far we fall short and how completely we are loved by the One of whom every line is perfectly true.`,
    },
    {
      id: 'the-humility-and-supremacy-of-christ',
      heading: 'The mind of Christ — humility and supremacy (Philippians 2 & Colossians 1)',
      body: `Two of the letters' most soaring passages hold a single paradox together: the Christ who is highest is the Christ who stooped lowest.

Philippians 2 calls us *downward*. "Have this in your mind, which was also in Christ Jesus, who, existing in the form of God... emptied himself, taking the form of a servant... and being found in human form, he humbled himself, becoming obedient to death, yes, the death of the cross" (2:5–8). This is the shape of the whole Christian life — not grasping but self-emptying, not climbing over others but kneeling to serve them. Theologians call it the *kenosis*, the "self-emptying" of the Son.

Yet the very same passage soars *upward*. "Therefore God also highly exalted him, and gave to him the name which is above every name; that at the name of Jesus every knee should bow... and that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father" (2:9–11). The path of humility is the path to glory; the servant is the Lord of all.

Colossians 1 then sets Christ at the very summit of reality. "He is the image of the invisible God, the firstborn of all creation. For by him all things were created, in the heavens and on the earth... All things have been created through him and for him. He is before all things, and in him all things are held together" (1:15–17). The universe is not only made *through* him; it is held together, this moment, *in* him. And the climax: through his blood God was pleased "to reconcile all things to himself... having made peace through the blood of his cross" (1:20).

Hold the two passages together and you have the great wonder of the letters: the One supreme over the cosmos is the One who knelt in the dust to die. The letters never let us separate the crown from the cross.`,
    },
    {
      id: 'faith-and-works',
      heading: 'Faith that works (James)',
      body: `James writes with the bluntness of a wisdom teacher, more like Proverbs or the Sermon on the Mount than like Paul's careful arguments. His concern is that faith reach the hands. "Be doers of the word, and not only hearers, deluding your own selves" (1:22). True religion, he says, is to "visit the fatherless and widows in their affliction, and to keep oneself unstained by the world" (1:27).

His sharpest lines have troubled some readers: "faith, if it has no works, is dead in itself" (2:17); and even, "by works a man is justified, and not only by faith" (2:24). Doesn't that flatly contradict Paul, who insisted we are justified by faith *apart* from works? Read closely, the two are friends, not enemies (the question is taken up fully below).

James is not attacking grace. He is attacking a *counterfeit* faith — a merely intellectual assent that costs nothing and changes nothing. "You believe that God is one," he says with biting irony; "the demons also believe, and shudder" (2:19). The demons have orthodox theology and are still in rebellion. The faith that *saves* is not bare agreement but living trust, and living trust inevitably shows itself, as Abraham's did, in action. "As the body apart from the spirit is dead, even so faith apart from works is dead" (2:26) — works are not the engine of faith but its breath, the sign that it is alive.

Paul would nod in full agreement: the faith that justifies is "faith working through love" (Galatians 5:6). Paul guards one flank — that we never imagine we can *earn* God's acceptance. James guards the other — that we never settle for a cheap, fruitless faith that leaves us, and our neighbor, untouched. Together they keep the one treasure of the gospel safe.`,
    },
    {
      id: 'living-hope-and-perseverance',
      heading: 'A living hope, and running the race (Hebrews & 1 Peter)',
      body: `Many of these letters were written to people under real pressure — mocked, pushed to the margins, sometimes hunted. They answer suffering not with platitudes but with *hope* that has teeth.

First Peter opens with a doxology that becomes an anchor: "Blessed be the God and Father of our Lord Jesus Christ, who according to his great mercy caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead" (1:3). Because Jesus is risen, our hope is not wishful thinking but a *living* thing, tied to an inheritance "reserved in Heaven" that no trial can spoil or steal. And so present grief is reframed: "though now for a little while... you have been grieved in various trials" (1:6), faith is being refined like gold in fire, proving genuine, coming out radiant.

Hebrews is written to believers tempted to give up, to drift back, to let go of Christ under the strain. Its answer is to lift their eyes. First it parades the great "hall of faith" (chapter 11) — Abel, Noah, Abraham and Sarah, Moses, Rahab, and a host of others who staked their lives on promises they did not live to see, faith being "assurance of things hoped for, proof of things not seen" (11:1). Then it turns that crowd into encouragement: "seeing we are surrounded by so great a cloud of witnesses, let us lay aside every weight... and let's run with perseverance the race that is set before us" (12:1).

But the real secret of endurance is not the witnesses; it is the One they point to: "looking to Jesus, the author and perfecter of faith, who for the joy that was set before him endured the cross, despising its shame" (12:2). We can keep running, the letters insist, because the One who calls us has run ahead of us through suffering and out the other side — and he holds us fast to the end.`,
    },
    {
      id: 'god-is-love',
      heading: 'God is love (1 John)',
      body: `John writes as an old man to people he calls his "little children," and he distills the whole gospel into three of the most famous words in any language: "God is love" (1 John 4:8, repeated at 4:16). It is not that God merely *loves*, as one activity among many; love is the very heart of who he is.

And John refuses to leave it abstract or sentimental. He grounds it at the cross: "By this God's love was revealed in us, that God has sent his one and only Son into the world that we might live through him. In this is love, not that we loved God, but that he loved us, and sent his Son as the atoning sacrifice for our sins" (4:9–10). Love is not first our reaching up toward God — it is God's reaching down to us, at the cost of his own Son, while we were still turned away. The initiative is entirely his.

That love, once received, cannot stay still. It remakes the people it touches: "We love him, because he first loved us" (4:19). Our love is the echo of his, the overflow of a cup he filled. And so John makes love the decisive test of whether our faith is real: "If a man says, 'I love God,' and hates his brother, he is a liar" (4:20). You cannot truly love the God you have not seen while despising the brother or sister right in front of you.

Here, fittingly, the letters come to rest. All their theology of grace and faith, all their calls to holiness and endurance, all their high vision of Christ — every stream finally flows back to this: the God who *is* love, who loved us first, who gave his Son for us, and who now teaches our clumsy hearts to love one another. That is the whole story, and the whole task.`,
    },
  ],

  people: [
    {
      slug: 'paul',
      name: 'Paul (Saul of Tarsus)',
      oneLine: 'The persecutor turned apostle — the most prolific voice of the early church.',
      bio: `Once Saul of Tarsus, a zealous Pharisee who hunted down the first Christians, Paul was stopped in his tracks by the risen Christ on the road to Damascus and became the gospel's most tireless missionary. Across three great journeys he planted churches all around the Mediterranean — in Galatia, Philippi, Corinth, Ephesus, Thessalonica and beyond — and when he could not be present, he wrote, to keep his young congregations grounded.

Thirteen letters in the New Testament bear his name (Romans through Philemon), often dictated to a secretary, frequently composed from prison, almost always pressing one message: Christ crucified and risen, and the grace of God offered freely to Jew and Gentile alike. His mind shaped Christian theology more than any other human author, yet he called himself "the least of the apostles." Tradition holds he was martyred in Rome under Nero.`,
      keyRefs: ['Romans 1:1', 'Galatians 2:20', 'Philippians 3:7–8'],
      appearsInActs: [13, 14],
    },
    {
      slug: 'peter',
      name: 'Peter (Simon)',
      oneLine: 'The fisherman Jesus called "rock" — leader of the apostles, writing to steady the suffering.',
      bio: `Simon the fisherman, whom Jesus renamed Peter — "rock" — was the impulsive, wholehearted leader among the twelve apostles. He denied Jesus three times on the night of the crucifixion and was tenderly restored by the risen Lord; at Pentecost he preached the sermon that launched the church into the world.

Two letters carry his name, written to scattered believers across Asia Minor who were suffering for their faith. Their aim is to anchor anxious Christians in a "living hope" and to steady them under trial, reminding them that they are "a chosen race, a royal priesthood, a holy nation" (1 Peter 2:9). Tradition holds that Peter, too, was martyred in Rome, asking to be crucified upside down as unworthy to die as his Lord had.`,
      keyRefs: ['1 Peter 1:3', '1 Peter 2:9', '2 Peter 1:3'],
      appearsInActs: [12, 13, 14],
    },
    {
      slug: 'james',
      name: 'James (the brother of the Lord)',
      oneLine: 'The Lord\'s own brother, who once doubted, then led the Jerusalem church.',
      bio: `This James was not one of the twelve but a brother of Jesus, who did not believe during Jesus' earthly ministry — and then met the risen Christ (1 Corinthians 15:7) and was utterly changed. He became the respected leader of the church in Jerusalem and presided over its first great council (Acts 15), where it was decided that Gentiles need not become Jews to follow Jesus.

Known for his prayerfulness and integrity, James wrote a short, practical, proverb-like letter insisting that genuine faith always proves itself in deeds — care for the poor, mastery of the tongue, patience under trial, mercy toward the lowly. He was martyred in Jerusalem around AD 62. His letter is the conscience of the New Testament, refusing to let faith remain merely words.`,
      keyRefs: ['James 1:22', 'James 1:27', 'James 2:17'],
      appearsInActs: [13, 14],
    },
    {
      slug: 'john',
      name: 'John (the apostle)',
      oneLine: '"The disciple whom Jesus loved" — the apostle of love, writing in his old age.',
      bio: `John, son of Zebedee, was one of Jesus' inner circle and calls himself "the disciple whom Jesus loved." He stood near the cross and ran to the empty tomb. In his old age — by tradition at Ephesus — he wrote three letters to churches he had long shepherded, with the warmth of a father writing to "little children."

His letters return again and again to two themes: that Jesus truly came in the flesh (against teachers who denied it), and that those who truly know God will love one another, "because God is love" (1 John 4:8). Tradition links him also to the Fourth Gospel and to the visions of Revelation. Of all the New Testament writers, John reduces the gospel to its simplest and deepest core: God is love, and we are to love.`,
      keyRefs: ['1 John 1:1', '1 John 4:8', '1 John 4:19'],
      appearsInActs: [12, 13, 14, 15],
    },
    {
      slug: 'jude',
      name: 'Jude',
      oneLine: 'A brother of James, urging the church to contend for the faith.',
      bio: `Jude introduces himself humbly as "a servant of Jesus Christ, and brother of James" — and so, like James, a brother of the Lord. His letter is short and urgent, a warning to a church infiltrated by false teachers who twisted God's grace into a license for immorality and denied the Lord.

He urges believers to "contend earnestly for the faith which was once for all delivered to the saints" (Jude 3), to build themselves up in faith and prayer, and to keep themselves in the love of God. For all its sharpness, the letter ends with one of Scripture's most beautiful blessings — to the God "who is able to keep them from stumbling, and to present you faultless before the presence of his glory in great joy" (Jude 24).`,
      keyRefs: ['Jude 3', 'Jude 20–21', 'Jude 24–25'],
      appearsInActs: [14],
    },
    {
      slug: 'timothy',
      name: 'Timothy',
      oneLine: 'Paul\'s beloved younger protégé, entrusted with the church at Ephesus.',
      bio: `Timothy was Paul's dear younger companion, born of a believing Jewish mother and a Greek father, and discipled by Paul from his youth. He traveled with the apostle, was sent on his hardest errands, and was eventually entrusted with leading the demanding church at Ephesus. Paul calls him "my true child in faith" (1 Timothy 1:2).

Two letters in the New Testament are addressed to him — among the "Pastoral Epistles" — and they read like a mentor's heartfelt counsel to a young leader: guard sound teaching, set an example "in word, in your way of life, in love" (1 Timothy 4:12), endure hardship, and remember that "God didn't give us a spirit of fear, but of power, love, and self-control" (2 Timothy 1:7).`,
      keyRefs: ['1 Timothy 4:12', '2 Timothy 1:7', '2 Timothy 3:16–17'],
      appearsInActs: [13, 14],
    },
    {
      slug: 'titus',
      name: 'Titus',
      oneLine: 'A trusted Gentile co-worker, sent to set the churches of Crete in order.',
      bio: `Titus was a Gentile convert and one of Paul's most trusted co-workers — proof in his own person that the gospel was for the nations. Paul left him on the island of Crete to "set in order the things that were lacking, and appoint elders in every city" (Titus 1:5), a difficult assignment among a difficult people.

The short letter addressed to him weaves together sound doctrine and everyday godliness, teaching that the grace of God "instructs us to the intent that, denying ungodliness and worldly lusts, we would live soberly, righteously, and godly" while we await "the blessed hope and appearing of the glory of our great God and Savior, Jesus Christ" (Titus 2:11–13). Grace, for Titus, is never an excuse for slack living; it is the very thing that trains us to live well.`,
      keyRefs: ['Titus 1:5', 'Titus 2:11–14', 'Titus 3:4–5'],
      appearsInActs: [13, 14],
    },
  ],

  themes: [
    {
      title: 'Grace and faith',
      body: 'The gospel that runs through every letter: we are saved not by what we achieve but by what Christ achieved, received as a gift through faith. Grace is the ground we stand on — unearned, unshakable, free.',
    },
    {
      title: 'Justification and new life in the Spirit',
      body: 'To be justified is to be declared right with God on account of Christ — but it opens into more. The Spirit moves in, makes us God\'s children who cry "Abba," and remakes us from the inside, conforming us to Jesus.',
    },
    {
      title: 'The church as Christ\'s body',
      body: 'No one follows Christ alone. The letters knit believers into one body of many members — Jew and Gentile, weak and strong — joined to Christ the head and to one another in love, gifts, and forgiveness.',
    },
    {
      title: 'Love, the mark of a disciple',
      body: 'Above gifts, knowledge, and zeal, the letters exalt love — patient, kind, self-giving — as the defining sign of those who belong to God. "Now faith, hope, and love remain... the greatest of these is love."',
    },
    {
      title: 'Hope and perseverance in suffering',
      body: 'Written often to the pressured and persecuted, the letters answer hardship with a living hope: an inheritance kept in heaven, a Savior who suffered first, and a love from which nothing in all creation can sever us.',
    },
    {
      title: 'Sound doctrine joined to holy living',
      body: 'The letters refuse to split believing from behaving. Right teaching is meant to bear fruit in changed lives — humility, purity, generosity, truthfulness — grace itself training us, and working itself out, in love.',
    },
  ],

  words: [
    {
      term: 'charis',
      language: 'Greek',
      gloss: '"grace"',
      detail:
        'God\'s unmerited favor and kindness — the beating heart of the gospel. Salvation is *charis* from first to last: a gift freely given, never a wage earned. The same root lies behind the words for "gift" and for "thanksgiving" (eucharist), because grace received naturally overflows in gratitude.',
    },
    {
      term: 'pistis',
      language: 'Greek',
      gloss: '"faith / trust"',
      detail:
        'Not mere intellectual agreement but trust — a leaning of the whole self on God and his promise in Christ. It is the empty hand that receives grace. For Paul it stands opposed to self-reliance; for James, true *pistis* is living and active, always shown in works of love.',
    },
    {
      term: 'dikaiosyne',
      language: 'Greek',
      gloss: '"righteousness / justification"',
      detail:
        'A word at home in the courtroom. To be "justified" (*dikaioo*) is to be declared righteous before God. Paul\'s great theme is that God credits Christ\'s own righteousness to those who trust him, so that the guilty are reckoned right — pardoned, accepted, and set in a new standing with God.',
    },
    {
      term: 'agape',
      language: 'Greek',
      gloss: '"self-giving love"',
      detail:
        'The love that defines God and his people — not romance or mere fondness, but a deliberate, sacrificial seeking of another\'s good, even at cost to oneself. It is the love God showed at the cross and pours into us by the Spirit, and "the greatest of these" (1 Corinthians 13:13).',
    },
    {
      term: 'sarx / pneuma',
      language: 'Greek',
      gloss: '"flesh / Spirit"',
      detail:
        'Paul\'s great contrast: life ruled by the "flesh" (*sarx* — fallen human nature, curved in on itself) versus life led by the "Spirit" (*pneuma* — God\'s own life within us). The Christian walk is the steady, Spirit-empowered triumph of the new self over the old, bearing the Spirit\'s fruit.',
    },
    {
      term: 'soter',
      language: 'Greek',
      gloss: '"savior"',
      detail:
        'A title the Roman world lavished on its emperors and gods; the letters boldly reserve it for Jesus alone. He is *Soter*, the one who rescues us from sin and death — and we await "our great God and Savior, Jesus Christ" (Titus 2:13), whose salvation is full and free.',
    },
    {
      term: 'koinonia',
      language: 'Greek',
      gloss: '"fellowship / communion"',
      detail:
        'Sharing, partnership, common life. More than friendly company, *koinonia* is the deep mutual belonging of those joined to Christ and so to one another — sharing his Spirit and his sufferings, the bread and the cup, and each other\'s burdens, gifts, and joys.',
    },
  ],

  christ: {
    summary: `If the Gospels tell the story of Jesus, the letters unfold its *meaning*. They are an extended meditation on what the cross and the empty tomb actually accomplished — and how to live in their light. Christ is our righteousness, crediting his own perfect standing to us (Romans, Galatians); the supreme Lord through whom and for whom all things exist, in whom the universe holds together (Colossians); our great high priest, who entered God's presence on our behalf and ever lives to intercede for us (Hebrews); the humbled servant now exalted as Lord of all (Philippians); the atoning sacrifice for our sins and our advocate with the Father (1 John); and the blessed hope whose appearing we await (Titus). From every angle, in every letter, the message is finally one Person — Christ crucified, risen, reigning, and returning.`,
    links: [
      { ref: '1 Corinthians 15:3–4', note: 'The earliest creed: "Christ died for our sins... was buried... was raised on the third day." The gospel in one sentence.' },
      { ref: 'Romans 4:25', note: 'He "was delivered up for our trespasses, and was raised for our justification" — his death and resurrection both for us.' },
      { ref: 'Colossians 1:19–20', note: 'In Christ all the fullness dwells, and through his blood God reconciles all things, "having made peace through the blood of his cross."' },
      { ref: 'Philippians 2:8–11', note: 'He humbled himself to the death of the cross; therefore God exalted him, that every knee bow and every tongue confess him Lord.' },
      { ref: 'Hebrews 4:14–16', note: 'Our great high priest who sympathizes with our weakness — so we may draw near "with boldness to the throne of grace."' },
      { ref: '1 Peter 2:24', note: 'He "bore our sins in his body on the tree," that we, dead to sin, might live to righteousness; "by his stripes you were healed."' },
      { ref: 'Titus 2:13', note: 'We wait for "the blessed hope and appearing of the glory of our great God and Savior, Jesus Christ" — the story\'s sure ending.' },
    ],
  },

  memoryVerses: [
    {
      ref: 'Romans 5:8',
      text: 'But God commends his own love toward us, in that while we were yet sinners, Christ died for us.',
      translation: 'WEB',
    },
    {
      ref: 'Romans 8:38–39',
      text: 'For I am persuaded that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers, nor height, nor depth, nor any other created thing, will be able to separate us from God\'s love, which is in Christ Jesus our Lord.',
      translation: 'WEB',
    },
    {
      ref: 'Ephesians 2:8–9',
      text: 'for by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.',
      translation: 'WEB',
    },
    {
      ref: 'Philippians 4:6–7',
      text: 'In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.',
      translation: 'WEB',
    },
    {
      ref: 'Hebrews 11:1',
      text: 'Now faith is assurance of things hoped for, proof of things not seen.',
      translation: 'WEB',
    },
  ],

  reflection: {
    meditation: `Settle yourself for a moment, and breathe slowly.

Whatever you carried into this moment — the striving, the failures, the quiet fear that you are not enough — hear the word these letters were written to give you. You are loved, not because you earned it, but because God set his love on you while you were still far off. *While we were yet sinners, Christ died for us.*

You do not have to climb your way up to God. He has already come down to you. You are forgiven. You are held. You are his. And nothing in all creation — no power, no failure, no fear, not even death — will be able to separate you from his love in Christ.

Breathe in grace. Breathe out striving. Rest here a little while in the love that will not let you go.`,
    prompts: [
      'Where are you still trying to *earn* what God is offering you freely as a gift?',
      'Paul says nothing can separate you from God\'s love. What failure or fear most tempts you to doubt that — and what would change if you truly believed it?',
      'Read 1 Corinthians 13 slowly, with your own name in place of the word "love." Where does it comfort you? Where does it convict you?',
      'Who is hardest for you to love right now — and what would self-giving love (*agape*) actually look like toward them this week?',
    ],
  },

  questions: [
    {
      q: 'Do Paul and James contradict each other about faith and works?',
      a: `It can certainly look that way. Paul writes that "a man is justified by faith apart from the works of the law" (Romans 3:28); James writes that "by works a man is justified, and not only by faith" (James 2:24). But read closely, the two are guarding the same treasure from opposite sides.

They use the key words differently. When **Paul** says "works," he means works of the *Mosaic law* offered as a way to *earn* standing with God — and against that he insists salvation is a free gift. Yet the faith Paul commends is never dead: it is "faith working through love" (Galatians 5:6). When **James** says "faith," he means a merely intellectual assent that produces nothing — the kind even "the demons" have, who "believe, and shudder" (2:19). Against that counterfeit he insists that real, saving faith always bears fruit. The "works" James wants are not the price of salvation but its evidence.

So both agree completely: we are saved by grace, and genuine faith always shows itself in a changed life. The Reformation sharpened the debate — Martin Luther prized "faith alone" so strongly that he once undervalued James — while the Catholic tradition stressed faith made complete in love and good works. Yet the 1999 *Joint Declaration on the Doctrine of Justification*, signed by Lutherans and Catholics, found broad common ground: salvation is by grace, and the faith that receives it is living and active in love. Two sentries, one gate.`,
    },
    {
      q: 'Did Paul invent a different religion from the one Jesus taught?',
      a: `This is sometimes claimed — that Jesus preached the kingdom of God, while Paul invented a religion *about* Jesus. But the letters themselves tell against it.

Paul never claims to be founding anything new. He insists he is *handing on what he received*: "I delivered to you first of all that which I also received: that Christ died for our sins... and that he was raised" (1 Corinthians 15:3–4) — which is exactly the climax Jesus himself pointed toward. Paul quotes Jesus' own words, citing "the Lord's" command on marriage (1 Corinthians 7:10) and passing on the words of the Last Supper (1 Corinthians 11:23–25). And his ethic is Jesus' ethic: "love is the fulfillment of the law" (Romans 13:10; Galatians 5:14) directly echoes Jesus' summary of all the commandments as love for God and neighbor.

What Paul *does* is unfold the meaning of Jesus' death and resurrection for a new and largely Gentile world, drawing out what was already present in Jesus' teaching and in the Hebrew Scriptures. Different vocabulary, different audience — the same gospel, and the same Lord. The continuity is the whole point: Paul preaches the Christ that Jesus is.`,
    },
    {
      q: 'Were all thirteen "Pauline" letters actually written by Paul?',
      a: `Thirteen letters bear Paul's name (Romans through Philemon), and the question of their authorship is worth handling honestly and charitably.

Scholars broadly agree that at least **seven are unquestionably Paul's** (Romans, 1–2 Corinthians, Galatians, Philippians, 1 Thessalonians, and Philemon). For the others — Ephesians, Colossians, 2 Thessalonians, and the Pastorals (1–2 Timothy, Titus) — some scholars point to differences of style and vocabulary and propose they were written somewhat later by close disciples *in Paul's name* (a recognized practice in the ancient world, meant to honor a teacher and extend his message), or were shaped heavily by secretaries. Many other scholars defend Paul's direct authorship, explaining the differences by changing subject matter, the freedom given to secretaries, co-authors, and the varied circumstances of his life. Hebrews, by the way, names no author at all and was only later — and never certainly — associated with Paul.

Across all these debates, the historic church received these letters as apostolic and authoritative, and Catholic, Orthodox, and Protestant Christians alike continue to read them as Scripture. The questions of human authorship are genuine and worth studying; they need not unsettle the letters' place in the canon or their power to feed faith.`,
    },
    {
      q: 'How do the letters\' household and cultural instructions apply today?',
      a: `Several letters contain "household codes" addressing husbands and wives, parents and children, masters and slaves (Ephesians 5:21–6:9; Colossians 3:18–4:1; 1 Peter 2:18–3:7), along with instructions shaped by first-century custom (head coverings, holy kisses, particular roles in worship). The wise approach distinguishes the *enduring principle* from its *time-bound cultural form*.

Even where the form reflects a hierarchical ancient society, the letters quietly subvert it from within. They call for mutual deference — "subjecting yourselves to one another in the fear of Christ" (Ephesians 5:21); they command husbands to love sacrificially "as Christ also loved the assembly, and gave himself up for her"; they treat wives, children, and even slaves as full members of God's family with real dignity; and they sow seeds — "there is neither slave nor free... for you are all one in Christ Jesus" (Galatians 3:28), and the whole letter of Philemon — that would later help dismantle slavery itself.

Sincere Christians today read the specifics differently. Some hold more "complementarian" views (distinct roles), others more "egalitarian" ones (full mutuality), and they read these passages in good faith on both sides. What they share is the goal the texts are driving at: relationships reordered by Christlike, self-giving love. The faithful method is to read each instruction in its setting, ask what unchanging truth it serves, and seek to honor *that* truth in our own time and place.`,
    },
    {
      q: 'Is salvation by grace — and if so, how do grace and obedience fit together?',
      a: `Yes — the letters could hardly be clearer that salvation is by grace: "by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast" (Ephesians 2:8–9). We do not earn God's acceptance; we receive it.

But notice the very next verse: we are "created in Christ Jesus for good works, which God prepared before that we would walk in them" (2:10). Grace is the *root*; obedience is the *fruit*. We are not saved *by* our good works, but we are saved *for* them. The same grace that forgives also transforms — it "instructs us... that we should live soberly, righteously, and godly" (Titus 2:11–12). So Paul can say in one breath, "work out your own salvation with fear and trembling," and in the next, "for it is God who works in you both to will and to work, for his good pleasure" (Philippians 2:12–13). Our effort is real, but even our willing and working is grace at work within us, not a wage we collect.

Both the Catholic and Protestant traditions affirm that salvation begins, continues, and is completed in grace. Obedience, in this light, is not the anxious price of admission but the glad response of a heart that already knows itself loved — love answering love.`,
    },
  ],

  glossaryRefs: ['charis', 'pistis', 'dikaiosyne', 'agape', 'sarx-pneuma', 'soter', 'koinonia'],
};

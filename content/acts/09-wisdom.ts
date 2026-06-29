import type { ActContent } from '../types';

/**
 * ACT 9 — THE POETS & THE WISDOM (Job, Psalms, Proverbs, Ecclesiastes, Song of Songs)
 * A thematic, literary act — the inner life of God's people, not a chapter of chronology.
 */
export const wisdom: ActContent = {
  number: 9,
  slug: 'wisdom',
  title: 'The Poets & the Wisdom',
  movement: 'redemption',
  books: 'Job, Psalms, Proverbs, Ecclesiastes, Song',
  era: "Israel's songs and sages",
  accent: '#D4537E',
  icon: 'feather',
  teaser: "The heart of God's people — in grief, praise, wisdom, and love.",

  featuredVerse: {
    ref: 'Psalm 23:1',
    text: 'Yahweh is my shepherd: I shall lack nothing.',
    translation: 'WEB',
  },

  overview: `After the long march of the story — creation and fall, exodus and conquest, judges and kings — the Bible pauses to let God's people *speak*. The Wisdom and Poetry books (Job, the Psalms, Proverbs, Ecclesiastes, and the Song of Songs) are the heart of Israel laid bare: its grief and its praise, its hardest questions and its hard-won trust, its everyday wisdom and its love songs. Unlike the acts around them, this one is gathered not by chronology but by theme and by genre. It does not move the timeline forward so much as move *inward*, into the soul of the people whose story we have been following.

These books are gloriously, almost startlingly honest. They make room for the lament that has not yet found its answer (Job; the psalms of the pit), the praise that simply overflows (the "Hallelujah" psalms), the disillusioned realism that refuses every easy comfort (Ecclesiastes), the practical craft of a life well-lived (Proverbs), and the unembarrassed celebration of human love (the Song). Whatever you are feeling as you come to them, there is a page here that has felt it first — and felt it before God.

Running beneath them all is a single conviction: that *the fear of the LORD is the beginning of wisdom* — reverent awe before the God who made us. These are not detours from the great rescue story; they are its interior, the music of a people learning to trust. And the New Testament will hear, in every one of them, the voice of Christ: the forsaken sufferer of the Psalms, the Good Shepherd, the Wisdom of God in person. The poets give the human heart its truest words; the gospel will come to answer them.`,

  context: `The five books gathered here belong to the third part of the Hebrew Bible, the Writings (*Ketuvim*), and they are *poetry* — which is the first thing to remember when reading them. Hebrew poetry does not rhyme sounds; it rhymes ideas. A line is spoken and the next echoes, sharpens, or answers it ("The heavens declare the glory of God. The expanse shows his handiwork," Psalm 19:1). It works by parallelism and by dense, concrete imagery, and it asks to be read slowly, aloud, and more than once. Two streams meet in this act: the **Psalms**, Israel's prayers and songs addressed *to* God, and the **wisdom books proper** — Job, Proverbs, Ecclesiastes, and in its own way the Song — reflection *about* how to live, suffer, and love in God's world.

Tradition links much of this literature to Israel's golden age of song and wisdom. David is named in the titles of many psalms and remembered as Israel's great psalmist; Solomon is associated with Proverbs, Ecclesiastes, and the Song. But the books themselves show they are also collections gathered over time: the Psalter holds songs by Asaph, the sons of Korah, Moses (Psalm 90), and many anonymous voices; Proverbs gathers the sayings of several sages; and the date and authorship of Job are simply unknown, its patriarchal flavor suggesting great antiquity. Faithful readers hold these questions charitably (see below). What matters most is the kind of book this is. Read as poetry and prayer rather than as legal code or chronicle, the wisdom books open like a window onto the heart.`,

  timeline: [
    {
      ref: 'Job 1–2',
      title: 'Job: the test begins',
      detail:
        'This act is arranged by theme and by book, not by chronology — and the journey opens with a question older than Israel itself. Behind the scenes, in the heavenly court, the blameless and prosperous Job is handed over to be tested; in a single day he loses his children, his wealth, and his health, and yet he refuses to curse God.',
    },
    {
      ref: 'Job 38–42',
      title: 'God answers from the whirlwind',
      detail:
        'After chapter upon chapter of debate with friends who insist his suffering must be punishment, Job is finally answered — not with an explanation, but with God himself, who speaks out of the storm and unveils the wild majesty of creation. Job is silenced, strangely satisfied, vindicated, and restored: "now my eye sees you."',
    },
    {
      ref: 'Psalm 1',
      title: 'The two ways',
      detail:
        'The Psalter opens like a gate, setting two paths before us: the way of the righteous, who delight in God\'s law and stand like a tree planted by streams of water, and the way of the wicked, which blows away like chaff in the wind.',
    },
    {
      ref: 'Psalm 22',
      title: 'The cry of forsakenness',
      detail:
        'A psalm of David that begins in utter desolation — "My God, my God, why have you forsaken me?" — and moves through pierced hands and divided garments before climbing, astonishingly, back into praise. Centuries later it will be prayed from the cross.',
    },
    {
      ref: 'Psalm 23',
      title: 'The LORD is my shepherd',
      detail:
        'The best-loved psalm of all: a quiet song of trust. Through green pastures and the valley of the shadow of death, the Shepherd leads, feeds, and stays near — and so, the psalmist says, "I shall lack nothing."',
    },
    {
      ref: 'Psalm 51',
      title: 'Create in me a clean heart',
      detail:
        'David\'s prayer of repentance after his sin with Bathsheba — no excuses, only confession and a plea for mercy: "Create in me a clean heart, O God." It has become the church\'s pattern for coming home.',
    },
    {
      ref: 'Psalm 119',
      title: 'The love of God\'s word',
      detail:
        'The longest chapter in the Bible: an elaborate acrostic of 176 verses, nearly every one praising God\'s instruction. "Your word is a lamp to my feet, and a light for my path" captures its delight in a God who actually speaks.',
    },
    {
      ref: 'Proverbs 1:7',
      title: 'The beginning of wisdom',
      detail:
        'The motto of the whole book, and of the wisdom tradition: "The fear of Yahweh is the beginning of knowledge." Wisdom is not raw cleverness but the art of living well, and it begins with reverent awe before God.',
    },
    {
      ref: 'Proverbs 8',
      title: 'Wisdom calls in the streets',
      detail:
        'Wisdom is pictured as a woman crying out in the public square, offering life to all who will listen — and then lifting the veil to reveal that she was beside God "in the beginning of his work," before the world was made, rejoicing as he created it.',
    },
    {
      ref: 'Ecclesiastes 1:2',
      title: '"Vanity of vanities"',
      detail:
        'The Teacher\'s opening verdict on life "under the sun": "Vanity of vanities... all is vanity." The keyword is *hevel* — vapor, breath, mist — naming how fleeting and ungraspable life can feel.',
    },
    {
      ref: 'Ecclesiastes 12:13',
      title: 'The end of the matter',
      detail:
        'After surveying every pleasure and pursuit and finding them vapor, the book comes to rest on solid ground: "Fear God, and keep his commandments; for this is the whole duty of man." Honest realism arrives, at last, at worship.',
    },
    {
      ref: 'Song of Songs 8:6–7',
      title: 'Love strong as death',
      detail:
        'The love poem reaches its summit: "love is strong as death." Its flame cannot be quenched by many waters or bought with all the wealth of a house — a fierce, faithful, unpurchasable love, and a quiet clue to the heart of the whole Bible.',
    },
  ],

  deepDive: [
    {
      id: 'hebrew-poetry',
      heading: 'A different kind of book: how to read the poets',
      body: `After the long stretch of narrative — creation and fall, exodus and conquest, judges and kings — the Bible does something surprising: it stops to listen. The five books gathered here (Job, the Psalms, Proverbs, Ecclesiastes, and the Song of Songs) do not push the story forward in time. They turn inward and downward, into the heart of the people whose story we have been following. That is why this act is arranged by theme and by book rather than by chronology: it is less a chapter of events than a window into a soul.

These are the Bible's poems, and Hebrew poetry plays by its own rules. It does not rhyme sounds; it rhymes ideas. A line is spoken, and the next line echoes it, sharpens it, or answers it — "The heavens declare the glory of God. / The expanse shows his handiwork" (Psalm 19:1). Sometimes the second line agrees with the first (synonymous), sometimes it contrasts (antithetic — the engine of Proverbs), sometimes it builds (synthetic). Once you can hear this music, the poetry opens; it asks to be read slowly, aloud, and more than once.

Two streams meet in these books. The **Psalms** are Israel's prayers and songs — words addressed *to* God, in every weather of the soul. The **wisdom books** proper — Job, Proverbs, Ecclesiastes, and in its own way the Song — are reflection *about* life in God's world: how to suffer, how to live well, how to face our limits, how to love. Together they belong to the part of the Hebrew Bible called the Writings, and together they form the most personal stretch of Scripture — the place where the whole grand story becomes a heartbeat.`,
    },
    {
      id: 'job',
      heading: 'Job: faith in the dark',
      body: `The book of Job throws us straight into the deepest question a believer can ask: *why do the innocent suffer?* Job is introduced as "blameless and upright, one who feared God, and turned away from evil" (1:1) — and abundantly blessed. Then the scene shifts to the heavenly court, where a figure called *the satan* (Hebrew *ha-satan*, "the accuser") poses a piercing challenge: does Job love God for God, or only for his gifts? Strip the gifts away, the accuser wagers, and the faith will collapse. God permits the test, and in a single day Job loses his children, his wealth, and finally his health.

What follows is mostly poetry: Job and three friends — Eliphaz, Bildad, and Zophar — argue back and forth for chapter after chapter. The friends begin well, sitting with Job in silence for seven days. But when they open their mouths, they offer a tidy and terrible theology: suffering is always punishment, so Job must have sinned; confess, and all will be well. Job knows better. He will not buy peace with a lie about himself or about God. He laments with shocking boldness — questioning, protesting, even accusing — yet he never lets go of God, and he longs for an audience with the Almighty.

He gets one. Out of a whirlwind, God finally answers (chapters 38–41) — but not with the explanation Job demanded. Instead God takes him on a breathtaking tour of creation: the foundations of the earth, the wild goat and the warhorse, the storehouses of snow, the untamable Leviathan. The point is not to crush Job but to *resize* him — to set his pain inside a world far vaster, wiser, and better than any sufferer can see from the inside. And it is enough. "I had heard of you by the hearing of the ear, but now my eye sees you" (42:5). Job is not handed a reason; he is given God.

The ending matters. God rebukes the friends — "you have not spoken of me the thing that is right, as my servant Job has" (42:7) — vindicating the honest sufferer over the confident explainers. Job is restored, with twice as much as before. The book refuses to give us a formula for suffering. What it gives instead is permission to grieve without pretending, and the promise that the God who seems most absent in the storm is, in fact, about to speak from it.`,
    },
    {
      id: 'psalms',
      heading: 'The Psalms: words for every season of the soul',
      body: `If Job asks the hardest question, the Psalms give us words to pray through it — and through everything else. One hundred and fifty poems, gathered over centuries into Israel's hymnbook and prayer book, the Psalter has been the church's first language of worship ever since. Its great gift is *range*: here is the whole human heart, lifted up to God without editing.

Scholars sort the psalms into families, and learning them is like learning the seasons of the soul. There are **hymns of praise** that simply adore God for who he is; **psalms of thanksgiving** for rescue received; **royal** and **messianic** psalms about the king; **wisdom** psalms; and **psalms of trust** like the beloved 23rd. But the single largest group is the **laments** — raw, honest complaints that name grief, injustice, and even the silence of God, and then, more often than not, turn the corner into trust. The Psalms do not require us to tidy up our pain before we pray; they teach us to bring it.

A few summits rise out of the range. **Psalm 1** stands at the gate, setting two ways before us: the blessed life rooted like a tree by streams of water, and the way of the wicked that scatters like chaff. **Psalm 22** plunges into forsakenness — "My God, my God, why have you forsaken me?" — and then climbs, astonishingly, back into praise. **Psalm 23** breathes quiet trust in the Shepherd through the valley of the shadow. **Psalm 51** is David's broken-hearted repentance after his sin with Bathsheba — the church's pattern for coming home. And **Psalm 119**, the longest chapter in the Bible, is a 176-verse love song to the word of God.

Notice, finally, the shape of the whole. The Psalter is arranged into five books, each closing in a burst of praise, and the entire collection ends with five "Hallelujah" psalms (146–150), rising to "Let everything that has breath praise Yah!" The Hebrew title of the book is *Tehillim* — "Praises." It is striking that a book so full of tears should be titled *Praises*, as if Israel knew that every honest prayer, once it is brought to God, is already on its way to becoming worship. And these were the songs on Jesus' own lips: he prayed them, quoted them, and died with one of them in his mouth.`,
    },
    {
      id: 'proverbs',
      heading: 'Proverbs: the fear of the LORD and the art of living',
      body: `If the Psalms train the heart, Proverbs trains the feet — it is about how to walk through an ordinary day wisely. Its key word is *chokmah*, "wisdom," but the word means less "knowledge" than *skill*: the same term describes the craftsmanship of an artisan. Biblical wisdom is the art of living well — with the grain of the way God made the world, rather than against it.

The book announces its thesis at the outset: "The fear of Yahweh is the beginning of knowledge" (1:7). Everything starts there. Wisdom is not raw intelligence — clever people ruin their lives every day — but a life lived in reverent awe of the God who alone knows how things truly work. The opening nine chapters are a father's urgent appeals to a son, picturing the choice before him as two women calling from the roadside: Lady Wisdom, who offers life, and Folly, who promises pleasure and delivers death.

At the heart of that section stands **Proverbs 8**, where Wisdom herself cries out in the public square — and then lifts the veil on her origins. She was there "in the beginning of his work, before his deeds of old" (8:22), "the craftsman by his side," "rejoicing in his whole world" as God made it (8:30–31). Wisdom is woven into the very fabric of creation; to live wisely is to live in tune with the way reality is actually built. The New Testament, as we will see, cannot read this chapter without thinking of Christ.

From chapter 10 onward come the famous short sayings — pithy two-line observations on the tongue, money, work, friendship, anger, and the home, closing with the portrait of the capable woman of chapter 31. One caution is essential here: proverbs are *general truths, not iron-clad promises*. "Train up a child in the way he should go, and when he is old he will not depart from it" (22:6) names a wise pattern, not a guaranteed outcome. Honesty and diligence really do *tend* toward flourishing — but in a fallen world the righteous sometimes suffer and the wicked sometimes thrive. That is precisely why Job and Ecclesiastes sit nearby, guarding us from shrinking wisdom into a vending machine.`,
    },
    {
      id: 'ecclesiastes',
      heading: 'Ecclesiastes: "vanity of vanities" and the honesty of faith',
      body: `Ecclesiastes is the Bible's most bracing book — the voice of a believer who refuses to lie to himself. Its speaker calls himself *Qoheleth*, "the Preacher" or "the Teacher," a king who set out to test every road to meaning and report back honestly. His verdict tolls through the book like a bell: "Vanity of vanities... all is vanity" (1:2).

Everything turns on that word, *hevel*. Rendered "vanity" (KJV) or "meaningless," it literally means *vapor, breath, mist*. The Teacher is not saying life is worthless; he is saying it is *fleeting and impossible to grasp* — like trying to hold smoke, or catch the wind. He tries everything "under the sun" (his refrain for life lived within the horizon of this world alone): pleasure, achievement, wealth, even wisdom itself. Each yields something, and none of it lasts. Death levels the wise and the foolish alike, and the next generation forgets our names.

That sounds bleak, and Ecclesiastes never softens the blow — but listen for the counter-melody woven through it. Again and again the Teacher lands on a quiet, stubborn joy: "There is nothing better for a man than that he should eat and drink, and make his soul enjoy good in his labor" (2:24). Receive your bread, your work, your love, this very ordinary day — not as achievements that will outlast you, but as gifts from the hand of God (3:13; 9:7). The same honesty that strips away our illusions hands the present moment back to us as grace.

And the book does land. After all the searching, its final words point past the sun to the One above it: "This is the end of the matter... Fear God, and keep his commandments; for this is the whole duty of man" (12:13). Ecclesiastes is not pessimism; it is faith with its eyes wide open — refusing every cheap comfort until only God is left, and discovering that God is enough.`,
    },
    {
      id: 'song-of-songs',
      heading: 'The Song of Songs: the goodness of love',
      body: `After the hard honesty of Ecclesiastes comes something tender and unembarrassed: a love poem. The Song of Songs — its title a Hebrew superlative, "the greatest of songs" — is a lyrical dialogue between a bride and her beloved, full of longing, beauty, delight, and the joy of union. That such a book sits in Scripture at all is itself a quiet theology: human love, desire, and the body are *good* — part of the world God made and called "very good," not something to be hidden or ashamed of.

The church has cherished the Song through two great readings, and you need not choose only one. The **natural** reading takes it as what it plainly is: a celebration of the love between husband and wife — God's own "yes" to romance, faithfulness, and delight in one another. The **allegorical** (or typological) reading, beloved for many centuries, hears beneath the human love a greater one: the love between God and Israel, between Christ and his church. Held together with reverence, the two enrich each other — human love is good in itself, *and* it is a living sign pointing beyond itself to the Love for which we were ultimately made.

The poem gathers to a height near its end, in lines read at weddings and gravesides ever since: "love is strong as death... Many waters can't quench love, neither can floods drown it. If a man would give all the wealth of his house for love, he would be utterly scorned" (8:6–7). Here is love as the strongest force in human experience — fierce, faithful, and beyond all price. It cannot be bought, and it does not let go. In a Bible that will finally end with a wedding, the Song is no stray love poem; it is a clue to the heart of everything.`,
    },
    {
      id: 'wisdom-in-person',
      heading: 'The wisdom that became flesh',
      body: `Step back, and these five books turn out to be the inner life of the whole redemption story. The grand narrative tells us what God *did*; the poets tell us what it *felt like* to be the people he was doing it for — to suffer and still trust (Job), to pray through every season (the Psalms), to seek the skill of living well (Proverbs), to face life's limits without flinching (Ecclesiastes), and to love and be loved (the Song). This is the heartbeat beneath the history.

And the New Testament hears, in all of it, the voice of Christ. He is the righteous sufferer of the Psalms, who took Psalm 22 onto his lips in the dark — "My God, my God, why have you forsaken me?" — and was then vindicated, just as that psalm foretold. He is the Good Shepherd of Psalm 23, who says, "I am the good shepherd. The good shepherd lays down his life for the sheep." He is the King of Psalm 110, enthroned at God's right hand — the very verse the New Testament quotes more than any other. He is the Wisdom of Proverbs 8, who was beside the Father at creation and is now "made to us wisdom from God" (1 Corinthians 1:30); the One who could declare that "someone greater than Solomon is here."

Even Ecclesiastes finds its answer here. Qoheleth could see only what lay "under the sun," and under the sun all is vapor. But the gospel announces something genuinely *new* under heaven: an empty tomb, a death that died, a life that fleeting *hevel* cannot touch. The poets gave the human heart its truest words — its laments and its love songs, its questions and its praise — and then, in the fullness of time, the Word himself came to answer them. "These are my words which I spoke to you," the risen Jesus said, "that all things which are written... in the psalms concerning me must be fulfilled" (Luke 24:44). The songs were about him all along.`,
    },
  ],

  people: [
    {
      slug: 'job',
      name: 'Job',
      oneLine: 'The blameless sufferer who lost everything and met God in the storm.',
      bio: `Job is introduced as a man "blameless and upright, one who feared God, and turned away from evil" (1:1) — and richly blessed. Then, in a single day, he loses his children, his wealth, and his health, becoming Scripture's great portrait of innocent suffering. His friends insist his agony must be punishment for some hidden sin; Job refuses the lie, clinging to God even as he protests, laments, and demands to be heard.

When God at last answers — not with an explanation but out of a whirlwind — Job is silenced and, strangely, satisfied: "now my eye sees you" (42:5). He is vindicated over his friends and restored with twice what he had lost. Job stands forever as the model of a faith that can be honest, bewildered, even angry, and still refuse to let go of God.`,
      keyRefs: ['Job 1:1', 'Job 38:1–4', 'Job 42:1–6'],
      appearsInActs: [9],
    },
    {
      slug: 'david',
      name: 'David',
      oneLine: `Shepherd, king, and Israel's great psalmist — "the sweet psalmist of Israel."`,
      bio: `David — the shepherd boy who became Israel's greatest king — is remembered above all as its *singer*, the heart behind so many of the Psalms. The same man composed soaring hymns of praise and prayers from the bottom of the pit, songs of serene trust ("Yahweh is my shepherd") and of shattered repentance (Psalm 51, after his sin with Bathsheba).

His psalms have furnished the church's prayers ever since. In them, God listens to a king who is also a sinner, a warrior who weeps, a man "after God's own heart" — not because he was flawless, but because he brought his whole heart, failures and all, into God's presence. The New Testament will hear in David's songs the voice of his greater Son.`,
      keyRefs: ['Psalm 23', 'Psalm 51', '2 Samuel 23:1'],
      appearsInActs: [8, 9],
    },
    {
      slug: 'solomon',
      name: 'Solomon',
      oneLine: "David's son, the wisest of kings, linked with Proverbs, Ecclesiastes, and the Song.",
      bio: `Solomon, David's son, famously asked God not for riches or long life but for wisdom to govern — and received a wisdom so great that his name became a byword for it. Tradition links him to three of these books: the shrewd, practical Proverbs; the restless, disillusioned Ecclesiastes; and the ardent Song of Songs.

Some have read those three as the seasons of a single life — the young sage gathering wisdom, the old king who has tasted everything "under the sun" and found it vapor, and the lover who knows that love is "strong as death." Whatever the precise authorship, Solomon stands as the patron of Israel's wisdom. And Jesus, pointing to himself, would one day say that "someone greater than Solomon is here."`,
      keyRefs: ['1 Kings 3:9–12', 'Proverbs 1:1', 'Song of Songs 1:1'],
      appearsInActs: [8, 9],
    },
    {
      slug: 'asaph',
      name: 'Asaph',
      oneLine: 'A Levite musician David appointed to lead worship — the voice of a dozen psalms.',
      bio: `Asaph was one of the chief musicians King David appointed to lead worship before the ark, and the founder of a guild of temple singers that carried his name for generations (1 Chronicles 16:4–5). Twelve psalms bear his name — Psalm 50 and Psalms 73–83.

His psalms are unflinching. Psalm 73 wrestles openly with the oldest scandal of faith — why the wicked prosper while the faithful suffer — until the singer enters the sanctuary of God and sees things whole again. Asaph reminds us that leading God's people in song has always meant leading them through honest doubt into renewed trust.`,
      keyRefs: ['1 Chronicles 16:4–5', 'Psalm 50', 'Psalm 73'],
      appearsInActs: [9],
    },
    {
      slug: 'sons-of-korah',
      name: 'The Sons of Korah',
      oneLine: 'A guild of Levite singers behind some of the most beloved psalms.',
      bio: `The sons of Korah were a family of Levitical singers and gatekeepers — descended, remarkably, from the Korah who once rebelled against Moses and was swallowed by the earth, yet whose children "didn't die" (Numbers 26:11) and were later given an honored place in worship. The mercy hidden in that line is a small gospel of its own.

Eleven psalms are credited to them, among them some of the most loved in the book: "As the deer pants for the water brooks" (Psalm 42) and "God is our refuge and strength" (Psalm 46). Alongside singers like Heman and the temple choirs, they shaped Israel's worship for centuries — proof that God builds his praise out of redeemed and unlikely people.`,
      keyRefs: ['Numbers 26:11', 'Psalm 42', 'Psalm 46'],
      appearsInActs: [9],
    },
    {
      slug: 'qoheleth',
      name: 'Qoheleth — "the Teacher"',
      oneLine: 'The searching voice of Ecclesiastes, who tested everything "under the sun."',
      bio: `Qoheleth — rendered "the Preacher," "the Teacher," or "the Assembler" — is the speaker of Ecclesiastes, traditionally identified with Solomon. He presents himself as a king who denied himself nothing: pleasure, wealth, great works, learning, beauty — and found all of it *hevel*, vapor slipping through his fingers.

Far from a cynic standing outside the faith, Qoheleth is a believer thinking hard with his eyes open, refusing every comfortable illusion until only God is left standing. That relentless honesty is exactly what clears the ground for his closing counsel: receive each day as a gift, fear God, and keep his commandments. He is the patron of every believer who has ever found easy answers unbearable.`,
      keyRefs: ['Ecclesiastes 1:1–2', 'Ecclesiastes 2:24', 'Ecclesiastes 12:13'],
      appearsInActs: [9],
    },
  ],

  themes: [
    {
      title: 'Honest prayer — lament and praise',
      body: 'The Psalms hand us words for everything: ecstatic praise and gut-level complaint, gratitude and grief and doubt. The largest single group of psalms is lament. God is not too fragile for our questions; Scripture itself teaches us to bring them. Prayer that hides nothing is the only kind worth praying.',
    },
    {
      title: 'Suffering and the God who shows up',
      body: 'Job refuses two easy roads — cursing God, and pretending all is well — and it dismantles the friends’ tidy theology that suffering is always punishment. Its answer to pain is not a formula but a Presence: God comes. Faith here is trust that survives even without an explanation.',
    },
    {
      title: 'The fear of the LORD',
      body: '"The fear of Yahweh is the beginning of knowledge." Not cringing terror, but reverent awe — a right-sized view of God that puts everything else in proportion. Wisdom is not mere cleverness; it begins on the knees.',
    },
    {
      title: 'The limits of life under the sun',
      body: 'Ecclesiastes names what we feel but rarely say: that pleasure fades, work is forgotten, and death levels all. *Hevel* — vapor. Yet this honesty is not despair; it loosens our grip on what cannot satisfy and frees us to receive each ordinary day as a gift from God’s hand.',
    },
    {
      title: 'The goodness of human love',
      body: 'The Song of Songs dares to place desire, beauty, and the union of lovers into Scripture without apology. Love is good because the God who made bodies, marriage, and delight is good — and human love becomes a window onto a greater Love.',
    },
    {
      title: 'Steadfast love that never lets go',
      body: 'Again and again the Psalms return to *hesed* — God’s loyal, covenant love, the love that keeps its promises. "His loving kindness endures forever" tolls through Psalm 136 like a bell. Beneath every lament and every praise lies this bedrock: God’s love does not quit.',
    },
  ],

  words: [
    {
      term: 'tehillim',
      language: 'Hebrew',
      gloss: '"praises" — the Hebrew title of the Psalms',
      detail:
        'The Hebrew name for the book of Psalms is *Tehillim*, "praises," from the same root as "hallelujah" (praise Yah). It is striking that a book containing so many laments is titled "Praises" — as if Israel knew that even our complaints, once brought to God, are on their way to becoming praise. (Our word "Psalms" comes from the Greek *psalmoi*, "songs sung to a stringed instrument.")',
    },
    {
      term: 'hevel',
      language: 'Hebrew',
      gloss: '"vapor, breath" — often "vanity / meaningless"',
      detail:
        'The keyword of Ecclesiastes, repeated dozens of times. *Hevel* literally means vapor, breath, or mist. The KJV renders it "vanity," others "meaningless," but the image is gentler and truer: life is not worthless, it is *fleeting and hard to grasp* — smoke you cannot hold. Naming this is the beginning of wisdom about our limits.',
    },
    {
      term: 'yirah',
      language: 'Hebrew',
      gloss: '"fear, awe, reverence"',
      detail:
        'The "fear" in "the fear of the LORD." It can stretch toward dread, but its heart is reverent awe — the fitting response of a creature before the Creator. Not the terror that drives us away, but the wonder that draws us to our knees. The beginning, Proverbs says, of all real knowledge.',
    },
    {
      term: 'chokmah',
      language: 'Hebrew',
      gloss: '"wisdom" — skill in living',
      detail:
        '*Chokmah* is less "knowledge" than *skill* — the same word describes a craftsman’s expertise. Biblical wisdom is the art of living well in God’s world, in the grain of how he made things. In Proverbs 8 it is personified as a woman who was beside God at creation; the New Testament will see her fulfilled in Christ, "in whom all the treasures of wisdom and knowledge are hidden" (Colossians 2:3).',
    },
    {
      term: 'hesed',
      language: 'Hebrew',
      gloss: '"steadfast love, loving kindness"',
      detail:
        'One of the great words of the Old Testament and the most characteristic word of the Psalms — God’s loyal, covenant-keeping love. It resists easy translation: "lovingkindness," "steadfast love," "mercy," and "faithful love" all reach for it. It is the love that keeps its promises when we cannot, the love that "endures forever."',
    },
    {
      term: 'selah',
      language: 'Hebrew',
      gloss: 'a musical pause in the Psalms',
      detail:
        'Scattered seventy-one times through the Psalms, *selah* is most likely a musical or liturgical direction — a pause, a lifting up, a rest that lets the words settle and resound. Its precise meaning is uncertain, but its invitation is clear; it gives this very app its name. Stop. Breathe. Let the truth sink all the way in.',
    },
  ],

  christ: {
    summary: `The poets were singing about Someone they could not yet fully see. The New Testament lifts their words to its own lips and finds them full of Christ. He is the righteous sufferer of the Psalms, forsaken and then vindicated; the Good Shepherd of Psalm 23; the King enthroned at God’s right hand in Psalm 110 — the verse the New Testament quotes more than any other; the Wisdom of God who was beside the Father at creation, now made flesh; the One "greater than Solomon." Jesus himself said that everything written about him "in the psalms" had to be fulfilled. The heart’s deepest songs turn out to have been his songs all along.`,
    links: [
      {
        ref: 'Matthew 27:46',
        note: `On the cross Jesus prays the opening line of Psalm 22 — "My God, my God, why have you forsaken me?" — making the great psalm of the forsaken sufferer his own.`,
      },
      {
        ref: 'Psalm 22:16–18',
        note: `Pierced hands and feet, and garments divided by lot — details of the forsaken one that the Gospels see fulfilled at the cross (John 19:23–24).`,
      },
      {
        ref: 'Psalm 110:1',
        note: `"Yahweh says to my Lord, ‘Sit at my right hand’" — the Old Testament verse the New Testament quotes most, applied to the reigning Christ (Hebrews 1:13).`,
      },
      {
        ref: 'John 10:11',
        note: `"I am the good shepherd" — the LORD who is "my shepherd" in Psalm 23 comes in person, and lays down his life for the sheep.`,
      },
      {
        ref: '1 Corinthians 1:24,30',
        note: `Christ is called "the wisdom of God," "made to us wisdom from God" — the Wisdom personified in Proverbs 8, now in the flesh.`,
      },
      {
        ref: 'Matthew 12:42',
        note: `Pointing to himself, Jesus declares that "someone greater than Solomon is here" — Wisdom in person, greater than Israel’s wisest king.`,
      },
      {
        ref: 'Luke 24:44',
        note: `The risen Christ says that all that is written of him "in the psalms" must be fulfilled — the songbook was about him all along.`,
      },
    ],
  },

  memoryVerses: [
    {
      ref: 'Psalm 23:1',
      text: 'Yahweh is my shepherd: I shall lack nothing.',
      translation: 'WEB',
    },
    {
      ref: 'Proverbs 1:7',
      text: 'The fear of Yahweh is the beginning of knowledge; but the foolish despise wisdom and instruction.',
      translation: 'WEB',
    },
    {
      ref: 'Proverbs 3:5–6',
      text: 'Trust in Yahweh with all your heart, and don\'t lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight.',
      translation: 'WEB',
    },
    {
      ref: 'Psalm 119:105',
      text: 'Your word is a lamp to my feet, and a light for my path.',
      translation: 'WEB',
    },
    {
      ref: 'Ecclesiastes 12:13',
      text: 'This is the end of the matter. All has been heard. Fear God, and keep his commandments; for this is the whole duty of man.',
      translation: 'WEB',
    },
  ],

  reflection: {
    meditation: `Be still for a moment, and let your breathing slow.

The poets knew every weather of the soul — the green pastures and the valley of the shadow, the morning of praise and the long night of tears — and they carried all of it, unedited, to God. You may do the same. Nothing in you is too dark, too tangled, or too small to pray.

If your heart is full tonight, let it spill over into thanks. If it is breaking, you do not have to pretend otherwise; the same Shepherd who walks the green pastures walks the valley too, and at his side you lack nothing you truly need.

*Selah* — the old word the singers left in the margins of their songs. It means, more or less: pause here. So pause. Breathe in, breathe out, and let one true thing settle all the way down — you are known, you are held, and you are loved with a love as strong as death.`,
    prompts: [
      `Which season is your soul in right now — praise, lament, longing, or rest — and what would it look like to bring it to God honestly, exactly as it is?`,
      `Where have you been handed an easy answer — to your own suffering, or to life's emptiness — that you may need instead to sit with, like Job, until God himself draws near?`,
      `What ordinary gift today — bread, work, a face you love, an hour of rest — might you receive from God's hand rather than rush past?`,
      `If "the fear of the LORD" is the beginning of wisdom, where might reverent awe before God reorder the way you are thinking about a decision you face?`,
    ],
  },

  questions: [
    {
      q: 'Why does Job suffer — and does the book solve the problem of suffering?',
      a: `Honestly, the book refuses to give Job — or us — a tidy explanation, and that refusal is part of its wisdom. We readers glimpse the heavenly scene in chapters 1–2, but Job never does; he suffers without ever learning why. What the book *does* expose is the danger of his friends’ easy answer — that suffering is always punishment for sin. God himself rejects it: "you have not spoken of me the thing that is right" (42:7). Job’s comfort, when it finally comes, is not a formula but a Presence — God arrives, and that turns out to be enough. The book’s gift is permission to grieve without pretending, and the promise that God meets us in the dark even when we never receive our "why."`,
    },
    {
      q: 'Are the angry "cursing" psalms (the imprecatory psalms) really fit to pray?',
      a: `These psalms — which call down God’s judgment on the wicked (Psalm 137, 69, 109) — unsettle many readers, and that discomfort is worth honoring. A few things help. First, they are *prayers, not policy*: the psalmist hands his rage to God rather than taking revenge into his own hands ("Don’t seek revenge yourselves," Romans 12:19). Second, they are searingly honest, refusing to pretend that cruelty and injustice don’t provoke real anger. Third, they are a cry for *justice* — a longing, in a world full of unpunished evil, that wrong would finally be set right. Christians pray them through Christ, who absorbed God’s judgment at the cross and taught us to love our enemies — letting these psalms voice our protest against evil while we leave the final verdict in God’s hands.`,
    },
    {
      q: 'Is Ecclesiastes just pessimistic, or is it honest?',
      a: `It can sound pessimistic, but Ecclesiastes is better read as clear-eyed realism than as despair. Qoheleth simply refuses the comfortable lies we live by — that money will satisfy, that we will be remembered, that we can master life "under the sun." Naming *hevel* — the vapor-like fleetingness of everything — is not giving up; it is waking up. And running through the book is a warmer, quieter note: receive your food, your work, and your love today as gifts from God’s hand (2:24; 9:7). The honesty of Ecclesiastes is itself a mercy: it pries our fingers off what was never going to hold us, and turns us toward the God who can.`,
    },
    {
      q: 'How should Christians read the Song of Songs?',
      a: `Two faithful readings have lived side by side in the church, and you are not forced to choose between them. The *natural* reading takes the Song as what it plainly is — a celebration of love between husband and wife, a God-given "yes" to desire, beauty, and the goodness of the body and marriage. The *allegorical* (or typological) reading, cherished for many centuries, hears in it the love between God and his people, Christ and his church. Held together with reverence, each deepens the other: human love is genuinely good in itself, and at the same time it is a sign pointing beyond itself to the greater Love for which we were made. The Song guards us from two errors at once — treating the body as shameful, and treating love as merely physical.`,
    },
    {
      q: 'Do the Proverbs guarantee that good behavior brings good outcomes?',
      a: `No — and reading them that way leads straight into the error God condemns in Job’s friends. The proverbs are finely observed *general* truths: this is how life usually unfolds when it is lived wisely, with the grain of God’s world. "Train up a child in the way he should go" (22:6) describes a wise pattern, not an ironclad guarantee. Honesty, diligence, and humility really do *tend* toward flourishing — but in a fallen world the righteous sometimes suffer and the wicked sometimes prosper. That is exactly why Job and Ecclesiastes sit in the same Bible as Proverbs: together they keep us from shrinking wisdom into a vending machine that dispenses blessings in exchange for good behavior.`,
    },
    {
      q: 'Did David and Solomon really write all these psalms and books?',
      a: `Tradition rightly remembers David as Israel’s great psalmist and Solomon as its great sage, and many of these poems and proverbs are tied to them by name. But the books themselves show they are also *collections*. The Psalter openly gathers songs from Asaph, the sons of Korah, Moses (Psalm 90), and many anonymous voices across centuries; Proverbs explicitly includes the sayings of other sages (chapters 30 and 31); and the date and author of Job are simply unknown. Christians have long held that God inspired this whole chorus of human voices — and that the truth and beauty of these books do not rise or fall on settling every question of authorship.`,
    },
  ],

  glossaryRefs: ['tehillim', 'hevel', 'yirah', 'chokmah', 'hesed', 'selah'],
};

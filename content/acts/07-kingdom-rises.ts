import type { ActContent } from '../types';

/**
 * ACT 7 — THE KINGDOM RISES (1–2 Samuel, 1 Kings 1–11)
 * Israel gets its king — Saul, David, Solomon — and God promises a throne forever.
 */
export const kingdomRises: ActContent = {
  number: 7,
  slug: 'kingdom-rises',
  title: 'The Kingdom Rises',
  movement: 'redemption',
  books: '1–2 Samuel, 1 Kings 1–11',
  era: 'the united monarchy',
  accent: '#534AB7',
  icon: 'crown',
  teaser: 'Israel gets its king — and God promises a throne that never ends.',

  featuredVerse: {
    ref: '1 Samuel 16:7',
    text: `But Yahweh said to Samuel, "Don't look on his face, or on the height of his stature, because I have rejected him; for I don't see as man sees. For man looks at the outward appearance, but Yahweh looks at the heart."`,
    translation: 'WEB',
  },

  overview: `The book of Judges ended in anarchy — "everyone did what was right in his own eyes" — and Israel was a loose confederacy of tribes with no king, harassed by the Philistines and drifting from God. Into that dusk God raises up Hannah's son Samuel: the last of the judges and the first of the great prophets, the man who will anoint Israel's first two kings. When the people finally demand a king "like all the nations," God grants the request — though it is tangled up with their rejection of *him* as their true King — and the long age of Israel's monarchy begins.

Three kings dominate this act. **Saul**, tall and impressive, is the king the people chose by sight — and he is undone by a divided, disobedient heart. **David**, the overlooked shepherd boy, is the king God chose by the heart — a giant-slayer, a poet, a man of deep faith and grievous sin who nevertheless keeps turning back to God in repentance. **Solomon**, David's son, is given wisdom and builds the temple, lifting the kingdom to its golden height — before his many foreign wives turn his heart and crack the kingdom he inherited. Their stories all circle one piercing truth, spoken on the day David is chosen: *"man looks at the outward appearance, but Yahweh looks at the heart"* (1 Samuel 16:7).

At the center of it all stands a promise. When David offers to build God a house (a temple), God turns the offer around and promises instead to build *David* a house (a dynasty): an offspring whose throne will be established *forever* (2 Samuel 7). From this point on, the hope of the whole Bible narrows to a single family and a single, staggering vow — a king from David's line who will reign without end. And precisely because even David and Solomon fail, the promise quietly strains forward, toward a greater Son of David still to come.`,

  context: `First and Second Samuel were originally a single book in the Hebrew Bible, later divided in two in the Greek Septuagint; First Kings carries the same sweeping narrative onward. Together they trace Israel's story from the birth of Samuel (around 1100 BC), through the rise of the monarchy under Saul and David, to the reign of Solomon and the kingdom's fracture after his death (around 930 BC). The books are anonymous. Jewish tradition associated Samuel with the early chapters, but the narrative plainly draws on a range of older sources — court records, prophetic memoirs, songs, and royal annals — woven together by an inspired hand. Many scholars place the final shaping during or after the Babylonian exile, as part of a larger history (Joshua through Kings) reflecting on why the kingdom rose and why it eventually fell.

The genre is theological history: real events, real politics, real bloodshed, told to reveal God's hand and to teach his people. These are not flattering propaganda portraits — Scripture is unflinching about its heroes, recording David's adultery and murder and Solomon's idolatry as plainly as their triumphs. The setting is the Iron Age Levant: a small, threatened people ringed by Philistines and other powers, moving from a tribal society led by charismatic judges into a centralized kingdom with a capital, a standing army, and a temple. Beneath the political drama runs a deeper question the books keep pressing: can a human king ever truly shepherd God's people well — and if even the best of them cannot, who finally will?`,

  timeline: [
    {
      ref: '1 Samuel 1–3',
      title: "Hannah's prayer and the boy Samuel",
      detail:
        'Barren and grieving, Hannah pours out her heart to God and vows to give back the son she asks for. Samuel is born and given to serve at the tabernacle, and there God calls the boy in the night — raising up a faithful prophet in a faithless age.',
    },
    {
      ref: '1 Samuel 8',
      title: '"Give us a king like the nations"',
      detail:
        'Samuel grows old, his sons prove corrupt, and the elders demand a king to rule them "like all the nations." God tells Samuel that in this they are really rejecting God\'s own kingship — yet he grants the request, with a sober warning about all a king will take.',
    },
    {
      ref: '1 Samuel 9–10',
      title: 'Saul anointed king',
      detail:
        'Saul — a head taller than anyone else, from the smallest tribe — is sent searching for lost donkeys and stumbles into a kingdom. Samuel anoints him privately, then presents him to Israel, and the people shout, "Long live the king!"',
    },
    {
      ref: '1 Samuel 15',
      title: 'Saul rejected',
      detail:
        'Commanded to carry out God\'s judgment on Amalek, Saul keeps the best of the plunder and spares the enemy king, then dresses his disobedience up as worship. Samuel answers with the verdict that ends Saul\'s dynasty: "to obey is better than sacrifice."',
    },
    {
      ref: '1 Samuel 16',
      title: 'David anointed — God looks at the heart',
      detail:
        "Samuel is sent to Bethlehem to anoint a new king from among Jesse's sons. One by one the impressive older brothers are passed over, until the youngest — David, out keeping the sheep — is called in from the fields and anointed as the Spirit of God rushes upon him.",
    },
    {
      ref: '1 Samuel 17',
      title: 'David and Goliath',
      detail:
        'While Israel\'s army cowers before the Philistine giant, the shepherd boy steps forward in the name of "Yahweh of Armies," refusing Saul\'s armor and trusting God alone. A single stone from his sling fells Goliath — because, as David declares, "the battle is Yahweh\'s."',
    },
    {
      ref: '1 Samuel 18–24',
      title: "Saul's jealousy; David spares Saul",
      detail:
        "As the people sing David's praises, Saul's envy curdles into murderous obsession, and David becomes a fugitive hunted through the wilderness. Twice David catches Saul defenseless, and twice refuses to harm \"Yahweh's anointed\" — repaying hatred with mercy.",
    },
    {
      ref: '2 Samuel 5–6',
      title: 'Jerusalem and the ark',
      detail:
        'After Saul\'s death all the tribes anoint David king. He captures the fortress of the Jebusites and makes it his capital, the City of David, then brings the ark of God up into Jerusalem with dancing and joy — placing God\'s presence at the heart of the nation.',
    },
    {
      ref: '2 Samuel 7',
      title: 'The Davidic covenant — a throne forever',
      detail:
        'David longs to build a house for God. Through the prophet Nathan, God turns the offer around: David will not build God a house — instead God will build David a house, a dynasty, and establish the throne of his offspring forever.',
    },
    {
      ref: '2 Samuel 11–12',
      title: 'Bathsheba, Uriah, and "You are the man!"',
      detail:
        "At the height of his power David takes Bathsheba, another man's wife, and has her husband Uriah killed to hide it. God sends Nathan with a parable that traps David in his own verdict — \"You are the man!\" — and David breaks, confesses, and repents.",
    },
    {
      ref: '1 Kings 3',
      title: "Solomon's gift of wisdom",
      detail:
        'David\'s son Solomon, newly king, is offered anything by God in a dream and asks not for wealth or long life but for "an understanding heart" to govern. God grants him wisdom beyond any other — soon proved when he discerns the true mother of a disputed child.',
    },
    {
      ref: '1 Kings 6–8',
      title: 'The temple built and dedicated',
      detail:
        'Over seven years Solomon builds the temple David had only dreamed of — a house for the Name of God, in cedar and gold and cut stone. When the ark is brought in, the glory of God fills the house like a cloud, and Solomon dedicates it, begging God to hear his people from heaven.',
    },
    {
      ref: '1 Kings 11',
      title: "Solomon's foreign wives and decline",
      detail:
        "Solomon loves many foreign women, and in his old age they turn his heart after their gods; he raises shrines to idols on the hills around Jerusalem. God's anger is kindled, and he announces that the kingdom will be torn in two — though for David's sake, one tribe will remain to Solomon's line.",
    },
  ],

  deepDive: [
    {
      id: 'give-us-a-king',
      heading: '"A king like the nations"',
      body: `The crisis that opens this act is not a foreign army but a request. The elders of Israel come to the aging Samuel and say, *"Make us a king to judge us like all the nations"* (1 Samuel 8:5). On its surface it sounds reasonable — even prudent. But God reads the heart beneath it: *"they have not rejected you, but they have rejected me, that I should not be king over them"* (8:7).

The problem was never kingship as such. Centuries earlier, the law had actually anticipated a king and set out how a godly one should live (Deuteronomy 17:14–20). The problem was the four words *like all the nations* — the longing to be normal, to swap an unseen, demanding King for a visible, manageable one; to trust an institution, an army, a strong man, rather than the God who had carried them out of Egypt. Samuel warns them, with weary clarity, what a king "like the nations" will do: he will *take*. He will take their sons and daughters, their fields and flocks, a tenth of everything (8:11–18). Set that little word against the God of Israel, whose whole story has been one of *giving* — and the trade comes into focus.

And yet here is the grace: God says *yes*. He grants the flawed request and bends even it toward his purposes, working through the monarchy he never needed to redeem the people who demanded it. It is one of the quiet patterns of Scripture — God meeting us inside our second-best choices and refusing to abandon us there. The age of kings begins not with God's defeat but with his patience.`,
    },
    {
      id: 'the-heart-of-the-king',
      heading: 'What God sees: Saul, David, and the heart',
      body: `This act turns on a single sentence. When Samuel goes to anoint a new king and is dazzled by Jesse's tall eldest son, God stops him: *"Don't look on his face, or on the height of his stature… for man looks at the outward appearance, but Yahweh looks at the heart"* (1 Samuel 16:7). Everything in these books is a commentary on that line.

**Saul** is the king chosen by sight — literally "a head taller than any of the people" (10:23), exactly what an anxious nation wanted. But his story is the slow exposure of a heart that fears people more than God. Twice he disobeys a direct command; both times he covers it with excuses and religious-sounding spin. In the decisive episode he keeps the best of the forbidden plunder and calls it an offering, and Samuel cuts through it: *"Behold, to obey is better than sacrifice"* (15:22). Saul's tragedy is not that he was wicked beyond all others but that he was *divided* — religious on the surface, self-protecting underneath — and a divided heart cannot lead God's people.

**David** is the king chosen by the heart — overlooked, out with the sheep, not even summoned to the family gathering until Samuel insists. He is later called *"a man after [God's] own heart"* (13:14). It is crucial to read that phrase rightly: it does not mean David was sinless (his sins were appalling). It means his heart was *oriented* toward God — that when he fell, he broke and returned rather than hardened and hid. The contrast running through this act is not perfection versus failure. It is a heart that turns toward God versus a heart that turns away.`,
    },
    {
      id: 'the-battle-is-the-lords',
      heading: "The battle is the Lord's: David and Goliath",
      body: `Everyone knows the story: the shepherd boy, the sling, the giant. But it is almost always told backwards. As popular wisdom it becomes, "Believe in yourself and you can topple your giants." That is the opposite of what the text says.

David refuses Saul's armor — he will not fight as the world fights. He runs *toward* Goliath with a few stones and a sentence: *"You come to me with a sword, and with a spear, and with a javelin, but I come to you in the name of Yahweh of Armies, the God of the armies of Israel, whom you have defied"* (1 Samuel 17:45). And then the heart of it: *"the battle is Yahweh's, and he will give you into our hand"* (17:47). David's confidence is not self-confidence; it is God-confidence. He has no illusions about his size. He has every conviction about his God.

Notice, too, the *shape* of the scene. A whole trembling people is paralyzed by an enemy none of them can defeat. One representative steps forward in their place, wins the victory they could not win, and his triumph becomes theirs. It is a pattern the Bible will return to and finally fill with meaning: a champion who fights the unbeatable foe on behalf of a people who can only watch. David in the valley of Elah is a small, bright foreshadowing of a greater Shepherd-King who would face a far greater enemy, alone, for us.`,
    },
    {
      id: 'the-davidic-covenant',
      heading: 'The house God builds (2 Samuel 7)',
      body: `Settled at last in his palace, with the wars behind him, David has a good idea: he will build God a proper temple. The God who has been dwelling in a tent deserves a house of cedar. The prophet Nathan agrees on the spot — and then God overrules them both with one of the great reversals of Scripture.

The whole oracle pivots on a single Hebrew word: *bayit*, "house." David wants to build God a *bayit* (a building, a temple). God replies that he will instead build David a *bayit* (a household, a dynasty, a royal line). *"Yahweh will make you a house… I will set up your offspring after you… and I will establish the throne of his kingdom forever"* (2 Samuel 7:11–13). The creature offers the Creator a gift; the Creator answers with a far greater one. This is grace in miniature: we come to do something for God, and discover he means to do something immeasurably larger for us.

The terms are staggering. An *offspring*. A *father–son* relationship between God and the king (7:14). A throne established *forever*. And — pointedly, after Saul — a promise of covenant love that will not be withdrawn: *"my loving kindness will not depart from him, as I took it from Saul"* (7:15). That word is *hesed*, God's loyal, unbreakable, promise-keeping love. There is a near fulfillment: Solomon will build the temple and sit on the throne. But "forever" is a word far too large for Solomon, or for any of the flawed kings who follow. From this moment the Old Testament leans forward, waiting — and the hope of a coming Anointed One, a Messiah from David's house, is born.`,
    },
    {
      id: 'a-man-after-gods-own-heart',
      heading: "A man after God's own heart: David and Bathsheba",
      body: `If the Bible were a sanitized hall of heroes, 2 Samuel 11 would have been quietly deleted. Instead it stands at the center of David's story in unflinching detail. At the season "when kings go out to battle," David stays home, sees a woman bathing, and uses the absolute power of the throne to take her. Bathsheba is the wife of Uriah — one of David's own loyal soldiers. When she conceives, David's cover-up escalates from deception to murder: he arranges for Uriah to be killed in battle and marries the widow. Adultery, the abuse of power, betrayal, and bloodshed, all from "the man after God's own heart."

Then God sends Nathan, who tells a story about a rich man who stole a poor man's only lamb. David, still blind to himself, erupts in righteous fury — *that man deserves to die!* — and Nathan springs the trap: *"You are the man!"* (12:7). And here is the hinge of David's whole life. He does not rage, deny, or destroy the prophet. He breaks. *"I have sinned against Yahweh"* (12:13). Tradition hears the sound of that breaking in Psalm 51: *"Create in me a clean heart, O God."*

This is what "after God's own heart" finally means — not a man who never fell, but a man who, when confronted, returned. The story refuses two false comforts. It will not let us excuse the sin: the consequences are severe and lifelong, and the narrative shows them honestly. But it also will not let us imagine that sin of such magnitude puts a person beyond grace. David's hope, in the end, is not in his record but in God's mercy. For everyone who has done what cannot be undone, his story is a strange and stubborn comfort: the door of repentance is still open.`,
    },
    {
      id: 'worship-and-the-temple',
      heading: 'The ark, the tent, and the house',
      body: `One of David's first acts as king of a united Israel is to bring the ark of the covenant — the visible sign of God's presence — up into his new capital (2 Samuel 6). It is a moment of overflowing joy, and David, stripped of royal dignity, *"danced before Yahweh with all his might."* But the chapter has a sobering edge too: when Uzzah reaches out to steady the ark and is struck down, Israel is reminded that the God who draws near is still holy, not tame, not safe to handle on our own terms. Reverence and joy belong together. David sets God's presence, not the palace, at the center of the nation.

What David begins, Solomon completes. The temple of 1 Kings 6–8 is a wonder of cedar and gold, seven years in the building — a permanent house for the Name of God among his people. At its dedication the glory of God fills the house like a cloud, so thick the priests cannot stand to minister (8:10–11). The God of all heaven has chosen to make his address among one people, in one place, so they can be sure he is *with* them.

And yet, even in his prayer of dedication, Solomon names the paradox: *"will God in very deed dwell on the earth? Behold, heaven and the heaven of heavens can't contain you; how much less this house that I have built!"* (8:27). The temple is a true gift and, at the same time, a sign of something it cannot finally be. No building can house the Infinite. The whole arrangement is straining toward a deeper fulfillment — a day when God will dwell with his people not in a tent or a temple of stone, but in person.`,
    },
    {
      id: 'wisdom-and-its-shadow',
      heading: "Wisdom and its shadow: Solomon's rise and fall",
      body: `Solomon's reign opens with one of the most beautiful prayers in Scripture. Offered anything he wants, the young king asks for *"an understanding heart to judge your people, that I may discern between good and evil"* (1 Kings 3:9). God is so pleased that he gives wisdom *and* the riches Solomon did not ask for. There follows a golden age: wealth, peace, songs and proverbs by the thousand, the temple built, even the queen of Sheba traveling from afar to hear him. The wisdom tradition of Israel — *chokmah*, the art of living rightly in the fear of the Lord — finds its royal patron.

But the same chapters that crown Solomon also quietly indict him. Deuteronomy 17 had warned that Israel's king must not multiply horses, or wives, or silver and gold — and Solomon does all three to excess. The wealth comes from heavy taxation and forced labor laid on his own people: the very *taking* Samuel had foretold. And then the fatal sentence: *"his wives turned away his heart… his heart was not perfect with Yahweh his God"* (11:4). The man who asked for an *understanding heart* ends with a *divided* one. He builds shrines to the gods of his foreign wives on the hills outside the holy city he had filled with God's glory.

The lesson is somber and searching. Wisdom, success, even temple-building cannot keep a heart whole; only a heart kept by God can do that. Solomon's decline is not a single dramatic fall but a slow erosion — small compromises, divided affections, appetites left unchecked until they own him. The kingdom that *rose* so gloriously in this act is, by its final chapter, already cracking. After Solomon's death it will tear in two. The whole arc, from the demand for a king to the breaking of the kingdom, leaves the reader longing for a different sort of King — one whose heart will never turn.`,
    },
  ],

  people: [
    {
      slug: 'samuel',
      name: 'Samuel',
      oneLine: `The last judge and first great prophet — the man who anointed Israel's first two kings.`,
      bio: `Samuel was born to the barren Hannah in answer to desperate prayer, and given back to God to serve at the tabernacle from boyhood. God called him in the night while he was still a child, and "all Israel… knew that Samuel was established to be a prophet of Yahweh" (1 Samuel 3:20). He stands at the great hinge of Israel's history — the last of the judges and the first of the line of writing prophets — bridging the age of the tribes and the age of the kings.

It is Samuel who warns Israel honestly about what a king will cost them, and Samuel who, in obedience to God, anoints first Saul and then David. A man of fierce integrity, he confronts Saul's disobedience without flinching and grieves over his failure. His life is a portrait of faithfulness in a faithless age and of a prophet who serves God's word over his own preferences.`,
      keyRefs: ['1 Samuel 1:27–28', '1 Samuel 3:10', '1 Samuel 16:13'],
      appearsInActs: [7],
    },
    {
      slug: 'saul',
      name: 'Saul',
      oneLine: `Israel's first king — tall, chosen by sight, undone by a divided heart.`,
      bio: `Saul, from the small tribe of Benjamin, was everything the people wanted in a king: impressive, "a head taller than any of the people," a capable early warrior who rescued the town of Jabesh-gilead. Anointed by Samuel, he began with real promise. But his reign became the cautionary tale of the whole act: twice he disobeyed a clear command from God, and twice he covered it with excuses and the appearance of piety.

Rejected from the dynasty for his disobedience, Saul spiraled into jealousy when the young David's fame eclipsed his own. He spent his later years hunting David through the wilderness, consumed by fear and suspicion, even consulting a medium on the eve of his last battle. He died by his own hand on Mount Gilboa as the Philistines closed in. Saul's story is the warning that hangs over every leader: a heart that fears people more than God cannot endure.`,
      keyRefs: ['1 Samuel 10:1', '1 Samuel 15:22–23', '1 Samuel 31:4'],
      appearsInActs: [7],
    },
    {
      slug: 'david',
      name: 'David',
      oneLine: `The shepherd-king after God's own heart — giant-slayer, poet, sinner, and the man God bound himself to forever.`,
      bio: `David, the youngest son of Jesse of Bethlehem, was anointed by Samuel while still a shepherd boy, and the Spirit of God rushed upon him. He first appears on the national stage felling Goliath in the name of "Yahweh of Armies," and his fame — and Saul's jealousy — grow from there. For years he is a hunted fugitive who twice spares the life of the king trying to kill him. After Saul's death he is made king over all Israel, takes Jerusalem, brings the ark to the city, and receives the staggering promise of an everlasting throne (2 Samuel 7).

David is the Bible's most fully drawn human being — warrior and worshiper, the author of psalms that have carried the prayers of God's people for three thousand years, and the perpetrator of adultery and murder in the affair with Bathsheba. What sets him apart is not innocence but his response to his own sin: when confronted, he broke and repented rather than hardened. He becomes the standard against which every later king is measured, and the head of the line from which the Messiah, "the son of David," would come.`,
      keyRefs: ['1 Samuel 16:13', '1 Samuel 17:45', '2 Samuel 7:16', '2 Samuel 12:13'],
      appearsInActs: [7],
    },
    {
      slug: 'jonathan',
      name: 'Jonathan',
      oneLine: `Saul's son and David's covenant friend, who loved David as his own soul.`,
      bio: `Jonathan was Saul's brave eldest son and natural heir — a daring warrior who once routed a Philistine garrison with only his armor-bearer, trusting that "there is no restraint on Yahweh to save by many or by few" (1 Samuel 14:6). By every worldly measure David was his rival for the throne. Yet the text says Jonathan's soul "was knit with the soul of David, and Jonathan loved him as his own soul" (18:1).

In one of Scripture's great pictures of selfless friendship, Jonathan repeatedly protected David from his father's murderous rage, warned him, strengthened his faith in God, and willingly set aside his own claim to the crown, recognizing that God's hand was on David. He died alongside Saul at Gilboa, and David's grief-stricken lament — "your love to me was wonderful" (2 Samuel 1:26) — has echoed ever since as a model of loyal, self-giving love.`,
      keyRefs: ['1 Samuel 18:1', '1 Samuel 20:16–17', '2 Samuel 1:26'],
      appearsInActs: [7],
    },
    {
      slug: 'bathsheba',
      name: 'Bathsheba',
      oneLine: `The woman David wronged — later honored as the mother of Solomon.`,
      bio: `Bathsheba was the wife of Uriah the Hittite, one of David's loyal soldiers, when the king saw her, sent for her, and used his power to take her. In the moral weight of the story she is far more sinned against than sinning — caught up in, and grievously harmed by, the king's abuse of his throne. She lost her husband to David's cover-up and then their first child.

Yet her story does not end in tragedy. She became the mother of Solomon, the heir to the throne, and later acted decisively — with the prophet Nathan — to secure his succession when it was threatened (1 Kings 1). The New Testament remembers her with quiet dignity in the genealogy of Jesus, where Matthew names her simply as the one "who had been Uriah's wife" (Matthew 1:6) — a deliberate reminder, woven into the Messiah's own family tree, that grace runs straight through human brokenness.`,
      keyRefs: ['2 Samuel 11:3', '2 Samuel 12:24', '1 Kings 1:11–31'],
      appearsInActs: [7],
    },
    {
      slug: 'nathan',
      name: 'Nathan',
      oneLine: `The prophet who delivered the everlasting-throne promise — and the courage to say, "You are the man!"`,
      bio: `Nathan was the prophet at David's court, and he appears at the two greatest turning points of David's reign. It is through Nathan that God delivers the Davidic covenant — the promise of an offspring and a throne established forever (2 Samuel 7). And it is Nathan who later walks into the palace after the Bathsheba affair and, with the disarming parable of the rich man and the poor man's lamb, leads David to pronounce his own sentence before turning it on him: "You are the man!" (12:7).

Nathan is the model of truth spoken to power — bold enough to confront a king who held the power of life and death, yet wise enough to do it in a way that pierced the conscience rather than merely provoking the temper. He appears once more at the end of David's life, helping to secure Solomon's peaceful succession (1 Kings 1). His ministry shows that the throne, however exalted, still stands under the word of God.`,
      keyRefs: ['2 Samuel 7:4–17', '2 Samuel 12:7', '1 Kings 1:11–14'],
      appearsInActs: [7],
    },
    {
      slug: 'solomon',
      name: 'Solomon',
      oneLine: `David's son — given wisdom, builder of the temple, whose divided heart cracked the kingdom.`,
      bio: `Solomon came to the throne amid palace intrigue and began his reign with a humble request: offered anything by God, he asked not for wealth or long life but for "an understanding heart" to govern God's people (1 Kings 3:9). God gave him wisdom beyond any other, and riches besides. He built the temple his father had dreamed of, lifted Israel to its golden age of wealth and influence, and was sought out for his wisdom from distant lands. Tradition links him to the books of Proverbs, Ecclesiastes, and the Song of Songs.

But Solomon's story is also the act's great warning. He multiplied wives, horses, and gold — the very things the law had cautioned a king against — and laid heavy burdens on his own people. In the end, his many foreign wives "turned away his heart" to their gods (11:4), and the king who began by asking for an undivided wisdom finished with a divided heart. For that turning, God announced that the kingdom would be torn in two after his death. Solomon embodies the sobering truth that wisdom and glory cannot save a heart that drifts from God.`,
      keyRefs: ['1 Kings 3:9', '1 Kings 6:1', '1 Kings 11:4'],
      appearsInActs: [7],
    },
  ],

  themes: [
    {
      title: 'Kingship and the heart',
      body: 'God passes over the tall and the impressive to choose a shepherd boy, because "Yahweh looks at the heart." The king Israel wanted (Saul) and the king God chose (David) reveal that what God seeks in a leader, and in us, is not appearance or talent but a heart turned toward him.',
    },
    {
      title: 'The everlasting throne',
      body: 'When David offers to build God a house, God promises instead to build David a house — a dynasty whose throne will stand forever (2 Samuel 7). This covenant becomes the seedbed of all messianic hope: a King from David\'s line who will reign without end.',
    },
    {
      title: 'Worship at the center',
      body: 'David brings the ark to Jerusalem and Solomon builds the temple, setting God\'s presence — not the palace — at the heart of the nation. The holy God draws near to dwell with his people, drawing forth both trembling reverence and overflowing joy.',
    },
    {
      title: 'Wisdom and the fear of the Lord',
      body: 'Solomon\'s prayer for "an understanding heart" is answered with wisdom beyond measure. Biblical wisdom is not mere cleverness but the skill of living rightly before God — and it begins, Israel insisted, in the fear of the Lord.',
    },
    {
      title: 'The corrupting pull of power and success',
      body: 'Samuel warned that a king would "take," and the warning comes true. Saul\'s fear of the people, David\'s abuse of the throne, Solomon\'s unchecked appetites — prosperity and power slowly erode even the best, when the heart is not kept by God.',
    },
    {
      title: 'Repentance, not perfection',
      body: 'David is called a man after God\'s own heart not because he never sinned but because, when confronted, he broke and returned. Saul hardened; David repented. The hope of these books rests not on a flawless king but on the mercy of a faithful God.',
    },
  ],

  words: [
    {
      term: 'mashiach',
      language: 'Hebrew',
      gloss: '"anointed one"',
      detail:
        'To anoint with oil was to set a person apart for God\'s service, and kings like Saul and David were "Yahweh\'s anointed" — *mashiach*. The word grows into a title of hope: *the* Anointed One, the coming King of David\'s line. Translated into Greek it becomes *Christos* — Christ.',
    },
    {
      term: 'nephesh',
      language: 'Hebrew',
      gloss: '"soul / life / self"',
      detail:
        'The whole living self — breath, life, longing, the inner person. Jonathan loved David "as his own *nephesh*" (1 Samuel 18:1), and David pours out his *nephesh* before God in the Psalms. Not a ghost trapped inside a body, but the living, desiring person as a whole.',
    },
    {
      term: 'hesed',
      language: 'Hebrew',
      gloss: '"steadfast covenant love"',
      detail:
        'God\'s loyal, committed, promise-keeping love — the beating heart of the Davidic covenant, where God vows that his *hesed* "will not depart" from David\'s house as it had from Saul (2 Samuel 7:15). Love that holds on; faithfulness that does not let go.',
    },
    {
      term: 'chokmah',
      language: 'Hebrew',
      gloss: '"wisdom"',
      detail:
        'Not mere intelligence but the skill of living well before God — the "understanding heart" Solomon asked for in order to govern (1 Kings 3:9). Israel\'s wisdom tradition roots it in reverence: "The fear of Yahweh is the beginning of wisdom" (Proverbs 9:10).',
    },
    {
      term: 'bayit / beth',
      language: 'Hebrew',
      gloss: '"house"',
      detail:
        'The pivot of 2 Samuel 7. David offers to build God a *bayit* (a temple); God answers that he will instead make David a *bayit* (a dynasty, a royal line). The one word holds both a building and a family — and the everlasting house God builds far outlasts any house David could.',
    },
    {
      term: 'Yahweh Sabaoth',
      language: 'Hebrew',
      gloss: '"the LORD of Armies / Hosts"',
      detail:
        'A title that rings through 1–2 Samuel — "Yahweh of Armies," the commander of all the hosts of heaven. It is the name David hurls at Goliath (1 Samuel 17:45): not trusting in sword or spear, but in the God who commands every army, seen and unseen.',
    },
  ],

  christ: {
    summary: `The promise of 2 Samuel 7 is the hinge on which the rest of the Bible turns. God vows an offspring of David whose throne will stand *forever* — and "forever" is far too vast a word for Solomon, or any king who follows. The Old Testament closes still waiting for the Son of David. So when an angel tells a young woman in Nazareth that her child will receive "the throne of his father David" and reign over a kingdom that "will have no end," a centuries-old promise finally lands. Jesus is the Messiah — the Anointed One the very word *mashiach* was reaching toward. He is the shepherd-king born in David's Bethlehem, the one "greater than Solomon," whose own body is the true temple where God and humanity meet. The kingdom that rises in this act finds its true and unending King in him.`,
    links: [
      {
        ref: 'Matthew 1:1',
        note: `The Gospel's opening words — "Jesus Christ, the son of David, the son of Abraham" — anchor Jesus in David's royal line.`,
      },
      {
        ref: 'Luke 1:32–33',
        note: `Gabriel promises Mary that the Lord will give her son "the throne of his father David," and that "there will be no end to his Kingdom" — 2 Samuel 7 fulfilled.`,
      },
      {
        ref: 'Acts 2:30–32',
        note: `At Pentecost, Peter declares that God swore to David that one of his offspring would sit on his throne — and the resurrection of Jesus is that enthronement.`,
      },
      {
        ref: 'Matthew 12:42',
        note: `"A greater than Solomon is here" — the wisdom and glory of Israel's golden king are surpassed in Christ.`,
      },
      {
        ref: 'John 2:19–21',
        note: `"Destroy this temple, and in three days I will raise it up" — he spoke of the temple of his body; Christ is the true dwelling of God among us.`,
      },
      {
        ref: 'Micah 5:2',
        note: `The ruler of Israel will come from Bethlehem, David's own town — the shepherd-king born where the shepherd-king David was born.`,
      },
      {
        ref: 'Revelation 22:16',
        note: `The risen Christ claims the promise as his own: "I am the root and the offspring of David, the Bright and Morning Star."`,
      },
    ],
  },

  memoryVerses: [
    {
      ref: '1 Samuel 15:22',
      text: `Has Yahweh as great delight in burnt offerings and sacrifices, as in obeying Yahweh's voice? Behold, to obey is better than sacrifice, and to listen than the fat of rams.`,
      translation: 'WEB',
    },
    {
      ref: '1 Samuel 16:7',
      text: `But Yahweh said to Samuel, "Don't look on his face, or on the height of his stature, because I have rejected him; for I don't see as man sees. For man looks at the outward appearance, but Yahweh looks at the heart."`,
      translation: 'WEB',
    },
    {
      ref: '2 Samuel 7:12–13',
      text: `When your days are fulfilled and you sleep with your fathers, I will set up your offspring after you, who will proceed out of your body, and I will establish his kingdom. He will build a house for my name, and I will establish the throne of his kingdom forever.`,
      translation: 'WEB',
    },
    {
      ref: 'Psalm 51:10',
      text: `Create in me a clean heart, O God. Renew a right spirit within me.`,
      translation: 'WEB',
    },
  ],

  reflection: {
    meditation: `Be still for a moment, and let your shoulders drop.

So much of our energy goes into managing how we appear — the right words, the right image, the face we show the world. But the God who passed over the tall and the impressive to choose a shepherd boy is not fooled by surfaces, and he is not impressed by them either. He sees past all of it, straight to the heart — and he is not turned away by what he finds there.

This is the God who kept his promise to David through every failure, whose steadfast love did not depart. He knows your divided heart, your quiet compromises, the things you would rather he did not see. And still he stays. Like David, you do not come to him already clean; you come to be made clean. *Create in me a clean heart, O God.*

Breathe in. Breathe out. You are seen, and you are still loved. Rest here a little while.`,
    prompts: [
      'God looks past the outward appearance to the heart. What would change if you truly lived as though that were so — both of yourself and of the people around you?',
      'Saul kept the appearance of obedience while quietly going his own way. Where might your worship be covering for a divided heart?',
      'David\'s greatness was not that he never fell, but that he kept returning to God. What do you need to bring honestly back to God today?',
      'Solomon\'s slow drift came through small compromises and divided affections. What competing loves are quietly turning your heart?',
    ],
  },

  questions: [
    {
      q: 'Was it wrong for Israel to want a king?',
      a: `It is more tangled than a simple yes or no, which is why God's own response is layered. Centuries earlier the law had actually anticipated a king and described what a godly one should look like (Deuteronomy 17:14–20), so monarchy itself was not the problem. The problem lay in the *heart* of the request: the people wanted a king "like all the nations" (1 Samuel 8:5) — to be normal, to trade an unseen, demanding King for a visible, manageable one. God names it plainly: "they have rejected me, that I should not be king over them" (8:7).

And yet God grants the request, warns them honestly about its cost, and then works through the monarchy to advance his purposes — eventually establishing David's throne and the promise of the Messiah. It is a striking pattern of grace: God meets his people inside their second-best choices and refuses to abandon them there.`,
    },
    {
      q: 'How should we read God "rejecting" Saul and the command about the Amalekites (1 Samuel 15)?',
      a: `This is one of the hardest chapters in the Old Testament, and it deserves to be wrestled with honestly rather than smoothed over. A few things help hold it faithfully. First, the command against Amalek is presented not as random cruelty but as a long-delayed, time-bound act of *judgment* — Amalek had preyed on Israel's weak and weary stragglers generations earlier (Deuteronomy 25:17–19). Second, many readers note that the sweeping "devote-to-destruction" language belongs to the stylized warfare rhetoric of the ancient Near East and to a unique, non-repeatable moment in redemptive history; it is never offered as a general license for violence, and the wider Bible moves toward enemy-love.

As for Saul's "rejection," it is not arbitrary. It is the verdict on a settled pattern: partial obedience dressed up as worship, blame-shifting, and the fear of people over God ("I feared the people, and obeyed their voice," 15:24). The point Samuel presses — "to obey is better than sacrifice" — is that God desires the heart, not religious performance. None of this makes the chapter easy; faithful readers continue to feel its weight, and that is appropriate.`,
    },
    {
      q: 'David is called "a man after God\'s own heart" — how, given his terrible sins?',
      a: `The phrase does not mean David was sinless; his sins were grievous, and Scripture records them without flinching. It means his heart was fundamentally *oriented* toward God, so that when he was confronted with his guilt he broke and returned rather than hardened and hid. Set him beside Saul and the contrast is the whole point: Saul, exposed, made excuses; David, exposed by Nathan, said simply, "I have sinned against Yahweh" (2 Samuel 12:13) and poured out his repentance (Psalm 51).

Crucially, this is no excuse for sin — the consequences of David's actions were severe and lifelong, and the narrative shows them honestly. But it is a profound comfort: a person's hope before God rests not on a flawless record but on a heart that keeps turning back to him in repentance and trust. For anyone weighed down by failure, David's life quietly insists that the door of repentance is still open.`,
    },
    {
      q: 'Is the Davidic covenant conditional or unconditional — and how is it fulfilled?',
      a: `It carries both dimensions, held in tension. On the one hand, individual kings in David's line could forfeit blessing through disobedience — "if he commits iniquity, I will chasten him with the rod of men" (2 Samuel 7:14). On the other, the promise to David's *house as a whole* is unconditional: unlike Saul, from whom God withdrew his favor, God vows that his steadfast love (*hesed*) "will not depart" from David's line (7:15). The dynasty will not be cancelled, even when its kings fail.

The tension is finally resolved in Jesus. The Old Testament ends with David's actual throne empty and the kingdom long fallen — yet the promise of an everlasting throne still standing, unfulfilled. The New Testament announces that the one perfectly faithful Son of David has come, and that in him the throne is established forever (Luke 1:32–33; Acts 2:30–32). What flawed kings could not secure, the true King secures permanently.`,
    },
    {
      q: 'Does the Bible approve of everything David and Solomon did?',
      a: `No — and this is a vital distinction. To *report* an action is not to *endorse* it. The narrative records polygamy, political violence, and the abuse of royal power, but it never holds these up as models; instead it consistently traces their bitter fruit. David's affair with Bathsheba unleashes a sword that never leaves his house; Solomon's many wives turn his heart and split the kingdom. Deuteronomy 17 had already warned kings against multiplying wives, horses, and gold — warnings the text deliberately shows them violating.

In other words, Scripture holds up an honest mirror, not a varnished portrait. It tells the truth about its heroes precisely so that we will not idolize them, and so that the story will keep us longing for a better King — one whose heart never turns and whose reign brings no ruin.`,
    },
  ],

  glossaryRefs: ['mashiach', 'nephesh', 'hesed', 'chokmah', 'bayit-beth', 'yahweh-sabaoth'],
};

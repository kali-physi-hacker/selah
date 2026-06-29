import type { ActContent } from '../types';

/**
 * ACT 8 — THE KINGDOM DIVIDES & FALLS (1 Kings 12 – 2 Kings)
 * The long, declining chronicle of the divided monarchy: idolatry,
 * the prophets who confront it, God's patience, and two exiles.
 */
export const kingdomFalls: ActContent = {
  number: 8,
  slug: 'kingdom-falls',
  title: 'The Kingdom Divides & Falls',
  movement: 'redemption',
  books: '1 Kings 12 – 2 Kings',
  era: 'the divided kingdom to exile',
  accent: '#993C1D',
  icon: 'trending-down',
  teaser: 'A kingdom split, prophets ignored, and two exiles.',

  featuredVerse: {
    ref: '1 Kings 18:21',
    text: 'Elijah came near to all the people, and said, "How long will you waver between the two sides? If Yahweh is God, follow him; but if Baal, then follow him." The people didn\'t say a word.',
    translation: 'WEB',
  },

  overview: `After Solomon, the kingdom he held together tears in two. His son Rehoboam answers the people's plea for relief with a threat, and ten tribes break away under Jeroboam. From this point the story runs in two channels — *Israel* in the north (its capital eventually Samaria) and *Judah* in the south (Jerusalem, the temple, and the line of David) — and the books of Kings tell their tangled, downward tale across some four centuries.

On the surface it is a chronicle of mostly faithless kings, each weighed on a single scale: did he do what was right, or what was evil, in the eyes of the LORD? The north never has a good king; the south has a handful of bright reformers — Hezekiah, Josiah — amid the rest. But God does not leave his people to drift. He raises prophets, above all Elijah and Elisha, who confront kings to their faces, call fire from heaven, raise the dead, and plead with a wandering people to turn back.

The spiritual battle is named plainly: will Israel follow Yahweh, or Baal? On Mount Carmel the question is forced into the open — "How long will you waver between the two sides?" — and fire falls. Yet idolatry persists, the warnings go unheeded, and the covenant's terms finally come due. The north falls to Assyria in 722 BC; the south to Babylon, with Jerusalem and the temple in ruins, in 586 BC. Two exiles end the act.

And yet this is not a story of abandonment. Threaded through the wreckage are God's astonishing patience, the mercy that reaches even an enemy general, the seven thousand who never bow to Baal, and the quiet promise that the LORD has not finished with his people. The failure of the kings only sharpens the longing for a King who will not fail — and the exile becomes the soil in which the hope of return, and of the coming Messiah, takes root.`,

  context: `The events span roughly four centuries, from the division of the kingdom around 930 BC to the fall of Jerusalem in 586 BC. They are told in 1 and 2 Kings — originally a single book — part of what the Hebrew canon calls the "Former Prophets." Tradition associated the material with Jeremiah and the prophetic schools; many scholars see it as a carefully shaped "Deuteronomistic history," compiled and completed during or shortly after the exile, drawing on older court records the text itself names — "the book of the annals of the kings of Israel" and "of Judah."

This is theology written as history. The writers are not neutral annalists; they evaluate each reign by one standard — faithfulness to the LORD and his covenant — and they write to answer the burning question of the exiles: how did we lose the land, the city, and the temple? Their answer is sober and hopeful at once. The catastrophe came not because Yahweh was weak or absent, but because his people forsook the covenant despite centuries of patient warning through the prophets. Read this way, Kings is less a tale of political decline than a long, aching plea to come home — written so that a people in exile might understand their past and dare to hope.`,

  timeline: [
    {
      ref: '1 Kings 12:1–20',
      title: 'The kingdom tears in two',
      detail:
        'At Shechem, Rehoboam rejects the elders\' wise counsel and threatens the people with an even heavier yoke. Ten northern tribes break away under Jeroboam; only Judah and Benjamin remain with the house of David.',
    },
    {
      ref: '1 Kings 12:25–33',
      title: 'Jeroboam\'s golden calves',
      detail:
        'Fearing his people will drift back to the temple in Jerusalem, Jeroboam sets up two golden calves — at Bethel and Dan — with a rival priesthood and festival. It becomes the defining "sin of Jeroboam" that corrupts the north.',
    },
    {
      ref: '1 Kings 16:29–33',
      title: 'Ahab and Jezebel enthrone Baal',
      detail:
        'Ahab marries the Sidonian princess Jezebel and makes Baal worship Israel\'s state religion, building Baal a temple in Samaria. The northern kingdom\'s slide into idolatry reaches its lowest point.',
    },
    {
      ref: '1 Kings 17:1–16',
      title: 'Elijah, the drought, and the widow',
      detail:
        'The prophet Elijah announces a drought to confront Baal, the supposed storm-god. He is fed first by ravens, then by a poor widow of Zarephath whose flour and oil never run out.',
    },
    {
      ref: '1 Kings 18:20–39',
      title: 'Fire falls on Mount Carmel',
      detail:
        'Elijah challenges Israel: "How long will you waver between the two sides?" When Baal\'s prophets fail, the LORD answers Elijah\'s prayer with fire, and the people fall down crying, "Yahweh, he is God!"',
    },
    {
      ref: '1 Kings 19:9–18',
      title: 'The still small voice at Horeb',
      detail:
        'Fleeing Jezebel in despair, Elijah meets God at Sinai — not in wind, earthquake, or fire, but in a still small voice. God reveals seven thousand who never bowed to Baal and sends him to call Elisha.',
    },
    {
      ref: '2 Kings 2:1–15',
      title: 'Elijah taken up; Elisha takes the mantle',
      detail:
        'Elijah is carried to heaven in a whirlwind without tasting death. Elisha, who asked for a double portion of his spirit, picks up the fallen mantle and parts the Jordan in turn.',
    },
    {
      ref: '2 Kings 5:1–14',
      title: 'Naaman the leper is healed',
      detail:
        'Naaman, a commander of enemy Aram, is told by Elisha to wash seven times in the Jordan. Humbling himself, he is cleansed and confesses that there is no God in all the earth but the God of Israel.',
    },
    {
      ref: '2 Kings 17:5–23',
      title: 'The north falls to Assyria (722 BC)',
      detail:
        'After generations of unheeded warnings, Assyria captures Samaria and carries the northern kingdom into exile. The writer plainly names the cause: Israel forsook the LORD and would not turn.',
    },
    {
      ref: '2 Kings 18:13–19:37',
      title: 'Hezekiah and Jerusalem delivered',
      detail:
        'When Sennacherib of Assyria besieges Jerusalem and mocks Israel\'s God, the faithful king Hezekiah spreads the threatening letter before the LORD in prayer. The city is delivered overnight.',
    },
    {
      ref: '2 Kings 22:8–23:25',
      title: 'Josiah finds the book of the Law',
      detail:
        'During temple repairs the long-lost book of the Law is found and read to the young king Josiah, who tears his robes and leads Judah\'s most sweeping reform. The reprieve delays, but cannot cancel, the judgment.',
    },
    {
      ref: '2 Kings 25:1–21',
      title: 'Jerusalem and the temple destroyed (586 BC)',
      detail:
        'Babylon under Nebuchadnezzar breaks the city, burns Solomon\'s temple, and carries Judah into exile. The kingdom that opened this act by dividing now lies wholly in ruins.',
    },
  ],

  deepDive: [
    {
      id: 'the-kingdom-tears-in-two',
      heading: 'The kingdom tears in two',
      body: `When Solomon dies, his son Rehoboam goes to Shechem to be made king, and the northern tribes come with a single, reasonable request: lighten the heavy yoke of taxes and forced labor your father laid on us, and we will gladly serve you. Rehoboam consults the elders, who counsel mercy — then ignores them for his young friends, who counsel cruelty. His answer is a boast: where his father used whips, he will use scorpions. The ten northern tribes turn their backs — every man to his own tent — and the united kingdom of David and Solomon is gone in a single afternoon.

From here the story splits. **Israel** (the north, ten tribes) takes Jeroboam as king; **Judah** (the south, with Benjamin) keeps the house of David, Jerusalem, and the temple. Tellingly, the writer frames even this rupture as something within God's sovereign hand — a consequence of Solomon's own turn to idols — while never excusing the human pride and folly that caused it. A kingdom is lost not on a battlefield but in one arrogant word.

Then comes the north's founding sin. Jeroboam reasons that if his people keep traveling south to worship at the Jerusalem temple, their hearts will return to the house of David. So he makes two golden calves, sets one at Bethel and one at Dan, and presents them as the gods who brought Israel up out of Egypt — a deliberate, damning echo of Aaron's calf at Sinai. He invents a counterfeit priesthood and festival to match. For the rest of 1–2 Kings, king after northern king is measured against "the sin of Jeroboam... who made Israel to sin." The fracture was political; the deeper wound was a hollowed-out, do-it-yourself worship that would rot the north until it fell.`,
    },
    {
      id: 'the-prophets-arrive',
      heading: 'The prophets arrive: the word that confronts kings',
      body: `Something shifts in the storytelling once the kingdom divides: the prophets move to center stage. Israel had known prophets before — Moses above all — but now, as the kings drift, the *navi* becomes the LORD's persistent counter-voice, the conscience the throne cannot silence. A prophet is not first a predictor of the future but a *spokesman*: one who stands in God's council, then stands before God's people to declare, "Thus says Yahweh."

It is no accident that the greatest of them, Elijah, rises in the reign of the worst of the northern kings, Ahab — who marries Jezebel, a Sidonian princess, and makes Baal worship the official religion of Israel, complete with a temple and hundreds of state-funded prophets. When the powers of the age enthrone a lie, God answers not with an army but with a single man and a word. Elijah appears from nowhere to swear that there will be neither dew nor rain in the coming years except at his word — striking at Baal precisely where Baal claimed to rule, as the storm-god who sends the rain.

This is one of the act's deepest patterns: the word of the LORD outranks the crown. Kings can kill prophets — and Jezebel does — but they cannot kill the word. Again and again a ruler does what is evil, and a prophet steps into the palace to name it: costly, lonely, and unwelcome. We should not miss the mercy in this. The prophets are God's warning given in person, and as long as he is still sending them, the door of return is still standing open.`,
    },
    {
      id: 'fire-on-carmel',
      heading: 'Fire on Carmel: "If Yahweh is God, follow him"',
      body: `After three rainless years, Elijah summons all Israel and the prophets of Baal to Mount Carmel for a public reckoning. His challenge is the act's beating heart, and our featured verse: *"How long will you waver between the two sides? If Yahweh is God, follow him; but if Baal, then follow him."* The people, caught between two worlds, say nothing. Their silence is its own answer — they want both, which is in truth to choose neither.

The test is simple: two altars, two bulls, no fire lit by human hands. The god who answers by fire is God. The prophets of Baal cry out from morning to noon, dancing, shouting, gashing themselves — and Elijah, with devastating wit, taunts them to cry louder; perhaps their god is deep in thought, or away on a journey, or asleep. Heaven stays silent. Then Elijah rebuilds the LORD's broken altar with twelve stones for the twelve tribes, drenches it with water until it runs, and prays one quiet prayer — not for spectacle, but that this people might know that Yahweh is God and that he is turning their hearts back. The fire falls and consumes everything: sacrifice, wood, stones, even the water in the trench.

And the people who had stood mute fall on their faces with the cry that answers Elijah's question and crowns the scene: *"Yahweh, he is God! Yahweh, he is God!"* Then, after the long drought, the rain finally comes — proof that the LORD, not Baal, holds the heavens. It is one of Scripture's great vindications. And yet — this is sobering — even Carmel does not finally convert the nation. A single overwhelming display can move a crowd for an hour; it cannot by itself produce the slow, daily faithfulness God is after. Which is exactly the lesson waiting for Elijah on the far side of his greatest triumph.`,
    },
    {
      id: 'the-gentle-whisper',
      heading: 'The gentle whisper at Horeb',
      body: `You would expect Elijah, fresh off Carmel, to feel invincible. Instead, when Jezebel vows to kill him, he runs — exhausted, terrified, and despairing, collapsing under a solitary tree and asking to die. It is one of the Bible's most honest portraits of a faithful servant emptied out. And God's first response is not a rebuke but tenderness: sleep, and food, and rest, twice over, before a single word of correction.

Then Elijah journeys forty days to Horeb — Sinai, the mountain of the covenant — and pours out his despair: he alone is left, and they are seeking his life. God tells him to stand on the mountain, and a great wind tears the rocks, and an earthquake shakes the ground, and a fire blazes — the very signs of Sinai — but the LORD is not in the wind, the earthquake, or the fire. After the fire comes a *still small voice* — a sound of sheer silence, a gentle whisper. And *there* is God. The One who had just answered by fire on Carmel now reveals himself in the quietest of sounds, a deliberate and gracious correction. He is not only the God of the spectacular; he is the God who draws near in the stillness, to one broken man.

Then come two gifts. First, the truth that dismantles Elijah's despair: he is *not* the only one — seven thousand in Israel have never bowed the knee to Baal. God always keeps a remnant; the cause is never as lost as the lonely heart believes. Second, a future: Elijah is sent to anoint kings and, above all, to call **Elisha**, casting his mantle over him as successor. Elijah's work will outlive Elijah. The man who wanted to die is gently set back on his feet, given company, and handed a task he will not live to finish. It is a profound picture of how God restores the weary — not with another mountaintop, but with rest, truth, companionship, and something to do.`,
    },
    {
      id: 'elisha-and-the-mercy-of-god',
      heading: 'Elisha and the wideness of God\'s mercy',
      body: `When Elijah is taken up to heaven in a whirlwind — one of only two people in Scripture who never taste death — Elisha watches, picks up the fallen mantle, and receives the "double portion" of his master's spirit he had asked for, the inheritance of a firstborn son. His ministry overflows with mercy in miniature: he purifies a poisoned spring, multiplies a widow's oil so she can pay her debts and live, raises a Shunammite woman's dead son, feeds a hundred men from a little bread, and makes a borrowed axe-head float to spare a worried man. Where Elijah's ministry often thundered, Elisha's tends to heal and provide. Together they show that the God of judgment is, at the very same time, the God who stoops to the smallest human need.

The crown of Elisha's story is **Naaman**, a commander of the army of Aram — Israel's enemy — and a leper. Told by a captured Israelite servant girl that a prophet in Samaria could heal him, Naaman arrives with gold and pomp, only to be told by Elisha (who will not even come out to meet him) to go wash seven times in the muddy Jordan. Offended, he nearly storms off; humbled by his own servants, he obeys, and his flesh is restored "like the flesh of a little child." He goes home confessing that there is no God in all the earth but the God of Israel. Here, centuries before the gospel goes to the nations, God's mercy reaches across the battle line to heal an enemy soldier who comes in humble faith.

Jesus himself will point back to these two scenes — the widow of Zarephath and Naaman the Syrian — to show that God's grace was never meant to stop at Israel's borders (Luke 4:25–27). In the darkest stretch of the kings, the Elijah–Elisha narratives keep the lamp of mercy burning, and quietly foreshadow a salvation that will one day be offered to the whole world.`,
    },
    {
      id: 'the-two-exiles',
      heading: 'The two exiles: when the warnings come due',
      body: `For all the prophets' pleading, the north never turns. Second Kings 17 delivers the verdict with unusual directness: Israel had sinned against the LORD, worshiped other gods, walked in the practices of the nations, and would not listen, even though Yahweh had testified to them "by every prophet, and every seer," saying, *turn from your evil ways*. They would not. So in 722 BC the Assyrian empire — the cruelest superpower of its age — captures Samaria, and the northern kingdom is carried into exile, scattered and resettled until it ceases to exist as a nation. The chapter reads less like a battle report than a coroner's report: here is *why* a people died.

Judah is given longer, and two of its kings shine. **Hezekiah** trusts the LORD when Assyria's Sennacherib besieges Jerusalem and blasphemes Israel's God; the city is delivered overnight in answer to prayer. A century later **Josiah**, who came to the throne as a boy, hears the rediscovered book of the Law read aloud, tears his robes in grief, and launches the most thorough reform in Judah's history. These are real mercies and real reprieves. But they delay the reckoning rather than cancel it; the rot runs too deep, and after Josiah the slide resumes.

Finally, in 586 BC, Babylon under Nebuchadnezzar breaks through. Jerusalem is burned, its walls thrown down, the palace and great houses destroyed — and the temple of Solomon, the dwelling-place of God's name, is looted and reduced to rubble. The last king of Judah, Zedekiah, watches his sons killed, is then blinded, and is led away in chains. The people of Judah go into exile in Babylon. The act that opened with a kingdom dividing closes with both halves of it gone.

And yet the storytellers will not end in pure darkness. The very last paragraph of 2 Kings lifts a crack of light: the exiled king Jehoiachin is released from a Babylonian prison and given a seat at the king's table. It is a small thing — but it whispers that the line of David is not dead, that God has not forgotten his promise, and that exile is discipline, not divorce. A people weeping by the rivers of Babylon will begin to learn the hardest and most hopeful word in this whole act: *shuv* — return.`,
    },
  ],

  people: [
    {
      slug: 'jeroboam',
      name: 'Jeroboam',
      oneLine: 'The first king of the northern kingdom, whose golden calves set Israel on the road to ruin.',
      bio: `Jeroboam was a capable official under Solomon when the prophet Ahijah told him that God would tear ten tribes from Solomon's son because of the king's idolatry. When the kingdom split at Shechem, Jeroboam became the first king of the north (Israel). But fearing that pilgrimages to the Jerusalem temple would draw his people's loyalty back to the house of David, he set up two golden calves — at Bethel and Dan — with a rival priesthood and festival.

That decision became the defining sin of the northern kingdom. For the rest of 1–2 Kings, king after king is said to have walked in the way of Jeroboam and in the sin he "made Israel to sin." His name became shorthand for leading a whole nation astray — a sober warning about the long shadow a single leader's choices can cast.`,
      keyRefs: ['1 Kings 11:29–39', '1 Kings 12:25–33', '1 Kings 13:33–34'],
      appearsInActs: [8],
    },
    {
      slug: 'rehoboam',
      name: 'Rehoboam',
      oneLine: 'Solomon\'s son, whose harsh answer split the kingdom in two.',
      bio: `Rehoboam inherited Solomon's throne and, with it, the people's resentment of Solomon's heavy taxes and forced labor. At Shechem the northern tribes asked him to lighten the burden. He rejected the patient counsel of the elders for the bluster of his peers, threatening even greater severity — and ten tribes seceded on the spot.

Left with only Judah and Benjamin, Rehoboam became the first king of the southern kingdom and a forefather in the line of David that the Bible keeps carefully in view. His reign is a cautionary tale of pride and folly: a kingdom lost not in battle but in a single arrogant word, and a young man who mistook harshness for strength.`,
      keyRefs: ['1 Kings 12:1–24', '1 Kings 14:21–31'],
      appearsInActs: [8],
    },
    {
      slug: 'elijah',
      name: 'Elijah',
      oneLine: 'The fiery prophet who stood alone against Baal — and met God in a whisper.',
      bio: `Elijah the Tishbite is the towering prophet of the northern kingdom, raised up to confront Ahab and Jezebel's state-sponsored Baal worship. He announced a drought to humble the storm-god, was fed by ravens and then by a widow whose oil and flour never ran out, raised that widow's son, and on Mount Carmel called down fire from heaven before all Israel.

Yet his deepest lesson came in weakness: fleeing Jezebel in despair, he found God not in wind, earthquake, or fire, but in a still small voice, and was gently restored — told of the seven thousand faithful, and given Elisha as successor. Elijah never died but was taken up in a whirlwind. Scripture later promises an "Elijah" still to come, a hope the Gospels see fulfilled in John the Baptist, who came "in the spirit and power of Elijah."`,
      keyRefs: ['1 Kings 17', '1 Kings 18:20–39', '1 Kings 19:9–18', '2 Kings 2:1–12'],
      appearsInActs: [8],
    },
    {
      slug: 'elisha',
      name: 'Elisha',
      oneLine: 'Elijah\'s successor — prophet of a double portion and a thousand mercies.',
      bio: `Elisha was plowing his father's fields when Elijah passed by and cast his mantle over him; he left everything to follow. When Elijah was taken up, Elisha asked for a double portion of his master's spirit and took up the fallen mantle, parting the Jordan as his master had.

His long ministry is marked by mercy and provision: healing waters, multiplied oil, a raised child, a floating axe-head, food for the hungry, and the cleansing of Naaman the Syrian leper. Where Elijah often thundered, Elisha tended to heal — a steady, gentle witness that the God of judgment is also the God who stoops to the smallest human need, and whose mercy reaches even an enemy.`,
      keyRefs: ['1 Kings 19:19–21', '2 Kings 2:9–15', '2 Kings 4', '2 Kings 5:1–14'],
      appearsInActs: [8],
    },
    {
      slug: 'ahab',
      name: 'Ahab',
      oneLine: 'The northern king who married Jezebel and made Baal Israel\'s official god.',
      bio: `Ahab, king of Israel, is judged by Kings as doing more evil than all who came before him — chiefly by marrying Jezebel, a Sidonian princess, and establishing the worship of Baal, with its temple and prophets, as Israel's state religion. His reign is the backdrop for Elijah's whole ministry: the drought, Carmel, and the long contest between the word of the LORD and the power of the throne.

Ahab is a study in a conscience half-awake. He hears the prophets, at moments even humbles himself, yet keeps choosing Jezebel's way and his own appetite — as in the judicial murder of Naboth to seize his vineyard. He shows, soberingly, how a person can be confronted by truth again and again and still, fatally, refuse to turn.`,
      keyRefs: ['1 Kings 16:29–33', '1 Kings 18', '1 Kings 21'],
      appearsInActs: [8],
    },
    {
      slug: 'jezebel',
      name: 'Jezebel',
      oneLine: 'The Sidonian queen who drove Israel into Baal worship and hunted the prophets.',
      bio: `Jezebel, daughter of the king of Sidon and wife of Ahab, brought the worship of Baal and Asherah into the heart of Israel with ruthless zeal. She bankrolled hundreds of pagan prophets, slaughtered the prophets of the LORD, vowed to kill Elijah, and engineered the murder of Naboth to seize his vineyard for her sulking husband.

Her name became a byword for idolatry and persecution — invoked even in the New Testament (Revelation 2:20) as a symbol of seduction into false worship. She stands as a stark warning of power wielded without conscience, and of how thoroughly a single determined will can corrupt a whole people.`,
      keyRefs: ['1 Kings 16:31', '1 Kings 18:4', '1 Kings 19:1–2', '1 Kings 21:1–16'],
      appearsInActs: [8],
    },
    {
      slug: 'hezekiah',
      name: 'Hezekiah',
      oneLine: 'The faithful king of Judah whose trust in God spared Jerusalem from Assyria.',
      bio: `Hezekiah was one of Judah's best kings: he tore down the high places and idols, restored true worship, and trusted in the LORD, the God of Israel, as no king quite did before or after him. When Sennacherib of Assyria — who had just swallowed the northern kingdom — besieged Jerusalem and mocked Israel's God, Hezekiah spread the threatening letter before the LORD and prayed.

That night the siege was broken and the city delivered, a vivid sign that the LORD, not Assyria, held history in his hands. Hezekiah's reign shows what faith in a king could still accomplish — and his later lapse into pride is a candid reminder that even the best human kings stand in need of grace.`,
      keyRefs: ['2 Kings 18:1–7', '2 Kings 19:14–37'],
      appearsInActs: [8],
    },
    {
      slug: 'josiah',
      name: 'Josiah',
      oneLine: 'The boy-king who found the lost Law and led Judah\'s last great reform.',
      bio: `Josiah became king of Judah as a child and grew into its most zealous reformer. When the long-neglected book of the Law was found during temple repairs and read aloud, the young king tore his robes in grief at how far his people had strayed, then swept the land of idols, renewed the covenant, and kept a Passover unlike any since the days of the judges.

Of him it is said that no king before or after turned to the LORD with all his heart, soul, and might as he did. Yet even Josiah's wholehearted reform could only delay the exile, not prevent it — the sober proof that a nation cannot finally be saved by even its best leader, but only by a change of heart that runs all the way down.`,
      keyRefs: ['2 Kings 22:1–13', '2 Kings 23:1–25'],
      appearsInActs: [8],
    },
  ],

  themes: [
    {
      title: 'Divided loyalty & idolatry',
      body: 'The act\'s root sin is not atheism but *divided* worship — trying to keep both Yahweh and Baal, the temple and the calf, the covenant and the culture. Carmel exposes the impossibility: "How long will you waver between the two sides?" A heart split between two gods has, in truth, already chosen the idol.',
    },
    {
      title: 'The prophetic word confronts power',
      body: 'When kings enthrone lies, God answers with prophets. The *navi* stands before the throne to say what no courtier dares, and the word of the LORD proves mightier than the crown that resists it. Truth spoken to power — however costly and lonely — is one of God\'s chief mercies to a wandering people.',
    },
    {
      title: 'Judgment & the patience of God',
      body: 'God is not mocked; covenant unfaithfulness brings real consequences, and exile finally comes. Yet these same chapters overflow with centuries of warning, reprieve, and rescue. His judgment is slow, reluctant, and announced again and again in advance — the patience of a God who would far rather his people turn and live.',
    },
    {
      title: 'The cost of forsaking the covenant',
      body: '2 Kings 17 reads the exile as the covenant\'s own terms coming due: the blessings of faithfulness and the curses of rebellion had always been laid out plainly. Sin here is not breaking an arbitrary rule but tearing the fabric of a relationship — and we see, clearly and soberingly, what it costs to abandon the God who bound himself to his people.',
    },
    {
      title: 'The faithful remnant',
      body: 'When Elijah is certain he is the last believer alive, God corrects him: seven thousand have never bowed to Baal. The cause is never as lost as the lonely heart fears. Through every collapse God preserves a remnant — and through that thin thread of faithfulness, keeps every one of his promises alive.',
    },
    {
      title: 'God in the gentle whisper',
      body: 'The God who answers by fire on Carmel meets his broken prophet not in wind, earthquake, or fire, but in a still small voice. He is the God of the dramatic *and* of the quiet — who restores the weary not with another spectacle but with rest, truth, companionship, and a task.',
    },
  ],

  words: [
    {
      term: 'baal',
      language: 'Hebrew',
      gloss: '"lord," "master," "owner"',
      detail:
        'The name (and title) of the Canaanite storm-and-fertility god whose worship, pushed by Ahab and Jezebel, becomes Israel\'s great temptation. Baal promised rain and harvest — which is exactly why Elijah\'s drought and the fire on Carmel are a direct contest over who truly rules the heavens. To chase Baal was to beg life from a god who could not give it.',
    },
    {
      term: 'navi',
      language: 'Hebrew',
      gloss: '"prophet," "spokesman"',
      detail:
        'A *navi* is not mainly a fortune-teller but a mouthpiece — one called to stand in God\'s presence and then speak God\'s word to the people. In the divided kingdom the prophets become God\'s persistent counter-voice to the throne. The word reminds us that prophecy is less about predicting the future than about confronting the present with the will of God.',
    },
    {
      term: 'shuv',
      language: 'Hebrew',
      gloss: '"to turn," "return," "repent"',
      detail:
        'One of the great words of the prophets, *shuv* simply means to turn around and come back. To repent, in the Old Testament, is to *turn* — away from idols, back toward the God of the covenant. The whole tragedy of Kings is a people who would not turn (2 Kings 17:13–14); the whole hope held out to the exiles is that they still can. The way home is always a turning.',
    },
    {
      term: 'galut',
      language: 'Hebrew',
      gloss: '"exile," "captivity"',
      detail:
        '*Galut* is the word for being carried away from the land — the covenant curse made concrete, first for the north (722 BC), then for the south (586 BC). To lose the land, the city, and the temple was to lose the very signs of God\'s presence and promise. Yet exile would become, unexpectedly, a place of purifying and of longing — the soil in which hope for return took root.',
    },
    {
      term: 'sheerit',
      language: 'Hebrew',
      gloss: '"remnant"',
      detail:
        'The *sheerit* is what is "left over" — the faithful few God always preserves through judgment. The seven thousand who never bowed to Baal are its picture here. The remnant is one of Scripture\'s quiet engines of hope: however complete the collapse appears, God keeps a thread of his people, and through them keeps his word.',
    },
  ],

  christ: {
    summary: `The prophets of this act are signposts. Every time a *navi* steps before a king with "Thus says Yahweh," he points toward the one perfect Prophet, who will not merely speak God's word but *be* it. Elijah in particular casts a long shadow: Malachi promises an "Elijah" before the day of the LORD, and the Gospels reveal him in John the Baptist, who comes "in the spirit and power of Elijah" to prepare the way. The mercy that reached a Syrian leper foreshadows a salvation for all nations; the prophets' miracles — multiplied food, cleansed disease, the dead raised — preview the greater Prophet's work. And the long failure of the kings, ending in exile, carves out the deepest longing of the Old Testament: for a King who will not fall, and a homecoming that no enemy can undo. Christ is the answer this whole sad chronicle is aching toward.`,
    links: [
      { ref: 'Luke 1:17', note: 'Of John the Baptist: he will go before the Lord "in the spirit and power of Elijah," turning hearts and preparing a people.' },
      { ref: 'Malachi 4:5–6', note: 'God promises to send "Elijah the prophet" before the great day of the LORD — a hope fulfilled in John the Baptist.' },
      { ref: 'Matthew 17:11–13', note: 'Jesus teaches that the promised "Elijah" has already come; the disciples understand he means John.' },
      { ref: 'Luke 4:25–27', note: 'Jesus recalls the widow of Zarephath and Naaman the Syrian: God\'s grace was always reaching beyond Israel\'s borders.' },
      { ref: 'Luke 7:11–17', note: 'Jesus raises the widow of Nain\'s son, echoing Elijah and Elisha — the greater Prophet, Lord even over death.' },
      { ref: 'Hebrews 1:1–2', note: 'God spoke "through the prophets" in many ways; now, at last, he has spoken "by his Son" — the final and perfect Word.' },
      { ref: 'Luke 1:32–33', note: 'The angel promises Jesus "the throne of his father David" and a Kingdom without end — the faithful King the failed kings foreshadowed.' },
    ],
  },

  memoryVerses: [
    {
      ref: '1 Kings 18:21',
      text: 'Elijah came near to all the people, and said, "How long will you waver between the two sides? If Yahweh is God, follow him; but if Baal, then follow him." The people didn\'t say a word.',
      translation: 'WEB',
    },
    {
      ref: '1 Kings 18:39',
      text: 'When all the people saw it, they fell on their faces. They said, "Yahweh, he is God! Yahweh, he is God!"',
      translation: 'WEB',
    },
    {
      ref: '2 Kings 17:13',
      text: 'Yet Yahweh testified to Israel, and to Judah, by every prophet, and every seer, saying, "Turn from your evil ways, and keep my commandments and my statutes, according to all the law which I commanded your fathers, and which I sent to you by my servants the prophets."',
      translation: 'WEB',
    },
    {
      ref: '2 Kings 6:16',
      text: 'He answered, "Don\'t be afraid; for those who are with us are more than those who are with them."',
      translation: 'WEB',
    },
  ],

  reflection: {
    meditation: `Be still for a moment, and let the noise of many voices settle.

The question Elijah set before Israel still stands, gently, before you: *how long will you waver between two sides?* Not as an accusation, but as an invitation — for the God who calls is not only the God of fire on the mountain, but the God of the quiet whisper, who comes close to the weary and the afraid.

You do not have to be impressive here. Elijah met God not at the height of his triumph but at the end of his strength — and God gave him sleep, and food, and a gentle word, and a way forward. The same welcome is open to you.

Breathe in. Breathe out. You are not the last one left. You are not alone. Turn, and come home.`,
    prompts: [
      'Where in your life are you trying to keep one foot on each side — and what might it look like to choose wholeheartedly today?',
      'Elijah heard God in a whisper, not in the wind or the fire. What noise might you need to quiet in order to hear that gentle voice?',
      'When have you felt, like Elijah, that you were the only one left? How does the promise of the "seven thousand" change that feeling?',
      'The great word of the prophets is *shuv* — turn, return. Is there one place where God is gently inviting you to turn back to him?',
    ],
  },

  questions: [
    {
      q: 'Why would a good God send his own people into exile?',
      a: `Exile was not a divine outburst but the long-foreseen consequence of breaking a covenant freely entered. Centuries earlier the terms had been laid out plainly: faithfulness would bring blessing in the land, and persistent rebellion would bring the loss of it. For roughly four hundred years God sent prophet after prophet pleading with his people to turn (2 Kings 17:13). Exile came only after every warning had been spurned.

Crucially, the Bible frames exile as *discipline*, not abandonment. Even as he hands Judah over to Babylon, God preserves the line of David and keeps speaking through prophets like Jeremiah and Ezekiel, promising a return. The very last scene of 2 Kings — a freed king of Judah eating at the Babylonian table — is a deliberate flicker of hope. Judgment here is the severe mercy of a Father who will not let his children destroy themselves unchecked, and who intends, on the far side of it, to bring them home.`,
    },
    {
      q: 'Isn\'t the God of Elijah and Elisha disturbingly violent — the prophets of Baal killed, the bears mauling the youths?',
      a: `These are hard scenes, and honest readers feel their weight. A few things help. The slaughter of Baal's prophets (1 Kings 18:40) comes in the context of a covenant-treason that was itself murderous — Jezebel had been butchering the LORD's prophets (1 Kings 18:4), and Baal worship in that world included child sacrifice. This is the removal of a deadly, entrenched evil within Israel's unique covenant moment, not a pattern for how anyone is to treat opponents today.

The episode of the youths and the bears (2 Kings 2:23–24) is often misread as God mauling small children for teasing. The Hebrew can mean young men, likely a sizable, jeering mob; their cry "go up, you baldhead" appears to mock both Elisha's prophetic office and Elijah's recent ascension ("go up," as Elijah went up) — a hostile rejection of God's messenger near idolatrous Bethel. The text reports the event soberly, without relish. We can hold such passages honestly — neither explaining away their severity nor flattening them into proof that God is cruel — remembering that the very same narratives overflow with mercy to widows, foreigners, and the poor.`,
    },
    {
      q: 'What happened to the "ten lost tribes" of the north?',
      a: `When Assyria conquered Samaria in 722 BC, it followed its usual policy of deporting the conquered and resettling others in their place (2 Kings 17:24) — which is how the mixed population later known as the Samaritans arose. The exiles of the northern tribes were scattered across the Assyrian empire and largely assimilated, which is the historical kernel behind the romantic phrase "the lost ten tribes."

But "lost" overstates it. Many faithful northerners had already migrated south into Judah, and the prophets consistently speak of one reunited people of God. The New Testament simply assumes the tribes are not truly lost: Anna the prophetess is "of the tribe of Asher" (Luke 2:36), and James writes "to the twelve tribes" (James 1:1). Scripture's hope was never the survival of tribal bloodlines but the regathering of God's people — a hope it sees fulfilled, finally, in the one new family Christ gathers from every tribe and nation.`,
    },
    {
      q: 'How can judgment ever be called *merciful*?',
      a: `Because in the Bible, judgment and mercy are not always opposites — they are often the same act seen from two sides. God's judgments in this act are slow (centuries of patience), announced in advance (prophet after prophet), and aimed at restoration rather than destruction. To let a self-destructing people continue unchecked would not have been love; the exile, terrible as it was, broke Judah of its idolatry once and for all — the nation that returned from Babylon never worshiped Baal again.

Mercy also runs visibly *through* the judgment: the seven thousand preserved, the widow fed, the leper healed, the reforms granted, the Davidic line kept alive against every odds. A God who only ever judged would be a tyrant; a God who never judged would be indifferent to evil and its victims. The God of Kings is neither — he is the holy and patient Father whose severe mercies are always, finally, bending toward homecoming.`,
    },
    {
      q: 'With so many wicked kings, was the whole monarchy a mistake?',
      a: `The story is honest that Israel's kings mostly failed — and that the people's original demand for a king "like all the nations" had carried a warning with it. Yet the monarchy was not simply a blunder God then worked around; he wove his purposes through it, above all the covenant with David that a king would come from his line whose throne would last forever.

The repeated failure of the kings actually does important work in the larger story. It teaches that no merely human ruler, however reforming, can finally heal the human heart or hold back the consequences of sin. Hezekiah and Josiah were genuinely good — and even they could not save the nation. That unmet need is exactly the gap the Gospels announce has been filled: the true Son of David, the King who does what all the others could not.`,
    },
  ],

  glossaryRefs: ['baal', 'navi', 'shuv', 'galut', 'sheerit'],
};

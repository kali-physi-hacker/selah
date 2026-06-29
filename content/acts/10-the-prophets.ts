import type { ActContent } from '../types';

/**
 * ACT 10 — THE PROPHETS (Isaiah–Malachi)
 * Watchmen call a wandering people home — and foretell the One who comes.
 */
export const theProphets: ActContent = {
  number: 10,
  slug: 'the-prophets',
  title: 'The Prophets',
  movement: 'redemption',
  books: 'Isaiah–Malachi',
  era: 'the age of the prophets',
  accent: '#A32D2D',
  icon: 'eye',
  teaser: 'Watchmen call a wandering people home — and foretell the One who comes.',

  featuredVerse: {
    ref: 'Isaiah 53:5',
    text: 'But he was pierced for our transgressions. He was crushed for our iniquities. The punishment that brought our peace was on him; and by his wounds we are healed.',
    translation: 'WEB',
  },

  overview: `For centuries, whenever Israel drifted from God, he raised up *prophets* — men seized by his word and sent to speak it, whether or not anyone wished to hear. They were not fortune-tellers or mystics at the margins; they were God's appointed messengers at the center of national life, confronting kings, comforting the broken, and calling a wandering people home. The seventeen prophetic books, from Isaiah to Malachi, gather their voices across roughly four turbulent centuries — the rise and ruin of kingdoms, the catastrophe of exile, and the fragile return.

Their message runs along two lines that never come apart: unflinching *judgment* and unquenchable *hope*. The prophets name what is wrong with searing honesty — idolatry, the worship of power and wealth, religion that is loud in the temple and merciless in the street, the trampling of the poor — and they announce that such things have consequences, that the "Day of the LORD" is coming. But they never stop at judgment. Beyond every threatened ruin they see restoration: a returning remnant, a renewed heart, a new covenant, a healed creation. Tears and hope sound together in almost every chapter.

And as the centuries pass, that hope gathers around a Person. The portraits multiply and sharpen: a virgin's son named "God with us," a child who is "Mighty God," a shepherd-king born in Bethlehem, a Servant pierced for the sins of others, a Son of Man coming on the clouds, a sun of righteousness rising with healing in its wings. The prophets are watchmen on the walls of a long night, straining toward a dawn they could not yet fully see — and the whole New Testament will announce that the dawn has a name.`,

  context: `The prophetic books fall into three great seasons, shaped by the empires that towered over Israel. The *pre-exilic* prophets (eighth and seventh centuries BC) — Amos, Hosea, Isaiah, Micah, and later Jeremiah, Zephaniah, Nahum, and Habakkuk — warned a complacent people as first Assyria and then Babylon rose; the northern kingdom fell to Assyria in 722 BC, and Judah's reckoning loomed. The *exilic* prophets (sixth century BC) — Ezekiel and Daniel — ministered among the deportees in Babylon after Jerusalem and its temple were destroyed in 586 BC, and the book of Lamentations weeps over those ruins. The *post-exilic* prophets (late sixth and fifth centuries BC) — Haggai, Zechariah, and Malachi — spoke to the remnant who returned under Persia to rebuild the temple and their identity. (A few books, such as Jonah, Obadiah, and Joel, are harder to date with confidence.)

Two distinctions help in reading them. First, the labels *major* and *minor* describe *length*, not importance: the "Major Prophets" (Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel) are simply the long books, while the twelve "Minor Prophets," from Hosea to Malachi, were short enough to share a single scroll — the "Book of the Twelve." A two-chapter prophet like Jonah or Haggai is no less God's word than the sixty-six chapters of Isaiah. Second, prophecy is mostly *forth-telling* — declaring God's word into a present moment — and only sometimes *fore-telling*, predicting what is to come. The prophets are far more often covenant preachers calling for repentance than predictors of the distant future, and even their predictions are usually aimed at turning hearts now. They speak in poetry, vision, lament, and dramatic sign-acts, with all the fire and tears that calling required.`,

  timeline: [
    {
      ref: 'Isaiah 6:1–8',
      title: `Isaiah's call and cleansing`,
      detail:
        'In the year King Uzziah died, Isaiah sees the LORD enthroned, the seraphim calling "Holy, holy, holy" and the whole earth full of his glory. Undone by his own uncleanness, he is touched by a coal from the altar — and answers the call: "Here I am. Send me!"',
    },
    {
      ref: 'Isaiah 9:6',
      title: 'A child is born',
      detail:
        'Into a land walking in darkness Isaiah announces light: a child is born, a son is given, the government on his shoulders — "Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace."',
    },
    {
      ref: 'Isaiah 53',
      title: 'The suffering Servant',
      detail:
        'Isaiah unveils a Servant despised and rejected, pierced for our transgressions and crushed for our iniquities, led like a lamb to the slaughter — bearing the sin of many so that by his wounds we are healed.',
    },
    {
      ref: 'Jeremiah 1:4–10',
      title: 'Jeremiah, called as a youth',
      detail:
        'God tells the young Jeremiah, "Before I formed you in the womb, I knew you." Protesting that he is only a child, Jeremiah is sent anyway — appointed a prophet to the nations, his mouth touched by God\'s own hand.',
    },
    {
      ref: 'Jeremiah 31:31–34',
      title: 'The new covenant',
      detail:
        'Even as judgment falls, God promises something new: a covenant written not on stone but on the heart, with sins forgiven and forgotten, and all his people knowing him directly.',
    },
    {
      ref: 'Lamentations 3:22–23',
      title: 'Tears over a fallen city',
      detail:
        'After Jerusalem\'s destruction, five poems pour out raw grief over the ruined city. Yet at their center burns hope: God\'s compassions "are new every morning; great is your faithfulness."',
    },
    {
      ref: 'Ezekiel 37:1–14',
      title: 'The valley of dry bones',
      detail:
        'In Babylon, Ezekiel is set down in a valley of dry bones and told to prophesy. Breath enters the slain, sinew and flesh return, and a vast army stands — God\'s promise to raise a "dead" people and bring them home by his Spirit.',
    },
    {
      ref: 'Daniel 3; 6',
      title: `The furnace and the lions' den`,
      detail:
        'Daniel and his friends model a faith that will not bow: three men walk unharmed in a blazing furnace, and Daniel survives a night among lions — God rescuing those who would rather die than be unfaithful, and turning pagan kings to praise the living God.',
    },
    {
      ref: 'Daniel 7:13–14',
      title: 'The Son of Man',
      detail:
        'In a night vision Daniel sees "one like a son of man" coming with the clouds to the Ancient of Days, given everlasting dominion, glory, and a kingdom that will never be destroyed.',
    },
    {
      ref: 'Hosea 1–3',
      title: 'Love for an unfaithful spouse',
      detail:
        "God tells Hosea to marry a woman who will be unfaithful, and to keep loving and redeeming her — a living parable of the LORD's relentless love for a people who keep straying.",
    },
    {
      ref: 'Joel 2:28–29',
      title: 'The Spirit poured out',
      detail:
        'Joel foresees a day when God will pour out his Spirit "on all flesh" — sons and daughters prophesying, old men dreaming, young men seeing visions — a promise Peter will declare fulfilled at Pentecost.',
    },
    {
      ref: 'Jonah 3–4',
      title: 'Mercy to Nineveh',
      detail:
        "The reluctant prophet finally preaches to Israel's enemies in Nineveh, and the whole city repents. God spares them — to Jonah's dismay — revealing a mercy that reaches far beyond Israel's borders.",
    },
    {
      ref: 'Micah 5:2',
      title: 'Bethlehem foretold',
      detail:
        'Micah names the birthplace of the coming ruler: little Bethlehem, from which one will come "whose goings out are from of old, from ancient times."',
    },
    {
      ref: 'Malachi 4:2',
      title: 'The sun of righteousness',
      detail:
        'The Old Testament closes with a sunrise still to come: "the sun of righteousness" will "arise with healing in its wings" for those who fear God\'s name. Then four centuries of silence — until the dawn.',
    },
  ],

  deepDive: [
    {
      id: 'what-is-a-prophet',
      heading: 'What is a prophet? (forth-telling before fore-telling)',
      body: `The Hebrew word for prophet is *navi* — most likely "one who is called," and certainly "one who speaks for another." A prophet is not first a predictor of the future but a *mouthpiece*: a person God commissions to say what God is saying. Scripture pictures this plainly. When God sends Moses to Pharaoh, he says, "I have made you as God to Pharaoh; and Aaron your brother will be your prophet" (Exodus 7:1) — Aaron will speak Moses' words for him. That is what a prophet is to God: a mouth.

So the bulk of prophecy is *forth-telling* — speaking God's word into the present — far more than *fore-telling*, predicting what is to come. The prophets are covenant prosecutors, sent to a people bound to God by promise. They hold up the covenant like a contract and read out the charges: idolatry, injustice, the crushing of the poor, worship emptied of mercy. Their oracles often take the form of a *rib*, a courtroom "lawsuit," with heaven and earth summoned as witnesses. When they do speak of the future, it is usually *moral* prediction — if you continue down this road, here is where it ends; if you return, here is the mercy that waits.

The prophets also *acted* their messages. Isaiah walked barefoot as a sign against trusting in Egypt; Jeremiah smashed a clay jar and wore a wooden yoke; Ezekiel lay on his side for days and built a model of the besieged city; Hosea married an unfaithful woman so that his own aching marriage became a sermon. The word of God was not only heard but seen.

Because the office carried such weight, Israel was warned to test it. The measure of a true prophet was twofold: a true word comes to pass (Deuteronomy 18:22), and a true prophet calls people *toward* the LORD, never away to other gods (Deuteronomy 13). It was a costly calling. Prophets were ignored, mocked, beaten, and sometimes killed. To speak for God to a people who did not want to hear was rarely safe — and rarely popular.`,
    },
    {
      id: 'isaiah-the-fifth-gospel',
      heading: 'Isaiah — the "fifth Gospel"',
      body: `Isaiah has been called "the fifth Gospel," and for good reason: no book outside the Gospels shows us more of the coming Christ. Isaiah son of Amoz prophesied in Jerusalem in the eighth century BC, as the Assyrian empire loomed. His ministry was born in a vision (chapter 6): the LORD "high and lifted up," the seraphim crying "Holy, holy, holy" and declaring that "the whole earth is full of his glory." Undone by the sight — "Woe is me!" he cries, "a man of unclean lips" — Isaiah is touched on the mouth by a live coal from the altar, and his guilt is taken away. Only then, cleansed, does he answer: "Here I am. Send me!" Every true prophetic word begins where Isaiah's did — with the holiness of God and the mercy that makes an unclean messenger fit to speak.

From there Isaiah's vision opens onto the whole horizon of salvation. To a frightened king he gives a sign: "the virgin will conceive, and bear a son, and shall call his name Immanuel" — *God with us* (7:14). He sees a child upon whom the government will rest, named "Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace" (9:6), a king on David's throne whose peace will have no end. And in the second half of the book he unveils a mysterious figure — the *Servant of the LORD* — who in four "Servant Songs" suffers for others, climaxing in chapter 53: pierced for our transgressions, crushed for our iniquities, led like a lamb to the slaughter, and by whose wounds we are healed.

Isaiah ends where the whole Bible ends: with new creation — "new heavens and a new earth" (65:17), a world without weeping, where the wolf and the lamb feed together. Held within one book are the thrice-holy God, the child who is God-with-us, the Servant who dies, and the universe made new. Small wonder the New Testament quotes Isaiah more than almost any other book.`,
    },
    {
      id: 'jeremiah-the-new-covenant',
      heading: 'Jeremiah, Lamentations, and the new covenant',
      body: `If Isaiah shows us the glory, Jeremiah shows us the grief. Called as a young man around 627 BC — "Before I formed you in the womb, I knew you... I have appointed you a prophet to the nations" (1:5) — Jeremiah protested that he was only a youth who did not know how to speak. God touched his mouth and sent him anyway, into the hardest assignment imaginable: to preach God's coming judgment on Jerusalem for some forty unheeded years, and then to watch it come true. He saw the city he loved besieged, the temple burned, and the people carried off to Babylon in 586 BC. He is remembered as "the weeping prophet," and the book of Lamentations — five aching poems over the ruined city — has long been read alongside his name.

Yet from this prophet of tears comes the most luminous promise in the Old Testament. In the very shadow of the city's fall, God speaks of a *new covenant*: "Behold, the days come... that I will make a new covenant with the house of Israel... I will put my law in their inward parts, and I will write it in their heart. I will be their God, and they shall be my people" (31:31–33). The old covenant, written on stone, had been broken again and again. The new one will be written on hearts — an inner transformation, sins forgiven and remembered no more, every member of the covenant knowing the LORD directly.

This is the hinge on which the whole Bible turns toward the gospel. On the night before he died, Jesus lifted the cup and said, "This cup is the new covenant in my blood" (Luke 22:20). The promise Jeremiah spoke in the ashes of Jerusalem is the promise Jesus signs in his own blood — and the letter to the Hebrews spends three chapters showing that this is exactly what Christ came to inaugurate.

And even Lamentations, that book of unrelieved sorrow, has a spring of hope at its center: God's compassions, the prophet says, "are new every morning; great is your faithfulness" (3:22–23). Out of the deepest grief in the Old Testament rises one of its sweetest songs of mercy.`,
    },
    {
      id: 'ezekiel-and-the-dry-bones',
      heading: 'Ezekiel and the valley of dry bones',
      body: `Ezekiel was a priest deported to Babylon in 597 BC, who became a prophet by a canal far from the temple he had been trained to serve. His visions are among the most vivid in all Scripture — a storm-borne throne of wheels within wheels and living creatures; the glory of God reluctantly departing the doomed temple and, one day, returning to it; a river flowing out from a renewed sanctuary, growing deeper as it goes, healing everything it touches.

The most famous comes in chapter 37. Set down in a valley full of dry bones, Ezekiel is asked, "Son of man, can these bones live?" At God's command he prophesies, and *ruach* — breath, wind, Spirit — enters the slain; bone joins to bone, sinew and flesh return, and a vast army stands on its feet. The meaning is given plainly: the bones are the whole house of Israel, who say, "Our bones are dried up, and our hope is lost." To exiles who felt as good as dead, Ezekiel preached resurrection — God would put his Spirit within them and bring them home.

Behind the vision lies one of the tenderest promises in the prophets: "I will give you a new heart, and I will put a new spirit within you. I will take away the stony heart out of your flesh, and I will give you a heart of flesh" (36:26). This is the same hope Jeremiah named from another angle — not merely a change of circumstances but a change of heart, a people remade from the inside out. Ezekiel holds together, as starkly as anyone, the severity of God's judgment and the sheer stubbornness of his hope.`,
    },
    {
      id: 'daniel-and-the-son-of-man',
      heading: 'Daniel — faith in exile and the Son of Man',
      body: `Taken to Babylon as a youth around 605 BC, Daniel rose to serve at the highest levels of two successive empires while refusing to bow to either. The first half of his book models faith under pressure with stories every child knows: his three friends emerge unburned from a blazing furnace rather than worship a golden image, and Daniel himself survives a night among lions rather than stop praying to his God. The point is never merely that the heroes are brave; it is that the living God reigns over the proudest kings on earth, and honors those who trust him.

The second half of the book turns to *apocalyptic* vision — symbolic, dream-like literature that pulls back the curtain on the unseen. Daniel watches a succession of beasts rise from a churning sea, interpreted within the book itself as a procession of empires that rise and fall. And then, above them all, he sees the turning point of history: "one like a son of man" coming "with the clouds of the sky" to the Ancient of Days, and receiving "dominion, and glory, and a kingdom, that all the peoples, nations, and languages should serve him" — a dominion that "will not pass away" (7:13–14).

That phrase, "Son of Man," became Jesus' favorite title for himself, used scores of times in the Gospels. On trial for his life, asked if he is the Messiah, Jesus answers by quoting this very vision: "You will see the Son of Man... coming with the clouds" (Mark 14:62). It was understood at once as a staggering claim — that the carpenter from Nazareth is the one to whom everlasting dominion belongs. Daniel's confidence, that earthly powers are temporary and God's kingdom is forever, has steadied God's people under every empire since.`,
    },
    {
      id: 'the-book-of-the-twelve',
      heading: 'The Book of the Twelve (the "minor" prophets)',
      body: `The twelve shorter prophets are easy to overlook, yet together they form a rich chorus — anciently copied onto a single scroll and read as one "Book of the Twelve." None is "minor" in worth; each adds a distinct note to the prophetic message.

- **Hosea** turns his own painful marriage into a portrait of God's faithful love for an unfaithful people.
- **Joel** reads a devastating locust plague as a warning of the Day of the LORD — and promises God's Spirit poured out on all flesh.
- **Amos**, a shepherd, thunders for justice against a comfortable society that has forgotten the poor.
- **Obadiah**, the shortest book, pronounces judgment on Edom's pride and its violence against its brother Israel.
- **Jonah** is sent to Israel's enemies — and discovers that God's mercy reaches even Nineveh.
- **Micah** holds together judgment, the heart of true religion (6:8), and the ruler to come from Bethlehem.
- **Nahum** announces the fall of cruel Nineveh, a comfort to those it had crushed.
- **Habakkuk** wrestles honestly with God over injustice, and learns that "the righteous will live by his faith."
- **Zephaniah** warns of the Day of the LORD, yet ends with God who "will rejoice over you with singing."
- **Haggai** stirs the returned exiles to rebuild the temple and trust God's presence.
- **Zechariah** fills the rebuilding with visions of a coming humble king and a fountain opened to cleanse from sin.
- **Malachi** closes the Old Testament, calling a half-hearted people back and promising the "sun of righteousness" — and a messenger to prepare the way.

Read together, the Twelve trace the whole prophetic arc in miniature: God's people fail, judgment comes, mercy persists, and a King is promised. Their brevity is no measure of their depth.`,
    },
    {
      id: 'justice-mercy-and-worship',
      heading: 'Justice, mercy, and the worship God wants',
      body: `If there is one drum the prophets beat without ceasing, it is this: God cares how we treat the vulnerable, and no amount of religious activity can paper over injustice. *Mishpat* (justice) and *tzedakah* (righteousness) are not side issues to the prophets; they lie close to the center of what it means to know God at all.

The prophets are scathing about worship that coexists with oppression. Through Amos, God says he *hates* the festivals and will not listen to the songs of those who trample the needy — and then comes the famous cry: "let justice roll on like rivers, and righteousness like a mighty stream" (5:24). Through Hosea, God says, "I desire mercy, and not sacrifice" (6:6). Through Isaiah, he calls a crowded religious calendar a weariness to him while hands are full of blood, and tells the people instead to "seek justice, relieve the oppressed, defend the fatherless, plead for the widow" (1:17). Religion that soothes the comfortable while ignoring the suffering is, to the prophets, an offense.

Micah gathers it all into one unforgettable line. Asked what the LORD requires, he answers not with a list of rituals but with a way of life: "to act justly, to love mercy, and to walk humbly with your God" (6:8). This is not a rejection of worship but its purification — God wants hearts and hands that match the songs. The prophetic vision of justice still indicts and inspires; it is the taproot of every movement that has cared for the poor, freed the captive, and insisted that every person matters to God.`,
    },
    {
      id: 'judgment-and-hope',
      heading: 'Why judgment is never the last word',
      body: `To modern ears the prophets can sound harsh — so much fire, so many warnings. But their judgment is the severity of a love that refuses to be indifferent. The God of the prophets is not a tyrant venting rage; he is a covenant partner, a husband, a father, grieved by what sin is doing to people he loves and to the world he made. His anger is real because his love is real.

That is why, in book after book, judgment is followed by hope as surely as night by morning. The pattern is almost musical: the storm breaks — and then, on the far side, a remnant returns, the land is healed, the heart is made new, the King comes. Ezekiel watches the glory of God depart the doomed temple, and then sees it return; he stands in a valley of death and watches it fill with life. Hosea's marriage ends not in divorce but in redemption. Even the "Day of the LORD," that fearful image of reckoning, is also the day of rescue for all who long for God.

The prophets also leave us with a vocation. Ezekiel is appointed a *watchman* (chapter 33): one who scans the horizon and sounds the warning so that people may turn and live. That, finally, is what the prophets are — watchmen who love the city enough to tell the truth, and who keep pointing past the darkness to the dawn they were promised. The deepest resolution of judgment and hope comes at the cross, where the Servant is "pierced for our transgressions" so that "by his wounds we are healed" — the one place where the justice that sin demands and the mercy God delights to give meet, and embrace.`,
    },
  ],

  people: [
    {
      slug: 'isaiah',
      name: 'Isaiah',
      oneLine: `The towering prophet of Jerusalem who saw the holy God — and the coming Servant.`,
      bio: `Isaiah son of Amoz prophesied in Judah in the eighth century BC, through the reigns of four kings and the long shadow of Assyrian power. His ministry was born in a vision of the LORD "high and lifted up," the seraphim crying "Holy, holy, holy" — a glimpse of God's holiness that marked everything he would ever say. Cleansed by a coal from the altar, he answered, "Here I am. Send me!"

More than any other prophet, Isaiah saw the shape of salvation to come: a virgin's son called Immanuel, a child who is "Mighty God," a suffering Servant pierced for our transgressions, and finally a new heavens and a new earth. The New Testament quotes him so often, and so directly of Christ, that the early church called Isaiah "the fifth Gospel."`,
      keyRefs: ['Isaiah 6:1–8', 'Isaiah 9:6', 'Isaiah 53'],
      appearsInActs: [10],
    },
    {
      slug: 'jeremiah',
      name: 'Jeremiah',
      oneLine: `The "weeping prophet," called as a youth to preach through the fall of Jerusalem.`,
      bio: `Called as a young man around 627 BC — set apart, God said, before he was even born — Jeremiah was given perhaps the hardest assignment in Scripture: to warn Judah of certain judgment for some forty unheeded years, and then to live through it. He saw Jerusalem besieged, the temple burned, and his people dragged to Babylon, and he wept over it all.

Yet to this prophet of grief was given the brightest promise in the Old Testament: a *new covenant*, God's law written not on stone but on human hearts, with sins forgiven and forgotten. The promise he spoke in the ashes of a fallen city is the one Jesus would claim over a cup the night before he died.`,
      keyRefs: ['Jeremiah 1:4–10', 'Jeremiah 29:11', 'Jeremiah 31:31–34'],
      appearsInActs: [10],
    },
    {
      slug: 'ezekiel',
      name: 'Ezekiel',
      oneLine: `A priest-prophet among the exiles, given wild visions of glory, judgment, and resurrection.`,
      bio: `Ezekiel was a priest deported to Babylon in 597 BC, who became a prophet by a canal far from the temple he was trained to serve. His visions are among the most vivid in Scripture — a storm-borne throne of wheels and wings, the glory of God departing the doomed temple and, one day, returning; a valley of dry bones rattling to life; a river flowing from a renewed sanctuary to heal the world.

To exiles who felt as good as dead, Ezekiel preached resurrection: God would breathe his Spirit into them, take out their heart of stone and give a heart of flesh, and bring them home. His message holds together, as starkly as any in Scripture, the severity of God's judgment and the stubbornness of his hope.`,
      keyRefs: ['Ezekiel 1', 'Ezekiel 36:26', 'Ezekiel 37:1–14'],
      appearsInActs: [10],
    },
    {
      slug: 'daniel',
      name: 'Daniel',
      oneLine: `A faithful exile in a pagan court, given dreams of kingdoms and the coming Son of Man.`,
      bio: `Taken to Babylon as a youth around 605 BC, Daniel rose to serve at the highest levels of two empires while refusing to bow to either. His story models faith under pressure: his three friends emerge unburned from the furnace rather than worship a golden image, and Daniel himself survives a night among lions rather than stop praying to his God.

The second half of his book turns to visionary prophecy — successive empires rising and falling, and above them all "one like a son of man" coming with the clouds to receive an everlasting kingdom. That image became Jesus' most-used title for himself, and Daniel's confidence — that earthly powers are temporary and God's kingdom is forever — has steadied God's people ever since.`,
      keyRefs: ['Daniel 3', 'Daniel 6', 'Daniel 7:13–14'],
      appearsInActs: [10],
    },
    {
      slug: 'hosea',
      name: 'Hosea',
      oneLine: `The prophet whose heartbroken marriage became a living parable of God's faithful love.`,
      bio: `Hosea prophesied to the northern kingdom of Israel in its last decades before Assyria swept it away. God gave him a startling commission: to marry Gomer, a woman who would prove unfaithful, and to keep loving her and buying her back — so that Hosea's own anguish would picture God's heart toward a people who chased after other gods.

Through that broken, faithful marriage, Hosea reveals a God whose love refuses to quit. "When Israel was a child, then I loved him," God says, "and called my son out of Egypt." Judgment is real in Hosea, but it is always the wound of a lover, never the end of the story — for "I desire mercy, and not sacrifice."`,
      keyRefs: ['Hosea 1–3', 'Hosea 6:6', 'Hosea 11:1'],
      appearsInActs: [10],
    },
    {
      slug: 'amos',
      name: 'Amos',
      oneLine: `A shepherd turned prophet who thundered for justice against a comfortable, corrupt society.`,
      bio: `Amos was no professional prophet — a shepherd and tender of sycamore figs from Tekoa in Judah, called to go north to prosperous Israel and disturb its comfort. He confronted a society where the rich feasted while the poor were sold for the price of a pair of sandals, where worship was lavish and justice was nowhere to be found.

His message is one of the clearest statements of God's passion for the oppressed: God despises religious festivals that mask injustice and longs instead that "justice roll on like rivers, and righteousness like a mighty stream." Amos shows that to know God is inseparable from doing right by the vulnerable.`,
      keyRefs: ['Amos 5:21–24', 'Amos 7:14–15', 'Amos 8:4–6'],
      appearsInActs: [10],
    },
    {
      slug: 'micah',
      name: 'Micah',
      oneLine: `A country prophet who named both Bethlehem's coming ruler and the heart of true religion.`,
      bio: `A contemporary of Isaiah, Micah prophesied from the rural towns of Judah, speaking for ordinary people crushed by the powerful. He pronounced judgment on rulers who built Zion with bloodshed, yet his short book holds two of the most treasured verses in all the prophets.

In one, he foretells that out of little Bethlehem will come a ruler for Israel "whose goings out are from of old, from ancient times" — the verse the scribes would later quote to point the way to the newborn Christ. In the other, he distills all of true religion into a single line: to "act justly, to love mercy, and to walk humbly with your God."`,
      keyRefs: ['Micah 5:2', 'Micah 6:8', 'Micah 7:18–19'],
      appearsInActs: [10],
    },
    {
      slug: 'jonah',
      name: 'Jonah',
      oneLine: `The reluctant prophet who fled God's mercy — and resented it when it reached his enemies.`,
      bio: `Jonah is the prophet who ran. Sent to preach to Nineveh, the capital of brutal Assyria, he fled in the opposite direction — only to be hurled into the sea, swallowed by a great fish, and delivered back to dry land to obey. When at last he preached, the whole violent city repented, and God relented from the judgment Jonah had announced.

The twist is that Jonah is *angry* about it. He would rather see his enemies destroyed than forgiven, and the book ends with God's gentle question about whether he should not have compassion on a city of thousands who cannot tell their right hand from their left. Jonah's story is the Old Testament's great parable of God's mercy reaching beyond Israel — and of how reluctant we can be to share it.`,
      keyRefs: ['Jonah 1–2', 'Jonah 3', 'Jonah 4'],
      appearsInActs: [10],
    },
  ],

  themes: [
    {
      title: 'Return: the call to repentance',
      body: `The prophets' most basic word is a summons home: *teshuvah*, "turn back." Sin is pictured as wandering, adultery, exile of the heart — and God's call is never merely "stop," but "return to me." Judgment is real, yet the door stands open.`,
    },
    {
      title: 'Justice and righteousness',
      body: `*Mishpat* and *tzedakah* — justice and righteousness — are God's passion, not optional add-ons to worship. The prophets insist that religion without mercy offends God: "let justice roll on like rivers" (Amos 5:24), and "act justly, love mercy, and walk humbly with your God" (Micah 6:8).`,
    },
    {
      title: 'Judgment and hope, held together',
      body: `The prophets refuse to choose between God's holiness and God's love. They name sin and announce its consequences without flinching — and in the same breath promise restoration beyond it. Judgment is never God's last word; hope is.`,
    },
    {
      title: 'A new covenant and a new heart',
      body: `The old covenant, written on stone, was broken again and again. So God promises a new one: his law written on hearts, sins forgiven, a new heart and a new spirit placed within (Jeremiah 31; Ezekiel 36) — the promise fulfilled in Christ.`,
    },
    {
      title: 'The promised Messiah',
      body: `Across the prophets the hope of a coming One grows ever clearer: a virgin's son called God-with-us, a child who is Mighty God, a shepherd-king from Bethlehem, a Servant who suffers, a Son of Man on the clouds. Many portraits — and, the New Testament announces, one Person.`,
    },
    {
      title: 'The God of all nations',
      body: `God's heart was never for Israel alone. Jonah is sent to Israel's enemies; Isaiah sees the Servant given as "a light to the nations." The prophets insist that the God of Israel is the God of the whole earth, whose mercy can reach even Nineveh.`,
    },
  ],

  words: [
    {
      term: 'navi',
      language: 'Hebrew',
      gloss: '"prophet, spokesman"',
      detail:
        'The Hebrew word for prophet, likely "one who is called" and certainly "one who speaks for another." A prophet is God\'s *mouth* — not first a predictor, but a messenger who says what God is saying. Exodus 7:1 captures it: Aaron will be Moses\' "prophet," speaking his words to Pharaoh.',
    },
    {
      term: 'teshuvah',
      language: 'Hebrew',
      gloss: '"repentance, return"',
      detail:
        'From the verb *shuv*, "to turn back." Biblical repentance is less an emotion than a *turning* — a change of direction, away from sin and back toward God. The prophets\' constant plea is not merely "feel sorry" but "return to me."',
    },
    {
      term: 'mishpat & tzedakah',
      language: 'Hebrew',
      gloss: '"justice and righteousness"',
      detail:
        'A word-pair at the heart of prophetic preaching. *Mishpat* is justice — setting things right, especially for the poor, the widow, the orphan, and the stranger. *Tzedakah* is righteousness — right relationship lived out in faithfulness. Together they are what God "requires" (Micah 6:8), and worship without them rings hollow.',
    },
    {
      term: 'berith chadashah',
      language: 'Hebrew',
      gloss: '"the new covenant"',
      detail:
        'Jeremiah\'s phrase for the coming arrangement between God and his people (Jeremiah 31:31) — not written on stone but on the heart, with sins forgiven and forgotten. Jesus claims it at the Last Supper: "This cup is the new covenant in my blood" (Luke 22:20).',
    },
    {
      term: 'ruach',
      language: 'Hebrew',
      gloss: '"spirit, wind, breath"',
      detail:
        "The same word that hovered over the waters in Genesis 1 returns here with power. In Ezekiel's valley, *ruach* is breath, wind, and Spirit all at once, raising dead bones to life (Ezekiel 37). In Joel, God promises to pour out his *ruach* on all flesh (Joel 2:28) — a promise fulfilled at Pentecost.",
    },
    {
      term: 'Day of the LORD',
      language: 'Concept',
      gloss: '"the day of God\'s decisive coming"',
      detail:
        'A recurring prophetic image for the day when God breaks in to judge evil and to save his people. It is both *near* (looming historical judgments, like the fall of Jerusalem) and *far* (the final reckoning). Amos warns the complacent that it will be "darkness, and not light" — God\'s coming is good news only to those who long for him.',
    },
  ],

  christ: {
    summary: `For centuries the prophets sketched the coming One from many angles, and the portraits can seem to pull against each other: a child born in a backwater town, yet whose "goings out are from ancient times"; a king on David's throne forever, yet a Servant despised and pierced; one led like a lamb to the slaughter, yet one who comes on the clouds to reign. Israel was left holding two sets of expectations — a suffering servant and a conquering king — and could not see how both could be true. The New Testament announces the astonishing answer: they are one Person. In Jesus the Servant and the King, the cross and the clouds, the manger and the throne all meet. The prophets were watchmen straining toward a dawn they could not yet name — and his name is Jesus.`,
    links: [
      {
        ref: 'Matthew 1:22–23',
        note: `Matthew opens the gospel by quoting Isaiah 7:14 — the virgin's son is named Immanuel, "God with us." The sign once given to a frightened king finds its fullness in the birth of Christ.`,
      },
      {
        ref: 'Luke 2:11',
        note: `The child Isaiah foresaw (9:6) is born in David's city: "a Savior, who is Christ the Lord." The government promised to rest on his shoulders begins, astonishingly, in a manger.`,
      },
      {
        ref: 'Matthew 2:4–6',
        note: `When Herod asks where the Messiah is to be born, the scribes answer straight from Micah 5:2 — Bethlehem. The prophet's pinpoint, spoken seven centuries before, marks the place of Jesus' birth.`,
      },
      {
        ref: '1 Peter 2:24',
        note: `Peter applies Isaiah 53 directly to the cross: Christ "bore our sins in his body on the tree... by whose stripes you were healed." The Servant's wounds are Jesus' wounds.`,
      },
      {
        ref: 'Acts 8:32–35',
        note: `An Ethiopian official reads Isaiah 53 — "led as a sheep to the slaughter" — and asks who it means. Philip, "beginning from this Scripture," tells him the good news of Jesus.`,
      },
      {
        ref: 'Luke 22:20',
        note: `At the Last Supper Jesus lifts the cup: "This cup is the new covenant in my blood." Jeremiah's promise (31:31) is signed and sealed in the blood of Christ.`,
      },
      {
        ref: 'Mark 14:62',
        note: `On trial for his life, Jesus answers the high priest by claiming Daniel 7: "You will see the Son of Man... coming with the clouds." His favorite title for himself is a claim to everlasting dominion.`,
      },
      {
        ref: 'Acts 2:16–17',
        note: `At Pentecost, Peter explains the outpoured Spirit by quoting Joel: "I will pour out my Spirit on all flesh." The age the prophets longed for has begun.`,
      },
    ],
  },

  memoryVerses: [
    {
      ref: 'Isaiah 9:6',
      text: 'For to us a child is born. To us a son is given; and the government will be on his shoulders. His name will be called Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace.',
      translation: 'WEB',
    },
    {
      ref: 'Isaiah 53:5',
      text: 'But he was pierced for our transgressions. He was crushed for our iniquities. The punishment that brought our peace was on him; and by his wounds we are healed.',
      translation: 'WEB',
    },
    {
      ref: 'Isaiah 53:6',
      text: 'All we like sheep have gone astray. Everyone has turned to his own way; and Yahweh has laid on him the iniquity of us all.',
      translation: 'WEB',
    },
    {
      ref: 'Jeremiah 29:11',
      text: '"For I know the thoughts that I think toward you," says Yahweh, "thoughts of peace, and not of evil, to give you hope and a future."',
      translation: 'WEB',
    },
    {
      ref: 'Micah 6:8',
      text: 'He has shown you, O man, what is good. What does Yahweh require of you, but to act justly, to love mercy, and to walk humbly with your God?',
      translation: 'WEB',
    },
  ],

  reflection: {
    meditation: `Be still for a moment, and let your breathing slow.

The God of the prophets is not distant or indifferent. He is the One who knew you before he formed you, who keeps watch like a father at the window, who calls — again and again — not "go away," but "return to me."

Whatever you have wandered from, however far the road has carried you, hear the oldest invitation in the prophets: come home. You are not too late. His compassions are new every morning.

And hear, too, the deepest word they were given to speak: *by his wounds we are healed*. The wound was his; the healing is yours. Rest in that a little while.

Breathe in. Breathe out. You are sought. You are welcomed.`,
    prompts: [
      `The prophets call wandering people to *return*. Is there a place in your life where you sense that quiet invitation home?`,
      `Micah says God requires justice, mercy, and humility. Which of the three is hardest for you right now — and what would one small step toward it look like?`,
      `Where do you most need to hear that *judgment is not God's last word* — that there is hope on the far side of what feels like ruin?`,
      `If "by his wounds we are healed," what would it mean to bring your deepest wound to him today, rather than carry it alone?`,
    ],
  },

  questions: [
    {
      q: `How does biblical prophecy actually work — is it mostly predicting the future?`,
      a: `Less than people often assume. The great majority of prophecy is *forth-telling* — speaking God's word into the present — rather than *fore-telling* the distant future. The prophets are mainly covenant preachers, confronting injustice and idolatry and calling for repentance. When they do speak of what is coming, it is usually near-term and *moral*: "if you keep on this road, judgment is near; if you return, mercy waits."

Their words also tend to work on more than one horizon at once. A promise about a return from exile can also reach toward a greater, final restoration. This is the prophetic "already / not yet": a word can find a real fulfillment in its own time and a fuller fulfillment later. Reading the prophets well means hearing both the urgent call to *their* generation and the longer arc that stretches toward Christ and beyond.`,
    },
    {
      q: `Were these texts really about Jesus, or did Christians read him back into them?`,
      a: `This deserves an honest answer. Jewish interpreters have long read many of these passages in other ways — the "servant" of Isaiah 53, for instance, as the suffering nation of Israel; "Immanuel" as a child born in Isaiah's own day. These are serious readings with deep roots, and Christians can learn from them rather than brush them aside.

Christians believe these texts genuinely point to Jesus, for two reasons. First, the prophets themselves often outrun their immediate setting — a child named "Mighty God," a ruler whose "goings out are from ancient times," a Servant who dies for the sins of others and yet "sees his offspring." Second, Jesus and the apostles read them this way, finding in his life an uncanny convergence of portraits no one had managed to hold together. Many Christians speak here of *dual fulfillment*: a prophecy can have a partial, nearer fulfillment and a deeper one in Christ. The honest claim is not that the meaning was obvious all along, but that, looking back from Jesus, the pieces fit with startling clarity.`,
    },
    {
      q: `Did one person write the book of Isaiah, or several?`,
      a: `This is a long-standing and respectful debate. The traditional view is that Isaiah of Jerusalem, in the eighth century BC, wrote the whole book — including the later chapters that name Cyrus and speak as if from exile, which on this view is genuine predictive prophecy.

Many scholars, noticing the shift in setting and style after chapter 40, propose that the book reached its final form through Isaiah's disciples over time — sometimes called "Second Isaiah" (chapters 40–55) and "Third Isaiah" (56–66). On this reading the book is a unified, Spirit-shaped tradition rather than the work of a single sitting.

Sincere Christians hold both views in good conscience. What both affirm is that the book is one inspired whole — the New Testament simply calls it all "Isaiah" — and that its vision of the holy God and his suffering Servant is the Word of God, however it came to be written.`,
    },
    {
      q: `How should I read the strange imagery in Daniel and Ezekiel — wheels, beasts, and visions?`,
      a: `Much of this material belongs to a genre called *apocalyptic* — highly symbolic, vision-driven literature that pulls back the curtain on the unseen. Its beasts, horns, and cosmic upheavals are not meant to be read like a newspaper; they are a picture-language that often veiled its political meaning from hostile powers while comforting God's people under pressure.

The key is to ask what the images *meant* to their first hearers. Daniel's four beasts are interpreted within the book itself as a succession of empires; the point is that earthly kingdoms rise and fall while God's kingdom endures. Read this way, apocalyptic is less a puzzle to decode into modern headlines than a sustained assurance: however monstrous the powers of the moment, the Ancient of Days is on the throne, and the kingdom belongs to the Son of Man. Faithful Christians differ on the finer details — and can hold those differences lightly while sharing that central hope.`,
    },
    {
      q: `How can the same God be so full of judgment and so full of love?`,
      a: `The prophets would resist the idea that these are opposites. Their God judges *because* he loves. A parent indifferent to a child's self-destruction is not loving but absent; it is precisely because God is committed to his people and his good world that he cannot shrug at the violence, injustice, and idolatry tearing them apart. His anger is the heat of wounded love, not the cruelty of a tyrant.

And crucially, judgment is never where the prophets leave us. Again and again the pattern is the same: the storm of judgment breaks, and on the far side stands restoration — a returning remnant, a healed land, a new heart, a coming King. The cross is where this reaches its depth: there the judgment that sin deserves and the love that will not let us go meet in one place, as the Servant is "pierced for our transgressions" so that "by his wounds we are healed." In Jesus, justice and mercy are not at war. They embrace.`,
    },
  ],

  glossaryRefs: [
    'navi',
    'teshuvah',
    'mishpat-tzedakah',
    'berith-chadashah',
    'ruach',
    'day-of-the-lord',
  ],
};

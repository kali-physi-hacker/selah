import type { ActContent } from '../types';

/**
 * ACT 4 — EXODUS & DELIVERANCE (Exodus)
 * The great rescue: God hears, remembers, and comes down to save —
 * then comes down again to dwell. Matches the Act 1 depth/tone benchmark.
 */
export const exodus: ActContent = {
  number: 4,
  slug: 'exodus',
  title: 'Exodus & Deliverance',
  movement: 'redemption',
  books: 'Exodus',
  era: 'the great deliverance',
  accent: '#D85A30',
  icon: 'flame',
  teaser: 'God hears, God remembers, God comes down to rescue.',

  featuredVerse: {
    ref: 'Exodus 3:14',
    translation: 'WEB',
    text: `God said to Moses, "I AM WHO I AM," and he said, "You shall tell the children of Israel this: 'I AM has sent me to you.'"`,
  },

  overview: `Exodus opens centuries after Genesis closes. The family of seventy that once came down to Egypt has become a teeming nation — and a nation enslaved. The promises God made to Abraham seem buried under brick-dust and the lash. Then, quietly, the book tells us the hinge on which everything turns: *God heard their groaning, and God remembered his covenant.* What follows is the Old Testament's defining act of salvation — the story Israel would retell at every Passover table and sing about forever — of how the God who makes promises comes down to keep them, rescuing a people who could never rescue themselves.

But Exodus is far more than an escape story. Once the people are free, a deeper question opens: free *for what*? The second half of the book answers. They are freed to belong to God. At a mountain wrapped in fire he binds himself to them in covenant, gives them his law as the shape of a rescued life, and then does the most astonishing thing of all — he moves in. The book that begins in the brick-pits of Egypt ends with the glory of God filling a tent pitched in the middle of the camp. The goal of redemption is not merely escape; it is *presence*.

Two great words echo through these chapters. The first is a name — *I AM* — spoken from a burning bush: the God who simply *is*, faithful and free, bound to no other power and dependent on nothing. The second is a refrain of purpose that rings out again and again: *"that you may know that I am Yahweh."* The plagues, the sea, the bread from heaven, the law, the tabernacle — all of it is so that a people, and a watching world, might come to *know* the living God. And threaded through everything is a lamb, whose blood on a doorframe spares a household on the night of judgment — quietly foreshadowing a greater Passover still to come.`,

  context: `Exodus is the second book of the Torah/Pentateuch, traditionally ascribed to Moses and read as the direct sequel to Genesis. Its Hebrew title, *Shemot* ("Names"), comes from its opening line; the English name borrows the Greek *Exodos*, "the going out." In genre it weaves together several threads — narrative, law, and liturgy — into a single sustained drama, falling naturally into three movements: **rescue** from Egypt (chapters 1–18), **covenant** at Sinai (19–24), and **dwelling**, the building of the tabernacle so that God can live among his people (25–40). The setting moves from the Nile delta of Egypt, through the Red Sea, to the wilderness of Sinai.

A word on history, fairly stated. Scholars debate *when* the exodus occurred, and two main proposals are held by faithful readers. The **early date** (around 1446 BC, in Egypt's 18th Dynasty) takes its bearings from 1 Kings 6:1, which counts 480 years from the exodus to Solomon's temple. The **late date** (around 1260 BC, under Rameses II of the 19th Dynasty) appeals to the store-cities "Pithom and Rameses" named in Exodus 1:11 and to the emergence of Israel in Canaan reflected in later Egyptian records. On *historicity* itself, views range widely — from those who read the account as substantially historical, to those who find little external corroboration and see it as theologically shaped memory; many hold a middle position, affirming a genuine historical core retold for worship. What unites Christians across these debates is the conviction the book itself presses: that the God of Abraham really acted, in real history, to set a real people free — and that the exodus is the paradigm of every rescue God works, all the way to the cross.`,

  timeline: [
    {
      ref: 'Exodus 1',
      title: 'Israel enslaved and multiplying',
      detail:
        'Abraham\'s descendants have grown into a great people. A new Pharaoh "who didn\'t know Joseph" fears them, enslaves them with brutal labor, and finally commands that every Hebrew baby boy be drowned in the Nile.',
    },
    {
      ref: 'Exodus 2:1–10',
      title: 'Moses born and drawn from the Nile',
      detail:
        'A Levite mother hides her son, then sets him afloat in a basket of reeds. Pharaoh\'s own daughter finds him, takes pity, and raises him in the palace, naming him Moses — "drawn out" of the water.',
    },
    {
      ref: 'Exodus 2:11–22',
      title: 'Moses flees to Midian',
      detail:
        'Grown, Moses kills an Egyptian beating a Hebrew and flees for his life into the desert. There he is welcomed by Jethro (Reuel), marries his daughter Zipporah, and becomes a shepherd — a prince turned exile.',
    },
    {
      ref: 'Exodus 3–4',
      title: 'The burning bush and the divine name',
      detail:
        'A bush burns but is not consumed. God calls Moses to deliver his people and reveals his name, "I AM WHO I AM." Moses protests his inadequacy five times; God answers each fear and gives Aaron as his spokesman.',
    },
    {
      ref: 'Exodus 7–11',
      title: 'The ten plagues',
      detail:
        'Pharaoh refuses to let the people go, and Egypt is struck with ten escalating signs — from the Nile turned to blood to the death of the firstborn — a contest in which the gods of Egypt are exposed and Yahweh is shown to be Lord.',
    },
    {
      ref: 'Exodus 12',
      title: 'The Passover and the exodus',
      detail:
        'Each household kills a lamb and marks its doorposts with blood; where the blood is seen, judgment "passes over." That night Pharaoh relents, and Israel walks out of Egypt — a slave people made free in a single night.',
    },
    {
      ref: 'Exodus 14',
      title: 'The parting of the Red Sea',
      detail:
        'Trapped between Pharaoh\'s chariots and the sea, the people panic. "Yahweh will fight for you, and you shall be still." A wind divides the waters; Israel crosses on dry ground, and the sea closes over the army behind them.',
    },
    {
      ref: 'Exodus 16',
      title: 'Manna in the wilderness',
      detail:
        'Hungry and grumbling, the people are fed with bread from heaven — manna ("what is it?") gathered fresh each morning, with a double portion before the Sabbath. God teaches a freed people to trust him one day at a time.',
    },
    {
      ref: 'Exodus 19–20',
      title: 'Sinai and the Ten Commandments',
      detail:
        'At a mountain of fire, smoke, and trumpet-blast, God meets his people. He speaks the Ten Commandments and calls Israel to be "a kingdom of priests and a holy nation" — his treasured possession among all peoples.',
    },
    {
      ref: 'Exodus 24',
      title: 'The covenant ratified in blood',
      detail:
        'The people pledge, "All that Yahweh has spoken we will do." Moses sprinkles the blood of the covenant on the altar and the people, and the elders ascend the mountain to eat and drink in the presence of God.',
    },
    {
      ref: 'Exodus 25–31',
      title: 'Instructions for the tabernacle',
      detail:
        'God gives detailed plans for a portable sanctuary — ark, table, lampstand, curtains, priesthood — built around a single purpose: "Let them make me a sanctuary, that I may dwell among them."',
    },
    {
      ref: 'Exodus 32',
      title: 'The golden calf',
      detail:
        'While Moses is still on the mountain, the people make and worship a golden calf. Covenant is broken almost before the ink is dry; Moses pleads for the nation, and judgment is tempered by mercy.',
    },
    {
      ref: 'Exodus 34',
      title: 'The covenant renewed; glory and name proclaimed',
      detail:
        'God restores the broken covenant and passes before Moses, proclaiming his name and character: "merciful and gracious, slow to anger, and abundant in loving kindness." Moses comes down with his face shining.',
    },
    {
      ref: 'Exodus 40',
      title: 'The glory of Yahweh fills the tabernacle',
      detail:
        'The tabernacle is finished exactly as commanded. The cloud covers it and the glory of Yahweh fills it — God, at last, dwelling in the midst of his people, leading them by cloud and fire on every stage of their journey.',
    },
  ],

  deepDive: [
    {
      id: 'god-hears',
      heading: 'The cry from Egypt and the God who remembers',
      body: `Exodus begins in the dark. The bright promises of Genesis — a people as numerous as the stars, a blessing for all nations — have run aground in a foreign land where Israel is now a slave-force, worked "with hard labor" and marked for destruction. Pharaoh's program escalates from oppression to attempted genocide: every Hebrew son is to be thrown into the Nile (1:22). The river meant to give Egypt life is turned into an instrument of death.

Against this vast machinery of empire, the book's first act of resistance is almost comically small: women. Hebrew midwives quietly defy the king and "didn't do as the king of Egypt commanded them" (1:17). A mother hides her baby, then entrusts him to the very river meant to drown him, sealing his little basket — the same Hebrew word, *tevah*, used for Noah's ark — and floating him to safety. Pharaoh's own daughter pulls him out and, in a stroke of holy irony, pays his Hebrew mother to nurse him. The empire that fears Hebrew sons ends up raising one in its palace.

Then comes the hinge of the whole book, four verbs that change everything. As the years grind on and the people cry out, *"God heard their groaning, and God remembered his covenant with Abraham, with Isaac, and with Jacob. God saw the children of Israel, and God was concerned about them"* (2:24–25). He heard. He remembered. He saw. He knew. Nothing has visibly changed yet — no plague, no deliverer commissioned — but the decisive turn has already happened in the heart of God. The teaser of this whole act lives in these verses: *God hears, God remembers, God comes down.* Salvation begins not with our striving but with God's attention. Before Israel can do anything, God has already bent toward their cry.`,
    },
    {
      id: 'burning-bush',
      heading: 'The burning bush and the name "I AM"',
      body: `On the far side of the wilderness, an eighty-year-old shepherd — once a prince, now an exile tending another man's flock — turns aside to look at a strange sight: a bush on fire that is not consumed. It is the perfect image of the God about to speak: blazing with life, yet self-sustaining, burning without burning out. "Take off your sandals," God says, "for the place where you are standing is holy ground" (3:5). The wilderness has become a sanctuary.

Then God tells Moses why he has come down: *"I have surely seen the affliction of my people... I have heard their cry... I know their sorrows. I have come down to deliver them"* (3:7–8). The God of heaven is not distant or detached. He *comes down*. And he intends to do it through Moses — at which Moses begins a remarkable series of objections (*Who am I? Who are you? What if they don't believe me? I'm not eloquent. Please send someone else*), to each of which God patiently responds, finally giving Aaron as his mouthpiece (4:14–16). The pattern is worth noticing: God's call rarely waits for our confidence; it comes to the reluctant and the unqualified, and supplies what they lack.

At the center of the encounter is the question of the **name**. When Moses asks what to call the God who is sending him, the answer is one of the most profound sentences in all Scripture: *"I AM WHO I AM... You shall tell the children of Israel this: 'I AM has sent me to you'"* (3:14). From the Hebrew verb "to be" (*ehyeh*, "I am" or "I will be") comes the sacred name **YHWH** — Yahweh, "the LORD." It declares a God who is utterly self-existent, dependent on nothing, defined by no other; a God who simply, eternally *is*. And it is not a cold metaphysical riddle but a covenant promise: the One who *is* will *be* with them — "I will be with you" (3:12). His very name is faithfulness. Centuries later, a teacher in Galilee would say, "Before Abraham came into existence, I AM" (John 8:58), and his hearers would reach for stones — because they knew exactly which name he had just taken on his lips.`,
    },
    {
      id: 'plagues',
      heading: 'The ten plagues: the gods of Egypt on trial',
      body: `Pharaoh's first response sets the terms of the conflict: *"Who is Yahweh, that I should listen to his voice...? I don't know Yahweh"* (5:2). The plagues are God's answer to that sneer. They are not random cruelty or mere displays of raw power; they are a courtroom. *"Against all the gods of Egypt I will execute judgments,"* God says (12:12), and Egypt's pantheon is methodically dismantled — the Nile-god turned to blood, the frog-goddess swarming the land, the sun darkened at noon, and finally Pharaoh himself, worshiped as a god, brought to his knees over his own firstborn son. One by one the powers Egypt trusted are exposed as empty.

A refrain pulses through the whole contest: *"that you may know that I am Yahweh."* The Egyptians will know it (7:5); Pharaoh will know it (8:22); Israel will know it; the watching earth will know it (9:16). The plagues are revelation as much as judgment — a sustained unveiling of the one true God before a world of idols. And mercy runs alongside the severity: each plague is *announced* in advance, leaving room for repentance, and as the signs intensify, the land of Goshen where Israel lives is set apart and spared (8:22–23), so that even in judgment a line of grace is drawn.

The hardest thread to hold is **Pharaoh's heart**. The text speaks in two ways: at times *Pharaoh* hardens his own heart (8:15, 8:32, 9:34), and at times *God* hardens it (9:12, 10:20, 14:8) — exactly as God foretold (4:21). Read whole, the account refuses a simple answer. Pharaoh is no helpless puppet; he repeatedly chooses defiance with his eyes open, and God, in righteous judgment, confirms and gives him over to the very hardness he keeps choosing. Divine sovereignty and human responsibility are held together, not pried apart — a tension the New Testament will revisit (Romans 9:14–18) without ever excusing the tyrant or accusing the Judge.`,
    },
    {
      id: 'passover',
      heading: 'Passover: the blood of the lamb',
      body: `The tenth and final blow falls at midnight, and on the eve of it God gives Israel something no other plague required: a **ritual**, a meal, a way of being spared. Each household is to take a year-old lamb without blemish, kill it at twilight, and paint its blood on the doorframe. *"The blood shall be a sign for you... when I see the blood, I will pass over you, and no plague will be on you to destroy you"* (12:13). Inside, they eat the roasted lamb with unleavened bread and bitter herbs, dressed to travel — a feast eaten ready to leave.

Notice how salvation comes. It is not that Israel is innocent and Egypt guilty; the judgment of that night threatens *every* firstborn. What separates the spared from the struck is not merit but **blood** — a life given in the place of the household it shelters. This is the Bible's first full picture of *substitution*: an innocent life laid down so that judgment passes over those who would otherwise face it. The doorway marked with blood becomes the boundary between death and life.

God commands that the night be remembered forever: *"This day shall be to you for a memorial, and you shall keep it as a feast to Yahweh"* (12:14). For more than three thousand years, Jewish families have kept that feast, and on one particular Passover, in an upper room in Jerusalem, a Teacher lifted the bread and the cup and said, *this is my body, this is my blood* — declaring himself the meaning toward which every Passover lamb had been pointing. "For indeed Christ, our Passover, has been sacrificed in our place" (1 Corinthians 5:7). One small, easily missed instruction seals the connection: not a bone of the lamb was to be broken (12:46) — the very thing John notices, centuries later, of the body on the cross (John 19:36).`,
    },
    {
      id: 'red-sea',
      heading: 'Through the sea, into the wilderness',
      body: `Freedom is only hours old when it seems about to collapse. Pharaoh changes his mind and gives chase, and Israel finds itself pinned between his chariots and an impassable sea. The people, so recently singing, turn on Moses in terror. His answer is the heart of the act: *"Don't be afraid. Stand still, and see the salvation of Yahweh... Yahweh will fight for you, and you shall be still"* (14:13–14). Salvation here is something done *for* them, not *by* them; their part is to stop fleeing and watch God work.

A great wind blows all night, the waters divide, and Israel walks through the sea on dry ground, "the waters being a wall to them on their right hand and on their left" (14:22). When the army follows, the sea returns. On the far shore a freed people sing — the Song of the Sea, one of the oldest poems in the Bible — *"Who is like you, Yahweh, among the gods? Who is like you, glorious in holiness...?"* (15:11). Miriam takes a tambourine, and the women answer in dance. The God who divided the chaos-waters at creation has divided the sea, and a slave people is born into freedom through the water. The apostle Paul will see in that crossing a picture of baptism — passing through the waters out of bondage into new life (1 Corinthians 10:1–2).

But the wilderness on the far side is not yet the Promised Land, and a freed people must now learn to *live* free. Their first lessons are about trust. Hungry, they grumble, and God rains down **manna** — "bread from heaven" — to be gathered fresh each morning, just enough for the day, with a double portion before the Sabbath and worms in any that is hoarded (16:4, 16:20). Thirsty, they are given water from a struck rock at Horeb (17:6). The lessons are deliberate: a people who once depended on Egypt's storehouses must learn to depend, day by day, on the open hand of God. Jesus would later take up the very image — *"I am the bread of life... the bread which comes down out of heaven"* (John 6:48–51) — declaring himself the true and lasting manna for which the wilderness bread was only a foretaste.`,
    },
    {
      id: 'sinai',
      heading: 'Sinai: the law as covenant gift',
      body: `Three months out of Egypt, Israel arrives at the mountain of God, and the tone of the book changes. Before God gives a single command, he reminds them what he has already *done*: *"You have seen what I did to the Egyptians, and how I bore you on eagles' wings, and brought you to myself"* (19:4). This is the indispensable key to reading the law rightly. **Grace comes first.** God does not give the commandments so that Israel might earn rescue; he has already rescued them. The law is not the *ladder* by which slaves climb to freedom — it is the *shape* of a life for a people already set free. Even the Ten Commandments open this way: "I am Yahweh your God, who brought you out of the land of Egypt" (20:2) — redemption is stated before a single "you shall."

At Sinai God offers Israel a stunning vocation: to be his "treasured possession," "a kingdom of priests and a holy nation" (19:5–6) — a people who would mediate the knowledge of God to the whole world. Then, amid thunder, fire, smoke, and the blast of a trumpet, he speaks the **Ten Commandments** (20:1–17): the first four reorienting Israel toward God (no other gods, no idols, his name honored, his rest kept), the last six reordering life with neighbor (honor parents, protect life, marriage, property, truth, and the heart's desires). They are less a list of restrictions than a portrait of love — what it looks like when a community truly trusts God and treats one another as image-bearers.

The covenant is then **sealed in blood**. Moses reads the words; the people answer, "All that Yahweh has spoken we will do" (24:7); and he takes the blood of sacrifice and sprinkles half on the altar and half on the people, declaring, "Behold, the blood of the covenant, which Yahweh has made with you" (24:8). A bond is forged — God and people bound together by blood. Then, astonishingly, the elders climb the mountain and *eat and drink* in God's presence and live (24:9–11). At Jesus' last supper those exact words would return — "this is my blood of the new covenant" (Matthew 26:28) — as the meal at the mountain gave way to a deeper covenant, sealed not in the blood of bulls but his own.`,
    },
    {
      id: 'golden-calf',
      heading: 'The golden calf and the name proclaimed',
      body: `What follows is one of the most sobering turns in Scripture. Moses is still on the mountain receiving the pattern of God's dwelling when, at the foot of it, the people grow restless and persuade Aaron to make them a god they can see. They melt their gold into a calf and cry, "These are your gods, Israel, which brought you up out of the land of Egypt!" (32:4). The covenant is shattered almost before the tablets are carved — the very generation that watched the sea split now bows to an idol of its own making. It is a brutally honest portrait of the human heart, which can witness wonders and still ache to trade the living God for something manageable.

What happens next reveals the heart of the *mediator*. Moses descends, breaks the tablets in grief, and then climbs back up to plead for the people with words of staggering love: *"Yet now, if you will, forgive their sin — and if not, please blot me out of your book which you have written"* (32:32). He offers his own name in their place. He stands in the breach between a holy God and a guilty people — and in doing so he prefigures the one perfect Mediator, the prophet greater than Moses, who would not merely *offer* to be blotted out but actually be cut off for the sins of his people.

Out of this crisis comes the book's clearest revelation of who God is. When Moses dares to ask, "Show me your glory," God answers by proclaiming not his appearance but his *character*. He passes by and declares his name: *"Yahweh, Yahweh, a merciful and gracious God, slow to anger, and abundant in loving kindness and truth, keeping loving kindness for thousands, forgiving iniquity and disobedience and sin; and who will by no means clear the guilty"* (34:6–7). This is the verse the rest of the Old Testament will quote more than any other when it wants to say who God is. At the very moment Israel deserves to be destroyed, God defines himself first by mercy — and yet not at the expense of justice. Both hold. The covenant is renewed, the tablets rewritten, and Moses comes down with his face shining from being near the glory, so radiant the people are afraid (34:29–30).`,
    },
    {
      id: 'tabernacle',
      heading: 'The tabernacle: God comes down to dwell',
      body: `It is easy to skim the last third of Exodus — chapter after chapter of acacia wood, gold rings, blue and purple yarn, the exact dimensions of a tent. But the sheer *weight* of detail is the point. After everything — slavery, plagues, sea, mountain, even the golden calf — God's deepest aim is disclosed in a single sentence: *"Let them make me a sanctuary, that I may dwell among them"* (25:8). The Hebrew word for the structure, *mishkan*, comes from a root meaning "to dwell." The whole exodus has been driving toward *this*: not just a people rescued *from* Egypt, but a people God can live *with*. Redemption's goal is residence.

The tabernacle is a portable Eden, a piece of heaven pitched in the desert. Its imagery deliberately echoes the garden — gold, gemstones, a guardian-cherubim woven into the curtains, a lampstand shaped like a flowering tree, an entrance facing east. What was lost when humanity was driven from God's presence in Act 2 begins, here, to be answered: a way is being made for God and humanity to be together again. Yet it remains a guarded, mediated nearness — veils, priests, sacrifices, and warnings — a presence both gloriously real and not yet fully open. The letter to the Hebrews will call it "a copy and shadow of the heavenly things" (Hebrews 8:5), pointing beyond itself.

The book ends where it has been heading all along. The work is finished "as Yahweh commanded Moses" — a refrain repeated like a heartbeat — and then heaven responds: *"the cloud covered the Tent of Meeting, and the glory of Yahweh filled the tabernacle"* (40:34). The God of the burning bush, the God of Sinai, takes up residence in the middle of the camp, and from then on leads them by cloud and fire on every stage of their journey (40:38). The book that opened with a people groaning under a tyrant ends with God himself dwelling among them. And the final word is not really an ending. Centuries later, John would reach for this very scene to describe the incarnation: *"The Word became flesh, and lived among us"* (John 1:14) — literally, *tabernacled* among us, the glory no longer veiled in cloth and gold but shining in a human face. Emmanuel. God with us.`,
    },
  ],

  people: [
    {
      slug: 'moses',
      name: 'Moses',
      oneLine: 'The reluctant deliverer — prophet, lawgiver, and mediator who met God face to face.',
      bio: `Moses is the towering human figure of Exodus and of the whole Torah. Born a Hebrew under a death sentence, drawn from the Nile and raised in Pharaoh's palace, he is at once an insider and an outsider — and after killing an Egyptian he flees to forty years of obscurity as a shepherd in Midian. It is there, at the burning bush, that the God of his ancestors calls him to the one task he feels least able to do. His repeated objections ("Who am I?", "I am not eloquent," "Please send someone else") make him an unlikely hero, which is precisely the point: the deliverance will plainly be God's work, accomplished through a weak and willing man.

Across the book Moses becomes prophet (speaking God's word to Pharaoh and to Israel), lawgiver (receiving the covenant at Sinai), and above all *mediator* — standing in the gap between a holy God and a sinful people, even offering to be blotted out of God's book in their place (32:32). Scripture remembers him as uniquely intimate with God, who "spoke to Moses face to face, as a man speaks to his friend" (33:11), and yet as profoundly humble. The New Testament holds him in the highest honor while pointing beyond him: Moses was "faithful in all God's house as a servant," but Christ is faithful "as a Son over his house" (Hebrews 3:5–6). Moses himself promised that God would one day raise up "a prophet like me" to whom the people must listen (Deuteronomy 18:15).`,
      keyRefs: ['Exodus 3:1–15', 'Exodus 14:13–31', 'Exodus 32:30–32', 'Exodus 34:29–35'],
      appearsInActs: [4, 5],
    },
    {
      slug: 'aaron',
      name: 'Aaron',
      oneLine: 'Moses\' brother and spokesman — Israel\'s first high priest.',
      bio: `Aaron is Moses' older brother, given by God to be his mouthpiece when Moses pleads that he cannot speak well (4:14–16). Through the confrontation with Pharaoh and the long wilderness journey he stands at Moses' side — at times literally holding up his hands. He is then set apart, with his sons, as Israel's first **high priest**, clothed in the sacred garments and charged to represent the people before God and to bless them in his name. In him the office of priesthood begins, which the New Testament will see fulfilled in a greater and permanent High Priest (Hebrews 4–5).

Aaron is also painfully human. In one of the book's darkest scenes, it is Aaron who yields to the people's pressure and fashions the golden calf, then offers a flimsy excuse for it (32:21–24). That he is forgiven and still serves as high priest is itself a quiet testimony to the mercy proclaimed in 34:6–7 — that God works through flawed people and does not abandon those who fail him.`,
      keyRefs: ['Exodus 4:14–16', 'Exodus 7:1–2', 'Exodus 28:1', 'Exodus 32:1–6'],
      appearsInActs: [4, 5],
    },
    {
      slug: 'miriam',
      name: 'Miriam',
      oneLine: 'Moses\' sister and Israel\'s first named prophetess, who led the song at the sea.',
      bio: `Miriam first appears as the watchful sister of the baby Moses, standing at a distance by the Nile and cleverly arranging for their own mother to nurse him (2:4–8) — a child whose courage helps preserve the deliverer. Years later she emerges as a leader in her own right: after the crossing of the Red Sea she is called "the prophetess," takes a tambourine in hand, and leads the women of Israel in song and dance, answering the men's Song of the Sea with her own refrain of praise (15:20–21).

She stands among the trio of siblings — Moses, Aaron, and Miriam — through whom God led Israel out of Egypt; the prophet Micah later names all three together as God's gift to the nation (Micah 6:4). Her song at the sea is one of Scripture's earliest and most joyful acts of worship, the natural response of a rescued people: when God saves, his people sing.`,
      keyRefs: ['Exodus 2:4–8', 'Exodus 15:20–21'],
      appearsInActs: [4, 5],
    },
    {
      slug: 'pharaoh',
      name: 'Pharaoh',
      oneLine: 'The god-king of Egypt whose hardened heart sets him against the living God.',
      bio: `Pharaoh (the title of Egypt's king, left unnamed in the text) is the great human antagonist of Exodus — and, more than a man, a picture of every proud power that sets itself against God. Worshiped as a god himself, he meets Moses' demand with contempt: "Who is Yahweh, that I should listen to his voice? I don't know Yahweh" (5:2). The plagues are, in large part, God's answer to that question, addressed as much to Pharaoh as to anyone.

His defining feature is his **hardened heart**. The narrative carefully alternates between Pharaoh hardening his own heart and God hardening it — refusing a simple reading. He is no mere victim; again and again he chooses defiance even after promising to relent, and God, in righteous judgment, gives him over to the obstinacy he keeps choosing. He stands as a sobering study in how power can resist mercy itself, clinging to control until it destroys him — and as the dark backdrop against which the freedom and kindness of God shine all the brighter.`,
      keyRefs: ['Exodus 5:1–2', 'Exodus 8:15', 'Exodus 9:12', 'Exodus 14:5–9'],
      appearsInActs: [4],
    },
    {
      slug: 'jethro',
      name: 'Jethro (Reuel)',
      oneLine: 'The priest of Midian who shelters Moses and offers him wise counsel.',
      bio: `Jethro, also called Reuel, is the priest of Midian who takes the fugitive Moses into his household, gives him his daughter Zipporah in marriage, and employs him as a shepherd through his long desert years (2:16–22). His tents become the place where Moses is formed for leadership and where God finally meets him at the burning bush, on the slopes of Horeb where Jethro's flocks grazed.

After the exodus, Jethro comes out to meet Moses in the wilderness, rejoices at all God has done, and worships Yahweh — a striking moment in which a non-Israelite blesses the God of Israel (18:9–12). He then gives Moses the famously practical counsel that the man is wearing himself out trying to judge every dispute alone, and that he should appoint capable, God-fearing leaders to share the load (18:13–26). In Jethro the book offers a quiet model of wisdom, hospitality, and the truth that God can speak through unexpected voices.`,
      keyRefs: ['Exodus 2:16–22', 'Exodus 3:1', 'Exodus 18:1–27'],
      appearsInActs: [4],
    },
    {
      slug: 'zipporah',
      name: 'Zipporah',
      oneLine: 'Moses\' wife, a daughter of Midian who shares his exile and his calling.',
      bio: `Zipporah is one of the seven daughters of Jethro, whom Moses meets at a well in Midian and later marries (2:16–21). She bears him two sons, Gershom and Eliezer, whose names memorialize Moses' years as "a foreigner in a foreign land." Through Moses' obscure decades of waiting, she is his companion in exile, sharing the ordinary life out of which God will call him.

She steps briefly but dramatically into the narrative on the journey back to Egypt, in the puzzling and ancient episode where, at a lodging place, she circumcises their son and so turns aside a deadly threat to Moses (4:24–26) — acting decisively at a moment her husband does not. Though she remains a minor figure in the text, she represents the wider world drawn into Israel's story, and a reminder that God's deliverer was sustained, in his hidden years, within an ordinary family.`,
      keyRefs: ['Exodus 2:21–22', 'Exodus 4:24–26', 'Exodus 18:2–6'],
      appearsInActs: [4],
    },
  ],

  themes: [
    {
      title: 'The God who hears and remembers',
      body: 'Salvation begins not with our striving but with God\'s attention. He hears the groaning, remembers his covenant, sees the affliction, and comes down. Before his people can act, God has already bent toward their cry.',
    },
    {
      title: 'Redemption from slavery',
      body: 'The exodus is the Old Testament\'s great picture of salvation: a people who cannot free themselves are rescued by the strong hand of God. He does not improve their bondage; he ends it — and the rescue becomes the pattern for every deliverance to come.',
    },
    {
      title: 'The name and character of God',
      body: 'God reveals his name, "I AM" — the self-existent, faithful One — and at Sinai unveils his heart: "merciful and gracious, slow to anger, abundant in loving kindness and truth." To know his name is to know he can be trusted.',
    },
    {
      title: 'Passover & substitution',
      body: 'On the night of judgment, a lamb dies and its blood marks the door, so that death passes over the household. Salvation comes not by merit but by a life given in our place — the Bible\'s first full picture of substitution, fulfilled in Christ our Passover.',
    },
    {
      title: 'Covenant & law as gift',
      body: 'God rescues first, then gives the law — not a ladder to earn freedom but the shape of a life already set free. The commandments are a portrait of love for God and neighbor, and the covenant is sealed in blood that binds God to his people.',
    },
    {
      title: 'God dwelling with his people',
      body: 'The exodus aims not merely at escape but at presence. "Let them make me a sanctuary, that I may dwell among them." The book ends with God\'s glory filling the tabernacle — the lost nearness of Eden beginning, at last, to be restored.',
    },
  ],

  words: [
    {
      term: 'YHWH',
      language: 'Hebrew',
      gloss: 'the divine name ("the LORD")',
      detail:
        'The personal name of God revealed at the bush, formed from the verb "to be" — the tetragrammaton, four Hebrew letters traditionally too holy to pronounce, read aloud as "Adonai" (Lord) and rendered "Yahweh" or "the LORD." It names a God who is self-existent and eternally faithful: the One who simply is.',
    },
    {
      term: 'ehyeh',
      language: 'Hebrew',
      gloss: '"I AM" / "I will be"',
      detail:
        'The word behind "I AM WHO I AM" (3:14). Its range — "I am," "I will be" — fuses being and faithfulness: God is utterly self-existent, and he will surely be present with his people. The name is both a declaration of who God is and a promise of what he will do.',
    },
    {
      term: 'pesach',
      language: 'Hebrew',
      gloss: '"Passover" / to pass over, spare',
      detail:
        'The name of the feast and the verb behind it: when God sees the blood on the doorframe, he will "pass over" that house and spare it from judgment (12:13). Pesach becomes Israel\'s defining festival of deliverance — and the lens through which the New Testament reads the cross.',
    },
    {
      term: 'mishkan',
      language: 'Hebrew',
      gloss: '"tabernacle / dwelling"',
      detail:
        'The portable sanctuary God commands Israel to build, from a root meaning "to dwell" (*shakan*). Its very name announces its purpose: a place where the holy God will dwell in the midst of his people. The same root lies behind the later Jewish term *Shekhinah* for God\'s dwelling presence.',
    },
    {
      term: 'kavod',
      language: 'Hebrew',
      gloss: '"glory / weight"',
      detail:
        'The "glory of Yahweh" that fills the tabernacle (40:34). Rooted in the idea of *weight* or heaviness, kavod is the visible, weighty manifestation of God\'s presence — often pictured as cloud and fire. It is the splendor John says we have seen in Christ, "the glory as of the one and only Son" (John 1:14).',
    },
    {
      term: 'ga\'al / go\'el',
      language: 'Hebrew',
      gloss: '"to redeem" / "redeemer"',
      detail:
        'God\'s own word for the exodus: "I will redeem you with an outstretched arm" (6:6). To *redeem* (*ga\'al*) is to buy back, to reclaim what is bound by a price; the *go\'el* is the kinsman-redeemer who pays it. The thread runs through Ruth and Job ("I know that my Redeemer lives") to Christ, who redeems not with silver but his blood.',
    },
  ],

  christ: {
    summary: `No book gives the New Testament more language for salvation than Exodus, because the gospel is, in a sense, a greater exodus. Christ is our Passover lamb, sacrificed so that judgment passes over us; by his blood we are redeemed — not from Egypt, but from sin and death. He leads his people through the waters, feeds them with the true bread from heaven, and gives the rest the wilderness generation never entered. He is the prophet greater than Moses and the mediator of a better covenant, sealed not in the blood of bulls but his own. And he is the meaning of the name itself: when Jesus says, "Before Abraham was, I AM," he takes on his lips the name spoken at the bush. The God who once came down to dwell in a tent of cloth and gold has come down to *tabernacle* among us in flesh — Emmanuel, God with us. Exodus is the shadow; Christ is the substance.`,
    links: [
      { ref: '1 Corinthians 5:7', note: '"Christ, our Passover, has been sacrificed in our place" — the lamb of Exodus 12 fulfilled.' },
      { ref: 'John 19:36', note: '"A bone of him will not be broken" — the cross fulfills the rule of the Passover lamb (Exodus 12:46).' },
      { ref: 'John 8:58', note: '"Before Abraham came into existence, I AM" — Jesus takes upon himself the name revealed at the bush.' },
      { ref: 'John 6:48–51', note: '"I am the bread of life... the bread which comes down out of heaven" — the true and lasting manna.' },
      { ref: 'Deuteronomy 18:15', note: 'Moses foretells "a prophet like me"; Christ is the prophet greater than Moses to whom we must listen.' },
      { ref: 'Acts 3:22–23', note: 'Peter declares that the prophet-like-Moses promise is fulfilled in the risen Jesus.' },
      { ref: 'John 1:14', note: '"The Word became flesh, and lived (tabernacled) among us" — the glory that filled the tent now dwells in a person.' },
    ],
  },

  memoryVerses: [
    {
      ref: 'Exodus 3:14',
      translation: 'WEB',
      text: `God said to Moses, "I AM WHO I AM," and he said, "You shall tell the children of Israel this: 'I AM has sent me to you.'"`,
    },
    {
      ref: 'Exodus 14:14',
      translation: 'WEB',
      text: 'Yahweh will fight for you, and you shall be still.',
    },
    {
      ref: 'Exodus 20:2–3',
      translation: 'WEB',
      text: 'I am Yahweh your God, who brought you out of the land of Egypt, out of the house of bondage. You shall have no other gods before me.',
    },
    {
      ref: 'Exodus 33:14',
      translation: 'WEB',
      text: `He said, "My presence will go with you, and I will give you rest."`,
    },
  ],

  reflection: {
    meditation: `Be still for a moment, and let your breathing slow.

Whatever holds you tonight — the weight you carry, the place you feel trapped, the cry you have not dared to pray aloud — hear this: the God of the burning bush is not far off and unmoved. He sees. He hears. He remembers. He comes down.

He knew your name before you knew his. He is the One who simply *is* — I AM — present in this very moment, faithful when you are weary, near when you feel most alone. You did not earn his rescue, and you cannot lose it; grace came first.

You do not have to fight your way free. Stand still. Breathe. Let the One who fights for you be your peace.`,
    prompts: [
      'Where in your life do you most need to hear God say, "I have seen; I have heard; I have come down"?',
      'What changes when you realize God rescued his people *before* he gave them any law — that grace always comes first?',
      'The exodus freed Israel not only *from* slavery but *for* worship and belonging. What are you being freed from — and what are you being freed for?',
      'Where are you striving to fight a battle that is really God\'s to fight, and what would it look like this week to "be still"?',
    ],
  },

  questions: [
    {
      q: 'Did the exodus really happen, and when?',
      a: `Faithful readers hold this in different ways, and it is worth holding charitably. On *timing*, two main proposals compete. The **early date** (around 1446 BC) follows 1 Kings 6:1, which counts 480 years from the exodus to Solomon's temple. The **late date** (around 1260 BC) points to the store-cities "Pithom and Rameses" in Exodus 1:11 and to later Egyptian evidence for Israel in Canaan, reading the 480 years as a symbolic number (twelve generations).

On *historicity*, views range from reading the account as substantially historical, to seeing it as a theologically shaped memory with a smaller historical core. Direct external evidence is sparse — though that is unsurprising for a slave people's escape, which no empire would inscribe on its monuments. What the church across all these positions affirms is the book's own claim: that the living God really acted, in real history, to set a real people free. For Israel and for the New Testament, the exodus is not merely a date to defend but the defining pattern of redemption itself.`,
    },
    {
      q: 'What does it mean that God "hardened Pharaoh\'s heart"?',
      a: `The text speaks deliberately in two directions. In several plagues *Pharaoh* hardens his own heart (8:15, 8:32, 9:34); in others *God* hardens it (9:12, 10:20, 14:8); and at the outset God foretells that he will (4:21). Read whole, the narrative resists both "Pharaoh was a helpless puppet" and "God merely watched."

Most readers across the traditions hold the two together: Pharaoh repeatedly and freely chooses defiance with his eyes open, and God, in righteous judgment, confirms and gives him over to the hardness he keeps choosing — much as Romans 1 describes God "giving over" those set on their own way. Christians do weigh the balance differently — Augustinian and Reformed readings stress God's sovereignty, while Wesleyan and Eastern Orthodox readings stress human freedom and God\'s respect for it — but none excuse the tyrant or impugn the Judge. Paul takes up the very case (Romans 9:14–18) precisely to insist that God remains both just and free.`,
    },
    {
      q: 'Were the ten plagues natural disasters or miracles?',
      a: `Some have proposed a natural chain reaction — a reddened, fouled Nile driving out the frogs, whose death breeds insects and disease, and so on down the sequence. Whether or not such a chain played a part, the text itself frames the plagues as *signs and wonders*: announced in advance, escalating in severity, discriminating (Goshen is spared), and starting and stopping at Moses' word. The wonder lies as much in the *timing and control* as in the events.

And crucially, the plagues are presented not merely as disasters but as **judgments on the gods of Egypt** (12:12) and revelation of the one true God — "that you may know that I am Yahweh." Whether God worked through natural means he sovereignly governs or by direct miracle, the theological point is the same: the God of Israel is Lord over the Nile, the sky, the land, and the so-called gods Egypt trusted. The question "natural or miraculous?" matters less than the question the plagues are designed to answer: "Who is Yahweh?"`,
    },
    {
      q: 'Why did the firstborn of Egypt have to die?',
      a: `This is the hardest moment in the book, and it should not be softened. A few things help hold it honestly. First, it is the *climactic* judgment after nine escalating warnings, each freely refused — not a sudden cruelty but the end of a long, willful hardening. Second, it falls on an empire that had itself been *murdering Hebrew infants* (1:22); the judgment answers a genocide already underway. Third, God had named Israel "my son, my firstborn" (4:22) — and a Pharaoh who would not release God's son faces the loss of his own.

But the deepest answer is the lamb. On that very night, mercy is offered through the *same* means to anyone who will take it: a household — Israelite or Egyptian — sheltered under the blood of the lamb is spared, and indeed "a mixed multitude" leaves Egypt with Israel (12:38). The judgment is real, and so is the open door of mercy beside it. The night of the firstborn ultimately points forward to another firstborn Son, freely given, so that the judgment we deserve might pass over us. The God who spares at terrible cost is the God who will one day not spare himself.`,
    },
    {
      q: 'Is the Old Testament law still binding on Christians?',
      a: `Christians have long answered with care, and the traditions frame it in distinct but overlapping ways. A classic distinction — developed by Thomas Aquinas and echoed in the Reformation confessions — divides the law into **moral**, **civil**, and **ceremonial**. The *moral* law (summed up in the Ten Commandments and ultimately in love of God and neighbor) reflects God's unchanging character and abides. The *civil* laws governed Israel as a nation in a particular time and place. The *ceremonial* laws — sacrifices, festivals, food and purity rules — were shadows pointing to Christ, who is their fulfillment (Colossians 2:16–17; Hebrews 9–10).

Not every tradition uses that threefold scheme identically, and Eastern Orthodoxy in particular tends to stress the law's unity, fulfilled and transfigured in Christ rather than neatly partitioned. But there is wide agreement on the essentials: Jesus said he came "not to destroy, but to fulfill" the law (Matthew 5:17); its ceremonial shadows find their substance in him; and its moral heart — love of God and neighbor — is not abolished but deepened for those who walk by the Spirit. The law was never a ladder to earn God's favor; for Israel and for us, it is the grateful shape of a life already redeemed.`,
    },
  ],

  glossaryRefs: ['yhwh', 'ehyeh', 'pesach', 'mishkan', 'kavod', 'gaal-goel'],
};

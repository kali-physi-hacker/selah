import type { ActContent } from '../types';

/**
 * ACT 15 — REVELATION (Revelation)
 * The finale: where the whole story comes home. Eden lost ↔ Eden restored.
 * Matches (and, for the finale, slightly exceeds) the Act 1 depth/tone benchmark,
 * and explicitly closes the loop back to Creation (see `fullCircle`).
 */
export const revelation: ActContent = {
  number: 15,
  slug: 'revelation',
  title: 'Revelation',
  movement: 'restoration',
  books: 'Revelation',
  era: 'the end and the new beginning',
  accent: '#BA7517',
  icon: 'sun',
  isClimax: true,
  banner: 'Where the story comes home.',
  teaser: 'The story comes home — every tear wiped away, all things new.',

  featuredVerse: {
    ref: 'Revelation 21:5',
    text: `He who sits on the throne said, "Behold, I am making all things new." He said, "Write, for these words of God are faithful and true."`,
    translation: 'WEB',
  },

  overview: `The last book of the Bible is not a riddle to be cracked but a curtain pulled back. Its very first word, *apokalypsis*, means *unveiling* — and what it unveils is not mainly the end of the world but the *Lord* of the world: the crucified and risen Jesus, alive forever, walking among his churches, holding history in scarred hands. Written to small, pressured congregations who wondered whether faithfulness was worth it, Revelation answers with thunder and song: the Lamb wins, God reigns, and the story is going somewhere good.

It is a book of worship before it is a book of warning. Again and again John is caught up into a throne room where heaven is not anxious about the news — it is *singing*. At the center of all things he finds not a tyrant but a throne, and on the throne the marks of a slain Lamb. The deepest power in the universe turns out to be self-giving love, and the song of the redeemed is that this Lamb is *worthy*. Everything the book shows of judgment and conflict is held inside that worship, so that the suffering church can lift its eyes and breathe.

Then, in its final movement, Revelation does the most beautiful thing in all of Scripture: it goes home. The new heaven and new earth come down; God himself moves in with his people; every tear is wiped away; death itself dies. A river of life flows again, a tree of life stands open again, and a garden-city shines without need of sun, because the Lamb is its lamp. This is not the destruction of the world but its *renewal* — creation healed, not discarded.

And it does this by quietly answering the very first chapter of the Bible. Act 1 began *"In the beginning, God created"*; here he says *"Behold, I am making all things new."* What was lost in Eden — the river, the tree of life, the unhurried walk of God with his people — returns, only restored and greater. The whole arc of Scripture is one story, and this is the page where it comes full circle. The last words are an invitation and a longing: *"Come."* And then a promise: *"Surely I come quickly."*`,

  context: `Revelation calls itself three things at once: an *apocalypse* (an unveiling of heavenly realities, 1:1), a *prophecy* (a word from God to be heeded, 1:3; 22:18–19), and a *letter* (addressed to seven real churches in the Roman province of Asia, 1:4). Its author names himself simply "John," writing from exile on the island of Patmos "for the Word of God and the testimony of Jesus" (1:9). Christian tradition has widely identified him with John the apostle, though the early church itself already noted questions of style, and the book stands on its own authority either way. Most scholars date it to about AD 95, under the Emperor Domitian, when emperor-worship pressed hardest on Christians; a sizeable minority argues for an earlier date around AD 68–69, under Nero. Either way, its first readers were a minority faith under the shadow of an empire that demanded the allegiance owed only to God.

Apocalyptic literature speaks in *images* — beasts and bowls, lampstands and seals, numbers that mean more than they count. Revelation draws deeply on Daniel, Ezekiel, Zechariah, and Exodus, recombining their pictures into a symphony of symbol. Numbers carry meaning (seven = fullness, twelve = the people of God, a thousand = vastness, *six-six-six* = falling short), and the visions are meant to be *seen* and *felt*, not decoded like a cipher. Reading it well means asking less "what calendar date is this?" and more "what is this picture revealing about God, about evil, and about the way the story ends?"

Faithful Christians have long read Revelation in four broad ways, and it helps to hold them charitably. **Futurists** take much of the book (especially from chapter 4 on) as describing events still to come, clustered around Christ's return. **Historicists** see it surveying the whole sweep of church history from John's day to the end. **Preterists** read most of its visions as addressing the first century — the fall of Jerusalem and the pressures of Rome — though many still affirm a future bodily return of Christ. **Idealists** (or symbolic readers) take the visions as portraying timeless truths about the conflict between God and evil, true in every age. Many thoughtful readers blend these. What matters most is that all four hear the same central message — *Christ has conquered, God is making all things new* — and that shared hope is the heart of the book.`,

  timeline: [
    {
      ref: 'Revelation 1:9–18',
      title: 'John on Patmos sees the risen Christ',
      detail:
        'Exiled "in the Spirit on the Lord’s day," John turns to see one like a son of man walking among seven golden lampstands — Jesus, glorified, eyes like fire, voice like rushing waters. He falls as dead; Christ says, "Don’t be afraid. I was dead, and behold, I am alive forever and ever."',
    },
    {
      ref: 'Revelation 2–3',
      title: 'Letters to the seven churches',
      detail:
        'Christ dictates personal letters to seven real congregations — Ephesus to Laodicea — naming their faithfulness, their compromise, and their sufferings with intimate knowledge. Each closes with a promise "to him who overcomes," the first of which is the tree of life.',
    },
    {
      ref: 'Revelation 4–5',
      title: 'The throne room — and the Lamb who was slain',
      detail:
        'John is caught up to heaven, where worship never stops around the throne. No one can open the sealed scroll of history until a Lamb appears, "standing, as though it had been slain." The Lion of Judah conquers as a slain Lamb, and heaven sings, "Worthy is the Lamb!"',
    },
    {
      ref: 'Revelation 6–16',
      title: 'The seals, trumpets, and bowls',
      detail:
        'Three cycles of seven — seals, trumpets, and bowls — unveil God’s judgments on a world in rebellion. These are *apocalyptic symbols*, not a literal newscast; many read them as recapitulating the same era from deepening angles, answering the martyrs’ cry, "How long?"',
    },
    {
      ref: 'Revelation 7:9–17',
      title: 'The multitude no one can number',
      detail:
        'Amid the judgments, a vision of the saved: "a great multitude, which no man could number, out of every nation," standing before the throne in white, palms in hand. The Lamb shepherds them to springs of living water, and God wipes away every tear.',
    },
    {
      ref: 'Revelation 12',
      title: 'The woman, the child, and the dragon',
      detail:
        'The curtain lifts on the cosmic drama behind history: a woman gives birth to a son who will rule the nations, and a great red dragon — "the old serpent, called the devil and Satan" — tries to devour him, then makes war on her children. They conquer "because of the Lamb’s blood."',
    },
    {
      ref: 'Revelation 17–18',
      title: 'The fall of "Babylon"',
      detail:
        'Babylon the great — the dazzling, seductive city of human pride, idolatry, and injustice — is unveiled and then collapses. Heaven cries, "Fallen, fallen is Babylon!" Every empire that deifies itself and tramples the weak is shown to be already doomed.',
    },
    {
      ref: 'Revelation 19',
      title: 'The marriage supper of the Lamb; the King returns',
      detail:
        'Heaven erupts in hallelujahs as the marriage supper of the Lamb is announced and his bride is made ready. Then the King rides out on a white horse, called Faithful and True, with a name on his robe: "KING OF KINGS, AND LORD OF LORDS."',
    },
    {
      ref: 'Revelation 20',
      title: 'The defeat of Satan and the final judgment',
      detail:
        'Satan is bound, loosed, and at last thrown into the lake of fire — evil is ended, not merely managed. Before a great white throne the dead are judged "according to their works," and the book of life is opened. Death itself is thrown down.',
    },
    {
      ref: 'Revelation 21:1–2',
      title: 'A new heaven and a new earth',
      detail:
        'John sees "a new heaven and a new earth," and the holy city, New Jerusalem, coming down out of heaven "prepared like a bride adorned for her husband." Heaven is not somewhere we escape to — it comes *down*, and God remakes the world.',
    },
    {
      ref: 'Revelation 21:3–4',
      title: 'No more death, mourning, or tears',
      detail:
        'A loud voice declares that God’s dwelling is now with people forever. He wipes away every tear; "death will be no more; neither will there be mourning, nor crying, nor pain, any more. The first things have passed away."',
    },
    {
      ref: 'Revelation 22:1–5',
      title: 'The river and the tree of life — paradise restored',
      detail:
        'From the throne flows the river of the water of life, clear as crystal, and the tree of life grows along it, its leaves "for the healing of the nations." There is no more curse, no night, no need of sun — for the Lord God is their light, and they shall see his face.',
    },
    {
      ref: 'Revelation 22:20',
      title: '"Surely I come quickly. Amen."',
      detail:
        'The risen Christ gives his last promise — "Yes, I come quickly" — and the church answers with its oldest prayer, *Maranatha*: "Amen! Yes, come, Lord Jesus." The Bible ends not with a period but with a longing turned toward the door.',
    },
  ],

  deepDive: [
    {
      id: 'unveiling-not-riddle',
      heading: 'An unveiling, not a riddle: how to read Revelation',
      body: `The single most freeing thing to know about the last book of the Bible is what its first word means. *Apokalypsis* is not "catastrophe"; it is *unveiling* — a drawing back of the curtain so that we can see what was always true but hidden. Revelation is given "to show his servants the things which must happen soon" (1:1), and the deepest thing it shows is a *Person*: Jesus, alive and reigning, in the middle of his suffering church.

That changes how we read it. Apocalyptic literature thinks in pictures, and its pictures are meant to be *seen* rather than solved. When John reaches for numbers, they are usually symbolic: **seven** for fullness and completion, **twelve** for the people of God, **a thousand** for an immensity beyond counting, **forty-two months** for a limited season of trial. When he reaches for beasts and bowls and lampstands, he is borrowing the visual language of Daniel, Ezekiel, and Zechariah, recombining it into something new. A lampstand *is* a church (1:20); a Lamb *is* the crucified Christ; a beast *is* idolatrous empire. The point of a symbol is not to hide meaning but to compress it — to say more than plain prose could hold.

So the wise question is rarely "what calendar date does this predict?" and far more often "what is this revealing about God, about evil, and about the end of the story?" Read that way, the book stops being a source of fear and becomes what it was written to be: *pastoral comfort with cosmic scope.* To churches tempted to think Rome was the real power and the cross a defeat, Revelation pulls back the veil to show the true throne, the true King, and the certain end — so that ordinary believers, then and now, can stand firm.`,
    },
    {
      id: 'seven-churches',
      heading: 'Letters to the seven churches: Christ among the lampstands',
      body: `Before any vision of the future, Revelation does something tender: the risen Christ writes mail. Chapters 2–3 are seven short letters to seven real congregations strung along the Roman roads of Asia Minor — Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, Laodicea. And the first thing each church learns is that Jesus *knows*. "I know your works." He knows their love and their drift, their poverty and their true riches, their faithfulness under threat and their comfortable compromise.

The pattern is striking. To the suffering churches (Smyrna, Philadelphia) he offers almost no rebuke — only courage and a crown. To the comfortable, self-satisfied church (Laodicea, "rich, and… having need of nothing") he offers his sharpest words, and yet ends not with rejection but with a knock: "Behold, I stand at the door and knock." Even his "repent" is a door held open.

Each letter closes the same way: a promise "to him who overcomes." And those promises are a preview of the whole book's ending — the *tree of life* (2:7), escape from the *second death* (2:11), a *new name* (2:17), a place on Christ's *throne* (3:21). The seven churches are not relics; they are a mirror. We are somewhere in these letters, and the Christ who walks among the lampstands is still saying, with full knowledge and unfrightened love, *hold fast.*`,
    },
    {
      id: 'throne-room-and-lamb',
      heading: 'The throne room and the Lamb who was slain',
      body: `In chapters 4–5 John is summoned up through an open door into heaven, and the effect is meant to recalibrate everything. At the center of reality is *a throne* — not chaos, not chance, not Caesar — encircled by ceaseless worship: "Holy, holy, holy is the Lord God, the Almighty." Whatever is happening on earth, heaven is not panicking. Heaven is *singing.*

Then comes the hinge of the whole book. A sealed scroll — the unopened purposes of God for history — lies in the right hand of the One on the throne, and no one in heaven or earth is worthy to open it. John *weeps.* And he is told to stop: "Behold, the Lion of the tribe of Judah… has overcome." He turns to look for a Lion — and sees **a Lamb, standing, as though it had been slain** (5:6). This is the most important image in the book. The Lion conquers *as* a Lamb. The victory of God is won not by devouring but by being slain; the deepest power in the universe is crucified love.

And so heaven sings a *new* song: "You are worthy… for you were killed, and bought us for God with your blood out of every tribe, language, people, and nation" (5:9). The circle of worship widens — living creatures, elders, then myriads of angels, then *every* creature in heaven and earth and sea — until the whole cosmos is praising the Lamb. Keep this scene in view through everything that follows. Every judgment, every plague, every battle is held inside this worship, and the One who holds history's scroll is the One who was slain for the world.`,
    },
    {
      id: 'seals-trumpets-bowls',
      heading: 'Seals, trumpets, and bowls: the theology of history',
      body: `The long middle of Revelation (chapters 6–16) moves through three sevenfold cycles — seven seals, seven trumpets, seven bowls — of escalating judgment: conquest and famine, darkened skies and bitter waters, plague and earthquake. It is the part readers find most bewildering, and it helps to remember three things.

First, **this is apocalyptic symbol, not a literal timetable.** The images are drawn largely from the plagues of Exodus and the visions of the prophets; they paint the truth that God will not let evil run forever unanswered. Second, **the cycles likely overlap rather than simply follow one another.** Many faithful interpreters read the seals, trumpets, and bowls as *recapitulation* — the same period of history retold from deepening angles, like three passes over one landscape — which is why each cycle reaches the same end (the final judgment) before the next begins again.

Third, and most importantly, these chapters are an answer to a *cry*. Under the fifth seal the martyrs call out, "How long, Master… until you judge and avenge our blood?" (6:10). The judgments are God's "how long" answered — his refusal to be indifferent to oppression, his promise that the blood of the innocent will not be ignored forever. For a church being crushed by empire, this was not terror but *hope*: the moral universe is not neutral; God is just; the accounts will be settled. And running right through it all is mercy — a door for repentance held open (9:20–21; 11:13), and a multitude sealed and saved before the storm (7:1–8).`,
    },
    {
      id: 'woman-child-dragon',
      heading: 'The woman, the child, and the dragon (chapter 12)',
      body: `At the book's midpoint the curtain pulls back furthest of all, and we are shown the *spiritual* drama standing behind every earthly conflict. A woman "clothed with the sun," crowned with twelve stars, cries out in labor — the faithful people of God, through whom the Messiah comes into the world. Before her stands a great red dragon, waiting to devour her child the moment he is born. She gives birth to a son "who is to rule all the nations" — Christ — and the dragon is foiled: the child is caught up to God's throne (12:5).

Then Revelation names the dragon, and the naming reaches all the way back to Act 2: "the great dragon… the old serpent, he who is called the devil and Satan, the deceiver of the whole world" (12:9). The serpent who whispered in Eden is the dragon who rages here — finally seen for what he is. And we are told exactly *when* and *how* he was defeated: not at the end of the book but at its center, at the cross. "They overcame him because of the Lamb's blood, and because of the word of their testimony" (12:11).

This is the secret the suffering church most needed. The dragon is real, and his fury is real — but it is the fury of a defeated enemy who "knows that he has but a short time" (12:12). His war on the woman's other children, the people of God, is genuine and costly, yet its outcome is already settled at Calvary. The saints conquer the way their Lord did: by the blood of the Lamb, by faithful witness, and by loving "not their life even to death." Evil is loud; the Lamb has already won.`,
    },
    {
      id: 'babylon-and-the-king',
      heading: 'Babylon falls; the King returns (chapters 17–19)',
      body: `Revelation gives us two cities, and forces a choice between them. The first is **Babylon the great**, pictured as a gorgeously dressed woman drunk on the blood of the saints, seated on a beast, glittering with luxury bought by exploitation. "Babylon" is not finally a single nation but a *type* — the city of human pride in every age, the civilization that deifies itself, monetizes everything, and tramples the weak. John's first readers heard Rome; the pattern reappears whenever wealth and power demand the worship owed only to God. And its end is sudden and total: "Fallen, fallen is Babylon the great!" (18:2). Heaven mourns nothing about her injustice; it *rejoices* that the long reign of oppression is over.

Against the seductive ruin of Babylon, heaven announces a wedding. "The marriage of the Lamb has come, and his wife has made herself ready" (19:7). The bride — the redeemed people of God — is clothed not in Babylon's plunder but in "fine linen, bright and pure," which is "the righteous acts of the saints." This is the destiny set against empire: not a city that consumes its people, but a Bridegroom who gives himself for them.

Then the heavens open and the King rides out. The rider on the white horse is "called Faithful and True," his eyes a flame, his robe dipped in blood, and on it the name "KING OF KINGS, AND LORD OF LORDS" (19:16). Notice *how* he conquers: the sword is "out of his mouth" — the word of God — not in his hand. He does not need our violence; he wins by his word and his finished work. The Lamb who was slain returns as the King who reigns, and every rival throne comes down before him.`,
    },
    {
      id: 'judgment-and-new-creation',
      heading: 'Final judgment, and the renewal of all things (chapters 20–21)',
      body: `Chapter 20 is where the great enemies meet their end. Satan is bound, briefly loosed, and at last thrown into the lake of fire — evil is not negotiated with or merely contained, but *ended*. Then comes "a great white throne," and the dead, "great and small," stand before God and are judged "according to their works," with the books opened and the book of life open beside them. Revelation takes both justice and grace with full seriousness: deeds matter, and so does the Lamb's book of names. And in a final, staggering image, "Death and Hades were thrown into the lake of fire" (20:14). The last enemy is itself destroyed.

(This chapter is also where the "thousand years," the *millennium*, appears — read by sincere Christians as a literal future reign, as a symbol of the present church age, or as the fruit of the gospel's spread. See the questions below; the book's hope does not hang on settling it.)

What follows is the goal the whole Bible has been straining toward. "I saw a new heaven and a new earth" (21:1). Crucially, this is **renewal, not escape**. The holy city comes *down* "out of heaven from God" (21:2); God does not evacuate his people from creation but moves *into* it — "Behold, God's dwelling is with people, and he will dwell with them" (21:3). The verb of the finale is not *destroy* but *make new*: "Behold, I am making all things new" (21:5). The same God who once called the world "very good" will not abandon it; he will heal it. And the first fruit of that healing is the drying of every tear: "Death will be no more; neither will there be mourning, nor crying, nor pain, any more" (21:4). The deepest wounds of the long story — every grave, every grief — are not patched but *undone.*`,
    },
    {
      id: 'paradise-restored',
      heading: 'Paradise restored — and the story comes home',
      body: `The Bible's last vision is a garden inside a city, and it is built, detail by detail, to send us back to its first pages. An angel shows John "a river of water of life, clear as crystal, proceeding out of the throne of God and of the Lamb" (22:1) — and we have seen that river before, flowing out of Eden to water the garden (Genesis 2:10). On its banks grows "the tree of life" (22:2) — the very tree humanity was barred from after the fall, guarded by cherubim and a flaming sword (Genesis 3:24) — now standing open in the middle of the street, bearing fruit every month, "and the leaves of the tree were for the healing of the nations."

Then the losses of Eden are reversed one by one. "There will be no curse any more" (22:3) — the curse of Genesis 3 is lifted. "They will see his face" (22:4) — the intimacy of God walking in the garden "in the cool of the day" (Genesis 3:8), broken by sin, is restored and surpassed; what Adam hid from, the redeemed will gaze upon. And there is no temple in the city, "for the Lord God, the Almighty, and the Lamb, are its temple" (21:22), and no need of sun or lamp, "for the Lord God will illuminate them" — the One who first said *"Let there be light"* is himself the light at the end. The story ends where it began, only restored and greater.

And how does the Bible close? Not with a full stop, but with a *yearning.* "The Spirit and the bride say, 'Come!'… He who is thirsty, let him come. He who desires, let him take the water of life freely" (22:17). Grace is held open to the very last line. Christ gives his final promise — "Yes, I come quickly" (22:20) — and the church answers with its most ancient prayer, *Maranatha*: "Amen! Yes, come, Lord Jesus." Then a benediction of grace, and the long story rests — finished, and not yet, leaning toward the dawn. Every tear wiped away. All things new.`,
    },
  ],

  people: [
    {
      slug: 'jesus',
      name: 'The Risen Christ — the Lamb who was slain',
      oneLine: `The slain-yet-living Lamb at the center of heaven's worship, and the returning King of kings.`,
      bio: `Revelation is, by its own first sentence, "the Revelation of Jesus Christ" — its subject and its author are the same Lord. He appears first as the glorified Son of Man among the lampstands, eyes like fire, holding the keys of death: "I was dead, and behold, I am alive forever and ever" (1:18). He appears at the book's heart as the Lion who is a Lamb, "standing, as though it had been slain" (5:6) — the only one worthy to open history's scroll, because he was killed and "bought us for God" with his blood from every nation. The crucified One receives the worship due to God alone.

He is the Bridegroom whose wedding heaven announces, the rider called Faithful and True who returns as "King of kings, and Lord of lords" (19:16), the light who makes the new city shine without need of sun. And he gives himself two names that close the whole Bible's circle: "the Alpha and the Omega, the First and the Last, the Beginning and the End" (22:13), and "the bright and morning star" (22:16). The Word who was "in the beginning" (Act 1) is the One who brings the entire story home — and his last word is a promise to come.`,
      keyRefs: ['Revelation 1:17–18', 'Revelation 5:6–9', 'Revelation 19:11–16', 'Revelation 22:13'],
      appearsInActs: [11, 12, 13, 14, 15],
    },
    {
      slug: 'john-of-patmos',
      name: 'John (the Seer of Patmos)',
      oneLine: 'The exile who received the visions and wrote them down for the churches.',
      bio: `John introduces himself simply as a brother and "partner with you in the oppression" (1:9), writing from the rocky island of Patmos, where he had been banished "for the Word of God and the testimony of Jesus." Christian tradition has widely identified him with John the apostle, the beloved disciple, though the early church itself noted questions of authorship; the book stands either way. What is unmistakable is his pastor's heart: every vision is finally aimed at strengthening real, frightened, faithful congregations.

He is no detached observer. He weeps openly when no one can open the scroll (5:4), until the Lamb comforts him. He falls "as a dead man" before the glorified Christ, and twice is tempted to worship an angel and is told to worship God alone (19:10; 22:9). He is commanded *not* to seal up the words of this book (22:10) — unlike Daniel before him — because the time is near and the church needs to hear it. Through him, the homecoming of the whole story was written down and kept open for us.`,
      keyRefs: ['Revelation 1:9–11', 'Revelation 1:19', 'Revelation 5:4–5', 'Revelation 22:8–10'],
      appearsInActs: [15],
    },
    {
      slug: 'the-saints-and-martyrs',
      name: 'The Saints — the Bride and the Great Multitude',
      oneLine: `The redeemed of every nation — washed in the Lamb's blood, the city-bride God comes to dwell with.`,
      bio: `Revelation's true heroes are not the powerful but the faithful. They appear as souls beneath the altar crying "How long?" (6:10); as "a great multitude, which no man could number, out of every nation, and of all tribes, peoples, and languages," standing before the throne in white (7:9); and as those who "overcame him because of the Lamb's blood, and because of the word of their testimony, and they didn't love their life even to death" (12:11). Their victory looks, from the outside, like defeat — and is in fact the deepest conquest in the book.

By the end they are revealed to be something astonishing: not merely the saved, but the *bride* (19:7–8) and even the *city* — the New Jerusalem that comes down from God, the people who are God's own dwelling place forever (21:2–3). The same word covers the church suffering under Rome and the church glorified in the new creation, because they are one people across the ages. To every believer who ever held on when holding on was costly, Revelation says: you are not spectators of the ending. You are the bride God is coming for, and the home he intends to live in.`,
      keyRefs: ['Revelation 7:9–17', 'Revelation 12:11', 'Revelation 19:7–8', 'Revelation 21:2–3'],
      appearsInActs: [13, 14, 15],
    },
    {
      slug: 'the-woman-and-child',
      name: 'The Woman and her Child (a symbol)',
      oneLine: 'The covenant people through whom the Messiah comes — pursued, but kept safe.',
      bio: `In chapter 12 a woman appears "clothed with the sun, and the moon under her feet, and on her head a crown of twelve stars," crying out in the pains of birth. She is best read as a *symbol*, not a single individual: the faithful people of God — Israel, and the church drawn out of her — from whom the Messiah is born into the world. Many readers also hear gentle echoes of Mary, who literally bore the child; the imagery is layered on purpose.

Her son is "to rule all the nations" — Christ — and the dragon waits to devour him the instant he is born. But the child is caught up to God's throne (the ascension), and the woman, though driven into the wilderness, is "nourished" and protected by God through a measured season of trial (12:6, 14). When the dragon cannot reach the child, he turns to "make war with the rest of her offspring, who keep God's commandments" — the believers of every age. She is the picture of the community God carries safely through every assault of evil: hunted, but never abandoned.`,
      keyRefs: ['Revelation 12:1–6', 'Revelation 12:13–17'],
      appearsInActs: [15],
    },
    {
      slug: 'the-dragon',
      name: 'The Dragon — that Ancient Serpent (a symbol of Satan)',
      oneLine: "The accuser and deceiver behind history's evil — already defeated by the Lamb.",
      bio: `The "great red dragon" of Revelation 12 is the book's unveiling of the personal power of evil. John leaves no doubt about his identity: "the great dragon was thrown down, the old serpent, he who is called the devil and Satan, the deceiver of the whole world" (12:9). The serpent who first whispered doubt in Eden (Act 2) is here seen at last for what he truly is — and his many faces in the book (dragon, accuser, the power behind the beast) are aspects of one enemy.

But Revelation is careful never to let the dragon look like an equal rival to God. He is a *creature*, and a defeated one. His decisive overthrow happened at the cross — the saints conquer him "because of the Lamb's blood" (12:11) — and his rage is precisely the rage of one who "knows that he has but a short time" (12:12). His end is fixed: bound (20:2), and finally thrown "into the lake of fire and sulfur" (20:10), tormented no more to deceive. The point for the suffering church is steadying: evil is real and loud, but it is not ultimate, and it does not win.`,
      keyRefs: ['Revelation 12:9', 'Revelation 12:11', 'Revelation 20:2', 'Revelation 20:10'],
      appearsInActs: [2, 15],
    },
    {
      slug: 'the-beast-and-babylon',
      name: 'The Beast and Babylon (symbols of idolatrous power)',
      oneLine: 'Empire that demands the worship owed to God alone — and the proud city that always falls.',
      bio: `The beast and Babylon are the book's great *symbols* of organized human evil, and they belong together. The **beast** (chapter 13) is idolatrous political and spiritual power that claims the allegiance owed only to God and persecutes those who refuse it; John's first readers heard the Roman empire and its emperor-cult, and the pattern reappears in every age that a state deifies itself. Its number, "six hundred sixty-six" (13:18), is itself a symbol — humanity falling endlessly short of the seven of God's fullness, a counterfeit of perfection that can never reach it.

**Babylon the great** (chapters 17–18) is the same spirit pictured as a city: gorgeous, seductive, drunk "with the blood of the saints," rich on the back of injustice — and doomed. Her name reaches back to the Babylon of the exile (Act 9), the archetype of the arrogant city set against God. It is wisest to treat these as types rather than as a code for one modern nation: wherever pride, idolatry, and exploitation organize themselves into power, there the beast rides and Babylon glitters. And Revelation's verdict on all of it is the same — "Fallen, fallen is Babylon the great!" (18:2). The empires that look eternal are already sentenced; only the city of God endures.`,
      keyRefs: ['Revelation 13:1–8', 'Revelation 13:18', 'Revelation 17:5', 'Revelation 18:2'],
      appearsInActs: [15],
    },
  ],

  themes: [
    {
      title: 'The worship of heaven',
      body: 'Before it is anything else, Revelation is a book of song. At the center of reality is a throne ringed with ceaseless praise — "Holy, holy, holy" and "Worthy is the Lamb." Worship is how the church sees clearly and stands firm.',
    },
    {
      title: "Christ's victory over evil",
      body: 'The Lion conquers as a slain Lamb. Evil is loud and real, but it is a defeated enemy whose end is already fixed at the cross — and the saints overcome the same way their Lord did: by the blood of the Lamb and the word of their testimony.',
    },
    {
      title: 'Judgment and justice for a groaning world',
      body: 'The martyrs cry "How long?" and God answers. Revelation refuses to let oppression run forever unanswered; it promises that the blood of the innocent is not forgotten and that every Babylon will fall. Justice is not vengeance but the setting-right of all things.',
    },
    {
      title: 'The renewal of all things',
      body: 'The end is not escape from creation but its redemption. The city comes down; God moves in; the verb of the finale is "make new," not "destroy." The same God who called the world "very good" will heal it — a new heaven and a new earth.',
    },
    {
      title: 'God dwelling with his people forever',
      body: 'The deepest promise of the Bible arrives here: "God’s dwelling is with people, and he will dwell with them." Every tear is wiped away, death dies, and the intimacy lost in Eden becomes an unbroken, face-to-face nearness that never ends.',
    },
    {
      title: 'Hope and endurance for the suffering church',
      body: 'Written to the pressured and the persecuted, Revelation lifts their eyes to the true throne and the certain ending so they can hold fast. It is pastoral comfort with cosmic scope: the Lamb wins, so faithfulness is never wasted.',
    },
  ],

  words: [
    {
      term: 'apokalypsis',
      language: 'Greek',
      gloss: '"unveiling, revelation"',
      detail:
        'The first word of the book (1:1) and the source of its English title. It means not "catastrophe" but the drawing back of a curtain — an unveiling of what is already true but hidden: the risen Christ reigning over history. It reframes the whole book as disclosure, not doom.',
    },
    {
      term: 'arnion',
      language: 'Greek',
      gloss: '"the Lamb"',
      detail:
        'Revelation’s favorite title for Jesus, used some twenty-eight times. The diminutive form carries tenderness — a little lamb — yet this Lamb is "standing, as though slain" (5:6) and shares the throne. The central paradox of the book: the deepest power in the universe is crucified, self-giving love.',
    },
    {
      term: 'thronos',
      language: 'Greek',
      gloss: '"throne"',
      detail:
        'A defining word of Revelation, appearing more than forty times. At the center of reality is not chaos or Caesar but a throne — and on it, the marks of a slain Lamb. The river of life flows "out of the throne of God and of the Lamb" (22:1). The book is, finally, about who truly reigns.',
    },
    {
      term: 'Yerushalayim',
      language: 'Hebrew',
      gloss: '"Jerusalem" — foundation of peace',
      detail:
        'The earthly city’s name (rooted in *shalom*, peace) is taken up and remade in the "New Jerusalem" (21:2) — no longer a place on a map but a people, the bride of the Lamb, the city that comes down from God where he dwells with us forever. The ancient hope of peace finally and fully kept.',
    },
    {
      term: 'Maranatha',
      language: 'Concept',
      gloss: '"Our Lord, come!" (an Aramaic prayer)',
      detail:
        'An Aramaic phrase so early and so treasured that the first Christians kept it untranslated (1 Corinthians 16:22). It breathes through Revelation’s closing prayer — "Amen! Yes, come, Lord Jesus" (22:20) — the longing of the suffering church for its King, and the word with which the whole Bible leans toward the dawn.',
    },
    {
      term: 'Alpha and Omega',
      language: 'Concept',
      gloss: 'the First and the Last',
      detail:
        'The first and last letters of the Greek alphabet, claimed by God and by Christ as a title (1:8; 21:6; 22:13): "the Alpha and the Omega, the First and the Last, the Beginning and the End." The One who was present "in the beginning" (Act 1) is the One who brings the story to its close — he holds both ends in his hands.',
    },
  ],

  christ: {
    summary: `Every act of the Bible has pointed forward to Christ; Revelation is where the scarlet thread becomes the whole tapestry. Here the slain Lamb stands at the literal center of the cosmos, the only one worthy to unseal history, the object of heaven’s unending song. He is the glorified Son who holds the keys of death, the Bridegroom of the redeemed, the returning King of kings, and the light of the new city — no sun needed, "for the Lamb is its lamp" (21:23). And he gathers the whole story into his own name: "I am the Alpha and the Omega" (22:13). The One who spoke "Let there be light" in Act 1 is the One who says "Behold, I am making all things new," and his last promise is the door left open: "Surely I come quickly."`,
    links: [
      { ref: 'Revelation 5:6–9', note: 'The Lion of Judah turns out to be a Lamb "standing, as though slain" — worthy because he was killed and bought people for God from every nation. The cross is heaven’s throne.' },
      { ref: 'Revelation 5:12', note: '"Worthy is the Lamb who has been killed" — the crucified One receives the worship due to God alone; the whole cosmos joins the song.' },
      { ref: 'Revelation 1:17–18', note: '"I am the first and the last, and the Living one. I was dead, and behold, I am alive forever and ever." Christ holds the keys of death and Hades.' },
      { ref: 'Revelation 19:11–16', note: 'The returning King, Faithful and True — "KING OF KINGS, AND LORD OF LORDS" — who conquers by the word of his mouth, not by our violence.' },
      { ref: 'Revelation 21:23', note: 'The city needs no sun, "for the very glory of God illuminated it, and its lamp is the Lamb." The One who said "Let there be light" (Act 1) is himself the light.' },
      { ref: 'Revelation 22:13', note: '"I am the Alpha and the Omega, the First and the Last" — the Word who was "in the beginning" brings the whole story home; he holds both ends.' },
      { ref: 'Revelation 22:16–17', note: '"I am the root and the offspring of David, the bright and morning star." His Spirit and Bride say "Come!" — grace held open to the last line.' },
    ],
  },

  memoryVerses: [
    {
      ref: 'Revelation 21:3–4',
      text: `I heard a loud voice out of heaven saying, "Behold, God's dwelling is with people, and he will dwell with them, and they will be his people, and God himself will be with them as their God. He will wipe away from them every tear from their eyes. Death will be no more; neither will there be mourning, nor crying, nor pain, any more. The first things have passed away."`,
      translation: 'WEB',
    },
    {
      ref: 'Revelation 21:5',
      text: `He who sits on the throne said, "Behold, I am making all things new." He said, "Write, for these words of God are faithful and true."`,
      translation: 'WEB',
    },
    {
      ref: 'Revelation 22:13',
      text: 'I am the Alpha and the Omega, the First and the Last, the Beginning and the End.',
      translation: 'WEB',
    },
    {
      ref: 'Revelation 22:20',
      text: `He who testifies these things says, "Yes, I come quickly." Amen! Yes, come, Lord Jesus.`,
      translation: 'WEB',
    },
  ],

  reflection: {
    meditation: `Be still, and let the long story settle over you.

You have followed it from a garden in the beginning — through promise and exile, cross and empty tomb — all the way to this: a city coming down, a river running clear, a tree of life with its gates thrown open. And a voice from the throne saying, *"Behold, I am making all things new."*

Whatever you carry tonight — grief that has no words, fear that has no end, a tiredness that sleep does not touch — hear the promise made over it: every tear wiped away. Death will be no more. The first things have passed away.

You are not heading into the dark. You are heading home, where God himself will dwell with his people, and you will see his face.

Breathe in. Breathe out. *Come, Lord Jesus.* Rest here a little while.`,
    prompts: [
      'Revelation is, before anything else, a book of *worship*. What would change in you if you faced your fears the way heaven does — by singing?',
      'God promises not to remove you from the world but to *make all things new*. Where do you long, most of all, to see something restored rather than simply escaped?',
      '"He will wipe away from them every tear." Which tears do you most need to entrust to that promise — and what would it feel like to hand them over?',
      'The Bible ends with the prayer "Come, Lord Jesus." What hope, or what ache, rises in you when you pray those three words tonight?',
    ],
  },

  questions: [
    {
      q: 'How am I supposed to read Revelation — there seem to be so many interpretations?',
      a: `There are four main approaches, and faithful Christians hold each of them with sincerity:

- **Futurist** — much of the book (especially from chapter 4 on) describes events still to come, gathered around Christ’s return.
- **Historicist** — Revelation surveys the whole sweep of church history from John’s day to the end.
- **Preterist** — most of its visions addressed the first century (the fall of Jerusalem, the pressures of Rome), though many preterists still affirm a future bodily return of Christ.
- **Idealist** — the visions portray timeless truths about the conflict between God and evil, true in every age rather than tied to datable events.

Many thoughtful readers blend these (for example, holding that the book spoke powerfully to its first readers *and* still points to a real future hope). The healthiest posture is charity: keep the disputed details loosely, and hold the shared center tightly — *Christ has conquered, God is just, and he is making all things new.* That message is the same in every approach.`,
    },
    {
      q: 'What is the "millennium" — the thousand years of Revelation 20?',
      a: `Revelation 20 speaks of Christ reigning with his saints for "a thousand years," and Christians have understood it in three main ways:

- **Premillennial** — Christ returns *before* a literal reign on earth; the thousand years is a future golden age.
- **Amillennial** — the "thousand years" is symbolic of the present age, in which Christ reigns now through his church; there is one return, then eternity.
- **Postmillennial** — the gospel will increasingly transform the world, ushering in a long era of righteousness, after which Christ returns.

These are genuine differences among believers who love the same Lord, and the Bible does not ask us to break fellowship over them. Notice what *all* of them affirm: Christ reigns, evil is finally defeated, and Christ will come again. It is wise to hold a view if you have studied it, and wiser still to hold it with humility. The book’s hope does not hang on getting the timetable right.`,
    },
    {
      q: 'Is Revelation a coded timetable of the future, or something else?',
      a: `It is far less a calendar than a *comfort.* Revelation was written to seven real, struggling churches to help them endure — to pull back the curtain on the true throne so that frightened believers could see who actually reigns. Its closest relatives are Daniel and Ezekiel, not a cryptic almanac of dates; its numbers and beasts are *symbols* meant to be seen and felt.

That does not empty it of hope for the future — it overflows with the promise of Christ’s return and the renewal of all things. But it delivers that hope as *worship literature for the suffering*, not as a puzzle for the curious. Read it the way it was given — to steady the knees of people under pressure — and it does its deepest work in any age, including ours. The point is endurance and praise, not prediction.`,
    },
    {
      q: 'Who, or what, are "Babylon" and "the beast"?',
      a: `They are best read as *symbols* of organized human evil rather than as a code for one specific modern nation or person. The **beast** stands for idolatrous power — political and spiritual — that demands the allegiance owed only to God and persecutes those who refuse it. John’s first readers heard the Roman empire and its emperor-cult; the pattern recurs wherever a state deifies itself. **Babylon** is that same spirit pictured as a seductive, exploitative *city*, drunk on luxury and injustice, echoing the Babylon of the exile (Act 9) — the archetype of human pride set against God.

The number "666" (13:18) is likewise symbolic — humanity endlessly falling short of the seven of God’s fullness, a counterfeit that can never reach perfection (it is often linked, by the ancient practice of counting letters, to "Nero Caesar"). The wisdom of treating these as types is that they keep the book honest in every age: the call is to refuse the idolatry of empire and the seductions of injustice, wherever they appear, and to belong instead to the city of God.`,
    },
    {
      q: 'Is the "lake of fire" a literal place, and what happens to the lost?',
      a: `This is a place to tread reverently, because sincere, Bible-loving Christians hold a range of views, and the imagery is apocalyptic. Three positions are widely held: **eternal conscious punishment** (the traditional view, that the unrepentant are consciously separated from God forever); **conditional immortality** (or annihilationism — that the lost finally cease to exist, the "second death" being just that); and a minority **hope of ultimate reconciliation.** Each appeals to real strands of Scripture, and each is held by faithful people.

What Revelation states plainly is more important than settling the mechanism: God is perfectly just, evil and death are themselves destroyed (20:14), and no one who longs for life is turned away — "he who desires, let him take the water of life freely" (22:17). The fire-and-lake language is the apocalyptic picture of evil’s real and final end. It is right to take judgment seriously and to hold its exact nature humbly, while the invitation of grace stays open to the very last line of the book.`,
    },
    {
      q: 'Will the earth be destroyed, or renewed?',
      a: `The overwhelming weight of Revelation’s ending falls on *renewal*, not annihilation. The holy city comes *down* to earth (21:2); God moves *into* his creation rather than evacuating people out of it; and the defining word of the finale is "Behold, I am making all things *new*" (21:5). The Greek for "new" (*kainos*) means renewed in quality — like a body raised, not a body replaced. This fits the larger biblical hope: a redeemed creation "set free from the bondage of decay" (Romans 8:21), and our own resurrection as the pattern — continuity transfigured, not erasure.

Passages about the old order "passing away" and fire (as in 2 Peter 3) are read by many as *purifying* rather than obliterating — the world refined, as gold in a furnace, not thrown away. The gospel is not that God rescues souls from a doomed planet, but that he reclaims and heals the very world he called "very good" in the beginning. Heaven is not our escape from creation; it is creation’s homecoming, and ours.`,
    },
  ],

  glossaryRefs: ['apokalypsis', 'arnion', 'thronos', 'yerushalayim', 'maranatha', 'alpha-and-omega'],

  fullCircle: [
    {
      from: '"Behold, I am making all things new" (Revelation 21:5)',
      to: '"In the beginning, God created the heavens and the earth" (Genesis 1:1)',
      note: 'The story ends where it began, only restored and greater: the God who first spoke creation into being now speaks it new — not scrapping the old world but healing it, the same good voice over a redeemed cosmos.',
    },
    {
      from: 'The river of the water of life, from the throne (Revelation 22:1)',
      to: 'A river flowed out of Eden to water the garden (Genesis 2:10)',
      note: 'The story ends where it began, only restored and greater: the river that nourished the first garden flows again — now clear as crystal, straight from the throne of God and of the Lamb, and it will never run dry.',
    },
    {
      from: 'The tree of life in the city, its leaves for healing, freely given (Revelation 22:2)',
      to: 'The tree of life, guarded by cherubim and a flaming sword (Genesis 3:24)',
      note: 'The story ends where it began, only restored and greater: the tree once fenced off after the fall now stands open in the middle of the city, freely given, its leaves for the healing of the nations.',
    },
    {
      from: 'God dwells with his people forever, and they see his face (Revelation 21:3)',
      to: 'God walked with them in the garden in the cool of the day (Genesis 3:8)',
      note: 'The story ends where it began, only restored and greater: the evening walk of Eden, broken by sin, becomes an unbroken and eternal nearness — no veil, no hiding, no parting; God himself with us, face to face.',
    },
  ],
};

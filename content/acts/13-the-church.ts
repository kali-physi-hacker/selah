import type { ActContent } from '../types';

/**
 * ACT 13 — THE CHURCH IS BORN (Acts)
 * The Spirit falls and the gospel catches fire, from Jerusalem to Rome.
 */
export const theChurch: ActContent = {
  number: 13,
  slug: 'the-church',
  title: 'The Church Is Born',
  movement: 'restoration',
  books: 'Acts',
  era: 'the dawn of the church',
  accent: '#BA7517',
  icon: 'flame',
  teaser: 'The Spirit falls, and the good news catches fire across the world.',

  featuredVerse: {
    ref: 'Acts 1:8',
    text: 'But you will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth.',
    translation: 'WEB',
  },

  overview: `Acts picks up exactly where the Gospels leave off. The risen Jesus, before he is taken up into heaven, refuses to let his followers rush off in their own strength. *Wait*, he tells them — wait for the promise of the Father. Then he gives them their charter: "You will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth." A few days later, at the feast of Pentecost, the Spirit falls like wind and fire, and a frightened, hidden band of disciples becomes a fearless movement. The good news catches fire.

From a single upper room the story explodes outward. Three thousand believe in a day; then the gospel begins to cross every line drawn by human fear — reaching despised Samaritans, an African court official, a Roman centurion's household, and finally the whole Gentile world. What begins as a renewal movement among Jews in Jerusalem becomes, within a single generation, a community that spans the empire and stands, at the book's close, in the heart of Rome itself.

Acts is the story of the Spirit and the church: of ordinary people made bold, of a gospel that breaks barriers, of suffering that only scatters the seed farther, and of a word that simply cannot be stopped. It is the bridge between the four Gospels and the letters that follow — the account of how the rescue accomplished by Jesus became a worldwide family.

And it is, by design, an unfinished story. Acts ends not with a tidy conclusion but with Paul preaching freely in Rome and the door left open. The final chapter is deliberately blank, because it is still being written — by the same Spirit, in the same church, in every age, including ours.`,

  context: `Acts is the second of a two-volume work written by Luke — by ancient tradition a physician and a traveling companion of the apostle Paul, and likely the only Gentile author in the New Testament. Both volumes are addressed to a man named Theophilus ("lover of God"), and the opening of Acts looks back explicitly to "the first book I wrote... concerning all that Jesus began both to do and to teach" (Acts 1:1) — that is, the Gospel of Luke. Taken together, Luke and Acts form the longest single contribution to the New Testament, roughly a quarter of its pages. The genre is carefully researched historical narrative, written in polished Greek; Luke tells us at the start of his Gospel that he set out to compose an "orderly account" so that his reader might know the certainty of the things he had been taught. In several passages the narrative slips into "we," suggesting the author was himself present for parts of the journey.

The book hands us its own outline in a single verse. Acts 1:8 maps the whole story in three widening circles: the witnesses begin in **Jerusalem** (chapters 1–7), spread through **Judea and Samaria** (chapters 8–12), and press on "to the uttermost parts of the earth" (chapters 13–28), ending in Rome. The true engine of the action is the Holy Spirit, and the "word of God" itself is almost a character — Luke repeatedly notes that it "grew and multiplied." It is worth saying plainly that Acts is selective rather than exhaustive: Luke is not writing a complete history of the first decades but tracing, with a pastor's purpose, how the gospel traveled from the temple courts in Jerusalem to a rented house in the capital of the world — and how nothing, not prison, storm, or sword, could hold it back.`,

  timeline: [
    {
      ref: 'Acts 1:4–14',
      title: 'The ascension and the waiting',
      detail:
        'The risen Jesus gives his final charge — they will be his witnesses to the ends of the earth — and is taken up into heaven, with the promise that he will return. The disciples go back to Jerusalem and devote themselves to prayer, waiting for the promised Spirit.',
    },
    {
      ref: 'Acts 2:1–13',
      title: 'Pentecost — the Spirit poured out',
      detail:
        'On the feast of Pentecost a sound like a rushing wind fills the house, tongues like fire rest on each believer, and they begin to speak in other languages. Pilgrims from every nation hear the wonders of God, each in his own tongue.',
    },
    {
      ref: 'Acts 2:14–41',
      title: 'Peter preaches; about 3,000 believe',
      detail:
        'Peter stands and proclaims the crucified and risen Jesus as both Lord and Christ. Cut to the heart, the crowd asks what they must do; that day about three thousand repent, are baptized, and are added to the young church.',
    },
    {
      ref: 'Acts 2:42–47',
      title: 'The life of the early church',
      detail:
        'The believers devote themselves to the apostles\' teaching, to fellowship, to the breaking of bread, and to prayer. They share their possessions, meet daily, praise God with glad hearts, and the Lord adds to their number day by day.',
    },
    {
      ref: 'Acts 3:1–4:31',
      title: 'Healing and bold witness under opposition',
      detail:
        'Peter heals a man lame from birth at the temple gate and preaches Jesus to the astonished crowd. Hauled before the Sanhedrin and ordered to be silent, Peter and John answer that they cannot stop speaking of what they have seen and heard.',
    },
    {
      ref: 'Acts 6:8–7:60',
      title: 'Stephen, the first martyr',
      detail:
        'Stephen, full of grace and power, is seized on false charges. He answers with a sweeping survey of Israel\'s story, then is dragged out and stoned — praying for his killers as he dies. A young man named Saul looks on, approving.',
    },
    {
      ref: 'Acts 8:4–40',
      title: 'The gospel spreads to Samaria and an Ethiopian',
      detail:
        'Scattered by persecution, the believers preach the word wherever they go. Philip brings the good news to the despised Samaritans, then to an Ethiopian official puzzling over Isaiah on a desert road, who believes and is baptized.',
    },
    {
      ref: 'Acts 9:1–19',
      title: 'Saul meets the risen Christ',
      detail:
        'On the road to Damascus to arrest believers, the church\'s fiercest enemy is struck down by a blinding light and a voice: "Saul, Saul, why do you persecute me?" Three days later the persecutor is baptized and begins to preach the very name he tried to destroy.',
    },
    {
      ref: 'Acts 10:1–48',
      title: 'Cornelius — the gospel opened to the Gentiles',
      detail:
        'Guided by a vision, Peter enters the home of Cornelius, a Roman centurion. As Peter speaks, the Holy Spirit falls on the whole Gentile household, and they are baptized — proof that God shows no partiality.',
    },
    {
      ref: 'Acts 13:1–14:28',
      title: 'Paul\'s first missionary journey',
      detail:
        'The church at Antioch, prompted by the Spirit, sends out Barnabas and Saul. Across Cyprus and Asia Minor they preach in synagogue and marketplace, planting churches and appointing elders amid both glad belief and fierce resistance.',
    },
    {
      ref: 'Acts 15:1–35',
      title: 'The Jerusalem Council',
      detail:
        'A hard question divides the church: must Gentile believers be circumcised and keep the law of Moses to be saved? The leaders gather, weigh Scripture and testimony, and conclude that Gentiles are saved by grace — guarding the freedom of the gospel.',
    },
    {
      ref: 'Acts 16:11–40',
      title: 'Philippi — Lydia and the jailer',
      detail:
        'The mission crosses into Europe. By a riverside the Lord opens the heart of Lydia, a dealer in purple cloth, who is baptized with her household. After a beating and an earthquake, a frightened jailer and his family believe and are baptized too.',
    },
    {
      ref: 'Acts 17:16–34',
      title: 'Athens — the Areopagus',
      detail:
        'Surrounded by idols and philosophers, Paul stands before the Areopagus and proclaims the unknown God who made the world, gives life to all, and has raised Jesus from the dead — calling even the wise of Athens to repent.',
    },
    {
      ref: 'Acts 27:1–28:31',
      title: 'The voyage and arrival in Rome',
      detail:
        'A prisoner appealing to Caesar, Paul is taken by ship through storm and shipwreck to Italy. The book ends with him in Rome, proclaiming the kingdom of God boldly and without hindrance — the gospel arriving at the empire\'s heart.',
    },
  ],

  deepDive: [
    {
      id: 'pentecost',
      heading: 'Pentecost: the Spirit poured out',
      body: `Pentecost was already an ancient feast before it became the church\'s birthday. Its name means "the fiftieth day" — it fell fifty days after Passover, the Feast of Weeks (*Shavuot*), a harvest festival that drew Jewish pilgrims to Jerusalem from every corner of the known world. Into that crowded city, exactly when devout Jews from many nations were gathered in one place, the Spirit fell.

The signs are vivid and deliberate: a sound like a rushing wind, tongues *like fire* resting on each believer, and suddenly the disciples speaking in languages they had never learned, so that pilgrims from a dozen regions each heard "the mighty works of God" in their own native tongue. There is a quiet undoing of an old wound here. At Babel (Genesis 11), human pride was scattered and confused by a babble of languages; at Pentecost, the one gospel is heard through *every* language at once — not erasing the differences but gathering the nations back together around the risen Christ. What pride divided, the Spirit begins to reunite.

Then Peter — the man who weeks earlier had denied Jesus by a fire — stands up and preaches. He reaches for the prophet Joel ("I will pour out my Spirit on all flesh") to explain what the crowd is seeing: this is the age the prophets longed for, when God\'s Spirit would rest not on a few prophets and kings but on *all* his people, young and old, men and women, slave and free. And he points them to Jesus: crucified, raised, and now exalted to God\'s right hand, the One who has poured out what they now see and hear. God, Peter declares, has made this same crucified Jesus "both Lord and Christ."

The response is the first great harvest of the church\'s history. "What shall we do?" the crowd cries, and Peter answers: repent, and be baptized in the name of Jesus, and you too will receive the gift of the Holy Spirit. About three thousand believe that day. The God who once formed a man from dust and breathed life into him now breathes his own Spirit into a people — and the church is born.`,
    },
    {
      id: 'the-devoted-community',
      heading: 'The devoted community (Acts 2:42–47)',
      body: `Luke pauses, just after Pentecost, to show us what kind of community the Spirit creates. It is one of the most beautiful snapshots in all of Scripture. The new believers "continued steadfastly in the apostles\' teaching and fellowship, in the breaking of bread, and prayer." Four devotions: they were rooted in *truth* (the apostles\' teaching), bound in *love* (fellowship — Greek *koinonia*, a deep shared life), gathered around the *table* (the breaking of bread, both common meals and the Lord\'s Supper), and lifted in *worship* (prayer). This simple rhythm has shaped Christian community ever since.

The fellowship was not sentimental but tangible. They "had all things in common," selling possessions and goods to meet whatever needs arose among them. This was not a forced collectivism imposed from above — a later episode makes clear that the giving was voluntary, prompted by love rather than law (Peter tells Ananias the property and its proceeds had remained entirely his own to keep). It was the Spirit producing such open-handed generosity that, as Luke notes, no one among them was left in need. The early church looked at its possessions and saw not "mine" but "ours, for the sake of the family."

And there was *joy*. They met daily in the temple courts and from house to house, breaking bread "with gladness and singleness of heart, praising God and having favor with all the people." This was not a grim duty but a glad new way of being human together — a foretaste of the kingdom, a community so attractive that, day by day, the Lord added to them those who were being saved. Long before the church had buildings, budgets, or programs, it had this: people devoted to God and to one another, and the steady, daily increase that such love quietly produces.`,
    },
    {
      id: 'bold-witness-and-the-first-martyr',
      heading: 'Bold witness and the first martyr',
      body: `The peace did not last long, and Acts never pretends it should. When Peter heals a man lame from birth "in the name of Jesus Christ of Nazareth" and preaches to the gathering crowd, the authorities who had crucified Jesus only weeks before move quickly to silence his followers. Hauled before the same council, Peter and John give the answer that becomes the church\'s posture under every threat — they cannot stop speaking of what they have seen and heard. Later, ordered again to be silent, Peter says simply, "We must obey God rather than men." Threats, floggings, and prison only seem to embolden them; they leave rejoicing that they were counted worthy to suffer for the Name.

As the community grows, a practical strain — the daily distribution to widows — leads the apostles to appoint seven trusted, Spirit-filled men to serve (Acts 6). Among them is Stephen, "full of faith and of the Holy Spirit," who does great wonders and out-argues his opponents until, unable to answer him, they resort to false witnesses and drag him before the Sanhedrin. Stephen\'s defense (Acts 7) is a breathtaking sweep through Israel\'s whole story, showing that God has always worked beyond the temple and that his people have always resisted his Spirit — and now have betrayed and murdered the Righteous One himself.

It costs him his life. As the stones fall, Stephen sees heaven opened and Jesus standing at God\'s right hand, and he dies as his Lord did — praying, "Lord Jesus, receive my spirit," and then, for his killers, "Lord, don\'t hold this sin against them." He is the first Christian martyr. The Greek word for *witness*, *martys*, would come to mean exactly this: one whose testimony to Jesus is sealed in blood. And there is a detail Luke wants us to notice: the coats of those who stoned Stephen were laid "at the feet of a young man named Saul," who approved of his death. Out of that very murder, grace was about to do something no one could have imagined. As an early Christian writer would later put it, the blood of the martyrs became the seed of the church.`,
    },
    {
      id: 'the-gospel-breaks-every-barrier',
      heading: 'The gospel breaks every barrier',
      body: `Jesus\' charter in Acts 1:8 was a map: Jerusalem, then Judea and Samaria, then the ends of the earth. The persecution that erupts after Stephen\'s death becomes, ironically, the means of fulfilling it — the believers are scattered, and they "went around preaching the word" wherever they landed. Opposition does not bury the gospel; it plants it.

Watch the barriers fall, one after another. **Philip goes to Samaria** — to the very people Jews despised and avoided — and they receive the word with great joy; an ancient ethnic hatred dissolves in Christ. Then Philip is sent to a desert road to meet an **Ethiopian official**, a foreigner and a court eunuch, reading aloud from Isaiah about a lamb led to slaughter. Puzzling aloud over whom the prophet is speaking of, he is joined by Philip, who begins from that very passage and tells him the good news of Jesus. He is baptized on the spot and goes on his way rejoicing — and the gospel turns toward Africa.

The most decisive barrier of all falls in the house of **Cornelius**, a Roman centurion (Acts 10). God prepares Peter with a strange rooftop vision and the command, "What God has cleansed, you must not call unclean," teaching him that the old walls between Jew and Gentile are coming down. Peter enters a Gentile home — something a devout Jew would never do — and confesses, "Truly I perceive that God doesn\'t show favoritism." And as he preaches, the Spirit falls on the Gentiles just as at Pentecost, astonishing the Jewish believers who came with him. There is nothing left to do but baptize them. Soon, in Antioch, the rapidly mixing community of Jews and Gentiles is given a new name: the disciples are "first called Christians." Ethnic, racial, social, geographic — every line that human fear had drawn, the gospel was crossing. The love of God, it turns out, refuses to stay inside our boundaries.`,
    },
    {
      id: 'the-damascus-road',
      heading: 'The Damascus road: grace seizes an enemy',
      body: `No conversion in history has mattered more than the one Luke tells in Acts 9. Saul of Tarsus was the church\'s most dangerous enemy — a brilliant, zealous Pharisee "breathing threats and slaughter," who had approved of Stephen\'s death and was now hunting believers from house to house and securing letters to drag them in chains from distant Damascus. If anyone seemed beyond the reach of grace, it was this man.

And so grace went and got him. On the road, near midday, a light brighter than the sun flashed around him, and he fell to the ground and heard a voice: "Saul, Saul, why do you persecute me?" — "Who are you, Lord?" — "I am Jesus, whom you are persecuting." There is a staggering tenderness and authority in those words. Jesus does not say "why do you persecute my people"; he says "why do you persecute *me*," for the risen Lord is so joined to his church that to strike them is to strike him. Blinded, Saul is led by the hand into the city — the proud persecutor now helpless, waiting in the dark.

Then God calls a frightened, ordinary believer named Ananias to go and lay hands on the very man who came to arrest him. Ananias protests; God answers that this man is his "chosen vessel" to bear his name before the nations. Ananias goes, calls him "Brother Saul," and the scales fall from his eyes. He is baptized, filled with the Spirit, and at once begins to preach in the synagogues that Jesus is the Son of God. The chief persecutor becomes the chief missionary. Here is the heart of the whole book in a single story: no one is too far gone, no enemy too hardened, no past too dark for the grace of the risen Christ. If he could save Saul, he can save anyone.`,
    },
    {
      id: 'the-jerusalem-council',
      heading: 'The Jerusalem Council: grace, not law',
      body: `Success brought a crisis. As Gentiles streamed into a movement that had begun entirely Jewish, a sharp question arose: did these new believers have to be circumcised and keep the law of Moses in order to be saved? Some sincere believers insisted they did. Paul and Barnabas disagreed strongly, and so the whole church faced its first great theological dispute — and the way it handled that dispute (Acts 15) became a model for the centuries to come.

The leaders gathered in Jerusalem to weigh the matter together. Peter testified first, recalling Cornelius: God himself had given the Spirit to the Gentiles, "cleansing their hearts by faith," making no distinction between them and Jewish believers — so why lay on them a yoke that no one had ever been able to bear? "We believe that we are saved through the grace of the Lord Jesus," he said, "just as they are." Paul and Barnabas told of the signs God had done among the Gentiles. Then James, the brother of the Lord and the respected leader of the Jerusalem church, rose and showed from the prophets that God had always intended to gather the nations — and proposed that they not burden the Gentile believers, asking only for a few sensitivities that would protect fellowship at the shared table.

The conclusion was momentous: salvation is by grace, received through faith, for Jew and Gentile alike — the gospel was not to be fenced behind the law of Moses. And the *manner* of the decision is as instructive as its content. The church listened to Scripture, to firsthand testimony of what God was doing, and to one another, seeking consensus rather than coercion. Their letter to the churches carries one of the most remarkable phrases in the New Testament: "it seemed good to the Holy Spirit, and to us." Here is the church learning to discern together — not by the loudest voice or by raw authority, but by Scripture, the Spirit, and humble shared deliberation, guarding the freedom that Christ had won.`,
    },
    {
      id: 'to-the-ends-of-the-earth',
      heading: 'To the ends of the earth',
      body: `The last half of Acts follows the gospel out across the empire, mostly through the tireless journeys of Paul. It begins quietly: the church at Antioch is worshiping and fasting when the Holy Spirit says, "Separate Barnabas and Saul for me." So the first deliberate missionary journey is born — not from a committee\'s strategy but from a praying church\'s obedience. A pattern emerges that will repeat across three journeys: Paul preaches first in the synagogue, then turns to the Gentiles; some believe and others riot; churches are planted, elders appointed, and Paul moves on, often bruised, always pressing forward.

The stories along the way are unforgettable. In **Philippi**, the first convert in Europe is Lydia, a businesswoman whose heart "the Lord opened" by a river; later that night, after a beating and an earthquake, a terrified jailer asks how to be saved and hears the answer that has echoed ever since — believe in the Lord Jesus, and you and your household will be saved. In **Athens**, Paul stands amid the philosophers at the Areopagus and proclaims the God they had labeled "unknown," the Maker of all who now calls everyone to repent in light of a man he has raised from the dead. Paul gathers a remarkable company of coworkers — Silas, Timothy, the husband-and-wife team Priscilla and Aquila, and Luke himself, whose presence surfaces in the "we" passages.

At last Paul is arrested in Jerusalem, and as a Roman citizen he appeals to Caesar — which sends him, through storm and shipwreck, to Rome. And there Luke ends, almost mid-sentence: Paul in the capital of the world, under guard yet free to receive all who come, "preaching the Kingdom of God, and teaching the things concerning the Lord Jesus Christ with all boldness, without hindrance." That final Greek word — *unhindered* — is the last word of the book, and it is the point. The gospel has reached the empire\'s heart, and nothing has been able to stop it. Luke leaves the ending open on purpose. The word of God is not bound, and the next chapter belongs to the church in every generation that takes up the same Spirit and the same charge.`,
    },
  ],

  people: [
    {
      slug: 'peter',
      name: 'Peter',
      oneLine: 'The fisherman who denied Jesus, now the bold leader and first preacher of the church.',
      bio: `Simon Peter, a Galilean fisherman called by Jesus and named the "rock," stands at the center of the church\'s first chapters. The man who had denied his Lord three times is, after Pentecost, utterly transformed: he preaches the sermon that wins three thousand, heals the lame man at the temple gate, and answers the council that threatens him with the unshakable words, "We must obey God rather than men."

His most far-reaching moment comes at the house of Cornelius, where God teaches him to call no person unclean and the Spirit falls on the Gentiles — opening the door of the church to the whole world. Peter is also a steadying voice at the Jerusalem Council, testifying that Jew and Gentile alike are saved "through the grace of the Lord Jesus." In him we watch raw, impulsive love matured by failure, forgiveness, and the Spirit into courageous leadership.`,
      keyRefs: ['Acts 2:14–41', 'Acts 3:1–10', 'Acts 10:1–48', 'Acts 15:7–11'],
      appearsInActs: [12, 13],
    },
    {
      slug: 'john',
      name: 'John',
      oneLine: 'The beloved disciple, a pillar of the Jerusalem church, ever at Peter\'s side.',
      bio: `John, the son of Zebedee and brother of James, is one of the inner circle of Jesus\' disciples and a quiet but constant presence in the early chapters of Acts. He stands with Peter at the healing of the lame man and shares his arrest and bold testimony before the Sanhedrin, where the council, seeing the boldness of these ordinary, unlettered men, marvels — and recognizes that they had been with Jesus.

When the gospel reaches Samaria, John is sent with Peter to confirm the new believers there, his presence helping the whole church embrace what God was doing among a long-despised people. Paul later names him among the "pillars" of the Jerusalem church. Faithful, steady, and deeply formed by his years with Jesus, John embodies the church\'s witness carried not by spectacle but by quiet, persevering presence.`,
      keyRefs: ['Acts 3:1–11', 'Acts 4:13', 'Acts 8:14–17'],
      appearsInActs: [12, 13],
    },
    {
      slug: 'stephen',
      name: 'Stephen',
      oneLine: 'The Spirit-filled servant who became the church\'s first martyr.',
      bio: `Stephen was one of the seven men, "full of faith and of the Holy Spirit," chosen to serve the practical needs of the growing community so the apostles could devote themselves to preaching. But his gifts ran far beyond administration: full of grace and power, he did great wonders and confounded those who argued with him, until his enemies, unable to answer his wisdom, brought false charges against him.

Before the Sanhedrin he delivered a sweeping survey of Israel\'s history (Acts 7), showing that God had never been confined to one place and that his people had always resisted his Spirit — and now had betrayed the Righteous One himself. For this he was stoned to death, the first to die for the name of Jesus. As he died he saw heaven opened, entrusted his spirit to the Lord Jesus, and prayed forgiveness for his killers. Watching over the coats of the executioners stood a young man named Saul.`,
      keyRefs: ['Acts 6:5', 'Acts 6:8–15', 'Acts 7:51–60'],
      appearsInActs: [13],
    },
    {
      slug: 'philip',
      name: 'Philip',
      oneLine: 'The evangelist who carried the gospel across the first great barriers.',
      bio: `Philip — known as "the evangelist," and distinct from the apostle of the same name — was, like Stephen, one of the seven chosen to serve. When persecution scattered the Jerusalem believers, Philip went down to Samaria and proclaimed Christ there, and a city long hated by the Jews received the word with great joy. In Philip we see the gospel making its first leap across an ancient ethnic wall.

Then an angel sent him to a lonely desert road, where he met an Ethiopian court official reading the prophet Isaiah. Beginning with that very passage about the suffering servant, Philip told him the good news of Jesus; the official believed and was baptized at once, carrying the message toward Africa. Years later, Philip hosts Paul in Caesarea, where his four daughters are noted as prophesying. He is the picture of an ordinary believer whose readiness to go and to speak opened whole new frontiers for the gospel.`,
      keyRefs: ['Acts 6:5', 'Acts 8:4–13', 'Acts 8:26–40'],
      appearsInActs: [13],
    },
    {
      slug: 'paul',
      name: 'Saul / Paul',
      oneLine: 'The fierce persecutor turned apostle to the nations — the great missionary of the church.',
      bio: `Saul of Tarsus was a zealous Pharisee, educated and uncompromising, who approved of Stephen\'s death and set out to destroy the church, hunting believers from city to city. Then, on the road to Damascus, the risen Christ stopped him with a blinding light and a question — "Saul, Saul, why do you persecute me?" — and the chief enemy of the gospel became its chief ambassador.

Renamed Paul, he was set apart with Barnabas by the church at Antioch and gave the rest of his life to the mission. Across three great journeys he crossed Cyprus, Asia Minor, Greece, and finally Italy, preaching in synagogues and marketplaces, planting churches, appointing elders, and writing letters that would become a large part of the New Testament. Beaten, imprisoned, shipwrecked, and finally taken to Rome in chains, he never stopped — proclaiming to the end that no one is beyond the grace that had seized him.`,
      keyRefs: ['Acts 7:58', 'Acts 9:1–19', 'Acts 13:1–3', 'Acts 26:12–18'],
      appearsInActs: [13, 14],
    },
    {
      slug: 'barnabas',
      name: 'Barnabas',
      oneLine: 'The "son of encouragement" who vouched for Saul and partnered in the first mission.',
      bio: `Barnabas — a nickname meaning "son of encouragement," given to a Levite from Cyprus named Joseph — lives up to his name at every turn. He first appears selling a field and laying the proceeds at the apostles\' feet, a model of the early church\'s open-handed generosity. When the converted Saul arrived in Jerusalem and the believers were afraid of their former persecutor, it was Barnabas who took him in, vouched for him, and brought him to the apostles.

Sent to the booming new church in Antioch, Barnabas went and fetched Saul to help teach there, and the two were soon sent out together as the first missionary team, preaching across Cyprus and Asia Minor. Generous, trusting, and quick to believe the best, Barnabas had a gift for seeing potential others overlooked — including, later, in his young cousin John Mark, whom he refused to give up on. The church grew, in no small part, because one man kept choosing to encourage.`,
      keyRefs: ['Acts 4:36–37', 'Acts 9:26–27', 'Acts 11:22–26', 'Acts 13:1–3'],
      appearsInActs: [13],
    },
    {
      slug: 'cornelius',
      name: 'Cornelius',
      oneLine: 'The Roman centurion whose household became the first Gentile Pentecost.',
      bio: `Cornelius was a Roman centurion stationed at Caesarea, an officer of the Italian Regiment — and a man Luke describes as devout, God-fearing, generous to the poor, and constant in prayer, though he was a Gentile and an outsider to the covenant. One afternoon an angel told him to send for a man named Peter, and at the same hour God was preparing Peter, by a vision, to come.

When Peter entered his home — crossing a boundary no devout Jew would ordinarily cross — and began to preach, the Holy Spirit fell on Cornelius and all who heard, just as the Spirit had fallen at Pentecost. There was nothing left to do but baptize them. Cornelius stands as the threshold figure of the whole book: through his household, God flung open the door of the church to the entire Gentile world, proving, as Peter confessed, that "God doesn\'t show favoritism."`,
      keyRefs: ['Acts 10:1–8', 'Acts 10:24–48'],
      appearsInActs: [13],
    },
    {
      slug: 'lydia',
      name: 'Lydia',
      oneLine: 'A dealer in purple cloth whose opened heart made her the first convert in Europe.',
      bio: `Lydia was a businesswoman from Thyatira, a dealer in expensive purple cloth, living in Philippi — a worshiper of God who had not yet heard of Jesus. When Paul and his companions came to a riverside place of prayer on the Sabbath and sat down to speak with the women gathered there, Luke records that "the Lord opened her heart" to respond to Paul\'s message. She and her whole household were baptized.

Her conversion is quietly historic: she is the first recorded believer on the continent of Europe. And her response is immediate and practical — she presses the missionaries to stay in her home, and her house becomes a gathering place for the new church at Philippi. In Lydia we see how the gospel advanced: not only through dramatic sermons and signs, but through ordinary conversations by a river, and hearts gently opened by the Lord himself.`,
      keyRefs: ['Acts 16:13–15', 'Acts 16:40'],
      appearsInActs: [13],
    },
  ],

  themes: [
    {
      title: 'The Spirit empowers the church for mission',
      body: 'Acts is sometimes called "the Acts of the Holy Spirit." Jesus tells the disciples to wait for power, and everything that follows — boldness, conversions, guidance, courage under fire — flows from the Spirit poured out at Pentecost and dwelling in his people.',
    },
    {
      title: 'The gospel breaks every barrier',
      body: 'Step by step the good news crosses every line human fear had drawn — to Samaritans, an African official, a Roman household, and the whole Gentile world. In Christ there is no outsider; God, as Peter learned, shows no partiality.',
    },
    {
      title: 'Community, generosity, and worship',
      body: 'The Spirit creates a new kind of family devoted to teaching, fellowship, the breaking of bread, and prayer. They share their possessions freely, meet with glad hearts, and live a common life so winsome that it draws others daily.',
    },
    {
      title: 'Suffering and mission intertwined',
      body: 'Opposition does not stop the gospel; it spreads it. Stephen\'s death scatters witnesses far and wide, prison cells become pulpits, and the church learns to rejoice that it is counted worthy to suffer for the Name.',
    },
    {
      title: 'The unstoppable advance of the word',
      body: 'Luke keeps noting that "the word of God grew and multiplied." Through riots, councils, storms, and chains, nothing can hold it back. The book ends with the gospel preached in Rome "without hindrance" — the last word, and the lasting point.',
    },
    {
      title: 'A praying, discerning church',
      body: 'The church is born in prayer and guided by it at every turn — choosing leaders, sending missionaries, weathering prison. When hard questions arise, it discerns together by Scripture, testimony, and the Spirit, saying, "it seemed good to the Holy Spirit, and to us."',
    },
  ],

  words: [
    {
      term: 'ekklesia',
      language: 'Greek',
      gloss: '"assembly, called-out ones"',
      detail:
        'From *ek* ("out") + *kaleo* ("to call"). In ordinary Greek it named a civic assembly of citizens summoned together; the New Testament adopts it as the word for "church." It points not to a building but to a people — those called out of the world and gathered around the risen Christ. Jesus first uses it in Matthew 16:18.',
    },
    {
      term: 'pneuma',
      language: 'Greek',
      gloss: '"spirit, wind, breath"',
      detail:
        'The Greek counterpart to the Hebrew *ruach* of Genesis 1:2 — one word for spirit, wind, and breath. At Pentecost the *pneuma* of God comes with the sound of wind and tongues of fire, the very breath of God animating the church. The Spirit who hovered over the first creation now fills the new.',
    },
    {
      term: 'koinonia',
      language: 'Greek',
      gloss: '"fellowship, sharing, communion"',
      detail:
        'One of the four marks of the early church (Acts 2:42). Far deeper than friendliness, it means a shared life — common participation in the Spirit, in the apostles\' teaching, in the breaking of bread, and in one another\'s needs, including possessions. To belong to the church is to share a life, not merely attend a gathering.',
    },
    {
      term: 'martys',
      language: 'Greek',
      gloss: '"witness"',
      detail:
        'In Acts 1:8 the disciples are to be Jesus\' *martyres* — witnesses who testify to what they have seen. Stephen showed how costly such witness could be, and so the word came into English as "martyr": one whose testimony to Christ is sealed in death. To witness and to suffer are, in Acts, often the same word.',
    },
    {
      term: 'baptizo',
      language: 'Greek',
      gloss: '"to immerse, to baptize"',
      detail:
        'A word meaning to dip, immerse, or wash. Baptism is the sign by which people entered the new community (Acts 2:38, 41) — marking repentance, cleansing, and union with Christ. Christian traditions differ, charitably, over its mode and its proper recipients, but all see in it the visible doorway into the family of God.',
    },
    {
      term: 'Pentecost',
      language: 'Concept',
      gloss: '"the fiftieth day"',
      detail:
        'The Greek name for the Jewish Feast of Weeks (*Shavuot*), kept fifty days after Passover — a harvest festival, and in later tradition a remembrance of the giving of the Law at Sinai. On this day the Spirit was poured out and the church\'s great harvest began (Acts 2), gathering the nations who had come to Jerusalem for the feast.',
    },
  ],

  christ: {
    summary: `The risen and ascended Christ is the true main character of Acts. Luke\'s first volume told "all that Jesus *began* to do and to teach"; this second volume is what he *continues* to do and teach — now by his Spirit, through his church. From his throne at God\'s right hand, the exalted Jesus pours out the promised Spirit at Pentecost, and the mission that unfolds is not the church\'s project but his own: he builds his church, he opens hearts, he calls his enemy Saul by name, and he draws people from every nation to himself. To persecute the church is to persecute *him*, for the church is his body. Every sermon proclaims his death and resurrection; every conversion is the risen Lord gathering one more into his family; and his is the one name under heaven by which we are saved.`,
    links: [
      { ref: 'Acts 1:1', note: 'Luke\'s first book told all that Jesus "began" to do and teach — Acts is the risen Christ continuing his work by the Spirit through his people.' },
      { ref: 'Acts 2:33', note: 'Exalted to God\'s right hand and having received the promised Spirit, Jesus pours out what the crowd now sees and hears. Pentecost is the act of the ascended Christ.' },
      { ref: 'Matthew 16:18', note: '"I will build my church." The church is Christ\'s own building project, and the gates of Hades will not prevail against it.' },
      { ref: 'Acts 9:4–5', note: '"Saul, Saul, why do you persecute me?" — Christ so identifies with his church that to strike his people is to strike him; they are his body.' },
      { ref: 'Acts 16:14', note: '"The Lord opened her heart" — every conversion in Acts is finally the work of the risen Christ drawing a person to himself.' },
      { ref: 'Acts 4:12', note: 'There is salvation in no other name; the church\'s single, unchanging message is the saving name of Jesus.' },
    ],
  },

  memoryVerses: [
    {
      ref: 'Acts 1:8',
      text: 'But you will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth.',
      translation: 'WEB',
    },
    {
      ref: 'Acts 2:38',
      text: 'Peter said to them, "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of sins, and you will receive the gift of the Holy Spirit."',
      translation: 'WEB',
    },
    {
      ref: 'Acts 4:12',
      text: 'There is salvation in none other, for neither is there any other name under heaven that is given among men, by which we must be saved!',
      translation: 'WEB',
    },
  ],

  reflection: {
    meditation: `Be still, and breathe.

The very word for *Spirit* — *pneuma* — also means *breath*. The same God who breathed life into the first human, and who breathed his Spirit upon a frightened few until they became fearless, is as near to you as your next breath.

You do not have to manufacture courage, or carry the weight of the world\'s rescue on your own shoulders. The mission was never ours to begin; it is the risen Christ\'s, and he simply invites us to be witnesses to what we have seen and received.

Breathe in the gift you have been given. Breathe out the fear that you are not enough. The Spirit who fell at Pentecost has not run out, and the word of God is still going forward, unhindered.

Rest here a moment, and let yourself be filled.`,
    prompts: [
      'Where might the Spirit be inviting you to be a witness — not by force or argument, but by the quiet overflow of what you have received?',
      'The early church devoted itself to teaching, fellowship, the breaking of bread, and prayer. Which of these is thin in your life right now, and how might you lean into deeper *koinonia*?',
      'The gospel crossed every barrier. Who is the "Samaritan" or "Gentile" — the outsider you feel least drawn to — and what would it look like to carry good news, and good will, toward them?',
      'Saul the persecutor became Paul the apostle. Where do you most need to believe that no one is beyond the reach of grace — perhaps including yourself?',
    ],
  },

  questions: [
    {
      q: 'What exactly was Pentecost — and are its signs, like speaking in tongues, meant for today?',
      a: `Pentecost (the "fiftieth day") was the moment the Holy Spirit, promised by Jesus, was poured out on his gathered followers — marked by a sound like wind, tongues like fire, and the disciples praising God in languages they had never learned, so that pilgrims from many nations each heard the message in their own tongue. All Christians agree this was the birth of the church and the fulfillment of God\'s promise to dwell among his people.

On whether the *miraculous signs* continue today, sincere believers hold differing views, and it is worth holding them charitably. **Cessationists** believe the more spectacular gifts (such as tongues and prophecy) served to authenticate the apostolic foundation and largely ceased once that foundation was laid. **Continuationists** believe the same Spirit gives the same gifts in every age and that nothing in Scripture announces their end. Many also distinguish the Pentecost "tongues" (known human languages) from the prayer language described later in Paul\'s letters. Across these differences, all agree on the central thing: the Spirit is given to every believer, and his deepest work is not spectacle but the transforming of hearts and the empowering of witness.`,
    },
    {
      q: 'How do baptism, repentance, and the gift of the Spirit fit together?',
      a: `In Peter\'s Pentecost answer they come as one bundled response: "Repent, and be baptized... and you will receive the gift of the Holy Spirit" (Acts 2:38). Repentance is the turning of the heart, baptism is the outward sign and seal, and the Spirit is the gift of God\'s own presence — and in Acts these usually belong together as facets of one great entry into new life.

Christian traditions emphasize the relationship differently, and each is trying to honor the whole of Scripture. Some stress that the Spirit comes *through* the sign of baptism; others that the Spirit is received *by faith*, with baptism following as its joyful expression. Acts itself shows a striking variety of order: at Cornelius\'s house the Spirit falls *before* anyone is baptized, while elsewhere baptism comes first — which gently cautions us against rigid formulas. What unites believers is the conviction that God graciously gives himself to those who turn to Christ, and that baptism is the God-given doorway into his people. These differences are best discussed with humility and warmth, not suspicion.`,
    },
    {
      q: 'Is the sharing of goods in Acts 2 and 4 a model the church should follow today?',
      a: `Luke clearly holds it up as beautiful: the believers "had all things in common," sold possessions to meet needs, and as a result no one among them was left in want. This radical generosity is presented as a fruit of the Spirit and a mark of genuine love — and a standing rebuke to any faith that leaves the poor unhelped.

At the same time, a closer look suggests it was *voluntary*, not coerced or communal in a legal sense. When Peter confronts Ananias, he points out that the property and its proceeds had remained entirely his own to keep or give; the sin was deceit, not the choice to retain it. So most Christians read these chapters not as a binding economic blueprint but as a vivid portrait of Spirit-prompted, open-handed love — people who looked at "mine" and saw "ours, for the family." How that generosity takes shape will differ across times and places, but its heart is not optional: the gospel always loosens our grip on possessions and turns us toward our neighbor\'s need.`,
    },
    {
      q: 'How did such a small, powerless movement spread so quickly?',
      a: `By every worldly measure the early church should have vanished: a few hundred followers of an executed teacher, without wealth, armies, political power, or social standing, facing the hostility of both temple and empire. Yet within a generation it had reached Rome, and within a few centuries the wider Roman world.

Acts gives a theological answer first — the Holy Spirit, poured out and driving the mission. But it also lets us see the human means God used: bold, joyful witnesses who could not stop telling what they had seen; a love that crossed every social barrier and cared for the poor, the sick, and the outsider; communities so distinct and so welcoming that people were drawn in; and a willingness to suffer that proved the message was believed. Persecution, far from crushing the movement, scattered its witnesses and spread the seed. Historians point to these very traits — the care for the vulnerable, the dignity given to the lowly, the courage in dying — as part of why the church grew. Believers would simply add: behind all of it was the risen Christ, building his church.`,
    },
    {
      q: 'What was the Jerusalem Council, and what does it show about how the church makes decisions?',
      a: `The Jerusalem Council (Acts 15) gathered the church\'s leaders to settle its first great controversy: whether Gentile converts had to be circumcised and keep the law of Moses to be saved. After much discussion, they concluded that salvation is by grace through faith for Jew and Gentile alike, and that the law was not to be laid as a burden on the Gentile believers — guarding the very freedom of the gospel.

Just as instructive is *how* they decided. They did not settle it by the loudest voice, by raw authority, or by an angry split. They listened to firsthand testimony of what God was doing (Peter, Paul, and Barnabas), they searched the Scriptures (James citing the prophets), and they sought a consensus the whole church could own. Their letter\'s remarkable phrase — "it seemed good to the Holy Spirit, and to us" — captures a model the church has returned to ever since: discernment through Scripture, the witness of the Spirit, and humble deliberation together. Christian traditions order these authorities somewhat differently, but Acts 15 remains a treasured picture of a church seeking the mind of Christ as a body, in unity and grace.`,
    },
  ],

  glossaryRefs: ['ekklesia', 'pneuma', 'koinonia', 'martys', 'baptizo', 'pentecost'],
};

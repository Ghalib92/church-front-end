import { useParams, Link } from "react-router-dom";
import { useSpeechSynthesis } from "../hooks/useSpeechSynthesis";
import { cleanTextForDisplay } from "../lib/text-utils";

const SERMONS = [
  {
    id: 1,
    title: "Walking in Faith",
    speaker: "Pastor James Mitchell",
    date: "April 13, 2026",
    series: "Foundations",
    description:
      "Exploring what it means to trust God when the path ahead is unclear, and how faith transforms our daily decisions.",
    fullDescription: `What does it really mean to walk in faith? It's not about having all the answers or seeing the entire path before you. Walking in faith is about trusting God's character and following Him one step at a time, even when you can't see where the path leads.

In Hebrews 11:1, we're told that "faith is the assurance of things hoped for, the conviction of things not seen." Faith isn't blind—it's based on God's proven track record and His character. When we understand who God is and what He's done, we can trust Him with what we don't understand.

Throughout Scripture, we see examples of people who walked in faith:
- Abraham left his home not knowing where he was going
- Moses led the Israelites through the wilderness
- Ruth followed her mother-in-law to a foreign land
- Mary accepted God's plan even when it seemed impossible

What these stories show us is that faith often involves:
- **Risk:** Taking steps that others might think are unwise
- **Vulnerability:** Admitting we don't have all the answers
- **Trust:** Believing God's Word even when circumstances suggest otherwise
- **Obedience:** Following God's direction even when we'd prefer a different path

The beautiful thing about walking in faith is that we never walk alone. God promises His presence, His guidance, and His provision.

**How do we walk in faith today?**
- Read God's Word and let it shape your understanding of who He is
- Pray and ask God for wisdom and direction
- Seek counsel from mature believers
- Take one step at a time rather than demanding to see the entire picture
- Trust God with the outcomes

Whatever you're facing today—a job change, a relational struggle, a health crisis, a financial uncertainty—God invites you to walk in faith. Not faith in positive thinking or positive outcomes, but faith in the God who is faithful.`,
    scripture: "Hebrews 11:1-6",
    video: "https://example.com/walking-in-faith",
    audio: "https://example.com/walking-in-faith.mp3",
  },
  {
    id: 2,
    title: "The Power of Prayer",
    speaker: "Pastor James Mitchell",
    date: "April 6, 2026",
    series: "Foundations",
    description:
      "Discovering the depth and purpose of prayer — not as a last resort, but as our first response in every season.",
    fullDescription: `Prayer is one of the greatest privileges we have as believers. Yet many of us treat it as a last resort—we pray when everything else has failed, when we're desperate, when we don't know what else to do. But Jesus invites us to make prayer our first response, not our last one.

Why is prayer so powerful?

**Prayer acknowledges God's authority.** When we pray, we're declaring that God is bigger than our problems, that He has wisdom we don't possess, and that He's worthy of our trust.

**Prayer aligns us with God's will.** Through prayer, we submit our desires to God's purposes and invite Him to shape our thinking and actions.

**Prayer demonstrates faith.** Prayer says, "I believe God can do something I cannot. I trust Him."

**Prayer connects us to God's power.** Paul tells us that we wrestle "not against flesh and blood, but against the powers of this dark world." Prayer mobilizes God's power on our behalf.

But here's what's interesting: prayer isn't about informing God of things He doesn't know or convincing Him to do what we want. Instead, prayer is:
- Confession of our dependence on God
- Expression of our faith
- Alignment with God's character and purposes
- Invitation for God to work in and through us

**Different Types of Prayer:**
- **Adoration:** Worshiping God for who He is
- **Confession:** Admitting our sins and shortcomings
- **Thanksgiving:** Expressing gratitude
- **Supplication:** Making requests
- **Intercession:** Praying for others

**Prayer Practices:**
- **Daily quiet time:** Set aside time to read Scripture and pray
- **Prayer walking:** Pray while walking through your neighborhood
- **Fasting and prayer:** Combine prayer with fasting for deeper spiritual focus
- **Prayer journaling:** Write out your prayers
- **Corporate prayer:** Pray with others in church or small groups

The disciples asked Jesus, "Lord, teach us to pray." He responded with what we call the Lord's Prayer—a model showing us how to approach God.

Prayer is available to you right now. Whatever you're facing, whatever you're celebrating, whatever you need—you can bring it to God in prayer.`,
    scripture: "Matthew 6:5-15, 1 Thess 5:17",
    video: "https://example.com/power-of-prayer",
    audio: "https://example.com/power-of-prayer.mp3",
  },
  {
    id: 3,
    title: "Love Your Neighbor",
    speaker: "David Chen",
    date: "March 30, 2026",
    series: "Living It Out",
    description:
      "Jesus gave us a simple command: love your neighbor. But what does that look like in today's world?",
    fullDescription: `Jesus made it clear: loving God and loving others are inseparable. In fact, He summarized all of Scripture into two commandments: "Love the Lord your God with all your heart...and love your neighbor as yourself."

But here's the question: who is our neighbor?

When Jesus told the parable of the Good Samaritan, He flipped the script. In that story, a Samaritan—someone who was despised and rejected by Jewish culture—showed compassion to a man in need, while religious leaders passed by. Jesus's point was clear: your neighbor is anyone who is in need, anyone you encounter, anyone who is different from you.

In today's world, loving your neighbor is more complex than ever:
- Your neighbor might be someone of a different race, religion, or political view
- Your neighbor might be unhoused or struggling financially
- Your neighbor might be someone you'd normally try to avoid
- Your neighbor might be someone who has hurt you

**What does loving your neighbor look like?**
- **Listen:** Seek to understand their perspective
- **Show kindness:** Small acts of compassion matter
- **Meet needs:** If someone is hungry, feed them. If they need help, help them.
- **Include:** Welcome people who are on the margins
- **Forgive:** Let go of grudges and extend grace
- **Speak truth:** Sometimes love means speaking difficult truths with kindness
- **Serve:** Look for ways to serve others

**The Hard Part:**
Loving your neighbor isn't just about people you naturally like or people who are like you. It's about extending love to:
- Political opponents
- Difficult family members
- People whose beliefs you disagree with
- People who have wronged you
- Strangers
- The vulnerable and marginalized

This kind of love is only possible through Jesus Christ. His love transforms us and enables us to love others, even when it's difficult.

**This Week:**
Ask God to show you someone who needs to experience His love through you. Maybe it's a neighbor you haven't talked to in years. Maybe it's someone at work. Maybe it's someone in need. Then show them love—through a conversation, a meal, help, or service.

When we love our neighbors, we're not just being nice—we're reflecting Jesus to the world.`,
    scripture: "Luke 10:25-37, Matt 22:37-40",
    video: "https://example.com/love-your-neighbor",
    audio: "https://example.com/love-your-neighbor.mp3",
  },
  {
    id: 4,
    title: "Finding Peace in the Storm",
    speaker: "Pastor James Mitchell",
    date: "March 23, 2026",
    series: "Living It Out",
    description:
      "When life gets overwhelming, where do we turn? A look at the peace that surpasses all understanding.",
    fullDescription: `When storms come—and they will—our first instinct is often to panic. We want to fix things, to control the situation, to make the fear go away. But Jesus invites us to something different. He offers us His peace, which Paul describes as "peace that surpasses all understanding."

In Mark 4, we see the disciples in a boat during a fierce storm. Jesus is asleep in the boat. The disciples are terrified, convinced they're about to die. They wake Jesus, and He asks them, "Why are you afraid? Do you still have no faith?"

Then He speaks to the wind and waves: "Peace! Be still!" And the storm ceases.

What's remarkable about this story isn't just that Jesus calmed the storm. It's that He taught the disciples something about peace: true peace doesn't always come from the storm going away. Sometimes peace comes even in the midst of the storm.

**How Do We Find Peace in the Storm?**

**Remember God's faithfulness in the past.** When you're in a difficult season, look back at how God has sustained you, guided you, and provided for you. His track record gives us reason to trust Him now.

**Fix your mind on truth, not fear.** Our anxious thoughts—"What if this happens? What if I fail? What if I lose my job?"—are often more powerful than truth. Paul tells us to fix our minds on "whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable."

**Trust God's sovereignty.** God isn't surprised by the storms in your life. He permits them for reasons—sometimes to deepen your faith, sometimes to teach you dependence on Him, sometimes to prepare you for future ministry.

**Seek community.** You don't have to face storms alone. God designed us to support and encourage one another. Share your struggles with trusted friends and church community.

**Practice gratitude.** Even in difficult seasons, we can find things to be grateful for. Gratitude shifts our perspective and reminds us of God's goodness.

**Draw near to God.** Prayer, Scripture reading, worship, and time in His presence are stabilizing forces during storms.

**Take action.** Sometimes "casting your cares on God" means also doing your part—getting professional counsel, making wise decisions, taking care of your health, etc.

The beautiful truth is that the God who calms storms is with you in them. Jesus doesn't promise that we won't face difficult seasons. But He does promise His presence and His peace.`,
    scripture: "Mark 4:35-41, Phil 4:6-7",
    video: "https://example.com/peace-in-storm",
    audio: "https://example.com/peace-in-storm.mp3",
  },
  {
    id: 5,
    title: "Created for Community",
    speaker: "Sarah Thompson",
    date: "March 16, 2026",
    series: "Together",
    description:
      "We were never meant to walk alone. Exploring the biblical foundation for genuine, life-giving community.",
    fullDescription: `From the very beginning of Scripture, we see God's heart for community. "It is not good for man to be alone," God says in Genesis. Even before sin entered the world, God created humanity for relationship—with Him and with others.

Yet in our modern world, loneliness is epidemic. We have more "friends" on social media than ever before, yet we feel more isolated and disconnected than previous generations.

**Why does God value community so much?**

**We're made in God's image.** God Himself exists in perfect community as Father, Son, and Holy Spirit. When we experience genuine community, we're reflecting God's nature.

**We're weak alone.** Ecclesiastes 4:9-10 tells us, "Two are better than one...if one falls down, his friend can help him up."

**Community sharpens us.** "As iron sharpens iron, so one person sharpens another." We grow spiritually when we're in relationship with others who are also pursuing Jesus.

**We're called to bear one another's burdens.** Christianity isn't an individual sport—it's a team activity.

**What makes genuine community?**

**Vulnerability.** Being willing to share not just the highlight reel, but your real struggles, failures, and questions.

**Consistency.** Showing up regularly, not just when it's convenient or when you need something.

**Acceptance.** Welcoming people as they are, not as you think they should be.

**Service.** Looking for ways to serve others' needs without keeping score.

**Prayer.** Praying for one another and with one another.

**Honesty.** Telling the truth in love, even when it's uncomfortable.

**Fun.** Laughing together, celebrating together, enjoying life together.

**Where do we find community?**
- Local church (Sunday services, small groups, classes)
- Bible studies
- Volunteer service opportunities
- Neighborhood connections
- Mentoring relationships
- Online communities (though these work best alongside in-person connection)

**If you're isolated, take a step:**
- Join a small group
- Volunteer to serve
- Attend a church event
- Reach out to one person you've been wanting to connect with
- Say yes to an invitation

Community doesn't happen automatically—it requires intentionality. But the investment is worth it. When you experience genuine community, you'll realize that God knew exactly what He was doing when He said, "It is not good for man to be alone."`,
    scripture: "Genesis 2:18, Hebrews 10:24-25, Eccl 4:9-10",
    video: "https://example.com/created-for-community",
    audio: "https://example.com/created-for-community.mp3",
  },
  {
    id: 6,
    title: "Grace That Transforms",
    speaker: "Pastor James Mitchell",
    date: "March 9, 2026",
    series: "Together",
    description:
      "Understanding how God's unmerited favor doesn't just save us — it changes everything about how we live.",
    fullDescription: `Grace is the foundation of everything in Christianity. It's God's unmerited favor, His gift that we don't deserve and can't earn. But here's what many believers don't fully understand: God's grace isn't just for salvation. It's a transforming force that changes how we live every single day.

**What is grace?**

Grace is God extending favor to us that we don't deserve. We deserve punishment for our sins, but God offers forgiveness and restoration. That's grace.

Paul writes in Ephesians 2:8-9: "For by grace you have been saved through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast."

But here's the thing: grace isn't just about initial salvation. It's about God's ongoing, daily empowerment to live the Christian life.

**How does grace transform us?**

**Grace frees us from shame.** We no longer have to carry the weight of our past failures. Jesus paid the penalty, and God offers complete forgiveness.

**Grace humbles us.** When we truly understand that salvation is a gift, not a reward for our goodness, it keeps us humble. We can't boast about our spiritual standing.

**Grace empowers us.** We don't live the Christian life through willpower or self-effort. We live it through the grace of God that works in and through us.

**Grace enables forgiveness.** Because we've been forgiven much, we're able to extend forgiveness to others.

**Grace changes our identity.** We're no longer "sinners trying to be good." We're beloved children of God, accepted and cherished.

**Grace produces spiritual fruit.** "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control..." These aren't things we produce through effort—they're the fruit of being transformed by grace.

**The difference between grace and works:**

Legalism says, "If you're good enough, God will accept you."
Grace says, "God has accepted you through Jesus. Live in response to that acceptance."

Legalism focuses on external behavior.
Grace transforms from the inside out.

Legalism produces fear and shame.
Grace produces gratitude and freedom.

**Living in grace:**
- Receive God's forgiveness for your past
- Accept God's acceptance of you, right now, as you are
- Let go of perfectionism
- Extend grace to others
- Rest in God's work rather than striving in your own effort
- Grow from a place of security, not fear

The transformation that grace produces doesn't happen through rules and requirements. It happens as we encounter God's love and let it reshape us from the inside out.

That's why we call it good news.`,
    scripture: "Ephesians 2:8-9, Galatians 5:22-23, 2 Corinthians 12:9",
    video: "https://example.com/grace-that-transforms",
    audio: "https://example.com/grace-that-transforms.mp3",
  },
] as const;

export function SermonDetailPage() {
  const { id } = useParams<{ id: string }>();
  const sermonId = id ? parseInt(id, 10) : null;
  const sermon = SERMONS.find((s) => s.id === sermonId);
  const { isPlaying, isPaused, speak, cancel, togglePlayPause } = useSpeechSynthesis();

  if (!sermon) {
    return (
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Sermon Not Found
          </h1>
          <Link
            to="/sermons"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700"
          >
            Back to Sermons
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header with Image */}
      <section className="relative">
        <div className="absolute inset-0 h-96 md:h-[500px] overflow-hidden">
          <img
            src={`/sermon${sermon.id}.jpeg`}
            alt={sermon.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 pt-20 pb-32 md:py-40">
          <Link
            to="/sermons"
            className="inline-flex items-center gap-2 text-white hover:text-gray-200 mb-6 font-semibold text-sm backdrop-blur-sm bg-white/10 rounded-full px-4 py-2"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Sermons
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
              {sermon.series}
            </span>
            <span className="text-xs text-white/80">{sermon.date}</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {sermon.title}
          </h1>
          <p className="mt-6 text-lg text-white/90">By {sermon.speaker}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Scripture */}
          <div className="rounded-xl bg-primary-50 border border-primary-100 p-6 mb-12">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">
              Scripture Text
            </p>
            <p className="text-lg font-semibold text-primary-700">
              {sermon.scripture}
            </p>
          </div>

          {/* Sermon Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {sermon.fullDescription.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="mb-6 leading-relaxed text-gray-600">
                {cleanTextForDisplay(paragraph)}
              </p>
            ))}
          </div>

          {/* Audio & Video CTAs */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {isPlaying || isPaused ? (
                <>
                  <div className="flex items-center gap-3 rounded-lg bg-primary-50 border-2 border-primary-600 px-6 py-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-700 mb-3">
                        Now Reading: {sermon.title}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={togglePlayPause}
                          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-700"
                        >
                          {isPaused ? (
                            <>
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                              Resume
                            </>
                          ) : (
                            <>
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                              </svg>
                              Pause
                            </>
                          )}
                        </button>
                        <button
                          onClick={cancel}
                          className="flex items-center justify-center gap-2 rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-600 transition-all hover:bg-red-50"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center justify-center gap-3 rounded-lg bg-primary-600 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-primary-700">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch Sermon
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => speak(sermon.fullDescription)}
                    className="flex items-center justify-center gap-3 rounded-lg border-2 border-primary-600 px-6 py-4 text-base font-semibold text-primary-600 transition-all hover:bg-primary-50"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Listen to Sermon
                  </button>
                  <button className="flex items-center justify-center gap-3 rounded-lg bg-primary-600 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-primary-700">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch Sermon
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Share & Resources */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-primary-600 hover:text-primary-600">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Notes
            </button>
            <button className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-primary-600 hover:text-primary-600">
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.31c0-2.73 1.65-4.23 4.13-4.23 1.17 0 2.18.09 2.47.13v2.86h-1.7c-1.33 0-1.59.63-1.59 1.56V9.25h3.18l-4.11 3.54v7.21H8.29z" />
              </svg>
              Share
            </button>
          </div>

          {/* Related Sermons */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              More from {sermon.series} Series
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERMONS.filter((s) => s.series === sermon.series && s.id !== sermon.id)
                .slice(0, 2)
                .map((relatedSermon) => (
                  <Link
                    key={relatedSermon.id}
                    to={`/sermon/${relatedSermon.id}`}
                    className="group rounded-xl border border-gray-200 bg-white p-6 hover:border-primary-200 hover:shadow-md transition-all"
                  >
                    <p className="text-xs font-semibold text-primary-600 uppercase mb-2">
                      {relatedSermon.date}
                    </p>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                      {relatedSermon.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2">
                      {relatedSermon.speaker}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

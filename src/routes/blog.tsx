import { Link } from "react-router-dom";
import { cleanTextForDisplay } from "../lib/text-utils";

const BLOGS = [
  {
    id: 1,
    title: "Finding God's Purpose in Your Daily Life",
    author: "Pastor James Mitchell",
    date: "April 15, 2026",
    category: "Devotional",
    excerpt:
      "Does it feel like you're just going through the motions? Every day presents an opportunity to discover and live out God's unique purpose for your life. Learn how small, intentional decisions can shape your spiritual journey and lead to profound meaning and fulfillment.",
    content: `Every day presents an opportunity to discover and live out God's purpose for your life. Whether you're facing a major decision or navigating everyday challenges, God's Word offers guidance and wisdom for the journey ahead.

In today's world, it's easy to get caught up in the noise and lose sight of what truly matters. We're constantly bombarded with messages about success, achievement, and personal fulfillment. But the Bible offers us a different perspective—one that centers on serving God and others.

What does it mean to live with purpose? It means waking up each morning with clarity about why you exist and what God is calling you to do. It's about aligning your daily decisions—from how you spend your time to how you treat others—with God's values and calling.

When we seek God's purpose first, everything else falls into place. It doesn't mean life becomes easy, but it becomes meaningful. Your work, your relationships, your struggles—all of these can become part of God's greater plan when you align your heart with His.

**How to Discover God's Purpose**

Take time this week to pray and ask God to show you His purpose. Listen for His voice in Scripture, in the wisdom of mature believers, and in the circumstances He allows in your life. You might be surprised at how clearly He reveals His plans when you're genuinely seeking Him.

Remember, God's purpose for you isn't about being perfect or having it all figured out. It's about being faithful with what you've been given and trusting Him with the future.`,
    image: "blog1.jpeg",
  },
  {
    id: 2,
    title: "The Power of Community in Your Faith Journey",
    author: "Sarah Thompson",
    date: "April 8, 2026",
    category: "Community",
    excerpt:
      "Feeling isolated in your faith? God designed us for community, not isolation. Discover how connecting with other believers strengthens your faith and transforms your spiritual growth in ways that solitary faith simply cannot achieve.",
    content: `God designed us for community, not isolation. From the very beginning of Scripture, we see God's heart for His people to live in relationship with one another. The early church understood this beautifully—they lived together, shared meals, prayed together, and supported one another through every season.

Yet in our modern age, it's increasingly easy to feel alone, even when surrounded by people. Social media gives us the illusion of connection while leaving us feeling empty. We need something deeper—genuine, authentic community where we can be known and loved as we truly are.

This is one of the greatest gifts that Grace Church offers. When you join a small group, serve alongside other believers, or simply gather for worship, you're tapping into something powerful. You're experiencing the body of Christ in action.

**What Real Community Looks Like**

Real community means:
- Being vulnerable about your struggles and asking for help
- Celebrating others' victories as your own
- Showing up in times of need, not just when it's convenient
- Offering grace when people fall short
- Growing together in faith through honest conversations

When you experience community, you realize you don't have to figure out life alone. Others have walked similar paths. Others have faced doubt, loss, and uncertainty. And in sharing those experiences, we find strength, wisdom, and hope.

If you've been feeling isolated, I encourage you to take a step this week. Join a Bible study, attend a community event, or reach out to someone you've been wanting to connect with. Your faith journey will be forever changed by the power of genuine community.`,
    image: "blog2.jpeg",
  },
  {
    id: 3,
    title: "Overcoming Fear with Faith",
    author: "David Chen",
    date: "April 1, 2026",
    category: "Encouragement",
    excerpt:
      "Paralyzed by fear? Whether it's fear of failure, rejection, or the unknown, fear can keep us stuck in place. Learn how to replace fear with faith and discover the freedom that comes from trusting God completely.",
    content: `Fear is one of the most powerful emotions we experience. It can paralyze us, keep us from pursuing our dreams, and rob us of joy. Many people live their entire lives controlled by fear—fear of failure, fear of rejection, fear of the unknown.

But the Bible speaks directly to our fears. Over and over, we see the command: "Do not be afraid." This isn't a command to suppress our emotions or pretend everything is okay. Rather, it's an invitation to shift our focus from our circumstances to God's character.

When we truly believe that God is with us, that He's bigger than our problems, and that He works all things together for good, fear loses its power. This doesn't mean we won't still experience fear—we're human. But it means we don't have to let fear dictate our decisions.

**Practical Steps to Overcome Fear**

Remember God's faithfulness. Look back at how God has come through for you in the past. His track record in your life is evidence of His care.

Meditate on Scripture. God's Word is full of promises about His protection and provision. Fill your mind with truth rather than fearful thoughts.

Share your fears with others. Vulnerability in community helps us realize we're not alone. Others have faced similar fears and found courage.

Take action despite fear. Faith isn't passive; it's moving forward even when we're afraid. Sometimes courage is just fear-based action.

Pray and surrender. Bring your fears to God and trust Him with the outcome, not your own strength.

Whatever you're facing today, you don't have to face it alone. God is with you, and He is greater than every fear you might encounter.`,
    image: "blog3.jpeg",
  },
  {
    id: 4,
    title: "Generosity: Blessing Others Changes Us",
    author: "Pastor James Mitchell",
    date: "March 25, 2026",
    category: "Teaching",
    excerpt:
      "Discover the surprising truth that generosity isn't just about blessing others—it fundamentally transforms the giver. When we learn to give freely, we unlock doors to joy, freedom, and spiritual growth.",
    content: `When we think of generosity, we often think about giving to those in need. But something remarkable happens when we give—we're transformed in the process. Generosity isn't just about charity; it's about a fundamental shift in how we view our resources and our purpose.

Jesus taught that it's more blessed to give than to receive. This isn't a guilt trip or a prosperity formula—it's a spiritual truth. When we release our grip on our possessions, our time, and our talents, we're freed from the chains of selfish ambition and greed.

**Forms of Generosity**

Generosity comes in many forms:
- Financial giving to those in need or worthy causes
- Time and talents serving others
- Emotional support for those struggling
- Forgiveness when we've been wronged
- Hospitality welcoming others into our homes and hearts

The paradox of generosity is that the more we give, the more blessed we become. When we trust God with our resources, nothing is more secure. When we invest in others, we're investing in eternity.

At Grace Church, we believe in the power of generosity. That's why we encourage everyone to participate according to their means. Whether you're giving five dollars or five hundred dollars, the heart behind the gift is what matters to God.

This week, look for one opportunity to be generous. It might be buying lunch for someone experiencing homelessness, sending an encouraging text to a friend who's struggling, volunteering your time to help with a project, or simply listening to someone who needs to talk. Watch how God uses your generosity to bless not just others, but yourself as well.`,
    image: "blog4.jpeg",
  },
  {
    id: 5,
    title: "Praying Through the Seasons of Life",
    author: "Sarah Thompson",
    date: "March 18, 2026",
    category: "Devotional",
    excerpt:
      "Your prayers don't need to follow a formula. In seasons of joy, struggle, waiting, and loss, discover how to pray authentically and find God's presence in every season of life.",
    content: `Prayer looks different in different seasons of life. In seasons of joy, we pray with gratitude and celebration. In seasons of struggle, we cry out for help and understanding. In seasons of waiting, we learn patience and trust. In seasons of loss, we mourn and process our grief.

Sometimes Christians feel like they need to maintain a "spiritual" tone in prayer. We think there's a right way to pray, and we worry about saying the wrong thing. But God invites us to be authentic with Him. He can handle our questions, our doubts, our anger, and our disappointment.

**Prayers for Every Season**

The Psalms are full of raw, honest prayers. The psalmist cries out in fear, questions God's plan, celebrates victories, and mourns losses. And these prayers are recorded in Scripture as examples for us.

In seasons of joy: Let your prayers be full of gratitude and praise. Don't rush through blessings; savor them and thank God.

In seasons of struggle: Don't pretend everything is okay. Bring your pain to God. He wants to comfort you and walk with you.

In seasons of waiting: Practice patience and trust. Pray for strength to endure and faith to believe God's promises.

In seasons of loss: Grieve, yes, but grieve as one who has hope. God grieves with us and holds us in our sorrow.

Whatever season you're in, God invites you to pray. Not the prayers you think you should pray, but the honest prayers of your heart. That's when prayer becomes real, and that's when we truly encounter God.`,
    image: "blog5.jpeg",
  },
  {
    id: 6,
    title: "Living Out Your Faith in the Workplace",
    author: "David Chen",
    date: "March 11, 2026",
    category: "Practical",
    excerpt:
      "Your faith shouldn't stay at church on Sunday. Learn practical ways to live out your Christian values in your professional life and be a light in your workplace.",
    content: `Your faith shouldn't stay at church on Sunday. Many believers struggle with how to integrate their faith into their work life. We spend so much time at work—it's one of the primary places where we can live out our faith and influence others.

Living out your faith at work doesn't mean being preachy or unprofessional. It means allowing your Christian values to shape how you work, how you treat others, and how you make decisions.

**Keys to Workplace Faith**

Integrity: Do your work with excellence and honesty. Keep your word. Don't cut corners or compromise your ethics for profit or advancement.

Respect: Treat all people with dignity, regardless of their position or background. Remember that everyone is made in God's image.

Kindness: Be known as someone who genuinely cares about people. Listen to your coworkers. Show compassion and understanding.

Excellence: Whatever you do, do it well. Your work is a reflection of your faith and your God. Excellence honors God.

Boundaries: It's okay to protect your time and energy. You can be a faithful employee and still prioritize your family and spiritual life.

Witness: Let your consistent character and values speak louder than words. Be ready to share your faith when opportunities arise naturally.

Your workplace is a mission field. God has placed you there for a reason. As you live out your faith with integrity and love, you'll be amazed at the impact you can have.`,
    image: "blog6.jpeg",
  },
] as const;

export function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            New Articles
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Church Blog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            Spiritual insights, practical guidance, and encouragement for your
            faith journey. Explore articles on a variety of topics to help you
            grow closer to God.
          </p>
        </div>
      </section>

      {/* Blog list */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="group rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm transition-all hover:shadow-lg hover:border-primary-200 flex flex-col h-full"
              >
                {/* Image */}
                <div className="overflow-hidden h-48 bg-gray-100">
                  <img
                    src={`/blog${blog.id}.jpeg`}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-400">{blog.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors line-clamp-2 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{blog.author}</p>

                  <p className="text-sm leading-relaxed text-gray-600 line-clamp-3 mb-4 flex-1">
                    {cleanTextForDisplay(blog.excerpt)}
                  </p>

                  <div className="flex items-center gap-2 pt-2 text-primary-700 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

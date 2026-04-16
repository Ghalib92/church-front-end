import { useParams, Link } from "react-router-dom";
import { cleanTextForDisplay } from "../lib/text-utils";

const BLOGS = [
  {
    id: 1,
    title: "Finding God's Purpose in Your Daily Life",
    author: "Pastor James Mitchell",
    date: "April 15, 2026",
    category: "Devotional",
    excerpt:
      "Every day presents an opportunity to discover and live out God's purpose for your life. Learn how small decisions can shape your spiritual journey...",
    content: `Every day presents an opportunity to discover and live out God's purpose for your life. Whether you're facing a major decision or navigating everyday challenges, God's Word offers guidance and wisdom.

In today's world, it's easy to get caught up in the noise and lose sight of what truly matters. We're constantly bombarded with messages about success, achievement, and personal fulfillment. But the Bible offers us a different perspective—one that centers on serving God and others.

When we seek God's purpose first, everything else falls into place. It doesn't mean life becomes easy, but it becomes meaningful. Your work, your relationships, your struggles—all of these can become part of God's greater plan when you align your heart with His.

Take time this week to pray and ask God to show you His purpose. Listen for His voice in Scripture, in the wisdom of mature believers, and in the circumstances He allows in your life. You might be surprised at how clearly He reveals His plans when you're genuinely seeking Him.

Remember, God's purpose for you isn't about being perfect or having it all figured out. It's about being faithful with what you've been given and trusting Him with the future.`,
    image: "about_page_hero.avif",
  },
  {
    id: 2,
    title: "The Power of Community in Your Faith Journey",
    author: "Sarah Thompson",
    date: "April 8, 2026",
    category: "Community",
    excerpt:
      "God designed us for community, not isolation. Discover how connecting with other believers strengthens your faith and transforms your spiritual growth...",
    content: `God designed us for community, not isolation. From the very beginning of Scripture, we see God's heart for His people to live in relationship with one another. The early church understood this beautifully—they lived together, shared meals, prayed together, and supported one another through every season.

Yet in our modern age, it's increasingly easy to feel alone, even when surrounded by people. Social media gives us the illusion of connection while leaving us feeling empty. We need something deeper—genuine, authentic community where we can be known and loved as we truly are.

This is one of the greatest gifts that Grace Church offers. When you join a small group, serve alongside other believers, or simply gather for worship, you're tapping into something powerful. You're experiencing the body of Christ in action.

Real community means:
- Being vulnerable about your struggles
- Celebrating others' victories as your own
- Showing up in times of need
- Offering grace when people fall short
- Growing together in faith

If you've been feeling isolated, I encourage you to take a step this week. Join a Bible study, attend a community event, or reach out to someone you've been wanting to connect with. Your faith journey will be forever changed by the power of genuine community.`,
    image: "ec-eteams-header-new.avif",
  },
  {
    id: 3,
    title: "Overcoming Fear with Faith",
    author: "David Chen",
    date: "April 1, 2026",
    category: "Encouragement",
    excerpt:
      "Fear is one of the most powerful emotions we experience. But the Bible offers us a powerful antidote: faith. Learn how to replace fear with trust in God...",
    content: `Fear is one of the most powerful emotions we experience. It can paralyze us, keep us from pursuing our dreams, and rob us of joy. Many people live their entire lives controlled by fear—fear of failure, fear of rejection, fear of the unknown.

But the Bible speaks directly to our fears. Over and over, we see the command: "Do not be afraid." This isn't a command to suppress our emotions or pretend everything is okay. Rather, it's an invitation to shift our focus from our circumstances to God's character.

When we truly believe that God is with us, that He's bigger than our problems, and that He works all things together for good, fear loses its power. This doesn't mean we won't still experience fear—we're human. But it means we don't have to let fear dictate our decisions.

How can we overcome fear?

**Remember God's faithfulness.** Look back at how God has come through for you in the past.

**Meditate on Scripture.** God's Word is full of promises about His protection and provision.

**Share your fears with others.** Vulnerability in community helps us realize we're not alone.

**Take action despite fear.** Faith isn't passive; it's moving forward even when we're afraid.

**Prayer and surrender.** Bring your fears to God and trust Him with the outcome.

Whatever you're facing today, you don't have to face it alone. God is with you, and He is greater than every fear you might encounter.`,
    image: "home_page_get_involved__careers.avif",
  },
  {
    id: 4,
    title: "Generosity: Blessing Others Changes Us",
    author: "Pastor James Mitchell",
    date: "March 25, 2026",
    category: "Teaching",
    excerpt:
      "When we think of generosity, we often think about giving to those in need. But generosity is also transformative for the giver. Discover why...",
    content: `When we think of generosity, we often think about giving to those in need. But something remarkable happens when we give—we're transformed in the process. Generosity isn't just about charity; it's about a fundamental shift in how we view our resources and our purpose.

Jesus taught that it's more blessed to give than to receive. This isn't a guilt trip or a prosperity formula—it's a spiritual truth. When we release our grip on our possessions, our time, and our talents, we're freed from the chains of selfish ambition and greed.

Generosity comes in many forms:
- **Financial giving** to those in need or worthy causes
- **Time and talents** serving others
- **Emotional support** for those struggling
- **Forgiveness** when we've been wronged
- **Hospitality** welcoming others into our homes and hearts

The paradox of generosity is that the more we give, the more blessed we become. When we trust God with our resources, nothing is more secure. When we invest in others, we're investing in eternity.

At Grace Church, we believe in the power of generosity. That's why we encourage everyone to participate according to their means. Whether you're giving $1 or $100, the heart behind the gift is what matters.

This week, look for one opportunity to be generous. It might be buying lunch for a homeless person, sending an encouraging text to a friend, or volunteering your time. Watch how God uses your generosity to bless not just others, but yourself as well.`,
    image: "giving-header.avif",
  },
  {
    id: 5,
    title: "Praying Through the Seasons of Life",
    author: "Sarah Thompson",
    date: "March 18, 2026",
    category: "Devotional",
    excerpt:
      "Prayer looks different in different seasons of life. In seasons of joy, struggle, waiting, and loss, our prayers change. Here's how to pray authentically...",
    content: `Prayer looks different in different seasons of life. In seasons of joy, we pray with gratitude and celebration. In seasons of struggle, we cry out for help and understanding. In seasons of waiting, we learn patience and trust. In seasons of loss, we mourn and process our grief.

Sometimes Christians feel like they need to maintain a "spiritual" tone in prayer. We think there's a right way to pray, and we worry about saying the wrong thing. But God invites us to be authentic with Him. He can handle our questions, our doubts, our anger, and our disappointment.

The Psalms are full of raw, honest prayers. The psalmist cries out in fear, questions God's plan, celebrates victories, and mourns losses. And these prayers are recorded in Scripture as examples for us.

**In seasons of joy:** Let your prayers be full of gratitude and praise. Don't rush through blessings; savor them and thank God.

**In seasons of struggle:** Don't pretend everything is okay. Bring your pain to God. He wants to comfort you and walk with you.

**In seasons of waiting:** Practice patience and trust. Pray for strength to endure and faith to believe God's promises.

**In seasons of loss:** Grieve, yes, but grieve as one who has hope. God grieves with us and holds us in our sorrow.

Whatever season you're in, God invites you to pray. Not the prayers you think you should pray, but the honest prayers of your heart. That's when prayer becomes real, and that's when we truly encounter God.`,
    image: "about_page_online.avif",
  },
  {
    id: 6,
    title: "Living Out Your Faith in the Workplace",
    author: "David Chen",
    date: "March 11, 2026",
    category: "Practical",
    excerpt:
      "Your faith shouldn't stay at church on Sunday. Learn how to live out your Christian values in your professional life and be a light in your workplace...",
    content: `Your faith shouldn't stay at church on Sunday. Many believers struggle with how to integrate their faith into their work life. We spend so much time at work—it's one of the primary places where we can live out our faith and influence others.

Living out your faith at work doesn't mean being preachy or unprofessional. It means allowing your Christian values to shape how you work, how you treat others, and how you make decisions.

**Integrity:** Do your work with excellence and honesty. Keep your word. Don't cut corners or compromise your ethics.

**Respect:** Treat all people with dignity, regardless of their position. Remember that everyone is made in God's image.

**Kindness:** Be known as someone who genuinely cares about people. Listen to your coworkers. Show compassion.

**Excellence:** Whatever you do, do it well. Your work is a reflection of your faith and your God.

**Boundaries:** It's okay to protect your time and energy. You can be a faithful employee and still prioritize your family and spiritual life.

**Witness:** Let your consistent character and values speak louder than words. Be ready to share your faith when opportunities arise naturally.

Your workplace is a mission field. God has placed you there for a reason. As you live out your faith with integrity and love, you'll be amazed at the impact you can have.`,
    image: "about_page_popup.avif",
  },
] as const;

export function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const blogId = id ? parseInt(id, 10) : null;
  const blog = BLOGS.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Blog Not Found
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700"
          >
            Back to Blog
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
            src={`/blog${blog.id}.jpeg`}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 pt-20 pb-32 md:py-40">
          <Link
            to="/blog"
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
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
              {blog.category}
            </span>
            <span className="text-xs text-white/80">{blog.date}</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {blog.title}
          </h1>
          <p className="mt-6 text-lg text-white/90">By {blog.author}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <article className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            {blog.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="mb-6 leading-relaxed text-base">
                {cleanTextForDisplay(paragraph)}
              </p>
            ))}
          </div>

          {/* Footer with author info */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{blog.author}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Licensed pastor and teacher at Grace Church
                </p>
              </div>
              <div className="flex gap-4">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <svg
                    className="h-5 w-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.31c0-2.73 1.65-4.23 4.13-4.23 1.17 0 2.18.09 2.47.13v2.86h-1.7c-1.33 0-1.59.63-1.59 1.56V9.25h3.18l-4.11 3.54v7.21H8.29z" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <svg
                    className="h-5 w-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Related/Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              {BLOGS.filter((b) => b.id !== blog.id)
                .slice(0, 2)
                .map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    to={`/blog/${relatedBlog.id}`}
                    className="group p-4 rounded-lg border border-gray-200 hover:border-primary-200 hover:bg-primary-50 transition-all"
                  >
                    <p className="text-xs font-semibold text-primary-600 uppercase mb-2">
                      {relatedBlog.category}
                    </p>
                    <p className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                      {relatedBlog.title}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

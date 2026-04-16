import { useParams, Link } from "react-router-dom";
import { cleanTextForDisplay } from "../lib/text-utils";

const EVENTS = [
  {
    id: 1,
    title: "Easter Sunday Celebration",
    date: "April 20, 2026",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
    description:
      "Celebrate the resurrection of Jesus Christ with us! Special music, a powerful message of hope, and activities for the whole family.",
    fullDescription: `Join us for our special Easter Sunday celebration! This is one of the most important days on the Christian calendar, and we want you to be part of our community as we celebrate the resurrection of Jesus Christ.

**Service Details:**
- Two services: 9:00 AM and 11:00 AM
- Both services held in the Main Sanctuary
- Free childcare available for infants through age 5
- Youth program (grades 6-12) in the Youth Center

**What to Expect:**
- Contemporary and traditional worship music
- A powerful message about the hope we have in Christ's resurrection
- Communion celebration
- Special video presentations
- Family-friendly activities and fellowship time

**Parking & Directions:**
Ample parking is available in our main lot and overflow parking. Please allow extra time for parking as this is our most well-attended service of the year.

This is a wonderful opportunity to invite friends and family. Whether you've been with us since day one or you're visiting for the first time, you'll feel welcomed at Grace Church.

**Need Help?**
First-time visitors are welcome! Ask any of our volunteers for help finding your way. We also have a team ready to connect you with more information about Grace Church.`,
    image: "giving-header.avif",
    featured: true,
  },
  {
    id: 2,
    title: "Community Potluck",
    date: "April 25, 2026",
    time: "12:00 PM",
    location: "Fellowship Hall",
    description:
      "Bring a dish to share and enjoy a meal together after Sunday service. Great food, great fellowship, great fun!",
    fullDescription: `There's nothing quite like sharing a meal together! After our Sunday morning service, we'll gather in the Fellowship Hall for food, conversation, and genuine community connection.

**Event Details:**
- Time: 12:00 PM - 2:00 PM
- Location: Fellowship Hall (downstairs from the Main Sanctuary)
- Free to attend
- All are welcome!

**What to Bring:**
Please bring a dish to share. You can contribute:
- A hot dish or casserole (serves 10-12)
- A side dish or salad
- Dessert
- Beverage

Don't worry if you can't bring something—you're welcome to come and enjoy what others bring!

**Why We Do This:**
The early church shared meals together and experienced genuine community. We believe there's something special about breaking bread together. This is a chance to:
- Connect with people you haven't seen in a while
- Meet new friends
- Experience God's family in action
- Enjoy some delicious food!

**Questions?**
Contact our office or ask any volunteer. We look forward to seeing you there!`,
    image: "ec-eteams-header-new.avif",
    featured: false,
  },
  {
    id: 3,
    title: "Youth Night: Game On",
    date: "May 1, 2026",
    time: "6:30 PM",
    location: "Youth Center",
    description:
      "An evening of games, worship, and friendship for students in grades 6–12. Invite your friends!",
    fullDescription: `This is the youth event you won't want to miss! We're gathering for an evening of fun, fellowship, and faith. Bring your friends!

**Event Details:**
- Time: 6:30 PM - 8:30 PM
- Location: Youth Center (adjacent to Main Campus)
- Cost: Free!
- For: Students in grades 6-12

**What We'll Do:**
- Electronic and board games
- Interactive worship and discussion
- Snacks and refreshments
- Small group discussions

**Why Come:**
Meeting new people, having fun, and exploring what it means to follow Jesus with your friends. Our youth leaders are passionate about helping you grow in your faith while having a blast.

**Bring:**
- Yourself!
- A friend (or several!)
- An appetite

**Questions?**
Contact our Youth Ministry Director or ask any volunteer. This is a great way to invest in friendships and your faith!`,
    image: "about_page_popup.avif",
    featured: false,
  },
  {
    id: 4,
    title: "Women's Bible Study",
    date: "May 5, 2026",
    time: "10:00 AM",
    location: "Room 201",
    description:
      "Join us as we dive into the book of Psalms together. Coffee and fellowship start at 9:30 AM.",
    fullDescription: `We're excited to invite you to our Women's Bible Study group! This is a wonderful opportunity to dive deeper into God's Word in the context of community.

**Study Details:**
- Topic: Book of Psalms - Songs for Every Season
- Time: 10:00 AM - 11:30 AM
- Location: Room 201 (second floor)
- Cost: Free!
- For: Women of all ages

**Timeline:**
- 9:30 AM: Coffee and conversation
- 10:00 AM: Opening worship and prayer
- 10:15 AM: Study and discussion
- 11:15 AM: Prayer requests and closing prayer

**What to Bring:**
- Your Bible (any translation)
- A pen for notes
- An open heart and mind

**What We'll Explore:**
The Psalms are incredibly honest prayers and songs. We'll explore how ancient believers expressed their faith through: comfort, celebration, lament, prayer, and hope. You'll discover how these timeless words speak to our modern lives.

**Who Should Come:**
Every woman! Whether you've been studying the Bible for years or you're just starting, you'll find this study welcoming and enriching. We have a diversity of ages and backgrounds, which makes our discussions even richer.

**Connect:**
This is also a great way to build meaningful friendships with women who are pursuing Jesus. Many lifelong friendships have started in our Bible studies!

Questions? Contact our Women's Ministry coordinator.`,
    image: "about_page_hero.avif",
    featured: false,
  },
  {
    id: 5,
    title: "Volunteer Appreciation Dinner",
    date: "May 10, 2026",
    time: "6:00 PM",
    location: "Fellowship Hall",
    description:
      "A special evening to honor and celebrate the incredible volunteers who make Grace Church what it is.",
    fullDescription: `You are invited to a special evening celebrating the incredible volunteers who make Grace Church thrive!

**Event Details:**
- Time: 6:00 PM - 8:00 PM
- Location: Fellowship Hall
- Cost: FREE for all volunteers
- Plus ones welcome!

**What This Is About:**
Volunteers are the backbone of Grace Church. From Sunday morning volunteers to those serving in Children's Ministry, Youth, Small Groups, Serving Teams, and everything in between—we want to say THANK YOU.

**The Evening Includes:**
- A delicious catered dinner
- Recognition and celebration of all our volunteers
- Inspiring testimonies
- Fun activities and prizes
- Relaxed fellowship and conversation

**Our Volunteers Serve In:**
- Children's Ministry
- Youth Ministry
- Worship Team
- Hospitality & Ushering
- Group Leaders
- Outreach & Community Serve
- Tech & Production
- Small Groups
- And many more amazing areas!

**Why We Do This:**
Volunteering is an act of worship. When you serve at Grace Church, you're not serving us—you're serving Jesus. This dinner is our small way of saying thank you for your faithfulness and dedication.

**Are You Interested in Volunteering?**
If you're not currently volunteering but would like to, come to this dinner! We have opportunities for everyone, regardless of your gifts or experience.

Please RSVP to our office by May 8th so we can plan appropriately for food.`,
    image: "home_page_get_involved__careers.avif",
    featured: false,
  },
  {
    id: 6,
    title: "Summer VBS: Ocean Adventure",
    date: "June 15–19, 2026",
    time: "9:00 AM – 12:00 PM",
    location: "Children's Wing",
    description:
      "A week of Bible stories, crafts, music, and fun for kids ages 4–11. Registration opens May 1st!",
    fullDescription: `Dive into an amazing week of Bible stories, crafts, games, and friendships! This is our signature summer event for kids, and it's always a blast.

**VBS Details:**
- Dates: June 15-19, 2026
- Time: 9:00 AM - 12:00 PM daily
- Location: Children's Wing
- Ages: 4-11 years old
- Cost: $50 per child | $80 for two children | Free for volunteers' kids

**What's Ocean Adventure About?**
Dive deep into Bible stories about faith, adventure, and God's faithfulness. Each day has a theme:
- Day 1: God's Amazing Creatures
- Day 2: Treasure Hunting with Jesus
- Day 3: Ride the Waves of Faith
- Day 4: Keeping Safe in the Depths
- Day 5: Splash into Community

**Daily Activities Include:**
- Opening music and worship
- Interactive Bible story time
- Small group discussions
- Crafts to take home
- Outdoor games and activities
- Snack time
- Final celebration

**Who Can Help?**
We need volunteers! Whether you love working with kids, leading games, crafts, or music—we have a place for you. No experience necessary!

**Registration:**
- Registration Opens: May 1, 2026
- Early bird pricing (through May 15): $40 per child
- Standard pricing (from May 16): $50 per child

Register online at our website or in person at the office.

**Questions?**
Contact our Children's Ministry Director. We can't wait to see your kids dive into an amazing week!`,
    image: "about_page_watch_party.avif",
    featured: true,
  },
] as const;

export function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const eventId = id ? parseInt(id, 10) : null;
  const event = EVENTS.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Event Not Found
          </h1>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700"
          >
            Back to Events
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
            src={`/event${event.id}.jpeg`}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 pt-20 pb-32 md:py-40">
          <Link
            to="/events"
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
            Back to Events
          </Link>

          {event.featured && (
            <div className="inline-block mb-4">
              <span className="inline-flex rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
                Featured Event
              </span>
            </div>
          )}

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {event.title}
          </h1>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl bg-primary-50 p-6 border border-primary-100">
              <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">
                Date
              </p>
              <p className="text-xl font-bold text-gray-900">{event.date}</p>
              <p className="text-sm text-gray-600 mt-1">{event.time}</p>
            </div>

            <div className="rounded-xl bg-primary-50 p-6 border border-primary-100">
              <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">
                Location
              </p>
              <p className="text-xl font-bold text-gray-900">{event.location}</p>
              <p className="text-sm text-gray-600 mt-1">Grace Church Main Campus</p>
            </div>

            <div className="rounded-xl bg-primary-50 p-6 border border-primary-100">
              <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">
                Cost
              </p>
              <p className="text-xl font-bold text-gray-900">Free</p>
              <p className="text-sm text-gray-600 mt-1">All are welcome</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {event.fullDescription.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="mb-6 leading-relaxed text-gray-600">
                {cleanTextForDisplay(paragraph)}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-700 shadow-md hover:shadow-lg">
                Register for Event
              </button>
              <button className="flex-1 rounded-full border-2 border-primary-600 px-8 py-4 text-base font-semibold text-primary-600 transition-all hover:bg-primary-50">
                Share Event
              </button>
            </div>
          </div>

          {/* Related Events */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Other Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EVENTS.filter((e) => e.id !== event.id)
                .slice(0, 2)
                .map((relatedEvent) => (
                  <Link
                    key={relatedEvent.id}
                    to={`/event/${relatedEvent.id}`}
                    className="group rounded-xl border border-gray-200 bg-white p-6 hover:border-primary-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                        <span className="text-xs font-semibold">
                          {relatedEvent.date.split(" ")[0].slice(0, 3)}
                        </span>
                        <span className="text-sm font-bold">
                          {relatedEvent.date.match(/\d+/)?.[0]}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                          {relatedEvent.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {relatedEvent.location}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

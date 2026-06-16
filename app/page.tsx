import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#222222]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-[#F5F1E8]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Image
            src="/images/zenerium-logo.png"
            alt="Zenerium"
            width={180}
            height={60}
            priority
          />

          <nav className="hidden gap-8 md:flex">
            <a href="/our-story">Our Story</a>
            <a href="/collections">Collections</a>
            <a href="/experiences">Experiences</a>
            <a href="/corporate-gifting">Corporate</a>
            <a href="/contact">Contact</a>
          </nav>

          <button className="rounded-md bg-[#1B4332] px-5 py-2 text-white">
            Book Consultation
          </button>
        </div>
      </header>

      <section className="flex min-h-screen items-center justify-center px-6 pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#40916C]">
              Handcrafted Living Ecosystems
            </p>

            <h1 className="mb-6 font-serif text-6xl leading-tight md:text-7xl">
              Bring Nature Home.
            </h1>

            <p className="mb-8 max-w-xl text-lg text-gray-700">
              Handcrafted living ecosystems designed to create moments of calm,
              wonder and connection.
            </p>

            <div className="flex gap-4">
              <button className="rounded-md bg-[#1B4332] px-6 py-3 text-white">
                Explore Collections
              </button>

              <button className="rounded-md border border-[#1B4332] px-6 py-3">
                Book Consultation
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative h-[520px] w-[420px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero-terrarium.jpg"
                alt="Handcrafted Zenerium terrarium"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* Problem Section */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-5xl mx-auto text-center">
    <p className="uppercase tracking-[0.3em] text-sm text-[#40916C] mb-4">
      Why Zenerium
    </p>

    <h2 className="text-5xl font-serif mb-8">
      Modern Life Disconnects Us From Nature.
    </h2>

    <p className="text-xl text-gray-600 leading-relaxed">
      Between screens, schedules and city living, many of us have lost our
      daily connection with the natural world. Zenerium creates handcrafted
      living ecosystems that bring forests, rivers and landscapes back into
      homes, studios and workplaces.
    </p>
  </div>
</section>
{/* Collections Section */}
<section className="bg-[#1B4332] px-6 py-24 text-white">
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
        Signature Collections
      </p>

      <h2 className="font-serif text-5xl">
        Small worlds. Deep calm.
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {[
        ["Desktop Terrariums", "Compact living ecosystems for desks, shelves and calm corners."],
        ["Living Landscapes", "Miniature forests, valleys and trails inspired by nature."],
        ["Paludariums", "Where land, water and plant life meet inside glass."],
        ["Bespoke Builds", "Custom ecosystems designed around your space and story."],
      ].map(([title, text]) => (
        <div key={title} className="rounded-3xl bg-[#F5F1E8] p-8 text-[#222222]">
          <div className="mb-6 h-48 rounded-2xl bg-[#D9D9D9]" />
          <h3 className="mb-3 font-serif text-2xl text-[#1B4332]">{title}</h3>
          <p className="text-sm leading-6 text-gray-600">{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Why Zenerium */}
<section className="bg-[#F5F1E8] px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#40916C]">
        Why Zenerium
      </p>

      <h2 className="font-serif text-5xl text-[#1B4332]">
        More than a terrarium.
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-4">
      {[
        ["Handcrafted", "Each ecosystem is composed by hand with care, balance and precision."],
        ["Living", "Every piece evolves naturally over time, becoming more beautiful as it grows."],
        ["Sustainable", "Designed for low-maintenance modern living and mindful indoor greenery."],
        ["Meaningful", "A daily reminder of growth, calm, prosperity and connection to nature."],
      ].map(([title, text]) => (
        <div key={title} className="border-l border-[#40916C]/40 pl-6">
          <h3 className="mb-4 font-serif text-2xl text-[#1B4332]">
            {title}
          </h3>
          <p className="leading-7 text-gray-600">
            {text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Founder Story */}
<section className="bg-white px-6 py-24">
  <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

    <div className="flex items-center justify-center">
      <div className="h-[500px] w-full rounded-3xl bg-[#D9D9D9]">
      </div>
    </div>

    <div className="self-center">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#40916C]">
        Our Story
      </p>

      <h2 className="mb-8 font-serif text-5xl text-[#1B4332]">
        Every ecosystem begins with a moment of wonder.
      </h2>

      <div className="space-y-6 text-lg leading-8 text-gray-600">

        <p>
          Long before Zenerium existed, there was a fascination with nature in
          its smallest details.
        </p>

        <p>
          That fascination evolved into aquascaping. Learning the art,
          science and composition of living ecosystems revealed how plants,
          stone, wood and space can come together to tell a story.
        </p>

        <p>
          Travels through dense forests, hidden trails and mist-covered hills
          inspired a desire to recreate those memories in miniature form.
        </p>

        <p>
          Founded in 2025, Zenerium creates handcrafted living ecosystems
          designed to bring calm, wonder and connection into modern spaces.
        </p>

      </div>
    </div>

  </div>
</section>
{/* Corporate Gifting */}
<section className="bg-[#1B4332] px-6 py-24 text-white">
  <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

    <div>
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
        Corporate Gifting
      </p>

      <h2 className="mb-8 font-serif text-5xl">
        Not another gift.
      </h2>

      <p className="text-xl leading-8 text-white/80">
        A living ecosystem that continues to grow long after it is received.
        Designed for employee appreciation, client gifting, festive occasions,
        leadership events and memorable brand experiences.
      </p>

      <div className="mt-10 space-y-4">
        <div>✓ Employee Appreciation</div>
        <div>✓ Client Gifts</div>
        <div>✓ Festival Gifting</div>
        <div>✓ Leadership Events</div>
        <div>✓ Welcome Kits</div>
      </div>
    </div>

    <div className="rounded-3xl bg-white p-8 text-[#222222]">
      <h3 className="mb-6 font-serif text-3xl text-[#1B4332]">
        Request a Corporate Proposal
      </h3>

      <div className="grid gap-4">
        <input
          placeholder="Company Name"
          className="rounded-xl border p-4"
        />

        <input
          placeholder="Contact Person"
          className="rounded-xl border p-4"
        />

        <input
          placeholder="Email"
          className="rounded-xl border p-4"
        />

        <input
          placeholder="Phone"
          className="rounded-xl border p-4"
        />

        <input
          placeholder="Quantity (25+)"
          className="rounded-xl border p-4"
        />

        <textarea
          placeholder="Tell us about your requirement"
          rows={4}
          className="rounded-xl border p-4"
        />

        <button className="rounded-xl bg-[#1B4332] py-4 text-white">
          Request Proposal
        </button>
      </div>
    </div>

  </div>
</section>
    </main>
  );
}
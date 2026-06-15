const collections = [
  {
    title: "Living Landscapes",
    text: "Miniature green worlds composed with moss, stone, wood, and quiet detail.",
  },
  {
    title: "Paludariums",
    text: "Atmospheric ecosystems where water, land, and plant life meet inside glass.",
  },
  {
    title: "Desktop Terrariums",
    text: "Compact living accents for desks, shelves, studios, and calm corners.",
  },
  {
    title: "Bespoke Creations",
    text: "Custom ecosystems designed around your space, occasion, or story.",
  },
];

const pillars = [
  ["Handcrafted", "Each ecosystem is composed by hand with care and precision."],
  ["Living", "Every piece evolves naturally over time, just like nature."],
  ["Sustainable", "Designed for low-maintenance modern living."],
  ["Meaningful", "A reminder of growth, balance, calm, and renewal."],
];

export default function Home() {
  return (
    <main className="bg-[#F5F1E8] text-[#222222]">
      <header className="fixed top-0 z-50 w-full bg-[#1B4332]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-semibold tracking-wide text-white">
            Zenerium
          </div>

          <nav className="hidden items-center gap-7 text-sm text-white/80 lg:flex">
            <a href="#collections">Collections</a>
            <a href="#custom">Custom Creations</a>
            <a href="#gifting">Corporate Gifting</a>
            <a href="#experiences">Experiences</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-sm text-[#1B4332]"
          >
            Book Consultation
          </a>
        </div>
      </header>

      <section className="flex min-h-screen items-center bg-[#1B4332] px-6 pt-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 uppercase tracking-[0.35em] text-white/60">
              Handcrafted Living Ecosystems
            </p>

            <h1 className="max-w-4xl text-6xl font-light leading-tight md:text-8xl">
              Bring Nature Home.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
              Handcrafted living ecosystems designed to create moments of calm,
              wonder, and connection.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#collections"
                className="rounded-full bg-white px-8 py-4 text-center text-[#1B4332]"
              >
                Explore Collections
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/70 px-8 py-4 text-center"
              >
                Book Consultation
              </a>
            </div>
          </div>

          <div className="hidden h-[520px] rounded-t-full bg-gradient-to-br from-[#40916C] to-[#0B2B20] p-6 shadow-2xl lg:block">
            <div className="flex h-full items-center justify-center rounded-t-full border border-white/20 bg-white/10 text-center text-white/50">
              Terrarium Visual
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#40916C]">
            Our Philosophy
          </p>
          <h2 className="text-4xl leading-tight text-[#1B4332] md:text-6xl">
            Modern life disconnects us from nature.
          </h2>
          <p className="mt-8 text-lg leading-8 text-[#222222]/70">
            Zenerium creates small living worlds for homes, offices, and
            meaningful spaces — quiet reminders to pause, breathe, and reconnect
            with nature.
          </p>
        </div>
      </section>

      <section id="collections" className="bg-[#1B4332] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 uppercase tracking-[0.3em] text-white/50">
                Signature Collections
              </p>
              <h2 className="text-4xl md:text-6xl">
                Small worlds. Deep calm.
              </h2>
            </div>
            <a href="#contact" className="text-white/70">
              Enquire for a custom piece →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {collections.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-3xl bg-[#F5F1E8] text-[#222222]"
              >
                <div className="h-64 bg-[#D9D9D9]" />
                <div className="p-6">
                  <h3 className="text-2xl text-[#1B4332]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#222222]/65">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 uppercase tracking-[0.3em] text-[#40916C]">
              Why Zenerium
            </p>
            <h2 className="text-4xl text-[#1B4332] md:text-6xl">
              More than a terrarium.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {pillars.map(([title, text]) => (
              <div key={title} className="border-l border-[#40916C]/30 pl-6">
                <h3 className="text-2xl text-[#1B4332]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#222222]/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="custom" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="min-h-[420px] rounded-3xl bg-[#D9D9D9]" />

          <div className="self-center">
            <p className="mb-4 uppercase tracking-[0.3em] text-[#40916C]">
              Bespoke Builds
            </p>
            <h2 className="text-4xl leading-tight text-[#1B4332] md:text-6xl">
              A living world made for your space.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#222222]/70">
              From a quiet desk companion to a statement ecosystem for a home,
              studio, office, or gifting moment, our custom process begins with
              your space, light, mood, and story.
            </p>
            <a
              href="#contact"
              className="mt-9 inline-block rounded-full bg-[#1B4332] px-8 py-4 text-white"
            >
              Start a Custom Creation
            </a>
          </div>
        </div>
      </section>

      <section id="gifting" className="bg-[#1B4332] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 uppercase tracking-[0.3em] text-white/50">
              Corporate Gifting
            </p>
            <h2 className="text-4xl md:text-6xl">Not another gift.</h2>
            <p className="mt-7 text-lg leading-8 text-white/75">
              A living ecosystem that continues to grow long after it is
              received. Designed for teams, clients, festivals, launches, and
              milestone celebrations.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-[#222222]">
            <h3 className="text-3xl text-[#1B4332]">
              Gift prosperity that grows.
            </h3>
            <p className="mt-4 leading-7 text-[#222222]/70">
              Custom packaging, quantity planning, occasion-led design, and
              thoughtful personalization for memorable brand gifting.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {[
                "Festivals",
                "Client Gifts",
                "Employee Appreciation",
                "Corporate Events",
                "Leadership Retreats",
                "Office Decor",
              ].map((item) => (
                <div key={item} className="rounded-full bg-[#F5F1E8] px-4 py-3">
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-[#1B4332] px-8 py-4 text-white"
            >
              Request Corporate Proposal
            </a>
          </div>
        </div>
      </section>

      <section id="experiences" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 uppercase tracking-[0.3em] text-[#40916C]">
              Experiences
            </p>
            <h2 className="text-4xl text-[#1B4332] md:text-6xl">
              Experience nature firsthand.
            </h2>
            <p className="mt-6 leading-8 text-[#222222]/70">
              Terrarium workshops, private events, family experiences, school
              programs, and corporate team-building sessions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Terrarium Workshops",
              "Private Events",
              "Corporate Workshops",
              "School Programs",
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-8">
                <div className="mb-8 h-20 w-20 rounded-full bg-[#40916C]/20" />
                <h3 className="text-2xl text-[#1B4332]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 uppercase tracking-[0.3em] text-[#40916C]">
              Begin Here
            </p>
            <h2 className="text-4xl leading-tight text-[#1B4332] md:text-6xl">
              Let’s create your living ecosystem.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#222222]/70">
              Tell us about your space, occasion, or gifting requirement. We’ll
              help you choose or create the right terrarium.
            </p>
          </div>

          <form className="rounded-3xl bg-[#F5F1E8] p-8">
            <div className="grid gap-4">
              {["Name", "Email", "Phone", "City", "Requirement"].map((field) => (
                <input
                  key={field}
                  placeholder={field}
                  className="rounded-xl border border-[#D9D9D9] bg-white px-4 py-4 outline-none focus:border-[#40916C]"
                />
              ))}

              <textarea
                placeholder="Tell us what you are looking for"
                rows={5}
                className="rounded-xl border border-[#D9D9D9] bg-white px-4 py-4 outline-none focus:border-[#40916C]"
              />

              <button className="rounded-full bg-[#1B4332] px-8 py-4 text-white">
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[#1B4332] px-6 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-3xl">Zenerium</h3>
            <p className="mt-3 max-w-md text-white/60">
              Handcrafted living ecosystems for calm, meaningful spaces.
            </p>
          </div>

          <div className="text-sm text-white/60">
            <p>hello@zenerium.in</p>
            <p>zenerium.in</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
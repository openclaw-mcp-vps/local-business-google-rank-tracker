export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Local Business Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Track Local Google Rankings
          <span className="block text-[#58a6ff]">for Any Keyword &amp; Location</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor where your business appears in Google Maps and local search results. Get historical trend data so you always know if your SEO is working.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $14/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No contracts.</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📍", title: "Location-Based Tracking", desc: "Check rankings from any city or zip code, not just your own location." },
            { icon: "📈", title: "Historical Trends", desc: "See how your rankings change over time with clear charts and history." },
            { icon: "🗺️", title: "Google Maps + Search", desc: "Track both Google Maps pack positions and organic search rankings." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Up to 50 keywords tracked",
              "Unlimited locations",
              "Daily automated rank checks",
              "Google Maps + organic results",
              "Historical trend charts",
              "Email alerts on rank changes"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does local rank tracking work?",
              a: "We simulate searches from your target location using Google's local search infrastructure, capturing your business's position in both the Maps pack and organic results."
            },
            {
              q: "How often are rankings checked?",
              a: "Rankings are checked daily by default. You'll receive email alerts whenever a significant position change is detected for any of your tracked keywords."
            },
            {
              q: "Can I track competitors too?",
              a: "Yes. You can add any business name and location to track, so you can monitor your competitors' rankings alongside your own."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Local Rank Tracker. All rights reserved.
      </footer>
    </main>
  );
}

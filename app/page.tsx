export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-black tracking-tight">
            PAY<span className="text-gray-500">ZERO</span>
          </div>

          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#payments">Payments</a>
            <a href="#marketplace">Marketplace</a>
            <a href="#shops">Shops</a>
            <a href="#features">Features</a>
          </div>

          <div className="flex gap-3">
            <button className="hidden rounded-full px-4 py-2 text-sm font-semibold md:block">
              Log in
            </button>

            <button className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pb-28 md:pt-32">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-gray-300 px-4 py-2 text-sm font-medium">
            🇿🇲 Built for Zambia. Ready for Africa.
          </div>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Pay.
            <br />
            Sell.
            <br />
            <span className="text-gray-400">Grow.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
            PAYZERO is building a simple digital platform where businesses,
            sellers and customers can connect, sell and manage payments online.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-gray-800">
              Start Selling →
            </button>

            <button className="rounded-full border border-gray-300 px-8 py-4 font-bold transition hover:bg-gray-100">
              Explore Marketplace
            </button>
          </div>
        </div>
      </section>

      {/* Payments */}
      <section id="payments" className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Payments
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">
            Simple tools for getting paid online.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Payment Links",
                text: "Create a payment request and share it with your customers.",
              },
              {
                title: "Invoices",
                text: "Create professional invoices and keep track of transactions.",
              },
              {
                title: "Merchant Dashboard",
                text: "Manage your business, sales and payment activity in one place.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-800 p-7"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section id="marketplace" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
                Marketplace
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                One place to discover products and services.
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Sellers can showcase their products while customers discover
                businesses and services from across Zambia.
              </p>

              <button className="mt-8 rounded-full bg-black px-7 py-3.5 font-bold text-white">
                Explore Marketplace →
              </button>
            </div>

            <div className="rounded-3xl bg-gray-100 p-8">
              <div className="grid grid-cols-2 gap-4">
                {["Fashion", "Electronics", "Beauty", "Services"].map(
                  (category) => (
                    <div
                      key={category}
                      className="rounded-2xl bg-white p-6 font-bold shadow-sm"
                    >
                      {category}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shops */}
      <section id="shops" className="bg-gray-100 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
            PAYZERO Shops
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black md:text-5xl">
            Give your business a home on the internet.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
            Create an online shop, showcase your products and give customers a
            simple way to discover your business.
          </p>

          <button className="mt-8 rounded-full bg-black px-8 py-4 font-bold text-white">
            Create Your Shop
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Built for modern businesses.</h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Business profiles",
              "Product listings",
              "Payment requests",
              "Transaction history",
              "Invoices & receipts",
              "Seller dashboard",
              "Customer accounts",
              "Marketplace discovery",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-gray-200 p-6 font-semibold"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-black px-8 py-16 text-center text-white md:px-16">
          <h2 className="text-4xl font-black md:text-5xl">
            Ready to grow your business?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Join the next generation of digital commerce in Zambia.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-bold text-black">
            Get Started →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <div className="font-black text-black">PAYZERO</div>

          <div>© 2026 PAYZERO. Pay. Sell. Grow.</div>

          <div>🇿🇲 Zambia</div>
        </div>
      </footer>
    </main>
  );
}

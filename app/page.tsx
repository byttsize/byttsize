import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-bold text-lg">Byttsize</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">
              Pricing
            </a>
            <Link
              href="/auth"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Your books.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              The perfect bytt size.
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Format professional Amazon KDP books in seconds. One click generates perfect PDFs and audiobooks. No design skills. No software. No headaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/auth"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
            >
              Start Free (3-Day Trial)
            </Link>
            
              href="#features"
              className="px-8 py-4 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition font-semibold text-lg"
            >
              Learn More
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            ✅ No credit card required • 🚀 Deploy in minutes • 📱 Works on all devices
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why authors choose Byttsize
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-5xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold mb-3">Write Naturally</h3>
              <p className="text-gray-700 leading-relaxed">
                Clean, distraction-free editor. Focus on your story. Byttsize handles all the formatting automatically.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200">
              <div className="text-5xl mb-4">🎙️</div>
              <h3 className="text-2xl font-bold mb-3">Audiobook Ready</h3>
              <p className="text-gray-700 leading-relaxed">
                One click generates professional MP3 audiobooks. Professional narration. Perfect synchronization. Ready to sell.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3">KDP Compliant</h3>
              <p className="text-gray-700 leading-relaxed">
                Every PDF meets Amazon KDP specifications. Print quality guaranteed. No rejections. No reprints.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">What Byttsize Does</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <span className="text-2xl">⚙️</span>
                <div>
                  <h4 className="font-bold mb-1">Automatic Formatting</h4>
                  <p className="text-gray-600">Margins, gutters, fonts, spacing, page breaks—all handled.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">📖</span>
                <div>
                  <h4 className="font-bold mb-1">Professional Output</h4>
                  <p className="text-gray-600">Table of contents, headers, footers, page numbers—generated automatically.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <h4 className="font-bold mb-1">Audiobook Generation</h4>
                  <p className="text-gray-600">Text-to-speech with professional voices. No extra tools needed.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-bold mb-1">One-Click Export</h4>
                  <p className="text-gray-600">PDF, EPUB, and MP3. Ready for Amazon KDP, Audible, everywhere.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-gray-600 mb-6">Perfect for testing</p>
              <p className="text-4xl font-bold mb-6">$0</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> 1 project
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> 3 PDF exports
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> No audiobook
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✗</span> Community support
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition font-semibold">
                Start Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-xl transform md:scale-105">
              <div className="bg-green-400 text-green-900 px-3 py-1 rounded-full inline-block mb-4 text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-blue-100 mb-6">Best for active authors</p>
              <p className="text-4xl font-bold mb-6">$9<span className="text-lg">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span>✓</span> 10 projects
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> 50 PDF exports
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> 5 audiobooks/month
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Email support
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold">
                Start Free Trial
              </button>
            </div>

            {/* Unlimited Plan */}
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Unlimited</h3>
              <p className="text-gray-600 mb-6">For serious publishers</p>
              <p className="text-4xl font-bold mb-6">$29<span className="text-lg">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Unlimited projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Unlimited exports
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Unlimited audiobooks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Priority support
                </li>
              </ul>
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                Start Free Trial
              </button>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12">
            All plans include 3-day free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to format to the perfect bytt size?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Join 100+ authors publishing with Byttsize.
          </p>
          <Link
            href="/auth"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-bold text-lg inline-block"
          >
            Start Your 3-Day Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2024 Byttsize. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

import React from 'react';
import { Terminal, Shield, Zap, Code2, Cpu, Lock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-black text-white">
      {/* Header with animated logo */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="animate-bounce">
            <Terminal size={64} className="text-red-500" />
          </div>
          <h1 className="text-4xl font-bold ml-4">Steak</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="relative h-[500px] rounded-2xl overflow-hidden bg-black bg-opacity-50 backdrop-blur-sm border border-red-900/30">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-3xl px-4">
                <h2 className="text-5xl font-bold mb-4">Ultimate Roblox Experience</h2>
                <p className="text-xl mb-8">Advanced execution engine with unmatched stability and features</p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-black bg-opacity-50 p-8 rounded-xl backdrop-blur-sm border border-red-900/30">
            <Shield className="text-red-500 mb-4 h-8 w-8" />
            <h3 className="text-2xl font-bold mb-4 text-red-500">Undetected</h3>
            <p>Advanced protection system ensures your security while executing scripts</p>
          </div>
          <div className="bg-black bg-opacity-50 p-8 rounded-xl backdrop-blur-sm border border-red-900/30">
            <Zap className="text-red-500 mb-4 h-8 w-8" />
            <h3 className="text-2xl font-bold mb-4 text-red-500">Lightning Fast</h3>
            <p>Optimized execution engine for instant script loading and execution</p>
          </div>
          <div className="bg-black bg-opacity-50 p-8 rounded-xl backdrop-blur-sm border border-red-900/30">
            <Code2 className="text-red-500 mb-4 h-8 w-8" />
            <h3 className="text-2xl font-bold mb-4 text-red-500">Script Hub</h3>
            <p>Access to a vast library of pre-made scripts and custom functions</p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Advanced Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden group">
              <div className="bg-black bg-opacity-80 p-8 rounded-xl backdrop-blur-sm border border-red-900/30 h-full">
                <Cpu className="text-red-500 mb-4 h-8 w-8" />
                <h3 className="text-2xl font-bold mb-4">Multi-Instance Support</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Run multiple Roblox instances simultaneously</li>
                  <li>• Independent script execution per instance</li>
                  <li>• Optimized memory management</li>
                  <li>• Instance monitoring tools</li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <div className="bg-black bg-opacity-80 p-8 rounded-xl backdrop-blur-sm border border-red-900/30 h-full">
                <Lock className="text-red-500 mb-4 h-8 w-8" />
                <h3 className="text-2xl font-bold mb-4">Security Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Anti-detection system</li>
                  <li>• Secure script execution</li>
                  <li>• Auto-update mechanism</li>
                  <li>• Encrypted communication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <Terminal size={32} className="text-red-500 mx-auto mb-4" />
          <p className="text-gray-400">Steak - Elevate Your Gaming Experience</p>
          <p className="text-xs text-gray-500 mt-2">For educational purposes only. Use responsibly.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
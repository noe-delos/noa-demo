export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L13.24 8.1C12.45 7.8 11.55 7.8 10.76 8.1L7.83 5.17L10.5 2.5L9 1L3 7V9L7.83 13.83C8.72 15.58 10.24 16.93 12 17.27V22H14V17.27C15.76 16.93 17.28 15.58 18.17 13.83L21 9Z"/>
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-300 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
              Noa
            </h1>
            <p className="text-sm text-purple-200">Assistant Psychologique IA</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-purple-200">En ligne</span>
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden">
            <div className="h-[calc(100vh-200px)] min-h-[600px] p-4">
              <div className="w-full h-full bg-slate-900/50 rounded-xl border border-purple-400/30 flex items-center justify-center">
                <div className="text-center text-purple-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-600/20 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L13.24 8.1C12.45 7.8 11.55 7.8 10.76 8.1L7.83 5.17L10.5 2.5L9 1L3 7V9L7.83 13.83C8.72 15.58 10.24 16.93 12 17.27V22H14V17.27C15.76 16.93 17.28 15.58 18.17 13.83L21 9Z"/>
                    </svg>
                  </div>
                  <p className="text-lg font-medium mb-2">Assistant IA Noa</p>
                  <p className="text-sm opacity-70">Intégration HTML à venir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

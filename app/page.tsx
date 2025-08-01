import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
              >
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L13.24 8.1C12.45 7.8 11.55 7.8 10.76 8.1L7.83 5.17L10.5 2.5L9 1L3 7V9L7.83 13.83C8.72 15.58 10.24 16.93 12 17.27V22H14V17.27C15.76 16.93 17.28 15.58 18.17 13.83L21 9Z" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-300 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
              Noa
            </h1>
            <p className="text-sm text-purple-200">
              Assistant Psychologique IA
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-purple-200">En ligne</span>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden h-[calc(100vh-200px)] min-h-[600px] p-4">
            {/* Le widget doit remplir cette zone */}
            <div id="widget-container" className="w-full h-full">
              {/* L'agent de chat devrait apparaître ici et remplir cet espace */}
            </div>
          </div>
        </div>
      </main>
      <Script id="heygen-streaming-embed" strategy="afterInteractive">
        {`
          !function(window){
            const host="https://labs.heygen.com",
            url=host+"/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJLYXR5YV9DaGFpcl9TaXR0aW5nX3B1Ymxp%0D%0AYyIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzL2IxZmY1%0D%0AZWRiZjk2MjQyZTZhYzk0NjkyMjdkZjQwOTI0XzU1MzYwL3ByZXZpZXdfdGFyZ2V0LndlYnAiLCJu%0D%0AZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6IjZlYzdiMTczODVm%0D%0AYjRhNmZiOGUwYjYxYzY1OTM0M2YyIiwidXNlcm5hbWUiOiI3MzY0NjE1MzYxMDg0NzUwOWJhNmJi%0D%0AYTNkMjAxY2IxOCJ9&inIFrame=1",
            clientWidth=document.body.clientWidth,
            wrapDiv=document.createElement("div");
            wrapDiv.id="heygen-streaming-embed";
            wrapDiv.style.width = '100%';
            wrapDiv.style.height = '100%';
            const container=document.createElement("div");
            container.id="heygen-streaming-container";
            const stylesheet=document.createElement("style");
            stylesheet.innerHTML=\`
  #heygen-streaming-embed {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 2px solid #fff;
    box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);
    transition: all linear 0.1s;
    overflow: hidden;
    opacity: 1;
    visibility: visible;
  }
  #heygen-streaming-container {
    width: 100%;
    height: 100%;
  }
  #heygen-streaming-container iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
  \`;
            const iframe=document.createElement("iframe");
            iframe.allowFullscreen=!1,
            iframe.title="Streaming Embed",
            iframe.role="dialog",
            iframe.allow="microphone",
            iframe.src=url;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            let visible=!1,initial=!1;
            window.addEventListener("message",(e=>{e.origin===host&&e.data&&e.data.type&&"streaming-embed"===e.data.type&&("init"===e.data.action?(initial=!0,wrapDiv.classList.toggle("show",initial)):"show"===e.data.action?(visible=!0,wrapDiv.classList.toggle("expand",visible)):"hide"===e.data.action&&(visible=!1,wrapDiv.classList.toggle("expand",visible)))})),
            container.appendChild(iframe),
            wrapDiv.appendChild(stylesheet),
            wrapDiv.appendChild(container),
            document.getElementById('widget-container').appendChild(wrapDiv)
          }(globalThis);
        `}
      </Script>
    </div>
  );
}

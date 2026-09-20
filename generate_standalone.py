import base64

# Read favicon images
with open('/home/carlo/apex-links/public/favicon.png', 'rb') as f:
    b64_favicon_64 = base64.b64encode(f.read()).decode('utf-8')

with open('/home/carlo/apex-links/public/favicon-32x32.png', 'rb') as f:
    b64_favicon_32 = base64.b64encode(f.read()).decode('utf-8')

# Read exact ChatGPT image directly
with open('/home/carlo/apex-links/public/apex_logo.png', 'rb') as f:
    b64_logo = base64.b64encode(f.read()).decode('utf-8')

html = f"""<!DOCTYPE html>
<html lang="pt-BR" class="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>APEX Clube de Ofertas — Links</title>
  <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
  <link rel="icon" type="image/png" sizes="64x64" href="data:image/png;base64,{b64_favicon_64}" />
  <link rel="icon" type="image/png" sizes="32x32" href="data:image/png;base64,{b64_favicon_32}" />
  <meta name="theme-color" content="#c30000" />
  
  <!-- Tailwind Config MUST run BEFORE Tailwind CDN script -->
  <script>
    tailwind = {{
      darkMode: 'class',
      theme: {{
        extend: {{
          colors: {{
            brand: {{
              DEFAULT: '#c30000',
              hover: '#ad0000',
              darkHover: '#ff3b3b'
            }}
          }}
        }}
      }}
    }}
  </script>
  <script src="https://cdn.tailwindcss.com"></script>

  <style>
    :root {{
      --bg-color: #FFFFFF;
      --text-color: #0F172A;
      --card-bg: #FFFFFF;
      --card-border: #E2E8F0;
      --icon-bg: #F8FAFC;
      --icon-border: #F1F5F9;
      --logo-bg: #FFFFFF;
      --logo-border: #E2E8F0;
    }}
    html.dark {{
      --bg-color: #0C0D0E;
      --text-color: #F8FAFC;
      --card-bg: #16181A;
      --card-border: #272A30;
      --icon-bg: #202328;
      --icon-border: #2A2E35;
      --logo-bg: #000000;
      --logo-border: #272A30;
      color-scheme: dark;
    }}
    body {{
      background-color: var(--bg-color);
      color: var(--text-color);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: transparent;
      transition: background-color 0.2s ease, color 0.2s ease;
      min-height: 100vh;
      margin: 0;
    }}
    .logo-container {{
      background-color: var(--logo-bg) !important;
      border-color: var(--logo-border) !important;
    }}
    .dark .card-surface {{
      background-color: #16181A !important;
      border-color: #272A30 !important;
      color: #F8FAFC !important;
    }}
    .dark .icon-surface {{
      background-color: #202328 !important;
      border-color: #2A2E35 !important;
    }}
    .dark .theme-btn {{
      background-color: #16181A !important;
      border-color: #272A30 !important;
      color: #E2E8F0 !important;
    }}
  </style>
</head>
<body class="flex flex-col justify-between selection:bg-[#c30000] selection:text-white">

  <!-- Top bar with Theme Toggle Button -->
  <div class="w-full max-w-xl mx-auto px-4 pt-4 flex justify-end">
    <button id="theme-toggle-btn" onclick="toggleTheme()" class="theme-btn p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#c30000] hover:border-[#c30000]/40 transition-all cursor-pointer shadow-2xs flex items-center justify-center" title="Alternar modo de cor">
      <span id="theme-icon-sun" class="hidden text-base">☀️</span>
      <span id="theme-icon-moon" class="text-base">🌙</span>
    </button>
  </div>

  <!-- Main Container -->
  <main class="w-full max-w-md mx-auto px-4 py-4 flex-1 flex flex-col items-center">
    
    <!-- Profile Header -->
    <header class="flex flex-col items-center text-center space-y-3 mb-6">
      <!-- Exact Logo Card -->
      <div class="logo-container w-52 h-28 sm:w-64 sm:h-32 rounded-2xl border shadow-xs p-3 sm:p-3.5 flex items-center justify-center transition-colors duration-200">
        <img src="data:image/png;base64,{b64_logo}" alt="APEX Clube de Ofertas" class="w-full h-full object-contain" />
      </div>

      <div class="space-y-1 max-w-sm px-2">
        <h1 class="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">APEX Clube de Ofertas</h1>
        <p class="text-xs font-semibold text-slate-500 dark:text-neutral-400">@apexclubedeofertas</p>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 pt-1 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </header>

    <!-- Social Links Row -->
    <div class="flex items-center justify-center gap-2.5 mb-6">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="card-surface w-10 h-10 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-600 dark:text-neutral-300 hover:text-[#c30000] dark:hover:text-[#ff3b3b] hover:border-[#c30000]/40 transition-all" title="Instagram">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a>
      <a href="https://t.me" target="_blank" rel="noopener noreferrer" class="card-surface w-10 h-10 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-600 dark:text-neutral-300 hover:text-[#c30000] dark:hover:text-[#ff3b3b] hover:border-[#c30000]/40 transition-all" title="Telegram">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/></svg>
      </a>
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="card-surface w-10 h-10 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-600 dark:text-neutral-300 hover:text-[#c30000] dark:hover:text-[#ff3b3b] hover:border-[#c30000]/40 transition-all" title="TikTok">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
      </a>
    </div>

    <!-- Links List (Generic WhatsApp & Telegram with Lorem Ipsum) -->
    <div class="w-full space-y-3">
      <!-- WhatsApp Card -->
      <a href="https://chat.whatsapp.com/seu-link-aqui" target="_blank" rel="noopener noreferrer" class="card-surface group relative w-full flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#c30000]/60 dark:hover:border-[#c30000]/60 hover:shadow-xs transition-all duration-150 active:scale-[0.99] min-h-[60px]">
        <div class="flex items-center gap-3.5 min-w-0 pr-2">
          <div class="icon-surface w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
            <svg class="w-5 h-5 text-[#25D366] fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.12.82.83-3.04-.19-.31A8.2 8.2 0 0 1 3.8 11.91c0-4.54 3.7-8.24 8.25-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.68.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/></svg>
          </div>
          <div class="min-w-0 text-left">
            <h2 class="text-sm sm:text-[15px] font-bold tracking-tight text-slate-900 dark:text-neutral-100 group-hover:text-[#c30000] dark:group-hover:text-[#ff3b3b] transition-colors truncate">
              Grupo WhatsApp
            </h2>
            <p class="text-xs text-slate-500 dark:text-neutral-400 leading-snug line-clamp-1 pt-0.5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </p>
          </div>
        </div>
        <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-slate-400 dark:text-neutral-500 group-hover:text-[#c30000] dark:group-hover:text-[#ff3b3b] transition-transform group-hover:translate-x-0.5">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </a>

      <!-- Telegram Card -->
      <a href="https://t.me/seu-link-aqui" target="_blank" rel="noopener noreferrer" class="card-surface group relative w-full flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#c30000]/60 dark:hover:border-[#c30000]/60 hover:shadow-xs transition-all duration-150 active:scale-[0.99] min-h-[60px]">
        <div class="flex items-center gap-3.5 min-w-0 pr-2">
          <div class="icon-surface w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
            <svg class="w-5 h-5 text-[#24A1DE] fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/></svg>
          </div>
          <div class="min-w-0 text-left">
            <h2 class="text-sm sm:text-[15px] font-bold tracking-tight text-slate-900 dark:text-neutral-100 group-hover:text-[#c30000] dark:group-hover:text-[#ff3b3b] transition-colors truncate">
              Canal Telegram
            </h2>
            <p class="text-xs text-slate-500 dark:text-neutral-400 leading-snug line-clamp-1 pt-0.5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </p>
          </div>
        </div>
        <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-slate-400 dark:text-neutral-500 group-hover:text-[#c30000] dark:group-hover:text-[#ff3b3b] transition-transform group-hover:translate-x-0.5">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </a>
    </div>
  </main>

  <!-- Footer -->
  <footer class="w-full py-6 text-center text-xs text-slate-400 dark:text-neutral-600">
    <p>© 2026 APEX Clube de Ofertas</p>
  </footer>

  <script>
    let isDark = false;
    try {{
      const savedTheme = localStorage.getItem('apex_theme_v1');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {{
        isDark = true;
      }}
    }} catch(e) {{}}

    function applyTheme() {{
      const html = document.documentElement;
      const sun = document.getElementById('theme-icon-sun');
      const moon = document.getElementById('theme-icon-moon');
      if (isDark) {{
        html.classList.add('dark');
        html.classList.remove('light');
        if (sun) sun.classList.remove('hidden');
        if (moon) moon.classList.add('hidden');
      }} else {{
        html.classList.remove('dark');
        html.classList.add('light');
        if (sun) sun.classList.add('hidden');
        if (moon) moon.classList.remove('hidden');
      }}
      try {{
        localStorage.setItem('apex_theme_v1', isDark ? 'dark' : 'light');
      }} catch(e) {{}}
    }}

    function toggleTheme() {{
      isDark = !isDark;
      applyTheme();
    }}

    // Apply immediately
    applyTheme();
  </script>
</body>
</html>
"""

with open('/home/carlo/apex-links/standalone-linktree.html', 'w', encoding='utf-8') as f:
    f.write(html)

try:
    with open('/mnt/c/Users/carlo/Downloads/apex-links.html', 'w', encoding='utf-8') as f:
        f.write(html)
except Exception as e:
    print(f"Note: /mnt/c path not accessible: {e}")

print("Standalone HTML updated with exact ChatGPT image logo!")

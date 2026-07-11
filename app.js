document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const todayDateEl = document.getElementById('todayDate');
  const quoteCategoryEl = document.getElementById('quoteCategory');
  const quoteKrEl = document.getElementById('quoteKr');
  const quoteEnEl = document.getElementById('quoteEn');
  const authorKrEl = document.getElementById('authorKr');
  const authorEnEl = document.getElementById('authorEn');
  
  const randomQuoteBtn = document.getElementById('randomQuoteBtn');
  const toggleFavBtn = document.getElementById('toggleFavBtn');
  const copyBtn = document.getElementById('copyBtn');
  const shareBtn = document.getElementById('shareBtn');
  
  const favListBtn = document.getElementById('favListBtn');
  const favBadge = document.getElementById('favBadge');
  const favoritesDrawer = document.getElementById('favoritesDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const backdrop = document.getElementById('backdrop');
  const favListContainer = document.getElementById('favListContainer');
  
  const themeBtn = document.getElementById('themeBtn');
  const settingsPanel = document.getElementById('settingsPanel');
  const settingsClose = document.getElementById('settingsClose');
  const themeOptDark = document.getElementById('themeOptDark');
  const themeOptLight = document.getElementById('themeOptLight');
  
  const toastContainer = document.getElementById('toastContainer');
  const toastText = document.getElementById('toastText');

  // Application State
  let currentQuote = null;
  let isDailyMode = true; // True for daily quote, false if user is shuffling or viewing a favorite
  let favorites = JSON.parse(localStorage.getItem('quotes_favorites')) || [];
  let currentTheme = localStorage.getItem('quotes_theme') || 'dark';

  // Categories Map for UI display
  const categoryMap = {
    wisdom: '지혜 · Wisdom',
    life: '인생 · Life',
    courage: '용기 · Courage',
    success: '성공 · Success',
    mindset: '마음가짐 · Mindset'
  };

  // 1. Initialize App
  init();

  function init() {
    // Set theme
    setTheme(currentTheme);
    
    // Set current date
    displayDate();
    
    // Display Today's Quote
    displayDailyQuote();
    
    // Update favorites UI
    updateFavoritesBadge();
    renderFavorites();
    
    // Set event listeners
    setupEventListeners();
  }

  // 2. Theme Control
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('quotes_theme', theme);
    currentTheme = theme;
    
    // Update settings UI active class
    if (theme === 'dark') {
      themeOptDark.classList.add('active');
      themeOptLight.classList.remove('active');
    } else {
      themeOptLight.classList.add('active');
      themeOptDark.classList.remove('active');
    }
  }

  // 3. Date Display
  function displayDate() {
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = days[now.getDay()];
    
    todayDateEl.textContent = `${year}년 ${month}월 ${date}일 ${day}`;
  }

  // 4. Quote Display Logic
  function getDailyQuoteIndex() {
    // Generate static index based on date string YYYY-MM-DD
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    
    // Simple hash function for date string
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      const char = dateStr.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32bit integer
    }
    
    // Ensure index is positive and fits in quotes range
    const index = Math.abs(hash) % quotes.length;
    return index;
  }

  function displayDailyQuote() {
    isDailyMode = true;
    const index = getDailyQuoteIndex();
    const quote = quotes[index];
    renderQuote(quote);
    
    // Change date badge border to indicate daily quote
    todayDateEl.style.boxShadow = '0 4px 15px var(--accent-glow)';
    todayDateEl.textContent = todayDateEl.textContent.split(' (이동됨)')[0];
  }

  function renderQuote(quote) {
    currentQuote = quote;
    
    // Animate transition
    const textEls = [quoteKrEl, quoteEnEl, authorKrEl, authorEnEl];
    textEls.forEach(el => el.classList.add('fade-out'));
    
    setTimeout(() => {
      quoteCategoryEl.textContent = categoryMap[quote.category] || '격언';
      quoteKrEl.textContent = quote.quote;
      quoteEnEl.textContent = quote.quoteEn;
      authorKrEl.textContent = quote.author;
      authorEnEl.textContent = quote.authorEn;
      
      // Update toggle favorite icon status
      if (favorites.some(fav => fav.id === quote.id)) {
        toggleFavBtn.classList.add('active');
        toggleFavBtn.setAttribute('aria-label', '즐겨찾기 삭제');
      } else {
        toggleFavBtn.classList.remove('active');
        toggleFavBtn.setAttribute('aria-label', '즐겨찾기 추가');
      }
      
      textEls.forEach(el => {
        el.classList.remove('fade-out');
        el.classList.add('fade-in');
      });
      
      // Clean up fade-in class after animation completes
      setTimeout(() => {
        textEls.forEach(el => el.classList.remove('fade-in'));
      }, 500);
      
    }, 300);
  }

  function showRandomQuote() {
    isDailyMode = false;
    
    // Pick a random quote different from current
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex].id === currentQuote.id && quotes.length > 1);
    
    renderQuote(quotes[randomIndex]);
    
    // Change date badge text slightly to let users know they are in shuffle mode
    const baseDate = todayDateEl.textContent.split(' (무작위)')[0];
    todayDateEl.textContent = `${baseDate} (무작위)`;
    todayDateEl.style.boxShadow = 'none';
  }

  // 5. Favorites Storage & UI Logic
  function toggleFavorite() {
    if (!currentQuote) return;
    
    const favIndex = favorites.findIndex(fav => fav.id === currentQuote.id);
    
    if (favIndex > -1) {
      // Remove from favorites
      favorites.splice(favIndex, 1);
      toggleFavBtn.classList.remove('active');
      showToast('보관함에서 제거되었습니다.');
    } else {
      // Add to favorites
      favorites.push(currentQuote);
      toggleFavBtn.classList.add('active');
      showToast('보관함에 저장되었습니다.');
    }
    
    // Save to local storage
    localStorage.setItem('quotes_favorites', JSON.stringify(favorites));
    
    updateFavoritesBadge();
    renderFavorites();
  }

  function deleteFavorite(id) {
    favorites = favorites.filter(fav => fav.id !== id);
    localStorage.setItem('quotes_favorites', JSON.stringify(favorites));
    
    updateFavoritesBadge();
    renderFavorites();
    
    // If the currently displayed quote is the deleted favorite, update the heart icon
    if (currentQuote && currentQuote.id === id) {
      toggleFavBtn.classList.remove('active');
    }
    
    showToast('보관함에서 제거되었습니다.');
  }

  function updateFavoritesBadge() {
    const count = favorites.length;
    if (count > 0) {
      favBadge.textContent = count;
      favBadge.style.display = 'flex';
    } else {
      favBadge.style.display = 'none';
    }
  }

  function renderFavorites() {
    favListContainer.innerHTML = '';
    
    if (favorites.length === 0) {
      favListContainer.innerHTML = `
        <div class="empty-state">
          <svg viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <p>보관된 격언이 없습니다.<br>마음에 드는 격언을 보관해보세요.</p>
        </div>
      `;
      return;
    }
    
    favorites.forEach(fav => {
      const card = document.createElement('div');
      card.className = 'fav-card';
      
      card.innerHTML = `
        <p class="fav-quote">"${fav.quote}"</p>
        <div class="fav-meta">
          <span class="fav-author">- ${fav.author}</span>
          <div class="fav-actions">
            <!-- View button -->
            <button class="fav-btn view-btn" data-id="${fav.id}" title="메인 화면에서 보기">
              <svg viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </button>
            <!-- Delete button -->
            <button class="fav-btn delete-btn" data-id="${fav.id}" title="보관함에서 삭제">
              <svg viewBox="0 0 24 24">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
            </button>
          </div>
        </div>
      `;
      
      // Wire up view favorite click
      card.querySelector('.view-btn').addEventListener('click', () => {
        isDailyMode = false;
        renderQuote(fav);
        closeDrawer();
        
        // Indicate we are viewing a saved favorite
        todayDateEl.textContent = `보관함에서 불러옴`;
        todayDateEl.style.boxShadow = 'none';
      });
      
      // Wire up delete favorite click
      card.querySelector('.delete-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteFavorite(fav.id);
      });
      
      favListContainer.appendChild(card);
    });
  }

  // 6. Clipboard & Share Logic
  function copyToClipboard() {
    if (!currentQuote) return;
    
    const textToCopy = `"${currentQuote.quote}" - ${currentQuote.author}\n(${currentQuote.quoteEn} - ${currentQuote.authorEn})`;
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        showToast('격언이 클립보드에 복사되었습니다.');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        showToast('복사에 실패했습니다.');
      });
  }

  function shareQuote() {
    if (!currentQuote) return;
    
    const text = `"${currentQuote.quote}" - ${currentQuote.author}\n#오늘의격언 #명언 #DailyQuote`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    
    window.open(shareUrl, '_blank');
  }

  // 7. Feedback UI (Toast)
  let toastTimeout = null;
  function showToast(message) {
    toastText.textContent = message;
    toastContainer.classList.add('show');
    
    if (toastTimeout) clearTimeout(toastTimeout);
    
    toastTimeout = setTimeout(() => {
      toastContainer.classList.remove('show');
    }, 2500);
  }

  // 8. Drawer and Panels Toggle Logic
  function openDrawer() {
    closeSettings();
    favoritesDrawer.classList.add('open');
    backdrop.classList.add('open');
  }

  function closeDrawer() {
    favoritesDrawer.classList.remove('open');
    backdrop.classList.remove('open');
  }

  function openSettings() {
    closeDrawer();
    settingsPanel.classList.add('open');
    backdrop.classList.add('open');
  }

  function closeSettings() {
    settingsPanel.classList.remove('open');
    if (!favoritesDrawer.classList.contains('open')) {
      backdrop.classList.remove('open');
    }
  }

  // 9. Setup Event Listeners
  function setupEventListeners() {
    // Quote Controls
    randomQuoteBtn.addEventListener('click', showRandomQuote);
    toggleFavBtn.addEventListener('click', toggleFavorite);
    copyBtn.addEventListener('click', copyToClipboard);
    shareBtn.addEventListener('click', shareQuote);
    
    // Favorites Drawer
    favListBtn.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', () => {
      closeDrawer();
      closeSettings();
    });
    
    // Settings
    themeBtn.addEventListener('click', openSettings);
    settingsClose.addEventListener('click', closeSettings);
    
    // Theme options click
    themeOptDark.addEventListener('click', () => setTheme('dark'));
    themeOptLight.addEventListener('click', () => setTheme('light'));
    
    // Back to daily quote by clicking Logo
    document.getElementById('logoLink').addEventListener('click', (e) => {
      e.preventDefault();
      if (!isDailyMode) {
        displayDate();
        displayDailyQuote();
        showToast('오늘의 격언으로 복귀했습니다.');
      }
    });
  }
});

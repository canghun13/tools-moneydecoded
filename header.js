(function () {
  const BASE = 'https://tools.moneydecoded.net/';

  const CALCULATORS = [
    { label: 'Mortgage',          href: 'mortgage-calculator.html' },
    { label: '401(k)',            href: '401k-calculator.html' },
    { label: 'Compound Interest', href: 'compound-interest-calculator.html' },
    { label: 'Loan Repayment',    href: 'loan-repayment-calculator.html' },
    { label: 'Savings Goal',      href: 'savings-goal-calculator.html' },
    { label: 'Inflation',         href: 'inflation-calculator.html' },
    { label: 'Net Worth',         href: 'net-worth-calculator.html' },
    { label: 'Rent vs Buy',       href: 'rent-vs-buy-calculator.html' },
    { label: 'Emergency Fund',    href: 'emergency-fund-calculator.html' },
    { label: 'Debt Payoff',       href: 'debt-payoff-calculator.html' },
    { label: 'Tax Bracket',       href: 'tax-bracket-calculator.html' },
    { label: '50/30/20 Budget',   href: 'budget-calculator.html' },
    { label: 'Savings Rate',       href: 'savings-rate-calculator.html' },
  ];

  const COMPARE = [
    { label: 'Best HYSA Rates',   href: 'best-hysa-rates.html' },
    { label: 'Best CD Rates',     href: 'best-cd-rates.html' },
    { label: 'ETF Comparison',    href: 'etf-comparison.html' },
    { label: 'Send Money Abroad', href: 'remittance-compare.html' },
  ];

  const currentFile = location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    return currentFile === href;
  }

  function buildLinks(items) {
    return items.map(item => {
      const cls = isActive(item.href) ? ' class="active"' : '';
      return `<a href="${BASE}${item.href}"${cls}>${item.label}</a>`;
    }).join('');
  }

  function hasActiveIn(items) {
    return items.some(item => isActive(item.href));
  }

  const calcActive = hasActiveIn(CALCULATORS) ? ' has-active' : '';
  const compareActive = hasActiveIn(COMPARE) ? ' has-active' : '';

  const html = `
<div class="md-disclosure">
  <strong>Advertiser Disclosure:</strong> MoneyDecoded may earn a commission when you click affiliate links. This does not affect our editorial independence or the rates shown.
</div>
<header class="md-header">
  <div class="md-header-inner">
    <a href="https://tools.moneydecoded.net/" class="md-logo">Money<span>Decoded</span></a>
    <nav class="md-nav">
      <div class="md-dropdown${calcActive}">
        <button class="md-dropdown-btn" aria-expanded="false">Calculators <span class="md-arrow">▾</span></button>
        <div class="md-dropdown-menu">${buildLinks(CALCULATORS)}</div>
      </div>
      <div class="md-dropdown${compareActive}">
        <button class="md-dropdown-btn" aria-expanded="false">Compare &amp; Rates <span class="md-arrow">▾</span></button>
        <div class="md-dropdown-menu">${buildLinks(COMPARE)}</div>
      </div>
    </nav>
    <a href="https://moneydecoded.net" class="md-blog-cta">📰 Blog</a>
    <button class="md-hamburger" id="mdHamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="md-mobile-menu" id="mdMobileMenu">
    <div class="md-mobile-section">
      <div class="md-mobile-label">Calculators</div>
      ${buildLinks(CALCULATORS)}
    </div>
    <div class="md-mobile-section">
      <div class="md-mobile-label">Compare &amp; Rates</div>
      ${buildLinks(COMPARE)}
    </div>
    <a href="https://moneydecoded.net" class="md-mobile-blog">📰 Read the Blog →</a>
  </div>
</header>`;

  // body 맨 앞에 안정적으로 삽입
  document.body.insertAdjacentHTML('afterbegin', html);

  // 드롭다운 토글
  document.querySelectorAll('.md-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const parent = this.closest('.md-dropdown');
      const isOpen = parent.classList.contains('open');
      document.querySelectorAll('.md-dropdown.open').forEach(d => {
        d.classList.remove('open');
        d.querySelector('.md-dropdown-btn').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        parent.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', function () {
    document.querySelectorAll('.md-dropdown.open').forEach(d => {
      d.classList.remove('open');
      d.querySelector('.md-dropdown-btn').setAttribute('aria-expanded', 'false');
    });
  });

  // 햄버거
  const hamburger = document.getElementById('mdHamburger');
  const mobileMenu = document.getElementById('mdMobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.toggle('open');
      this.classList.toggle('open', isOpen);
      this.setAttribute('aria-expanded', isOpen);
    });
  }
})();

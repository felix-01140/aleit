/* Shared nav + footer injected into every page */
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navLinks = [
    { href: 'index.html',           label: 'Home' },
    { href: 'index.html#services',  label: 'Services' },
    { href: 'service.html',         label: 'All Services' },
    { href: 'pricing.html',         label: 'Pricing' },
    { href: 'solutions.html',       label: 'Solutions' },
    { href: 'guidelines.html',      label: 'Guidelines' },
    { href: 'contact.html',         label: 'Contact' },
  ];

  function isActive(href) {
    const page = href.split('#')[0].split('/').pop();
    return page === currentPage ? 'active' : '';
  }

  const navHTML = `
  <div class="g-divider"><span class="d1"></span><span class="d2"></span><span class="d3"></span><span class="d4"></span></div>
  <div class="top-bar d-none d-lg-block">
    <div class="container d-flex justify-content-between">
      <span><i class="fa fa-map-marker-alt me-2" style="color:#4285F4"></i>Gisozi Gasabo, Kigali, Rwanda</span>
      <span><i class="fa fa-phone-alt me-2" style="color:#34A853"></i>+250 788 612 171 &nbsp;|&nbsp; <i class="fa fa-envelope me-2" style="color:#EA4335"></i>alelabshq@gmail.com</span>
    </div>
  </div>
  <nav class="g-navbar" id="navbar">
    <div class="container" style="max-width:1200px;">
      <a href="index.html" class="brand-name me-4" style="font-family:'Google Sans',sans-serif;font-size:22px;font-weight:700;text-decoration:none;color:#202124;">
        <span class="b">A</span><span class="r">l</span><span class="y">e</span><span class="g">l</span><span class="b2">abs</span><span style="color:#5F6368;">Tech</span>
      </a>
      <ul class="g-nav-links" id="navLinks">
        ${navLinks.map(l => `<li><a href="${l.href}" class="${isActive(l.href)}">${l.label}</a></li>`).join('')}
      </ul>
      <div class="ms-auto d-flex align-items-center gap-2">
        <a href="index.html#book" class="btn-g btn-g-blue d-none d-md-inline-flex">
          <i class="bi bi-lightning-fill"></i> Get a Quote
        </a>
        <button class="g-hamburger" id="hamburger" aria-label="Menu">
          <i class="bi bi-list" style="font-size:24px;"></i>
        </button>
      </div>
    </div>
  </nav>`;

  const footerHTML = `
  <footer class="g-footer">
    <div class="container" style="max-width:1200px;">
      <div class="row g-5">
        <div class="col-lg-4">
          <span class="g-footer-brand">
            <span style="color:#4285F4;">A</span><span style="color:#EA4335;">l</span><span style="color:#FBBC05;">e</span><span style="color:#34A853;">l</span><span style="color:#4285F4;">abs</span>Tech
          </span>
          <p style="font-size:14px;color:rgba(255,255,255,.5);line-height:1.7;margin-bottom:8px;">Professional IT & security solutions in Kigali, Rwanda. 24/7 support, certified technicians.</p>
          <p style="font-size:13px;color:rgba(255,255,255,.4);"><i class="bi bi-geo-alt me-1" style="color:#4285F4;"></i>Gisozi Gasabo, Kigali, RWANDA</p>
          <div class="g-social">
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://wa.me/250788612171"><i class="fab fa-whatsapp"></i></a>
            <a href="mailto:alelabshq@gmail.com"><i class="fa fa-envelope"></i></a>
          </div>
        </div>
        <div class="col-6 col-lg-2">
          <h6>Services</h6>
          <ul class="g-footer-links">
            <li><a href="service-cctv.html">CCTV</a></li>
            <li><a href="service-networking.html">Networking</a></li>
            <li><a href="service-lab.html">Computer Labs</a></li>
            <li><a href="service-website.html">Web Dev</a></li>
            <li><a href="solutions.html">EdTech</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2">
          <h6>Company</h6>
          <ul class="g-footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="guidelines.html">Guidelines</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="col-lg-4">
          <h6>Support Hotline</h6>
          <div style="font-size:28px;font-family:'Google Sans',sans-serif;font-weight:700;color:#4285F4;margin-bottom:4px;">+250 788 612 171</div>
          <p style="font-size:13px;color:rgba(255,255,255,.4);margin-bottom:20px;">Available 7 days a week</p>
          <a href="index.html#book" class="btn-g btn-g-blue" style="font-size:13px;"><i class="bi bi-lightning-fill"></i> Get a Free Quote</a>
        </div>
      </div>
    </div>
    <div class="g-footer-bottom">
      <div class="container d-flex justify-content-between flex-wrap gap-2" style="max-width:1200px;">
        <span>&copy; 2026 Alelabs Tech. All rights reserved.</span>
        <span>Built by <strong style="color:rgba(255,255,255,.6);">Alelabs Tech Team</strong></span>
      </div>
    </div>
  </footer>`;

  // Inject
  const body = document.body;
  body.insertAdjacentHTML('afterbegin', `<div id="spinner"><div class="g-spinner"></div></div>` + navHTML);
  body.insertAdjacentHTML('beforeend', footerHTML);

  // Spinner
  window.addEventListener('load', function() {
    setTimeout(function() {
      var s = document.getElementById('spinner');
      if (s) s.classList.add('hide');
    }, 500);
  });

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // Navbar shadow on scroll
  window.addEventListener('scroll', function() {
    var nav = document.getElementById('navbar');
    nav.style.boxShadow = window.scrollY > 10
      ? '0 1px 3px rgba(60,64,67,.15), 0 4px 8px rgba(60,64,67,.1)'
      : 'none';
  });
})();

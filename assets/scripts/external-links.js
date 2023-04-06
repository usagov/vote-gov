/*
  Processing External Links
 */

  (() => {

    // Enable external links behavior.
    const externalLinks = document.querySelectorAll('a[href^="https"]');

    // Process external links.
    if (externalLinks.length) {
      for (let i = 0; i < externalLinks.length; i++) {
          const svg = `<svg aria-hidden="true" viewBox="3 3 18 18" width="10" height="10"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" fill="currentColor"></path></svg>`;
          var svgIcon = `<span class="ext-link">&#xFEFF;${svg}</span>`;
          externalLinks[i].setAttribute('target', '_blank');
          externalLinks[i].insertAdjacentHTML( 'beforeend', svgIcon );
          externalLinks[i].setAttribute('title', 'External link opens new window');
      }
    }

  })();

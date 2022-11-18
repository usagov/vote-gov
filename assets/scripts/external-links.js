/*
  Processing External Links
 */

  (() => {

    // Enable external links behavior.
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    // Set all whitelisted domains.
    const whitelistedDomains = [
      'https://www.gsa.gov',
      'https://www.gsaig.gov',
      'https://www.usa.gov'
    ];
  
    // Checks if a value matches one of the whitelistedDomains.
    const matchesWhitelistedDomain = (value) => {
      for (let i = 0; i < whitelistedDomains.length; i++) {
        if (value.indexOf(whitelistedDomains[i]) != -1) {
          return true;
        }
      }
  
      return false;
    }
  
    // Process external links.
    if (externalLinks.length) {
      for (let i = 0; i < externalLinks.length; i++) {
        if (!matchesWhitelistedDomain(externalLinks[i].href)) {  
          var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
          var span = document.createElement('span');
  
          svg.setAttribute("aria-hidden", "true");
          svg.setAttribute('viewBox', '3 3 18 18');
          svg.setAttribute('width', '10');
          svg.setAttribute('height', '10');
  
          path.setAttribute('d', "M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z");
          path.setAttribute('fill', 'currentColor');

          span.setAttribute('class', 'ext-link'); 
          span.innerHTML = "&#65279;";

          svg.appendChild(path);
          span.appendChild(svg);
          externalLinks[i].setAttribute('target', '_blank');
          externalLinks[i].append(span);
        }
      }
    }
  
  })();
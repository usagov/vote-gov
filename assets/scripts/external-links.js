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
        // If the external link is not whitelisted we add a class and target.
        externalLinks[i].setAttribute('target', '_blank');
        externalLinks[i].classList.add('usa-link--external');
      }
    }
  }

})();

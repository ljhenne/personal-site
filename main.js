if (typeof SITE_CONFIG !== 'undefined') {
  document.title = SITE_CONFIG.siteTitle;
  
  const nameElement = document.getElementById('site-name');
  if (nameElement) {
    nameElement.innerHTML = SITE_CONFIG.name.split(' ').join('<br>');
  }

  const portraitElement = document.getElementById('portrait');
  if (portraitElement && SITE_CONFIG.portrait) {
    portraitElement.src = SITE_CONFIG.portrait;
    portraitElement.alt = SITE_CONFIG.name;
  }

  const bioElement = document.getElementById('site-bio');
  if (bioElement && SITE_CONFIG.bio) {
    bioElement.textContent = SITE_CONFIG.bio;
  }

  if (SITE_CONFIG.socialLinks) {
    const linkedinLink = document.getElementById('link-linkedin');
    if (linkedinLink && SITE_CONFIG.socialLinks.linkedin) {
      linkedinLink.href = SITE_CONFIG.socialLinks.linkedin;
    }

    const mediumLink = document.getElementById('link-medium');
    if (mediumLink && SITE_CONFIG.socialLinks.medium) {
      mediumLink.href = SITE_CONFIG.socialLinks.medium;
    }

    const devtoLink = document.getElementById('link-devto');
    if (devtoLink && SITE_CONFIG.socialLinks.devto) {
      devtoLink.href = SITE_CONFIG.socialLinks.devto;
    }

    const githubLink = document.getElementById('link-github');
    if (githubLink && SITE_CONFIG.socialLinks.github) {
      githubLink.href = SITE_CONFIG.socialLinks.github;
    }
  }
} else {
  console.error('SITE_CONFIG is not defined. Ensure config.js is loaded before main.js.');
}

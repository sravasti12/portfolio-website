document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.createElement('span');
  yearSpan.textContent = `© ${new Date().getFullYear()} Sravasti`;
  document.querySelector('footer').appendChild(yearSpan);
});

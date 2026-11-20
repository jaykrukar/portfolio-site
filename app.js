/* Accessible category filters. The GitHub URLs are placeholders until published. */
const buttons = [...document.querySelectorAll('.filter')];
const projects = [...document.querySelectorAll('.project-card')];
for (const button of buttons) {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    for (const candidate of buttons) {
      const active = candidate === button;
      candidate.classList.toggle('active', active);
      candidate.setAttribute('aria-pressed', String(active));
    }
    for (const project of projects) {
      const tags = (project.dataset.tags || '').split(' ');
      project.hidden = category !== 'all' && !tags.includes(category);
    }
  });
}
document.getElementById('year').textContent = String(new Date().getFullYear());

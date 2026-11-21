const buttons = [...document.querySelectorAll('.filter')];
const projects = [...document.querySelectorAll('.project-card')];
const status = document.getElementById('filter-status');

function applyFilter(selected) {
  let visible = 0;
  for (const button of buttons) {
    const active = button.dataset.filter === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  }
  for (const project of projects) {
    const tags = (project.dataset.tags || '').split(/\s+/).filter(Boolean);
    const show = selected === 'all' || tags.includes(selected);
    project.hidden = !show;
    if (show) visible += 1;
  }
  if (status) {
    status.textContent = `${visible} project${visible === 1 ? '' : 's'} shown`;
  }
}

for (const button of buttons) {
  button.addEventListener('click', () => applyFilter(button.dataset.filter));
}

applyFilter('all');
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

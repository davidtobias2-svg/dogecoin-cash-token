const contract = '0x9596a56c73CA6f50CBd05cB8D85865F75659dC78';
const toast = document.querySelector('.toast');
let toastTimer;
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(contract);
    toast.textContent = 'DOG contract address copied.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('contract-address'));
    const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
    document.getElementById('token').scrollIntoView({ behavior: 'smooth' });
    toast.textContent = 'Address selected. Use your device’s Copy command.';
  }
  toast.classList.add('visible'); clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
}));
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('navigation');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {toggle.setAttribute('aria-expanded', 'false');nav.classList.remove('open');}));
document.addEventListener('keydown', event => {if(event.key === 'Escape'){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');}});

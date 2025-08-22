document.querySelectorAll('a').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    history.pushState({}, '', event.target.href);
    loadPageHTML();
  });
});

async function loadPageHTML() {
  const pageRoutes = {
    '/index.html': '/pages/home.html',
    '/': '/pages/home.html',
    '/boss': '/pages/boss.html',
    '/character': '/pages/character.html',
    404: '/pages/404.html',
  };
  const pageRoute = pageRoutes[location.pathname];
  const pageHTML = await fetch(pageRoute).then((data) => data.text());
  document.querySelector('main').innerHTML = pageHTML;
}

// run function going back or forward on browser
window.onpopstate = loadPageHTML;
// run function on page load
loadPageHTML();

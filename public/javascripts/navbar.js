function newNavbarItem(text, url) {
    const itemLink = document.createElement('a');
    itemLink.className = "nav-item nav-link";
    itemLink.innerHTML = text;
    itemLink.href = url;

    return itemLink;
}

function navbarTitle() {
    const itemLink = document.createElement('a');
    itemLink.className = "navbar-brand";
    itemLink.innerHTML = "MIT Latino Cultural Center";
    itemLink.href = "#"

    return itemLink;
}

//
// function renderNavbar() {
//     const navbarDiv = document.getElementById('navbar-container');
//     navbarDiv.appendChild(navbarTitle())
//     navbarDiv.appendChild(newNavbarItem('Home', '/'));
//     navbarDiv.appendChild(newNavbarItem('Executive Board', '/execboard'));
//     navbarDiv.appendChild(newNavbarItem('Member Organizations', '/clubs'));
//     navbarDiv.appendChild(newNavbarItem('Contact', '/contact'));
// }

function renderNavbar() {
    const navbarDiv = document.getElementById('navbar-container');
    navbarDiv.appendChild(newNavbarItem('Home', '/'));
    navbarDiv.appendChild(newNavbarItem('Executive Board', '/execboard'));
    navbarDiv.appendChild(newNavbarItem('Member Organizations', '/clubs'));
    navbarDiv.appendChild(newNavbarItem('Contact', '/contact'));

}

// <nav class="navbar sticky-top navbar-light bg-light">
//   <a class="navbar-brand" href="#">Sticky top</a>
// </nav>

// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">MIT Latino Cultural Center</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div class="navbar-nav">
//       <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
//       <a class="nav-item nav-link" href="#">Features</a>
//       <a class="nav-item nav-link" href="#">Pricing</a>
//       <a class="nav-item nav-link disabled" href="#">Disabled</a>
//     </div>
//   </div>
// </nav>

// function renderNavbar(user) {
//   const navbarDiv = document.getElementById('nav-item-container');
//
//   // navbarDiv.appendChild(newNavbarItem('Home', '/'));
//
//   // NOTE: this check is a lowkey hack
//   if (user._id) {
//     navbarDiv.appendChild(newNavbarItem('Profile', '/profile?'+user._id));
//     //navbarDiv.appendChild(newNavbarItem('Profile', '/profile'));
//
//
//     navbarDiv.appendChild(newNavbarItem('Logout', '/logout'));
//     let searchButton = document.getElementById("searchbar-btn");
//   let searchBar = document.getElementById("searchbar");
//
// searchButton.addEventListener("click", searchKeyword);
//   } else {
//
//     navbarDiv.appendChild(newNavbarItem('Login', '/auth/google'));
//
//   }
// }

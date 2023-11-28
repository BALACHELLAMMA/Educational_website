const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<link rel="stylesheet" href="../css/header.css"/>
<link rel="stylesheet" href="../css/base.css"/>

<header>
<section class="top_banner">
    <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
    <img src="../img/stroke.svg" alt="stroke" />
</section>
<section class="sub_header">
    <nav>
        <img src="../img/logo.svg" alt="logo" />
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="courses.html">Courses</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    <div class="login_sign_up_button_container">
        <a href="./sign_up.html">Sign Up</a>
        <button class="login_button" onclick="window.location.href='../html/index.html'">Login</button>
        <div class="hamburger">
            <img src="../img/hamburger.svg" alt="hamburger"/>
        </div>
    </div>
</section>
</header>
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);
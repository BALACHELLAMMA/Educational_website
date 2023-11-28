const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<link rel="stylesheet" href="../css/base.css"/>
<link rel="stylesheet" href="../css/footer.css"/>

<footer>
<section class="top_footer">
    <section class ="contact">
        <div class="logo_container">
            <img src="../img/logo.svg" alt="logo" />
        </div>
        <div class="sub_container">
            <img src="../img/mail_icon.svg" alt="mail" />
            <p>hello@skillbridge.com</p>
        </div>
        <div class="sub_container">
            <img src="../img/phone_icon.svg" alt="phone number" />
            <p>+91 91813 23 2309</p>
        </div>
        <div class="sub_container">
            <img src="../img/location_icon.svg" alt="location" />
            <p>Somewhere in the world</p>
        </div>
    </section>    
    <div class="links_container">
       <div class="home_about">
        <div class="home">
            <h4>Home</h4>
            <ul>
                <li><a href="./home.html#benefits">Benefits</a></li>
                <li><a href="./home.html#our_courses">Our Courses</a></li>
                <li><a href="./home.html#our_testimonials">Our Testimonials</a></li>
                <li><a href="./home.html#our_faq">Our FAQ</a></li>
            </ul>
        </div>
        <div class="about_us">
            <h4>About Us</h4>
            <ul>
                <li><a href="./about.html#">Company</a></li>
                <li><a href="./about.html#">Achievements</a></li>
                <li><a href="./about.html#">Our Goals</a></li>
            </ul>
        </div>
    </div> 
        <div class="social_profile">
            <h4>Social Profiles</h4>
            <div class="social_profile_container">
                <button><img src="../img/fb_icon.svg" /></button>
                <button><img src="../img/twitter_logo.svg" /></button>
                <button><img src="../img/linkedin_icon.svg" /></button>
            </div>
        </div>
    </div>
</section>
<section class="bottom_footer">
    <p>© 2023 Skillbridge. All rights reserved.</p>
</section>
</footer>
`

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);
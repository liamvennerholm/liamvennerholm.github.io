class LVFooter extends HTMLElement {
    connectedCallback() [
        this.innerHTML = `
            <footer>
                <ul class="links">
                    <li><a class="link" href="https://www.instagram.com/liamvennerholm/" target="_blank">Instagram</a></li>
                    <li><a class="link" href="https://bsky.app/profile/liamvennerholm.bsky.social" target="_blank">BlueSky</a></li>
                </ul>
                <p id="footer">©2025 Liam Vennerholm</p>
            </footer>
        `
    ]
}

customElements.define('lv-footer', LVFooter)
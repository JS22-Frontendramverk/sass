import './Header.scss'

function Header() {

  return (
    <header className="download">
        <h1 className="download__heading">Download our App</h1>
        <p>Please download our app below.</p>
        <aside className="download__link">
            <a href="#">App Store</a>
            <a href="#">Google Play</a>
        </aside>
    </header>
  )
}

export default Header

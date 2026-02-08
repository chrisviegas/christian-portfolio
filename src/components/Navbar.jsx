import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setMenuOpen(!menuOpen)

    const closeMenu = () => setMenuOpen(false)

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#" className="nav-logo" onClick={closeMenu}>CV<span className="accent">.</span></a>
                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#about" className="nav-link" onClick={closeMenu}>Sobre</a></li>
                    <li><a href="#experience" className="nav-link" onClick={closeMenu}>Experiência</a></li>
                    <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projetos</a></li>
                    <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contato</a></li>
                </ul>
                <button 
                    className={`nav-toggle ${menuOpen ? 'active' : ''}`} 
                    aria-label="Toggle menu" 
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar

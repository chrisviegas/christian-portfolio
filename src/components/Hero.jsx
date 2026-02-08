import { useState, useEffect, useRef } from 'react'
import { use3DTilt } from '../hooks/use3DTilt'

const Hero = () => {
    const [name, setName] = useState('Visitante')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [showResponse, setShowResponse] = useState(false)
    
    const cardRef = useRef(null)
    const tiltStyle = use3DTilt(cardRef, { max: 10, perspective: 1000, scale: 1.02 })


    const handleRun = () => {
        setLoading(true)
        setShowResponse(false)
        
        setTimeout(() => {
            setResponse({ message: `Hello, ${name}!` })
            setShowResponse(true)
            setLoading(false)
        }, 600)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleRun()
    }

    const formatJSON = (obj) => {
        if (!obj) return ''
        const jsonString = JSON.stringify(obj, null, 2)
        return jsonString
            .replace(/\"([^\"]+)\":/g, '<span class="decorator">"$1"</span>:')
            .replace(/: \"([^\"]+)\"/g, ': <span class="string">"$1"</span>')
    }

    return (
        <section id="hero" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Olá, eu sou</p>
                    <h1 className="hero-title">Christian Viegas</h1>
                    <h2 className="hero-subtitle">
                        <span className="typing-text">Desenvolvedor Backend</span>
                    </h2>
                    <p className="hero-description">
                        Transformo requisitos complexos em <strong>soluções digitais robustas</strong>. 
                        Sempre em busca de construir APIs seguras e escaláveis com Python, focando em performance, 
                        qualidade de código e entrega de valor real ao negócio.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">Ver Projetos</a>
                        <a href="#contact" className="btn btn-secondary">Entrar em Contato</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div 
                        className="code-window interactive" 
                        ref={cardRef}
                        style={tiltStyle}
                    >
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                            <span className="code-title">api.py</span>
                        </div>
                        <div className="code-content">
                            <pre><code>
                                <span className="keyword">from</span> fastapi <span className="keyword">import</span> FastAPI{'\n'}
                                {'\n'}
                                app = FastAPI(){'\n'}
                                {'\n'}
                                <span className="decorator">@app.get</span>(<span className="string">"/api/hello/&#123;name&#125;"</span>){'\n'}
                                <span className="keyword">async def</span> <span className="function">say_hello</span>(name: <span className="keyword">str</span>):{'\n'}
                                    <span className="keyword">return</span> &#123;<span className="string">"message"</span>: <span className="string">f"Hello, &#123;name&#125;!"</span>&#125;
                            </code></pre>
                            
                            <div className="interactive-console">
                                <span className="comment"># Digite o seu nome!</span>
                                <div className="console-input-line">
                                    <span className="prompt">$</span> curl -X GET /api/hello/
                                    <input 
                                        type="text" 
                                        id="nameInput" 
                                        placeholder="seu_nome" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        autoComplete="off"
                                    />
                                    <button 
                                        id="runBtn" 
                                        className="run-btn" 
                                        aria-label="Executar requisição"
                                        onClick={handleRun}
                                        disabled={loading}
                                    >
                                        {loading ? '...' : 'Run ▶'}
                                    </button>
                                </div>
                                <div 
                                    className={`console-output ${showResponse ? 'visible' : ''}`} 
                                    id="apiResponse"
                                    dangerouslySetInnerHTML={{ __html: showResponse ? formatJSON(response) : '<span class="comment"># A resposta aparecerá aqui...</span>' }}
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#about" className="scroll-indicator">
                <span className="mouse"></span>
            </a>
        </section>
    )
}

export default Hero

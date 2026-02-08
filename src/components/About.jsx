const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">Sobre Mim</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Como desenvolvedor backend, meu foco vai além do código: busco entender a <strong>dor do negócio</strong> e entregar a solução mais eficiente. Tenho como objetivo criar sistemas eficientes, escaláveis e seguros.
                        </p>
                        <p>
                            Com experiência em <strong>Python, Flask, FastAPI e Bancos de Dados</strong>, atuo construindo soluções robustas para aplicações web. Sou movido por desafios técnicos e pelo aprendizado contínuo de novas tecnologias.
                        </p>

                        <div className="about-insight">
                            <div className="insight-header">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                <span>Visão de Mercado</span>
                            </div>
                            <div className="insight-quote">
                                <p style={{ marginBottom: '1rem' }}><strong>"...Você está em busca da proficiência no uso dessas ferramentas?</strong> Isso envolve:</p>
                                <ul style={{ paddingLeft: '20px', listStyleType: 'disc', marginBottom: '1rem' }}>
                                    <li style={{ marginBottom: '8px' }}>Estar constantemente em evolução, “por dentro” do que está acontecendo.</li>
                                    <li style={{ marginBottom: '8px' }}>Adquirir conhecimento técnico de como essas tecnologias funcionam.</li>
                                    <li>Explorar o melhor que elas podem te oferecer, mas também entender que não é mágica..."</li>
                                </ul>
                            </div>
                            <a href="https://www.linkedin.com/posts/christianviegas_agente-ia-llm-activity-7420411937936670720-g4lz?utm_source=share&utm_medium=member_desktop&rcm=ACoAACqDIToBOcr8CWRUGPjYchS6L0XX36LY0O4" target="_blank" rel="noopener noreferrer" className="insight-link">
                                Ler publicação completa no LinkedIn <span>→</span>
                            </a>
                        </div>

                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-icon"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>
                                <span className="stat-label">Python & Flask</span>
                            </div>
                            <div className="stat">
                                <span className="stat-icon"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg></span>
                                <span className="stat-label">IA & RAG</span>
                            </div>
                            <div className="stat">
                                <span className="stat-icon"><svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></span>
                                <span className="stat-label">PostgreSQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

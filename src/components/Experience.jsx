const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">Experiência</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3 className="timeline-title">Estagiário de Desenvolvimento</h3>
                                <span className="timeline-subtitle">IA Aplicada e Backend</span>
                            </div>
                            <div className="timeline-meta">
                                <span className="timeline-company">🏢 CanoasTEC</span>
                                <span className="timeline-date">Set 2025 — Presente</span>
                            </div>
                            <ul className="timeline-list">
                                <li>Implementei <strong>APIs RESTful</strong> em Python/Flask integrando LLM, criando fluxos de <strong>RAG</strong> com LangChain e ChromaDB</li>
                                <li>Realizei benchmarking técnico de modelos (<strong>Gemini, GPT, Claude, DeepSeek</strong>) focando em privacidade e redução de custos</li>
                                <li>Desenvolvi <strong>automações de atendimento</strong> com N8N, melhorando a comunicação pública</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3 className="subsection-title">Formação</h3>
                <div className="education-grid">
                    <div className="education-card">
                        <div className="education-icon"><svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>
                        <h4 className="education-title">Análise e Desenvolvimento de Sistemas</h4>
                        <p className="education-institution">UNISINOS</p>
                        <p className="education-date">Jun 2025 - Ago 2028 (previsão)</p>
                        <p className="education-description">
                            Arquitetura de Software, Full Stack, Engenharia de Software, Banco de Dados, Estruturas de Dados e Algoritmos.
                        </p>
                    </div>
                    <div className="education-card">
                        <div className="education-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg></div>
                        <h4 className="education-title">Desenvolvimento Backend</h4>
                        <p className="education-institution">Bolsa Futuro Digital - Instituto Hardware BR</p>
                        <p className="education-date">Ago 2025 — Atualmente</p>
                        <p className="education-description">
                            Python, Flask, Migrations, SQLAlchemy, PostgreSQL, API RESTful, RBAC, Autenticação JWT.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience

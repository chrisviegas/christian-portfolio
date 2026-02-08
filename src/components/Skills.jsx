const Skills = () => {
    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">Skills & Tecnologias</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3 className="skill-category-title">
                            <span className="skill-icon"><svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg></span>
                            Linguagens
                        </h3>
                        <div className="skill-tags">
                            <span className="skill-tag primary">Python</span>
                            <span className="skill-tag">Java</span>
                            <span className="skill-tag">SQL</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="skill-category-title">
                            <span className="skill-icon"><svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6l-3-3-3 3z"/></svg></span>
                            Frameworks
                        </h3>
                        <div className="skill-tags">
                            <span className="skill-tag primary">Flask</span>
                            <span className="skill-tag primary">FastAPI</span>
                            <span className="skill-tag">Spring Boot</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="skill-category-title">
                            <span className="skill-icon"><svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></span>
                            Bancos de Dados
                        </h3>
                        <div className="skill-tags">
                            <span className="skill-tag primary">PostgreSQL</span>
                            <span className="skill-tag">MySQL</span>
                            <span className="skill-tag">ChromaDB</span>
                            <span className="skill-tag">SQLAlchemy</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="skill-category-title">
                            <span className="skill-icon"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg></span>
                            IA & Automação
                        </h3>
                        <div className="skill-tags">
                            <span className="skill-tag primary">LangChain</span>
                            <span className="skill-tag primary">LangGraph</span>
                            <span className="skill-tag">RAG</span>
                            <span className="skill-tag">LLMs</span>
                            <span className="skill-tag">N8N</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="skill-category-title">
                            <span className="skill-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></span>
                            DevOps & Tools
                        </h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">Docker</span>
                            <span className="skill-tag">CI/CD</span>
                            <span className="skill-tag">Linux</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills

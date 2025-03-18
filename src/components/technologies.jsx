import React from "react";
import StackIcon from "tech-stack-icons";
import "./technologies.css";

const technologies = () => {
    return (
        <div className="tech-stack">
            <h1 className="large-header">Tech Stack</h1>
            <div className="category">
                <h2 className="category-header small-header">Frontend</h2>
                <div className="icons-container">
                    <StackIcon name="html5" className="tech-icon" title="HTML5" />
                    <StackIcon name="css3" className="tech-icon" title="CSS3" />
                    <StackIcon name="reactjs" className="tech-icon" title="ReactJS" />
                    <StackIcon name="js" className="tech-icon" title="JavaScript" />
                    <StackIcon name="typescript" className="tech-icon" title="TypeScript" />
                    <StackIcon name="vitejs" className="tech-icon" title="ViteJS" />
                    <StackIcon name="tailwindcss" className="tech-icon" title="TailwindCSS" />
                </div>
            </div>
            <div className="category">
                <h2 className="category-header small-header">Backend</h2>
                <div className="icons-container">
                    <StackIcon name="java" className="tech-icon" title="Java" />
                    <StackIcon name="c++" className="tech-icon" title="C++" />
                    <StackIcon name="python" className="tech-icon" title="Python" />
                    <StackIcon name="nodejs" className="tech-icon" title="NodeJS" />
                    <StackIcon name="postgresql" className="tech-icon" title="PostgreSQL" />
                    <StackIcon name="supabase" className="tech-icon" title="Supabase" />
                </div>
            </div>
            <div className="category">
                <h2 className="category-header small-header">DevOps</h2>
                <div className="icons-container">
                    <StackIcon name="cloudflare" className="tech-icon" title="Cloudflare" />
                    <StackIcon name="docker" className="tech-icon" title="Docker" />
                    <StackIcon name="git" className="tech-icon" title="Git" />
                </div>
            </div>
        </div>
    );
};

export default technologies;
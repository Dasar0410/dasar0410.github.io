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
                        <StackIcon name="html5" className="tech-icon" />      
                        <StackIcon name="css3" className="tech-icon" />
                        <StackIcon name="reactjs" className="tech-icon" />
                        <StackIcon name="js" className="tech-icon" />
                        <StackIcon name="typescript" className="tech-icon" />
                        <StackIcon name="vitejs" className="tech-icon" />
                        <StackIcon name="tailwindcss" className="tech-icon" />
                </div>
            </div>
            <div className="category">
                <h2 className="category-header small-header">Backend</h2>
                <div className="icons-container">
                    <StackIcon name="java" className="tech-icon" />
                    <StackIcon name="c++" className="tech-icon" />
                    <StackIcon name="python" className="tech-icon" />
                    <StackIcon name="nodejs" className="tech-icon" /> 
                    <StackIcon name="postgresql" className="tech-icon" />
                    <StackIcon name="supabase" className="tech-icon" />
                </div>
            </div>
            <div className="category">
                <h2 className="category-header small-header">DevOps</h2>
                <div className="icons-container">
                    <StackIcon name="cloudflare" className="tech-icon" />
                    <StackIcon name="docker" className="tech-icon" />
                    <StackIcon name="git" className="tech-icon" />
                </div>
            </div>
        </div>
    );
};

export default technologies;
import React from "react";
import StackIcon from "tech-stack-icons";
import "./technologies.css";

const technologies = () => {
    return (
        <div className="tech-stack">
            <h1 className="large-header">Technologies</h1>
            <div className="icons-container">
                <StackIcon name="react" className="tech-icon" />
                <StackIcon name="node" className="tech-icon" />
                <StackIcon name="express" className="tech-icon" />
                <StackIcon name="mongodb" className="tech-icon" />
                <StackIcon name="javascript" className="tech-icon" />
                <StackIcon name="java" className="tech-icon" />
                <StackIcon name="c++" className="tech-icon" />
                <StackIcon name="git" className="tech-icon" />
                <StackIcon name="github" className="tech-icon" />
            </div>
        </div>
    );
};

export default technologies;
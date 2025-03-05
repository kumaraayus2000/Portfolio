function Skills() {
    const skills = [
        'C++', 'Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS',
        'Docker', 'AWS (S3, EC2, RDS)', 'GCP', 'Azure Pipelines', 'Kubernetes', 'CI/CD',
        'MongoDB', 'Redis', 'SQL', 'Solr', 'Algolia',
        'Jenkins', 'Azure Pipelines', 'Kafka', 'Webhook', 'Swagger', 'Linux', 'GitHub',
        'DBeaver', 'Agile', 'Jira', 'Junits',
        'Spring Boot', 'React.js', 'Node.js', 'Redux'
    ];

    return (
        <section id="skills" className="section">
            <h2>Technical Skills</h2>
            <ul className="skills-list">
                {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </section>
    );
}

export default Skills;

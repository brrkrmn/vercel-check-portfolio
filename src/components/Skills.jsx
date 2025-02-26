import './skills.css';

export function Skills () {

    return (
        <div className='skills'>
            <h2 className='skills-title'>Skills</h2>
            <div className='skills-container'>
                <div className='skills-container-child'>
                    <h4>Python</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='skills-container-child'>
                    <h4>Microsoft SQL Server</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='skills-container-child'>
                    <h4>Machine Learning</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='skills-container-child'>
                    <h4>Javascript</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className='skills-bottom-line'></div>
        </div>
    );
};
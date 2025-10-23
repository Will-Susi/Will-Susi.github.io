/*
 * Reusable component for displaying work experience entries
 * 
 * Props:
 * - position (required): Job title/position name
 * - company (required): Company name
 * - timeframe (required): Employment duration 
 * - employmentType (optional): Type of employment 
 * - location (optional): Work location 
 * - overview (optional): String or array of strings for overview paragraphs
 * - tasks (optional): Array of strings for task bullet points
 * - skills (optional): String of comma-separated skills
 */
function WorkExperienceEntry({ position, employmentType, company, location, timeframe, overview, tasks, skills }) {
  return (
    <div className="entry">
      <div className="entry-header">
        {/* Position */}
        <h2>
          <strong>{position}</strong>
        </h2>
      </div>

      {/* Company, Location, and Timeframe */}
      <div className="entry-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px', marginBottom: '15px' }}>
        <p style={{ fontSize: '0.9em', color: '#8b949e', margin: 0 }}>
          {company}
          {location && <> • {location}</>}
        </p>
        <span className="date" style={{ fontSize: '0.9em', whiteSpace: 'nowrap', marginLeft: '10px' }}>
          {employmentType && <><i>{employmentType}</i> | </>}
          {timeframe}
        </span>
      </div>

      {/* Overview */}
      {overview && (
        <div className="entry-overview">
          <p><strong><u>Overview</u>: </strong></p>
          {Array.isArray(overview) ? (
            overview.map((paragraph, index) => (
              <p key={index} style={{ marginLeft: '20px' }}>{paragraph}</p>
            ))
          ) : (
            <p style={{ marginLeft: '20px' }}>{overview}</p>
          )}
        </div>
      )}

      {/* Tasks*/}
      {tasks && tasks.length > 0 && (
        <div className="entry-task">
          <p><strong><u>Tasks</u>: </strong></p>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Skills */}
      {skills && (
        <div className="entry-skills">
          <p><strong><u>Skills</u>: </strong>{skills}</p>
        </div>
      )}
    </div>
  );
}

export default WorkExperienceEntry;

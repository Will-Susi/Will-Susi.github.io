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
        {/* Position, Company, and Location */}
        <h2>
          <strong>{position}</strong>
          {' at '}
          {company}
          {location && <i> ({location})</i>}
        </h2>

        {/* Timeframe & Employment Type*/}
        <span className="date">
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

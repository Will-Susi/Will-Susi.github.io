import React from 'react';

/**
 * Reusable component for displaying project entries
 * 
 * Props:
 * - name (required): Project name/title
 * - timeframe (required): Project duration 
 * - overview (optional): String or array of strings for overview paragraphs
 * - skills (optional): String of comma-separated skills/technologies used
 * - relevantLinks (optional): Array of objects with 'info', 'text' and 'url' properties
 *   Example: [{ info: "View all docs here:", text: "Project Website", url: "https://..." }]
 */
function ProjectEntry({ name, timeframe, overview, skills, relevantLinks }) {
  return (
    <div className="entry">
      <div className="entry-header">
        {/* Name */}
        <h2><strong>{name}</strong></h2>
        {/* Timeframe */}
        <span className="date">{timeframe}</span>
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

      {/* Relevant Links */}
      {relevantLinks && relevantLinks.length > 0 && (
        <div className="entry-links">
          <p><strong><u>Relevant Links</u>: </strong></p>
          <ul>
            {relevantLinks.map((link, index) => (
              <li key={index}>
                {link.info && <>{link.info} </>}
                <a href={link.url} style={{ color: "#0077b5" }} target="_blank" rel="noreferrer">
                  {link.text}
                </a>
              </li>
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

export default ProjectEntry;

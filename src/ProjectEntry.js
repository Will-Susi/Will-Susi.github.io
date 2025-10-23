import React from 'react';

/**
 * Reusable component for displaying project entries
 * 
 * Props:
 * - name (required): Project name/title
 * - timeframe (required): Project duration 
 * - overview (optional): String or array of strings for overview paragraphs
 * - skills (optional): String of comma-separated skills/technologies used
 * - image (optional): Path to image file (e.g., './assets/fridgie_icon.png')
 * - relevantLinks (optional): Array of objects with 'info', 'text' and 'url' properties
 *   Example: [{ info: "View all docs here:", text: "Project Website", url: "https://..." }]
 */
function ProjectEntry({ name, timeframe, overview, skills, image, relevantLinks }) {
  return (
    <div className="entry">
      <div className="entry-header" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Image: Small thumbnail inline with header on the left */}
        {image && (
          <div className="entry-image" style={{ flexShrink: 0 }}>
            <img 
              src={image}
              alt={`${name} icon`}
              style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }}
            />
          </div>
        )}
        
        <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
          {/* Name */}
          <h2 style={{ margin: 0, display: 'flex', alignItems: 'center' }}><strong>{name}</strong></h2>
          {/* Timeframe */}
          <span className="date" style={{ display: 'flex', alignItems: 'center' }}>{timeframe}</span>
        </div>
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

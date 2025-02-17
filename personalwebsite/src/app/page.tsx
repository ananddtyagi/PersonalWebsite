import { personalContactData, skillsAndExpertiseData, awardsData, workExperienceData, educationData, projectsData, leadershipActivitiesData } from "@/components/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{personalContactData.name}</h1>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            <a href={`mailto:${personalContactData.email}`} className="flex items-center hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {personalContactData.email}
            </a>
            <a href={`tel:${personalContactData.phone}`} className="flex items-center hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {personalContactData.phone}
            </a>
            <a href={`https://github.com/${personalContactData.github}`} target="_blank" rel="noreferrer" className="flex items-center hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {personalContactData.github}
            </a>
            <a href={`https://www.linkedin.com/in/${personalContactData.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              {personalContactData.linkedin}
            </a>
          </div>
        </header>

        {/* Skills Section */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">Programming Languages</h3>
              <ul className="space-y-1">
                {skillsAndExpertiseData.programmingLanguages.map(lang => (
                  <li key={lang} className="text-gray-600 hover:text-blue-600 transition-colors">{lang}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">Data Science & ML</h3>
              <ul className="space-y-1">
                {skillsAndExpertiseData.dataScienceAndML.map(item => (
                  <li key={item} className="text-gray-600 hover:text-blue-600 transition-colors">{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">Tools & Frameworks</h3>
              <ul className="space-y-1">
                {skillsAndExpertiseData.toolsAndFrameworks.map(tool => (
                  <li key={tool} className="text-gray-600 hover:text-blue-600 transition-colors">{tool}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">Spoken Languages</h3>
              <ul className="space-y-1">
                {skillsAndExpertiseData.spokenLanguages.map(lang => (
                  <li key={lang} className="text-gray-600 hover:text-blue-600 transition-colors">{lang}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">Interests</h3>
              <ul className="space-y-1">
                {skillsAndExpertiseData.interests.map(interest => (
                  <li key={interest} className="text-gray-600 hover:text-blue-600 transition-colors">{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 mb-6 transform hover:scale-[1.01] transition-transform">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                  {edu.degreeOrProgram && (
                    <p className="text-gray-600 mt-1">
                      {edu.degreeOrProgram}{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ""}
                    </p>
                  )}
                </div>
                <p className="text-gray-500 text-sm">{edu.startDate} - {edu.endDate}</p>
              </div>
              {edu.graduationDate && <p className="text-gray-600 mt-2">Graduation: {edu.graduationDate}</p>}
              {edu.coursework && (
                <div className="mt-4">
                  <p className="font-medium text-gray-700">Coursework:</p>
                  <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {edu.coursework.map((course, i) => (
                      <li key={i} className="text-gray-600">{course}</li>
                    ))}
                  </ul>
                </div>
              )}
              {edu.details && (
                <div className="mt-4">
                  <p className="font-medium text-gray-700">Details:</p>
                  <ul className="mt-2 space-y-2">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="text-gray-600">{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Work Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
          {workExperienceData.map((work, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 mb-6 transform hover:scale-[1.01] transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{work.company}</h3>
                  <p className="text-gray-600 mt-1">{work.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm">{work.startDate} - {work.endDate}</p>
                  {work.location && <p className="text-gray-500 text-sm mt-1">{work.location}</p>}
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Responsibilities:</p>
                <ul className="space-y-2">
                  {work.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-600 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            {projectsData.map((proj, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-[1.01] transition-transform">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{proj.title}</h3>
                  {proj.timeframe && <p className="text-gray-500 text-sm">{proj.timeframe}</p>}
                </div>
                {proj.role && <p className="text-gray-600 mb-2"><span className="font-medium">Role:</span> {proj.role}</p>}
                {proj.url && (
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">URL:</span>{' '}
                    <a href={proj.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                      {proj.url}
                    </a>
                  </p>
                )}
                <div className="mb-4">
                  <p className="font-medium text-gray-700 mb-2">Description:</p>
                  <ul className="space-y-2">
                    {proj.description.map((desc, i) => (
                      <li key={i} className="text-gray-600 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
                {proj.techStack && (
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Activities Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Leadership Activities</h2>
          {leadershipActivitiesData.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 mb-6 transform hover:scale-[1.01] transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{activity.organization}</h3>
                  <p className="text-gray-600 mt-1">{activity.role}</p>
                </div>
                {activity.startDate && (
                  <p className="text-gray-500 text-sm">
                    {activity.startDate}{activity.endDate ? ` - ${activity.endDate}` : ""}
                  </p>
                )}
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Details:</p>
                <ul className="space-y-2">
                  {activity.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Awards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awardsData.map((award, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-[1.01] transition-transform">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{award.title}</h3>
                {award.organization && (
                  <p className="text-gray-600">
                    <span className="font-medium">Organization:</span> {award.organization}
                  </p>
                )}
                {award.yearOrDate && (
                  <p className="text-gray-600">
                    <span className="font-medium">Date:</span> {award.yearOrDate}
                  </p>
                )}
                {award.description && (
                  <p className="text-gray-600 mt-2">
                    <span className="font-medium">Description:</span> {award.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

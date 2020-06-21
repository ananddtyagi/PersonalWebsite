import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';


const ProjectCard = ({Title, Date, Description}) => (
  <div className="card">
  <p>{Title}</p>
    <div className="card-body">
      <h5 className="card-title">{Title}</h5>
      <p className="card-text">{Date}</p>
      <p className="card-text">
        <small className="text-muted">{Description}</small>
      </p>
    </div>
  </div>
);


function Main() {
  const [projects, setProjectContents] = useState([]);
  const [url, setURL] = useState('https://api.airtable.com/v0/appQxfMvhEQXCZ2QO/Projects?api_key=' +  process.env.REACT_APP_BLOG_API_KEY);

   useEffect(() => {

     fetch(url)
       .then(response => response.json())
       .then(data => setProjectContents(data.records));

   }, []);

   return (
     <div>
      {projects.map(project => (
        <ProjectCard {...projects.fields} />
      ))}

     </div>

   )
}

export default function Project() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>

        </Grid>
        <Grid item xs={8}>
          <Main></Main>
        </Grid>

        <Grid item xs>
        </Grid>
      </Grid>
    </div>
  )
}



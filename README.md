# Poke-survey

Visit the website at https://poke-survey.herokuapp.com/

## Development Server

Run `mongod` in one window and `npm run start_local` in another window.  
Navigate to `http://localhost:3000/`.

## Environment Variables

Create a `.env` file and add these environment variables.  
`NODE_ENV` is set to `development` or `production`.  
`SESSION_SECRET` is whatever secret you want.  
`PORT` is set to `3000`.  
`DATABASE_URL` locally is set to `mongodb://localhost/pokesurvey-dev`.
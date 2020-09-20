login
contactus@faster-steam.org

Make sure you're on the latest version of npm and Node. 

gatsby 
### Documentation (Missing) 
1) `cd sanity-kitchen`
2) `sudo npm install -g @sanity/cli`
3) enter your password
4) sanity init
6) y
7) Select Project (or createa  new one named "Kitchen Sink") // Erin-Jerri-Kitchen-Sink Fall // most recent
8) Select Production
9) Blog (schema)

### cd web folder - so you can make changes to the token, to the UI and test that it works on netlify

`npm install`
`npm run dev`
`npm run build`

if needed write `npm update`

11) `sanity start`
You should now be able to launch Content Studio at http://localhost:3333


### Mising Deploy Instructions
**Create a Netlify account (syncs with GitHub and others)
**Modify UI in Sanity Studio (load content) 
`localhost:3333` into your browser 

***See changes in Sanity Web 
`localhost:8000` into your browser 

### Change tokens from .env.development

* Create Label - FASTER Kitchen Sink Gatsby Live Preview
* Select "Read" under Rights 
// this is so that we can call from GraphQL
copy and paste token : 


NEWEST TOKEN
ske5dCjXa3x1Ei7Kx5862pQ9sLuhuPMSiCuO7hB4qreK3AtnDZ7CoAW8aczspUVhqKaW36UEoBmxKNQzLDbgA1kUMeWmAUIGLLFUe8JhJQonc7qtssdOEHd8gMUAYvoC61XdOhA7YpVmqiKomADH4GvC9xs3aBdbCiEBSSeY6XmJ47wnNXmj

Add a file under /web
Replace your token where there are "" in the .env.development
SANITY_READ_TOKEN=""

Install dependencies
`npm i`
`npm run dev`
`npm run build`




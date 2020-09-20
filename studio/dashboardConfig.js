export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f67cab83e1e08092d75d8cf',
                  title: 'Sanity Studio',
                  name: 'faster-sanity-kitchen-sink-template-studio',
                  apiId: 'b1991988-feef-40be-9beb-4476db2d18bd'
                },
                {
                  buildHookId: '5f67cab8b87d144e18529f9c',
                  title: 'Blog Website',
                  name: 'faster-sanity-kitchen-sink-template',
                  apiId: '9a575450-92fc-4457-8324-2c7a6ff7a124'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/faster-sanity-kitchen-sink-template',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://faster-sanity-kitchen-sink-template.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

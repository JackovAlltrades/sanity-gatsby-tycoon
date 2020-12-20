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
                  buildHookId: '5fdecc651f184ad4a58e9639',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-tycoon-studio',
                  apiId: '54d12c6e-2005-4354-bf24-815f3f65e25a'
                },
                {
                  buildHookId: '5fdecc65d3466c6ed8ab30e1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-tycoon',
                  apiId: 'c769ab19-973d-4760-b229-a7d719428d3e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JackovAlltrades/sanity-gatsby-tycoon',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-tycoon.netlify.app', category: 'apps'}
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

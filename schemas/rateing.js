export default {
     name: 'rateing',
     type: 'document',
     title: 'Rateing',
     fields: [
       {
         name: 'name',
         type: 'string',
         title: 'Name'
       },
       {
          name: 'email',
          type: 'string',
          title: 'Email'
        },
        {
          name: 'position',
          type: 'string',
          title: 'Position'
        },
        {
          title: 'Icon',
          name: 'icon',
          type: 'image',
          options: {
            hotspot: true // <-- Defaults to false
          }
        },
        {
          title: 'Rateing / Star',
          name: 'star',
          type: 'string',
          options: {
            list: [
              { title: '1', value: '1' },
              { title: '2', value: '2' },
              { title: '3', value: '3' },
              { title: '4', value: '4' },
              { title: '5', value: '5' },
            ],
          },
        },
        {
          name: 'review',
          type: 'text',
          title: 'Review'
        },
       
     ]
   }
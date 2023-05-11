import {createClient} from '@sanity/client'

const projectId = 'klyx6lw5'
const token = 'sk0Gz777Iy7gqc4i28cSXKXJTXqPJnwYAZ8zbYJ5NIo9mQIX21u8xDds11iVVjj5pS8CGTo0QhaQ1sZnpz1hlwnQLPInkQD6pRSDGBumWmXC0pQndofv7Sf30KK8ZZFMLWitQfqniBuzv16C1Zjgtvbf6GWutB5fMIYm2xTuuwDSXHacOi7A'

export const client = createClient({
  projectId,
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
  token,
});


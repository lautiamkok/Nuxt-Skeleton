'use strict'

import axios from 'axios'

export default async (context) => {
  let slug = context.route.params.slug ? context.route.params.slug : context.route.name
  if (slug === undefined || slug === 'index') {
    return
  }

  try {
    const apiBaseUrl = process.env.remoteApiBaseUrl
    const { data } = await axios.get(`${apiBaseUrl}/${slug}`)
    console.log('middleware/layout.js -> data.layout =', data.layout)

    context.layout = data.layout
  } catch (err) { // if error, then just fallback to the default layout.
    return
  }
}

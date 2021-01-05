module.exports = {
    content: ['index.html'],
    css: ['style.css']
  }
  

  const purgecss = await new PurgeCSS().purge('./src/styles/tailwind.css')
  // or use the path to the file as the only parameter
  const purgecss = await new PurgeCSS().purge('./purgecss.config.js')
  
  await new PurgeCSS().purge({
    css: ['src/styles/tailwind.css'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []

  })  
  
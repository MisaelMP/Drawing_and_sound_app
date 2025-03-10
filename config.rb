# Sprockets for asset management
# activate :sprockets

# Layouts
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
# Ignore partials CSS folder (since we process them via PostCSS)
ignore 'stylesheets/partials/*'
ignore 'stylesheets/site.css'


activate :relative_assets
set :relative_links, true

# Optional: Uncomment for pretty URLs
# activate :directory_indexes

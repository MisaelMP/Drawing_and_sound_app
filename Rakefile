namespace :assets do
  desc "Prepare assets for development (keep styles.css in source/)"
  task :dev do
    # Compile CSS into source for Middleman to see during development
    sh "npx postcss source/stylesheets/site.css --output source/stylesheets/styles.css"
  end

  desc "Build production site and clean up styles.css"
  task :precompile do
    # Compile CSS for production
    sh "npx postcss source/stylesheets/site.css --output source/stylesheets/styles.css"

    # Build Middleman site
    sh "bundle exec middleman build"

    # Optional: Clean up generated CSS to keep source/ clean
    sh "rm source/stylesheets/styles.css"
  end
end

source 'https://rubygems.org'

gem 'rails', github: 'rails/rails'

# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.0'
# Use Puma as the app server
gem 'puma'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'rack-cors'

group :development, :test do
  gem 'byebug'
  
  gem 'rubocop'
  gem 'parser', "~>2.3.0.pre", require: false


  # RSpec Edge
  %w[rspec-core rspec-expectations rspec-mocks rspec-rails rspec-support].each do |lib|
    gem lib, :git => "git://github.com/rspec/#{lib}.git", :branch => 'master'
  end

  gem "factory_girl_rails", "~> 4.0"
end

group :development do
  gem 'spring'
  gem 'spring-commands-rspec'
  # gem 'spring-commands-cucumber'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

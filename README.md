# Ripper
[![Circle CI](https://circleci.com/gh/comic-ripper/ripper-ng.svg?style=svg&circle-token=61323e7d4016a1aca51511be6a9f39b0d7cbd5aa)](https://circleci.com/gh/comic-ripper/ripper-ng)
[![Code Climate](https://codeclimate.com/github/comic-ripper/ripper-ng/badges/gpa.svg)](https://codeclimate.com/github/comic-ripper/ripper-ng)
[![Dependency Status](https://gemnasium.com/comic-ripper/ripper-ng.svg)](https://gemnasium.com/comic-ripper/ripper-ng)

## Installation
 1. git clone git@github.com:comic-ripper/ripper-ng
 2. Set up config/database.yml
 3. rake db:setup
 4. rake assets:install # This installs bower packages and fixes them a little

### Dependencies
 * Postgres, or some other activerecord compatible database

### More information
* [Parsers](docs/parsers.md)
* [Models](docs/comic_models.md)

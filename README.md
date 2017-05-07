# Vote.gov

This repository contains the files and infrastructure to run the `vote.gov`
website.

 Section | Description
 ------- | -----------
 [![CircleCI](https://circleci.com/gh/18F/vote-gov/tree/staging.svg?style=svg)](https://circleci.com/gh/18F/vote-gov/tree/staging) | CI status for staging ( click badge to see all staging builds )
 [![CircleCI](https://circleci.com/gh/18F/vote-gov/tree/master.svg?style=svg)](https://circleci.com/gh/18F/vote-gov/tree/master) | CI status for production ( click badge to see all production builds )
 [Installation](#installation)   | Installing the project locally.
 [Development](#development)     | Development workflow using `gulp`.
 [Deployment](#deployment)       | Automated & Manual deployment information using `cloud.gov`.
 [Contributing](CONTRIBUTING.md) | Contributing to the project.
 [Wiki](https://github.com/18F/vote-gov/wiki) | `18F/vote-gov` wiki.

## Installation

The development for the `vote.gov` site has the following dependencies

- [Hugo](http://gohugo.io "Hugo Homepage"), a static-site generator written in Go.
- [Gulp](http://gulpjs.com "GulpJS Homepage"), an automation tool for asset-pipelines.
- [NodeJS](https://nodejs.org/ "NodeJS Homepage")
- [Ruby](https://www.ruby-lang.org/ "Ruby Homepage")

This documentation assumes that you have Ruby and NodeJS installed on your
machine.  Instructions for installing `node`, and `npm`, [can be found here][node-install].

[node-install]: https://nodejs.org/en/download/ "NodeJS Downloads"

### Installing Hugo

In order to serve the `vote.gov` site locally, you will need to install the `hugo`
command-line tool. This can be installed easily via [Homebrew][homebrew-install]
on Mac OS X with the following command in your Terminal.

[homebrew-install]: http://brew.sh "Homebrew Installation"

```shell
brew update && \
brew install hugo
```

You can also [download the latest release][hugo-release] and checkout the
[quick start guide][hugo-quick-guide] for further instructions.

[hugo-release]: https://github.com/spf13/hugo/releases "Download Latest Hugo Release"
[hugo-quick-guide]: http://gohugo.io/overview/quickstart/ "Hugo Quickstart Guide"

### Installing Gulp

In order to build the assets for the `vote.gov` site, you will need to install the
`gulp` command-line tool.

```sh
npm install --global gulp-cli
```

### Installing SCSS-Lint

The Sass file linter uses the Ruby gem `scss_lint`. This gem must be installed
on your machine in order to run any tasks that depend on the `scss-lint` binary.

```sh
gem install scss_lint
```

## Development

Once `gulp` is installed globally, navigate to this directory in your Terminal
and tell `npm` to bring in the asset-pipeline's dependencies.

```sh
npm install
```

Once that is complete, run `gulp` in your Terminal to get a list of tasks.

```sh
$ gulp

  Using gulpfile ~/Developer/vote-gov/gulpfile.js
  Starting 'default'...
  v1.0.0 vote-gov
   ______  ______  _____       __   ________  ______  ______
  /\  ___\/\  ___\/\  __-.    /\ \ / /\  __ \/\__  _\/\  ___\
  \ \  __\\ \  __\\ \ \/\ \   \ \ \'/\ \ \/\ \/_/\ \/\ \  __\
   \ \_\   \ \_\   \ \____-    \ \__| \ \_____\ \ \_\ \ \_____\
    \/_/    \/_/    \/____/     \/_/   \/_____/  \/_/  \/_____/

  Available tasks

  ...
```

To start the local webserver for the English site and have gulp and hugo watch
for changes:

```sh
npm start
```

The website is now available at [`http://localhost:1313/`](http://localhost:1313/).

To start the local webserver for the Spanish site and have gulp and hugo watch
for changes:

```sh
NODE_LANG=spanish npm start
```

The website is now available at [`http://localhost:1313/es/`](http://localhost:1313/es/).

### Descriptions for optional `gulp [ flags ]` task prefixes

These flags are 100% optional and can be omitted from any tasks that are
affected by them.

- `no-test` This flag disables linters and tests for all assets.
- `production` This flag enables minification and compression of all assets in
  prep for a production environment.

## Deployment

The microsite is deployed on [cloud.gov][cg-homepage]. To read the `cloud.gov`
documentation, [click here][cg-docs]. The documentation below makes the
following assumptions.

- Assuming you have the `cf` binary installed on your machine and within your
  `$PATH`.
    - [Please read _Setting up the command line_][cg-docs-cli-install] for more
      information.
- Assuming that you have a `cloud.gov` account.
    - [Please read _Setting up your account_][cg-docs-cg-account] for more
      information.

[cg-homepage]: https://cloud.gov "Cloud.gov: Homepage"
[cg-docs]: https://docs.cloud.gov "Cloud.gov: Documentation"
[cg-docs-cli-install]: https://docs.cloud.gov/getting-started/setup/ "Cloud.gov: Setting up the command line"
[cg-docs-cg-account]: https://docs.cloud.gov/getting-started/accounts/ "Cloud.gov: Setting up your account"

### Automated deployment

This project uses [CircleCI][cci-homepage] for continuous deployment. Our
current process deploys our `staging` branch and our `master` branch to their
own [`staging`][vote-staging] and [`production`][vote-production] URLs.

[cci-homepage]: https://circleci.com "CircleCI: Homepage"
[vote-staging]: https://vote-gov-staging.apps.cloud.gov "Vote USA: Staging"
[vote-production]: https://vote.gov "Vote USA: Production"

### Manual deployment

Using the `cf` command-line tool, you can run a manual deployment to either
`staging` or `production` by targeting the corresponding organization / space
and as long as you have access to `cf push` the target. More information on
deploying to `cloud.gov` can be found [here][cg-deploy-hw] and [here][cg-deploy-ss].

[cg-deploy-hw]: https://docs.cloud.gov/getting-started/your-first-deploy/ "Cloud.gov: Your First Deploy"
[cg-deploy-ss]: https://docs.cloud.gov/apps/static/ "Cloud.gov: Deploying Static Sites"

> Manual deployments are not necessary as all deployments _should_ go through
> CircleCI.

To check which space you're targeting using the `cf` command-line tool, type the
following in your terminal.

```sh
cf target
```

#### Building the `vote.gov` site locally

The `vote.gov` site is built using the `npm run build` command. This command
looks for an environment variable containing the site's base-URL. This URL must
be assigned to the `SITE_BASEURL` variable before running `npm run build` and
must be set to the proper value depending on the space you're targeting.

Type the following in your terminal to build the English site for the `staging`
space:

```sh
npm run build
```

Type the following in your terminal to build the English site for the
`production` space:

```sh
NODE_ENV=production npm run build
```

Type the following in your terminal to build the Spanish site for the `staging`
space:

```sh
# NOTE: Building the Spanish version of the site is currently experimental
NODE_LANG=spanish npm run build
```

Type the following in your terminal to build the Spanish site for the
`production` space:

```sh
# NOTE: Building the Spanish version of the site is currently experimental
NODE_LANG=spanish NODE_ENV=production npm run build
```


#### Pushing to a target

Once you've built the `vote.gov` English site locally by running the above
command, you can push your changes up to the targeted space.

Type the following in your terminal to deploy to the `staging` space:

```sh
# NODE: Deploying the Spanish version of the site is experimental
cf push -f manifest-staging.yml
```

Type the following in your terminal to deploy to the `production` space:

```sh
# NODE: Deploying the Spanish version of the site is experimental
cf push
```

### Vote.usa.gov redirector

During the re-launch of `vote.gov`, we realised that there were lingering
issues with cached redirects between `vote.gov` and `vote.usa.gov`. To
fix this, we created a minimal nginx configuration which:

  * redirects front page requests to `https://vote.gov/?1` (the query string
    was added to defeat a previously-cached 301 redirect)
  * redirects all other file requests to the original S3 bucket containing
    the `vote.usa.gov` assets

The manifest and configuration for this redirector app can be found in the
`redirector` folder.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
>All contributions to this project will be released under the CC0
>dedication. By submitting a pull request, you are agreeing to comply
>with this waiver of copyright interest.

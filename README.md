# Vote.gov

This repository contains the files and infrastructure to run the `vote.gov`
website. 

 Section | Description
 ------- | -----------
 [Federalist staging builds](https://federalistapp-staging.18f.gov/sites) | Federalist staging builds 
 [Federalist production builds](https://federalistapp.18f.gov/sites) | Federalist production builds
 [Installation](#installation)   | Installing the project locally.
 [Development](#development)     | Development workflow using `gulp`.
 [Deployment](#deployment)       | Automated & Manual deployment information on Federalist
 [Contributing](CONTRIBUTING.md) | Contributing to the project.
 [Wiki](https://github.com/usagov/vote-gov/wiki) | `usagov/vote-gov` wiki.


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

To start the local webserver for the English and Spanish site and have hugo watch
for changes:

```sh
npm start
```

Optional: To have gulp watch for changes to the assets and content folder run: 

```sh
$ gulp watch 
```

Then open a new terminal, navigate to this directory, and run: 

```sh
npm start
``` 

The English website is now available at [`http://localhost:1313/`](http://localhost:1313/).

The Spanish website is now available at [`http://localhost:1313/es/`](http://localhost:1313/es/).

### Descriptions for optional `gulp [ flags ]` task prefixes

These flags are 100% optional and can be omitted from any tasks that are
affected by them.

- `no-test` This flag disables linters and tests for all assets.
- `production` This flag enables minification and compression of all assets in
  prep for a production environment.

## Deployment

The microsite is deployed on [Federalist.18f.gov][fed-homepage]. To read `Federalist`
documentation, [click here][fed-docs]. The documentation below makes the
following assumptions.

- Assuming that you have Federalist access. 
    - [Please read _Access and Permissions_](https://federalist.18f.gov/documentation/access-permissions/) for more
      Information.

[fed-homepage]: https://federalist.18f.gov "Federalist.18f.gov: Homepage"
[fed-docs]: https://federalist.18f.gov/documentation/ "Federalist.18f.gov: Documentation"

### Automated deployment

This project uses [Federalist](https://federalist.18f.gov) for continuous deployment. Our
current process deploys our `staging` branch and our `master` branch to their
own [`staging`][vote-staging] and [`production`][vote-production] URLs.

To view the build for another branch, see the links below and replace <BRANCH> with the name of the branch. The build for the branch must have completed successfully. 

For production builds: https://cg-9e8debaf-b030-4825-a43c-cb2bc850c96c.app.cloud.gov/preview/usagov/vote-gov/<BRANCH>/ 

For staging builds: https://cg-82f344a8-cccc-4f34-b090-19d55b2b6585.app.cloud.gov/preview/usagov/vote-gov/<BRANCH>/ 

[vote-staging]: TBD "Vote USA: Staging"
[vote-production]: https://vote.gov "Vote USA: Production"

### Manual deployment

Using the `cf` command-line tool, you can run a manual deployment to either
`staging` or `production` by targeting the corresponding organization / space
and as long as you have access to `cf push` the target. More information on
deploying to `cloud.gov` can be found [here][cg-deploy-hw] and [here][cg-deploy-ss].

[cg-deploy-hw]: https://docs.cloud.gov/getting-started/your-first-deploy/ "Cloud.gov: Your First Deploy"
[cg-deploy-ss]: https://docs.cloud.gov/apps/static/ "Cloud.gov: Deploying Static Sites"

> Manual deployments are not necessary as all deployments _should_ go through
> Federalist.

Information about launching a live site on Federalist can be found at the [launch checklist](https://federalist.18f.gov/documentation/launch-checklist/).

To check which space you're targeting using the `cf` command-line tool, type the
following in your terminal.

```sh
cf target
```

#### Building the `vote.gov` site locally

To build the `vote.gov` site locally , run  `npm start` . This command calls the `gulp website` task and starts the hugo server.  

To mimic the Federalist build run `npm run federalist`. To start the server run ‘hugo server’ .


#### Continuous delivery

Federalist is a continuous deployment-like build environment that automatically pushes the vote.gov application for staging and production.
Any commits made to `staging` will be automatically built on Federalist. 

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

---

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
>All contributions to this project will be released under the CC0
>dedication. By submitting a pull request, you are agreeing to comply
>with this waiver of copyright interest.

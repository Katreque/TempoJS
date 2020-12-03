# Contributing Guide

## Open Development

All work on TempoJS happens directly on GitHub. Both core team members and external contributors send pull requests which go through the same review process.

## Semantic Versioning

We follow [semantic versioning](https://semver.org/). We release patch versions for critical bugfixes, minor versions for new features or non-essential changes, and major versions for any breaking changes. Every significant change is documented in the [changelog file](https://github.com/Katreque/TempoJS/blob/master/CHANGELOG.md).

## Development Workflow

After cloning TempoJS, run _npm i_ to fetch its dependencies. Then, you can run several commands:

-   _npm run flow_ runs the Flow typechecks.
-   _npm run code-check_ checks the code style.
-   _npm test_ runs all tests.
-   _npm run build_ creates a build folder after running code-check and tests with the productions files.

All code manipulation and tests happens on the /lib folder.

## Your First Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub.](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take it over but you should still leave a comment.

## Sending a Pull Request

**Before submitting a pull request**, please make sure the following is done:

1. Fork the repository and create your branch from master.
2. Run _npm i_ in the repository root.
3. If you’ve fixed a bug or added code that should be tested. **Add tests!**
4. Ensure the test suite passes with _npm test_.
5. Check your code style with _npm run code-check_.
6. Make sure everything is right with _npm run build_. If no error messages are thrown, you should send your pull request. :3

## Bugs

### Known Issues

We are using [GitHub Issues](https://github.com/Katreque/TempoJS/issues) for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn’t already exist.

### Reporting New Issues

The best way to get your bug fixed is to provide a reduced test case. Use any code playground you like to reproduce the bug and use it on your Issue.

## Style Guide

We use an automatic code formatter called [Prettier](https://prettier.io/). Then, eslint will catch most issues that may exist in your code. You can check the status of your code styling by simply running _npm run code-check_.

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at [Airbnb’s Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction.

## How to Get in Touch

Join [Terê AWS User Group](https://discord.gg/SD3FtBy) on Discord! :3

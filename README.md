# sustainability

JavaScript web frontend experiments split between a user website and an interface project.

## Local development

Commands below come from the checked-in manifest; they were inspected, not executed during this repository pass. Use an isolated local checkout without production credentials.

```sh
cd Interface
npm ci --ignore-scripts
npm run dev
npm run start
npm run build
npm run lint
```

Install hooks are disabled in the example to avoid automatic downloads, compilation or deployment. If the application needs an install-time generator, follow its existing project instructions after review. Environment requirements must be checked in the source before enabling external integrations; no credentials are supplied by these examples.

Stack observed in the manifest: react, next. The presence of a script is not proof its check passes.

Generated/dependency files are already tracked. Ignore rules prevent future additions but do not remove existing tracked files; removal needs a separately reviewed change.

License: the existing checked-in license remains unchanged.

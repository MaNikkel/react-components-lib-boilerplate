# Stages in npm

## Publishing a package

```npm run manage -- --publish <patch | minor | major>```

Publishes the package and increments its version, it automatically sets the tag to ```development``` so you can install the latest version with ```npm i <pkg>@development```

## Adding package to stages

```npm run manage -- --add <development | test | production>```

Adds the latest ```package.json``` version to ```<development | test | production>``` environment, so ypu can install with ```npm i <pkg>@<env>```

The ```production``` tag also sets the version to ```latest``` so, when running ```npm i <pkg>``` you install the latest production version
const pkg = require('./package.json')
const { exec } = require('child_process')

function execCommand(command) {
  return new Promise(function (resolve, reject) {
    exec(command, (error, stdout, stderr) => {
      if (error) {
          console.log(`ERROR: ${error.message}`);
          reject()
          return;
      }
      if (stderr) {
          console.log(`RESULT: ${stderr}`);
          resolve()
          return;
      }
      console.log(`RESULT: ${stdout}`);
      resolve()
    })
  })
}

const MAPPED_ARGS = {
  PUBLISH: '--publish',
  ADD: '--add'
}

const PUBLISH_TYPES = ['patch', 'minor', 'major']
const ADD_TYPES = ['development', 'test', 'production']

function parseArgs(args = []) {
  args.forEach((arg, index) => {
    switch (arg) {
      // PUBLISHES TO DEV
      case MAPPED_ARGS.PUBLISH: {
        const publishType = args[index + 1]
        if (!PUBLISH_TYPES.includes(publishType)) {
          const msg = `--publish requires <${PUBLISH_TYPES.join(' | ')}> option`
          throw new Error(msg)
        } else {
          execCommand('npm run build')
          .then(() => (execCommand(`npm version ${publishType}`)))  
          .then(() => (execCommand('npm publish --tag development')))
          .then(() => console.log('SUCCESS'))
          .catch((err) => console.error(`ERROR: ${err}`))
        }
        break;
      }

      case MAPPED_ARGS.ADD: {
        const addType = args[index + 1]
        if (!ADD_TYPES.includes(addType)) {
          const msg = `--add requires <${ADD_TYPES.join(' | ')}> option`
          throw new Error(msg)
        } else {
          const packageVersion = `${pkg.name}@${pkg.version}`

          execCommand(`npm dist-tag add ${packageVersion} ${addType}`)
          .then(() => {
            if (addType === 'production') {
              return execCommand(`npm dist-tag add ${packageVersion} latest`)
            }
          })
          .then(() => console.log('SUCCESS'))
          .catch((err) => console.error(`ERROR: ${err}`))
        }
      }
    }
  })

}

parseArgs(process.argv)
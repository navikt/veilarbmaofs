// tslint:disable
const spawn = require('cross-spawn');

function runner(spawner, cmd) {
    const [ prog, ...args ] = cmd.split(' ');
    const result = spawner(
        prog,
        args,
        { stdio: 'inherit' }
    );
    if (result.signal) {
        if (result.signal === 'SIGKILL') {
            console.log(
                'The build failed because the process exited too early. ' +
                'This probably means the system ran out of memory or someone called ' +
                '`kill -9` on the process.'
            );
        } else if (result.signal === 'SIGTERM') {
            console.log(
                'The build failed because the process exited too early. ' +
                'Someone might have called `kill` or `killall`, or the system could ' +
                'be shutting down.'
            );
        }
        process.exit(1);
    }
    return result;
}

function run(cmd) {
    return runner((...args) => spawn.sync(...args), cmd);
}
run.async = function (cmd) {
    return runner((...args) => spawn(...args), cmd);
}

module.exports = run;

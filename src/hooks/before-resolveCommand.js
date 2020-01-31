
module.exports = (hookArgs) => {
    return (args) => {
        // commandName: string, commandArguments: string[], argv: string[]
        var [commandName, commandArguments, argv] = args;
        if (commandName === "publish") {
            commandName = "build";
            // TODO: if not existing
            argv.push("--for-device");
            argv.push("--release");
            argv.push("--env.cloudPublish");
        }

        return { commandName, commandArguments, argv };
    };
}
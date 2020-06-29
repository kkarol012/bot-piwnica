module.exports.makePool = function (channel, commandArray) {
    commandArray.splice(0, 2)
    let str = commandArray.join([separator = ' '])
    channel.send(str)
        .then(message => { 
            message.react('✅');
            message.react('❌');
         })

}
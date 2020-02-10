const db = require('./db')
const select = 'SELECT uv.var_name, uv.var_value FROM user_variables uv LEFT JOIN users u on u.id = uv.user_id where u.discord_id = $1'
const createUser =
    `with ta as (
    INSERT INTO users (discord_id) VALUES ($1)
      ON CONFLICT (discord_id) 
      DO
           nothing 
      RETURNING id
  )
  select id from ta`
const selectUser = 'SELECT id FROM users where discord_id = $1'

const insert = `INSERT INTO user_variables (user_id, var_name, var_value) VALUES ($1, $2, $3)
ON CONFLICT (user_id, var_name) 
DO
    UPDATE
    SET var_value = EXCLUDED.var_value`

async function setValue(searchArray, channel, author) {
    insertValues(searchArray, channel, author).catch((e) => {
        console.error(e + searchArray.join(','))
        channel.send('Nie udało mi się zapamietać tego :(')
    })
}

async function insertValues(searchArray, channel, author) {
    searchArray.splice(0, 2)
    const varName = searchArray[0]
    searchArray.splice(0, 1)
    const value = searchArray.join(' ')
    const res = await db.query(createUser, [author.id])
    let userId
    if (res.rows.size > 0) {
        userId = res.rows[0].id
    } else {
        userId = await db.query(selectUser, [author.id])
        userId = userId.rows[0].id
    }
    const insertedVariable = await db.query(insert, [userId, varName, value])

    if (insertedVariable.rowCount < 1) {
        throw 'Nie udało się zapisać danych w bazie array:'
    }
    channel.send('Dobrze, będę pamietać o tym')
}

async function getAllValues(channel, author, message) {
    let id
    if (message.mentions.users.size > 0) {
        id = message.mentions.users.keys().next().value 
    } else {
        id = author.id
    }
    const res = await db.query(select, [id])
    if (!res.rows[0]) {
        channel.send('Nie posiadasz zapisanych ważnych informacji')
        return
    }
    let response = ''
    res.rows.map(item => {
        response += `${item.var_name}: ${item.var_value} \n`
    })
    channel.send(response)
}

module.exports = {
    setValue: setValue,
    getAllValues: getAllValues
}
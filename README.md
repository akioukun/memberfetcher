# memberfetcher
A discord member fetcher self-bot using discord.js-selfbot-v13 from aiko-chan-ai

## How to use:

First step is getting you authorization token by using developer tools.
You can do this by going to network tab in developer tools, to an xhr request, and find the "Authorization" header. Copy it and save it for later.

Second step is getting the guild_id by using developer tools.
You can do this by going to the discord server you want to fetch members from, then open network tab in developer tools, and search for the request containing "with_mutual_guilds". In the request url you will find the parameter "guild_id". Copy it and save it for later.

Now to actually use this:

` node index.js [guild_id] [authorization_token] `

without the [].
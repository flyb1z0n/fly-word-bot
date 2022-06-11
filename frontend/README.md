## Setup local environment:
### Prerequisites:
* node = v16.13.1
* run `npm i` to install necessary dependencies

### Run web app localy
1. Add a custom host to hosts file (for MacOS - `/etc/hosts`), e.g `http://local.bot.test`

```
# /etc/hosts
127.0.0.1   local.bot.test
```
2. Run `npm start`
3. Verify that `http://local.bot.test` opens a index page of you webapp

### Telegram test environment
1. Create and account and own bot in test environment - [details](https://core.telegram.org/bots/webapps#using-bots-in-the-test-environment)
2. Add local URL(`http://local.bot.test`) to the bot menu
(select bot in @botfather menu -> Bot settings -> Menu Button)

Now your local WebApp is available on the test environment by clicking `Menu button` of your bot.
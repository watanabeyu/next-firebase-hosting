# next-firebase-hosting
- firebase hosting
- with next
- with typescript
- with recoil
- with spectre.css
- with typestyle
- with eslint
- with stylelint
- with google analytics
- with Noto Sans JP
- with GitHub Actions

## start
```bash
# local development
$ npm run dev

# confirm serve
$ npm run serve:development
$ npm run serve:production

# deploy
$ npm run deploy:development
$ npm run deploy:production
```

## actions secret
```
FIREBASE_TOKEN
GITHUB_TOKEN
SLACK_WEBHOOK_URL
```

## development
- Edit basic auth configuration - [./functions/index.ts](./functions/index.ts)

## firebase setting
- Edit [.firebaserc](.firebaserc)

## configuration
- Environment variables are embedded

### how to
```jsx
console.log(process.env.URL)
```
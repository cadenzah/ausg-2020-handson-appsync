# ToDoList

[🎢 Try the demo here](https://cadenzah.github.io/todolist-react)

![How it looks](app.png)

Simple React Todolist Application

## Features

- Create a new todo
- Update a todo (`'DONE'` or `'PENDING'`)
- Delete a todo
- Loading sequence for initial data fetching

## How to run locally

1. Clone the repository
2. `npm install`
3. `npm run dev`

> **NOTE**: Currently, dummy data is included in the project, so it is ready to run without any DB!

## How to deploy on GitHub Page

1. Add following values in `.env` file (`/config/env/.env`):

```
# .env
REPO_NAME=<GITHUB_REPOSITORY_NAME>
REPO_URL=https://<GITHUB_ID>.github.io/<GITHUB_REPOSITORY_NAME>
```

2. Run `npm run gh-pages`
3. Include the output `/docs` in the `master` branch of your project
4. `git push origin master`
5. Go to your repository page, navigate into [Settings → GitHub Pages → Source], and choose **`master branch /docs folder`**.

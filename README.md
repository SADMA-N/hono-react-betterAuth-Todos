# Local Dev

1. To install dependencies:

```sh
bun install
```

2. Copy `.env.example` to your own `.env` file and fill in variable

3. To setup database

```sh
docker compose up -d
bun run db:migrate
```

4.  To run:

```sh
bun run dev
```

open http://localhost:3000

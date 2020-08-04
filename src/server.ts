import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/User'
import cookieParser from 'cookie-parser'

(async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver]
    }),
    context: ({ req, res }) => ({ req, res })
  })

  await createConnection()

  const app = express()

  app.use(cookieParser())

  app.use((req, _, next) => {
    console.log(req.cookies)
    next()
  })

  server.applyMiddleware({ app, cors: false })

  app.listen(4000, () => {
    console.log('express server started')
  })
})()

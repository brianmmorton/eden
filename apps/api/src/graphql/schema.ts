import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/UserResolver.js'
import { PropertyResolver } from './resolvers/PropertyResolver.js'

export const createSchema = async () => {
  return await buildSchema({
    resolvers: [UserResolver, PropertyResolver],
    emitSchemaFile: true,
    validate: true,
  })
} 
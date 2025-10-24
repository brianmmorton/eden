# Application - Cursor AI Rules

## Project Overview

This is a full-stack real estate investment application with React frontend, GraphQL API, and Supabase backend.

## Technical Guidelines

### Architecture

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend**: Node.js + Express + GraphQL Yoga + TypeScript
- **Database**: Supabase (PostgreSQL) with Prisma ORM
- **Authentication**: Supabase Auth
- **Deployment**: Vercel (frontend) + Railway/Render (backend)

### Code Quality Standards

- Use TypeScript for all new code
- Follow existing code patterns and conventions
- Implement proper error handling
- Add appropriate TypeScript types
- Use existing UI components from shadcn/ui
- Follow GraphQL schema conventions

### File Organization

```
apps/
├── web/src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── lib/           # Utilities and configurations
│   └── stores/        # State management
└── api/src/
    ├── graphql/       # GraphQL schema, resolvers, entities
    ├── lib/           # Database and external service clients
    └── config/        # Application configuration
```

### GraphQL Conventions

- Use Relay-style connections for pagination
- Implement proper input validation
- Follow existing resolver patterns
- Use TypeScript for all GraphQL types
- Generate schema with `npm run generate:schema`
- Always use fragments to access data in components, working up to master lazy loaded query

### Database Guidelines

- Use Prisma for all database operations
- Create migrations for schema changes: `npx prisma migrate dev`
- Follow existing naming conventions
- Implement proper relationships and constraints

### Performance Considerations

- Implement proper caching strategies
- Optimize database queries
- Use React.memo and useMemo appropriately
- Minimize bundle size
- Minimize rerenders by isolating component state changes and listeners

## Common Patterns

### GraphQL Resolver Pattern

```typescript
@Resolver(() => Property)
export class PropertyResolver {
  @Query(() => [Property])
  async properties(@Ctx() ctx: Context): Promise<Property[]> {
    // Implementation follows API specification
  }
}
```

### Database Operation Pattern

```typescript
export async function createProperty(data: PropertyInput): Promise<Property> {
  return prisma.property.create({
    data: {
      // Implementation follows infrastructure specification
    },
  });
}
```

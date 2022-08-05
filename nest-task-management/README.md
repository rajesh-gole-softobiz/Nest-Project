# Task Management Application (REST API)

## NestJS Module
`Each application hasat least one module - the root module. That is the starting point of the application`

## @Module Decorator Properties

### Providers : 
`Array of providers to be available within the module via dependency injection`

### Controllers :
`Array of controllers to be instantiated within the module`

### exports :
`Array of providers to export to other modules`

------------
## NestJS Controllers

`Responsible for handling incoming request and returing response to the client`
`Bound to a specific path (for example, "/tasks" for the task resource).`
`Contain handlers, which handle endpoints and request methods(GET, POST, DELETE etc)`

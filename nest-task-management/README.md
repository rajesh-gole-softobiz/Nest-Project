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


## NestJS Providers

`Can be injected into constructors if decorated as an@Injectable, via dependency injection`

`Can be plain value, a class, sync/async factory etc`

`Providers must be provided to a module for them to be usable`

`Can be exported from a module - and then be available to other modules that import it`

## What is a Service?

`Defined as providers. Not all providersare services.`
`A service will be called from a controller to validate data, create an item in the database and return a response`



### Creating a Task Module
`> nest g mo tasks `

### Creating a Task Controller
`> nest g co tasks --no-spec`

### Creating a Task Service
`> nest g service tasks --no-spec`


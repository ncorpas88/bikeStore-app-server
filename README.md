# The Bike Hub



#### [Client Repo here](https://github.com/ncorpas88/bikeStore-app-server.git)

# Server Structure

## Collections

### companies

```javascript
{
  id,
  name,
  country,
  founded,
  website,
  image
}
```

### bikes

```javascript
 {
   id,
   name,
   fraem_material,
   discipline,
   color,
   weight_kg,
   image, 
   comapnyId,
 }
```

## Used API Endpoints in the App

| HTTP Method | URL                         | Request Body                 | Description                                                    |
| ----------- | --------------------------- | ---------------------------- | -------------------------------------------------------------- |
| GET         | `/bikes`                    |                              | Sends all games                                                |
| GET         | `/:bikeId?_expand=company`  | {name,discipline...}         | Obtener detalles de una bicicleta y su mpresa                  |
| POST        | `/bikes`                    |                              | Crear una nueva bicicleta                                      |
| PUT         | `/bikes/:bikeId`            | {title, description, isFav}  | Actualizar una bicicleta existente                             |
| DELETE      | `/bikes/:bikeId`            |                              | Eliminar una bicicleta                                         |
| GET         | `/companies`                |                              | Obtener lista de empresas                                      |
|
 
## Links

### Collaborators

[Natanael Corpas Rivero](https://github.com/ncorpas88)


### Project

[Repository Link Client](https://github.com/ncorpas88/bikeStore-app-front.git)

[Repository Link Server](https://github.com/ncorpas88/bikeStore-app-server.git)

[Deploy Link](https://bikestore-app.netlify.app/)


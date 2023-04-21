# API HOTEL RESERVATION

Este proyecto consiste en desarrollar un API de reservas de habitaciones de hotel utilizando Node.js y Express Framework.

## Base de datos

Para el proyecto se he propuesto el siguiente esquema de base de datos: 

![database](https://user-images.githubusercontent.com/62448385/233517645-9db060aa-263d-4d2f-a57e-8ef90b206bc4.png)


## Endpoints

El API de reservas de habitaciones de hotel tiene los siguientes endpoints principales: 

 - `GET /api/reservations` Retorna un json con todos las reservaciones almacenadas, esto es importante para tener un control de los mismos.
 - `GET /api/reservations/find/:id` Retorna un json de una reservación filtrada por su ID, es necesario cuando se quiere buscar una reservación en específico.
 - `POST /api/reservations/add` Este endpoint recibe un json con los datos de la reservación, es una parte fundamental del proyecto pues permite agregar las reservaciones.
 - `PUT /api/reservations/update/:id` Este endpoint recibe un json con los campos actualizados de una determinada reservación buscada por su ID.
 - `PUT /api/reservations/update/status/:id` Este endpoint recibe un json con el nuevo valor que tomará el estado de una reservación buscada por su ID, esta también es una parte muy importante del proyecto, pues, permite cambiar el estado de una reservación una vez se haya pagado o cancelado (eliminado).
 - `DELETE /api/reservations/delete/:id` El endpoint se utiliza para eliminar una reservación existente en la base de datos buscada por su ID.
 
 Además de los ya presentados endpoints principales, también se ha considerado otros endpoints secundarios:
 
 - `GET /api/customers` Retorna un json con todos los clientes registrados en la base de datos.
 - `GET /api/customers/find/:id` Retorna un json de un cliente filtrado por su ID, se utiliza cuando se desear buscar un cliente en específico.
 - `GET /api/rooms` Retorna un json con todas las habitaciones que se tienen almacenadas.
 - `GET /api/rooms/find/:id` Retorna un json de una habitación filtrado por su identificador único (ID), se utiliza cuando se desear buscar una habitación en específico.

## Instalación

Para instalar y ejecutar el proyecto, seguir los siguientes pasos:

1. Clonar el repositorio en tu ordenador.
2. Instalar las dependencias con el comando `npm install`.
3. Solo por fines prácticos se ha compartido el archivo `.env` la cuál está en la raíz del proyecto teniendo las variables de para la conexión de la base de datos que se encuentra alojada en AWS.
4. Iniciar la aplicación con el comando `npm start`.

## Docker

El proyecto se puede ejecutar en un contenedor de Docker siguiendo los siguientes pasos:

1. Crear una imagen de Docker con el siguiente comando: `docker build -t reservation-api .`
2. Ejecutar el contenedor con el siguiente comando: `docker run -p 5000:5000 -d reservation-api`
3. Para detener el contenedor usar el siguiente comando: `docker stop [mi_contenedor]`, donde [mi_contenedor] es el ID del contenedor que acabomos de crear (reservation-api).

## Autor

Este proyecto ha sido creado por **Diego Enriquez Castillo**

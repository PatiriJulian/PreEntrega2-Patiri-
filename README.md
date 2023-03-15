# Entrega Final -Patiri

Entrega final del alumno [Julian Patiri](https://www.linkedin.com/in/julian-patiri-50539816b/) del curso de ReacJS de CODERHOUSE Comisión 39550 en el año 2023.

Repositorio en [GitHub](https://github.com/PatiriJulian/PreEntrega3-Patiri)

Preview [Vercel](pre-entrega3-patiri.vercel.app)

***
## Descripcion de la App

Aplicacion creada en ReactJS como proyecto para un curso de CoderHouse dictado por el profesor Federico Osandon de la Comisión 39550. El tutor del proyecto fue  Joaquin Gonzalez.

La app esta basada en una empresa ficticia (PatiriCalzados) la cual se dedica a la venta de ropa. 

Cuenta con un Home en el cual podemos ver todos los productos disponibles. Clickeando en la imagen o el boton Detalles nos redirecciona a la ficha del producto desde donde podemos agregar uno o mas items al carrito de compra. Un contador de items se actualizara en el header la app, desde el mismo podemos acceder a la seccion de compra.
Desde la seccion de compra podemos remover productos, vacia el carrito y generar una orden de compra.
La app cuenta con filtros por categorias en el Header

Para correr la app debemos ingresar a una consola y poner el comando `npm run dev` o ingresando al link de [Vercel](pre-entrega3-patiri.vercel.app)


## Dependecias

 - `bootstrap: "^5.2.3"`, Template utilizado para organizar la app
 - `firebase: "^9.17.2"`, Base de datos de Google que le brinda soporte a la app
 - `react: "^18.2.0"`, Framework principal de la app
 - `react-bootstrap: "^2.7.0"`, Dependencia de Booststrap para React
 - `react-dom: "^18.2.0"`, Paquete de entrada al DOM y procesadores de del servidor de React
 - `react-icons: "^4.7.1"`, Icono utilizado para agregar el Cart
 - `react-router-dom: "^6.8.1"`, Enrutador de la app


## Rutas del proyecto

El proyecto esta formado por una App ruteado por medio de `react-router-dom 6.8.1`.

- `/` esta es la [ruta](https://github.com/PatiriJulian/PreEntrega3-Patiri/blob/main/src/App.jsx#L22) principal del proyecto donde se monta `HomeContainer`
- `/producto/` esta es la [ruta](https://github.com/PatiriJulian/PreEntrega3-Patiri/blob/main/src/App.jsx#L23) principal del proyecto donde se monta `ItemDetail`
- `/categoria/` esta es la [ruta](https://github.com/PatiriJulian/PreEntrega3-Patiri/blob/main/src/App.jsx#L24) principal del proyecto donde se monta `CategoryContainer`
- `/carrito/` esta es la [ruta](https://github.com/PatiriJulian/PreEntrega3-Patiri/blob/main/src/App.jsx#L25) principal del proyecto donde se monta `Cart`


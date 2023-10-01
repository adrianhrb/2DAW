# INTRODUCCIÓN A LA PROGRAMACIÓN WEB

Apuntes desde: https://github.com/sdelquin/dsw/blob/main/ut1/README.md  

Cuando una web se muestra en nuestro ordenador, el contenido que se muestra está programador en un lenguaje de marcado que habitualmente es HTML. Además, normalmente suele venir acompañado de un estilo que el navegador debe aplicar a ese HTML, esta es la hoja de estilos CSS.  

Este proceso, se hace mediante un servidor web que responde a nuestra petición "ofreciendo" los archivos para que el navegador los renderice. Este es el ejemplo clásico de una comunicación cliente-servidor.

## Páginas web estáticas y dinámicas

- **Páginas estáticas**: Son aquellas que están almacenadas en el servidor en su forma definitiva, tal y como se crearon aquellas cuyo contenido no varia. Si se quiere cambiar su contenido, hay que modificar el código. Son útiles en casos como la carta de un restaurante o similares.
- **Páginas dinámicas**: Son aquellas que se caracteruzan porque su contenido cambia en función del escenario que se plantee (usuario identificado o no, configuraciones, espacio personal...). Dentro de estas distinguimos:
    - ***Con código que ejecuta el navegador***, normalmente a través de JavaScript y es un código que ejecuta el navegador cuando se muestra el contenido del HTML.
    - ***HTML formado como resultado de un programa ejecutado en servidor***. Lo que cambia respecto a la anterior es la forma en la que se obtiene el contenido.

En las páginas dinámicas, lo común es que la parte donde se ejecuta el código tenga que buscar la información (base de datos, repositorios...) y la mostrará de diferente forma según la misma. El ejemplo más claro es el del correo, dependiendo del usuario el HTML mostrará un contenido u otro.  

Aunque las web dinámicas parecen la mejor opción, en ocasiones las estáticas son mejor opción porque nos ofrecen ventajas como (sin obviar la gran desventaja a la hora de actualizar el contenido):
1. No es necesario hacer código a excepción del HTML y CSS (incluso ni estos son necesarios).
2. Si su contenido no varía se puede: Tener mejor capacidad de cacheo, Mejora en los motores de búsqueda y mejoras en el posicionamiento, enlaces invariantes...
3. Un servidor web simple que solo se comunica con el navegador  

## Aplicaciones web  

Las aplicaciones web emplean páginas web dinámicas para crear aplicaciones web que corran en un servidor web y se muestren en el navegador. Una de las primeras en aparecer fueron los clientes de correo.  

Hoy día hay muchas aplicaciones web para muchas cosas como procesadores de texto, gestión de tareas, edición de imágenes...Esto tiene sus ventajas y desventajas:
| Ventajas                                                                                                                                                                                                                                      | Inconvenientes                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **No es necesario instalarlas** en aquellos equipos en que se vayan a utilizar. Se instalan y se ejecutan solamente en un equipo, en el servidor, y esto es suficiente para que se puedan utilizar de forma simultánea desde muchos clientes. | **Dependemos de una conexión con el servidor** para poder utilizarlas. Si nos falla la conexión, no podremos acceder a la aplicación web.                                                                                                                                       |
| Como solo se encuentran instaladas en un equipo, **es muy sencillo gestionarlas** (hacer copias de seguridad de sus datos, corregir errores, actualizarlas).                                                                                  | Aún con conexión a internet, el "cuello de botella" de la velocidad de ejecución suele ser la **transmisión de datos** a través de la red. Esto puede ralentizar la aplicación web, sobre todo si la arquitectura no está bien diseñada para escalar con el número de usuarios. |
| **Se pueden utilizar en todos aquellos sistemas que dispongan de un navegador web**, independientemente de sus características (no es "tan" necesario un equipo potente) o de su sistema operativo.                                           |                                                                                                                                                                                                                                                                                 |


## Ejecución de código en el servidor y en el cliente
Cuando el navegador web tiene que ejecutar algún problema para obtener la página antes de enviarla al navegador hablamos de ***SERVER SIDE RENDERING (SSR)***, ya que la total o  gran parte de la página web ha sido generada en el servidor, y en la parte de cliente no se ha tenido que ejecutar nada. A pesar de ello, es posible que esa página tenga un código (normalmente JavaScript) que ejecutar al llegar al navegador, pero normalmente es relacionado con animaciones y la interactividad de la página modificando de una forma u otra su contenido. Tradicionalmente, se hacia esta división porque en la parte de cliente no se podían obtener los datos y había que generarlos en el servidor web.  

En el otro caso, si el navegador o la parte de cliente tiene un código que se tiene que ejecutar en el propio navegador(obtiene los datos y muestra el contenido con ese JavaScript) hablamos de una aplicación ***CLIENT SIDE RENDERING (CSR)***.  

A día de hoy, muchas de las aplicaciones web combinan las dos tecnologías. Incluso se podrian hacer con un solo lenguaje, ya que JavaScript o TypeScript se han convertido en lenguajes aplicados en ambos entornos (Backend y Frontend)
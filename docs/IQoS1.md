---
id: IQoS1
title: Conocer la red y sus aplicaciones
---

Es necesario identificar cómo consumen recursos las aplicaciones para tomar acciones relacionadas al QoS, como garantizar un ancho de banda mínimo en las aplicaciones críticas (p.ej. ERP), o vigilar o bloquear aplicaciones no críticas.

### Identificar qué aplicaciones necesitan QoS
Para identificar qué aplicaciones requieren protección  (por ser críticas para el negocio) a veces es necesario revisar todas las aplicaciones que compiten por recursos en la red. Se puede analizar el tráfico de las siguientes maneras:
+ **NetFlow:** protocolo que permite capturar los datos requeridos para aplicaciones de planificación, supervisión y contabilidad de redes.
+ **Network-based Application Recognition (NBAR):** herramienta de clasificación para identificar tráfico en la capa de aplicación. Genera estadísticas por interfaz y por protocolo. También puede hacer clasificaciones en sub-puertos.
+ **QoS Device Manager (QDM):** aplicación para la administración de red que cuenta con una interfaz gráfica fácil de usar.

### Identificar las características de las aplicaciones
Es importante identificar las aplicaciones que son sensibles a pérdidas de paquetes o latencias, las que se consideran _agresivas_ por consumir mucho ancho de banda, determinar el tamaño de los paquetes de la aplicación, etc.
Por ejemplo, podemos identificar que las aplicaciones para intercambiar video y audio en tiempo real son sensibles a latencias; o que las aplicaciones para transferir archivos o páginas HTTP piden _ráfagas de datos_ en distintos puntos.

### Identificar las características de la red
Aquí se enlistan algunas medidas para conocer el estado de la red:
+ Hacer diagramas de la topología de la red para saber cuántos dispositivos necesitan actualización.
+ Ver el uso de CPU de los routers en periodos de alta actividad para decidir cómo compartir la carga.
+ Determinar el retraso máximo que las aplicaciones críticas pueden aguantar.
+ Identificar enlaces lentos para encontrar cuellos de botella y poder decidir cómo aplicar mecanismos para optimizar links.

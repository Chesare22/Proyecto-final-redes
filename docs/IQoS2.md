---
id: IQoS2
title: Manejo del tráfico
---
### Crear clases y sus políticas
Al tener identificadas las aplicaciones de la red podemos construir criterios para dividirlas en clases. Posteriormente se crean políticas para marcar cada clase de tráfico con valores de prioridad (_DSCP_ o _precedencia IP_).

### Cómo marcar el tráfico
Las marcas servirán para tratar el tráfico cuando salga del router, por lo cual sería óptimo que el router más cercano a la red sea el que ponga las marcas y aplique políticas para manejar el tráfico. Las marcas se harán cuando los datos ingresen al router y las políticas se van a aplicar cuando los datos salgan.
Cada salto va a mantener las marcas del tráfico y puede aplicar las mismas políticas. Solo es necesario volver a marcar el tráfico si viene de un dominio no confiable.

### Extenderse al resto de la red
Al haber marcado el tráfico es posible usar esas marcas para crear una _política para clasificar el tráfico_ en el resto de los segmentos de red. Igual hay que definir en qué dirección se va a aplicar la política.
Se recomienda probar la implementación de QoS en un entorno de laboratorio si es posible.

### Monitorear los efectos de la política
Cisco recomienda usar _QoS Policy Manager (QPM)_ como un sistema para el control centralizado de políticas de control y una forma automática de desplegar políticas.

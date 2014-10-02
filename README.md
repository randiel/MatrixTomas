Matrix Tomas v0.1
-----------------

Sistema de toma de inventarios desarrollado para la empresa Matrix Consulting.

Matrix Tomas. esta pensado para ser utilizado como un SaaS que permita arrendar las funcionalidades del sistema de 
toma de inventarios a otras empresas del mismo rubro o clientes que deseen utilizarlo.

El sistema consta de los siguientes modulos:
- Configuración de proyecto
- Apertura de datos
- Ejecutar lectura
- Generar informes

La arquitectura de la aplicación consta de: 
- Vista y casos de uso: vistas en javascript (ExtJS) para las interfaces de usuario.
- Controlador ligero: Controlador automatizado para reenviar la solicitud de la vista a las reglas de negocio para su resolución.
- Datos y reglas de negocio: Logica aplicada al contexto que proviene de la vista.

El formato de transferencia de datos es JSON.




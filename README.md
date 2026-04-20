# Generador de PDF con jsPDF

Aplicación web simple que permite generar documentos PDF a partir de un título y contenido ingresados por el usuario.

## Características

- **Interfaz de usuario**: Formulario con campo de título y área de texto para el contenido
- **Generación de PDF**: Crea documentos PDF utilizando la librería jsPDF
- **Ajuste de texto**: El texto se ajusta automáticamente al ancho de la página
- **Salto de página automático**: Detecta cuando el contenido excede el espacio disponible y crea nuevas páginas
- **Validación de datos**: Muestra mensaje de error si los campos están vacíos usando SweetAlert2

## Requisitos

- Navegador web moderno con conexión a Internet
- Las siguientes librerías se cargan desde CDN:
  - Bootstrap 5.3.8 (estilos)
  - SweetAlert2 11 (mensajes de alerta)
  - jsPDF 2.5.1 (generación de PDF)

## Uso

1. Abre `index.html` en un navegador web
2. Ingresa un título en el campo correspondiente
3. Escribe el contenido de la factura en el área de texto
4. Haz clic en el botón **"Generar PDF"**
5. El navegador descargará el archivo `invoice.pdf`

## Estructura del proyecto

```
genera-pdf-js/
├── index.html    # Interfaz de usuario
├── main.js       # Lógica de generación de PDF
└── README.md     # Este archivo
```

## Funcionamiento técnico

### main.js

La función `generatePDF()` realiza los siguientes pasos:

1. **Obtención de datos**: Lee los valores de los elementos HTML con ID `title` y `content`
2. **Validación**: Verifica que ambos campos contengan texto; si están vacíos, muestra una alerta de error
3. **Configuración del documento**: Crea una instancia de `jsPDF` y define márgenes (10mm)
4. **Escritura del título**: Configura el tamaño de fuente a 18pt, ajusta el texto al ancho máximo y lo escribe en el PDF
5. **Escritura del contenido**: Configura el tamaño de fuente a 12pt, ajusta cada línea al ancho máximo
6. **Gestión de páginas**: Antes de escribir cada línea, verifica si se alcanzó el final de la página; si es así, agrega una nueva página
7. **Guardado**: Descarga el documento con el nombre `invoice.pdf`

### index.html

- Proporciona la estructura HTML con Bootstrap para estilos
- Incluye los scripts de las librerías necesarias
- Conecta el botón con la función `generatePDF()` del archivo main.js
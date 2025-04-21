# TMMS-24

Este proyecto implementa un formulario interactivo para el test **TMMS-24**, diseñado para evaluar tres aspectos clave de la inteligencia emocional: percepción emocional, comprensión de sentimientos y regulación emocional. A continuación, se detallan las características principales y funcionalidades del código.

## Características Principales

### 1. **Generación Dinámica de Preguntas**
- Las preguntas del test se generan dinámicamente y se agrupan en secciones para facilitar la navegación y la comprensión.

### 2. **Validaciones del Formulario**
- Se incluyen validaciones para garantizar que los datos ingresados sean correctos antes de ser procesados.

### 3. **Gestión de Datos con Supabase**
- Se utiliza la biblioteca **Supabase** para almacenar y gestionar los resultados de los usuarios de manera eficiente.

### 4. **Exportación de Resultados**
- Los resultados del test pueden descargarse en los siguientes formatos:
  - **PDF**: Utilizando la biblioteca `jsPDF`.
  - **Excel**: Utilizando la biblioteca `XLSX`.

### 5. **Filtrado de Resultados**
- Los resultados guardados pueden filtrarse por:
  - **Nombre**
  - **Género**

### 6. **Interpretación de Resultados**
- Las funciones de interpretación están basadas en rangos predefinidos, diferenciados por género (hombres y mujeres).

### 7. **Interfaz Amigable y Responsiva**
- El diseño del formulario es:
  - **Responsivo**: Adaptado para diferentes dispositivos.
  - **Amigable**: Enfocado en la usabilidad y claridad de la información presentada.

### 8. **Opciones Adicionales**
- **Botón para limpiar campos**: Permite reiniciar el formulario.
- **Tabla de resultados guardados**: Muestra los resultados almacenados de manera estructurada.

## Estructura del Código

### **JavaScript**
- Maneja eventos del formulario, realiza cálculos y manipula el DOM.
- Implementa las funciones de validación, almacenamiento, exportación e interpretación de resultados.

### **Supabase**
- Se utiliza para la gestión de datos, permitiendo almacenar y recuperar resultados de manera segura.

### **Bibliotecas Utilizadas**
- **Supabase**: Gestión de datos.
- **XLSX**: Exportación a Excel.
- **jsPDF**: Exportación a PDF.

### **Comentarios**
- El código está estructurado con comentarios claros que explican las secciones clave, facilitando su lectura y mantenimiento.

## Cómo Usar el Proyecto

1. **Completar el Formulario**: Responde las preguntas del test.
2. **Guardar Resultados**: Los datos se almacenan automáticamente en Supabase.
3. **Filtrar Resultados**: Usa los filtros para buscar resultados específicos.
4. **Exportar Resultados**: Descarga los resultados en formato PDF o Excel.
5. **Limpiar Campos**: Reinicia el formulario para realizar un nuevo test.

## Requisitos

- **Navegador Moderno**: Compatible con las últimas versiones de Chrome, Firefox, Edge, etc.
- **Conexión a Internet**: Para la integración con Supabase.

## Instalación y Configuración

1. Clona este repositorio:2. Instala las dependencias necesarias:
3. Configura las credenciales de Supabase en el archivo correspondiente.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request con tus mejoras.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

# TMMS-24

Este proyecto implementa un formulario interactivo para el test **TMMS-24**, dise�ado para evaluar tres aspectos clave de la inteligencia emocional: percepci�n emocional, comprensi�n de sentimientos y regulaci�n emocional. A continuaci�n, se detallan las caracter�sticas principales y funcionalidades del c�digo.

## Caracter�sticas Principales

### 1. **Generaci�n Din�mica de Preguntas**
- Las preguntas del test se generan din�micamente y se agrupan en secciones para facilitar la navegaci�n y la comprensi�n.

### 2. **Validaciones del Formulario**
- Se incluyen validaciones para garantizar que los datos ingresados sean correctos antes de ser procesados.

### 3. **Gesti�n de Datos con Supabase**
- Se utiliza la biblioteca **Supabase** para almacenar y gestionar los resultados de los usuarios de manera eficiente.

### 4. **Exportaci�n de Resultados**
- Los resultados del test pueden descargarse en los siguientes formatos:
  - **PDF**: Utilizando la biblioteca `jsPDF`.
  - **Excel**: Utilizando la biblioteca `XLSX`.

### 5. **Filtrado de Resultados**
- Los resultados guardados pueden filtrarse por:
  - **Nombre**
  - **G�nero**

### 6. **Interpretaci�n de Resultados**
- Las funciones de interpretaci�n est�n basadas en rangos predefinidos, diferenciados por g�nero (hombres y mujeres).

### 7. **Interfaz Amigable y Responsiva**
- El dise�o del formulario es:
  - **Responsivo**: Adaptado para diferentes dispositivos.
  - **Amigable**: Enfocado en la usabilidad y claridad de la informaci�n presentada.

### 8. **Opciones Adicionales**
- **Bot�n para limpiar campos**: Permite reiniciar el formulario.
- **Tabla de resultados guardados**: Muestra los resultados almacenados de manera estructurada.

## Estructura del C�digo

### **JavaScript**
- Maneja eventos del formulario, realiza c�lculos y manipula el DOM.
- Implementa las funciones de validaci�n, almacenamiento, exportaci�n e interpretaci�n de resultados.

### **Supabase**
- Se utiliza para la gesti�n de datos, permitiendo almacenar y recuperar resultados de manera segura.

### **Bibliotecas Utilizadas**
- **Supabase**: Gesti�n de datos.
- **XLSX**: Exportaci�n a Excel.
- **jsPDF**: Exportaci�n a PDF.

### **Comentarios**
- El c�digo est� estructurado con comentarios claros que explican las secciones clave, facilitando su lectura y mantenimiento.

## C�mo Usar el Proyecto

1. **Completar el Formulario**: Responde las preguntas del test.
2. **Guardar Resultados**: Los datos se almacenan autom�ticamente en Supabase.
3. **Filtrar Resultados**: Usa los filtros para buscar resultados espec�ficos.
4. **Exportar Resultados**: Descarga los resultados en formato PDF o Excel.
5. **Limpiar Campos**: Reinicia el formulario para realizar un nuevo test.

## Requisitos

- **Navegador Moderno**: Compatible con las �ltimas versiones de Chrome, Firefox, Edge, etc.
- **Conexi�n a Internet**: Para la integraci�n con Supabase.

## Instalaci�n y Configuraci�n

1. Clona este repositorio:2. Instala las dependencias necesarias:
3. Configura las credenciales de Supabase en el archivo correspondiente.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o env�a un pull request con tus mejoras.

## Licencia

Este proyecto est� licenciado bajo la [MIT License](LICENSE).

---
name: code-conventions
description: Convenciones de nomenclatura y estilo de código para este proyecto (Next.js 15 App Router, export estático, JavaScript/JSX). Usar al escribir código nuevo, al revisar/refactorizar código existente, o al decidir cómo nombrar un componente, hook, variable, constante, archivo o carpeta nuevos.
metadata:
  version: "1.0.0"
---

# Code Conventions

Estandariza cómo se nombran clases/tipos, componentes, variables, funciones, constantes, archivos y carpetas en este repo. El proyecto es **JavaScript/JSX puro** (sin TypeScript) sobre Next.js 15 App Router con `output: 'export'` — las reglas de la sección 4 (TypeScript) se documentan para el día en que se adopte TS, pero hoy no aplican a código real.

## 1. Reglas generales de nomenclatura

| Elemento | Convención | Ejemplo |
|---|---|---|
| Componentes React | PascalCase | `function ImcCalculator()` |
| Clases (si las hay), interfaces, types, enums | PascalCase | `class ApiError`, `UserProfile` |
| Variables, funciones, métodos, propiedades | camelCase | `userProfile`, `calcularImc()` |
| Constantes de módulo (valores fijos, no reasignados) | UPPER_SNAKE_CASE | `GAUGE_MIN`, `CATEGORIAS_IMC` |
| Carpetas | kebab-case | `evaluacion-fisica`, `calculo-de-indicadores` |
| Archivos | kebab-case (ver excepciones en §2) | `recurso-article.jsx` |

No apliques UPPER_SNAKE_CASE a estado de React (`useState`) ni a objetos que cambian según props — esa regla es solo para constantes verdaderas a nivel de módulo.

## 2. Archivos: regla general + excepciones (resuelve el conflicto kebab-case vs PascalCase)

**Regla general: kebab-case para todo archivo nuevo**, incluidos los de componentes (`recurso-article.jsx`, `bar-maraton-vina.jsx`). El nombre del archivo **no tiene que coincidir en casing** con el nombre exportado: un archivo `recurso-article.jsx` puede exportar perfectamente `export function RecursoArticle()`.

Por qué no usar `PascalCase.tsx` para archivos de componentes (la convención habitual en muchos proyectos React/Next con TypeScript):
1. Este proyecto es JS/JSX, no TS — el sufijo `.tsx` no aplica.
2. El repo ya tiene una convención kebab-case/lowercase dominante en carpetas de rutas y en archivos de features. Introducir PascalCase para archivos crearía una tercera convención compitiendo con las que ya existen, en vez de resolver la inconsistencia.

Si el proyecto migra a TypeScript en el futuro, evaluar entonces si conviene alinear los archivos de componentes a `PascalCase.tsx`; hasta ese momento, kebab-case es la regla.

**Excepción 1 — nombres reservados de Next.js App Router.** `page.jsx`, `layout.js`, `loading.jsx`, `error.jsx`, `not-found.jsx`, `template.jsx`, `route.js` deben mantenerse exactamente como Next.js los exige. No es una elección de estilo: el framework los resuelve por nombre de archivo.

**Excepción 2 — sufijos de feature ya establecidos** en `src/features/*` (documentado en `CLAUDE.md`): `<feature>.component.jsx`, `<feature>.constants.js`, `<feature>.utils.js`, `<feature>.calculos.js`. Es un patrón deliberado y ya extendido en el repo — mantenerlo tal cual en vez de forzarlo a guiones, para no competir con la convención documentada existente.

**Deuda existente** (corregir de forma oportunista, al tocar esos archivos por otra razón — no abrir un PR solo para esto salvo que se pida explícitamente):
- `src/shared/components/footer..jsx` — doble punto, probable typo. Debería ser `footer.jsx`.
- `src/shared/components/cajaComentarios.jsx` → `caja-comentarios.jsx`.
- `src/shared/components/installBootstrap.js` → `install-bootstrap.js`.

Renombrar un archivo existente rompe sus imports en cada lugar que lo referencia — si el usuario pide aplicar esta skill a código ya escrito, señala las desviaciones pero no renombres nada sin confirmación explícita.

## 3. React / Next.js específico

- **Componentes** → PascalCase, sin importar el casing del archivo que los contiene.
- **Hooks personalizados** → camelCase empezando con `use` (`useDebounce`, `useMediaQuery`). Hoy el proyecto no tiene hooks custom propios (solo los de React: `useState`, `useEffect`, `useId`, `useRef`); al crear el primero, seguir esta regla.
- **Server Actions y funciones auxiliares** → camelCase, verbo primero (`createReservation`, `sendContactForm`). Nota: con `output: 'export'` este proyecto no soporta Server Actions ni Route Handlers (requieren runtime de servidor) — la regla queda documentada para si el proyecto abandona el export estático; hoy no hay código real al que aplicarla.
- **Event handlers**: prefijo `handle` en la función definida dentro del componente, prefijo `on` en el prop que la recibe — `<button onClick={handleSubmit}>`.

## 4. TypeScript (solo si se adopta — hoy el proyecto es JS puro)

- Interfaces y type aliases → PascalCase, **sin prefijo `I`** (`UserProfile`, no `IUserProfile`).
- Usa `type` para uniones y props simples; `interface` para formas pensadas para extenderse/mergearse. Ambos en PascalCase de todas formas.
- Enums → nombre del enum en PascalCase (`OrderStatus`); miembros también en PascalCase (`Pending`, `Shipped`), no UPPER_SNAKE_CASE — ese estilo se reserva para constantes de valor primitivo en runtime (§1), no para miembros de un tipo.

## 5. Evitar nombres ambiguos

Malos: `data`, `temp`, `info`, `x`, `flag`, `val`, `handleClick2`.
Buenos: `userProfile`, `filteredComments`, `pesoEnKg`, `isFormValid`.

Regla práctica: el nombre debe responder "¿qué contiene / qué hace?" sin necesidad de leer la implementación. Para booleanos, prefijo `is`/`has`/`should` (`isModalOpen`, `hasError`, `shouldRetry`).

## Cómo aplicar esta skill

- **Código nuevo**: sigue estas reglas desde el primer commit.
- **Revisión/refactor de código existente**: señala las desviaciones encontradas (nombre, archivo, regla violada) pero no renombres archivos ni identificadores fuera del alcance pedido — proponlo y espera confirmación, ya que renombrar rompe imports y el historial de `git blame`.

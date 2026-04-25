# Análisis AI-Tell — Ramírez Ignition · APEX PROTOCOL
_Fecha: 2026-04-17_

---

## TIPOGRAFÍA

🚨 **Tipografía — Jerarquía de sección 100% predecible y clonada**
> `section-tag → section-title → section-sub` es exactamente igual en las 4 secciones (catálogo, galería, features, testimonios). El CSS para `.section-header` se aplica sin variación. El ojo lo detecta subconscientemente como template.

✅ **Fix**
> Rompe el patrón en al menos una sección. La galería no necesita subtítulo — basta el tag. Features podría tener el título a la izquierda con las cards a la derecha, no centrado. Catálogo podría tener el contador de resultados activos integrado al header en vez de subtítulo estático.

---

🚨 **Tipografía — DM Sans como body sin justificación de marca**
> Chakra Petch y DM Mono tienen propósito claro (display y datos técnicos). DM Sans como body es la elección "segura" por defecto — la tercera fuente más usada en sitios generados, después de Inter y Plus Jakarta Sans.

✅ **Fix**
> Considera reemplazarla por **Barlow** (más industrial, más auto) o eliminarla y forzar a DM Mono para párrafos cortos — ya que casi todo el body en el sitio es copy breve. Menos fuentes, más identidad.

---

## COLOR

🚨 **Color — Cyan en absolutamente todo sin tensión visual**
> `var(--cyan)` se usa para: CTAs primarios, hovers, precios, íconos, glow de stats, scroll indicator, galería overlay, pagination activa, status bar, línea de scroll, marca, HUD data, scan bar… Sin un segundo acento con propósito, el cyan pierde jerarquía — todo brilla igual.

✅ **Fix**
> Designa un acento secundario real. El `--ok: #00E5A8` ya existe pero solo aparece en el boot. Úsalo en los precios (el dato más importante) para diferenciarlo del cyan informativo. Así: cyan = navegación/interacción, verde = valor/precio. Jerarquía semántica visible.

---

🚨 **Color — `opacity: 0.3` como solución lazy en quote marks + scan bar**
> `.testi-quote { opacity: 0.3 }` y `.hero::after { opacity: 0.4 }` — reducir opacidad como decoración es el atajo más predecible. La comilla de cita no está integrada al diseño, solo flotando diluida.

✅ **Fix**
> Elimina el `"` gigante completamente. Reemplázalo con una línea izquierda de acento (`border-left: 2px solid var(--cyan)` con padding) — más limpio, más funcional, más propio del sistema APEX. Para el scan bar, considera reducirlo a `opacity: 0.15` o eliminarlo (ya tienes suficiente movimiento con la ribbon).

---

## LAYOUT & ESPACIADO

🚨 **Layout — `padding: 7rem 0` idéntico en las 4 secciones de contenido**
> `section-catalog`, `section-gallery`, `section-features`, `section-testimonials` — todas `padding: 7rem 0`. Zero ritmo vertical. El sitio "respira" de manera mecánica, como si un loop generara cada sección.

✅ **Fix**
> Introduce variación intencional. Propuesta concreta:
> - Catalog: `padding: 6rem 0 8rem` (más peso abajo por el grid denso)
> - Gallery: `padding: 5rem 0` (más apretada, como un lookbook)
> - Features: `padding: 9rem 0` (la sección más importante necesita más aire)
> - Testimonials: `padding: 6rem 0 4rem`

---

🚨 **Layout — `max-width: 1280px; margin: 0 auto; padding: 0 2rem` copy-pasteado en cada container**
> Hay 6 contenedores distintos con exactamente el mismo bloque. Ningún breakout, ninguna sección edge-to-edge. Todo siempre en la misma caja.

✅ **Fix**
> La galería debería ser **full-bleed** (sin container, sin padding lateral) — el grid de imágenes que toca los bordes de pantalla da más impacto visual. Las imágenes son el producto; no las comprimas en una caja.

---

## COMPONENTES

🚨 **Componentes — Features: ícono + h4 + p × 6 en grid 3 columnas**
> Esta es literalmente la sección más generada por AI en internet. `shield-check`, `credit-card`, `headset`, `file-check`, `geo-alt`, `stars` — 6 íconos Bootstrap en un grid uniforme con título + descripción. Es "Fast · Secure · Scalable" en español.

✅ **Fix**
> Rediseña la sección como **"spec sheet"** de la empresa (coherente con las cards de autos). En vez de 6 cards idénticas, muestra 3 features con más peso: número grande a la izquierda (tipo dato técnico), texto a la derecha. Ejemplo:
> ```
> 08     Años verificando cada motor
> 200+   Familias que manejan con confianza
> 0      Sorpresas en la documentación
> ```
> Más brutal, más de marca, menos template.

---

🚨 **Componentes — Scroll indicator `<línea vertical> + "SCROLL"`**
> Aparece en el 90% de los heroes de sitios tech dark generados por AI. Es una decoración que no aporta — el usuario ya sabe scrollear.

✅ **Fix**
> Elimínalo. El hero ribbon en movimiento ya comunica que hay más abajo. Si quieres un indicador, usa una flecha (`↓`) con DM Mono pequeño, posicionada sobre el primer stat del stats-bar, que actúe como ancla real.

---

🚨 **Componentes — Social icons en footer con `border-radius: 50%`**
> Círculos perfectos para íconos sociales — uno de los patrones más predecibles de cualquier footer generado. Sin identidad, puro template.

✅ **Fix**
> Usa `border-radius: var(--r)` (cuadrado con esquinas suaves, consistente con el sistema) en vez de círculo. O elimina los bordes y ponlos inline con separadores `·`. El footer ya tiene el brand bien trabajado — los íconos circulares lo banalizan.

---

## MICROCOPY & CONTENIDO

🚨 **Microcopy — Títulos de features genéricos (equivalente ES de "Fast, Secure, Scalable")**
> "Vehículos Verificados · Financiamiento Flexible · Atención Personalizada · Documentación Limpia · Entrega a Domicilio · Garantía de Satisfacción" — estos títulos podrían estar en cualquier concesionario del mundo. No dicen nada de Ramírez Ignition específicamente.

✅ **Fix**
> Ancla el copy a detalles reales y específicos:
> - ❌ "Vehículos Verificados" → ✅ "Revisión de 47 puntos antes de publicar"
> - ❌ "Atención Personalizada" → ✅ "Ignacio responde en menos de 2 horas"
> - ❌ "Garantía de Satisfacción" → ✅ "Si algo no cuadra en los primeros 72h, lo arreglamos"
> Especificidad = credibilidad = humanidad.

---

🚨 **Microcopy — Testimonios con "Carlos M." / "Ana R." / "Roberto V."**
> Iniciales genéricas sin foto, sin ciudad, sin detalle verificable. El formato `"` + texto + nombre abreviado es el patrón de testimonios placeholder que AI genera por defecto. Nada los distingue de Lorem Ipsum.

✅ **Fix**
> Si son clientes reales, úsalos con nombre completo + ciudad de El Salvador + el dato que los hace creíbles (ej: "compró en marzo 2025"). Si no son reales, elimina la sección y reemplaza con **una sola reseña de Google** embedida o screenshot — infinitamente más creíble que 3 testimonios anónimos perfectos.

---

🚨 **Microcopy — "Más que un showroom — una promesa de calidad"**
> Esta frase aparece bajo "Por qué Nosotros" (`section-sub`). Es el tipo de copy uplift que AI genera automáticamente para rellenar subtítulos. "Más que X — una Y" es una estructura gastada.

✅ **Fix**
> Reemplaza con algo específico de la marca: *"Cada auto que ves aquí, Ignacio lo manejó primero."* — o simplemente elimina el `section-sub` de esa sección. No todo necesita subtítulo.

---

## EFECTOS & DECORACIÓN

🚨 **Efectos — Scanline + scan bar como decoración de hero**
> El `repeating-linear-gradient` de líneas horizontales (`::before`) más la barra animada (`::after`) es el combo "yo soy tech/cyberpunk" más sobreusado en sitios dark-mode generados por AI en 2024-2026. Aparece en cada proyecto con estética HUD.

✅ **Fix**
> Elimina el scanline (`::before`). Mantén la scan bar (`::after`) pero reduce su `opacity` de 0.4 a 0.12 y aumenta la duración a 14s — sutil en vez de obvio. El hero ya tiene suficiente personalidad con la ribbon, los HUD corners y el gradiente diagonal.

---

🚨 **Efectos — `translateY(-2px)` / `translateY(-3px)` mecánico en hover de todo**
> `.btn-primary-hud:hover`, `.btn-ghost-hud:hover`, `.nav-cta:hover`, `.btn-consult:hover`, `.feature-card:hover`, `.testi-card:hover`, `.footer-socials a:hover` — todos suben entre 1-3px en hover. Es el micro-lift aplicado como regla universal sin criterio.

✅ **Fix**
> Reserva el translateY lift para elementos que "flotan" conceptualmente (cards, modales). Los botones inline como `btn-consult` no necesitan lift — usa solo `filter: brightness()`. Las feature cards podrían hacer algo más interesante: un `border-color` transition + un `box-shadow` lateral izquierdo en cyan en vez de lift vertical.

---

## RESUMEN FINAL

**Total de AI tells encontrados: 12**

### Top 3 prioritarios a corregir primero:

1. **🔴 Features section (ícono+título+párrafo×6)** — Es la sección que más delata el origen template. Un rediseño completo como spec-sheet numérico transforma la percepción de todo el sitio.

2. **🔴 Microcopy de features + testimonios** — El copy genérico arruina lo que el diseño técnico construye. Especificidad real > polish visual.

3. **🟠 Padding uniforme 7rem + jerarquía de sección clonada** — Agregar ritmo vertical y romper el patrón de header en al menos una sección hace que el sitio se sienta diseñado, no generado.

---

### Vibe check general

Actualmente el sitio comunica: **"SaaS de gestión de flotas con fondo oscuro"**.

Lo que debería comunicar: **"Concesionario salvadoreño con criterio, que conoce sus autos mejor que tú"** — algo entre *Bring A Trailer* (confianza técnica, sin pretensión de lujo falso) y un taller de tuning centroamericano que sabe lo que vende. La identidad ya está en las fotos reales de los autos, en el número de WhatsApp directo, en el Jeep Wrangler junto al Porsche 911. El diseño todavía no refleja esa mezcla de carácter.

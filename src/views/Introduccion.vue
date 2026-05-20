<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 Las competencias ciudadanas constituyen un conjunto de habilidades que se desarrollan y practican en la vida cotidiana, permitiendo a las personas interactuar de manera consciente, respetuosa y constructiva en sociedad. Estas competencias implican reconocer la otredad, comprender las dinámicas sociales y asumir un papel activo en la construcción de entornos más justos y democráticos. En este sentido, no solo se adquieren de manera implícita, sino que requieren un proceso formativo intencionado que fortalezca las dimensiones cognitivas, emocionales y comunicativas del individuo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-pri.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
            p.mb-0 Dentro de este marco, las competencias comunicativas ocupan un lugar central, ya que posibilitan el establecimiento de diálogos constructivos, el respeto por la diversidad de opiniones y la adecuada gestión de conflictos. Siguiendo el planteamiento de Hymes, la competencia comunicativa trasciende el uso correcto del lenguaje, integrando la capacidad de saber cuándo, cómo y con quién comunicarse, de acuerdo con el contexto sociocultural. De esta manera, comunicarse eficazmente implica no solo cumplir con normas lingüísticas, sino también adaptarse a las situaciones y generar interacciones socialmente apropiadas que favorezcan la convivencia.
            br
            br
            p.mb-0 Por su parte, las competencias cognitivas son fundamentales para el ejercicio ciudadano, ya que permiten comprender la realidad, analizar información y tomar decisiones responsables. Estas competencias incluyen procesos como la valoración de argumentos, el pensamiento crítico, el multiperspectivismo y la comprensión de sistemas sociales complejos. A través de ellas, los individuos pueden interpretar su entorno, considerar distintos puntos de vista y prever las consecuencias de sus acciones, tanto a nivel individual como colectivo.

    .cajon.color-primario.p-lg-5.p-4.mb-5(data-aos="fade-right")
      p.mb-0 En conjunto, las competencias comunicativas y cognitivas se articulan para formar ciudadanos capaces de participar activamente en la sociedad, argumentar de manera fundamentada, escuchar al otro y contribuir a la resolución pacífica de conflictos. Por ello, este componente formativo está orientado a fortalecer dichas habilidades, proporcionando estrategias que permitan su desarrollo integral y su aplicación en diversos contextos, especialmente en aquellos donde el diálogo, la reflexión crítica y la toma de decisiones éticas son esenciales.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

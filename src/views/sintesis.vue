<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") El desarrollo de las competencias básicas y ciudadanas permite a los individuos comprender la realidad, analizarla críticamente y actuar de manera responsable en diferentes contextos. Estas competencias, junto con los enfoques de objetividad, subjetividad e intersubjetividad, favorecen la construcción de conocimientos significativos tanto a nivel individual como social. A su vez, fortalecen habilidades como la interpretación, la argumentación y la proposición, fundamentales para la toma de decisiones informadas y éticas. De este modo, la formación integral del aprendiz, basada en la reflexión, la actualización constante y la participación activa, se convierte en un elemento clave para contribuir al bienestar colectivo y al ejercicio de una ciudadanía consciente y comprometida.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama que muestra la relación entre competencias comunicativas, básicas y cognitivas, destacando su papel en la interacción social, el uso de recursos personales y el desarrollo de procesos mentales para la vida ciudadana.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

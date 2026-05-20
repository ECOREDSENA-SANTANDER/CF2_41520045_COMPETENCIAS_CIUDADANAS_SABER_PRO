<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Elementos de la comunicación
      
    .cajon.color-secundario.p-lg-5.p-4.mb-5(data-aos="fade-right")
      p.mb-0 La comunicación es un proceso fundamental en la interacción humana, mediante el cual se transmite información, ideas o emociones entre dos o más personas. Para que este proceso sea efectivo, intervienen los siguientes elementos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            img.img-t.img-a(src='@/assets/curso/tema1/1.svg', alt='Presenta el proceso comunicativo: un emisor transmite un mensaje a un receptor mediante un código y un canal, dentro de un contexto determinado.')
          .tarjeta.color-ac.p-4(x="21.7%" y="34.5%" numero="+")
            .h5.mb-2 Emisor
            p.mb-0 Es la persona que inicia la comunicación. Su función es transmitir un mensaje de manera clara y comprensible.
          .tarjeta.color-ac.p-4(x="54.5%" y="10.5%" numero="+")
            .h5.mb-2 Mensaje
            p.mb-0 Es la información que se desea comunicar. Debe ser claro, coherente y adecuado al contexto. 
          .tarjeta.color-ac.p-4(x="86.4%" y="32.1%" numero="+")
            .h5.mb-2 Receptor
            p.mb-0 Es quien recibe el mensaje. Su papel es interpretarlo y darle significado según su experiencia y contexto. 
          .tarjeta.color-ac.p-4(x="59.5%" y="69%" numero="+")
            .h5.mb-2 Código
            p.mb-0 Es el conjunto de signos o símbolos que se utilizan para transmitir el mensaje, como el idioma, gestos o señales. 
          .tarjeta.color-ac.p-4(x="72.5%" y="78%" numero="+")
            .h5.mb-2 Contexto
            p.mb-0 Es el entorno o situación en la que ocurre la comunicación, incluyendo factores sociales, culturales y ambientales que influyen en la interpretación del mensaje.
          .tarjeta.color-ac.p-4(x="45.6%" y="56.3%" numero="+")
            .h5.mb-2 Canal
            p.mb-0 Es el medio a través del cual se transmite el mensaje, por ejemplo, la voz, un texto escrito, una imagen o medios digitales. 

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Ejemplo aplicado &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    p.mb-4 Cuando una persona dice: “Respete las señales de tránsito”, está transmitiendo un mensaje que busca generar conciencia y promover comportamientos responsables en la vía. La comprensión de este mensaje dependerá del contexto, el lenguaje utilizado y la disposición del receptor.
    
    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/v0kevK8IZng?si=4cA-Ig1Sz9KDFuZj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Comunicándonos

    .cajon.color-primario.p-lg-5.p-4.mb-5(data-aos="fade-right")
      p.mb-0 Se invita al aprendiz a explorar este video para comprender la importancia de la comunicación y cómo influye en las relaciones y en la forma en que se transmiten y comprenden los mensajes.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Relaciones interpersonales &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-pri.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
            p.mb-0 Las relaciones interpersonales son interacciones fundamentales en la vida cotidiana, a través de las cuales las personas interactúan para brindar y obtener información sobre su entorno. Estas relaciones implican el uso de diferentes formas de comunicación, como señales, sonidos, gestos o palabras, que permiten transmitir mensajes y construir significados compartidos.
            br
            br
            p.mb-0 Para que las relaciones interpersonales sean adecuadas, es esencial desarrollar habilidades como la escucha activa y la capacidad de expresarse de manera clara y auténtica. Estas competencias favorecen la comprensión mutua y contribuyen a la resolución pacífica de conflictos.
    
    p.mb-5 Además, las relaciones interpersonales son clave para conocer las ideas, pensamientos y emociones de los demás, así como para expresar puntos de vista propios. En este proceso, la comunicación puede darse de forma oral, escrita o gestual, dependiendo del contexto y la intención comunicativa.

    .cajon.color-secundario.p-lg-5.p-4.mb-5(data-aos="fade-right")
      p.mb-0 En este sentido, la asertividad desempeña un papel fundamental. Según Rodríguez (s. f.), una persona asertiva es aquella que expresa sus ideas y sentimientos de manera honesta, ya sean positivos o negativos, sin agredir ni desvalorizar al otro. La asertividad implica comunicar con respeto, claridad y empatía, evitando mensajes hirientes. Por ello, para que sea efectiva, debe estar acompañada de consideración y elegancia en el trato hacia los demás, permitiendo así fortalecer las relaciones y lograr una comunicación más constructiva.

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/nfJPSfcl_tM?si=jluGYP-g3g0GN8J4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Criterios de comunicación asertiva

    .cajon.color-primario.p-lg-5.p-4.mb-5(data-aos="fade-right")
      p.mb-0 Se invita al aprendiz a analizar este video para reconocer los principios de la comunicación asertiva y su impacto en la expresión clara de ideas, el respeto por los demás y la mejora de las relaciones interpersonales.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Maneras de enfrentar las relaciones interpersonales 
    
    p.mb-5 Aguilar y Vargas (2010) clasifican los modos de asumir las relaciones interpersonales a partir del tipo de respuesta que adopta el interlocutor. De esta manera, se identifican tres formas principales: la respuesta ansiosa, la respuesta asertiva y la respuesta agresiva, cada una con características específicas que influyen en la calidad de la interacción y en la forma en que se gestionan los derechos propios y los de los demás.

    .titb.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub1.svg')" alt='Imagen decorativa')
      h3.mb-0.text-white Tipos de respuesta en las relaciones interpersonales

    .row.justify-content-center.align-items-stretch.mb-0(data-aos="fade-right")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg1.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/3.svg')
          h3.mb-4 Respuesta ansiosa
          p.mb-0 Se presenta cuando la persona actúa de manera pasiva y no logra defender sus propios derechos. Permite que otros los vulneren y suele ceder en sus decisiones. Como consecuencia, puede sentirse frustrada, triste, herida o ansiosa, al no expresar lo que realmente piensa o siente. 
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg2.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/4.svg')
          h3.mb-4 Respuesta asertiva
          p.mb-0 En este tipo de respuesta, la persona expresa sus ideas, emociones y necesidades de manera clara, directa y respetuosa. Defiende sus derechos sin vulnerar los de los demás, se muestra segura, empática y con confianza en sí misma, lo que favorece relaciones sanas y equilibradas. 
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-0
        .bg3.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/5.svg')
          h3.mb-4 Respuesta agresiva
          p.mb-0 Ocurre cuando la persona impone sus ideas sin considerar a los demás. Puede vulnerar los derechos del otro, actuar de forma impulsiva u hostil y tomar decisiones sin tener en cuenta diferentes puntos de vista. Este tipo de respuesta suele generar conflictos, deterioro en las relaciones y falta de respeto.
    

    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Formulación y resolución de problemas

    .bg4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema1/6.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/7.svg', alt='')
            p.mb-0(data-aos="fade-left") La formulación y resolución de problemas es una competencia fundamental que permite identificar, analizar y enfrentar situaciones de la vida cotidiana de manera organizada y efectiva. Implica reconocer una situación problemática, comprender sus causas, plantear posibles alternativas de solución y tomar decisiones fundamentadas en el análisis crítico. Este proceso no solo fortalece el pensamiento lógico y reflexivo, sino que también favorece la creatividad, la autonomía y la capacidad de adaptación. En el contexto ciudadano, desarrollar esta competencia resulta clave para abordar conflictos, proponer soluciones constructivas y participar de manera responsable en la transformación del entorno.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 ¿Hablar o comunicar? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/8.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Comunicar implica transmitir un mensaje con una intención clara hacia un interlocutor, de quien se espera algún tipo de reacción, ya sea visible (como responder, reír o actuar) o interna (como reflexionar o generar una emoción). Aunque en ocasiones esta respuesta no sea evidente o no coincida con lo esperado, sigue formando parte del proceso comunicativo.
            br
            br
            p.mb-0 Una comunicación efectiva se caracteriza por lograr resultados adecuados, ya que facilita y fortalece las relaciones interpersonales. Permite compartir pensamientos, emociones y creencias, favoreciendo un verdadero encuentro con el otro. Para que esto ocurra, es fundamental prestar atención a las distintas formas en que la otra persona se expresa. Cuando no existe esta atención, simplemente se habla, pero no se logra una comunicación real, lo que conduce a interacciones superficiales.

    .cajon.color-primario.p-lg-5.p-4.mb-5(data-aos="fade-right")
      p.mb-4 La comunicación no se limita a las palabras; también incluye el tono de voz, el silencio, la mirada, la postura corporal y otros gestos. Por ello, es importante reconocer que existen dos formas principales de comunicación: la verbal (lo que se dice) y la no verbal (cómo se dice). En muchos casos, puede presentarse una incongruencia entre ambas, es decir, se expresa un mensaje con palabras, pero el lenguaje corporal transmite algo diferente.
      p.mb-0 Esta contradicción, conocida como “doble mensaje”, puede generar confusión en quien recibe la información, dificultando la interpretación y aumentando la probabilidad de conflictos. En consecuencia, lograr coherencia entre lo verbal y lo no verbal es clave para una comunicación clara, efectiva y respetuosa.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 ¿Oír o escuchar? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    .row.justify-content-center.align-items-start.mb-5(data-aos="fade-right")
      .col-lg-8
        p.mb-4 Es importante diferenciar entre los verbos oír y escuchar. Oír se refiere únicamente a percibir sonidos, es decir, captar las palabras sin necesariamente comprenderlas. En cambio, escuchar implica prestar atención, comprender e interpretar el significado de lo que la otra persona quiere comunicar. Por ello, saber escuchar es una habilidad fundamental que puede aprenderse y fortalecerse con la práctica.
        p.mb-4 Sin embargo, en la vida cotidiana es frecuente encontrar dificultades en la escucha. En muchos casos, las personas no ceden el turno al interlocutor, interrumpen o no prestan atención suficiente. Esto puede ocurrir porque no se ha desarrollado adecuadamente esta habilidad, porque se comienza a pensar en la respuesta antes de que el otro termine de hablar, porque se reacciona de forma inmediata ante aquello que incomoda, o simplemente por distracción o falta de interés.
        .bg5.p-4.p-lg-5
          p.mb-0.mx-lg-2 Estas situaciones afectan la calidad de la comunicación, ya que impiden comprender completamente el mensaje y pueden generar malentendidos o conflictos. Por ello, escuchar activamente implica no solo oír, sino también mostrar disposición, atención y respeto hacia el otro.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/9.png')

    .cajon.color-acento-contenido.p-lg-5.p-4.mb-5(data-aos="fade-right")
      p.mb-0 Es importante reconocer que en cualquier dificultad comunicativa tanto el emisor como el receptor tienen responsabilidad. La comunicación es un proceso compartido, por lo que no se trata de atribuir la culpa a uno solo, sino de asumir una actitud consciente para mejorar la forma en que se expresa y se escucha.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Ejemplo de formulación y resolución de problemas en la comunicación

    p.mb-5 Un aprendiz tiene un conflicto con un compañero porque siente que no lo escuchan durante un trabajo en grupo. El problema surge cuando el estudiante habla (comunica sus ideas), pero el otro solo oye sin prestar atención ni comprender el mensaje.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12.offset-lg-2
        .row.justify-content-center.align-items-end
          .col-lg-9.ps-lg-0
            .crd.crd--avatarHorizontal.crd--first.py-lg-2.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema1/10.svg", alt="alt")
                .col
                  h5.mb-0 Formulación del problema
                  p.mb-0 Existe una falta de escucha activa que dificulta la comunicación y genera malentendidos en el equipo.
            .crd.crd--avatarHorizontal.cr1.py-lg-2.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema1/11.svg", alt="alt")
                .col
                  h5.mb-0 Resolución del problema
                  p.mb-0 El aprendiz decide expresar su inconformidad de manera clara y respetuosa, solicitando que se le escuche con atención. El compañero, por su parte, practica la escucha activa, prestando atención, evitando interrupciones y haciendo preguntas para comprender mejor.
            .crd.crd--avatarHorizontal.crd--last.py-lg-2.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema1/12.svg", alt="alt")
                .col
                  h5.mb-0 Resultado
                  p.mb-0 Se mejora la comunicación, se fortalecen las relaciones interpersonales y se logra un trabajo en equipo más efectivo.
          .col-lg-4.sob1.d-none.d-lg-block
            img.img-t(src="@/assets/curso/tema1/13.svg", alt="alt")
    

</template>
<script>
export default {
  name: 'Tema1',
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

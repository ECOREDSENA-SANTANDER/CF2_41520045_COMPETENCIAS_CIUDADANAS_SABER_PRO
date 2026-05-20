<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Competencias comunicativas y cognitivas.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué son las competencias básicas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Actividades recreativas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Conjunto de habilidades, conocimientos y actitudes.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Normas sociales.', esCorrecta: false },
            { id: 'd', texto: 'Métodos de evaluación.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Cuál es la finalidad de las competencias básicas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Memorizar contenidos científicos, tecnológicos y matemáticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Desarrollar capacidades para actuar de manera responsable en contextos personales y sociales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar los problemas de la vida.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Repetir la información.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 3,
          texto: 'La competencia interpretativa se relaciona con:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Crear soluciones.', esCorrecta: false },
            { id: 'b', texto: 'Comprender información.', esCorrecta: true },
            { id: 'c', texto: 'Defender ideas.', esCorrecta: false },
            { id: 'd', texto: 'Resolver ecuaciones.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 4,
          texto: 'La competencia argumentativa permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Comprender textos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Expresar opiniones con razones.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Memorizar datos.', esCorrecta: false },
            { id: 'd', texto: 'Dibujar ideas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 5,
          texto: 'La competencia propositiva consiste en:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Interpretar textos.', esCorrecta: false },
            { id: 'b', texto: 'Defender ideas.', esCorrecta: false },
            { id: 'c', texto: 'Plantear soluciones.', esCorrecta: true },
            { id: 'd', texto: 'Escuchar pasivamente.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 6,
          texto: 'La comunicación asertiva se caracteriza por:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Imponer ideas.', esCorrecta: false },
            { id: 'b', texto: 'Expresarse con respeto.', esCorrecta: true },
            { id: 'c', texto: 'Guardar silencio.', esCorrecta: false },
            { id: 'd', texto: 'Interrumpir.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué significa escuchar?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Percibir sonidos.', esCorrecta: false },
            { id: 'b', texto: 'Comprender el mensaje.', esCorrecta: true },
            { id: 'c', texto: 'Ignorar al otro.', esCorrecta: false },
            { id: 'd', texto: 'Hablar más fuerte.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué es oír?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Comprender el mensaje.', esCorrecta: false },
            { id: 'b', texto: 'Analizar ideas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Percibir sonidos sin comprender.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Argumentar.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 9,
          texto: 'La objetividad implica:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Opiniones personales.', esCorrecta: false },
            { id: 'b', texto: 'Juicios imparciales.', esCorrecta: true },
            { id: 'c', texto: 'Emociones fuertes.', esCorrecta: false },
            { id: 'd', texto: 'Experiencias propias.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 10,
          texto: 'La subjetividad se refiere a:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Realidad objetiva.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Opinión basada en experiencias personales.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Datos científicos.', esCorrecta: false },
            { id: 'd', texto: 'Hechos comprobables.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 11,
          texto: 'La intersubjetividad consiste en:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pensamiento individual.', esCorrecta: false },
            { id: 'b', texto: 'Conocimiento compartido.', esCorrecta: true },
            { id: 'c', texto: 'Datos matemáticos.', esCorrecta: false },
            { id: 'd', texto: 'Opinión única.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cuál es una competencia básica?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Competencia deportiva.', esCorrecta: false },
            { id: 'b', texto: 'Competencia cultural.', esCorrecta: true },
            { id: 'c', texto: 'Competencia física.', esCorrecta: false },
            { id: 'd', texto: 'Competencia técnica.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 13,
          texto: 'La competencia digital permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dibujar.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Usar tecnología de forma responsable.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Hacer deporte.', esCorrecta: false },
            { id: 'd', texto: 'Leer libros físicos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 14,
          texto: 'La competencia ciudadana implica:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Resolver ecuaciones.', esCorrecta: false },
            { id: 'b', texto: 'Participar en la sociedad.', esCorrecta: true },
            { id: 'c', texto: 'Usar redes sociales.', esCorrecta: false },
            { id: 'd', texto: 'Leer textos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 15,
          texto: '“Aprender a aprender” significa:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Memorizar.', esCorrecta: false },
            { id: 'b', texto: 'Aprender de forma autónoma.', esCorrecta: true },
            { id: 'c', texto: 'Copiar información.', esCorrecta: false },
            { id: 'd', texto: 'Escuchar sin analizar.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 16,
          texto: 'La autonomía e iniciativa personal se relaciona con:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Seguir órdenes siempre.', esCorrecta: false },
            { id: 'b', texto: 'Tomar decisiones propias.', esCorrecta: true },
            { id: 'c', texto: 'Evitar responsabilidades.', esCorrecta: false },
            { id: 'd', texto: 'Depender de otros.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 17,
          texto: 'La competencia cultural permite:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolver problemas matemáticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Valorar expresiones artísticas.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Usar tecnología.', esCorrecta: false },
            { id: 'd', texto: 'Leer textos científicos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué es la comunicación?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hablar sin escuchar.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Transmitir y comprender mensajes.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Escribir únicamente.', esCorrecta: false },
            { id: 'd', texto: 'Pensar en silencio.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 19,
          texto: 'El pensamiento crítico consiste en:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Repetir información.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Analizar y evaluar información.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Memorizar datos.', esCorrecta: false },
            { id: 'd', texto: 'Ignorar opiniones.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 20,
          texto: 'Las competencias ciudadanas permiten:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Evitar conflictos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Participar responsablemente en la sociedad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Resolver operaciones matemáticas.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Usar tecnología.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias comunicativas y cognitivas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Posee una buena comprensión sobre las competencias comunicativas y cognitivas.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

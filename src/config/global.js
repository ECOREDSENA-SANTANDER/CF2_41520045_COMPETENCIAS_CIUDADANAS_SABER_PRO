export default {
  global: {
    Name: 'Competencias comunicativas y cognitivas',
    Description:
      'Las competencias comunicativas y cognitivas son fundamentales para el desarrollo integral de las personas, ya que permiten comprender, procesar y expresar información de manera efectiva. Las competencias comunicativas facilitan la interacción con otros a través de habilidades como escuchar, hablar, leer y escribir, mientras que las competencias cognitivas involucran procesos mentales como la atención, la memoria, el análisis y la resolución de problemas, esenciales para el aprendizaje y la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Elementos de la comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Formulación y resolución de problemas',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Competencias básicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Enfoques del conocimiento',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Toma de decisiones',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Aprendizaje autónomo',
      significado:
        'capacidad del individuo para gestionar y dirigir su propio proceso de aprendizaje.',
    },
    {
      termino: 'Argumentación',
      significado:
        'habilidad para expresar ideas sustentadas en razones claras, coherentes y válidas.',
    },
    {
      termino: 'Ciudadanía',
      significado:
        'condición que implica derechos y deberes, así como la participación activa en la sociedad.',
    },
    {
      termino: 'Competencia digital',
      significado:
        'capacidad para utilizar de manera crítica, segura y responsable las tecnologías de la información.',
    },
    {
      termino: 'Competencias básicas',
      significado:
        'conjunto de habilidades, conocimientos y actitudes que permiten a una persona desenvolverse eficazmente en distintos contextos.',
    },
    {
      termino: 'Competencias ciudadanas',
      significado:
        'habilidades que facilitan la participación activa, responsable y ética en la sociedad.',
    },
    {
      termino: 'Intersubjetividad',
      significado:
        'construcción compartida del conocimiento a partir de la interacción social entre individuos.',
    },
    {
      termino: 'Interpretación',
      significado:
        'capacidad para comprender y dar significado a la información o a un texto.',
    },
    {
      termino: 'Normas',
      significado:
        'reglas que orientan el comportamiento de las personas dentro de un grupo o sociedad.',
    },
    {
      termino: 'Objetividad',
      significado:
        'enfoque basado en el análisis imparcial de la realidad, sin influencia de opiniones o emociones personales.',
    },
    {
      termino: 'Participación democrática',
      significado:
        'intervención activa de los ciudadanos en la toma de decisiones colectivas.',
    },
    {
      termino: 'Pensamiento crítico',
      significado:
        'habilidad para analizar, evaluar y reflexionar sobre la información antes de tomar decisiones.',
    },
    {
      termino: 'Proposición',
      significado:
        'capacidad para plantear soluciones, alternativas o nuevas ideas frente a una situación.',
    },
    {
      termino: 'Resolución de conflictos',
      significado:
        'proceso mediante el cual se buscan soluciones pacíficas y justas a desacuerdos o problemas.',
    },
    {
      termino: 'Subjetividad',
      significado:
        'interpretación de la realidad desde la perspectiva personal, influenciada por experiencias, creencias y emociones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar Morales, J. E. & Vargas Mendoza, J. E. (2010). Comunicación asertiva. Network de Psicología Organizacional. México: Asociación Oaxaqueña de Psicología A.C.',
      link: '',
    },
    {
      referencia:
        'Aguirre Rodríguez, J., Ventura Ruiz Balderrama, L., Burciaga Sánchez, B. G., & Carmona García, L. G. (2024). Comunicación asertiva en estudiantes de nuevo ingreso a la universidad. Ciencia Latina Revista Científica Multidisciplinar, 8(6), 219–238.',
      link: '',
    },
    {
      referencia:
        'Chaux, E., Lleras, J., Velásquez, A. M. (). Competencias Ciudadanas: de los estándares al aula. Ediciones Uniandes.',
      link: '',
    },
    {
      referencia:
        'Consejería de Educación, Ciencia y Formación Profesional. (2025). Orden de evaluación y acreditación de las competencias básicas (DOE núm. 205). Junta de Extremadura.',
      link: '',
    },
    {
      referencia:
        'Gámez Lara, J. A. (s. f.). Origen y desarrollo de las competencias básicas. Biblioteca Digital Mar de Cortés.',
      link: '',
    },
    {
      referencia:
        'García López, J. (s. f.). Las competencias básicas, ¿un nuevo enfoque educativo?',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano para la Evaluación de la Educación (ICFES). (s. f.). Competencias Ciudadanas - Prueba Saber Pro. Pruebasicfes.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2004). Competencias ciudadanas: habilidades para saber vivir en paz. Boletín MEN.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2022). Estándares básicos de competencias ciudadanas. Colombia Aprende.',
      link: '',
    },
    {
      referencia:
        'Rodríguez Jiménez, L. (s. f.). Comunicación asertiva. Binasss.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jenny Paola García Cárdenas',
          cargo: 'Experta temática',
          centro:
            'Equipo de Adecuación Gráfica y Didáctica de Recursos Educativos - Regional Risaralda',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

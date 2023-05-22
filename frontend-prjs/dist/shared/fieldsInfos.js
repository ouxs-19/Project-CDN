export const FIELDSINFOS = [
    {
        id: "informatique",
        title: "Informatique",
        description: "un large éventail de sujets liés à l'informatique et à la technologie. Ce track peut inclure des cours sur la conception de logiciels, les systèmes d'exploitation, les réseaux, les bases de données, l'intelligence artificielle et bien plus encore.",
        bg: "https://res.cloudinary.com/dgutsm0lt/image/upload/v1680300114/prjs/fields/informatique_gh3znz.jpg",
        tracks: [
            {
                id: "dev",
                title: "Développement de logiciels",
                description: "Ce track couvre des sujets liés à la conception, au développement et au déploiement de logiciels.",                modules: [
                        {
                            id: "web-dev",
                            title: "Développement web",
                            description: "Ce module traite du développement d'applications web, notamment en utilisant des langages tels que HTML, CSS, JavaScript, et des frameworks tels que React, Angular, et Vue. Les sujets abordés incluent la création d'interfaces utilisateur, l'interaction avec des APIs, la gestion des états, et bien plus encore.",
                            links: [{
                                type: "pdf",
                                title: "Chatgpt 4 Research paper",
                                uri: "https://res.cloudinary.com/dgutsm0lt/image/upload/v1680311150/prjs/content/informatique/dev/web-dev/gpt-4_wbghdl.pdf"
                            },
                            {
                                type: "pdf",
                                title: "Chapitre 2 optimisation Requête",
                                uri: "http://proxy.esi.dz/chapitre4.pdf"
                            },
                             {
                                type: "video",
                                title: "Video Example",
                                uri: "http://proxy.esi.dz/ALOG3.mp4"
                            },
                             {
                                type: "video",
                                title: "Video Example",
                                uri: "https://example.com/developpement-web-tutorial.mp4"
                            }]
                        }, {
                            id: "mobile-dev",
                            title: "Développement mobile",
                            description: "Ce module aborde la création d'applications mobiles pour les plateformes iOS et Android, en utilisant des technologies telles que Swift, Kotlin, React Native, et Flutter. Les sujets abordés incluent la création d'interfaces utilisateur, l'utilisation de capteurs, la gestion de la localisation, et bien plus encore.",
                            links: [{
                                    type: "pdf",
                                    title: "Pdf Example",
                                    uri: "https://example.com/developpement-mobile.pdf"
                                },
                                {
                                    type: "video",
                                    title: "Video Example",
                                    uri: "https://example.com/developpement-mobile-tutorial.mp4"
                                }
                            ]
                        }, {
                            id: "game-dev",
                            title: "Développement de jeux",
                            description: "Ce module traite de la création de jeux vidéos, en utilisant des langages tels que C++, C#, et des moteurs de jeux tels que Unity et Unreal Engine. Les sujets abordés incluent la création de scènes, la modélisation 3D, la programmation de l'IA, et bien plus encore.",
                            links: [{
                                    type: "pdf",
                                    title: "Pdf Example",
                                    uri: "https://example.com/developpement-jeux.pdf"
                                },
                                {
                                    type: "video",
                                    title: "Video Example",
                                    uri: "https://example.com/developpement-jeux-tutorial.mp4"
                                }
                            ]
                        }, {
                            id: "prog-func",
                            title: "Programmation fonctionnelle",
                            description: "Ce module traite de la programmation fonctionnelle, qui est un paradigme de programmation qui se concentre sur l'utilisation de fonctions pures et l'évitement des effets de bord. Les langages tels que Haskell, OCaml et Clojure seront utilisés pour montrer les concepts de base, tels que les fonctions d'ordre supérieur, les fermetures, les fonctions récursives et bien plus encore.",
                            links: [{
                                    type: "pdf",
                                    title: "Pdf Example",
                                    uri: "https://example.com/programmation-fonctionnelle.pdf"
                                },
                                {
                                    type: "video",
                                    title: "Video Example",
                                    uri: "https://example.com/programmation-fonctionnelle-tutorial.mp4"
                                }
                            ]
                        }
                ]
            },
            {
                id: "security",
                title: "Sécurité informatique",
                description: "Ce track couvre des sujets liés à la sécurité des systèmes d'information, y compris la cybersécurité, la sécurité réseau et la sécurité des applications.",
                modules: ["Cybersécurité", "Sécurité réseau", "Gestion des risques de sécurité", "Tests de pénétration"]
            },
            {
                title: "Intelligence artificielle",
                description: "Ce track couvre des sujets liés à l'apprentissage automatique, à l'analyse de données et à d'autres applications de l'intelligence artificielle.",
                modules: ["Apprentissage automatique", "Traitement du langage naturel", "Analyse de données", "Robotique"]
            }
        ]
    },
    {
        id: "medecine",
        title: "Médecine",
        description: "Tous ce qui concerne la médecine de l'anatomie et la physiologie vers la pharmacologie et la recherche clinique. ",
        bg: "https://res.cloudinary.com/dgutsm0lt/image/upload/v1680300112/prjs/fields/medecine_keua12.png",
        tracks: [
            {
                id: "anatomie-physiologie",
                title: "Anatomie et physiologie",
                description: "Ce track couvre des sujets liés à la structure et à la fonction du corps humain.",
                modules: [
                    {
                        id: "anatomie-corps-humain",
                        title: "Anatomie du corps humain",
                        description: "Ce module couvre l'étude de la structure du corps humain, y compris les os, les muscles, les organes et les tissus.",
                        resources: [
                            {
                                type: "pdf",
                                title: "Pdf Example",
                                uri: "https://example.com/anatomy.pdf",
                                description: "Atlas d'anatomie humaine"
                            },
                            {
                                type: "VIDEO",
                                title: "Video Example",
                                uri: "https://example.com/anatomy_video.mp4",
                                description: "Introduction à l'anatomie humaine"
                            }
                        ]
                    },
                    {
                        id: "physiologie-corps-humain",
                        title: "Physiologie du corps humain",
                        description: "Ce module couvre l'étude des fonctions et des processus physiologiques du corps humain, y compris la circulation sanguine, la respiration et la digestion.",
                        resources: [
                            {
                                type: "pdf",
                                title: "Pdf Example",
                                uri: "https://example.com/physiology.pdf",
                                description: "Introduction à la physiologie humaine"
                            },
                            {
                                type: "VIDEO",
                                title: "Video Example",
                                uri: "https://example.com/physiology_video.mp4",
                                description: "Cours de physiologie humaine"
                            }
                        ]
                    },
                    {
                        id: "pathologie",
                        title: "Pathologie",
                        description: "Ce module couvre l'étude des maladies et de leurs causes, symptômes, prévention et traitement.",
                        resources: [
                            {
                                type: "pdf",
                                title: "Pdf Example",
                                uri: "https://example.com/pathology.pdf",
                                description: "Introduction à la pathologie"
                            },
                            {
                                type: "VIDEO",
                                title: "Video Example",
                                uri: "https://example.com/pathology_video.mp4",
                                description: "Cours de pathologie"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Pharmacologie",
                description: "Ce track couvre des sujets liés aux médicaments, y compris leur développement, leur utilisation et leurs effets.",
                modules: ["Pharmacocinétique", "Pharmacodynamie", "Toxicologie"]
            },
            {
                title: "Recherche clinique",
                description: "Ce track couvre des sujets liés à la conception, à la réalisation et à l'analyse d'études cliniques.",
                modules: ["Conception d'études cliniques", "Analyse de données cliniques", "Éthique de la recherche"]
            }
        ]
    },
    {
        id: "chimie",
        title: "Chimie",
        description: "Ce track couvre des sujets liés à la chimie, y compris la chimie organique, la chimie inorganique, la chimie analytique, la chimie physique, la chimie des matériaux et bien plus encore.",
        bg: "https://res.cloudinary.com/dgutsm0lt/image/upload/v1680300105/prjs/fields/chimie_gor8nx.jpg",
        tracks: [
            {
                id: "anatomie-physiologie",
                title: "Anatomie et physiologie",
                description: "Ce track couvre des sujets liés à la structure et à la fonction du corps humain.",
                modules: [
                    {
                        id: "anatomie-corps-humain",
                        title: "Anatomie du corps humain",
                        description: "Ce module couvre l'étude de la structure du corps humain, y compris les os, les muscles, les organes et les tissus.",
                        resources: [
                            {
                                type: "pdf",
                                title: "Pdf Example",
                                uri: "https://example.com/anatomy.pdf",
                                description: "Atlas d'anatomie humaine"
                            },
                            {
                                type: "VIDEO",
                                title: "Video Example",
                                uri: "https://example.com/anatomy_video.mp4",
                                description: "Introduction à l'anatomie humaine"
                            }
                        ]
                    },
                    {
                        id: "physiologie-corps-humain",
                        title: "Physiologie du corps humain",
                        description: "Ce module couvre l'étude des fonctions et des processus physiologiques du corps humain, y compris la circulation sanguine, la respiration et la digestion.",
                        resources: [
                            {
                                type: "pdf",
                                title: "Pdf Example",
                                uri: "https://example.com/physiology.pdf",
                                description: "Introduction à la physiologie humaine"
                            },
                            {
                                type: "VIDEO",
                                title: "Video Example",
                                uri: "https://example.com/physiology_video.mp4",
                                description: "Cours de physiologie humaine"
                            }
                        ]
                    },
                    {
                        id: "pathologie",
                        title: "Pathologie",
                        description: "Ce module couvre l'étude des maladies et de leurs causes, symptômes, prévention et traitement.",
                        resources: [
                            {
                                type: "pdf",
                                title: "Pdf Example",
                                uri: "https://example.com/pathology.pdf",
                                description: "Introduction à la pathologie"
                            },
                            {
                                type: "VIDEO",
                                title: "Video Example",
                                uri: "https://example.com/pathology_video.mp4",
                                description: "Cours de pathologie"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Pharmacologie",
                description: "Ce track couvre des sujets liés aux médicaments, y compris leur développement, leur utilisation et leurs effets.",
                modules: ["Pharmacocinétique", "Pharmacodynamie", "Toxicologie"]
            },
            {
                title: "Recherche clinique",
                description: "Ce track couvre des sujets liés à la conception, à la réalisation et à l'analyse d'études cliniques.",
                modules: ["Conception d'études cliniques", "Analyse de données cliniques", "Éthique de la recherche"]
            }
        ]
    },
    {
        id: "electronique",
        title: "Électronique",
        description: "Conçu pour les personnes qui cherchent à comprendre les concepts fondamentaux de l'électronique, de la conception de circuits,  de l'assemblage de circuits et de la programmation de microcontrôleurs.",
        bg: "https://res.cloudinary.com/dgutsm0lt/image/upload/v1680300098/prjs/fields/electronique_imcsps.jpg",
        tracks: [
            {
                id: "anatomie-physiologie",
                title: "Anatomie et physiologie",
                description: "Ce track couvre des sujets liés à la structure et à la fonction du corps humain.",
                modules: [
                    {
                        id: "anatomie-corps-humain",
                        title: "Anatomie du corps humain",
                        description: "Ce module couvre l'étude de la structure du corps humain, y compris les os, les muscles, les organes et les tissus.",
                        resources: [
                            {
                                type: "pdf",
                                title: "Pdf Example",
                                uri: "https://example.com/anatomy.pdf",
                                description: "Atlas d'anatomie humaine"
                            },
                            {
                                type: "VIDEO",
                                title: "Video Example",
                                uri: "https://example.com/anatomy_video.mp4",
                                description: "Introduction à l'anatomie humaine"
                            }
                        ]
                    },
                    {
                        id: "physiologie-corps-humain",
                        title: "Physiologie du corps humain",
                        description: "Ce module couvre l'étude des fonctions et des processus physiologiques du corps humain, y compris la circulation sanguine, la respiration et la digestion.",
                        resources: [
                            {
                                type: "pdf",
                                title: "Pdf Example",
                                uri: "https://example.com/physiology.pdf",
                                description: "Introduction à la physiologie humaine"
                            },
                            {
                                type: "VIDEO",
                                title: "Video Example",
                                uri: "https://example.com/physiology_video.mp4",
                                description: "Cours de physiologie humaine"
                            }
                        ]
                    },
                    {
                        id: "pathologie",
                        title: "Pathologie",
                        description: "Ce module couvre l'étude des maladies et de leurs causes, symptômes, prévention et traitement.",
                        resources: [
                            {
                                type: "pdf",
                                title: "Pdf Example",
                                uri: "https://example.com/pathology.pdf",
                                description: "Introduction à la pathologie"
                            },
                            {
                                type: "VIDEO",
                                title: "Video Example",
                                uri: "https://example.com/pathology_video.mp4",
                                description: "Cours de pathologie"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Pharmacologie",
                description: "Ce track couvre des sujets liés aux médicaments, y compris leur développement, leur utilisation et leurs effets.",
                modules: ["Pharmacocinétique", "Pharmacodynamie", "Toxicologie"]
            },
            {
                title: "Recherche clinique",
                description: "Ce track couvre des sujets liés à la conception, à la réalisation et à l'analyse d'études cliniques.",
                modules: ["Conception d'études cliniques", "Analyse de données cliniques", "Éthique de la recherche"]
            }
        ]
    },
    {
        id: "architecture",
        title: "Architecture",
        description: "Conçu pour les étudiants en architecture, les professionnels de la construction et les personnes intéressées par l'architecture et la conception de bâtiments.",
        bg: "https://res.cloudinary.com/dgutsm0lt/image/upload/v1680300110/prjs/fields/architecture_lknukp.jpg",
        tracks: [
            {
                id: "anatomie-physiologie",
                title: "Anatomie et physiologie",
                description: "Ce track couvre des sujets liés à la structure et à la fonction du corps humain.",
                modules: [
                    {
                        id: "anatomie-corps-humain",
                        title: "Anatomie du corps humain",
                        description: "Ce module couvre l'étude de la structure du corps humain, y compris les os, les muscles, les organes et les tissus.",
                        resources: [
                            {
                                type: "pdf",
                                title: "Pdf Example",
                                uri: "https://example.com/anatomy.pdf",
                                description: "Atlas d'anatomie humaine"
                            },
                            {
                                type: "VIDEO",
                                title: "Video Example",
                                uri: "https://example.com/anatomy_video.mp4",
                                description: "Introduction à l'anatomie humaine"
                            }
                        ]
                    },
                    {
                        id: "physiologie-corps-humain",
                        title: "Physiologie du corps humain",
                        description: "Ce module couvre l'étude des fonctions et des processus physiologiques du corps humain, y compris la circulation sanguine, la respiration et la digestion.",
                        resources: [
                            {
                                type: "pdf",
                                title: "Pdf Example",
                                uri: "https://example.com/physiology.pdf",
                                description: "Introduction à la physiologie humaine"
                            },
                            {
                                type: "VIDEO",
                                title: "Video Example",
                                uri: "https://example.com/physiology_video.mp4",
                                description: "Cours de physiologie humaine"
                            }
                        ]
                    },
                    {
                        id: "pathologie",
                        title: "Pathologie",
                        description: "Ce module couvre l'étude des maladies et de leurs causes, symptômes, prévention et traitement.",
                        resources: [
                            {
                                type: "pdf",
                                title: "Pdf Example",
                                uri: "https://example.com/pathology.pdf",
                                description: "Introduction à la pathologie"
                            },
                            {
                                type: "VIDEO",
                                title: "Video Example",
                                uri: "https://example.com/pathology_video.mp4",
                                description: "Cours de pathologie"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Pharmacologie",
                description: "Ce track couvre des sujets liés aux médicaments, y compris leur développement, leur utilisation et leurs effets.",
                modules: ["Pharmacocinétique", "Pharmacodynamie", "Toxicologie"]
            },
            {
                title: "Recherche clinique",
                description: "Ce track couvre des sujets liés à la conception, à la réalisation et à l'analyse d'études cliniques.",
                modules: ["Conception d'études cliniques", "Analyse de données cliniques", "Éthique de la recherche"]
            }
        ]
    }
]
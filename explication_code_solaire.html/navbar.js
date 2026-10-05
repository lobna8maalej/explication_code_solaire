document.addEventListener("DOMContentLoaded", () => {

    const lang = document.documentElement.lang;

    const translations = {
        fr: {
            accueil: "Accueil",
            panneaux: "Panneaux solaires",
            batteries: "Batteries",
            onduleurs: "Onduleurs",
            rendezvous: "Rendez-vous",
            devis: "Devis",
            paiements: "Paiements",
            configuration: "Configuration"
        },

        es: {
            accueil: "Inicio",
            panneaux: "Paneles solares",
            batteries: "Baterías",
            onduleurs: "Inversores",
            rendezvous: "Citas",
            devis: "Presupuesto",
            paiements: "Pagos",
            configuration: "Configuración"
        },

        "pt-BR": {
            accueil: "Início",
            panneaux: "Painéis solares",
            batteries: "Baterias",
            onduleurs: "Inversores",
            rendezvous: "Agendamentos",
            devis: "Orçamento",
            paiements: "Pagamentos",
            configuration: "Configuração"
        },

        en: {
            accueil: "Home",
            panneaux: "Solar panels",
            batteries: "Batteries",
            onduleurs: "Inverters",
            rendezvous: "Appointments",
            devis: "Quote",
            paiements: "Payments",
            configuration: "Configuration"
        }
    };

    const t = translations[lang] || translations.fr;

    const navbar = document.getElementById("navbar");

    navbar.innerHTML = `

        <nav class="navbar">

            <div class="logo">
                ☀️ Solar Energy
            </div>

            <ul class="nav-links">

                <li>
                    <a href="documentationMrc.html">
                        ${t.accueil}
                    </a>
                </li>

                <li>
                    <a href="documentation-backend.html">
                        ${t.panneaux}
                    </a>
                </li>

                <li>
                    <a href="explicationModels.html">
                        ${t.batteries}
                    </a>
                </li>

                <li>
                    <a href="documentationRoutes.html">
                        ${t.onduleurs}
                    </a>
                </li>

                <li>
                    <a href="explicationF.html">
                        ${t.rendezvous}
                    </a>
                </li>

                <li>
                    <a href="explicationF2.html">
                        ${t.devis}
                    </a>
                </li>

                <li>
                    <a href="app.html">
                        ${t.paiements}
                    </a>
                </li>

                <li>
                    <a href="documentEnv.html">
                        ${t.configuration}
                    </a>
                </li>

            </ul>

        </nav>

    `;
});
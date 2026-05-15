const DEFAULT_LANGUAGE = "pt";
const LANGUAGE_STORAGE_KEY = "reinhold-language";
const CONTACT_EMAIL = "reinholdgberner@gmail.com";

const translations = {
  pt: {
    "page.title": "Reinhold Berner | Desenvolvedor Frontend",
    "meta.description":
      "Portfólio de Reinhold Berner, desenvolvedor frontend com foco em UX, experiências digitais, projetos web e jogos.",
    "skip.link": "Pular para o conteúdo",
    "aria.nav": "Navegação principal",
    "aria.brand": "Início do portfólio de Reinhold Berner",
    "aria.navSections": "Seções do site",
    "aria.languageSwitcher": "Selecionar idioma",
    "aria.switchToPt": "Selecionar português",
    "aria.switchToEn": "Selecionar inglês",
    "nav.projects": "Projetos",
    "nav.services": "Serviços",
    "nav.about": "Sobre",
    "nav.resume": "Currículo",
    "nav.contact": "Contato",
    "hero.eyebrow": "CREATIVE DEVELOPER • FRONTEND • UX",
    "hero.title": "Desenvolvedor Frontend e Dev Criativo com foco em UX e experiências digitais",
    "hero.text": "Crio interfaces digitais que conectam design, código e experiência. Atuo com frontend, UX e projetos multimídia.",
    "hero.actionProjects": "Ver projetos",
    "hero.actionResume": "Ver currículo",
    "hero.actionContact": "Contato",
    "aria.heroActions": "Ações principais",
    "aria.heroFacts": "Áreas de atuação",
    "hero.factFrontendTitle": "Frontend",
    "hero.factFrontendText": "Interfaces responsivas",
    "hero.factUxTitle": "UX",
    "hero.factUxText": "Clareza e usabilidade",
    "hero.factGamesTitle": "Games + conteúdo",
    "hero.factGamesText": "Sistemas e multimídia",
    "hero.availability": "Disponível para oportunidades frontend",
    "aria.heroPhotoFigure": "Foto profissional de Reinhold Berner",
    "aria.heroPhotoAlt": "Foto de perfil de Reinhold Berner",
    "hero.currentFocusLabel": "Foco atual",
    "hero.currentFocusText": "Frontend • UX • Experiências digitais",
    "featured.eyebrow": "Projeto em destaque",
    "featured.kicker": "Case real de cliente",
    "featured.title": "Tempero da Sandra",
    "featured.subtitle": "Cardápio digital responsivo com integração WhatsApp",
    "featured.description1": "Projeto desenvolvido para uma cliente real do segmento de alimentação caseira.",
    "featured.description2":
      "A proposta foi unir branding artesanal, UX comercial e desenvolvimento frontend para criar um sistema simples e funcional de pedidos semanais.",
    "featured.description3":
      "O site utiliza lógica em JavaScript para identificar automaticamente o próximo sábado do mês e destacar o prato vigente da semana.",
    "aria.signatureImage": "Logo RB de Reinhold Berner",
    "featured.signatureFallback": "RB",
    "featured.signatureTitle": "Creative Developer",
    "featured.signatureText": "Frontend • UX • Digital",
    "aria.featuredMeta": "Características do case",
    "featured.statClient": "Cliente real",
    "featured.statAutomation": "Automação simples",
    "featured.statMobile": "Mobile-first",
    "featured.techTitle": "Tecnologias utilizadas",
    "featured.badge1": "HTML",
    "featured.badge2": "CSS",
    "featured.badge3": "JavaScript",
    "featured.badge4": "UX/UI",
    "featured.badge5": "Responsive Design",
    "featured.badge6": "WhatsApp API",
    "featured.badge7": "Branding",
    "featured.liveLink": "Ver projeto ao vivo",
    "featured.visualLink": "Visualizar identidade visual",
    "aria.featuredLiveLink": "Ver projeto Tempero da Sandra em nova aba",
    "aria.featuredVisualButton": "Abrir gaveta da identidade visual do projeto Tempero da Sandra",
    "featured.visualLabel": "Cardápio mobile-first",
    "aria.featuredPreviewAlt": "Preview do cardápio digital Tempero da Sandra em um mockup de celular",
    "aria.featuredBrandLogoAlt": "Logo da marca Tempero da Sandra",
    "featured.visualBrandLabel": "Branding artesanal",
    "featured.visualBrandText": "Logo, paleta quente e comunicação acolhedora.",
    "featured.visualAutomationLabel": "JavaScript aplicado",
    "featured.visualAutomationText": "Destaque automático do prato vigente da semana.",
    "featured.solutionsTitle": "O que o projeto resolve",
    "featured.solutions.item1": "pedidos simplificados",
    "featured.solutions.item2": "integração direta com WhatsApp",
    "featured.solutions.item3": "experiência mobile-first",
    "featured.solutions.item4": "atualização automática do prato semanal",
    "featured.solutions.item5": "sistema visual padronizado",
    "featured.solutions.item6": "navegação intuitiva",
    "featured.uxTitle": "Decisões de UX",
    "featured.uxIntro":
      "O projeto foi pensado para um público que acessa principalmente pelo celular e recebe o link via WhatsApp.",
    "featured.ux.item1": "os botões são grandes",
    "featured.ux.item2": "o prato da semana aparece primeiro",
    "featured.ux.item3": "os pedidos exigem poucos cliques",
    "featured.ux.item4": "as informações principais ficam sempre visíveis",
    "featured.brandingTitle": "Branding",
    "featured.brandingText":
      "A identidade visual utiliza tons creme, terracota e dourado suave para transmitir comida caseira, acolhimento, simplicidade e conforto visual.",
    "featured.branding.swatch1": "Creme",
    "featured.branding.swatch2": "Terracota",
    "featured.branding.swatch3": "Dourado suave",
    "featured.resultTag": "Aprovado pela cliente",
    "featured.resultTitle": "Resultado do projeto",
    "featured.resultText":
      "O projeto foi aprovado pela cliente com entusiasmo, validando tanto a identidade visual quanto a funcionalidade do sistema de pedidos desenvolvido.",
    "featured.modal.eyebrow": "Identidade visual",
    "featured.modal.title": "Tempero da Sandra",
    "featured.modal.lead": "Branding, direção de arte, frontend e UX integrados em um case comercial real.",
    "featured.modal.close": "Fechar",
    "aria.featuredModalClose": "Fechar identidade visual do projeto",
    "aria.featuredFlyerAlt": "Flyer final do projeto Tempero da Sandra",
    "featured.modal.flyerLabel": "Flyer final do projeto",
    "featured.modal.logoLabel": "Logo da marca",
    "featured.modal.brandText": "A identidade visual foi criada para transmitir acolhimento, simplicidade e comida caseira.",
    "featured.modal.disciplinesTitle": "Escopo envolvido",
    "featured.modal.discipline1": "Branding",
    "featured.modal.discipline2": "Direção de arte",
    "featured.modal.discipline3": "Frontend",
    "featured.modal.discipline4": "UX",
    "featured.modal.discipline5": "Comunicação visual",
    "projects.eyebrow": "Projetos principais",
    "projects.title": "Web, interação e jogos com pensamento de produto",
    "projects.description":
      "Uma seleção de trabalhos voltados para interfaces, lógica de frontend, organização visual e experiências digitais e apresentações multimídia em diferentes formatos.",
    "projects.anpuh.badge": "Institucional",
    "projects.anpuh.description":
      "Plataforma educacional com foco em experiência de navegação, organização de conteúdo e clareza visual.",
    "projects.anpuh.item1": "HTML, CSS, JavaScript",
    "projects.anpuh.item2": "Estrutura de landing page",
    "projects.anpuh.item3": "UX/UI aplicado",
    "projects.anpuh.item4": "Design institucional",
    "projects.anpuh.link": "Ver projeto",
    "aria.projectsAnpuhLink": "Ver projeto ANPUH Escola em nova aba",
    "projects.js.badge": "Frontend",
    "projects.js.title": "Projeto Web JavaScript",
    "projects.js.description": "Aplicação web focada em interação, lógica de interface e respostas claras para o usuário.",
    "projects.js.item1": "JavaScript",
    "projects.js.item2": "Manipulação do DOM",
    "projects.js.item3": "Interface funcional",
    "projects.js.status": "Laboratório de interação",
    "projects.games.badge": "Games",
    "projects.games.title": "Jogos (Unreal + Unity)",
    "projects.games.description":
      "Projetos de jogos com foco em sistemas, lógica de gameplay e experiências interativas jogáveis.",
    "projects.games.item1": "Blueprint e Unity",
    "projects.games.item2": "Lógica de gameplay",
    "projects.games.item3": "Desenvolvimento de sistemas",
    "projects.games.item4": "Trabalho em equipe",
    "projects.games.link": "Ver jogos",
    "aria.projectsGamesLink": "Ver jogos de Reinhold Berner no itch.io em nova aba",
    "projects.multimedia.badge": "Audiovisual / Produto digital",
    "projects.multimedia.title": "Portfólio Produção Multimídia",
    "projects.multimedia.description1":
      "Site autoral desenvolvido para apresentar minha atuação em produção audiovisual, conteúdo digital, projetos criativos e comunicação multimídia.",
    "projects.multimedia.description2":
      "O projeto conecta design de interface, narrativa visual e organização de conteúdo para transformar experiências profissionais em uma apresentação digital clara, dinâmica e navegável.",
    "projects.multimedia.item1": "HTML, CSS, JavaScript",
    "projects.multimedia.item2": "Direção visual audiovisual",
    "projects.multimedia.item3": "Animações e microinterações",
    "projects.multimedia.item4": "Organização de conteúdo profissional",
    "projects.multimedia.item5": "UX aplicada à apresentação pessoal",
    "projects.multimedia.item6": "Integração com currículos e links autorais",
    "projects.multimedia.link": "Ver projeto",
    "aria.projectsMultimediaLink": "Ver projeto Portfólio Produção Multimídia em nova aba",
    "services.eyebrow": "Oferta inicial",
    "services.title": "Serviços",
    "services.description":
      "Desenvolvo páginas e estruturas digitais que ajudam profissionais a se apresentarem melhor online, unindo design, código e comunicação.",
    "services.card1.title": "Sites e portfólios digitais",
    "services.card1.description":
      "Desenvolvo páginas modernas, responsivas e bem estruturadas para profissionais, projetos autorais e pequenos negócios.",
    "services.card2.title": "Presença digital e conteúdo",
    "services.card2.description":
      "Organizo perfis, bio e estrutura de comunicação, com foco em clareza, posicionamento e identidade digital.",
    "services.card3.title": "Apresentação profissional",
    "services.card3.description":
      "Melhoro currículos e materiais de apresentação com foco em clareza, organização visual e comunicação mais estratégica.",
    "services.help.title": "Como eu trabalho",
    "services.help.text":
      "Meu foco é criar soluções simples, funcionais e bem apresentadas, combinando desenvolvimento frontend, design, UX e experiência com conteúdo digital e vídeo.",
    "aria.servicesPricing": "Valores iniciais dos serviços",
    "services.pricing.title": "Valores iniciais",
    "services.pricing.item1.label": "Apresentação profissional",
    "services.pricing.item1.value": "a partir de R$ 80",
    "services.pricing.item2.label": "Presença digital",
    "services.pricing.item2.value": "a partir de R$ 120",
    "services.pricing.item3.label": "Páginas e portfólios",
    "services.pricing.item3.value": "a partir de R$ 350",
    "services.pricing.item4.label": "Projetos completos",
    "services.pricing.item4.value": "a partir de R$ 500",
    "services.cta": "Vamos construir algo juntos",
    "about.eyebrow": "Sobre mim",
    "about.title": "Código, design, jogos e produção digital em um mesmo repertório",
    "about.text1":
      "Tenho interesse em desenvolvimento frontend, experiências digitais e produtos interativos. Busco oportunidades onde eu possa evoluir tecnicamente enquanto contribuo com organização, usabilidade e criação de interfaces.",
    "about.text2":
      "Meu trabalho também passa por produção de vídeos, criação de conteúdo, projetos multimídia e um portfólio autoral além do frontend. Essa combinação fortalece minha visão de produto: penso em interfaces, narrativa, interação e clareza visual como partes da mesma experiência.",
    "aria.aboutStack": "Competências em destaque",
    "about.stackDigitalProduction": "Produção digital",
    "about.stackMultimediaContent": "Conteúdo multimídia",
    "about.portfolioLabel": "Portfólio autoral",
    "about.portfolioText": "Projetos criativos, produções audiovisuais e trabalhos multimídia que ampliam minha atuação.",
    "about.portfolioCta": "Explorar portfólio completo",
    "explorations.eyebrow": "Interesse complementar",
    "explorations.title": "Outras explorações",
    "explorations.text1":
      "Também tenho interesse em experiências digitais no universo gamer, explorando temas como curadoria de jogos, organização de bibliotecas e montagem de setups personalizados para diferentes perfis de jogadores.",
    "explorations.text2":
      "Gosto de pensar em como diferentes tipos de jogadores entram nesse universo, considerando orçamento, preferências e estilo de jogo.",
    "explorations.text3": "Se fizer sentido, fico aberto para trocar ideia ou ajudar nesse tipo de construção.",
    "explorations.cta": "Trocar ideia sobre isso",
    "resume.eyebrow": "Currículo",
    "resume.title": "Currículo profissional para oportunidades em frontend",
    "resume.description":
      "Perfil iniciante em desenvolvimento frontend com base em UX, criação de interfaces, projetos web, jogos acadêmicos e produção de conteúdo digital. Disponível para oportunidades onde código, organização visual e aprendizado contínuo caminhem juntos.",
    "aria.resumeCard": "Arquivo de currículo em PDF",
    "resume.tag": "PDF profissional",
    "resume.cardDescription": "Currículo atualizado com formação, competências, projetos e informações de contato.",
    "resume.view": "Visualizar currículo",
    "resume.download": "Baixar PDF",
    "contact.eyebrow": "Contato",
    "contact.title":
      "Desenvolvedor Frontend iniciante com foco em UX e experiências digitais. Experiência com projetos web, jogos e produção de conteúdo digital.",
    "contact.toggleShow": "Entrar em contato",
    "contact.toggleHide": "Ocultar contato",
    "contact.panel.eyebrow": "Canais diretos",
    "contact.panel.title": "Vamos conversar sobre projetos, vagas e oportunidades",
    "contact.panel.lead":
      "Escolha o melhor canal para falar comigo. Mantive esta área simples, direta e pensada para facilitar o primeiro contato.",
    "contact.close": "Fechar",
    "aria.contactClose": "Fechar seção de contato",
    "aria.contactNote": "Nota autoral sobre este portfólio",
    "contact.note.title": "Sobre este site",
    "contact.note.text":
      "Este portfólio foi integralmente idealizado e desenvolvido por mim, funcionando como demonstração prática da minha abordagem em frontend, design de interface e experiência digital.",
    "aria.contactOptions": "Opções de contato",
    "contact.email.title": "Me envie um e-mail",
    "contact.email.text": "Retorno em até 2 dias úteis",
    "contact.email.button": "Enviar e-mail",
    "contact.emailFallbackPrefix": "Ou envie um e-mail para:",
    "contact.emailSubject": "Contato via portfólio",
    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.text": "Vamos nos conectar por lá",
    "contact.linkedin.button": "Abrir perfil",
    "aria.linkedinLink": "Abrir perfil de Reinhold Berner no LinkedIn em nova aba",
    "footer.text": "Reinhold Berner • Portfólio Frontend",
    "footer.backToTop": "Voltar ao topo"
  },
  en: {
    "page.title": "Reinhold Berner | Frontend Developer",
    "meta.description":
      "Portfolio of Reinhold Berner, a frontend developer focused on UX, digital experiences, web projects and games.",
    "skip.link": "Skip to content",
    "aria.nav": "Primary navigation",
    "aria.brand": "Reinhold Berner portfolio home",
    "aria.navSections": "Site sections",
    "aria.languageSwitcher": "Select language",
    "aria.switchToPt": "Switch to Portuguese",
    "aria.switchToEn": "Switch to English",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.contact": "Contact",
    "hero.eyebrow": "CREATIVE DEVELOPER • FRONTEND • UX",
    "hero.title": "Frontend Developer and Creative Developer focused on UX and digital experiences",
    "hero.text": "I create digital interfaces that connect design, code and experience. I work with frontend, UX and multimedia projects.",
    "hero.actionProjects": "View projects",
    "hero.actionResume": "View resume",
    "hero.actionContact": "Contact",
    "aria.heroActions": "Primary actions",
    "aria.heroFacts": "Areas of work",
    "hero.factFrontendTitle": "Frontend",
    "hero.factFrontendText": "Responsive interfaces",
    "hero.factUxTitle": "UX",
    "hero.factUxText": "Clarity and usability",
    "hero.factGamesTitle": "Games + content",
    "hero.factGamesText": "Systems and multimedia",
    "hero.availability": "Available for frontend opportunities",
    "aria.heroPhotoFigure": "Professional photo of Reinhold Berner",
    "aria.heroPhotoAlt": "Profile photo of Reinhold Berner",
    "hero.currentFocusLabel": "Current focus",
    "hero.currentFocusText": "Frontend • UX • Digital experiences",
    "featured.eyebrow": "Featured case",
    "featured.kicker": "Real client case",
    "featured.title": "Tempero da Sandra",
    "featured.subtitle": "Responsive digital menu with WhatsApp integration",
    "featured.description1": "Project developed for a real client in the homemade food segment.",
    "featured.description2":
      "The proposal combined handcrafted branding, commercial UX and frontend development to create a simple and functional weekly ordering system.",
    "featured.description3":
      "The site uses JavaScript logic to automatically identify the next Saturday of the month and highlight the active dish of the week.",
    "aria.signatureImage": "RB logo of Reinhold Berner",
    "featured.signatureFallback": "RB",
    "featured.signatureTitle": "Creative Developer",
    "featured.signatureText": "Frontend • UX • Digital",
    "aria.featuredMeta": "Case characteristics",
    "featured.statClient": "Real client",
    "featured.statAutomation": "Simple automation",
    "featured.statMobile": "Mobile-first",
    "featured.techTitle": "Technologies used",
    "featured.badge1": "HTML",
    "featured.badge2": "CSS",
    "featured.badge3": "JavaScript",
    "featured.badge4": "UX/UI",
    "featured.badge5": "Responsive Design",
    "featured.badge6": "WhatsApp API",
    "featured.badge7": "Branding",
    "featured.liveLink": "View live project",
    "featured.visualLink": "View visual identity",
    "aria.featuredLiveLink": "View the Tempero da Sandra project in a new tab",
    "aria.featuredVisualButton": "Open the visual identity drawer for the Tempero da Sandra project",
    "featured.visualLabel": "Mobile-first menu",
    "aria.featuredPreviewAlt": "Preview of the Tempero da Sandra digital menu in a mobile mockup",
    "aria.featuredBrandLogoAlt": "Tempero da Sandra brand logo",
    "featured.visualBrandLabel": "Handcrafted branding",
    "featured.visualBrandText": "Logo, warm palette and welcoming communication.",
    "featured.visualAutomationLabel": "Applied JavaScript",
    "featured.visualAutomationText": "Automatic highlighting of the current weekly dish.",
    "featured.solutionsTitle": "What the project solves",
    "featured.solutions.item1": "simplified ordering",
    "featured.solutions.item2": "direct WhatsApp integration",
    "featured.solutions.item3": "mobile-first experience",
    "featured.solutions.item4": "automatic weekly dish update",
    "featured.solutions.item5": "standardized visual system",
    "featured.solutions.item6": "intuitive navigation",
    "featured.uxTitle": "UX decisions",
    "featured.uxIntro":
      "The project was designed for an audience that mostly accesses it on mobile and receives the link through WhatsApp.",
    "featured.ux.item1": "buttons are large",
    "featured.ux.item2": "the weekly dish appears first",
    "featured.ux.item3": "orders take only a few clicks",
    "featured.ux.item4": "the main information always stays visible",
    "featured.brandingTitle": "Branding",
    "featured.brandingText":
      "The visual identity uses cream, terracotta and soft gold tones to communicate homemade food, warmth, simplicity and visual comfort.",
    "featured.branding.swatch1": "Cream",
    "featured.branding.swatch2": "Terracotta",
    "featured.branding.swatch3": "Soft gold",
    "featured.resultTag": "Approved by the client",
    "featured.resultTitle": "Project result",
    "featured.resultText":
      "The project was enthusiastically approved by the client, validating both the visual identity and the functionality of the ordering system.",
    "featured.modal.eyebrow": "Visual identity",
    "featured.modal.title": "Tempero da Sandra",
    "featured.modal.lead": "Branding, art direction, frontend and UX combined in a real commercial case.",
    "featured.modal.close": "Close",
    "aria.featuredModalClose": "Close the project visual identity",
    "aria.featuredFlyerAlt": "Final flyer of the Tempero da Sandra project",
    "featured.modal.flyerLabel": "Final project flyer",
    "featured.modal.logoLabel": "Brand logo",
    "featured.modal.brandText": "The visual identity was created to communicate warmth, simplicity and homemade food.",
    "featured.modal.disciplinesTitle": "Scope involved",
    "featured.modal.discipline1": "Branding",
    "featured.modal.discipline2": "Art direction",
    "featured.modal.discipline3": "Frontend",
    "featured.modal.discipline4": "UX",
    "featured.modal.discipline5": "Visual communication",
    "projects.eyebrow": "Main projects",
    "projects.title": "Web, interaction and games with product thinking",
    "projects.description":
      "A selection of projects focused on interfaces, frontend logic, visual organization, digital experiences and multimedia presentations across different formats.",
    "projects.anpuh.badge": "Institutional",
    "projects.anpuh.description":
      "Educational platform focused on navigation experience, content organization and visual clarity.",
    "projects.anpuh.item1": "HTML, CSS, JavaScript",
    "projects.anpuh.item2": "Landing page structure",
    "projects.anpuh.item3": "Applied UX/UI",
    "projects.anpuh.item4": "Institutional design",
    "projects.anpuh.link": "View project",
    "aria.projectsAnpuhLink": "View the ANPUH Escola project in a new tab",
    "projects.js.badge": "Frontend",
    "projects.js.title": "JavaScript Web Project",
    "projects.js.description": "Web application focused on interaction, interface logic and clear user feedback.",
    "projects.js.item1": "JavaScript",
    "projects.js.item2": "DOM manipulation",
    "projects.js.item3": "Functional interface",
    "projects.js.status": "Interaction lab",
    "projects.games.badge": "Games",
    "projects.games.title": "Games (Unreal + Unity)",
    "projects.games.description":
      "Game projects focused on systems, gameplay logic and playable interactive experiences.",
    "projects.games.item1": "Blueprint and Unity",
    "projects.games.item2": "Gameplay logic",
    "projects.games.item3": "Systems development",
    "projects.games.item4": "Teamwork",
    "projects.games.link": "View games",
    "aria.projectsGamesLink": "View Reinhold Berner's games on itch.io in a new tab",
    "projects.multimedia.badge": "Audiovisual / Digital product",
    "projects.multimedia.title": "Multimedia Production Portfolio",
    "projects.multimedia.description1":
      "Personal website developed to present my work in audiovisual production, digital content, creative projects and multimedia communication.",
    "projects.multimedia.description2":
      "The project connects interface design, visual storytelling and content organization to turn professional experiences into a clear, dynamic and navigable digital presentation.",
    "projects.multimedia.item1": "HTML, CSS, JavaScript",
    "projects.multimedia.item2": "Audiovisual art direction",
    "projects.multimedia.item3": "Animations and microinteractions",
    "projects.multimedia.item4": "Professional content organization",
    "projects.multimedia.item5": "UX applied to personal presentation",
    "projects.multimedia.item6": "Integration with resumes and personal links",
    "projects.multimedia.link": "View project",
    "aria.projectsMultimediaLink": "View the Multimedia Production Portfolio project in a new tab",
    "services.eyebrow": "Initial offer",
    "services.title": "Services",
    "services.description":
      "I develop pages and digital structures that help professionals present themselves better online, combining design, code and communication.",
    "services.card1.title": "Websites and digital portfolios",
    "services.card1.description":
      "I build modern, responsive and well-structured pages for professionals, personal projects and small businesses.",
    "services.card2.title": "Digital presence and content",
    "services.card2.description":
      "I organize profiles, bios and communication structures focused on clarity, positioning and digital identity.",
    "services.card3.title": "Professional presentation",
    "services.card3.description":
      "I improve resumes and presentation materials with a focus on clarity, visual organization and more strategic communication.",
    "services.help.title": "How I work",
    "services.help.text":
      "My focus is creating simple, functional and well-presented solutions, combining frontend development, design, UX and experience with digital content and video.",
    "aria.servicesPricing": "Starting service prices",
    "services.pricing.title": "Starting prices",
    "services.pricing.item1.label": "Professional presentation",
    "services.pricing.item1.value": "starting at R$ 80",
    "services.pricing.item2.label": "Digital presence",
    "services.pricing.item2.value": "starting at R$ 120",
    "services.pricing.item3.label": "Pages and portfolios",
    "services.pricing.item3.value": "starting at R$ 350",
    "services.pricing.item4.label": "Full projects",
    "services.pricing.item4.value": "starting at R$ 500",
    "services.cta": "Let's build something together",
    "about.eyebrow": "About me",
    "about.title": "Code, design, games and digital production in one skill set",
    "about.text1":
      "I am interested in frontend development, digital experiences and interactive products. I am looking for opportunities where I can grow technically while contributing with organization, usability and interface creation.",
    "about.text2":
      "My work also includes video production, content creation, multimedia projects and a broader creative portfolio beyond frontend. This combination strengthens my product mindset: I think of interfaces, storytelling, interaction and visual clarity as parts of the same experience.",
    "aria.aboutStack": "Highlighted skills",
    "about.stackDigitalProduction": "Digital production",
    "about.stackMultimediaContent": "Multimedia content",
    "about.portfolioLabel": "Creative portfolio",
    "about.portfolioText": "Creative projects, audiovisual productions and multimedia works that expand my practice.",
    "about.portfolioCta": "Explore full portfolio",
    "explorations.eyebrow": "Complementary interest",
    "explorations.title": "Other explorations",
    "explorations.text1":
      "I am also interested in digital experiences within the gaming universe, exploring topics such as game curation, library organization and personalized setups for different player profiles.",
    "explorations.text2":
      "I enjoy thinking about how different types of players enter this universe, considering budget, preferences and play style.",
    "explorations.text3": "If it makes sense, I'm open to talking or helping with this kind of setup.",
    "explorations.cta": "Talk about this",
    "resume.eyebrow": "Resume",
    "resume.title": "Professional resume for frontend opportunities",
    "resume.description":
      "Entry-level frontend profile with a foundation in UX, interface creation, web projects, academic games and digital content production. Available for opportunities where code, visual organization and continuous learning work together.",
    "aria.resumeCard": "Resume PDF file",
    "resume.tag": "Professional PDF",
    "resume.cardDescription": "Updated resume with education, skills, projects and contact information.",
    "resume.view": "View resume",
    "resume.download": "Download PDF",
    "contact.eyebrow": "Contact",
    "contact.title":
      "Entry-level Frontend Developer focused on UX and digital experiences. Experience with web projects, games and digital content production.",
    "contact.toggleShow": "Get in touch",
    "contact.toggleHide": "Hide contact",
    "contact.panel.eyebrow": "Direct channels",
    "contact.panel.title": "Let's talk about projects, roles and opportunities",
    "contact.panel.lead":
      "Choose the best channel to reach me. I kept this area simple, direct and designed to make the first contact easier.",
    "contact.close": "Close",
    "aria.contactClose": "Close contact section",
    "aria.contactNote": "Author note about this portfolio",
    "contact.note.title": "About this site",
    "contact.note.text":
      "This portfolio was fully conceived and developed by me, working as a practical demonstration of my approach to frontend, interface design and digital experience.",
    "aria.contactOptions": "Contact options",
    "contact.email.title": "Send me an email",
    "contact.email.text": "I usually reply within 2 business days",
    "contact.email.button": "Send email",
    "contact.emailFallbackPrefix": "Or send an email to:",
    "contact.emailSubject": "Portfolio contact",
    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.text": "Let's connect there",
    "contact.linkedin.button": "Open profile",
    "aria.linkedinLink": "Open Reinhold Berner's LinkedIn profile in a new tab",
    "footer.text": "Reinhold Berner • Frontend Portfolio",
    "footer.backToTop": "Back to top"
  }
};

const resumeFiles = {
  pt: "CV_Reinhold_Berner.pdf",
  en: "CV_Reinhold_Berner_EN.pdf"
};

const header = document.querySelector("[data-header]");
const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
const revealItems = document.querySelectorAll(".reveal");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const translatableAttrNodes = document.querySelectorAll("[data-i18n-attrs]");
const languageTriggers = document.querySelectorAll("[data-lang-trigger]");
const contactToggle = document.querySelector("[data-contact-toggle]");
const contactToggleLabel = document.querySelector("[data-contact-toggle-label]");
const contactPanel = document.querySelector("[data-contact-panel]");
const contactClose = document.querySelector("[data-contact-close]");
const contactLaunchers = document.querySelectorAll("[data-open-contact]");
const caseDrawer = document.querySelector("[data-case-drawer]");
const caseDrawerOpeners = document.querySelectorAll("[data-case-drawer-open]");
const caseDrawerClosers = document.querySelectorAll("[data-case-drawer-close]");
const caseDrawerCloseButton = document.querySelector(".identity-drawer__close");
const resumeFileName = document.querySelector("[data-resume-file-name]");
const resumeViewLink = document.querySelector('[data-resume-link="view"]');
const resumeDownloadLink = document.querySelector('[data-resume-link="download"]');
const emailPrimaryLink = document.querySelector("[data-email-primary]");
const emailFallbackLink = document.querySelector("[data-email-fallback-link]");
const metaDescription = document.querySelector('meta[name="description"]');
const signatureBadge = document.querySelector("[data-signature-badge]");
const signatureImage = document.querySelector("[data-signature-image]");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

let currentLanguage = DEFAULT_LANGUAGE;
let lastCaseDrawerTrigger = null;
let caseDrawerCloseTimer = null;

function getTranslation(lang, key) {
  return translations[lang]?.[key] ?? translations[DEFAULT_LANGUAGE]?.[key] ?? "";
}

function getInitialLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (storedLanguage && translations[storedLanguage]) {
      return storedLanguage;
    }
  } catch (error) {
    // Ignore storage access issues and keep the default language.
  }

  return DEFAULT_LANGUAGE;
}

function saveLanguagePreference(lang) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    // Ignore storage access issues and keep the session running.
  }
}

function animateLanguageChange() {
  if (motionQuery.matches || typeof document.body.animate !== "function") {
    return;
  }

  document.body.animate([{ opacity: 0.985 }, { opacity: 1 }], {
    duration: 180,
    easing: "ease-out"
  });
}

function applyTextTranslations(lang) {
  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = getTranslation(lang, key);

    if (value) {
      node.textContent = value;
    }
  });
}

function applyAttributeTranslations(lang) {
  translatableAttrNodes.forEach((node) => {
    const definitions = node.dataset.i18nAttrs
      .split(";")
      .map((entry) => entry.trim())
      .filter(Boolean);

    definitions.forEach((definition) => {
      const separatorIndex = definition.indexOf(":");

      if (separatorIndex === -1) {
        return;
      }

      const attributeName = definition.slice(0, separatorIndex).trim();
      const translationKey = definition.slice(separatorIndex + 1).trim();
      const value = getTranslation(lang, translationKey);

      if (attributeName && value) {
        node.setAttribute(attributeName, value);
      }
    });
  });
}

function updateResumeAssets(lang) {
  const fileName = resumeFiles[lang] ?? resumeFiles[DEFAULT_LANGUAGE];

  if (resumeFileName) {
    resumeFileName.textContent = fileName;
  }

  if (resumeViewLink) {
    resumeViewLink.setAttribute("href", fileName);
  }

  if (resumeDownloadLink) {
    resumeDownloadLink.setAttribute("href", fileName);
    resumeDownloadLink.setAttribute("download", fileName);
  }
}

function updateEmailLinks(lang) {
  const emailSubject = encodeURIComponent(getTranslation(lang, "contact.emailSubject"));

  if (emailPrimaryLink) {
    emailPrimaryLink.setAttribute("href", `mailto:${CONTACT_EMAIL}?subject=${emailSubject}`);
  }

  if (emailFallbackLink) {
    emailFallbackLink.setAttribute("href", `mailto:${CONTACT_EMAIL}`);
  }
}

function updateLanguageSwitcher(lang) {
  languageTriggers.forEach((trigger) => {
    const isActive = trigger.dataset.langTrigger === lang;
    trigger.classList.toggle("is-active", isActive);
    trigger.setAttribute("aria-pressed", String(isActive));
  });
}

function updateCaseDrawerTriggerState(isOpen) {
  caseDrawerOpeners.forEach((trigger) => {
    trigger.setAttribute("aria-expanded", String(isOpen));
  });
}

function setSignatureBadgeState() {
  if (!signatureBadge || !signatureImage) {
    return;
  }

  const hasLoadedImage = signatureImage.complete && signatureImage.naturalWidth > 0;
  signatureBadge.classList.toggle("is-loaded", hasLoadedImage);
}

function updateContactToggleLabel(forceOpenState) {
  if (!contactToggleLabel) {
    return;
  }

  const isOpen = typeof forceOpenState === "boolean" ? forceOpenState : contactPanel?.classList.contains("is-open");
  const labelKey = isOpen ? "contact.toggleHide" : "contact.toggleShow";
  contactToggleLabel.textContent = getTranslation(currentLanguage, labelKey);
}

function applyLanguage(lang, { animate = false } = {}) {
  if (!translations[lang]) {
    return;
  }

  currentLanguage = lang;

  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  document.title = getTranslation(lang, "page.title");

  if (metaDescription) {
    metaDescription.setAttribute("content", getTranslation(lang, "meta.description"));
  }

  applyTextTranslations(lang);
  applyAttributeTranslations(lang);
  updateResumeAssets(lang);
  updateEmailLinks(lang);
  updateLanguageSwitcher(lang);
  updateContactToggleLabel();
  saveLanguagePreference(lang);

  window.requestAnimationFrame(() => {
    setContactPanelHeight();
  });

  if (animate) {
    animateLanguageChange();
  }
}

function openCaseDrawer(trigger) {
  if (!caseDrawer) {
    return;
  }

  if (caseDrawerCloseTimer) {
    window.clearTimeout(caseDrawerCloseTimer);
    caseDrawerCloseTimer = null;
  }

  lastCaseDrawerTrigger = trigger ?? document.activeElement;
  caseDrawer.hidden = false;
  caseDrawer.removeAttribute("inert");
  caseDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("has-overlay-open");
  updateCaseDrawerTriggerState(true);

  window.requestAnimationFrame(() => {
    caseDrawer.classList.add("is-open");

    if (caseDrawerCloseButton) {
      caseDrawerCloseButton.focus();
    }
  });
}

function closeCaseDrawer({ restoreFocus = false } = {}) {
  if (!caseDrawer) {
    return;
  }

  caseDrawer.classList.remove("is-open");
  caseDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("has-overlay-open");
  updateCaseDrawerTriggerState(false);

  const finishClose = () => {
    caseDrawer.setAttribute("inert", "");
    caseDrawer.hidden = true;

    if (restoreFocus && lastCaseDrawerTrigger instanceof HTMLElement) {
      lastCaseDrawerTrigger.focus();
    }
  };

  if (motionQuery.matches) {
    finishClose();
    return;
  }

  caseDrawerCloseTimer = window.setTimeout(() => {
    caseDrawerCloseTimer = null;
    finishClose();
  }, 320);
}

function updateHeaderState() {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setContactPanelHeight() {
  if (!contactPanel || !contactPanel.classList.contains("is-open")) {
    return;
  }

  contactPanel.style.maxHeight = `${contactPanel.scrollHeight}px`;
}

function openContactPanel() {
  if (!contactPanel || !contactToggle) {
    return;
  }

  contactPanel.removeAttribute("inert");
  contactPanel.setAttribute("aria-hidden", "false");
  contactPanel.classList.add("is-open");
  contactToggle.setAttribute("aria-expanded", "true");
  updateContactToggleLabel(true);

  window.requestAnimationFrame(() => {
    setContactPanelHeight();
    contactPanel.scrollIntoView({
      behavior: motionQuery.matches ? "auto" : "smooth",
      block: "start"
    });
  });
}

function closeContactPanel({ restoreFocus = false } = {}) {
  if (!contactPanel || !contactToggle) {
    return;
  }

  contactPanel.style.maxHeight = `${contactPanel.scrollHeight}px`;
  contactPanel.setAttribute("aria-hidden", "true");
  contactPanel.setAttribute("inert", "");
  contactToggle.setAttribute("aria-expanded", "false");
  updateContactToggleLabel(false);

  window.requestAnimationFrame(() => {
    contactPanel.classList.remove("is-open");
    contactPanel.style.maxHeight = "0px";
  });

  if (restoreFocus) {
    contactToggle.focus();
  }
}

function toggleContactPanel() {
  if (!contactPanel) {
    return;
  }

  if (contactPanel.classList.contains("is-open")) {
    closeContactPanel();
    return;
  }

  openContactPanel();
}

// Pequenas entradas de conteúdo mantêm a página viva sem pesar na navegação.
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0.01
    }
  );

  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));

    if (section) {
      navObserver.observe(section);
    }
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

languageTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const nextLanguage = trigger.dataset.langTrigger;

    if (!nextLanguage || nextLanguage === currentLanguage) {
      return;
    }

    applyLanguage(nextLanguage, { animate: true });
  });
});

if (signatureImage) {
  setSignatureBadgeState();
  signatureImage.addEventListener("load", setSignatureBadgeState);
  signatureImage.addEventListener("error", setSignatureBadgeState);
}

caseDrawerOpeners.forEach((trigger) => {
  trigger.addEventListener("click", () => openCaseDrawer(trigger));
});

caseDrawerClosers.forEach((trigger) => {
  trigger.addEventListener("click", () => closeCaseDrawer({ restoreFocus: true }));
});

updateHeaderState();
applyLanguage(getInitialLanguage());
updateCaseDrawerTriggerState(false);

window.addEventListener("scroll", updateHeaderState, { passive: true });
window.addEventListener("resize", setContactPanelHeight);

if (contactToggle) {
  contactToggle.addEventListener("click", toggleContactPanel);
}

if (contactClose) {
  contactClose.addEventListener("click", () => closeContactPanel({ restoreFocus: true }));
}

contactLaunchers.forEach((launcher) => {
  launcher.addEventListener("click", (event) => {
    if (!contactPanel || !contactToggle) {
      return;
    }

    event.preventDefault();
    openContactPanel();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && caseDrawer?.classList.contains("is-open")) {
    closeCaseDrawer({ restoreFocus: true });
    return;
  }

  if (event.key === "Escape" && contactPanel?.classList.contains("is-open")) {
    closeContactPanel({ restoreFocus: true });
  }
});

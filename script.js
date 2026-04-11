"use strict";

const WHATSAPP_NUMBER = "244932783626";
const CONTACT_EMAIL = "josiwhatson@gmail.com";
const MAKE_WEBHOOK =
  "https://hook.eu1.make.com/219sfporr8ngjjppens5t71lw8z7w1ul";

const TIME_SLOTS = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
];

let currentLang = "pt";

const LOCALES = {
  pt: {
    tab_domicilio: "Ao Domicílio",
    opt_cortes: "Cortes",
    opt_barba: "Barba",
    opt_extras: "Serviços Extras",
    opt_vip: "VIP / Combo",
    f_srv_lineup: "Line Up — 1.500 KZ",
    f_srv_kutz_crianca: "Kutz Criança (Sub 15) — 3.000 KZ",
    f_srv_kutz_cabelo: "Kutz de Cabelo — 4.000 KZ",
    f_srv_kutz_senior: "Kutz Seniores (+65) — 4.000 KZ",
    f_srv_ritual_barba: "Ballkutz Ritual (Barboterapia) — 6.000 KZ",
    f_srv_kutz_barba: "Kutz de Barba — 3.000 KZ",
    f_srv_cabelo_barba: "Kutz de Cabelo + Barba — 6.000 KZ",
    f_srv_sobrancelhas: "Sobrancelhas — 2.000 KZ",
    f_srv_massagem: "Massagem — 2.000 KZ",
    f_srv_hidratacao: "Hidratação de Cabelo/Barba — 2.500 KZ",
    f_srv_depilacao: "Depilação Nariz ou Orelha — 3.000 KZ",
    f_srv_camuflagem: "Camuflagem Cabelo ou Barba — 3.500 KZ",
    f_srv_pintura: "Pintura Preta — 4.000 KZ",
    f_srv_combo_hidratacao: "Combo Hidratação — 4.000 KZ",
    f_srv_combo_depilacao: "Combo Depilação — 5.000 KZ",
    f_srv_limpeza: "Limpeza de Pele — 5.000 KZ",
    f_srv_combo_camuflagem: "Combo Camuflagem — 6.000 KZ",
    f_srv_velas_hopi: "Velas Hopi (Terapia Termo-Auricular) — 7.000 KZ",
    f_srv_descoloracao: "Descoloração — 7.000 / 12.000 KZ",
    f_srv_24k_limpeza: "24K Gold Limpeza de Pele — 10.000 KZ",
    f_srv_vip_kutz: "VIP Kutz (Cabelo, Barba, Depilação, Massagem) — 10.000 KZ",
    f_srv_presidential: "Presidential Kutz (Completo) — 15.000 KZ",
    ft_srv_hair: "Cortes de Cabelo",
    ft_srv_beard: "Barba",
    ft_srv_esthetics: "Serviços Extras",
    ft_plan_pro: "Plano PRO",
    ft_plan_promax: "Plano PRO MAX",
    ft_address: "Rua 2, Cassenda, Nº 15, Luanda | Angola",
    ft_hours_wk: "Ter–Sáb: 10h–20h",
    ft_hours_we: "Dom: 10h–18h",
    srv_depilacao: "Depilação Nariz ou Orelha",
    srv_camuflagem: "Camuflagem Cabelo ou Barba",
    srv_pintura: "Pintura Preta",
    srv_combo_hidratacao: "Combo Hidratação",
    srv_combo_depilacao: "Combo Depilação",
    srv_limpeza: "Limpeza de Pele",
    srv_combo_camuflagem: "Combo Camuflagem",
    srv_velas_hopi: "Velas Hopi (Terapia Termo-Auricular)",
    srv_descoloracao: "Descoloração",
    srv_24k_limpeza: "24K Gold Limpeza de Pele",
    nav_services: "Serviços",
    nav_plans: "Planos",
    nav_team: "Equipa",
    nav_gallery: "Galeria",
    nav_cta: "Reservar",
    nav_about: "Sobre",
    hero_eyebrow: "Rua 2, Cassenda, Nº 15, Luanda | Angola · Est. 2025",
    hero_line1: "VENHA SENTIR A DIFERENÇA, PORQUE O CORTE ",
    hero_line2: "CERTO MUDA TUDO.",
    hero_sub:
      "A barbearia dos campeões em Luanda. Cortes de excelência, experiência premium e inesquecível.",
    hero_cta: "Reservar Agora",
    hero_cta2: "Ver Serviços",
    stat_rating: "Avaliação",
    stat_clients: "Clientes",
    stat_services: "Serviços",
    stat_anos: "Ano",
    about_eyebrow: "A nossa história",
    about_title: "MAIS DO QUE UM CORTE.",
    about_p1:
      "A BallKutz surgiu da ideia de juntar o mundo do desporto (futebol e basketball), elevando a autoestima do seu cliente ao mais alto nível. Um espaço onde cada visita é uma experiência única — música, jogos de PlayStation e o melhor corte da tua vida.",
    about_p2:
      "Aqui não és apenas mais um cliente. És parte do clube. Com planos de assinatura exclusivos, elevar o teu estilo é sempre a nossa prioridade.",
    about_v1_title: "Excelência",
    about_v1_text:
      "Cada corte é executado com precisão absoluta e atenção ao detalhe.",
    about_v2_title: "Comunidade",
    about_v2_text:
      "Um espaço de convívio onde o desporto une os nossos clientes.",
    about_v3_title: "Confiança",
    about_v3_text: "Profissionalismo e compromisso em cada serviço prestado.",
    about_v4_title: "Luxo",
    about_v4_text:
      "Decoração premium que faz sentires-te num clube de campeões.",
    services_eyebrow: "The Playbook — Preços",
    services_title: "SERVIÇOS",
    tab_cortes: "Cortes",
    tab_barba: "Barba",
    tab_estetica: "Serviços Extras",
    tab_vip: "VIP",
    plans_eyebrow: "Você já ouviu falar de",
    plans_title: "BARBEARIA POR ASSINATURA?",
    plans_subtitle: "Mensal · Sem contratos · Cancela quando quiseres",
    plans_cat_limited: "2x / Mês",
    plans_cat_unlimited: "Ilimitado",
    plan_period_limited: "/ 2x mês",
    plan_period_unlimited: "/ mês",
    plan_discount: "10% OFF em produtos e serviços",
    plan_cta: "Aderir ao Plano",
    plan_cta_unlimited: "Aderir Agora",
    plan1_name: "Plano Cabelo",
    plan1_perk1: "2 cortes de cabelo por mês",
    plan1_perk3:
      "1 ficha — 1 serviço extra de cortesia + trazer um amigo de graça",
    plan2_name: "Plano Cabelo + Barba",
    plan2_perk1: "2 cabelo + barba por mês",
    plan2_perk3: "1 ficha — 1 serviço extra de cortesia",
    plan3_name: "Plano Cabelo",
    plan3_perk1: "Cortes ilimitados",
    plan3_perk3: "2 fichas — 1 serviço extra de cortesia",
    plan4_name: "Plano Barba",
    plan4_perk1: "Barbas ilimitadas",
    plan4_perk3: "2 ficha — 1 serviço extra de cortesia",
    plan5_name: "Plano Criança",
    plan5_perk1: "Cortes ilimitados",
    plan5_perk3: "2 fichas — 1 serviço extra + trazer 1 amigo de graça",
    plan6_name: "Plano Cabelo + Barba",
    plan6_badge: "Mais Popular",
    plan6_perk1: "Cabelo + Barba ilimitados",
    plan6_perk3: "2 fichas — 1 serviço extra + trazer 1 amigo de graça",
    team_eyebrow: "Starting XI — Os nossos",
    team_title: "A EQUIPA",
    barber_head: "Head Barber · Capitão",
    barber_senior: "Senior Barber",
    barber_barber: "Barber",
    stat_years: "Anos Exp.",
    stat_specialty: "Especialidade",
    barber_book: "Agendar →",
    gallery_eyebrow: "Match Highlights — O nosso trabalho",
    gallery_title: "GALERIA",
    reviews_eyebrow: "Fans' Voice — O que dizem",
    reviews_title: "AVALIAÇÕES",
    review1_text:
      '"REALMENTE E UM SALÃO MUITO BONITO E CONFORTÁVEL, ALÉM DE BONITO OS FUNCIONÁRIOS AO EXCELENTES..."',
    review2_text:
      '"BALLKUTZ 5 ESTRELAS, UM SÍTIO ACOLHEDOR, PORREIRO E TE SENTES REALMENTE COOL..."',
    review3_text:
      '"UMA EXPERIÊNCIA TOTALMENTE DIFERENTE É COMO SE ESTIVESSE NO PASSADO, PRESENTE E FUTURO AO MESMO TEMPO"',
    review4_text:
      '"EU ACONSELHO A VIREM NESSA BARBEARIA, ELES RECEBEM MUITO BEM OS CLIENTES..."',
    booking_eyebrow: "Final Whistle — Marca o teu lugar",
    booking_title: "RESERVAR",
    booking_desc:
      "Preenche o formulário e recebes confirmação no teu WhatsApp em breve.",
    contact_address_label: "Morada",
    contact_hours_label: "Horário",
    contact_hours: "Ter–Sáb: 10h–20h · Dom: 10h–18h",
    quick_call: "Ligar Agora",
    quick_wa: "WhatsApp Rápido",
    or_form: "ou preenches o formulário",
    mode_label: "Como preferes o teu corte?",
    mode_shop_title: "Na Barbearia",
    mode_shop_sub: "Vens até nós. Experiência completa de clube.",
    mode_home_title: "Ao Domicílio",
    mode_home_sub: "Vamos até ti. Corte no conforto da tua casa.",
    form_name: "Nome",
    form_name_error: "Por favor insere o teu nome.",
    form_phone: "WhatsApp",
    form_phone_error: "Número de WhatsApp inválido.",
    form_email: "E-mail (opcional)",
    form_service: "Serviço",
    form_service_placeholder: "Seleciona um serviço",
    form_service_error: "Seleciona um serviço.",
    form_barber: "Barbeiro",
    form_barber_placeholder: "Qualquer barbeiro",
    form_date: "Data",
    form_date_error: "Seleciona uma data válida.",
    form_time: "Hora",
    form_time_error: "Seleciona um horário.",
    home_location_label: "Morada / Localização",
    home_location_error: "Por favor indica a tua morada.",
    home_notes_label: "Detalhes Adicionais",
    form_consent: "Concordo com o tratamento dos meus dados.",
    form_consent_error: "Precisas de aceitar para continuar.",
    form_submit: "Confirmar Marcação",
    home_submit: "Solicitar Corte",
    success_title: "Pedido na Bancada!",
    success_msg:
      "O teu WhatsApp foi aberto com os detalhes da marcação. Aguarda confirmação.",
    success_close: "Fechar",
    footer_tagline: "A barbearia dos campeões em Luanda.",
    footer_nav: "Navegação",
    footer_services: "Serviços",
    footer_contact: "Contacto",
    footer_rights: "Todos os direitos reservados.",
    footer_made: "Feito com ✂️ para os campeões",
    plan_intro_text:
      "ONDE VOCÊ PAGA UMA MENSALIDADE E TEM ACESSO AOS SERVIÇOS DE FORMA LIMITADA OU ILIMITADA, IGUAL ",
    plan_intro_text_2: "NETFLIX",
    loc_eyebrow: "Como nos encontrar",
    loc_title: "LOCALIZAÇÃO",
    loc_address: "Morada",
    loc_view_map: "Ver no Google Maps →",
    loc_hours_label: "Horário de Funcionamento",
    loc_hours_val: "Terça – Sábado: 10h00 – 20h00 | Domingo: 10h00 – 18h00",
    loc_call: "WhatsApp / Chamada",
    loc_btn_directions: "Como Chegar",
    srv_kutz_cabelo: "Kutz de Cabelo",
    srv_kutz_crianca: "Kutz Criança (Sub 15)",
    srv_kutz_senior: "Kutz Seniores (+65)",
    srv_kutz_barba: "Kutz de Barba",
    srv_kutz_cabelo_barba: "Kutz de Cabelo + Barba",
    srv_ritual_barba: "Ballkutz Ritual (Barboterapia)",
    srv_lineup: "Line Up",
    srv_sobrancelhas: "Sobrancelhas",
    srv_massagem: "Massagem",
    srv_hidratacao: "Hidratação de Cabelo ou Barba",
    srv_vip_kutz: "VIP Kutz",
    srv_vip_kutz_desc: "Cabelo, Barba, Depilação, Massagem",
    srv_presidential: "Presidential Kutz",
    srv_presidential_desc:
      "Cabelo, Barboterapia, Sobrancelhas, Combo Depilação, Hidratação Cabelo, Massagem",
    review9_text:
      "ESPAÇO ORGANIZADO E ATENDIMENTO EXCELENTE, BOM PARA OS  PEQUENINOS E ADULTOS TAMBÉM.",
    review8_text:
      "GOSTEI BASTANTE DE ESTAR NA BALLBUTZ BARBERSHOP, FOI UMA EXPERIÊNCIA NOVA E ME SENTI MUITO BEM COM O ATENDIMENTO, ME IDENTIFIQUEI COM A TEMÁTICA DESPORTIVA. RECOMENDO BÃO IRÁS TE ARREPENDER",
    review7_text:
      "FUI MUITO BEM RECEBIDO, EXCELENTE SERVIÇO AMBIENTE MUITO CONFORTAVEL, SIMPLISMENTE EXTRAORDINÁRIO",
    review6_text:
      "EXCELENTE SALÃO! O SALÃO É LIMPO, MODERNO E AGRADÁVEL. O CORTE É FEITO COM MUITO CUIDADO E O RESULTADO É EXATAMENTE O QUE EU ESPERAVA. ÓTIMA RELAÇÃO CUSTO-BENEFÍCIO. RECOMENDO ESTE SALÃO SEM HESITAR E VOLTEREI COM PRAZER! ",
    review5_text:
      "SERVIÇO ESPETACULAR. TENHO UMA PELE SENSÍVEL E TIVERAM MUITA ATENÇÃO A ISSO. UM SIMPLES CORTE QUE SE TORNA NUMA EXPERIÊNCIA DE SENSAÇÕES. TUDO TOP! ",
  },
  en: {
    how_it_works: "How it Works?",
    yt_eyebrow: "BallKutz TV — Our videos",
    yt_title: "FEATURED VIDEOS",
    yt_channel: "View Full Channel",
    yt_watch: "Watch",
    yt_watch_yt: "🎬 Watch on YouTube",
    yt_vid1: "BALLKUTZ Grand Opening Day | Opening Day 2025 EP.1",
    yt_vid2: "How Everything Started - EP.1/S1 BALLKUTZ",
    yt_vid3: "The BallKutz Experience",
    review9_text:
      "ORGANIZED SPACE AND EXCELLENT SERVICE, GOOD FOR LITTLE ONES AND ADULTS TOO.",
    review8_text:
      "I REALLY ENJOYED BEING AT BALLKUTZ BARBERSHOP, IT WAS A NEW EXPERIENCE AND I FELT VERY GOOD WITH THE SERVICE. I IDENTIFIED WITH THE SPORTS THEME. HIGHLY RECOMMEND, YOU WON'T REGRET IT.",
    review7_text:
      "I WAS VERY WELL RECEIVED, EXCELLENT SERVICE, VERY COMFORTABLE ENVIRONMENT, SIMPLY EXTRAORDINARY.",
    review6_text:
      "EXCELLENT SALON! THE SALON IS CLEAN, MODERN, AND PLEASANT. THE CUT IS DONE WITH GREAT CARE AND THE RESULT IS EXACTLY WHAT I EXPECTED. GREAT VALUE FOR MONEY. I RECOMMEND THIS SALON WITHOUT HESITATION AND WILL GLADLY RETURN!",
    review5_text:
      "SPECTACULAR SERVICE. I HAVE SENSITIVE SKIN AND THEY PAID GREAT ATTENTION TO THAT. A SIMPLE CUT THAT TURNS INTO AN EXPERIENCE OF SENSATIONS. EVERYTHING IS TOP-NOTCH!",
    tab_domicilio: "At Home",
    opt_cortes: "Cuts",
    opt_barba: "Beard",
    opt_extras: "Extra Services",
    opt_vip: "VIP / Combo",
    f_srv_lineup: "Line Up — 1.500 KZ",
    f_srv_kutz_crianca: "Kids Cut (Under 15) — 3.000 KZ",
    f_srv_kutz_cabelo: "Haircut — 4.000 KZ",
    f_srv_kutz_senior: "Seniors Cut (+65) — 4.000 KZ",
    f_srv_ritual_barba: "Ballkutz Ritual (Hot Towel) — 6.000 KZ",
    f_srv_kutz_barba: "Beard Trim — 3.000 KZ",
    f_srv_cabelo_barba: "Haircut + Beard — 6.000 KZ",
    f_srv_sobrancelhas: "Eyebrows — 2.000 KZ",
    f_srv_massagem: "Massage — 2.000 KZ",
    f_srv_hidratacao: "Hair/Beard Hydration — 2.500 KZ",
    f_srv_depilacao: "Nose/Ear Waxing — 3.000 KZ",
    f_srv_camuflagem: "Hair/Beard Camouflage — 3.500 KZ",
    f_srv_pintura: "Black Dye — 4.000 KZ",
    f_srv_combo_hidratacao: "Hydration Combo — 4.000 KZ",
    f_srv_combo_depilacao: "Waxing Combo — 5.000 KZ",
    f_srv_limpeza: "Skin Cleansing — 5.000 KZ",
    f_srv_combo_camuflagem: "Camouflage Combo — 6.000 KZ",
    f_srv_velas_hopi: "Hopi Ear Candles — 7.000 KZ",
    f_srv_descoloracao: "Bleaching — 7.000 / 12.000 KZ",
    f_srv_24k_limpeza: "24K Gold Skin Cleansing — 10.000 KZ",
    f_srv_vip_kutz: "VIP Kutz (Hair, Beard, Waxing, Massage) — 10.000 KZ",
    f_srv_presidential: "Presidential Kutz (Full) — 15.000 KZ",
    ft_srv_hair: "Haircuts",
    ft_srv_beard: "Beard",
    ft_srv_esthetics: "Extra Services",
    ft_plan_pro: "PRO Plan",
    ft_plan_promax: "PRO MAX Plan",
    ft_address: "Street 2, Cassenda, Nº 15, Luanda | Angola",
    ft_hours_wk: "Tue–Sat: 10am–8pm",
    ft_hours_we: "Sun: 10am–6pm",
    srv_depilacao: "Nose or Ear Waxing",
    srv_camuflagem: "Hair or Beard Camouflage",
    srv_pintura: "Black Dye",
    srv_combo_hidratacao: "Hydration Combo",
    srv_combo_depilacao: "Waxing Combo",
    srv_limpeza: "Skin Cleansing",
    srv_combo_camuflagem: "Camouflage Combo",
    srv_velas_hopi: "Hopi Ear Candles (Thermo-Auricular Therapy)",
    srv_descoloracao: "Bleaching",
    srv_24k_limpeza: "24K Gold Skin Cleansing",
    nav_services: "Services",
    nav_plans: "Plans",
    nav_team: "Team",
    nav_gallery: "Gallery",
    nav_cta: "Book Now",
    nav_about: "About",
    hero_eyebrow: "Street 2, Cassenda, Nº 15, Luanda | Angola · Est. 2025",
    hero_line1: "COME FEEL THE DIFFERENCE, BECAUSE THE RIGHT ",
    hero_line2: "CUT CHANGES EVERYTHING.",
    hero_sub:
      "The champions' barbershop in Luanda. Excellence cuts, premium and unforgettable experience.",
    hero_cta: "Book Now",
    hero_cta2: "View Services",
    stat_rating: "Rating",
    stat_clients: "Clients",
    stat_services: "Services",
    stat_anos: "Year",
    about_eyebrow: "Our story",
    about_title: "MORE THAN A CUT.",
    about_p1:
      "BallKutz emerged from the idea of bringing together the world of sports (football and basketball), raising its clients' self-esteem to the highest level. A space where every visit is a unique experience — music, PlayStation games, and the best haircut of your life.",
    about_p2:
      "Here you are not just another client. You are part of the club. With exclusive subscription plans, elevating your style is always our priority.",
    about_v1_title: "Excellence",
    about_v1_text:
      "Every cut is executed with absolute precision and attention to detail.",
    about_v2_title: "Community",
    about_v2_text: "A social space where sports bring our clients together.",
    about_v3_title: "Trust",
    about_v3_text: "Professionalism and commitment in every service provided.",
    about_v4_title: "Luxury",
    about_v4_text:
      "Premium decor that makes you feel like you are in a champions' club.",
    services_eyebrow: "The Playbook — Pricing",
    services_title: "SERVICES",
    tab_cortes: "Cuts",
    tab_barba: "Beard",
    tab_estetica: "Extra Services",
    tab_vip: "VIP",
    loc_eyebrow: "How to find us",
    loc_title: "LOCATION",
    loc_address: "Address",
    loc_view_map: "View on Google Maps →",
    loc_hours_label: "Opening Hours",
    loc_hours_val: "Tuesday – Saturday: 10am – 8pm | Sunday: 10am – 6pm",
    loc_call: "WhatsApp / Call",
    loc_btn_directions: "Get Directions",
    srv_kutz_cabelo: "Haircut",
    srv_kutz_crianca: "Kids Cut (Under 15)",
    srv_kutz_senior: "Seniors Cut (+65)",
    srv_kutz_barba: "Beard Trim",
    srv_kutz_cabelo_barba: "Haircut + Beard",
    srv_ritual_barba: "Ballkutz Ritual (Hot Towel)",
    srv_lineup: "Line Up",
    srv_sobrancelhas: "Eyebrows",
    srv_massagem: "Massage",
    srv_hidratacao: "Hair or Beard Hydration",
    srv_vip_kutz: "VIP Kutz",
    srv_vip_kutz_desc: "Hair, Beard, Waxing, Massage",
    srv_presidential: "Presidential Kutz",
    srv_presidential_desc:
      "Hair, Hot Towel Beard, Eyebrows, Waxing Combo, Hydration, Massage",
    plans_eyebrow: "Have you ever heard of",
    plans_title: "BARBERSHOP SUBSCRIPTION?",
    plans_subtitle: "Monthly · No contracts · Cancel anytime",
    plans_cat_limited: "2x / Month",
    plans_cat_unlimited: "Unlimited",
    plan_period_limited: "/ 2x month",
    plan_period_unlimited: "/ month",
    plan_discount: "10% OFF on products and services",
    plan_cta: "Join Plan",
    plan_cta_unlimited: "Join Now",
    plan1_name: "Hair Plan",
    plan1_perk1: "2 haircuts per month",
    plan1_perk3: "1 token — 1 free extra service + bring a friend for free",
    plan2_name: "Hair + Beard Plan",
    plan2_perk1: "2 hair + beard per month",
    plan2_perk3: "1 token — 1 free extra service",
    plan3_name: "Hair Plan",
    plan3_perk1: "Unlimited haircuts",
    plan3_perk3: "2 tokens — 1 free extra service",
    plan4_name: "Beard Plan",
    plan4_perk1: "Unlimited beard trims",
    plan4_perk3: "2 tokens — 1 free extra service",
    plan5_name: "Kids Plan",
    plan5_perk1: "Unlimited haircuts",
    plan5_perk3: "2 tokens — 1 free extra service + bring 1 friend for free",
    plan6_name: "Hair + Beard Plan",
    plan6_badge: "Most Popular",
    plan6_perk1: "Unlimited Hair + Beard",
    plan6_perk3: "2 tokens — 1 free extra service + bring 1 friend for free",
    team_eyebrow: "Starting XI — Our Squad",
    team_title: "THE TEAM",
    barber_head: "Head Barber · Captain",
    barber_senior: "Senior Barber",
    barber_barber: "Barber",
    stat_years: "Yrs Exp.",
    stat_specialty: "Specialty",
    barber_book: "Book →",
    gallery_eyebrow: "Match Highlights — Our work",
    gallery_title: "GALLERY",
    reviews_eyebrow: "Fans' Voice — What they say",
    reviews_title: "REVIEWS",
    review1_text:
      '"REALLY BEAUTIFUL AND COMFORTABLE SALON. GREAT STAFF, I HIGHLY RECOMMEND IT..."',
    review2_text:
      '"BALLKUTZ 5 STARS, A WELCOMING PLACE AND YOU FEEL REALLY COOL..."',
    review3_text:
      '"A TOTALLY DIFFERENT EXPERIENCE. IT FEELS LIKE THE PAST, PRESENT AND FUTURE AT THE SAME TIME"',
    review4_text:
      '"I RECOMMEND COMING HERE, THEY WELCOME CLIENTS VERY WELL..."',
    booking_eyebrow: "Final Whistle — Save your spot",
    booking_title: "BOOK NOW",
    booking_desc:
      "Fill out the form and receive confirmation on your WhatsApp shortly.",
    contact_address_label: "Address",
    contact_hours_label: "Hours",
    contact_hours: "Tue–Sat: 10am–8pm · Sun: 10am–6pm",
    quick_call: "Call Now",
    quick_wa: "Quick WhatsApp",
    or_form: "or fill out the form",
    mode_label: "How do you prefer your cut?",
    mode_shop_title: "At the Barbershop",
    mode_shop_sub: "You come to us. Full club experience.",
    mode_home_title: "At Home",
    mode_home_sub: "We come to you. Cut in the comfort of your home.",
    form_name: "Name",
    form_name_error: "Please enter your name.",
    form_phone: "WhatsApp",
    form_phone_error: "Invalid WhatsApp number.",
    form_email: "E-mail (optional)",
    form_service: "Service",
    form_service_placeholder: "Select a service",
    form_service_error: "Select a service.",
    form_barber: "Barber",
    form_barber_placeholder: "Any barber",
    form_date: "Date",
    form_date_error: "Select a valid date.",
    form_time: "Time",
    form_time_error: "Select a time.",
    home_location_label: "Address / Location",
    home_location_error: "Please provide your address.",
    home_notes_label: "Additional Details",
    form_consent: "I agree to the processing of my data.",
    form_consent_error: "You need to accept to continue.",
    form_submit: "Confirm Booking",
    home_submit: "Request Home Cut",
    success_title: "Request on the Bench!",
    success_msg:
      "Your WhatsApp has opened with the booking details. Wait for confirmation.",
    success_close: "Close",
    footer_tagline: "The champions' barbershop in Luanda.",
    footer_nav: "Navigation",
    footer_services: "Services",
    footer_contact: "Contact",
    footer_rights: "All rights reserved.",
    footer_made: "Made with ✂️ for champions",
    plan_intro_text:
      "WHERE YOU PAY A MONTHLY FEE AND HAVE LIMITED OR UNLIMITED ACCESS TO SERVICES, JUST LIKE ",
    plan_intro_text_2: "NETFLIX",
  },
  fr: {
    how_it_works: "Comment ça marche ?",
    yt_eyebrow: "BallKutz TV — Nos vidéos",
    yt_title: "VIDÉOS EN VEDETTE",
    yt_channel: "Voir la Chaîne Complète",
    yt_watch: "Regarder",
    yt_watch_yt: "🎬 Regarder sur YouTube",
    yt_vid1: "BALLKUTZ Grand Opening Day | Jour d'Inauguration 2025 EP.1",
    yt_vid2: "Comment Tout a Commencé - EP.1/S1 BALLKUTZ",
    yt_vid3: "L'Expérience BallKutz",
    review9_text:
      "ESPACE ORGANISÉ ET EXCELLENT SERVICE, BIEN POUR LES PETITS ET LES ADULTES AUSSI.",
    review8_text:
      "J'AI BEAUCOUP AIMÉ ÊTRE CHEZ BALLKUTZ BARBERSHOP, CE FUT UNE NOUVELLE EXPÉRIENCE ET JE ME SUIS TRÈS BIEN SENTI AVEC LE SERVICE, JE ME SUIS IDENTIFIÉ AU THÈME SPORTIF. JE RECOMMANDE, VOUS NE LE REGRETTEREZ PAS.",
    review7_text:
      "J'AI ÉTÉ TRÈS BIEN REÇU, EXCELLENT SERVICE, ENVIRONNEMENT TRÈS CONFORTABLE, TOUT SIMPLEMENT EXTRAORDINAIRE.",
    review6_text:
      "EXCELLENT SALON ! LE SALON EST PROPRE, MODERNE ET AGRÉABLE. LA COUPE EST FAITE AVEC BEAUCOUP DE SOIN ET LE RÉSULTAT EST EXACTEMENT CE QUE J'ATTENDAIS. TRÈS BON RAPPORT QUALITÉ-PRIX. JE RECOMMANDE CE SALON SANS HÉSITER ET J'Y RETOURNERAI AVEC PLAISIR !",
    review5_text:
      "SERVICE SPECTACULAIRE. J'AI LA PEAU SENSIBLE ET ILS Y ONT FAIT TRÈS ATTENTION. UNE SIMPLE COUPE QUI SE TRANSFORME EN UNE EXPÉRIENCE DE SENSATIONS. TOUT EST TOP !",
    plan_intro_text_2: "NETFLIX",
    tab_domicilio: "À Domicile",
    opt_cortes: "Coupes",
    opt_barba: "Barbe",
    opt_extras: "Services Extras",
    opt_vip: "VIP / Combo",
    f_srv_lineup: "Contours — 1.500 KZ",
    f_srv_kutz_crianca: "Coupe Enfant (-15) — 3.000 KZ",
    f_srv_kutz_cabelo: "Coupe de Cheveux — 4.000 KZ",
    f_srv_kutz_senior: "Coupe Senior (+65) — 4.000 KZ",
    f_srv_ritual_barba: "Rituel Ballkutz (Serviette Chaude) — 6.000 KZ",
    f_srv_kutz_barba: "Taille de Barbe — 3.000 KZ",
    f_srv_cabelo_barba: "Coupe + Barbe — 6.000 KZ",
    f_srv_sobrancelhas: "Sourcils — 2.000 KZ",
    f_srv_massagem: "Massage — 2.000 KZ",
    f_srv_hidratacao: "Soin Hydratant Cheveux/Barbe — 2.500 KZ",
    f_srv_depilacao: "Épilation Nez/Oreilles — 3.000 KZ",
    f_srv_camuflagem: "Camouflage Cheveux/Barbe — 3.500 KZ",
    f_srv_pintura: "Teinture Noire — 4.000 KZ",
    f_srv_combo_hidratacao: "Combo Hydratation — 4.000 KZ",
    f_srv_combo_depilacao: "Combo Épilation — 5.000 KZ",
    f_srv_limpeza: "Nettoyage de Peau — 5.000 KZ",
    f_srv_combo_camuflagem: "Combo Camouflage — 6.000 KZ",
    f_srv_velas_hopi: "Bougies Hopi — 7.000 KZ",
    f_srv_descoloracao: "Décoloration — 7.000 / 12.000 KZ",
    f_srv_24k_limpeza: "Nettoyage Or 24K — 10.000 KZ",
    f_srv_vip_kutz: "VIP Kutz (Cheveux, Barbe, Épilation, Massage) — 10.000 KZ",
    f_srv_presidential: "Presidential Kutz (Complet) — 15.000 KZ",
    ft_srv_hair: "Coupes de Cheveux",
    ft_srv_beard: "Barbe",
    ft_srv_esthetics: "Services Extras",
    ft_plan_pro: "Forfait PRO",
    ft_plan_promax: "Forfait PRO MAX",
    ft_address: "Rue 2, Cassenda, Nº 15, Luanda | Angola",
    ft_hours_wk: "Mar–Sam: 10h–20h",
    ft_hours_we: "Dim: 10h–18h",
    srv_depilacao: "Épilation Nez ou Oreilles",
    srv_camuflagem: "Camouflage Cheveux ou Barbe",
    srv_pintura: "Teinture Noire",
    srv_combo_hidratacao: "Combo Hydratation",
    srv_combo_depilacao: "Combo Épilation",
    srv_limpeza: "Nettoyage de Peau",
    srv_combo_camuflagem: "Combo Camouflage",
    srv_velas_hopi: "Bougies Hopi (Thérapie Thermo-Auriculaire)",
    srv_descoloracao: "Décoloration",
    srv_24k_limpeza: "Nettoyage de Peau Or 24K",
    loc_eyebrow: "Comment nous trouver",
    loc_title: "EMPLACEMENT",
    loc_address: "Adresse",
    loc_view_map: "Voir sur Google Maps →",
    loc_hours_label: "Heures d'ouverture",
    loc_hours_val: "Mardi – Samedi: 10h – 20h | Dimanche: 10h – 18h",
    loc_call: "WhatsApp / Appel",
    loc_btn_directions: "Itinéraire",
    srv_kutz_cabelo: "Coupe de Cheveux",
    srv_kutz_crianca: "Coupe Enfant (-15 ans)",
    srv_kutz_senior: "Coupe Senior (+65)",
    srv_kutz_barba: "Taille de Barbe",
    srv_kutz_cabelo_barba: "Coupe + Barbe",
    srv_ritual_barba: "Rituel Ballkutz (Serviette Chaude)",
    srv_lineup: "Contours",
    srv_sobrancelhas: "Sourcils",
    srv_massagem: "Massage",
    srv_hidratacao: "Soin Hydratant Cheveux/Barbe",
    srv_vip_kutz: "VIP Kutz",
    srv_vip_kutz_desc: "Cheveux, Barbe, Épilation, Massage",
    srv_presidential: "Presidential Kutz",
    srv_presidential_desc:
      "Cheveux, Barbe rituelle, Sourcils, Épilation complète, Soin, Massage",
    nav_services: "Services",
    nav_plans: "Abonnements",
    nav_team: "Équipe",
    nav_gallery: "Galerie",
    nav_cta: "Réserver",
    nav_about: "À propos",
    hero_eyebrow: "Rue 2, Cassenda, Nº 15, Luanda | Angola · Est. 2025",
    hero_line1: "VENEZ RESSENTIR LA DIFFÉRENCE, CAR LA BONNE ",
    hero_line2: "COUPE CHANGE TOUT.",
    hero_sub:
      "Le salon de coiffure des champions à Luanda. Coupes de précision, expérience club premium.",
    hero_cta: "Réserver",
    hero_cta2: "Voir les services",
    stat_rating: "Évaluation",
    stat_clients: "Clients",
    stat_services: "Services",
    stat_anos: "An",
    about_eyebrow: "Notre histoire",
    about_title: "PLUS QU'UNE COUPE.",
    about_p1:
      "BallKutz est né de l'idée de réunir le monde du sport (football et basketball), élevant l'estime de soi de ses clients au plus haut niveau.",
    about_p2:
      "Ici, vous n'êtes pas seulement un client. Vous faites partie du club.",
    about_v1_title: "Excellence",
    about_v1_text: "Chaque coupe est exécutée avec une précision absolue.",
    about_v2_title: "Communauté",
    about_v2_text: "Un espace social où le sport rassemble nos clients.",
    about_v3_title: "Confiance",
    about_v3_text: "Professionnalisme et engagement dans chaque service.",
    about_v4_title: "Luxe",
    about_v4_text:
      "Une décoration premium qui vous fait sentir dans un club de champions.",
    services_eyebrow: "The Playbook — Tarifs",
    services_title: "SERVICES",
    tab_cortes: "Coupes",
    tab_barba: "Barbe",
    tab_estetica: "Services Extras",
    tab_vip: "VIP",
    plans_eyebrow: "Avez-vous déjà entendu parler de",
    plans_title: "BARBIER SUR ABONNEMENT?",
    plans_subtitle: "Mensuel · Sans engagement · Annulez à tout moment",
    plans_cat_limited: "2x / Mois",
    plans_cat_unlimited: "Illimité",
    plan_period_limited: "/ 2x mois",
    plan_period_unlimited: "/ mois",
    plan_discount: "10% de réduction sur les produits",
    plan_cta: "Rejoindre",
    plan_cta_unlimited: "Rejoindre Maintenant",
    plan1_name: "Forfait Cheveux",
    plan1_perk1: "2 coupes par mois",
    plan1_perk3:
      "1 jeton — 1 service extra gratuit + amener un ami gratuitement",
    plan2_name: "Cheveux + Barbe",
    plan2_perk1: "2 cheveux + barbe par mois",
    plan2_perk3: "1 jeton — 1 service extra gratuit",
    plan3_name: "Forfait Cheveux",
    plan3_perk1: "Coupes illimitées",
    plan3_perk3: "2 jetons — 1 service extra gratuit",
    plan4_name: "Forfait Barbe",
    plan4_perk1: "Barbes illimitées",
    plan4_perk3: "2 jetons — 1 service extra gratuit",
    plan5_name: "Forfait Enfant",
    plan5_perk1: "Coupes illimitées",
    plan5_perk3: "2 jetons — 1 service extra gratuit + amener 1 ami",
    plan6_name: "Cheveux + Barbe",
    plan6_badge: "Le Plus Populaire",
    plan6_perk1: "Cheveux + Barbe illimités",
    plan6_perk3: "2 jetons — 1 service extra gratuit + amener 1 ami",
    team_eyebrow: "Le 11 de Départ",
    team_title: "L'ÉQUIPE",
    barber_head: "Coiffeur Principal",
    barber_senior: "Coiffeur Senior",
    barber_barber: "Coiffeur",
    stat_years: "Ans d'Exp.",
    stat_specialty: "Spécialité",
    barber_book: "Réserver →",
    gallery_eyebrow: "Match Highlights",
    gallery_title: "GALERIE",
    reviews_eyebrow: "La Voix des Fans",
    reviews_title: "AVIS",
    review1_text:
      '"UN SALON VRAIMENT MAGNIFIQUE ET CONFORTABLE. EXCELLENT PERSONNEL..."',
    review2_text: '"BALLKUTZ 5 ÉTOILES, UN ENDROIT ACCUEILLANT..."',
    review3_text: '"UNE EXPÉRIENCE TOTALEMENT DIFFÉRENTE."',
    review4_text: '"JE RECOMMANDE FORTEMENT CE SALON..."',
    booking_eyebrow: "Coup de sifflet final — Réservez",
    booking_title: "RÉSERVER",
    booking_desc:
      "Remplissez le formulaire et recevez une confirmation sur WhatsApp.",
    contact_address_label: "Adresse",
    contact_hours_label: "Horaires",
    contact_hours: "Mar–Sam: 10h–20h · Dim: 10h–18h",
    quick_call: "Appeler",
    quick_wa: "WhatsApp Rapide",
    or_form: "ou remplir le formulaire",
    mode_label: "Comment préférez-vous votre coupe?",
    mode_shop_title: "Au Salon",
    mode_shop_sub: "Venez à nous. Expérience club complète.",
    mode_home_title: "À Domicile",
    mode_home_sub: "Nous venons à vous.",
    form_name: "Nom",
    form_name_error: "Veuillez entrer votre nom.",
    form_phone: "WhatsApp",
    form_phone_error: "Numéro invalide.",
    form_email: "E-mail (optionnel)",
    form_service: "Service",
    form_service_placeholder: "Choisir un service",
    form_service_error: "Choisissez un service.",
    form_barber: "Coiffeur",
    form_barber_placeholder: "N'importe lequel",
    form_date: "Date",
    form_date_error: "Date invalide.",
    form_time: "Heure",
    form_time_error: "Choisissez une heure.",
    home_location_label: "Adresse",
    home_location_error: "Veuillez indiquer votre adresse.",
    home_notes_label: "Détails supplémentaires",
    form_consent: "J'accepte le traitement de mes données.",
    form_consent_error: "Vous devez accepter pour continuer.",
    form_submit: "Confirmer la Réservation",
    home_submit: "Demander à Domicile",
    success_title: "Demande sur le banc!",
    success_msg: "Votre WhatsApp a été ouvert. Attendez la confirmation.",
    success_close: "Fermer",
    footer_tagline: "Le salon des champions à Luanda.",
    footer_nav: "Navigation",
    footer_services: "Services",
    footer_contact: "Contact",
    footer_rights: "Tous droits réservés.",
    footer_made: "Fait avec ✂️ pour les champions",
    plan_intro_text:
      "OÙ VOUS PAYEZ UN ABONNEMENT MENSUEL ET AVEZ UN ACCÈS LIMITÉ OU ILLIMITÉ AUX SERVICES, TOUT COMME ",
  },
  es: {
    how_it_works: "¿Cómo Funciona?",
    yt_eyebrow: "BallKutz TV — Nuestros videos",
    yt_title: "VIDEOS DESTACADOS",
    yt_channel: "Ver Canal Completo",
    yt_watch: "Ver",
    yt_watch_yt: "🎬 Ver en YouTube",
    yt_vid1: "BALLKUTZ Grand Opening Day | Día de Inauguración 2025 EP.1",
    yt_vid2: "Cómo Empezó Todo - EP.1/S1 BALLKUTZ",
    yt_vid3: "La Experiencia BallKutz",
    review9_text:
      "ESPACIO ORGANIZADO Y EXCELENTE ATENCIÓN, BUENO PARA LOS PEQUEÑOS Y ADULTOS TAMBIÉN.",
    review8_text:
      "ME GUSTÓ BASTANTE ESTAR EN BALLKUTZ BARBERSHOP, FUE UNA EXPERIENCIA NUEVA Y ME SENTÍ MUY BIEN CON LA ATENCIÓN, ME IDENTIFIQUÉ CON LA TEMÁTICA DEPORTIVA. LO RECOMIENDO, NO TE ARREPENTIRÁS.",
    review7_text:
      "FUI MUY BIEN RECIBIDO, EXCELENTE SERVICIO, AMBIENTE MUY CONFORTABLE, SIMPLEMENTE EXTRAORDINARIO.",
    review6_text:
      "¡EXCELENTE SALÓN! EL SALÓN ES LIMPIO, MODERNO Y AGRADABLE. EL CORTE SE HACE CON MUCHO CUIDADO Y EL RESULTADO ES EXACTAMENTE LO QUE ESPERABA. ÓPTIMA RELACIÓN CALIDAD-PRECIO. ¡RECOMIENDO ESTE SALÓN SIN DUDARLO Y VOLVERÉ CON GUSTO!",
    review5_text:
      "SERVICIO ESPECTACULAR. TENGO PIEL SENSIBLE Y PRESTARON MUCHA ATENCIÓN A ESO. UN SIMPLE CORTE QUE SE CONVIERTE EN UNA EXPERIENCIA DE SENSACIONES. ¡TODO TOP!",
    plan_intro_text_2: "NETFLIX",
    tab_domicilio: "A Domicilio",
    opt_cortes: "Cortes",
    opt_barba: "Barba",
    opt_extras: "Servicios Extras",
    opt_vip: "VIP / Combo",
    f_srv_lineup: "Line Up — 1.500 KZ",
    f_srv_kutz_crianca: "Corte Niños (Sub 15) — 3.000 KZ",
    f_srv_kutz_cabelo: "Corte de Cabello — 4.000 KZ",
    f_srv_kutz_senior: "Corte Senior (+65) — 4.000 KZ",
    f_srv_ritual_barba: "Ritual Ballkutz (Toalla Caliente) — 6.000 KZ",
    f_srv_kutz_barba: "Corte de Barba — 3.000 KZ",
    f_srv_cabelo_barba: "Cabello + Barba — 6.000 KZ",
    f_srv_sobrancelhas: "Cejas — 2.000 KZ",
    f_srv_massagem: "Masaje — 2.000 KZ",
    f_srv_hidratacao: "Hidratación Cabello/Barba — 2.500 KZ",
    f_srv_depilacao: "Depilación Nariz/Orejas — 3.000 KZ",
    f_srv_camuflagem: "Camuflaje Cabello/Barba — 3.500 KZ",
    f_srv_pintura: "Tinte Negro — 4.000 KZ",
    f_srv_combo_hidratacao: "Combo Hidratación — 4.000 KZ",
    f_srv_combo_depilacao: "Combo Depilación — 5.000 KZ",
    f_srv_limpeza: "Limpieza de Cutis — 5.000 KZ",
    f_srv_combo_camuflagem: "Combo Camuflaje — 6.000 KZ",
    f_srv_velas_hopi: "Velas Hopi — 7.000 KZ",
    f_srv_descoloracao: "Decoloración — 7.000 / 12.000 KZ",
    f_srv_24k_limpeza: "Limpieza Oro 24K — 10.000 KZ",
    f_srv_vip_kutz: "VIP Kutz (Cabello, Barba, Depilación, Masaje) — 10.000 KZ",
    f_srv_presidential: "Presidential Kutz (Completo) — 15.000 KZ",
    ft_srv_hair: "Cortes de Cabello",
    ft_srv_beard: "Barba",
    ft_srv_esthetics: "Extras",
    ft_plan_pro: "Plan PRO",
    ft_plan_promax: "Plan PRO MAX",
    ft_address: "Calle 2, Cassenda, Nº 15, Luanda | Angola",
    ft_hours_wk: "Mar–Sáb: 10h–20h",
    ft_hours_we: "Dom: 10h–18h",
    srv_depilacao: "Depilación Nariz u Orejas",
    srv_camuflagem: "Camuflaje Cabello o Barba",
    srv_pintura: "Tinte Negro",
    srv_combo_hidratacao: "Combo Hidratación",
    srv_combo_depilacao: "Combo Depilación",
    srv_limpeza: "Limpieza de Cutis",
    srv_combo_camuflagem: "Combo Camuflaje",
    srv_velas_hopi: "Velas Hopi (Terapia Termo-Auricular)",
    srv_descoloracao: "Decoloración",
    srv_24k_limpeza: "Limpieza de Cutis Oro 24K",
    loc_eyebrow: "Cómo encontrarnos",
    loc_title: "UBICACIÓN",
    loc_address: "Dirección",
    loc_view_map: "Ver en Google Maps →",
    loc_hours_label: "Horario de Atención",
    loc_hours_val: "Martes – Sábado: 10h – 20h | Domingo: 10h – 18h",
    loc_call: "WhatsApp / Llamada",
    loc_btn_directions: "Cómo Llegar",
    srv_kutz_cabelo: "Corte de Cabello",
    srv_kutz_crianca: "Corte Niños (Sub 15)",
    srv_kutz_senior: "Corte Senior (+65)",
    srv_kutz_barba: "Corte de Barba",
    srv_kutz_cabelo_barba: "Cabello + Barba",
    srv_ritual_barba: "Ritual Ballkutz (Toalla Caliente)",
    srv_lineup: "Line Up",
    srv_sobrancelhas: "Cejas",
    srv_massagem: "Masaje",
    srv_hidratacao: "Hidratación Cabello/Barba",
    srv_vip_kutz: "VIP Kutz",
    srv_vip_kutz_desc: "Cabello, Barba, Depilación, Masaje",
    srv_presidential: "Presidential Kutz",
    srv_presidential_desc:
      "Cabello, Barba ritual, Cejas, Combo Depilación, Hidratación, Masaje",
    nav_services: "Servicios",
    nav_plans: "Planes",
    nav_team: "Equipo",
    nav_gallery: "Galería",
    nav_cta: "Reservar",
    nav_about: "Nosotros",
    hero_eyebrow: "Calle 2, Cassenda, Nº 15, Luanda | Angola · Est. 2025",
    hero_line1: "VEN A SENTIR LA DIFERENCIA, PORQUE EL CORTE ",
    hero_line2: "CORRECTO LO CAMBIA TODO.",
    hero_sub:
      "La barbería de los campeones en Luanda. Cortes de precisión, experiencia premium.",
    hero_cta: "Reservar",
    hero_cta2: "Ver Servicios",
    stat_rating: "Valoración",
    stat_clients: "Clientes",
    stat_services: "Servicios",
    stat_anos: "Año",
    about_eyebrow: "Nuestra historia",
    about_title: "MÁS QUE UN CORTE.",
    about_p1:
      "BallKutz surgió de la idea de unir el mundo del deporte, elevando la autoestima de sus clientes al más alto nivel.",
    about_p2: "Aquí no eres solo un cliente más. Eres parte del club.",
    about_v1_title: "Excelencia",
    about_v1_text: "Cada corte se ejecuta con precisión absoluta.",
    about_v2_title: "Comunidad",
    about_v2_text:
      "Un espacio social donde el deporte une a nuestros clientes.",
    about_v3_title: "Confianza",
    about_v3_text: "Profesionalismo y compromiso en cada servicio.",
    about_v4_title: "Lujo",
    about_v4_text:
      "Decoración premium que te hace sentir en un club de campeones.",
    services_eyebrow: "The Playbook — Precios",
    services_title: "SERVICIOS",
    tab_cortes: "Cortes",
    tab_barba: "Barba",
    tab_estetica: "Extras",
    tab_vip: "VIP",
    plans_eyebrow: "¿Has oído hablar de",
    plans_title: "¿BARBERÍA CON SUSCRIPCIÓN?",
    plans_subtitle: "Mensual · Sin contratos · Cancela cuando quieras",
    plans_cat_limited: "2x / Mes",
    plans_cat_unlimited: "Ilimitado",
    plan_period_limited: "/ 2x mes",
    plan_period_unlimited: "/ mes",
    plan_discount: "10% OFF en productos",
    plan_cta: "Unirse",
    plan_cta_unlimited: "Unirse Ahora",
    plan1_name: "Plan Cabello",
    plan1_perk1: "2 cortes por mes",
    plan1_perk3: "1 ficha — 1 servicio extra gratis + traer un amigo gratis",
    plan2_name: "Cabello + Barba",
    plan2_perk1: "2 cabello + barba por mes",
    plan2_perk3: "1 ficha — 1 servicio extra gratis",
    plan3_name: "Plan Cabello",
    plan3_perk1: "Cortes ilimitados",
    plan3_perk3: "2 fichas — 1 servicio extra gratis",
    plan4_name: "Plan Barba",
    plan4_perk1: "Barbas ilimitadas",
    plan4_perk3: "2 fichas — 1 servicio extra gratis",
    plan5_name: "Plan Niños",
    plan5_perk1: "Cortes ilimitados",
    plan5_perk3: "2 fichas — 1 servicio extra gratis + traer 1 amigo",
    plan6_name: "Cabello + Barba",
    plan6_badge: "Más Popular",
    plan6_perk1: "Cabello + Barba ilimitados",
    plan6_perk3: "2 fichas — 1 servicio extra gratis + traer 1 amigo",
    team_eyebrow: "El 11 Inicial",
    team_title: "EL EQUIPO",
    barber_head: "Barbero Principal",
    barber_senior: "Barbero Senior",
    barber_barber: "Barbero",
    stat_years: "Años Exp.",
    stat_specialty: "Especialidad",
    barber_book: "Reservar →",
    gallery_eyebrow: "Match Highlights",
    gallery_title: "GALERÍA",
    reviews_eyebrow: "La Voz de los Fans",
    reviews_title: "RESEÑAS",
    review1_text:
      '"UN SALÓN REALMENTE HERMOSO Y CÓMODO. EXCELENTE PERSONAL..."',
    review2_text: '"BALLKUTZ 5 ESTRELLAS, UN LUGAR ACOGEDOR..."',
    review3_text: '"UNA EXPERIENCIA TOTALMENTE DIFERENTE."',
    review4_text: '"RECOMIENDO MUCHO VENIR AQUÍ..."',
    booking_eyebrow: "Pitazo Final — Reserva tu lugar",
    booking_title: "RESERVAR",
    booking_desc: "Completa el formulario y recibe confirmación por WhatsApp.",
    contact_address_label: "Dirección",
    contact_hours_label: "Horarios",
    contact_hours: "Mar–Sáb: 10h–20h · Dom: 10h–18h",
    quick_call: "Llamar",
    quick_wa: "WhatsApp Rápido",
    or_form: "o llena el formulario",
    mode_label: "¿Cómo prefieres tu corte?",
    mode_shop_title: "En el Salón",
    mode_shop_sub: "Vienes a nosotros. Experiencia de club.",
    mode_home_title: "A Domicilio",
    mode_home_sub: "Vamos a ti.",
    form_name: "Nombre",
    form_name_error: "Por favor, ingresa tu nombre.",
    form_phone: "WhatsApp",
    form_phone_error: "Número inválido.",
    form_email: "E-mail (opcional)",
    form_service: "Servicio",
    form_service_placeholder: "Elige un servicio",
    form_service_error: "Elige un servicio.",
    form_barber: "Barbero",
    form_barber_placeholder: "Cualquiera",
    form_date: "Fecha",
    form_date_error: "Fecha inválida.",
    form_time: "Hora",
    form_time_error: "Elige una hora.",
    home_location_label: "Dirección",
    home_location_error: "Indica tu dirección.",
    home_notes_label: "Detalles adicionales",
    form_consent: "Acepto el tratamiento de mis datos.",
    form_consent_error: "Debes aceptar para continuar.",
    form_submit: "Confirmar Reserva",
    home_submit: "Pedir a Domicilio",
    success_title: "¡Pedido en la banca!",
    success_msg: "Tu WhatsApp ha sido abierto. Espera confirmación.",
    success_close: "Cerrar",
    footer_tagline: "La barbería de los campeones en Luanda.",
    footer_nav: "Navegación",
    footer_services: "Servicios",
    footer_contact: "Contacto",
    footer_rights: "Todos los derechos reservados.",
    footer_made: "Hecho con ✂️ para campeones",
    plan_intro_text:
      "DONDE PAGAS UNA MENSUALIDAD Y TIENES ACCESO LIMITADO O ILIMITADO A LOS SERVICIOS, IGUAL QUE ",
  },
  zh: {
    how_it_works: "它是如何运作的？",
    yt_eyebrow: "BallKutz TV — 我们的视频",
    yt_title: "精选视频",
    yt_channel: "查看完整频道",
    yt_watch: "观看",
    yt_watch_yt: "🎬 在 YouTube 上观看",
    yt_vid1: "BALLKUTZ 盛大开业 | 2025 开业日 EP.1",
    yt_vid2: "一切是如何开始的 - EP.1/S1 BALLKUTZ",
    yt_vid3: "BallKutz 体验",
    review9_text: "空间井然有序，服务极佳，非常适合小朋友和大人。",
    review8_text:
      "我非常喜欢在BALLKUTZ理发店的体验，这是一种全新的体验，我对他们的服务感到非常满意，我很认同这里的体育主题。强烈推荐，你不会后悔的。",
    review7_text: "我受到了很好的接待，优质的服务，非常舒适的环境，简直非凡。",
    review6_text:
      "很棒的理发店！店面干净、现代且舒适。理发非常细心，结果正是我所期望的。性价比极高。我毫不犹豫地推荐这家理发店，并且我很乐意再次光临！",
    review5_text:
      "服务非常棒。我的皮肤很敏感，他们对此非常注意。一次简单的理发变成了一次感官体验。一切都太棒了！",
    plan_intro_text_2: "NETFLIX",
    plan_intro_text: "您只需支付月费，即可获得有限或无限次的服务权限，就像 ",
    tab_domicilio: "上门服务",
    opt_cortes: "理发",
    opt_barba: "胡须",
    opt_extras: "额外服务",
    opt_vip: "VIP / 套餐",
    f_srv_lineup: "发际线修整 — 1.500 KZ",
    f_srv_kutz_crianca: "儿童理发 (15岁以下) — 3.000 KZ",
    f_srv_kutz_cabelo: "理发 — 4.000 KZ",
    f_srv_kutz_senior: "长者理发 (+65) — 4.000 KZ",
    f_srv_ritual_barba: "Ballkutz 仪式 — 6.000 KZ",
    f_srv_kutz_barba: "修须 — 3.000 KZ",
    f_srv_cabelo_barba: "理发 + 修须 — 6.000 KZ",
    f_srv_sobrancelhas: "修眉 — 2.000 KZ",
    f_srv_massagem: "按摩 — 2.000 KZ",
    f_srv_hidratacao: "头发/胡须保湿 — 2.500 KZ",
    f_srv_depilacao: "鼻部/耳部蜜蜡脱毛 — 3.000 KZ",
    f_srv_camuflagem: "头发/胡须遮盖 — 3.500 KZ",
    f_srv_pintura: "黑染 — 4.000 KZ",
    f_srv_combo_hidratacao: "保湿套餐 — 4.000 KZ",
    f_srv_combo_depilacao: "脱毛套餐 — 5.000 KZ",
    f_srv_limpeza: "皮肤清洁 — 5.000 KZ",
    f_srv_combo_camuflagem: "遮盖套餐 — 6.000 KZ",
    f_srv_velas_hopi: "耳烛疗法 — 7.000 KZ",
    f_srv_descoloracao: "漂白 — 7.000 / 12.000 KZ",
    f_srv_24k_limpeza: "24K金皮肤清洁 — 10.000 KZ",
    f_srv_vip_kutz: "VIP Kutz — 10.000 KZ",
    f_srv_presidential: "Presidential Kutz (全套) — 15.000 KZ",
    ft_srv_hair: "理发",
    ft_srv_beard: "胡须",
    ft_srv_esthetics: "额外服务",
    ft_plan_pro: "PRO 计划",
    ft_plan_promax: "PRO MAX 计划",
    ft_address: "罗安达, Cassenda 第2大街 15号 | 安哥拉",
    ft_hours_wk: "周二-周六: 10:00–20:00",
    ft_hours_we: "周日: 10:00–18:00",
    srv_depilacao: "鼻部或耳部蜜蜡脱毛",
    srv_camuflagem: "头发或胡须遮盖",
    srv_pintura: "黑染",
    srv_combo_hidratacao: "保湿套餐",
    srv_combo_depilacao: "脱毛套餐",
    srv_limpeza: "皮肤清洁",
    srv_combo_camuflagem: "遮盖套餐",
    srv_velas_hopi: "耳烛疗法",
    srv_descoloracao: "漂白",
    srv_24k_limpeza: "24K金皮肤清洁",
    loc_eyebrow: "如何找到我们",
    loc_title: "位置",
    loc_address: "地址",
    loc_view_map: "在 Google Maps 上查看 →",
    loc_hours_label: "营业时间",
    loc_hours_val: "周二 – 周六: 10:00 – 20:00 | 周日: 10:00 – 18:00",
    loc_call: "WhatsApp / 电话",
    loc_btn_directions: "获取路线",
    srv_kutz_cabelo: "理发",
    srv_kutz_crianca: "儿童理发 (15岁以下)",
    srv_kutz_senior: "长者理发 (65岁以上)",
    srv_kutz_barba: "修须",
    srv_kutz_cabelo_barba: "理发 + 修须",
    srv_ritual_barba: "Ballkutz 仪式 (热毛巾修须)",
    srv_lineup: "发际线修整",
    srv_sobrancelhas: "修眉",
    srv_massagem: "按摩",
    srv_hidratacao: "头发或胡须保湿",
    srv_vip_kutz: "VIP Kutz",
    srv_vip_kutz_desc: "理发、修须、脱毛、按摩",
    srv_presidential: "Presidential Kutz",
    srv_presidential_desc: "理发、热毛巾修须、修眉、全套脱毛、保湿、按摩",
    nav_services: "服务",
    nav_plans: "计划",
    nav_team: "团队",
    nav_gallery: "画廊",
    nav_cta: "预约",
    nav_about: "关于",
    hero_eyebrow: "罗安达, 安哥拉 · 始于2025",
    hero_line1: "感受不同，因为合适的",
    hero_line2: "发型改变一切。",
    hero_sub: "罗安达的冠军理发店。精准理发，高级俱乐部体验。",
    hero_cta: "立即预约",
    hero_cta2: "查看服务",
    stat_rating: "评分",
    stat_clients: "客户",
    stat_services: "服务",
    stat_anos: "年",
    about_eyebrow: "我们的故事",
    about_title: "不仅仅是理发。",
    about_p1:
      "BallKutz 源于将体育世界结合在一起的理念，将客户的自信提升到最高水平。",
    about_p2: "在这里，你不仅仅是一名普通客户。你是俱乐部的一员。",
    about_v1_title: "卓越",
    about_v1_text: "每一次理发都以绝对的精准度执行。",
    about_v2_title: "社区",
    about_v2_text: "体育将我们的客户聚集在一起的社交空间。",
    about_v3_title: "信任",
    about_v3_text: "每项服务都充满专业精神和承诺。",
    about_v4_title: "奢华",
    about_v4_text: "高级装饰让您感觉置身于冠军俱乐部。",
    services_eyebrow: "价格表",
    services_title: "服务",
    tab_cortes: "理发",
    tab_barba: "胡须",
    tab_estetica: "额外服务",
    tab_vip: "VIP",
    plans_eyebrow: "你听说过",
    plans_title: "订阅式理发店？",
    plans_subtitle: "每月 · 无合同 · 随时取消",
    plans_cat_limited: "每月 2 次",
    plans_cat_unlimited: "无限次",
    plan_period_limited: "/ 每月 2 次",
    plan_period_unlimited: "/ 月",
    plan_discount: "产品享 9 折",
    plan_cta: "加入计划",
    plan_cta_unlimited: "立即加入",
    plan1_name: "理发计划",
    plan1_perk1: "每月 2 次理发",
    plan1_perk3: "1 个代币 — 1 次免费额外服务 + 免费带一位朋友",
    plan2_name: "理发 + 胡须",
    plan2_perk1: "每月 2 次理发和胡须",
    plan2_perk3: "1 个代币 — 1 次免费额外服务",
    plan3_name: "理发计划",
    plan3_perk1: "无限次理发",
    plan3_perk3: "2 个代币 — 1 次免费额外服务",
    plan4_name: "胡须计划",
    plan4_perk1: "无限次修胡",
    plan4_perk3: "2 个代币 — 1 次免费额外服务",
    plan5_name: "儿童计划",
    plan5_perk1: "无限次理发",
    plan5_perk3: "2 个代币 — 1 次额外服务 + 免费带 1 位朋友",
    plan6_name: "理发 + 胡须",
    plan6_badge: "最受欢迎",
    plan6_perk1: "无限次理发和胡须",
    plan6_perk3: "2 个代币 — 1 次额外服务 + 免费带 1 位朋友",
    team_eyebrow: "首发阵容",
    team_title: "团队",
    barber_head: "首席理发师",
    barber_senior: "高级理发师",
    barber_barber: "理发师",
    stat_years: "经验(年)",
    stat_specialty: "专长",
    barber_book: "预约 →",
    gallery_eyebrow: "精彩瞬间",
    gallery_title: "画廊",
    reviews_eyebrow: "粉丝之声",
    reviews_title: "评价",
    review1_text: '"真正美丽舒适的沙龙。员工很棒..."',
    review2_text: '"BALLKUTZ 5 星好评，令人宾至如归..."',
    review3_text: '"完全不同的体验。感觉同时置身于过去和未来"',
    review4_text: '"我强烈推荐来这里..."',
    booking_eyebrow: "终场哨声 — 预留名额",
    booking_title: "预约",
    booking_desc: "填写表格，稍后将在 WhatsApp 上收到确认。",
    contact_address_label: "地址",
    contact_hours_label: "营业时间",
    contact_hours: "周二-周六: 10h–20h · 周日: 10h–18h",
    quick_call: "立即致电",
    quick_wa: "快速 WhatsApp",
    or_form: "或填写表格",
    mode_label: "您喜欢哪种理发方式？",
    mode_shop_title: "在理发店",
    mode_shop_sub: "您来店里体验。",
    mode_home_title: "上门服务",
    mode_home_sub: "我们上门为您服务。",
    form_name: "姓名",
    form_name_error: "请输入您的姓名。",
    form_phone: "WhatsApp",
    form_phone_error: "号码无效。",
    form_email: "电子邮件（可选）",
    form_service: "服务",
    form_service_placeholder: "选择服务",
    form_service_error: "请选择服务。",
    form_barber: "理发师",
    form_barber_placeholder: "任何理发师",
    form_date: "日期",
    form_date_error: "日期无效。",
    form_time: "时间",
    form_time_error: "请选择时间。",
    home_location_label: "地址",
    home_location_error: "请提供地址。",
    home_notes_label: "补充细节",
    form_consent: "我同意处理我的数据。",
    form_consent_error: "您必须接受才能继续。",
    form_submit: "确认预约",
    home_submit: "请求上门服务",
    success_title: "请求已发送！",
    success_msg: "您的 WhatsApp 已打开。等待确认。",
    success_close: "关闭",
    footer_tagline: "罗安达的冠军理发店。",
    footer_nav: "导航",
    footer_services: "服务",
    footer_contact: "联系方式",
    footer_rights: "版权所有。",
    footer_made: "为冠军 ✂️ 制作",
  },
};

// ── i18n ──
function setLanguage(lang) {
  currentLang = lang in LOCALES ? lang : "pt";
  document.documentElement.lang = currentLang;

  const dict = LOCALES[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (!value) return;
    if (el.tagName === "OPTGROUP") {
      el.label = value;
    } else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });

  const langSelect = document.getElementById("langToggle");
  if (langSelect) langSelect.value = currentLang;

  const mobileLang = document.getElementById("mobileLangToggle");
  if (mobileLang) {
    const next = currentLang === "pt" ? "EN" : "PT";
    mobileLang.textContent = `Switch to ${next}`;
  }
}

function toggleLanguage(e) {
  const lang = e?.target?.value || (currentLang === "pt" ? "en" : "pt");
  setLanguage(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langToggle");
  if (langSelect) {
    langSelect.addEventListener("change", toggleLanguage);
    langSelect.value = currentLang;
  }
  const mobileLang = document.getElementById("mobileLangToggle");
  if (mobileLang) {
    mobileLang.addEventListener("click", () =>
      setLanguage(currentLang === "pt" ? "en" : "pt"),
    );
  }
  setLanguage(currentLang);
});

// ── Navigation ──
function initNavigation() {
  const header = document.getElementById("mainNav");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileClose = document.getElementById("mobileClose");

  const openMenu = () => {
    mobileMenu.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    mobileMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  hamburger.addEventListener("click", openMenu);
  mobileClose.addEventListener("click", closeMenu);
  mobileMenu
    .querySelectorAll("a")
    .forEach((el) => el.addEventListener("click", closeMenu));

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("site-header--scrolled", window.scrollY > 60);
    },
    { passive: true },
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open"))
      closeMenu();
  });
}

// ── Services tabs ──
function initServiceTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      document
        .querySelectorAll(".tab-panel")
        .forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    });
  });

  document.querySelectorAll(".service-item").forEach((item) => {
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        item.click();
      }
    });
    item.addEventListener("click", () => {
      const select = document.getElementById("bookingService");
      const opt = [...select.options].find(
        (o) => o.value === item.dataset.service,
      );
      if (opt) {
        select.value = item.dataset.service;
        switchBookingMode("barbershop");
      }
      document
        .getElementById("reservar")
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ── Generic Slider Factory ──
// Creates a fully draggable, dot + arrow controlled slider from a scroll container.
function createSlider({
  wrapId,
  sliderId,
  dotsId,
  prevId,
  nextId,
  autoplayMs = 0,
}) {
  const wrap = document.getElementById(wrapId);
  const slider = document.getElementById(sliderId);
  const dotsWrap = document.getElementById(dotsId);
  const btnPrev = document.getElementById(prevId);
  const btnNext = document.getElementById(nextId);

  if (!wrap || !slider) return;

  // Collect direct children that are slideable (skip dividers)
  const cards = [...slider.children].filter(
    (el) => !el.classList.contains("plans__slider-divider"),
  );
  if (!cards.length) return;

  let current = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  let autoTimer = null;

  // Build dots
  if (dotsWrap) {
    dotsWrap.innerHTML = "";
    cards.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "plans__dot" + (i === 0 ? " active" : "");
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Slide ${i + 1}`);
      dot.setAttribute("aria-selected", i === 0 ? "true" : "false");
      dot.addEventListener("click", () => {
        stopAutoplay();
        goTo(i);
      });
      dotsWrap.appendChild(dot);
    });
  }

  const dots = dotsWrap ? [...dotsWrap.querySelectorAll(".plans__dot")] : [];

  function updateUI() {
    dots.forEach((d, i) => {
      const active = i === current;
      d.classList.toggle("active", active);
      d.setAttribute("aria-selected", active ? "true" : "false");
    });
    if (btnPrev) btnPrev.disabled = current === 0;
    if (btnNext) btnNext.disabled = current === cards.length - 1;
  }

  function goTo(index) {
    current = Math.max(0, Math.min(index, cards.length - 1));
    wrap.scrollTo({ left: cards[current].offsetLeft, behavior: "smooth" });
    updateUI();
  }

  function stopAutoplay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  if (btnPrev)
    btnPrev.addEventListener("click", () => {
      stopAutoplay();
      goTo(current - 1);
    });
  if (btnNext)
    btnNext.addEventListener("click", () => {
      stopAutoplay();
      goTo(current + 1);
    });

  // Sync dot on native scroll
  let scrollTimer = null;
  wrap.addEventListener(
    "scroll",
    () => {
      if (isDragging) return;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        let closest = 0;
        let minDist = Infinity;
        cards.forEach((card, i) => {
          const dist = Math.abs(card.offsetLeft - wrap.scrollLeft);
          if (dist < minDist) {
            minDist = dist;
            closest = i;
          }
        });
        if (closest !== current) {
          current = closest;
          updateUI();
        }
      }, 150);
    },
    { passive: true },
  );

  // Drag support
  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartScroll = wrap.scrollLeft;
    wrap.style.scrollSnapType = "none";
    slider.style.cursor = "grabbing";
    e.preventDefault();
  });

  window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    slider.style.cursor = "grab";
    wrap.style.scrollSnapType = "x mandatory";
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - wrap.scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    goTo(closest);
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    wrap.scrollLeft = dragStartScroll - (e.clientX - dragStartX);
  });

  slider.style.cursor = "grab";

  // Autoplay
  if (autoplayMs > 0) {
    autoTimer = setInterval(() => {
      goTo(current >= cards.length - 1 ? 0 : current + 1);
    }, autoplayMs);
    wrap.addEventListener("mouseenter", stopAutoplay);
    wrap.addEventListener("mouseleave", () => {
      if (!autoTimer)
        autoTimer = setInterval(
          () => goTo(current >= cards.length - 1 ? 0 : current + 1),
          autoplayMs,
        );
    });
  }

  updateUI();
  return { goTo, getCurrentIndex: () => current };
}

// ── Plans Slider ──
function initPlansSlider() {
  createSlider({
    wrapId: "plansSliderWrap",
    sliderId: "plansSlider",
    dotsId: "plansDots",
    prevId: "plansPrev",
    nextId: "plansNext",
  });
}

// ── Team Slider ──
function initTeamSlider() {
  createSlider({
    wrapId: "teamSliderWrap",
    sliderId: "teamSlider",
    dotsId: "teamDots",
    prevId: "teamPrev",
    nextId: "teamNext",
    autoplayMs: 5000,
  });

  // Keep booking click behaviour
  document.querySelectorAll(".barber-card").forEach((card) => {
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
    card.addEventListener("click", () => {
      const select = document.getElementById("bookingBarber");
      const opt = [...select.options].find(
        (o) => o.value === card.dataset.barber,
      );
      if (opt) {
        select.value = card.dataset.barber;
        switchBookingMode("barbershop");
      }
      document
        .getElementById("reservar")
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ── Reviews Slider ──
function initReviewsSlider() {
  createSlider({
    wrapId: "reviewsSliderWrap",
    sliderId: "reviewsTrack",
    dotsId: "reviewsDots",
    prevId: "reviewsPrev",
    nextId: "reviewsNext",
    autoplayMs: 4500,
  });
}

// ── Time slots ──
function renderTimeSlots() {
  const grid = document.getElementById("timeSlotsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  TIME_SLOTS.forEach((t) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "time-slot";
    btn.textContent = t;
    btn.dataset.time = t;
    btn.addEventListener("click", () => {
      grid
        .querySelectorAll(".time-slot")
        .forEach((s) => s.classList.remove("selected"));
      btn.classList.add("selected");
    });
    grid.appendChild(btn);
  });
}

// ── Booking mode switcher ──
let activeMode = "barbershop";

function switchBookingMode(mode) {
  if (activeMode === mode) return;
  activeMode = mode;
  const shop = document.getElementById("panelBarbershop");
  const home = document.getElementById("panelHome");
  const cShop = document.getElementById("modeBarbershop");
  const cHome = document.getElementById("modeHome");
  if (mode === "barbershop") {
    home.classList.remove("panel-visible");
    shop.classList.add("panel-visible");
    cShop.classList.add("active");
    cShop.setAttribute("aria-pressed", "true");
    cHome.classList.remove("active");
    cHome.setAttribute("aria-pressed", "false");
  } else {
    shop.classList.remove("panel-visible");
    home.classList.add("panel-visible");
    cHome.classList.add("active");
    cHome.setAttribute("aria-pressed", "true");
    cShop.classList.remove("active");
    cShop.setAttribute("aria-pressed", "false");
  }
}

// ── Validation helpers ──
const isPhone = (v) => v.replace(/\D/g, "").length >= 9;
const isDate = (v) => v && new Date(v) >= new Date(new Date().toDateString());
const showErr = (id, show) => {
  const e = document.getElementById(id);
  if (e) e.classList.toggle("visible", show);
};
const getSlot = () => {
  const s = document.querySelector(".time-slot.selected");
  return s ? s.dataset.time : "";
};

function validateShopForm() {
  const n = document.getElementById("clientName").value.trim();
  const p = document.getElementById("clientPhone").value.trim();
  const s = document.getElementById("bookingService").value;
  const d = document.getElementById("bookingDate").value;
  const t = getSlot();
  const c = document.getElementById("consentCheck").checked;
  showErr("nameError", !n);
  showErr("phoneError", !isPhone(p));
  showErr("serviceError", !s);
  showErr("dateError", !isDate(d));
  showErr("timeError", !t);
  showErr("consentError", !c);
  return n && isPhone(p) && s && isDate(d) && t && c;
}

function validateHomeForm() {
  const n = document.getElementById("homeClientName").value.trim();
  const p = document.getElementById("homeClientPhone").value.trim();
  const e = document.getElementById("homeClientEmail").value.trim();
  const l = document.getElementById("homeLocation").value.trim();
  const s = document.getElementById("homeService").value;
  const d = document.getElementById("homeDate").value;
  const t = document.getElementById("homeTime").value;
  const c = document.getElementById("homeConsentCheck").checked;

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  showErr("homeNameError", !n);
  showErr("homePhoneError", !isPhone(p));
  showErr("homeEmailError", !isEmail(e));
  showErr("homeLocationError", !l);
  showErr("homeServiceError", !s);
  showErr("homeDateError", !isDate(d));
  showErr("homeTimeError", !t);
  showErr("homeConsentError", !c);

  return n && isPhone(p) && isEmail(e) && l && s && isDate(d) && t && c;
}

// ── WhatsApp builders ──
function waShop(d) {
  const msg = [
    "Olá BallKutz! 🏆",
    "",
    "Quero agendar o meu corte na barbearia:",
    "",
    "✂️ *Serviço:* " + d.service,
    "👤 *Barbeiro:* " + (d.barber || "Qualquer disponível"),
    "📅 *Data:* " + d.date,
    "⏰ *Hora:* " + d.time,
    "",
    "👤 *Nome:* " + d.name,
    "📱 *WhatsApp:* " + d.phone,
    "",
    "Aguardo confirmação. Obrigado!",
  ].join("\n");
  return (
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg)
  );
}

function waHome(d) {
  const lines = [
    "Olá BallKutz! 🏠✂️",
    "",
    "Quero solicitar um corte ao domicílio:",
    "",
    "✂️ *Serviço:* " + d.service,
    "📅 *Data Preferida:* " + d.date,
    "⏰ *Hora Preferida:* " + d.time,
    "",
    "👤 *Nome:* " + d.name,
    "📱 *WhatsApp:* " + d.phone,
    "📍 *Morada:* " + d.location,
  ];
  if (d.notes) lines.push("📝 *Detalhes:* " + d.notes);
  lines.push("", "Aguardo confirmação e confirmação de preço. Obrigado!");
  return (
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(lines.join("\n"))
  );
}

function waQuick() {
  return (
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent("Olá BallKutz! 🏆 Quero agendar um corte. Podem ajudar?")
  );
}

// ── Email notification ──
async function notifyEmail(payload) {
  try {
    await fetch(MAKE_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.warn("make webhook falhou:", err);
  }
}

// ── Success overlay ──
const showSuccess = () =>
  document.getElementById("successOverlay").classList.add("visible");
const hideSuccess = () =>
  document.getElementById("successOverlay").classList.remove("visible");

// ── Booking form init ──
function initBookingForm() {
  const today = new Date().toISOString().split("T")[0];
  ["bookingDate", "homeDate"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("min", today);
  });

  renderTimeSlots();

  document
    .getElementById("modeBarbershop")
    .addEventListener("click", () => switchBookingMode("barbershop"));
  document
    .getElementById("modeHome")
    .addEventListener("click", () => switchBookingMode("home"));

  const waBtn = document.getElementById("waQuickBtn");
  if (waBtn)
    waBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(waQuick(), "_blank", "noopener");
    });

  document
    .getElementById("submitBooking")
    .addEventListener("click", async () => {
      if (document.getElementById("honeypot").value) return;
      if (!validateShopForm()) return;
      const data = {
        name: document.getElementById("clientName").value.trim(),
        phone: document.getElementById("clientPhone").value.trim(),
        email: document.getElementById("clientEmail").value.trim(),
        service: document.getElementById("bookingService").value,
        barber: document.getElementById("bookingBarber").value,
        date: document.getElementById("bookingDate").value,
        time: getSlot(),
      };
      const btn = document.getElementById("submitBooking");
      const span = btn.querySelector("span");
      btn.disabled = true;
      span.textContent = "...";
      await notifyEmail({
        Nome: data.name,
        WhatsApp: data.phone,
        Email: data.email || "N/A",
        Serviço: data.service,
        Barbeiro: data.barber || "Qualquer",
        Data: data.date,
        Hora: data.time,
        Tipo: "Barbearia",
      });
      window.open(waShop(data), "_blank", "noopener");
      showSuccess();
      btn.disabled = false;
      span.textContent = LOCALES[currentLang].form_submit;
    });

  document
    .getElementById("submitHomeBooking")
    .addEventListener("click", async () => {
      if (document.getElementById("honeypot").value) return;
      if (!validateHomeForm()) return;
      const data = {
        name: document.getElementById("homeClientName").value.trim(),
        phone: document.getElementById("homeClientPhone").value.trim(),
        email: document.getElementById("homeClientEmail").value.trim(), // novo
        location: document.getElementById("homeLocation").value.trim(),
        service: document.getElementById("homeService").value,
        date: document.getElementById("homeDate").value,
        time: document.getElementById("homeTime").value,
        notes: document.getElementById("homeNotes").value.trim(),
      };
      const btn = document.getElementById("submitHomeBooking");
      const span = btn.querySelector("span");
      btn.disabled = true;
      span.textContent = "...";
      await notifyEmail({
        Nome: data.name,
        WhatsApp: data.phone,
          Email: data.email || "N/A", // novo
        Serviço: data.service,
        Data: data.date,
        Hora: data.time,
        Morada: data.location,
        Notas: data.notes || "N/A",
        Tipo: "Domicílio",
      });
      window.open(waHome(data), "_blank", "noopener");
      showSuccess();
      btn.disabled = false;
      span.textContent = LOCALES[currentLang].home_submit;
    });

  document
    .getElementById("closeSuccess")
    .addEventListener("click", hideSuccess);
  document.getElementById("successOverlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) hideSuccess();
  });
}

// ── Scroll reveal ──
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        setTimeout(() => entry.target.classList.add("visible"), (i % 4) * 80);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ── YouTube Facades ──
function initYouTubeFacade() {
  document.querySelectorAll(".yt-facade").forEach((el) => {
    const loadVideo = () => {
      const videoId = el.dataset.videoId;
      if (!videoId || videoId === "VIDEO_ID") {
        window.open("https://youtube.com/@BallKutz", "_blank", "noopener");
        return;
      }
      const iframe = document.createElement("iframe");
      iframe.className = "yt-facade__iframe";
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      iframe.allow = "autoplay; encrypted-media; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.title = "BallKutz — " + (el.dataset.title || "vídeo");
      el.innerHTML = "";
      el.appendChild(iframe);
      el.style.cursor = "default";
    };
    el.addEventListener("click", loadVideo);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        loadVideo();
      }
    });
  });
}

// ── Scroll-to-top button ──
function initScrollTop() {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;
  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 600);
    },
    { passive: true },
  );
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initServiceTabs();
  initScrollAnimations();
  initBookingForm();
  initYouTubeFacade();
  initScrollTop();
  setLanguage(currentLang); // replaces the old undefined updateAllText()
  initPlansSlider();
  initTeamSlider();
  initReviewsSlider();
});

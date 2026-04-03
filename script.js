    'use strict';

    const WHATSAPP_NUMBER = '244932783626';
    const CONTACT_EMAIL   = 'josiwhatson@gmail.com';
     const MAKE_WEBHOOK   = 'https://hook.eu1.make.com/219sfporr8ngjjppens5t71lw8z7w1ul';

    const TIME_SLOTS = [
      '09:00','09:30','10:00','10:30','11:00','11:30',
      '12:00','12:30','14:00','14:30','15:00','15:30',
      '16:00','16:30','17:00','17:30','18:00','18:30',
    ];

    let currentLang = 'pt';

    const LOCALES = {
      pt: {
        nav_services:'Serviços', nav_plans:'Planos', nav_team:'Equipa',
        nav_gallery:'Galeria', nav_cta:'Reservar', nav_about:'Sobre',
        hero_eyebrow:'Luanda, Angola · Est. 2023',
        hero_line1:'VISTA A SUA', hero_line2:'NOVA PELE.',
        hero_sub:'A barbearia dos campeões em Luanda. Cortes de precisão, experiência de clube premium.',
        hero_cta:'Reservar Agora', hero_cta2:'Ver Serviços',
        stat_rating:'Avaliação', stat_clients:'Clientes', stat_services:'Serviços', stat_anos:'Anos',
        plans_eyebrow:'Season Tickets — Torna-te membro', plans_title:'PLANOS DE ASSINATURA',
        plan_pro_badge:'Plano PRO', plan_pro_limit:'Limitado 2× por mês',
        plan_promax_badge:'Plano PRO MAX', plan_promax_limit:'Ilimitados — Quantas vezes quiser',
        plan_cta:'Aderir ao Plano', plan_promax_cta:'Aderir ao PRO MAX',
        service_kutz_crianca:'Kutz Criança', service_kutz_barba:'Kutz Barba',
        service_kutz_cabelo:'Kutz Cabelo', service_kutz_cabelo_barba:'Kutz Cabelo + Barba',
        service_degrade:'Degradê Completo', service_design_premium:'Design Premium',
        service_aparar_barba:'Aparar Barba', service_barba_design:'Barba + Design',
        service_barba_ritual:'Barba Ritual Navalha', service_limpeza:'Limpeza de Pele',
        service_hidratacao:'Hidratação Capilar', service_pigmentacao:'Pigmentação Capilar',
        service_ritual_completo:'Ritual Completo',
        services_eyebrow:'The Playbook — Preços', services_title:'SERVIÇOS',
        tab_cortes:'Cortes', tab_barba:'Barba', tab_estetica:'Estética', tab_combo:'Combo',
        team_eyebrow:'Starting XI — Os nossos', team_title:'A EQUIPA',
        barber_head:'Head Barber · Capitão', barber_senior:'Senior Barber',
        barber_barber:'Barber · Skin Specialist', stat_years:'Anos Exp.', stat_specialty:'Especialidade',
        barber_book:'Agendar →',
        gallery_eyebrow:'Match Highlights — O nosso trabalho', gallery_title:'GALERIA',
        reviews_eyebrow:"Fans' Voice — O que dizem", reviews_title:'AVALIAÇÕES',
        review1_text:'"Melhor barbearia de Luanda, sem dúvida. O ambiente é incrível, parece que estamos num clube de campeões. O Mário fez um trabalho espetacular no meu fade."',
        review2_text:'"Aderi ao plano PRO MAX e vale cada kwanza. Corte perfeito sempre que apareço, sem filas de espera. O Carlos é uma máquina a fazer designs."',
        review3_text:'"Levei o meu filho e ficámos os dois super satisfeitos. Espaço limpo, modernos, música boa e ainda tem PlayStation! Voltámos na semana seguinte."',
        review4_text:'"Fiz o 24K Gold Limpeza de Pele e a pele ficou renovada. O André é um profissional de excelência. Recomendo a toda a gente que se preocupa com a sua imagem."',
        booking_eyebrow:'Final Whistle — Marca o teu lugar', booking_title:'RESERVAR',
        booking_desc:'Preenche o formulário e recebes confirmação no teu WhatsApp em breve.',
        contact_address_label:'Morada', contact_hours_label:'Horário',
        contact_hours:'Seg–Sáb: 09h–19h · Dom: 10h–16h',
        quick_call:'Ligar Agora', quick_wa:'WhatsApp Rápido', or_form:'ou preenche o formulário',
        mode_label:'Como preferes o teu corte?',
        mode_shop_title:'Na Barbearia', mode_shop_sub:'Vens até nós. Experiência completa de clube.',
        mode_home_title:'Ao Domicílio', mode_home_sub:'Vamos até ti. Corte no conforto da tua casa.',
        form_name:'Nome', form_name_error:'Por favor insere o teu nome.',
        form_phone:'WhatsApp', form_phone_error:'Número de WhatsApp inválido.',
        form_email:'E-mail (opcional)',
        form_service:'Serviço', form_service_placeholder:'Seleciona um serviço',
        form_service_error:'Seleciona um serviço.',
        form_barber:'Barbeiro', form_barber_placeholder:'Qualquer barbeiro',
        form_date:'Data', form_date_error:'Seleciona uma data válida.',
        form_time:'Hora', form_time_error:'Seleciona um horário.',
        home_location_label:'Morada / Localização', home_location_error:'Por favor indica a tua morada.',
        home_notes_label:'Detalhes Adicionais',
        form_consent:'Concordo com o tratamento dos meus dados para fins de marcação e comunicação de promoções da BallKutz.',
        form_consent_error:'Precisas de aceitar para continuar.',
        form_submit:'Confirmar Marcação', home_submit:'Solicitar Corte ao Domicílio',
        success_title:'Pedido na Bancada!',
        success_msg:'O teu WhatsApp foi aberto com os detalhes da marcação.\nAguarda a confirmação da equipa BallKutz em breve. 🏆',
        success_close:'Fechar',
        footer_tagline:'A barbearia dos campeões em Luanda. Luxo, desporto e excelência num só espaço.',
        footer_nav:'Navegação', footer_services:'Serviços', footer_contact:'Contacto',
        footer_rights:'Todos os direitos reservados.', footer_made:'Feito com ✂️ para os campeões',
        about_eyebrow:'A nossa história', about_title:'MAIS DO QUE UM CORTE.',
        about_p1:'A BallKutz nasceu da fusão entre dois mundos: a precisão do barbeiro e a paixão pelo desporto. Um espaço onde cada visita é uma experiência única — música, jogo e o melhor corte da tua vida.',
        about_p2:'Aqui não és apenas mais um cliente. És parte do clube. Com planos de assinatura exclusivos, a tua imagem está sempre no topo da tabela.',
        about_v1_title:'Excelência', about_v1_text:'Cada corte é executado com precisão absoluta e atenção ao detalhe.',
        about_v2_title:'Comunidade', about_v2_text:'Um espaço de convívio onde o desporto une os nossos clientes.',
        about_v3_title:'Confiança', about_v3_text:'Profissionalismo e compromisso em cada serviço prestado.',
        about_v4_title:'Luxo', about_v4_text:'Decoração premium que faz sentires-te num clube de campeões.',
        gallery_yt_label:'Ver no YouTube',
      },
      en: {
        nav_services:'Services', nav_plans:'Plans', nav_team:'Team',
        nav_gallery:'Gallery', nav_cta:'Book Now', nav_about:'About',
        hero_eyebrow:'Luanda, Angola · Est. 2023',
        hero_line1:'WEAR YOUR', hero_line2:'NEW SKIN.',
        hero_sub:"The champions' barbershop in Luanda. Precision cuts, premium club experience.",
        hero_cta:'Book Now', hero_cta2:'View Services',
        stat_rating:'Rating', stat_clients:'Clients', stat_services:'Services', stat_anos:'Years',
        plans_eyebrow:'Season Tickets — Become a member', plans_title:'SUBSCRIPTION PLANS',
        plan_pro_badge:'PRO Plan', plan_pro_limit:'Limited 2× per month',
        plan_promax_badge:'PRO MAX Plan', plan_promax_limit:'Unlimited — As many times as you want',
        plan_cta:'Join the Plan', plan_promax_cta:'Join PRO MAX',
        service_kutz_crianca:"Kid's Cut", service_kutz_barba:'Beard Cut',
        service_kutz_cabelo:'Hair Cut', service_kutz_cabelo_barba:'Hair + Beard',
        service_degrade:'Full Fade', service_design_premium:'Premium Design',
        service_aparar_barba:'Beard Trim', service_barba_design:'Beard + Design',
        service_barba_ritual:'Straight Razor Ritual', service_limpeza:'Skin Cleanse',
        service_hidratacao:'Hair Hydration', service_pigmentacao:'Hair Pigmentation',
        service_ritual_completo:'Full Ritual',
        services_eyebrow:'The Playbook — Pricing', services_title:'SERVICES',
        tab_cortes:'Cuts', tab_barba:'Beard', tab_estetica:'Aesthetics', tab_combo:'Combo',
        team_eyebrow:'Starting XI — Our team', team_title:'THE TEAM',
        barber_head:'Head Barber · Captain', barber_senior:'Senior Barber',
        barber_barber:'Barber · Skin Specialist', stat_years:'Yrs Exp.', stat_specialty:'Specialty',
        barber_book:'Book →',
        gallery_eyebrow:'Match Highlights — Our work', gallery_title:'GALLERY',
        reviews_eyebrow:"Fans' Voice — What they say", reviews_title:'REVIEWS',
        review1_text:'"Best barbershop in Luanda, no doubt. The vibe is incredible, feels like a champions\' club. Mário did a spectacular job on my fade."',
        review2_text:'"Joined the PRO MAX plan and it\'s worth every kwanza. Perfect cut every time I show up, no queues. Carlos is a machine at designs."',
        review3_text:'"Took my son and we were both super happy. Clean, modern space, great music and they even have PlayStation! We came back the following week."',
        review4_text:'"Did the 24K Gold Skin Cleanse and my skin was completely renewed. André is a true professional. I recommend it to anyone who cares about their image."',
        booking_eyebrow:'Final Whistle — Book your spot', booking_title:'BOOK NOW',
        booking_desc:'Fill in the form and receive confirmation on your WhatsApp shortly.',
        contact_address_label:'Address', contact_hours_label:'Hours',
        contact_hours:'Mon–Sat: 9am–7pm · Sun: 10am–4pm',
        quick_call:'Call Now', quick_wa:'Quick WhatsApp', or_form:'or fill in the form',
        mode_label:'How do you prefer your cut?',
        mode_shop_title:'At the Barbershop', mode_shop_sub:'Come to us. Full club experience.',
        mode_home_title:'Home Visit', mode_home_sub:'We come to you. Cut in the comfort of your home.',
        form_name:'Name', form_name_error:'Please enter your name.',
        form_phone:'WhatsApp', form_phone_error:'Invalid WhatsApp number.',
        form_email:'E-mail (optional)',
        form_service:'Service', form_service_placeholder:'Select a service',
        form_service_error:'Please select a service.',
        form_barber:'Barber', form_barber_placeholder:'Any barber',
        form_date:'Date', form_date_error:'Please select a valid date.',
        form_time:'Time', form_time_error:'Please select a time slot.',
        home_location_label:'Address / Location', home_location_error:'Please provide your address.',
        home_notes_label:'Additional Details',
        form_consent:'I agree to the processing of my data for booking and BallKutz promotional communications.',
        form_consent_error:'You need to accept to continue.',
        form_submit:'Confirm Booking', home_submit:'Request Home Visit',
        success_title:'On the Bench!',
        success_msg:'Your WhatsApp was opened with the booking details.\nAwait confirmation from the BallKutz team shortly. 🏆',
        success_close:'Close',
        footer_tagline:"The champions' barbershop in Luanda. Luxury, sport and excellence in one place.",
        footer_nav:'Navigation', footer_services:'Services', footer_contact:'Contact',
        footer_rights:'All rights reserved.', footer_made:'Made with ✂️ for champions',
        about_eyebrow:'Our story', about_title:'MORE THAN A CUT.',
        about_p1:"BallKutz was born from the fusion of two worlds: the precision of the barber and the passion for sport. A space where every visit is a unique experience — music, game and the best cut of your life.",
        about_p2:"Here you're not just another client. You're part of the club. With exclusive subscription plans, your image is always at the top of the table.",
        about_v1_title:'Excellence', about_v1_text:'Every cut is executed with absolute precision and attention to detail.',
        about_v2_title:'Community', about_v2_text:'A social space where sport brings our clients together.',
        about_v3_title:'Trust', about_v3_text:'Professionalism and commitment in every service delivered.',
        about_v4_title:'Luxury', about_v4_text:'Premium décor that makes you feel like you\'re in a champions\' club.',
        gallery_yt_label:'Watch on YouTube',
      },
    };

    function updateAllText() {
      const dict = LOCALES[currentLang];
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
      });
    }

    function toggleLanguage() {
      currentLang = currentLang === 'pt' ? 'en' : 'pt';
      const label = currentLang === 'pt' ? 'EN' : 'PT';
      const toggle = document.getElementById('langToggle');
      if (toggle) toggle.textContent = label;
      document.documentElement.lang = currentLang;
      updateAllText();
    }

    // ── Navigation ──
    function initNavigation() {
      const header      = document.getElementById('mainNav');
      const hamburger   = document.getElementById('hamburger');
      const mobileMenu  = document.getElementById('mobileMenu');
      const mobileClose = document.getElementById('mobileClose');

      const openMenu = () => {
        mobileMenu.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      };
      const closeMenu = () => {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      };

      hamburger.addEventListener('click', openMenu);
      mobileClose.addEventListener('click', closeMenu);

      // Close on any link click inside mobile menu (except lang toggle)
      mobileMenu.querySelectorAll('a').forEach(el => el.addEventListener('click', closeMenu));

      window.addEventListener('scroll', () => {
        header.classList.toggle('site-header--scrolled', window.scrollY > 60);
      }, { passive: true });

      document.getElementById('langToggle').addEventListener('click', toggleLanguage);

      const mobileLang = document.getElementById('mobileLangToggle');
      if (mobileLang) {
        mobileLang.addEventListener('click', () => {
          toggleLanguage();
          mobileLang.textContent = currentLang === 'pt' ? 'Switch to EN' : 'Mudar para PT';
        });
      }

      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
      });
    }

    // ── Services tabs ──
    function initServiceTabs() {
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
          btn.classList.add('active');
          document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
        });
      });

      document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('click', () => {
          const select = document.getElementById('bookingService');
          const opt = [...select.options].find(o => o.value === item.dataset.service);
          if (opt) {
            select.value = item.dataset.service;
            switchBookingMode('barbershop');
          }
          document.getElementById('reservar').scrollIntoView({ behavior: 'smooth' });
        });
      });
    }

    // ── Team cards ──
    function initTeamCards() {
      document.querySelectorAll('.barber-card').forEach(card => {
        card.addEventListener('click', () => {
          const select = document.getElementById('bookingBarber');
          const opt = [...select.options].find(o => o.value === card.dataset.barber);
          if (opt) {
            select.value = card.dataset.barber;
            switchBookingMode('barbershop');
          }
          document.getElementById('reservar').scrollIntoView({ behavior: 'smooth' });
        });
      });
    }

    // ── Reviews slider ──
    function initReviewsSlider() {
      const track = document.getElementById('reviewsTrack');
      const dots  = document.querySelectorAll('.reviews__dot');
      const cards = track ? [...track.querySelectorAll('.review-card')] : [];
      if (!cards.length) return;

      let idx = 0;
      const perView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      const maxIdx  = Math.max(0, cards.length - perView);

      const goTo = (i) => {
        idx = Math.max(0, Math.min(i, maxIdx));
        track.style.transform = 'translateX(-' + (idx * (cards[0].offsetWidth + 24)) + 'px)';
        dots.forEach((d, di) => d.classList.toggle('active', di === idx));
      };

      dots.forEach(d => d.addEventListener('click', () => { clearInterval(timer); goTo(+d.dataset.idx); }));
      let timer = setInterval(() => goTo(idx >= maxIdx ? 0 : idx + 1), 4500);
    }

    // ── Time slots ──
    function renderTimeSlots() {
      const grid = document.getElementById('timeSlotsGrid');
      if (!grid) return;
      grid.innerHTML = '';
      TIME_SLOTS.forEach(t => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'time-slot';
        btn.textContent = t;
        btn.dataset.time = t;
        btn.addEventListener('click', () => {
          grid.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
          btn.classList.add('selected');
        });
        grid.appendChild(btn);
      });
    }

    // ── Booking mode switcher ──
    let activeMode = 'barbershop';

    function switchBookingMode(mode) {
      if (activeMode === mode) return;
      activeMode = mode;
      const shop = document.getElementById('panelBarbershop');
      const home = document.getElementById('panelHome');
      const cShop = document.getElementById('modeBarbershop');
      const cHome = document.getElementById('modeHome');
      if (mode === 'barbershop') {
        home.classList.remove('panel-visible');
        shop.classList.add('panel-visible');
        cShop.classList.add('active');    cShop.setAttribute('aria-pressed','true');
        cHome.classList.remove('active'); cHome.setAttribute('aria-pressed','false');
      } else {
        shop.classList.remove('panel-visible');
        home.classList.add('panel-visible');
        cHome.classList.add('active');    cHome.setAttribute('aria-pressed','true');
        cShop.classList.remove('active'); cShop.setAttribute('aria-pressed','false');
      }
    }

    // ── Validation helpers ──
    const isPhone   = v => v.replace(/\D/g,'').length >= 9;
    const isDate    = v => v && new Date(v) >= new Date(new Date().toDateString());
    const showErr   = (id, show) => { const e = document.getElementById(id); if(e) e.classList.toggle('visible', show); };
    const getSlot   = () => { const s = document.querySelector('.time-slot.selected'); return s ? s.dataset.time : ''; };

    function validateShopForm() {
      const n = document.getElementById('clientName').value.trim();
      const p = document.getElementById('clientPhone').value.trim();
      const s = document.getElementById('bookingService').value;
      const d = document.getElementById('bookingDate').value;
      const t = getSlot();
      const c = document.getElementById('consentCheck').checked;
      showErr('nameError',!n); showErr('phoneError',!isPhone(p)); showErr('serviceError',!s);
      showErr('dateError',!isDate(d)); showErr('timeError',!t); showErr('consentError',!c);
      return n && isPhone(p) && s && isDate(d) && t && c;
    }

    function validateHomeForm() {
      const n = document.getElementById('homeClientName').value.trim();
      const p = document.getElementById('homeClientPhone').value.trim();
      const l = document.getElementById('homeLocation').value.trim();
      const s = document.getElementById('homeService').value;
      const d = document.getElementById('homeDate').value;
      const t = document.getElementById('homeTime').value;
      const c = document.getElementById('homeConsentCheck').checked;
      showErr('homeNameError',!n); showErr('homePhoneError',!isPhone(p)); showErr('homeLocationError',!l);
      showErr('homeServiceError',!s); showErr('homeDateError',!isDate(d)); showErr('homeTimeError',!t);
      showErr('homeConsentError',!c);
      return n && isPhone(p) && l && s && isDate(d) && t && c;
    }

    // ── WhatsApp URL builders ──
    function waShop(d) {
      const msg = [
        'Olá BallKutz! 🏆','',
        'Quero agendar o meu corte na barbearia:','',
        '✂️ *Serviço:* '+d.service,
        '👤 *Barbeiro:* '+(d.barber||'Qualquer disponível'),
        '📅 *Data:* '+d.date, '⏰ *Hora:* '+d.time,'',
        '👤 *Nome:* '+d.name, '📱 *WhatsApp:* '+d.phone,'',
        'Aguardo confirmação. Obrigado!'
      ].join('\n');
      return 'https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent(msg);
    }

    function waHome(d) {
      const lines = [
        'Olá BallKutz! 🏠✂️','',
        'Quero solicitar um corte ao domicílio:','',
        '✂️ *Serviço:* '+d.service,
        '📅 *Data Preferida:* '+d.date, '⏰ *Hora Preferida:* '+d.time,'',
        '👤 *Nome:* '+d.name, '📱 *WhatsApp:* '+d.phone,
        '📍 *Morada:* '+d.location,
      ];
      if(d.notes) lines.push('📝 *Detalhes:* '+d.notes);
      lines.push('','Aguardo confirmação e confirmação de preço. Obrigado!');
      return 'https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent(lines.join('\n'));
    }

    function waQuick() {
      return 'https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent('Olá BallKutz! 🏆 Quero agendar um corte. Podem ajudar?');
    }

    // ── Email notification ──
    async function notifyEmail(payload) {
      try {
        await fetch(MAKE_WEBHOOK, {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(payload.Nome, ...payload),
        });
      } catch(err) { console.warn('make webhook falhou:',err); }
    }

    // ── Success overlay ──
    const showSuccess = () => document.getElementById('successOverlay').classList.add('visible');
    const hideSuccess = () => document.getElementById('successOverlay').classList.remove('visible');

    // ── Booking form init ──
    function initBookingForm() {
      const today = new Date().toISOString().split('T')[0];
      ['bookingDate','homeDate'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.setAttribute('min', today);
      });

      renderTimeSlots();

      // Mode cards
      document.getElementById('modeBarbershop').addEventListener('click', () => switchBookingMode('barbershop'));
      document.getElementById('modeHome').addEventListener('click', () => switchBookingMode('home'));

      // Quick WA button
      const waBtn = document.getElementById('waQuickBtn');
      if(waBtn) waBtn.addEventListener('click', e => { e.preventDefault(); window.open(waQuick(),'_blank','noopener'); });

      // Shop submit
      document.getElementById('submitBooking').addEventListener('click', async () => {
        if(document.getElementById('honeypot').value) return;
        if(!validateShopForm()) return;
        const data = {
          name: document.getElementById('clientName').value.trim(),
          phone: document.getElementById('clientPhone').value.trim(),
          email: document.getElementById('clientEmail').value.trim(),
          service: document.getElementById('bookingService').value,
          barber: document.getElementById('bookingBarber').value,
          date: document.getElementById('bookingDate').value,
          time: getSlot(),
        };
        const btn = document.getElementById('submitBooking');
        const span = btn.querySelector('span');
        btn.disabled = true; span.textContent = '...';
        await notifyEmail({Nome:data.name, WhatsApp:data.phone, Email:data.email||'N/A',
          Serviço:data.service, Barbeiro:data.barber||'Qualquer', Data:data.date, Hora:data.time, Tipo:'Barbearia'});
        window.open(waShop(data),'_blank','noopener');
        showSuccess();
        btn.disabled = false; span.textContent = LOCALES[currentLang].form_submit;
      });

      // Home submit
      document.getElementById('submitHomeBooking').addEventListener('click', async () => {
        if(document.getElementById('honeypot').value) return;
        if(!validateHomeForm()) return;
        const data = {
          name: document.getElementById('homeClientName').value.trim(),
          phone: document.getElementById('homeClientPhone').value.trim(),
          location: document.getElementById('homeLocation').value.trim(),
          service: document.getElementById('homeService').value,
          date: document.getElementById('homeDate').value,
          time: document.getElementById('homeTime').value,
          notes: document.getElementById('homeNotes').value.trim(),
        };
        const btn = document.getElementById('submitHomeBooking');
        const span = btn.querySelector('span');
        btn.disabled = true; span.textContent = '...';
        await notifyEmail({Nome:data.name, WhatsApp:data.phone, Serviço:data.service,
          Data:data.date, Hora:data.time, Morada:data.location, Notas:data.notes||'N/A', Tipo:'Domicílio'});
        window.open(waHome(data),'_blank','noopener');
        showSuccess();
        btn.disabled = false; span.textContent = LOCALES[currentLang].home_submit;
      });

      document.getElementById('closeSuccess').addEventListener('click', hideSuccess);
      document.getElementById('successOverlay').addEventListener('click', e => {
        if(e.target === e.currentTarget) hideSuccess();
      });
    }

    // ── Scroll reveal ──
    function initScrollAnimations() {
      const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
          if(!entry.isIntersecting) return;
          setTimeout(() => entry.target.classList.add('visible'), (i % 4) * 80);
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    // ── YouTube Facades (handles multiple .yt-facade elements) ──
    function initYouTubeFacade() {
      const facades = document.querySelectorAll('.yt-facade');
      if (!facades.length) return;

      facades.forEach(facade => {
        const makeFacadeLoader = (el) => {
          const loadVideo = () => {
            const videoId = el.dataset.videoId;
            if (!videoId || videoId === 'VIDEO_ID') {
              window.open('https://youtube.com/@BallKutz', '_blank', 'noopener');
              return;
            }
            const iframe = document.createElement('iframe');
            iframe.className = 'yt-facade__iframe';
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
            iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.title = 'BallKutz — ' + (el.dataset.title || 'vídeo');
            el.innerHTML = '';
            el.appendChild(iframe);
            el.style.cursor = 'default';
            el.removeEventListener('click', loadVideo);
            el.removeEventListener('keydown', handleKey);
          };
          const handleKey = (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadVideo(); }
          };
          el.addEventListener('click', loadVideo);
          el.addEventListener('keydown', handleKey);
        };
        makeFacadeLoader(facade);
      });
    }

    // ── Scroll-to-top button ──
    function initScrollTop() {
      const btn = document.getElementById('scrollTopBtn');
      if (!btn) return;

      window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 600);
      }, { passive: true });

      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // ── Init ──
    document.addEventListener('DOMContentLoaded', () => {
      initNavigation();
      initServiceTabs();
      initTeamCards();
      initReviewsSlider();
      initBookingForm();
      initScrollAnimations();
      initYouTubeFacade();
      initScrollTop();
      updateAllText();
    });


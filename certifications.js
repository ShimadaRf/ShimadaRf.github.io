const socialLinks = [
    {
        url: 'https://github.com/ShimadaRf',
        label: 'GitHub',
        icon: 'fa-brands fa-github',
        className: 'border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-300'
    },
    {
        url: 'https://www.linkedin.com/in/rivelino-sampaio-a04365287',
        label: 'LinkedIn',
        icon: 'fa-brands fa-linkedin',
        className: 'border-cyan-500/30 bg-cyan-950/30 hover:bg-cyan-900/40 text-cyan-300'
    },
    {
        url: 'https://profile.hackthebox.com/profile/019e142b-c4e4-7394-838a-20245f5cd9b4',
        label: 'Hack The Box',
        icon: 'fa-solid fa-terminal',
        className: 'border-emerald-500/30 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300'
    }
];

const defaultCertification = {
    category: 'security-operations',
    issuer: '',
    issuerLogo: 'CERT',
    logoColor: 'bg-slate-900 border-slate-600 text-slate-200',
    badgeImage: null,
    tag: 'Certificação',
    tagColor: 'bg-slate-800 text-slate-300 border-slate-700',
    title: '',
    subtitle: '',
    description: '',
    dateLabel: 'Emitido:',
    dateValue: '',
    rightLabel: 'Verificado',
    rightIcon: 'fa-solid fa-circle-check',
    rightColor: 'text-emerald-400',
    rightIsCode: false,
    pdfUrl: null
};

function createCertification(overrides = {}) {
    return { ...defaultCertification, ...overrides };
}

const certifications = [
    createCertification({
        category: 'security-operations',
        issuer: 'Udemy',
        issuerLogo: 'Udemy',
        logoColor: 'bg-blue-950/80 border-blue-500/40 text-blue-400',
        tag: 'Defensive Infrastructure',
        tagColor: 'bg-blue-950 text-blue-300 border-blue-800/40',
        title: 'Privacy & Data Protection Foundation',
        description: 'Treinamento prático de configuração, monitoramento e manutenção de firewall corporativo, incluindo regras de filtragem, VPNs e prevenção de intrusões.',
        dateLabel: 'Emitido:',
        dateValue: 'Nov 2025',
        rightLabel: 'Concluído',
        pdfUrl: 'certs/endianfirewall.pdf'
    }),
    createCertification({
        category: 'offensive-security',
        issuer: 'Desec Security',
        issuerLogo: 'DESEC',
        logoColor: 'bg-black border-amber-500/30 text-amber-500',
        tag: 'Offensive',
        tagColor: 'bg-red-950 text-red-400 border-red-800/40',
        title: 'Pentest Profissional',
        description: 'Treinamento prático e avançado focado em técnicas de exploração, testes de invasão e pós-exploração em redes corporativas.',
        dateLabel: 'Emitido:',
        dateValue: 'Jun 2026',
        rightLabel: 'YPES-RMXKL-VSNP',
        rightIsCode: true,
        pdfUrl: 'certs/desecnovopentest.pdf'
    }),
        createCertification({
        category: 'offensive-security',
        issuer: 'Desec Security',
        issuerLogo: 'DESEC',
        logoColor: 'bg-black border-amber-500/30 text-amber-500',
        tag: 'Offensive',
        tagColor: 'bg-red-950 text-red-400 border-red-800/40',
        title: 'Primeiro Pentest',
        description: 'Demonstração em ambiente controlado de técnicas de exploração, testes de invasão e pós-exploração em redes corporativas.',
        dateLabel: 'Emitido:',
        dateValue: 'Jul 2026',
        rightLabel: 'VWKJ-HBFWW-EQAP',
        rightIsCode: true,
        pdfUrl: 'certs/desecprimeiropentest.pdf'
    }),
    createCertification({
        category: 'badges',
        issuer: 'Hack The Box / LetsDefend',
        badgeImage: 'assets/badges/letsdefendlogo.png',
        tag: 'Badge / Medalha',
        tagColor: 'bg-purple-950 text-purple-300 border-purple-800/40',
        title: 'Malware Analysis Fundamentals',
        subtitle: 'Badge: Malware Analyzer',
        description: 'Análise estática e dinâmica de código malicioso, engenharia reversa de artefatos e identificação de indicadores de comprometimento (IoCs).',
        dateLabel: 'Emitido:',
        dateValue: 'Jul 2026',
        rightLabel: 'Verificado',
        rightIcon: 'fa-solid fa-circle-check',
        rightColor: 'text-emerald-400'
    }),
    createCertification({
        category: 'security-operations',
        issuer: 'CompTIA',
        issuerLogo: 'CompTIA',
        badgeImage: 'assets/badges/security+badge.png',
        logoColor: 'bg-red-950/80 border-red-600/40 text-red-500',
        tag: 'Security Operations',
        tagColor: 'bg-slate-800 text-slate-300 border-slate-700',
        title: 'Security+',
        description: 'Certificação global de referência cobrindo segurança de redes, gerenciamento de riscos, resposta a incidentes e arquitetura defensiva.',
        dateLabel: '',
        dateValue: 'Credencial Internacional',
        rightLabel: 'Ativa',
        rightIcon: 'fa-solid fa-award',
        rightColor: 'text-cyan-400',
        pdfUrl: 'certs/security+.pdf'
    }),
    createCertification({
        category: 'security-operations',
        issuer: 'Google / Coursera',
        issuerLogo: 'GOOG',
        badgeImage: 'assets/badges/googlecybersecuritybadge.png',
        logoColor: 'bg-blue-950/80 border-blue-500/40 text-blue-400',
        tag: 'Security Operations',
        tagColor: 'bg-slate-800 text-slate-300 border-slate-700',
        title: 'Google Cybersecurity Professional',
        description: 'Trilha profissional cobrindo fundamentos de segurança, SIEM, análise de logs, Python para automação e resposta a incidentes.',
        dateLabel: '',
        dateValue: 'Credencial Google',
        rightLabel: 'Concluído',
        rightIcon: 'fa-solid fa-circle-check',
        rightColor: 'text-emerald-400',
        pdfUrl: 'certs/GoogleCybersecurity.pdf'
    }),
    createCertification({
        category: 'grc-management',
        issuer: 'EXIN',
        issuerLogo: 'EXIN',
        logoColor: 'bg-indigo-950/80 border-indigo-500/40 text-indigo-400',
        tag: 'GRC / Management',
        tagColor: 'bg-indigo-950 text-indigo-300 border-indigo-800/40',
        title: 'Information Security Officer',
        description: 'Gestão executiva da segurança da informação, políticas corporativas, continuidade de negócios e alinhamento estratégico com ISO/IEC 27001.',
        dateLabel: '',
        dateValue: 'Nível: ISO',
        rightLabel: 'Credencial EXIN',
        pdfUrl: 'certs/ISO.pdf'
    }),
    createCertification({
        category: 'grc-management',
        issuer: 'EXIN',
        issuerLogo: 'EXIN',
        logoColor: 'bg-indigo-950/80 border-indigo-500/40 text-indigo-400',
        tag: 'GRC / Management',
        tagColor: 'bg-indigo-950 text-indigo-300 border-indigo-800/40',
        title: 'Information Security Management Professional',
        description: 'Gestão avançada de controles de segurança, avaliação de riscos, auditoria interna e governança da informação (ISMP).',
        dateLabel: '',
        dateValue: 'Nível: Professional',
        rightLabel: 'ISMP Certified',
        pdfUrl: 'certs/ISMP.pdf'
    }),
    createCertification({
        category: 'grc-management',
        issuer: 'EXIN',
        issuerLogo: 'EXIN',
        logoColor: 'bg-indigo-950/80 border-indigo-500/40 text-indigo-400',
        tag: 'Privacidade & LGPD',
        tagColor: 'bg-indigo-950 text-indigo-300 border-indigo-800/40',
        title: 'Privacy & Data Protection Foundation',
        description: 'Fundamentos de proteção de dados pessoais, privacidade por design (PbD) e regulamentações internacionais (GDPR / LGPD).',
        dateLabel: '',
        dateValue: 'Nível: Foundation',
        rightLabel: 'PDPF Certified',
        pdfUrl: 'certs/PDPF.pdf'
    }),
    createCertification({
        category: 'grc-management',
        issuer: 'EXIN',
        issuerLogo: 'EXIN',
        logoColor: 'bg-indigo-950/80 border-indigo-500/40 text-indigo-400',
        tag: 'GRC / Management',
        tagColor: 'bg-indigo-950 text-indigo-300 border-indigo-800/40',
        title: 'Information Security Foundation',
        description: 'Conceitos essenciais de confidencialidade, integridade, disponibilidade e gestão básica de ativos e ameaças (ISFS).',
        dateLabel: '',
        dateValue: 'Nível: Foundation',
        rightLabel: 'ISFS Certified',
        pdfUrl: 'certs/ISFS.pdf'
    })
];

function renderSocialLinks() {
    const container = document.getElementById('social-links');
    if (!container) return;

    container.innerHTML = socialLinks.map((link) => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer"
           class="px-3.5 py-1.5 rounded-lg border text-xs transition flex items-center gap-2 ${link.className}">
            <i class="${link.icon}"></i> ${link.label}
        </a>
    `).join('');
}

function renderCert(cert) {
    const clickable = !!cert.pdfUrl;
    const logoBlock = cert.badgeImage
        ? `<div class="badge-img-wrap badge-glow"><img src="${cert.badgeImage}" alt="${cert.title}"></div>`
        : `<div class="w-12 h-12 rounded-lg ${cert.logoColor} border flex items-center justify-center font-bold text-xs tracking-wider flex-shrink-0">${cert.issuerLogo}</div>`;

    const rightIconHtml = cert.rightIcon ? `<i class="${cert.rightIcon} text-[10px]"></i> ` : '';
    const rightColor = cert.rightColor || 'text-slate-300';
    const rightContent = cert.rightIsCode
        ? `<span class="font-mono text-[11px] text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/30">${cert.rightLabel}</span>`
        : `<span class="inline-flex items-center gap-1 ${rightColor} text-[11px] font-mono">${rightIconHtml}${cert.rightLabel}</span>`;

    const pdfFooter = clickable
        ? `<div class="mt-2 pt-2 border-t border-dashed border-slate-800 flex items-center justify-center gap-1.5 text-[11px] text-cyan-400/90 group-hover:text-cyan-300">
                <i class="fa-solid fa-file-pdf"></i> Ver certificado (PDF)
           </div>`
        : '';

    return `
        <div class="cert-card group glow-accent bg-cyber-card border border-cyber-border rounded-xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${clickable ? 'has-pdf' : ''}"
             data-category="${cert.category}"
             ${clickable ? `data-pdf="${cert.pdfUrl}" role="button" tabindex="0"` : ''}>
            <div>
                <div class="flex justify-between items-start mb-4">
                    <div class="flex items-center gap-3">
                        ${logoBlock}
                        <div>
                            <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${cert.tagColor} border">${cert.tag}</span>
                            <p class="text-xs text-slate-400 mt-1">${cert.issuer}</p>
                        </div>
                    </div>
                </div>
                <h2 class="text-lg font-bold text-white mb-1">${cert.title}</h2>
                ${cert.subtitle ? `<p class="text-xs text-purple-300 font-semibold mb-2">${cert.subtitle}</p>` : ''}
                <p class="text-xs text-slate-400 mb-4">${cert.description}</p>
            </div>
            <div class="pt-4 border-t border-slate-800/80">
                <div class="flex justify-between items-center text-xs text-slate-400">
                    <span>${cert.dateLabel} <strong class="text-slate-200">${cert.dateValue}</strong></span>
                    ${rightContent}
                </div>
                ${pdfFooter}
            </div>
        </div>`;
}

function renderAllCerts() {
    const grid = document.getElementById('cert-grid');
    if (!grid) return;

    const visibleCertifications = certifications;
    grid.innerHTML = visibleCertifications.map(renderCert).join('');
    document.getElementById('count-all').textContent = visibleCertifications.filter((cert) => cert.category !== 'badges').length;

    grid.querySelectorAll('.cert-card.has-pdf').forEach((card) => {
        const openPdf = () => window.open(card.dataset.pdf, '_blank', 'noopener');
        card.addEventListener('click', openPdf);
        card.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') openPdf();
        });
    });
}

function filterCategory(cat) {
    const cards = document.querySelectorAll('.cert-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach((btn) => {
        if (btn.dataset.cat === cat) {
            btn.classList.add('active', 'border-cyan-500/50', 'bg-cyan-500/10', 'text-cyan-400');
            btn.classList.remove('border-slate-800', 'bg-slate-900/80', 'text-slate-400');
        } else {
            btn.classList.remove('active', 'border-cyan-500/50', 'bg-cyan-500/10', 'text-cyan-400');
            btn.classList.add('border-slate-800', 'bg-slate-900/80', 'text-slate-400');
        }
    });

    cards.forEach((card) => {
        const shouldShow = cat === 'all'
            ? card.dataset.category !== 'badges'
            : card.dataset.category === cat;

        card.style.display = shouldShow ? 'flex' : 'none';
    });
}

function initPortfolio() {
    renderSocialLinks();
    renderAllCerts();
    filterCategory('all');
}

window.filterCategory = filterCategory;
document.addEventListener('DOMContentLoaded', initPortfolio);

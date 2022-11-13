const Data = {
    menu: {

        fr: {
            home:{
                title : 'Acceuil',
                link : '/'
            },
            contact:{
                title : 'Nous contacter',
                link : '/contact-us/'
            } ,
            blog:{
                title : 'Blog',
                link : 'https://blog.onpr.com'
            }  
        },
        en: {
            home:{
                title : 'Home',
                link : '/'
            },
            contact:{
                title : 'Contact us',
                link : '/contact-us/'
            } ,
            blog:{
                title : 'Blog',
                link : 'https://blog.onpr.com'
            }  
        },
    },
    languages: {
        fr: {
            code: 'fr',
            flag: './assets/imgs/francaisIncon.png',
            fr: 'Français',
            en: 'Anglais'
        },
        en: {
            code: 'en',
            flag: './assets/imgs/usaIcon.png',
            fr: 'French',
            en: 'English'
        }
    },
    extendedSubmenu: {
        fr: {
            about: {
                title: "A propos de l'ONPR",
                submenus: {
                    htry : 'Historiques',
                    go: {
                        title: 'Direction général',
                        submenus: {
                            srtr: "Secrétariat",
                            csil: "Conseillers",
                            agc: "Agences",
                            ccrp: "Cellule communication et relations publiques",
                            ci: "Cellule informatique",
                            mc: "Médecin conseil",
                            actr: "Actuaire",
                            ai: "Audit interne",
                            btqa: "Bibliothèque et archives"
                        }
                    },
                    fao: {
                        title: 'Direction Administrative et Financière',
                        submenus: {
                            srtr: "Secrétariat",
                            spl: "Service du personnel et logistique",
                            sdrvrm: "Service de Recouvrement",
                            sc: "Service Comptable"
                        }
                    },
                    pd: {
                        title: 'Direction de préstation',
                        submenus: {
                            srtr: "Secrétariat",
                            sp: "Service des Pensions",
                            srp: "Service des Risques Professionnels"
                        }
                    },
                }
            },
            regime: {
                title: 'Nos Regimes',
                submenus: {
                    rrp: {
                        title: 'Regime des pensions',
                        submenus: {
                            pav: "Pension et allocation de vieillesse",
                            pas: "Pension et Allocation de Survivant",
                            pi: "Pension d'Invalidité",
                            pa: "Pension Anticipée",
                            cc: "Calcul des cotisations",
                            fcp: "Formule de calcul de la pension",
                            de: "Documents exigés"
                        }
                    },
                    rp: {
                        title: 'Regime des risques profesionnels',
                        submenus: {
                            pav: "Pension et allocation de vieillesse",
                            pas: "Pension et allocation de survivant"
                        }
                    }
                }
            },
            document: {
                title: 'Document téléchargeable',
                submenus: {
                    dl: 'Décret et lois',
                    ord: 'Ordonnance',
                    frmlr: 'Formulaire',
                    dcsdc: "Décision du conseil d'administration",
                    rglmtt: "Réglementation",
                    cvtn: "Conventions",
                    others: 'Autres'
                }
            }

        },
        en : {
            about: {
                title: "About ONPR",
                submenus: {
                    htry : 'Historiques',
                    go: {
                        title: 'General Management',
                        submenus: {
                            srtr: "Secretariat",
                            csil: "Advisors",
                            agc: "Agencies",
                            ccrp: "Communication and Public Relations departement",
                            ci: "IT departement",
                            mc: "Consulting physician",
                            actr: "Actuary",
                            ai: "Internal Audit",
                            btqa: "Library and archives"
                        }
                    },
                    fao: {
                        title: 'Administrative Department',
                        submenus: {
                            srtr: "Secretariat",
                            spl: "Personnel and Logistics Department",
                            sdrvrm: "Recovery Service",
                            sc: "Accounting Department"
                        }
                    },
                    pd: {
                        title: 'Delivery Direction',
                        submenus: {
                            srtr: "Secretariat",
                            sp: "Pensions service",
                            srp: "Professional risk service"
                        }
                    },
                }
            },
            regime: {
                title: 'Our Regimes',
                submenus: {
                    rrp: {
                        title: 'Pension Scheme',
                        submenus: {
                            pav: "Old-age pension and allowance",
                            pas: "Survivor's Pension and Allowance",
                            pi: "Invalidity Pension",
                            pa: "Advanced Pension",
                            cc: "Calculation of contributions",
                            fcp: "Formula for calculating the pension",
                            de: "Documents required"
                        }
                    },
                    rp: {
                        title: 'Occupational risk regime',
                        submenus: {
                            pav: "Old-age pension and allowance",
                            pas: "Pension and survivor's allowance"
                        }
                    }
                }
            },
            document: {
                title: 'Downloadable Document',
                submenus: {
                    dl: 'Decree and laws',
                    ord: 'Order',
                    frmlr: 'Form',
                    dcsdc: "Board Decision",
                    rglmtt: "Regulation",
                    cvtn: "Agreements",
                    others: 'Others'
                }
            }
        }
    }
}

console.log(Object.entries(Data))
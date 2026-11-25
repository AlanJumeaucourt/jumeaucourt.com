import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const SEO = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = language === "fr" ? "fr" : "en";

    // Update meta tags dynamically
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (isProperty) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Update title and description based on language
    const titles = {
      en: "Alan Jumeaucourt - DevOps / Cloud Engineer",
      fr: "Alan Jumeaucourt - Ingénieur DevOps / Cloud",
    };

    const descriptions = {
      en: "French DevOps / Cloud Engineer based in Bucharest. Focused on cloud platforms, infrastructure automation, Kubernetes, and reliable deployments. Explore my projects, experience, and technical skills.",
      fr: "Ingénieur DevOps / Cloud français basé à Bucarest. Spécialisé dans les plateformes cloud, l'automatisation d'infrastructure, Kubernetes et la fiabilité des déploiements. Découvrez mes projets, mon parcours et mes compétences.",
    };

    document.title = titles[language];
    updateMetaTag("title", titles[language]);
    updateMetaTag("description", descriptions[language]);
    updateMetaTag("og:title", titles[language], true);
    updateMetaTag("og:description", descriptions[language], true);
    updateMetaTag("og:locale", language === "fr" ? "fr_FR" : "en_US", true);
    updateMetaTag("twitter:title", titles[language]);
    updateMetaTag("twitter:description", descriptions[language]);
    updateMetaTag("DC.title", titles[language]);
    updateMetaTag("DC.description", descriptions[language]);
    updateMetaTag("DC.language", language === "fr" ? "fr" : "en");
  }, [language]);

  return null;
};

export default SEO;

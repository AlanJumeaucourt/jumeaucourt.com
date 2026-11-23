import { Cloud, GitBranch, Network, Server, ShieldCheck, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useInView } from "../hooks/useInView";

const Skills = () => {
  const { ref, isInView } = useInView();
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Technical & Professional Skills",
      categories: {
        cloud: {
          title: "Cloud & Containerization",
          skills: ["GCP", "S3NS", "GKE", "Kubernetes", "Docker", "Podman", "Helm"],
        },
        devops: {
          title: "DevOps & Automation",
          skills: ["GitLab CI/CD", "Argo CD", "Git", "Terraform", "Ansible", "Bash", "Python"],
        },
        systems: {
          title: "Systems & Infrastructure",
          skills: ["Linux/Debian", "VMware ESXi", "Proxmox", "Infrastructure as Code (IaC)"],
        },
        networking: {
          title: "Networking & Telecom",
          skills: ["TCP/IP", "SIP/VoIP", "DNS", "DHCP", "RADIUS", "Active Directory"],
        },
        security: {
          title: "Observability & Security",
          skills: ["Grafana", "Loki", "Mimir", "IAM", "TLS/SSL", "Artifactory"],
        },
        soft: {
          title: "Soft Skills",
          skills: [
            "Problem-Solving & Critical Thinking",
            "Teamwork & Collaboration",
            "Autonomy & Initiative",
            "Adaptability",
            "Organization & Prioritization",
            "Technical Communication",
          ],
        },
      },
    },
    fr: {
      title: "Compétences techniques et professionnelles",
      categories: {
        cloud: {
          title: "Cloud et conteneurisation",
          skills: ["GCP", "S3NS", "GKE", "Kubernetes", "Docker", "Podman", "Helm"],
        },
        devops: {
          title: "DevOps et automatisation",
          skills: ["GitLab CI/CD", "Argo CD", "Git", "Terraform", "Ansible", "Bash", "Python"],
        },
        systems: {
          title: "Systèmes et infrastructure",
          skills: ["Linux/Debian", "VMware ESXi", "Proxmox", "Infrastructure as Code (IaC)"],
        },
        networking: {
          title: "Réseaux et télécommunications",
          skills: ["TCP/IP", "SIP/VoIP", "DNS", "DHCP", "RADIUS", "Active Directory"],
        },
        security: {
          title: "Observabilité et sécurité",
          skills: ["Grafana", "Loki", "Mimir", "IAM", "TLS/SSL", "Artifactory"],
        },
        soft: {
          title: "Compétences relationnelles",
          skills: [
            "Résolution de problèmes et esprit critique",
            "Travail en équipe et collaboration",
            "Autonomie et initiative",
            "Adaptabilité",
            "Organisation et priorisation",
            "Communication technique",
          ],
        },
      },
    },
  };

  const skillCategories = [
    {
      key: "cloud",
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
    },
    {
      key: "devops",
      icon: <GitBranch className="w-8 h-8 text-blue-400" />,
    },
    {
      key: "systems",
      icon: <Server className="w-8 h-8 text-blue-400" />,
    },
    {
      key: "networking",
      icon: <Network className="w-8 h-8 text-blue-400" />,
    },
    {
      key: "security",
      icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    },
    {
      key: "soft",
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
  ] as const;

  return (
    <section id="skills" ref={ref} className={`py-16 section-fade ${isInView ? "in-view" : ""}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          {translations[language].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold ml-3 text-gray-100">
                  {translations[language].categories[category.key].title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {translations[language].categories[category.key].skills.map((skill, i) => (
                  <div
                    key={i}
                    className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-sm text-gray-300 transition-colors hover:border-blue-400/50 hover:bg-blue-400/20 hover:text-white"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

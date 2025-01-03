import { Helmet } from 'react-helmet';
import { useLanguage } from '../contexts/LanguageContext';

const Head = () => {
  const { language } = useLanguage();

  return (
    <Helmet>
      <html lang={language} />
      <title>Alan Jumeaucourt - DevOps Engineer & VOIP Expert</title>
      <meta name="description" content="DevOps Engineer & VOIP Expert based in Lyon, France. Specializing in infrastructure automation, VOIP solutions, and cloud architecture." />
      <meta name="keywords" content="DevOps, VOIP, Infrastructure, Cloud Architecture, Software Engineering, Lyon" />

      {/* Open Graph / Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Alan Jumeaucourt - DevOps Engineer & VOIP Expert" />
      <meta property="og:description" content="DevOps Engineer & VOIP Expert based in Lyon, France. Specializing in infrastructure automation, VOIP solutions, and cloud architecture." />
      <meta property="og:image" content="/images/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Alan Jumeaucourt - DevOps Engineer" />
      <meta name="twitter:description" content="DevOps Engineer & VOIP Expert based in Lyon, France" />

      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Theme Color */}
      <meta name="theme-color" content="#3b82f6" />
    </Helmet>
  );
};

export default Head;

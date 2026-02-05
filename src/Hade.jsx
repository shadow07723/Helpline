import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";

const Hade = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">MySite</h1>

      <div className="flex gap-6 items-center">
        <Link to="/">{t.home}</Link>
        <Link to="/about">{t.about}</Link>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-800 px-2 py-1 rounded"
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>
    </header>
  );
};

export default Hade;

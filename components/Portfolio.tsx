import Diplomes from "./portfolioinner/Diplomes";
import OtherDocuments from "./portfolioinner/OtherDocuments";
import Sertificats from "./portfolioinner/Sertificats";

const Portfolio = () => {
  return (
    <div className="pt-5">
      <h2 className="text-4xl text-green-900">Портфолио</h2>
      <Diplomes />
      <Sertificats />
      <OtherDocuments />
    </div>
  );
};

export default Portfolio;
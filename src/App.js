import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./main/dashboard/index.jsx";
import Data from "./main/dataset/index.jsx";
import DataVisualisation from "./main/dataVisualisation/index.jsx";
import DataCleaning from "./main/dataCleaning/index.jsx";
import DataTransform from "./main/dataTransform/index.jsx";
import Accuracy from "./main/Accuracy/index.jsx";
import OversamplingSMOTE from "./main/oversamplingSMOTE/index.jsx";
import About from "./main/about/index.jsx";
import ConfusionMatrix from "./main/confusionMatrix/index.jsx";
import RelatedWorks from "./main/relatedWorks/index.jsx";
import OversamplingADASYN from "./main/oversamplingADASYN/index.jsx";
import OversamplingSVMSMOTE from "./main/oversamplinSVMSMOTE/index.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />{" "}
        <Route path="/upload-file" element={<Data />} />{" "}
        <Route path="/data-visualisation" element={<DataVisualisation />} />{" "}
        <Route path="/data-cleaning" element={<DataCleaning />} />{" "}
        <Route path="/data-transform" element={<DataTransform />} />{" "}
        <Route path="/akurasi" element={<Accuracy />} />{" "}
        <Route path="/oversampling-smote" element={<OversamplingSMOTE />} />{" "}
        <Route path="/oversampling-smote-tomek" element={<OversamplingADASYN />} />{" "}
        <Route
          path="/oversampling-svm-smote"
          element={<OversamplingSVMSMOTE />}
        />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/confusion-matrix" element={<ConfusionMatrix />} />{" "}
        <Route path="/related-works" element={<RelatedWorks />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;

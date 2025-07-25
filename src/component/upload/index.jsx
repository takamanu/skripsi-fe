import React from "react";
import { Button, message } from "antd";

const App = () => {
  const handleStart = async () => {
    try {
      const response = await fetch("https://api-pdb.goodbuy.id/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch results");
      }

      const data = await response.json();

      message.success("Dataset processed successfully.");
      // accXGBoost": 0.7651006711409396,
      // "accXGBoostAndSmote": 0.8181818181818182,
      // "accXGBoostAndSmoteTomek": 0.864406779661017,

      localStorage.clear();
      localStorage.setItem("Dataset", JSON.stringify(data.datasetAfter));
      localStorage.setItem("DatasetAfter", JSON.stringify(data.datasetBefore));
      localStorage.setItem("DatasetLabelEncode", JSON.stringify(data.dataLabelEncode));
      localStorage.setItem("acc_SMOTE", JSON.stringify(data.accXGBoostAndSmote));
      localStorage.setItem("acc_SVM-SMOTE", JSON.stringify(data.accXGBoostAndSmoteTomek));
      localStorage.setItem("acc_ADASYN", JSON.stringify(data.accXGBoostAndSmoteTomek));
      localStorage.setItem("acc_RandomForest", JSON.stringify(data.accXGBoost));
      localStorage.setItem("dataFrame_SMOTE", JSON.stringify(data.df_Smote));
      localStorage.setItem("dataFrame_ADASYN", JSON.stringify(data.df_Adasyn));
      localStorage.setItem("dataFrame_SVMSMOTE", JSON.stringify(data.df_SvmSmote));

      // Optional: Debug log
      console.log("Received:", data);

    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to process dataset.");
    }
  };

  return (
    <Button type="primary" onClick={handleStart}>
      Start Processing Dataset
    </Button>
  );
};

export default App;

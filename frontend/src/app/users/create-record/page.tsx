"use client";
import React, { useState } from "react";

const MedicalRecordFormPage: React.FC = () => {
  const [formData, setformData] = useState({
    visitDate: "",
    medicalInstitution: "",
    visitReason: "",
    examinationContent: "",
    prescriptionPhoto: null,
    prescriptionText: "",
    nextVisitDate: "",
  });

  const [visitDateErrorMessage, setVisitDateErrorMessage] = useState("");
  const [medicalInstitutionErrorMessage, setMedicalInstitutionErrorMessage] =
    useState("");
  const [examinationContentErrorMessage, setExaminationContentErrorMessage] =
    useState("");
  // const [nextVisitDateErrorMessage,setNextVisitDateErrorMessage]=useState("");
  // 送信処理
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // エラーメッセージの初期化
    setVisitDateErrorMessage("");
    setMedicalInstitutionErrorMessage("");
    setExaminationContentErrorMessage("");
    // setNextVisitDateErrorMessage("");
    // エラーのチェック
    if (!formData.visitDate) {
      setVisitDateErrorMessage("通院日を入力してください");
    }
    if (!formData.medicalInstitution) {
      setMedicalInstitutionErrorMessage("医療機関名を入力してください");
    }
    if (!formData.examinationContent) {
      setExaminationContentErrorMessage("診察メモを入力してください");
    }
    // const emptyVisitDate=setVisitDateErrorMessage("通院日を入力してください");
    // const emptyMedicalInstitutionErrorMessage=setMedicalInstitutionErrorMessage("医療機関名を入力してください")
    // const emptyExaminationContent=setExaminationContentErrorMessage("診察メモを入力してください")

    // エラーメッセージがない場合に送信可能
    const enableSubmit =
      !visitDateErrorMessage &&
      !medicalInstitutionErrorMessage &&
      !examinationContentErrorMessage;
    if (enableSubmit) {
      // フォームデータを送信する処理をここに追加
      console.log("フォームデータを送信します", formData);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">送信</button>
    </form>
  );
};
export default MedicalRecordFormPage;

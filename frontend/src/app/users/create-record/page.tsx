"use client";
import React, { useState } from "react";
import { ApiUrl } from "./../../constants/url";

const MedicalRecordFormPage: React.FC = () => {
  // フォームに入力した内容をsetformDataで保存している
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

  const onSubmit = async (e: React.FormEvent) => {
    // フォームが送信される際にページがリロードされるデフォルトの動作を防いでいる
    e.preventDefault();
    // エラーメッセージの初期化
    setVisitDateErrorMessage("");
    setMedicalInstitutionErrorMessage("");
    setExaminationContentErrorMessage("");

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

    // エラーメッセージがない場合に送信可能
    const enableSubmit =
      !visitDateErrorMessage &&
      !medicalInstitutionErrorMessage &&
      !examinationContentErrorMessage;
    // クリックしてエラーに引っ掛からなければ、fetchで/api/users/create-recordへformDataを送っている
    if (enableSubmit) {
      try {
        const response = await fetch(
          `${ApiUrl.BASE_API_URL}/api/users/create-record`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), // formDataをJSONに変換
          }
        );
        // レスポンスの処理
        if (response.ok) {
          const returnBody = await response.json();
          console.log("成功:", returnBody);
          // データ送信成功時にアラートを表示
          alert("データ送信が成功しました！");
        } else {
          const errorResponse = await response.json();
          console.error("エラー:", errorResponse);
        }
      } catch (error) {
        console.error("送信中にエラーが発生しました:", error);
      }
    }
  };

  return (
    // フォームが送信されるたびにonSubmit関数が呼ばれる
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">送信</button>
    </form>
  );
};
export default MedicalRecordFormPage;

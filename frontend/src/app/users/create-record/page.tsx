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
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    <div className="mt-40 mx-20">
      <div className="flex justify-center mt-32 mx-10 mb-10">
        <form className="w-full max-w-2xl" onSubmit={onSubmit}>
          <p className="text-2xl text-black font-bold text-center mb-5">
            通院記録登録
          </p>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-visit-data"
              >
                通院日
                <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                  必須
                </text>
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                defaultValue=""
                placeholder="通院日"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-medicalInstitution"
              >
                医療機関名
                <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                  必須
                </text>
              </label>
            </div>

            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                defaultValue=""
                placeholder="医療機関名"
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
                通院理由
                {/* <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                  必須
                </text> */}
              </label>
            </div>
            {/* 選択式にしたい */}
            {/* <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="email"
                value={email}
                defaultValue=""
                placeholder="例) example@gmail.me"
                
              />
            </div> */}
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
                検査内容・医師の診察内容
                <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                  必須
                </text>
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                defaultValue=""
              />
            </div>
          </div>
          {/* 写真 */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
                処方箋
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                defaultValue=""
              />
            </div>
          </div>
          {/* 処方箋　手打ち */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
                処方されたお薬
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                defaultValue=""
              />
            </div>
          </div>
          {/* 次回通院日 */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
                次回退院日
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                defaultValue=""
              />
            </div>
          </div>
          <div className="flex justify-center">
            {isSubmitted ? (
              <div>
                <p className="text-green-500 text-lg text-bold">
                  通院記録を登録しました
                </p>
              </div>
            ) : (
              <button
                className={
                  "py-3 lg:py-3 px-14 lg:px-14 text-white-500 font-bold rounded-3xl bg-blue-400 hover:shadow-teal-md transition-all outline-none text-white"
                }
                type="submit"
              >
                送信
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

//     // フォームが送信されるたびにonSubmit関数が呼ばれる
//     <form onSubmit={onSubmit}>
//       <input type="text" name="name" />
//       <button type="submit">送信</button>
//     </form>
//   );
// };
export default MedicalRecordFormPage;

"use client";
import InputDate from "@/components/InputDate";
import InputDateTime from "@/components/InputDateTime";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ApiUrl } from "./../../constants/url";

const MedicalRecordFormPage: React.FC = () => {
  // フォームに入力した内容をsetformDataで保存している

  // 初期値の設定
  const [formData, setformData] = useState({
    // visitDate: "",
    medicalInstitution: "",
    visitReason: "",
    examinationContent: "",
    prescriptionPhoto: null,
    prescriptionText: "",
    // nextVisitDate: "",
  });
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    // null
    new Date()
  );
  // new Date()はコードが実行された時点での日時を示す
  // selectedDateは日付と時刻を保持する変数
  // setSelectedDateTimeはselectedDateTimeの値を更新する関数
  const [selectedDateTime, setSelectedDateTime] = React.useState<Date | null>(
    null
    // new Date()
  );

  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [visitDateErrorMessage, setVisitDateErrorMessage] = useState("");
  const [medicalInstitutionErrorMessage, setMedicalInstitutionErrorMessage] =
    useState("");
  const [examinationContentErrorMessage, setExaminationContentErrorMessage] =
    useState("");

  const onSubmit = async (e: React.FormEvent) => {
    // フォームが送信される際にページがリロードされるデフォルトの動作を防いでいる
    e.preventDefault();
    // エラーメッセージの初期化
    // setVisitDateErrorMessage("");
    setMedicalInstitutionErrorMessage("");
    setExaminationContentErrorMessage("");

    // エラーのチェック
    // if (!formData.visitDate) {
    //   setVisitDateErrorMessage("通院日を入力してください");
    // }
    if (!formData.medicalInstitution) {
      setMedicalInstitutionErrorMessage("医療機関名を入力してください");
    }
    if (!formData.examinationContent) {
      setExaminationContentErrorMessage("診察メモを入力してください");
    }

    // エラーメッセージがない場合に送信可能
    const enableSubmit =
      // !visitDateErrorMessage &&
      !medicalInstitutionErrorMessage && !examinationContentErrorMessage;

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
              <label className="block text-black font-bold md:text-left mb-1 md:mb-0 pr-4">
                通院日
                <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                  必須
                </text>
              </label>
            </div>
            <div className="md:w-2/3">
              {/* 作成したコンポーネントをインポートして当てる、InputDateTime */}
              <InputDate
                selectedDate={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-black font-bold md:text-left mb-1 md:mb-0 pr-4"
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
                onChange={(e) =>
                  setformData({
                    ...formData,
                    medicalInstitution: e.target.value,
                  })
                }
              />
              {medicalInstitutionErrorMessage && (
                <p className="text-red-500">{medicalInstitutionErrorMessage}</p>
              )}
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black font-bold md:text-left mb-1 md:mb-0 pr-4">
                通院理由
              </label>
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black font-bold md:text-left mb-1 md:mb-0 pr-4">
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
                onChange={(e) =>
                  setformData({
                    ...formData,
                    examinationContent: e.target.value,
                  })
                }
              />
              {examinationContentErrorMessage && (
                <p className="text-red-500">{examinationContentErrorMessage}</p>
              )}
            </div>
          </div>
          {/* 写真 */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black font-bold md:text-left mb-1 md:mb-0 pr-4">
                処方箋
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                defaultValue=""
                onChange={(e) =>
                  setformData({ ...formData, prescriptionText: e.target.value })
                }
              />
            </div>
          </div>
          {/* 処方箋　手打ち */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black font-bold md:text-left mb-1 md:mb-0 pr-4">
                処方されたお薬
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                defaultValue=""
                onChange={(e) =>
                  setformData({ ...formData, prescriptionText: e.target.value })
                }
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black font-bold md:text-left mb-1 md:mb-0 pr-4">
                次回通院予定
              </label>
            </div>
            <div className="md:w-2/3">
              <InputDateTime
                selectedDateTime={selectedDateTime}
                // 新しい日付を受け取る関数　(date)は新しく渡される日付
                // setSelectedDateTime(date)関数でSelectedDateを更新する
                onChange={(dateTime) => setSelectedDateTime(dateTime)}
              />
              {/* <div>
                選択された時刻: <b>{formatSelectedTime(selectedDate)}</b>
              </div> */}
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              登録する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedicalRecordFormPage;

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
 * @param selectedDate - 選択された日付と時刻
 * @param onChange - 日付と時刻が変更されたときのコールバック関数
 */
type InputDateTimeProps = {
  selectedDateTime: Date | null;
  onChange: (dateTime: Date | null) => void;
};

// ユーザーが日付を選択できる入力フォームを提供するコンポーネント
// {}は分割代入。親コンポーネントから渡された props オブジェクトから
// selectedDate と onChange という2つのプロパティを直接取り出す
// onChangeは親コンポーネントに新しい日付を渡す
const InputDateTime: React.FC<InputDateTimeProps> = ({
  selectedDateTime,
  onChange,
}) => {
  return (
    // 日時を選択できるカレンダーと時間選択のUI
    <DatePicker
      selected={selectedDateTime}
      // 日付が変更されたときに発火するイベントハンドラ
      //  onChangeが発火すると選択された日付dateがonChangeの引数として渡される
      onChange={(dateTime) => onChange(dateTime)}
      // 時間選択を可能にする
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MM/dd/yyyy h:mm aa"
      className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
    />
  );
};
export default InputDateTime;

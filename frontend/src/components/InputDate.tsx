import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/**
 * @param selectedDate - 選択された日付と時刻
 * @param onChange - 日付と時刻が変更されたときのコールバック関数
 */
type InputDateProps = {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  //   initialDate?: Date | null;
};

// ユーザーが日付を選択できる入力フォームを提供するコンポーネント
// {}は分割代入。親コンポーネントから渡された props オブジェクトから
// selectedDate と onChange という2つのプロパティを直接取り出す
// onChangeは親コンポーネントに新しい日付を渡す
const InputDate: React.FC<InputDateProps> = ({
  selectedDate,
  onChange,
  //   initialDate,
}) => {
  return (
    // 日時を選択できるカレンダーと時間選択のUI
    <DatePicker
      // selectedDateがないときはinitialDateを使用

      selected={selectedDate}
      onChange={(date) => onChange(date)}
      dateFormat=" yyyy MMMM d"
      timeCaption="Time"
    />
  );
};
export default InputDate;

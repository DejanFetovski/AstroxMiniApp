import { useNavigate } from "react-router-dom";
import AskInput from "../../components/AskInput";
import BackIcon from "../../svgs/BackIcon";
import BubbleMessage from "../../components/BubbleMessage";
import SampleQuestion from "./SampleQuestion";

const Agent = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/horoscope");
  };

  return (
    <div className="relative h-screen flex flex-col justify-end gap-[20px] px-6 pt-[30px] pb-[28px]">
      <img
        src="assets/images/diagram.png"
        className="absolute top-0 right-0"
      ></img>
      <div className="" onClick={handleBack}>
        <BackIcon />
      </div>
      <div className="relative flex flex-col gap-4 overflow-auto">
        <BubbleMessage
          message="sdfsfsjdlfkjsldfjsldfjsldjfsldjflsjdfsldfsdfsfsjdlfkjsldfjsldfjsldjfsldjflsjdfsldfjsldjflsdjflsdjflsjdfgdfjgldjfgldjfgldjfgljdflgjdfljsldjflsdjflsdjflsjdfgdfjgldjfgldjfgldjfgljdflgjdfl"
          type="start"
        />
        <BubbleMessage
          message="sdfsfsjdlfkjsldfjsldfjsldjfsldjflsjdfsldfsdfsfsjdlfkjsldfjsldfjsldjfsldjflsjdfsldfjsldjflsdjflsdjflsjdfgdfjgldjfgldjfgldjfgljdflgjdfljsldjflsdjflsdjflsjdfgdfjgldjfgldjfgldjfgljdflgjdfl"
          type="end"
        />
        <BubbleMessage
          message="sdfsfsjdlfkjsldfjsldfjsldjfsldjflsjdfsldfsdfsfsjdlfkjsldfjsldfjsldjfsldjflsjdfsldfjsldjflsdjflsdjflsjdfgdfjgldjfgldjfgldjfgljdflgjdfljsldjflsdjflsdjflsjdfgdfjgldjfgldjfgldjfgljdflgjdfl"
          type="start"
        />
        <BubbleMessage
          message="sdfsfsjdlfkjsldfjsldfjsldjfsldjflsjdfsldfsdfsfsjdlfkjsldfjsldfjsldjfsldjflsjdfsldfjsldjflsdjflsdjflsjdfgdfjgldjfgldjfgldjfgljdflgjdfljsldjflsdjflsdjflsjdfgdfjgldjfgldjfgldjfgljdflgjdfl"
          type="end"
        />
        <BubbleMessage
          message="sdfsfsjdlfkjsldfjsldfjsldjfsldjflsjdfsldfsdfsfsjdlfkjsldfjsldfjsldjfsldjflsjdfsldfjsldjflsdjflsdjflsjdfgdfjgldjfgldjfgldjfgljdflgjdfljsldjflsdjflsdjflsjdfgdfjgldjfgldjfgldjfgljdflgjdfl"
          type="start"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <SampleQuestion question="What is the best time to take a major decision?"></SampleQuestion>
        <SampleQuestion question="How can I find more meaning?"></SampleQuestion>
        <SampleQuestion question="What is my lucky number?"></SampleQuestion>
        <SampleQuestion question="Where does my potential lie?"></SampleQuestion>
      </div>
      <AskInput />
    </div>
  );
};

export default Agent;
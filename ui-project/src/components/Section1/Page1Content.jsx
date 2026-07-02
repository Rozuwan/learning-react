import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = () => {
  return (
    <div className="py-3 px-12 flex items-center gap-20 h-[90vh] ">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Page1Content;

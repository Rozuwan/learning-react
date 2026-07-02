import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  return (
    <div className="py-3 px-12 flex items-center gap-20 h-[90vh] ">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;

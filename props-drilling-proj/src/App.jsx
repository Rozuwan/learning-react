import Card from "./components/Card";
const App = () => {
  const jobData = [
    {
      id: 1,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/960px-Google_Favicon_2025.svg.png",
      company: "Google",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Bangalore, India",
    },
    {
      id: 2,
      brandLogo:
        "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      company: "Meta",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Mumbai, India",
    },
    {
      id: 3,
      brandLogo:
        "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
      company: "Amazon",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Hyderabad, India",
    },
    {
      id: 4,
      brandLogo: "https://www.freeiconspng.com/uploads/apple-icon-27.png",
      company: "Apple",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Cupertino, USA",
    },
    {
      id: 5,
      brandLogo:
        "https://fellowstudio.com/wp-content/uploads/2023/08/Netflix-Logo-2006-500x333-1.png",
      company: "Netflix",
      post: "Backend Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Los Angeles, USA",
    },
    {
      id: 6,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZuiSqCnUtaQSq1-BUT5sjAWVMZRaNpd-LA&s",
      company: "Microsoft",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Seattle, USA",
    },
    {
      id: 7,
      brandLogo: "https://static.cdnlogo.com/logos/a/90/adobe.png",
      company: "Adobe",
      post: "Product Designer",
      tag1: "Remote",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Noida, India",
    },
    {
      id: 8,
      brandLogo:
        "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/openai-wx0xqojo8lrv572wcvlcb.png/openai-twkvg10vdyltj9fklcgusg.png?_a=DATAiZiuZAA0",
      company: "OpenAI",
      post: "Full Stack Developer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "San Francisco, USA",
    },
  ];
  return (
    <>
      <div className="parent">
        {jobData.map(function (e) {
          return (
            <Card
              brandLogo={e.brandLogo}
              company={e.company}
              post={e.post}
              tag1={e.tag1}
              tag2={e.tag2}
              pay={e.pay}
              location={e.location}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;

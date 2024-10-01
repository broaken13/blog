export default function Education(props: {
  education: {
    school: string;
    degree: string;
    study: string;
    graduationDate: string;
  };
}) {
  const education = props.education;
  return (
    <div className="w-full">
      <h3 className="text-3xl text-center underline">Education:</h3>
      <div className="flex justify-around pt-4">
        <h4 className="text-2xl">{education.school}</h4>
        <p className="text-xl">{education.graduationDate}</p>
      </div>
      <p className="text-xl text-center pb-12">
        {education.degree} in {education.study}
      </p>
    </div>
  );
}

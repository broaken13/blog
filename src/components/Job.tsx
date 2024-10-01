export default function Job(props: {
  job: {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
  };
}) {
  const job = props.job;
  return (
    <div className="w-full lg:w-1/3">
      <h3 className="text-3xl text-teal-500 underline">{job.title}</h3>
      <h5 className="text-xl">{job.company}</h5>
      <p>
        From {job.startDate} to {job.endDate}
      </p>
      <h5>Responsibilities:</h5>
      <ul className="list-disc list-outside pl-12">
        {job.responsibilities.map((r, index) => (
          <li key={index}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

import Education from "./components/Education";
import Header from "./components/Header";
import Job from "./components/Job";
import resume from "./resume.json";

export default function App() {
  return (
    <>
      <Header />
      <main className="p-4 flex flex-col content-center justify-center">
        <h2 className="text-5xl underline text-center">Work Experience</h2>
        <div className="flex flex-col gap-8 items-center pt-12 w-full lg:w-1/2 xl:w-1/3 mx-auto">
          {resume.jobHistory.map((job) => (
            <Job job={job} key={job.title} />
          ))}
          <Education education={resume.education} />
        </div>
      </main>
    </>
  );
}

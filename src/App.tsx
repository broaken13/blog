import Header from "./components/Header";
import Job from "./components/Job";
import resume from "./resume.json";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <h2 className="text-2xl underline">Work Experience</h2>
        <div className="flex flex-col gap-8 items-center pt-12">
          {resume.jobHistory.map((job) => (
            <Job job={job} key={job.title} />
          ))}
        </div>
      </main>
      <img className="mt-12 mx-auto" src="./under_construction.png" />
    </>
  );
}

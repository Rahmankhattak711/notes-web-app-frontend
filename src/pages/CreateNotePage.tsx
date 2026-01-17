import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import CreateNoteForm from "../components/CreateNoteForm";

const CreateNotePage = ({ user }: any) => {
  return (
    <section className="w-full h-screen flex">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <CreateNoteForm />
          </div>
        </main>
      </div>
    </section>
  );
};

export default CreateNotePage;

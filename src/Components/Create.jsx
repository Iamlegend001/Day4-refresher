import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const Create = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();
    setTodos([...todos, data]);
    toast.success("✅ Task Created");
    reset();
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-white mb-6 tracking-wide">
        Create New Task
      </h1>
      <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-6">
        <div>
          <input
            {...register("title", { required: "Title cannot be empty" })}
            type="text"
            placeholder="What's on your mind?"
            className="w-full px-5 py-3 bg-black/40 text-white placeholder-gray-400 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm shadow-inner shadow-black"
          />
          <small className="text-red-500 text-sm">
            {errors?.title?.message}
          </small>
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white font-medium rounded-lg bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-pink-600/40"
        >
          ➕ Add Task
        </button>
      </form>
    </div>
  );
};

export default Create;

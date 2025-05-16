import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();

    const copytodos = [...todos, data];
    setTodos(copytodos);

    toast.success("Todo Created")
    reset();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Create New Task</h1>
      <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-4">
        <div>
          <input
            {...register("title", { required: "Title cannot be empty" })}
            type="text"
            placeholder="Enter task title"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <small className="text-red-500 text-sm">
            {errors?.title?.message}
          </small>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Create;

import validationErrorForm from '../helpers/validationsErrorForm';
import useForm from '../hooks/useForm';
import { Loading } from './Loading';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

export const Form = () => {
  const {
    values,
    error,
    loading,
    setLoading,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useForm(INITIAL_STATE, validationErrorForm, createAccount);

  const { name, email, password } = values;

  function createAccount() {
    setLoading(true);
    setTimeout(() => {
      console.log('Creando cuenta...');

      setLoading(false);
    }, 3000);
  }

  return (
    <>
      <h1 className="text-3xl text-center text-indigo-600 font-bold">
        Hook Formulario
      </h1>

      <section className=" flex justify-center items-center h-full ">
        <form
          className=" w-2/4  shadow-md p-5 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="mt-5 flex gap-3 items-center ">
            <label className="font-bold text-lg w-24" htmlFor="">
              Nombre:
            </label>
            <div className="flex w-full">
              <span className="inline-flex items-center px-3 text-sm text-gray-200 rounded-l-md border  border-gray-300 bg-gray-800 dark:text-gray-400 dark:border-gray-600">
                A
              </span>
              <input
                type="text"
                placeholder="Ingrese su Nombre"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border-2 border-gray-200 w-full p-2 rounded-r-md placeholder-gray-300  hover:border-indigo-500  focus:outline-indigo-600 "
                required
              />
            </div>
          </div>
          {error.name && (
            <p className="text-red-600 font-bold text-sm">{error.name}</p>
          )}
          <div className="mt-5 flex gap-3 items-center ">
            <label className="font-bold text-lg w-24" htmlFor="">
              Email:
            </label>
            <div className="flex w-full">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md border  border-gray-300 bg-gray-800 dark:text-gray-400 dark:border-gray-600">
                @
              </span>
              <input
                type="email"
                placeholder="Ingrese su Correo"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border-2 p-2 w-full rounded-r-md placeholder-gray-300 hover:border-indigo-500  focus:outline-indigo-600 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-red-500 invalid:text-red-600
                focus:invalid:border-red-500 focus:invalid:ring-red-500"
                required
              />
            </div>
          </div>
          {error.email && (
            <p className="text-red-600 font-bold text-sm">{error.email}</p>
          )}
          <div className="mt-5 flex gap-3 items-center ">
            <label className="font-bold text-lg w-24 " htmlFor="">
              Password:
            </label>
            <div className="flex w-full">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md border  border-gray-300 bg-gray-800 dark:text-gray-400 dark:border-gray-600">
                **
              </span>
              <input
                type="password"
                placeholder="Ingrese su Password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border-2 p-2 w-full rounded-r-md placeholder-gray-300 hover:border-indigo-500  focus:outline-indigo-600"
                required
              />
            </div>
          </div>
          {error.password && (
            <p className="text-red-600 font-bold text-sm">{error.password}</p>
          )}

          {loading ? (
            <Loading />
          ) : (
            <input
              type="submit"
              value="Enviar"
              className="bg-indigo-600 hover:bg-indigo-700 p-3 text-white font-bold rounded-md mt-5 w-full uppercase cursor-pointer"
            />
          )}
        </form>
      </section>
    </>
  );
};

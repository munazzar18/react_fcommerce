import Link from "next/link";
import { cookies } from "next/headers";

const Login = () => {
  const url = "http://localhost:5005/api/";

  const login = async (formData: FormData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");

    // Validate the form data and save it to the database

    const res = await fetch(`${url}auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const auth = await res.json();

    const token = auth.data.access_token;

    cookies().set("token", token);
  };
  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-orange-300 to-rose-300">
            <form action={login} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a className="label-text-alt link link-hover text-white text-lg font-semibold">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-rose-400 to-orange-300 text-white text-lg font-semibold"
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center">
                <label className="label">
                  <span className="label-text text-white text-lg font-semibold">
                    Create a new account ?
                    <span className="mx-3 text-red-800 text-lg font-semibold">
                      <Link href={"/register"}>Register</Link>
                    </span>
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
